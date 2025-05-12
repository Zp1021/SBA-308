# SBA-308
This project utilizes javascript to manipulate data given across multiple objects and arrays in an attempt to produce a result

In the function getLearnerData the parameters are course, ag (presumably stands for assignment groups), and submissions

Each parameter corresponds with the data it houses (course is the courseInfo object, ag is the object of AssignmentGroup, and submissions coresponds with the LearnerSubmissions)

The first step is to be able to generate an array of student id's in order to do so an empty array of studentid was declared that will later be populated with the student id's.

Since the student id's are present within each object in the array of learner submissions that is where the data will be extracted from. In order to access that data and push it to the empty array a for loop will be neede. The for loop interates through the array of objects to retrieve all of the id values and pushes those values to the empty array studentid.

