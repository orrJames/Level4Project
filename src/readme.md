# Readme

The reflective tool is a series of 5 Jupyter Notebook extensions. Each extension can be installed individually. 4 extensions are intended for learners: refelctive_note, timer, end_of_lab, and emotions. The teacher extension is found in lab_report. Each extension has at least a main.js file which handles the frontend view and description.yaml which gives a brief description of the extension. There is a Python class, FirebaseExtension(), found in reflective_tool.py. This handles the backend data handling and database interactions.

## Build instructions

### Requirements

* Requires Anaconda 
* Packages: listed in `requirements.txt` 
* Tested on Windows 11 and Mac OS


### Build steps
Requirements to install can be found in 'requirements.txt'. All users must install the requirements via:

pip install -r requirements.txt

Each extension must be installed individually with the following instructions.

Windows instructions:

* Open Anaconda Prompt 
* Change directory (cd) to extension location
* Run following install command: jupyter nbextension install <extension_folder>
* Run following install command: jupyter nbextension enable <extension_folder/main>
* Repeat for each reflective extension

Mac instructions:
* Open terminal 
* Change directory (cd) to extension location
* Run following install command: jupyter nbextension install <extension_folder> --user
* Run following install command: jupyter nbextension enable <extension_folder/main> --user
* Repeat for each reflective extension

Once the extensions are installed and enabled, they will appear in the IDE toolbar until disabled. Users can disable an extension with the following:

jupyter nbextension disable <extension_folder/main>

Users can also uninstall via:

jupyter nbextension uninstall <extension_folder>



