
    var countryOptions = ["-", "Pakistan"];
    var cityOptions = ["-", "Faisalabad", "Islamabad", "Karachi", "Lahore", "Rawalpindi"];
    var locationOptions = ["-", "12th Avenue", "204 Chak Road", "7th Avenue", "9th Avenue", "AGHOSH", "APP Employees Co-operative Housing Society", "AR Cottages", "ASF Housing Scheme", "ASF Tower", "AWT Army Welfare Trust", "Aabpara Coop Housing Society", "Aashiana Road", "Abbaspur", "Abdali Road", "Abdalians Cooperative Housing Society", "Abdul Sattar Edhi Road", "Abdullah Ahmed Road", "Abdullah City", "Abdullah Garden", "Abdullah Haroon Road", "Abdullah Town", "Abdullahpur", "Abid Majeed Road", "Abid Market", "Abid Town", "Abu Alkhair Road", "Abul Hassan Isphani Road", "Acro Green - Bankers Avenue", "Adan Villas", "Adiala Road", "Affandi Colony", "Afghanabad", "Afshan Colony", "Afzal Park", "Agha Shahi Avenue", "Agrics Town", "Agro Farming Scheme", "Ahbab Colony", "Ahlu Road", "Ahmad Abad", "Ahmad Avenue", "Ahmad Housing Society", "Ahmadabad", "Ahmed Town", "Ahsan Grand City", "Air Avenue City", "Air Force Housing Society", "Airline Avenue", "Airline Housing Society", "Airport", "Airport Avenue Housing Society", "Airport Enclave", "Airport Housing Society", "Airport Road", "Aisha Manzil", "Aitchison Society", "Aiza Garden", "Akalgarh", "Akbar Chowk", "Akbar Colony", "Akbar Town", "Al Barkat Villas", "Al Faisal Town", "Al Fajar Society", "Al Fayaz Colony", "Al Hafeez Gardens", "Al Hamad Colony", "Al Hamra Town", "Al Haram Garden", "Al Huda Town", "Al Jalil Garden", "Al Jameel Housing Scheme", "Al Jannat Housing Scheme", "Al Kareem Garden", "Al Madina Avenue", "Al Masoom Town", "Al Najaf Colony", "Al Noor Garden", "Al Noor Town", "Al Qaim Town", "Al Raheem Town", "Al Rahim Homes", "Al Rehman Garden", "Al Rehmat Villas", "Al-Amin Housing Society", "Al-Falah Cooperative Housing Society", "Al-Hafeez Garden Road", "Al-Hafiz Town", "Al-Hamad Colony (AIT)", "Al-Hamd Garden", "Al-Hamd Park", "Al-Haram City - Phase 2", "Al-Hilal Society", "Al-Jadeed Residency", "Al-Jannat Housing Society - Kahna", "Al-Kabir Town", "Al-Kareem Premier Housing Scheme", "Al-Manzar Society", "Al-Noor Colony", "Al-Raheem Garden", "Al-Raziq Garden", "Al-Safaa Garden", "Al-Wahab Garden - Phase 1", "Alfalah Town", "Alhamra Avenue", "Ali Abad", "Ali Alam Garden", "Ali Garden", "Ali Housing Colony", "Ali Pur", "Ali Town", "Ali View Garden", "Ali View Park", "Alia Town", "Alipur Farash", "Allahabad Road", "Allama Iqbal Colony", "Allama Iqbal Intl Airport", "Allama Iqbal Road", "Allama Iqbal Town", "Alpha Society", "Altaf Colony", "Altaf Hussain Road", "Aman Town", "Amarpura", "Ameen Park", "Ameen Town", "Ameer-ud-Din Park", "Amer Pura", "Amil Colony", "Amin Town", "Amina Park", "Amir Khusro", "Amir Town", "Anarkali", "Anda Mor Road", "Angoori Bagh", "Aqsa Town", "Architects Engineers Housing Society", "Aria Mohalla", "Army Officers Colony", "Arsalan Town", "Asghar Mall Road", "Ashiana-e-Quaid Housing Scheme", "Ashraf Colony", "Ashraf Garden", "Ashrafi Town", "Asif Colony", "Asif Town", "Asim Town", "Askari", "Askari 1", "Askari 10", "Askari 11", "Askari 12", "Askari 13", "Askari 14", "Askari 15", "Askari 2", "Askari 3", "Askari 4", "Askari 5", "Askari 7", "Askari 8", "Askari 9", "Aslam Shaheed Road", "Atari Saroba", "Ataturk Avenue", "Athal", "Atomic Energy Employee Society", "Audit & Accounts Housing Society", "Awan Town", "Ayub Colony", "Ayub National Park", "Azadi Chowk", "Azam Gardens", "Azam Town", "Azeem Garden Shahdara", "Azeem Town", "Azizabad", "Azmat Town", "B-17", "BMCHS", "BOR - Board of Revenue Housing Society", "Baba Fareed Road", "Babar Colony", "Babu Sabu", "Babuwala", "Badami Bagh", "Badar Colony", "Bagarian", "Bagh Sardaran", "Bagh-e-Korangi", "Baghbanpura", "Bahadurabad", "Bahar Colony", "Bahar Shah Road", "Bahria Education & Medical City", "Bahria Nasheman", "Bahria Orchard", "Bahria Town", "Bahria Town Karachi", "Bahria Town Rawalpindi", "Bait-ul-Raza Colony", "Bakar Mandi Road", "Bakra Mandi", "Baldia Town", "Baloch Colony", "Banaras Colony", "Band Road", "Bangash Colony", "Bani Gala", "Bankers Co-operative Housing Society", "Bankers Colony", "Bankers Town", "Banni Chowk", "Batapur", "Bath Island", "Bawa Chack 120 JB", "Beacon House Society", "Beadon Road", "Beaumont Road", "Bedian Road", "Begampura", "Begum Kot", "Bethsaida Colony", "Bhagatpura", "Bhaini Road", "Bhara kahu", "Bhatta Chowk", "Bhatti Colony", "Bhogiwal", "Bhogiwal Road", "Bilal Colony", "Bilal Gunj", "Bilal Nagar", "Bilal Road", "Bilal Town", "Bin Qasim Town", "Birdwood Road", "Bismillah Housing Scheme", "Blue Area", "Blue Bell Residency", "Bokra Road", "Bostan Road", "Bostan Valley", "Britto Road", "Budduke Manak Road", "Burj Mandi", "Burma Town", "C-14", "C-18", "C-19", "CBR Town", "CBR Town Phase 2", "CMH Road", "Caltex Road", "Canal Bank Housing Scheme", "Canal Burg", "Canal Expressway", "Canal Fort II", "Canal Garden", "Canal Park", "Canal Road", "Canal View", "Canal View Hosuing Scheme", "Canalberg Housing Society", "Cantt", "Cantt View Society", "Capital Awami Villas", "Capital Enclave", "Capital Smart City", "Catholic Colony", "Cavalry Ground", "Central Avenue", "Central Park Housing Scheme", "Chah Miran", "Chah Sultan", "Chak 208 RB Dogranwala", "Chak 208 Road", "Chak 209 RB Akalgarh", "Chak 279/RB Kalan", "Chak 8 JB Punj Garain", "Chak Bahga", "Chak Jhumra", "Chak Shahzad", "Chakbeli Road", "Chaklala", "Chaklala Scheme", "Chakra", "Chakra Road", "Chakri", "Chakri Road", "Chaman Park", "Chandni Chowk", "Chanman Abad", "Chapal Courtyard", "Chapal Skymark", "Chapal Uptown", "Chatha Bakhtawar", "Chattar", "Chauburji", "Chauburji Chowk", "Chauburji Park Road", "Chaudhary Colony", "Chaudhary Jan Colony", "Chaudhary Park", "Chaudhary Wilayat Khan Road", "Chen One Road", "Chenab Gardens", "Chibban", "China Scheme", "Chinar Bagh", "Chirah", "Chohan Road", "Chungi Amar Sadhu", "Chungi No. 22 Road", "Chur Chowk", "Circular Road", "Citi Housing Society", "City Garden", "City Villas", "Civil Defence", "Civil Lines", "Clifton", "Clifton Colony", "Clifton Township", "Club Road", "College Road", "Combo Colony", "Commercial Market", "Committee Chowk", "Cooper Road", "Cosmopolitan Society", "Cotton Export Cooperative Housing Society", "Country Homes", "Crescent Town", "Cricket Stadium Road", "Cricketer Villas", "Cutchi Memon Cooperative Housing Society", "D Ground", "D Type Colony", "D-12", "D-13", "D-14", "D-17", "D-18", "DAV College Road", "DHA 11 Rahbar", "DHA City", "DHA City Karachi", "DHA Defence", "Daewoo Road", "Dalmia Cement Factory Road", "Damba", "Daniyal Town", "Daroghewala", "Dars Baray Mian", "Darul Aman Society", "Dastgir Colony", "Data Darbar Road", "Data Ganj Bakhsh Road", "Data Ganj Bakhsh Town", "Davis Road", "Defence Colony", "Defence Fort", "Defence Fort Housing Scheme", "Defence Garden", "Defence Road", "Defence View Society", "Delhi Colony", "Dhabeji", "Dhamyal Road", "Dhandharan Chak 66 JB", "Dhanola", "Dharampura", "Dheri Hassanabad", "Dhok Babu Irfan", "Dhok Chaudhrian", "Dhok Chiragh Din", "Dhok Elahi Baksh", "Dhok Gujran", "Dhok Hukamdad", "Dhok Kala Khan", "Dhok Kashmirian", "Dhok Mangtal", "Dhok Mustaqeem Road", "Dhok Naju", "Dhok Paracha", "Dhok Piran Faqiran", "Dhok Sayedan Road", "Dhoke Banaras Road", "Dhoke Dalal Road", "Dhoke Gangal", "Dhoke Hassu", "Dhoke Khabba", "Dhoke Munshi Khan", "Dhoke Ratta", "Dhoke Syedan", "Dholanwal", "Dhudi Wala", "Diamond City", "Diglus Pura", "Dijkot Road", "Dilawar Colony", "Diplomatic Enclave", "Divine Gardens", "Divine Homes", "Doctors Housing Society", "Dogech", "Dr Daud Pota Road", "Dream Avenue Lahore", "Dream Villas", "Dubai Town", "Dubban Pura", "E-11", "E-12", "E-14", "E-16", "E-18", "E-7", "EME Society", "Eastridge Housing Scheme", "Eden", "Eden Avenue Extension", "Eden Gardens", "Eden Orchard", "Eden Park", "Eden Place Housing Scheme", "Eden Valley", "Eden Villas", "Education Town", "Eid Gah Road", "Elite Town", "Emaar Canyon Views", "Embassy Road", "Empress Road", "Engineering Co-operative Housing (ECHS)", "Erum Villas", "Etawa Society", "Excise & Taxation Housing Scheme", "Expo Avenue Society", "F-10", "F-11", "F-15", "F-17", "F-6", "F-7", "F-8", "F-9", "FDA City", "FECHS", "Faisal Colony", "Faisal Gardens", "Faisal Ghuman Road", "Faisal Town", "Faisal Town - F-18", "Faisal Valley", "Faisalabad Sangla Hill Road", "Faisalabad, Punjab", "Faiz Bagh", "Faizabad", "Falaknaz Dynasty", "Falaknaz Presidency", "Falcon Complex Faisal", "Fareed Town", "Farid Court Road", "Farooq Colony", "Farooq-e-Azam Road", "Farooqabad", "Fateh Garh", "Fateh Jang Road", "Fateh Villas", "Fazaia Colony", "Fazaia Housing Scheme", "Fazal Town", "Federal B Area", "Federal Government Employees Housing Foundation", "Ferozepur City", "Ferozepur Road", "Firdosi Road", "Firdous Colony", "Formanites Housing Scheme", "Fort Villas", "Four Season Housing", "Frash Town", "Frere Town", "Friends Colony", "G-10", "G-11", "G-12", "G-13", "G-14", "G-15", "G-16", "G-5", "G-6", "G-7", "G-8", "G-9", "G. H. Q", "GOR", "GT Road", "GTS Chowk", "Gadap Road", "Gadap Town", "Gajju Matah", "Gangaal", "Garden Colony", "Garden Town", "Garden West", "Garhi Shahu", "Garja", "Garrison Homes", "Gatwala Chowk", "Gatwala Park Road", "Gawal Mandi", "Gawala Colony", "Gawalmandi", "Ghalib City", "Ghalib Colony", "Ghauri Town", "Ghausia Colony", "Ghaziabad", "Ghous Garden", "Ghous-e-Azam Road", "Ghousia Colony", "Ghulam Mohammad Abad", "Girja Road", "Gizri", "Gizri Road", "Gobal Town", "Gobind Pura", "Gohawa", "Golimar", "Golra Mor", "Golra Road", "Gorakhpur", "Gosha-e-Ahbab", "Goth Ibrahim Haidri", "Government Employees Cooperative Housing Society (GECHS)", "Government Transport Headquarters Cooperative Housing Society", "Grand Avenues Housing Scheme", "Green Acres Housing Society", "Green Avenue", "Green Cap Housing Society", "Green City", "Green Fort", "Green Hills Housing Scheme", "Green Park", "Green Park Society", "Green Town", "Green View Colony", "Gujjar Chowk", "Gujjar Colony", "Gujjarpura", "Gul Colony", "Gul Kali", "Gul-e-Damin", "Gulbahar Colony", "Gulbahar Park", "Gulbahar Scheme", "Gulberg", "Gulberg Town", "Gulberg Valley", "Guldasht Town", "Gulfishan Colony", "Gulfishan Town", "Gulgasht Colony", "Gulistan Colony", "Gulistan Colony No 1", "Gulistan Colony No 2", "Gulistan Fatima Colony", "Gulistan-e-Jauhar", "Gulistan-e-Jinnah Colony", "Gulistan-e-Malir", "Gulnishan Park", "Gulraiz Housing Scheme", "Gulshan Abad", "Gulshan Colony", "Gulshan Dadan", "Gulshan Farooq Scheme", "Gulshan Park", "Gulshan Rehman", "Gulshan View Residence Society", "Gulshan e Madina", "Gulshan-E-Faisal", "Gulshan-E-Iqbal", "Gulshan-E-Mustafa Housing Society", "Gulshan-e-Ahbab", "Gulshan-e-Ali Housing Scheme", "Gulshan-e-Amin", "Gulshan-e-Areesha", "Gulshan-e-Ghazian", "Gulshan-e-Habib", "Gulshan-e-Haram", "Gulshan-e-Hayat", "Gulshan-e-Iqbal", "Gulshan-e-Iqbal Town", "Gulshan-e-Jami", "Gulshan-e-Khudadad", "Gulshan-e-Lahore", "Gulshan-e-Malir", "Gulshan-e-Millat", "Gulshan-e-Rafique", "Gulshan-e-Ravi", "Gulshan-e-Rehman", "Gulshan-e-Riaz", "Gulshan-e-Saeed", "Gulshan-e-Safeer", "Gulshan-e-Shamal", "Gulshan-e-Umair", "Gulshan-e-Usman Housing Society", "Gulshan-e-Yaseen Housing Society", "Gulshan-e-Zaheer Colony", "Gulzar Colony", "Gulzar E Ahbab Society", "Gulzar-e-Quaid Housing Society", "Guru Mandir Chorangi", "Guru Nanak Pura", "H-11", "H-12", "H-13", "H-15", "H-8", "H-9", "HBFC Housing Society", "Habib Homes", "Habibullah Road", "Haji Abad", "Haji Chowk", "Haji Park Housing Scheme", "Hajveeri Town", "Hajvery Housing Scheme", "Hakim Muhammad Ajmal Khan Road", "Hakim Town", "Hall Road", "Hameedpura", "Hamza Town", "Hamza Villas", "Hanif Park Harbanspura", "Hanjarwal", "Harbanspura", "Harbanspura Road", "Harchan Pura", "Harley Street", "Hassan Goth", "Hassan Town", "Hassan Villas", "Hawks Bay Scheme 42", "Hazara Colony", "Heaven Homes", "Heir", "High Court Road", "Highcourt Society", "Hilal Road", "Hill Park", "Himat Pura", "Holy Family Road", "Hoshang Road", "Hub River Road", "Hudiara", "Humaira Town", "Humak", "I-10", "I-11", "I-12", "I-13", "I-14", "I-16", "I-8", "I-9", "I. I. Chundrigar Road", "IBL Housing Scheme", "IEP Engineers Town", "IJP Road", "Ibn-e-Sina Road", "Ibrahim Colony", "Ichhra", "Ideal Homes Society", "Ideal Town", "Ilahi Abad", "Illahi Abad", "Imam Bara Road", "Immad Garden Housing Scheme", "Imran Road", "Infantry Road", "Inmol Society", "Intelligence Colony", "Iqbal Avenue", "Iqbal Park", "Iqbal Town", "Irrigation Cooperative Housing Society", "Islam Nagar", "Islamabad - Murree Expressway", "Islamabad Colony", "Islamabad Enclave", "Islamabad Expressway", "Islamabad Farm Houses", "Islamabad Highway", "Islamabad View Valley", "Islamabad, Islamabad Capital", "Islamia Park", "Islampura", "Ismail City", "Ismail Green Valley", "Ismail Valley", "Ittehad Colony", "Ittifaq Town", "Izmir Town", "Jaffar Town", "Jaffaria Colony", "Jagiot Road", "Jail Road", "Jalal Colony", "Jalal Pura", "Jallo", "Jallo Park Road", "Jamal Homes", "Jamaluddin Afghani Road", "Jameel Town", "Jamia Masjid Road", "Jamil Town", "Jamshed Road", "Jamshed Town", "Jan Muhammad Road", "Janjua Town", "Japan Road", "Jarahi", "Jaranwala", "Jaranwala Road", "Jaranwala Town", "Jati Umra Road", "Javed Bahria Coopretive Housing Society", "Javed Colony - Ghazi Road", "Jewa Town", "Jhaal Chowk", "Jhanda Chichi", "Jhang Bazar", "Jhang Road", "Jhang Syedan", "Jhangi Syedan", "Jhumra Road", "Jia Baga Road", "Jinnah Avenue", "Jinnah Colony", "Johar Colony", "Johar Town", "Jora Pull", "Jubilee Town", "Judicial Colony", "Judicial Employees Coop Housing Society", "Judicial Town", "Jumma Market", "KDA Scheme 1", "KRL Road", "Kacha Ferozepur Road", "Kacha Jail Road", "Kacha Lawrence Road", "Kacha Road", "Kacheri Chowk", "Kachupura", "Kahna", "Kahna Kacha", "Kahuta", "Kahuta Road", "Kahuta Triangle Industrial Area", "Kakezai Housing Society", "Kala Khatai Road", "Kaleem Shaheed Colony No 1", "Kaleem Shaheed Colony No 2", "Kallar Syedan", "Kalma Chowk", "Kamahan Road", "Kamal Abad", "Kamala Abad", "Kamran Chowrangi", "Karachi Golf City", "Karachi Motorway", "Karachi, Sindh", "Karakoram Diplomatic Enclave", "Karakoram Enclave 1", "Karbath", "Kareem City", "Kareem Garden", "Karim Park", "Karim Town", "Kartar Pura", "Kashmir Colony", "Kashmir Highway", "Kashmir Road", "Katar Bund Road", "Kehkishan Colony No 1", "Kehkishan Colony No 2", "Kemari Town", "Khaira", "Khalid Abad", "Khalid Bin Walid Road", "Khaliq-uz-Zaman Road", "Khana Kacha Road", "Khanna Pul", "Khanna Road", "Kharak", "Khawaja Ahmed Hassan Road", "Khawaja Gardens", "Khawaja Islam Road", "Khayaban Colony", "Khayaban Colony 2", "Khayaban Gardens", "Khayaban-e-Amin", "Khayaban-e-Faisal", "Khayaban-e-Iqbal", "Khayaban-e-Ittehad Road", "Khayaban-e-Jinnah Road", "Khayaban-e-Manzoor", "Khayaban-e-Quaid", "Khayaban-e-Sir Syed", "Khayaban-e-Tanveer", "Khayaban-e-Zohra", "Khokhar Town", "Khuda Ki Basti", "Khudadad Colony", "Khurianwala", "Khurram Colony", "Khurrianwala Town", "Kingdom Valley Islamabad", "Kiran Villas", "Kiyani Road", "Kohati Bazar", "Kohinoor City", "Kohinoor Town", "Koral Chowk", "Koral Town", "Korang Road", "Korang Town", "Korangi", "Korangi Road", "Kot Khawaja Saeed", "Kot Lakhpat", "Kotli Abdur Rahman", "Krishan Nagar", "Kuri", "Kuri Model Town", "Kuri Road", "Kurri Road", "LDA Avenue", "LDA City", "Labor Colony", "Lahore - Islamabad Motorway", "Lahore - Jaranwala Road", "Lahore - Kasur Road", "Lahore - Sheikhupura - Faisalabad Road", "Lahore Canal Bank Cooperative Housing Society", "Lahore Cantt Coop Housing", "Lahore Garden Housing Scheme", "Lahore Medical Housing Society", "Lahore Motorway City", "Lahore Press Club Housing Scheme", "Lahore Villas", "Lahore, Punjab", "Lake City", "Lakhodher", "Lakhu Road", "Lakshmi Chowk", "Lalarukh Colony", "Lalazaar Garden", "Lalazar", "Lalazar 2", "Lalkurti", "Lalukhet", "Land Breeze Housing Society", "Landhi", "Laraib Garden", "Lasani Garden", "Lasani Town", "Latif Garden", "Lawrence Road", "Lawyers Housing Society", "Lawyers Society", "Lehtarar Road", "Liaqat Road", "Liaquat Avenue", "Liaquat Bagh", "Liaquat Colony", "Liaquat Town", "Liaquatabad", "Lines Area", "Lower Canal Road", "Lower Mall", "Lyallpur Town", "Lyari Expressway", "Lyari Town", "Lytton Road", "M. A. Jinnah Road", "MT Khan Road", "Madan Pura", "Madar-e-Millat Road", "Madina Colony", "Madina Gardens", "Madina Homes", "Madina Town", "Magistrate Colony", "Mahmood Road", "Mahmoodabad", "Main Canal Bank Road", "Makkah Colony", "Makkah Commercial Market", "Makkah Garden", "Makki Complex", "Malik Colony", "Malik Park", "Malipura", "Malir", "Malir Housing Scheme 1", "Malir Link To Super Highway", "Mall Road", "Malot", "Malpur", "Manawala", "Manawan", "Manga - Raiwind Road", "Manga Mandi", "Manghopir Road", "Mangopir", "Mangral Town", "Mansoorabad", "Mansoorah", "Manzoor Colony", "Maqboolabad Society", "Margalla Town", "Marghzar Officers Colony", "Marir", "Marir Hassan", "Marwa Town", "Maryam Town", "Maskan Chowrangi", "Mason Road", "Mateen Avenue", "Mateen Garden", "Maulana Shaukat Ali Road", "Mauripur Road", "Mayo Gardens", "McLeod Road", "Media Town", "Mediacom Avenue", "Mehar Fayaz Colony", "Meharpura", "Meherban Colony", "Mehmood Booti", "Mehmoodabad", "Meraj Park", "Mian Amiruddin Park", "Mian Aziz Garden", "Mian Colony", "Mian Mir Colony", "Mian Zulfiqar Ali Shahid Road", "Military Accounts Housing Society", "Millat Chowk", "Millat Colony", "Millat Road", "Millat Town", "Misri Shah", "Misryal Road", "Model Colony", "Model Town", "Model Town Humak", "Mohafiz Town", "Mohallah Raja Sultan", "Mohammad Nagar", "Mohammadi Colony", "Mohan Pura", "Mohlanwal", "Mohlanwal Road", "Mohlanwal Scheme", "Mohni Road", "Momin Pura", "Mominpur", "Mominpura Road", "Montgomery Road", "Morgah", "Motorway Chowk", "Motorway City", "Mozang", "Mughal Abad Road", "Mughalpura", "Multan Road", "Multi Residencia & Orchards", "Mumtaz City", "Mumtaz Colony", "Munawar Colony", "Munianwala", "Munir Garden", "Muqaddas Park", "Murababad", "Murree Road", "Mushtaq Park - Phase 3", "Muslim Nagar Housing Scheme", "Muslim Town", "Muslimabad Society", "Mustafa Abad", "Mustafa Town", "Muzaffar Colony", "NFC 1", "NFC 2", "NHA Housing Society", "NIH Colony", "Nabha Road", "Nabi Pura", "Nadeem Shaheed Road", "Nadeem Town", "Nai Abadi Harbanspura", "Nain Sukh", "Nanak Pura", "Narwala Road", "Naseerabad", "Nasheman-e-Iqbal", "Nasirabad", "National Garden Housing Scheme", "National Highway", "National Police Foundation", "National Police Foundation O-9", "National Town", "Naval Anchorage", "Naval Colony", "Naval Farms Housing Scheme", "Naval Housing Scheme", "Naveed Garden", "Navy Housing Scheme Karsaz", "Nawab Town", "Nawaban Wala", "Nawaz Colony", "Naya Nazimabad", "Nayyab Villas", "Naz Town", "Nazim-ud-din Road", "Nazimabad", "Nazimabad Villas", "Nazir Garden Society", "Neela Gumbad", "Nemat Colony No 1", "Nemat Colony No 2", "New Afzal Town", "New Airport Town", "New Canal Park", "New Chauburji Park", "New Garden Town", "New Green Town", "New Karachi", "New Katarian", "New Lalazar", "New Muslim Town", "New Samanabad", "New Shah Kamal Colony", "New Shakrial", "New Super Town", "Niamuana Bypass Road", "Nighabanpura", "Nisar Colony", "Nisbat Road", "Nishat Colony", "Nishatabad", "Nishtar Colony", "Nishtar Road (Lawrence Road)", "Nizamabad", "Noor Jahan Road", "Nooriabad", "North Karachi", "North Nazimabad", "Northern Bypass", "Numaish Chowrangi", "Nussah Town", "OPF Housing Scheme", "OPF Valley", "Officer Colony", "Officers Colony", "Old Clifton", "Old Queens Road", "Old Ravians Co-Operative Housing Society", "Omega Homes", "Orangi Town", "Orchard Scheme", "Others", "Outfall Road", "P & D Housing Society", "P & T Colony", "PAEC Employees Cooperative Housing Society", "PAF Colony", "PAF Housing Scheme", "PAF Residential Area", "PAF Society", "PAF Tarnol", "PASSCO Housing Society", "PCSIR Housing Scheme", "PCSIR Staff Colony", "PECHS", "PIA Colony", "PIA Housing Scheme", "PIA Main Boulevard", "PIDC", "PTV Colony", "PTV Society", "PWD Colony", "PWD Housing Scheme", "PWD Road", "Pak Arab Housing Society", "Pak Park", "Pakistan Chowk", "Pakistan Intelligence Bureau Housing Society", "Pakistan Town", "Pakki Thatti", "Palm City", "Palm Villas", "Paradise Valley", "Paragon City", "Park Enclave", "Park Road", "Park View", "Park View City", "Park View Villas", "Partab Nagar", "Partal Town", "Peco Road", "Peer Colony", "Peer Meher Ali Shah Town", "People Colony", "Peoples Colony", "Peoples Colony No 1", "Peoples Colony No 2", "Peshawar Road", "Phulgran", "Pindora", "Pindorian", "Pine Villas", "Pir Naseer", "Pir Sohawa", "Pir Wadhai", "Police Foundation Housing Scheme", "Police Foundation Housing Society", "Police Society", "Poonch Road", "Prem Nagar", "Prime Homes 1", "Professors Colony", "Public Health Society", "Punjab Chowrangi", "Punjab Colony", "Punjab Coop Housing Society", "Punjab Government Servant Housing Foundation (PGSHF)", "Punjab Govt Employees Society", "Punjab Govt Servant Society", "Punjab Govt. Servants Housing Foundation", "Punjab Small Industries Colony", "Punjab Small Industries Estate", "Punjab University Employees Society", "Qadri Colony", "Qamar Garden", "Qartaba Chowk", "Qasim Abad", "Qasimabad", "Qasurpura", "Qayyumabad", "Qazi Town", "Qilla Gujjar Singh", "Quaid-e-Azam Colony", "Quaid-e-Azam Park", "Queens Road", "Qutbal Town", "Rabbani Colony", "Rabia City", "Race Course", "Race Course Road", "Rachna Town", "Raheem Gardens", "Raheemabad", "Rail Town (Canal City)", "Rail View Housing Society", "Railway Officers Colony", "Railway Road", "Railway Scheme 9", "Raiwind Road", "Raj Garh", "Raja Akhtar Road", "Raja Bazar", "Raja Colony", "Raja Park", "Rajgarh Road", "Rajpoot Town", "Rana Shaukat Mehmood Road", "Rana Town", "Ranchore Line Bazar", "Rang Mahal", "Range Road", "Ranial", "Rasheed Nagar", "Rashid Minhas Road", "Rasool Nagar", "Rasool Park", "Ravi Gardens", "Ravi Park", "Ravi Road", "Rawal Enclave", "Rawal Road", "Rawal Town", "Rawalpindi, Punjab", "Rawat", "Rawat Enclave", "Rawat Industrial Estate", "Raza Abad", "Raza Garden", "Real Cottages", "Rehan Garden", "Rehman City - Phase 4", "Rehman Gardens", "Rehman Housing Society", "Rehman Park", "Rehman Pura", "Rehman Town", "Rehman Villas", "Rehmanabad", "Rehmania Town", "Rehmanpura (Ferozpur Road)", "Rehmanpura (Harbanspura)", "Revenue Society", "Rewaz Garden", "Riaz Qureshi Road", "Riaz ul Jannah", "Rifle Range Road", "Ring Road", "River Garden", "River View Coop Housing Society", "Riwaz Garden", "Rizwan Garden Scheme", "Royal Avenue", "Royal City", "Royal Defence Tower", "Royal Garden", "Royal Residencia", "Rufi Lake Drive Apartments", "Rufi Rose Petals", "Rustam Park", "Ryaz ul Jannah", "SMD Homes", "Saadat Avenue", "Saadi Park", "Saadi Road", "Sabzazar", "Sabzazar Scheme", "Sadaat Town", "Saddar", "Saddar Town", "Sadiqa Abad", "Sadiqabad", "Saeed Colony", "Safari View Residencia", "Saggian", "Saggian Wala Bypass Road", "Sahafi Colony", "Sahianwala", "Saiden Shah Colony", "Saidpur", "Saidpur Road", "Saifabad", "Saima Luxury Homes", "Sajid Garden", "Sakhi Hassan Chowrangi", "Salamatpura", "Salli Town", "Sally Town South", "Saman Berg", "Samanabad", "Samanabad Road", "Samanzar Colony", "Samarzar Housing Society", "Sami Town", "Samsani Road", "Samundari Road", "Sanda", "Sanda Road", "Sangar Town", "Sangjani", "Sant Nagar", "Santpura", "Saqib Town", "Sarafa Bazar", "Sarai Kharbuza", "Saraich", "Sargodha Road", "Saroba Gardens Housing Society", "Sarwar Road", "Sarwar Town", "Satellite Town", "Satiana Road", "Scheme 33", "Scheme 45", "Sea View Apartments", "Sehala Farm House", "Shadab Colony", "Shadab Garden", "Shadbagh", "Shadipura", "Shadman 1", "Shadman 2", "Shadman Colony", "Shah Allah Ditta", "Shah Dara", "Shah Di Khoi", "Shah Faisal Road", "Shah Faisal Town", "Shah Jamal", "Shah Kamal Road", "Shah Khalid Colony", "Shah Khawar Town", "Shah Rasool Colony", "Shah Town", "Shahbaz Town", "Shahdara", "Shaheed Millat Road", "Shaheed-e-Millat Expressway", "Shaheen Town", "Shahkam Chowk", "Shahpur", "Shahpur Kanjra", "Shahra-e-Faisal", "Shahra-e-Jahangir", "Shahra-e-Liaquat", "Shahra-e-Qaideen", "Shahra-e-Usman", "Shahrah-e-Pakistan", "Shahtaj Colony", "Shahzad Colony", "Shakrial", "Shalimar Housing Scheme", "Shalimar Link Road", "Shalimar Park", "Shalimar Town", "Shalley Valley", "Sham Nagar", "Shama Road", "Shamkay Bhattian", "Shams Abad", "Shanghai Road", "Sharaqpur Road", "Shehzad Town", "Sheikh Colony", "Sheikhupura Road", "Sher Shah Road", "Sher Shah Suri Road", "Sher Zaman Colony", "Shera Kot", "Sheraz Town", "Shershah Colony - Ichra", "Shershah Colony - Raiwind Road", "Sherwani Town Housing Scheme", "Shiraz Villas", "Shoukat Town", "Shuja Road", "Siddiqia Colony", "Siddiqia Mill Colony", "Siddiqia Society (College Road)", "Sihala", "Sihala Valley", "Sikandar Road", "Simly Dam Road", "Sindh Industrial Trading Estate (SITE)", "Singhpura", "Sir Syed Chowk", "Sir Syed Road", "Sir Syed Town", "Siraj-ud-Daula Road", "Sitara Colony", "Sitara Sapna City", "Sitara Supreme City", "Sitara Valley", "Soan Garden", "Sodiwal", "Sohan Valley", "Sozo Town", "Spring Valley", "Stadium Road", "State Bank of Pakistan Staff Co-Operative Housing Society", "State Life Housing Society", "Steam Power Station Colony", "Sue-e-Asal", "Sufiabad", "Suhail Abad", "Sui Gas Employees Cooperative Housing Society", "Sui Gas Housing Society", "Sukh Chayn Gardens", "Sultan Colony", "Sultan Pura", "Sultan Town", "Sundar", "Sundar Road", "Sunderdas Road", "Sunflower Housing Society", "Sunfort Gardens", "Sunny Park", "Suparco Road", "Super Highway", "Super Town", "Supreme Villas", "Surti Muslim Co-Operative Housing Society", "Susan Road", "Swami Nagar", "Swan Garden", "T & T Aabpara Housing Society", "T & T Colony", "TECH Society", "TIP Housing Society", "Tahir Villa", "Taj Bagh Scheme", "Taj Colony", "Taj Residencia", "Tajpura", "Takht Pari", "Tali Mori", "Tandlianwala Town", "Taramrri", "Tariq Gardens", "Tariq Ismail Road", "Tariq Road", "Tariqabad", "Tarlai", "Tarnol", "Tarogill", "Teacher Society", "Teachers Society", "Temple Road", "Tench Bhata", "Tench Road", "Tezab Mill Road", "Thalian", "Thanda Pani", "The Springs", "Thethar", "Thokar Niaz Baig", "Times Residency", "Tipu Road", "Tipu Sultan Road", "Toheed Park", "Top City 1", "Township", "Transformer Chowk", "Tricon Village", "Tulsa", "Tulsa Road", "Tulspura", "Tumair", "UBL Housing Society", "UET Housing Society", "UMT Society", "Umair Town", "Umer Garden", "Umer Valley", "University Road", "University Town", "Upper Mall", "Urdu Bazar", "Usman Town", "Valencia Gardens", "Valencia Housing Society", "Venus Housing Scheme", "Victoria Heights", "Vista Homes", "Vital Homes Housing Scheme", "Wafaqi Colony", "Wah Link Road", "Wahdat Colony", "Wahdat Road", "Walait Homes", "Walled City", "Walton Railway Officers Colony", "Walton Road", "Wapda City", "Wapda Colony", "Wapda Town", "Waris Colony", "Waris Khan", "Waris Pura", "Waris Road", "Wassanpura", "Wazir Town", "West Wood Housing Society", "Westridge", "Wireless Residential Colony", "Wocland Villas", "Wyeth Employees Coop Housing", "Yasrab Colony", "Yazdani Road", "Youhanabad", "Younas Town", "Yousaf Colony", "Yousaf Town", "Zafar ul Haq Road", "Zaheer Villas", "Zaitoon - New Lahore City", "Zaitoon Colony", "Zaman Colony", "Zaman Park", "Zamzama", "Zaraj Housing Scheme", "Zeeshan Colony", "Zero Point", "Zia Colony", "Zone 5", "Zubaida Park", "Zubair Colony", "Zulfiqar Colony", "circular road"];
    var areaTypeOptions = ["-", "Kanal", "Marla"];
    var purposeOptions = ["-", "For Rent", "For Sale"];
    var propertyTypeOptions = ["-", "Farm House", "Flat", "House", "Lower Portion", "Penthouse", "Room", "Upper Portion"];
    