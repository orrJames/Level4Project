import csv
import datetime
from IPython.core.magic import Magics, magics_class, register_cell_magic
import firebase_admin
from firebase_admin import credentials, firestore, db
import __main__ as main
import os
import socket

import replicate
from getpass import getpass
import os


from IPython import display
from IPython.display import Image

import openpyxl
import pandas as pd
import os
import glob
import csv
from xlsxwriter.workbook import Workbook

@magics_class
class FirebaseExtension(Magics):
    def __init__(self, shell):
        super(FirebaseExtension, self).__init__(shell)
#"C:\Users\orrja\uni\Level4\Level4Project\reflective_note\level4project-7da7d-firebase-adminsdk-jsr7h-332e1c8523.json"


    @register_cell_magic
    def to_firebase(self, comment):
        hostname = socket.gethostname()
        IPAddr = socket.gethostbyname(hostname)
        data = input("Describe and reflect on your experience in this lab.")
        # cred = credentials.Certificate('C:\\Users\\orrja\\uni\\Level4\\Level4Project\\reflective_note\\level4project-7da7d-firebase-adminsdk-jsr7h-332e1c8523.json')
        
        # firebase_admin.initialize_app(cred)
        lab = int(input("Enter your lab number"))
        try:
            db = firestore.client()
            timestamp = datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')
            #print("this is timestamp",timestamp)
            doc_ref = db.collection('reflective_notes').add({'note': data,'timestamp': timestamp,'lab': lab, 'user': IPAddr})
            #print("Data written to Firebase with ID: ", doc_ref)
        except:
            #print("fb db not init")
            cred = credentials.Certificate('C:\\Users\\orrja\\uni\\Level4\\Level4Project\\reflective_note\\level4project-7da7d-firebase-adminsdk-jsr7h-332e1c8523.json')
            firebase_admin.initialize_app(cred)
            db = firestore.client()
            timestamp = datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')
            #print("this is timestamp",timestamp)
            doc_ref = db.collection('reflective_notes').add({'note': data, 'timestamp': timestamp, 'lab': lab, 'user': IPAddr})
            #print("Data written to Firebase with ID: ", doc_ref, timestamp)
        FirebaseExtension.gibbs_cycle_continued()
    @register_cell_magic
    def emotion_to_firebase(self, emotion):
        hostname = socket.gethostname()
        IPAddr = socket.gethostbyname(hostname)
        # firebase_admin.initialize_app(cred)
        lab = int(input("Enter your lab number"))
        try:
            db = firestore.client()
            timestamp = datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')
            #print("this is timestamp",timestamp)
            doc_ref = db.collection('emotions').add({'feeling': emotion,'timestamp': timestamp,'lab': lab, 'user': IPAddr})
            #print("Data written to Firebase with ID: ", doc_ref)
        except:
            #print("fb db not init")
            cred = credentials.Certificate('C:\\Users\\orrja\\uni\\Level4\\Level4Project\\reflective_note\\level4project-7da7d-firebase-adminsdk-jsr7h-332e1c8523.json')
            firebase_admin.initialize_app(cred)
            db = firestore.client()
            timestamp = datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')
            #print("this is timestamp",timestamp)
            doc_ref = db.collection('emotions').add({'feeling': emotion, 'timestamp': timestamp, 'lab': lab, 'user': IPAddr})
            #print("Data written to Firebase with ID: ", doc_ref, timestamp)
        
    
    def gibbs_cycle_continued():
        #Image(filename="C:\\Users\\orrja\\uni\\Level4\\Level4Project\\reflective_note\\gibbs_cycle.png")
        feelings_step = input("Look back at the feelings you have selected.  How have they changed, or have they stayed the same? \n")
        evalualtion_step = input("Lets reflect! What's one thing that went well this time, and one thing to improve on for next time? \n")
        conclusion_step = input("Finally, drawing from the time spent, emotions throughout, and your overall reflections.  What are you going to do differently next time? \n")

    
    @register_cell_magic
    def time_to_firebase(self, time):
        hostname = socket.gethostname()
        IPAddr = socket.gethostbyname(hostname)
        # firebase_admin.initialize_app(cred)
        lab = int(input("Enter your lab number"))
        try:
            db = firestore.client()
            timestamp = datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')
            #print("this is timestamp",timestamp)
            doc_ref = db.collection('timeSpent').add({'time': time,'timestamp': timestamp,'lab': lab, 'user': IPAddr})
            #print("Data written to Firebase with ID: ", doc_ref)
        except:
            #print("fb db not init")
            cred = credentials.Certificate('C:\\Users\\orrja\\uni\\Level4\\Level4Project\\reflective_note\\level4project-7da7d-firebase-adminsdk-jsr7h-332e1c8523.json')
            firebase_admin.initialize_app(cred)
            db = firestore.client()
            timestamp = datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')
            #print("this is timestamp",timestamp)
            doc_ref = db.collection('timeSpent').add({'time': time, 'timestamp': timestamp, 'lab': lab, 'user': IPAddr})
            #print("Data written to Firebase with ID: ", doc_ref, timestamp)
            
    def generate_summary(x,lab):
        llama2_13b = "meta/llama-2-13b-chat:f4e2de70d66816a838a89eeeb621910adffb0dd0baba3976c96980970978018d"

    # REPLICATE_API_TOKEN = getpass()
        os.environ["REPLICATE_API_TOKEN"] = "r8_GnYKyT4fcwVrYH3bGc6nVuMJ0VZKDhX0LfmpR"
    #r8_GnYKyT4fcwVrYH3bGc6nVuMJ0VZKDhX0LfmpR
        pre_prompt = "In a third-party formal tone, make a summary of the key themes in the following text. Keep it below 200 words please."
        output = replicate.run(
        llama2_13b,
        input={"prompt": (pre_prompt+x), "max_new_tokens":1000}
        )
        print ("".join(output))

        FirebaseExtension.time_summary(lab)

    @register_cell_magic
    def read_notes(self,comment):
        x = ""
        lab = int(input("Enter the unique lab id"))
        try:
            cred = credentials.Certificate("C:\\Users\\orrja\\uni\\Level4\\Level4Project\\reflective_note\\level4project-7da7d-firebase-adminsdk-jsr7h-332e1c8523.json")
            firebase_admin.initialize_app(cred)
        except:
            pass

        db = firestore.client()
        collection_ref = db.collection("reflective_notes")
        documents = collection_ref.stream()

        for doc in documents:
            #print( "Data: ", doc.to_dict())
            try:
                if (doc.to_dict()["lab"]) == lab:
                    #x = x+"Lab ID:"+(str(doc.to_dict()["lab"]))+" Note:"+doc.to_dict()["note"] + ","
                    x = x +doc.to_dict()["note"] + '::'
            except:
                pass
        #print(x)
        if x != "":
            FirebaseExtension.generate_summary(x, lab)
        else:
            print("No lab notes with that ID")
            FirebaseExtension.time_summary(lab)

    def time_summary(lab):
        total = 0
        counter = 0
        db = firestore.client()
        collection_ref = db.collection("timeSpent")
        documents = collection_ref.stream()
        for doc in documents:
            #print( "Data: ", doc.to_dict())
            try:
                if (doc.to_dict()["lab"]) == lab:
                    #x = x+"Lab ID:"+(str(doc.to_dict()["lab"]))+" Note:"+doc.to_dict()["note"] + ","
                    counter  = counter +1
                    total = total + (int(doc.to_dict()["time"].split(":")[0]) * 60) + (int(doc.to_dict()["time"].split(":")[1]))
            except:
                pass
        if counter == 0:
            print("No user recorded their time")
        else:
            print("Total time entries: ", counter, "\n", "Average time taken: ", ((total)//counter), " minutes.")
        FirebaseExtension.generate_csv(lab)
    
    def get_data(lab, documents):
        data = []
        data_points = 0
        for doc in documents:
            #print( "Data: ", doc.to_dict())
            try:
                if (doc.to_dict()["lab"]) == lab:
                    #x = x+"Lab ID:"+(str(doc.to_dict()["lab"]))+" Note:"+doc.to_dict()["note"] + ","
                    doc_dict = doc.to_dict()
                    #clean_d = { k:v.strip() for k, v in doc_dict.iteritems()}
                    data.append(doc_dict)
                    data_points = data_points + 1
                    #print(doc_dict)
            except:
                pass
        return data, data_points
    def generate_excel(csvfile): 
        workbook = Workbook(csvfile[:-4] + '.xlsx')
        worksheet = workbook.add_worksheet()
        with open(csvfile, 'rt', encoding='utf8') as f:
            reader = csv.reader(f)
            for r, row in enumerate(reader):
                for c, col in enumerate(row):
                    worksheet.write(r, c, col)
        workbook.close()
        print("Excel summary generated: ", csvfile[:-4] + '.xlsx')
        if os.path.exists(csvfile):
            os.remove(csvfile)


    def generate_csv(lab):
        db = firestore.client()
        notes_ref = db.collection("reflective_notes")
        emotions_ref = db.collection("emotions")
        time_ref = db.collection("timeSpent")
        # Get all documents from the collection
        reflective_notes = notes_ref.stream()

        # Extract document data and write to CSV
        notes_data, notes_number = FirebaseExtension.get_data(lab,reflective_notes)
        emotions_data, emotion_number = FirebaseExtension.get_data(lab,emotions_ref.stream())
        time_data, time_number = FirebaseExtension.get_data(lab,time_ref.stream())
        
        # # If you want to use Pandas to export to CSV
        # df = pd.DataFrame(data)
        # df.to_csv(csv_filename, index=False)

        # If you want to use CSV library directly
        file_name_note = "lab_"+ str(lab)+ "_refelctive_note.csv"
        file_name_time = "lab_"+ str(lab)+ "_times.csv"
        file_name_emotions = "lab_"+ str(lab)+ "_emotions.csv"
        with open(file_name_note, mode='w', newline='') as file:
            try:
                writer = csv.DictWriter(file, fieldnames=notes_data[0].keys())
                writer.writeheader()
                writer.writerows(notes_data)
            except:
                pass

        with open(file_name_emotions, mode='w', newline='') as file:
            try:
                writer = csv.DictWriter(file, fieldnames=emotions_data[0].keys())
                writer.writeheader()
                writer.writerows(emotions_data)
            except:
                pass

        with open(file_name_time, mode='w', newline='') as file:
            try:
                writer = csv.DictWriter(file, fieldnames=time_data[0].keys())
                writer.writeheader()
                writer.writerows(time_data)
            except:
                pass
        print("Total end of Notebook reflections: ", notes_number)
        print("Total emotions selected: ", emotion_number)
       # print("Emotion, time and end of Notebook refelctions files generated")
        #print("csv_generated: "+ file_name)
        #FirebaseExtension.generate_excel(file_name)


def load_ipython_extension(ipython):
    extension = FirebaseExtension(ipython)
    ipython.register_magics(extension)

# Initialize Firebase when the extension is loaded
load_ipython_extension(get_ipython())
