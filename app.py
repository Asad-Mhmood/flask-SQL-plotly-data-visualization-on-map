from flask import Flask,render_template,request,redirect

import pandas as pd
import plotly.io as pio
import numpy as np
import plotly.express as px
import matplotlib.pyplot as plt
import tempfile
import plotly.graph_objects as go
import plotly.offline as pyo
import mysql.connector
app = Flask(__name__)
app.secret_key = 'secret'
con=mysql.connector.connect(host="localhost",user="root",password="",database="registrat")
cursor = con.cursor()



@app.route('/')
def index():
    return render_template('login.html')

@app.route('/register')
def register():
    return render_template('register.html')

@app.route('/perform_registration',methods=['post'])
def perform_registration():
    name = request.form.get('user_ka_name')
    email = request.form.get('user_ka_email')
    password = request.form.get('user_ka_password')

    cursor.execute("""SELECT * FROM `user` WHERE `email` LIKE  '{}' """.format(email))
    member = cursor.fetchall()
    if len(member)>0:
        return render_template('register.html', message="Email already exists")
    else:
        cursor.execute("""INSERT INTO `user` (`id`,`name`,`email`,`password`)VALUES
        (NULL,'{}','{}','{}')""".format(name,email,password))
        con.commit()
        return render_template('login.html',message="Registration Successful. Kindly login to proceed")

@app.route('/perform_login',methods=['post'])
def perform_login():
    email = request.form.get('user_ka_email')
    password = request.form.get('user_ka_password')

    cursor.execute("""SELECT * FROM `user` WHERE `email` LIKE  '{}' AND `password` LIKE  '{}' """
                   .format(email,password))
    users = cursor.fetchall()
    print(users)
    if len(users)>0:
        return redirect('/profile')
    else:
        return render_template('login.html',message='Incorrect Email/Password')

@app.route('/profile')
def profile():

    return render_template('profile.html')


@app.route('/perform_profile',methods=['post'])
def perform_profile():

    a = request.form.get('country')
    c = request.form.get('city')
    d = request.form.get('location')
    e = request.form.get('area_type')
    f = request.form.get('purpose')
    g = request.form.get('Property_type')


    data=pd.read_csv("zameen-updated.csv")
    data['date_added'] = pd.to_datetime(data['date_added'])  # convert the datetime column into datetime data type
    data['country'] = 'Pakistan'  # Add new coloumn with the name of country

    def country(b):
        """
        This function filter the entire data according to country. Which selected by user
        :return:
        """

        # if some one select - it means no change occur in data frame
        if b == '-':
            data
        else:
            data[data['country'] == b]
        print(data)

    def city(b):
        """
        This function give option to the user to select city and filter data accordingly
        :return:
        """

        if b == '-':
            city.data1 = data
        else:
            city.data1 = data[data['city'] == b]



    def location(b):
        """
        This function give option to the user to select the location and filter data accordngly
        :return:
        """
        data = city.data1

        # If someone select - than no change occur in upper filtered data frame
        if b == '-':
            location.data2 = city.data1
        else:
            location.data2 = data[data['location'] == b]


    def area_type(b):
        """
        This function give option to user to select area type
        :return:
        """
        data = location.data2

        # if some one select - than no change occur in upper filtered data frame
        if b == '-':
            area_type.data3 = location.data2
        else:
            area_type.data3 = data[data['Area Type'] == b]


    def purpose(b):
        """
        This function give option to the user to select the purpose.
        :return:
        """
        data = area_type.data3

        if b == '-':
            purpose.data4 = area_type.data3
        else:
            purpose.data4 = data[data['purpose'] == b]


    def property_type(b):
        """
        This function give option to select the property tpye
        :return:
        """
        data = purpose.data4
        # create list for property type option

        if b== '-':

            property_type.data5 = purpose.data4
        else:
            property_type.data5 = data[data['property_type'] == b]



    country(a)
    city(c)
    location(d)
    area_type(e)
    purpose(f)
    property_type(g)

    data7 = property_type.data5


    fig = px.scatter_mapbox(data7, lat="latitude", lon="longitude", color='province_name',
                            zoom=4, size_max=35, mapbox_style="carto-positron", width=1200, height=700,
                            hover_name='city')

    # Convert the map plot to HTML
    map_html = pyo.plot(fig, include_plotlyjs=False, output_type='div')

    # Render the HTML template with the map
    return render_template('map.html', map=map_html)





app.run(debug=True)