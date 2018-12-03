import csv

name=""
email=""
mobile=""
university=""
major=""
Data={}
id=0
fieldnames=['name','email','mobile','university','major']
user = {'name': name, 'mobile': mobile, 'university': university, 'major': major}

with open('Data.csv', 'w', newline='') as csvfile:
    writer = csv.DictWriter(csvfile, user.keys())
    writer.writeheader()

    while (True):
        name=input("Enter your name")
        email = input("Enter your email")
        mobile = input("Enter your mobile")
        university = input("Enter your university")
        major = input("Enter your major")

        user={'name':name, 'mobile':mobile, 'university':university,'major':major}
        Data.update({'id':user})
        id+=1
        writer.writerow(user)

        if(input("Stop?  ")=='Stop'):
            break









