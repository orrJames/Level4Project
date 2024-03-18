# User manual 

Below is a description of how each extension can be used. 

# Timer

Once installed learners can start, reset and save the time spent on a lab. The start button will begin the timer whilst the reset option restarts the timer back to 00:00:00.  At the end of the Notebook users are expected to select the save button which prompts the user to enter the relevant lab ID number. The timer information is saved to the database and can be viewed in the Notebook file.

# Reflective Note

 The button denoted by a tick allows users to create a Markdown input for a learner reflective note embedded in the Notebook. Learner's are prompted to add an inline reflective note about their immediate experience. The note is saved as part of the Notebook and can be accessed by students when they re-open the .ipynb file. An on-hover message displays to help users remember the purpose of the button.


# Emotion Selector

Users are prompted with a selection of emotions after they click the Select Emotion button. After learners click an emotion it is displayed in the Notebook and saved to the database after a lab ID is inputted by the learner.

# End-of-lab Reflection
Learners are prompted to end their lab Notebook by selecting the end-of-lab reflection button form the tool bar. The extension prompts users to reflective on the lab as a whole.  Making use of the reflections gathered along the way, the extension prompts the user to recap their feelings and overall thoughts about the Notebook.  The overall reflection is recorded to the database after the user successfully complete the end-of-lab walk-though. Similar to the other learner extensions, the inputs are saved to the Notebook as well as the database so learners can revisit them.

# Lecturer Tool

The lecturer toolbar button will generate a summary of learners overall reflections. This allows teachers to get a shortened summary of key themes. The teacher is told the average time taken by students as well as the total end-of-lab reflections given by students.  Three Excel files denoting the raw emotion, reflections, and time data from students will be downloaded to the current working directory.  This allows lecturers the opportunity to see specific comments and times from their students. Further information such as submission timestamps are also visible in the Excel spreadsheets.
