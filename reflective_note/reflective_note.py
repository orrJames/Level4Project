# firebase_extension.py

import datetime
from IPython.core.magic import Magics, magics_class, register_cell_magic
import firebase_admin
from firebase_admin import credentials, firestore
import __main__ as main
import os

@magics_class
class FirebaseExtension(Magics):
    def __init__(self, shell):
        super(FirebaseExtension, self).__init__(shell)
#"C:\Users\orrja\uni\Level4\Level4Project\reflective_note\level4project-7da7d-firebase-adminsdk-jsr7h-332e1c8523.json"


    @register_cell_magic
    def to_firebase(self, data):
        print(data)
        # cred = credentials.Certificate('C:\\Users\\orrja\\uni\\Level4\\Level4Project\\reflective_note\\level4project-7da7d-firebase-adminsdk-jsr7h-332e1c8523.json')
        
        # firebase_admin.initialize_app(cred)
        lab = int(input("Enter your lab number"))
        try:
            db = firestore.client()
            timestamp = datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')
            print("this is timestamp",timestamp)
            doc_ref = db.collection('reflective_notes').add({'note': data,'timestamp': timestamp,'lab': lab})
            print(f'Data written to Firebase with ID: ', doc_ref)
        except:
            print("fb db not init")
            cred = credentials.Certificate('C:\\Users\\orrja\\uni\\Level4\\Level4Project\\reflective_note\\level4project-7da7d-firebase-adminsdk-jsr7h-332e1c8523.json')
            firebase_admin.initialize_app(cred)
            db = firestore.client()
            timestamp = datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')
            print("this is timestamp",timestamp)
            doc_ref = db.collection('reflective_notes').add({'note': data, 'timestamp': timestamp, 'lab': lab})
            print(f'Data written to Firebase with ID: ', doc_ref, timestamp)
        

def load_ipython_extension(ipython):
    extension = FirebaseExtension(ipython)
    ipython.register_magics(extension)

# Initialize Firebase when the extension is loaded
load_ipython_extension(get_ipython())
