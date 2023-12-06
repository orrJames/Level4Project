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

@magics_class
class FirebaseExtension(Magics):
    def __init__(self, shell):
        super(FirebaseExtension, self).__init__(shell)
#"C:\Users\orrja\uni\Level4\Level4Project\reflective_note\level4project-7da7d-firebase-adminsdk-jsr7h-332e1c8523.json"


    @register_cell_magic
    def to_firebase(self, comment):
        hostname = socket.gethostname()
        IPAddr = socket.gethostbyname(hostname)
        data = input("Enter you refelctive feedback for the lecturer.")
        # cred = credentials.Certificate('C:\\Users\\orrja\\uni\\Level4\\Level4Project\\reflective_note\\level4project-7da7d-firebase-adminsdk-jsr7h-332e1c8523.json')
        
        # firebase_admin.initialize_app(cred)
        lab = int(input("Enter your lab number"))
        try:
            db = firestore.client()
            timestamp = datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')
            print("this is timestamp",timestamp)
            doc_ref = db.collection('reflective_notes').add({'note': data,'timestamp': timestamp,'lab': lab, 'user': IPAddr})
            print("Data written to Firebase with ID: ", doc_ref)
        except:
            print("fb db not init")
            cred = credentials.Certificate('C:\\Users\\orrja\\uni\\Level4\\Level4Project\\reflective_note\\level4project-7da7d-firebase-adminsdk-jsr7h-332e1c8523.json')
            firebase_admin.initialize_app(cred)
            db = firestore.client()
            timestamp = datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')
            print("this is timestamp",timestamp)
            doc_ref = db.collection('reflective_notes').add({'note': data, 'timestamp': timestamp, 'lab': lab, 'user': IPAddr})
            print("Data written to Firebase with ID: ", doc_ref, timestamp)
        
    @register_cell_magic
    def emotion_to_firebase(self, emotion):
        hostname = socket.gethostname()
        IPAddr = socket.gethostbyname(hostname)
        # firebase_admin.initialize_app(cred)
        lab = int(input("Enter your lab number"))
        try:
            db = firestore.client()
            timestamp = datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')
            print("this is timestamp",timestamp)
            doc_ref = db.collection('emotions').add({'feeling': emotion,'timestamp': timestamp,'lab': lab, 'user': IPAddr})
            print("Data written to Firebase with ID: ", doc_ref)
        except:
            print("fb db not init")
            cred = credentials.Certificate('C:\\Users\\orrja\\uni\\Level4\\Level4Project\\reflective_note\\level4project-7da7d-firebase-adminsdk-jsr7h-332e1c8523.json')
            firebase_admin.initialize_app(cred)
            db = firestore.client()
            timestamp = datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')
            print("this is timestamp",timestamp)
            doc_ref = db.collection('emotions').add({'feeling': emotion, 'timestamp': timestamp, 'lab': lab, 'user': IPAddr})
            print("Data written to Firebase with ID: ", doc_ref, timestamp)
    
    @register_cell_magic
    def time_to_firebase(self, time):
        hostname = socket.gethostname()
        IPAddr = socket.gethostbyname(hostname)
        # firebase_admin.initialize_app(cred)
        lab = int(input("Enter your lab number"))
        try:
            db = firestore.client()
            timestamp = datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')
            print("this is timestamp",timestamp)
            doc_ref = db.collection('timeSpent').add({'time': time,'timestamp': timestamp,'lab': lab, 'user': IPAddr})
            print("Data written to Firebase with ID: ", doc_ref)
        except:
            print("fb db not init")
            cred = credentials.Certificate('C:\\Users\\orrja\\uni\\Level4\\Level4Project\\reflective_note\\level4project-7da7d-firebase-adminsdk-jsr7h-332e1c8523.json')
            firebase_admin.initialize_app(cred)
            db = firestore.client()
            timestamp = datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')
            print("this is timestamp",timestamp)
            doc_ref = db.collection('timeSpent').add({'time': time, 'timestamp': timestamp, 'lab': lab, 'user': IPAddr})
            print("Data written to Firebase with ID: ", doc_ref, timestamp)
            
    def generate_summary(x):
        llama2_13b = "meta/llama-2-13b-chat:f4e2de70d66816a838a89eeeb621910adffb0dd0baba3976c96980970978018d"

    # REPLICATE_API_TOKEN = getpass()
        os.environ["REPLICATE_API_TOKEN"] = "r8_GnYKyT4fcwVrYH3bGc6nVuMJ0VZKDhX0LfmpR"
    #r8_GnYKyT4fcwVrYH3bGc6nVuMJ0VZKDhX0LfmpR
        pre_prompt = "In a third-party formal tone, make a summary of the key themes in the following text. The following text is separated by ::. Summarise each different contribution. Keep it below 200 words please :)"
        output = replicate.run(
        llama2_13b,
        input={"prompt": (pre_prompt+x), "max_new_tokens":1000}
        )
        print ("".join(output))

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
        print(x)
        if x != "":
            FirebaseExtension.generate_summary(x)
        print("No lab notes with that ID")


def load_ipython_extension(ipython):
    extension = FirebaseExtension(ipython)
    ipython.register_magics(extension)

# Initialize Firebase when the extension is loaded
load_ipython_extension(get_ipython())


# import replicate
# from getpass import getpass
# import os
# llama2_13b = "meta/llama-2-13b-chat:f4e2de70d66816a838a89eeeb621910adffb0dd0baba3976c96980970978018d"

# REPLICATE_API_TOKEN = getpass()
# os.environ["REPLICATE_API_TOKEN"] = REPLICATE_API_TOKEN
# #r8_GnYKyT4fcwVrYH3bGc6nVuMJ0VZKDhX0LfmpR
# pre_prompt = "In third-party formal tone, make a summary of the key themes in the following text. Keep it below 200 words please :)"
# prompt_input = getFeedbackNotes

# # text completion with input prompt
# def Completion(prompt):
#     output = replicate.run(
#       llama2_13b,
#       input={"prompt": (pre_promt+prompt_input), "max_new_tokens":1000}
#   )
#     return "".join(output)