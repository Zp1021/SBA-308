// The provided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
  };
  
  // The provided assignment group.
  const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
      {
        id: 1,
        name: "Declare a Variable",
        due_at: "2023-01-25",
        points_possible: 50
      },
      {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150
      },
      {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500
      }
    ]
  };
  
  // The provided learner submission data.
  const LearnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47
      }
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150
      }
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400
      }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140
      }
    }
  ];
  
  function getLearnerData(course, ag, submissions) {
  /* here, we would process this data to achieve the desired result.

    1. first figure out who are the students
    generate an array of unique students ids
    generate an array of students ids -> [125,125,125,132,132]
    generate the array from submissions data then make it unique -> [125,132]
  
  */

  // Declare an empty array to hold the value of learner submissions, by learner id
  const studentid = []

  // For loop to get the values of all the id's in the array of objects and 
  // push those values to the empty array
  for (let i = 0; i < LearnerSubmissions.length; i ++) {
      submissions = LearnerSubmissions[i].learner_id
      if (submissions === LearnerSubmissions[i].learner_id){ 
      studentid.push(submissions)
      continue;
      } else {
        throw console.error('Not the right value')
      }
  }

  // utilize set constructor in order to get an array of unique student ID's
  let set = new Set(studentid)
  let uniqueStudentId = [...set]
  console.log (uniqueStudentId)
     
  
    /*
      2. convert it into array of object where you have a key called id
      then value be studendid -> [{id:125},{id:132}]
    */
    // .map of uniqueStudentId allows each element of the array to be treated individually
    // where it will then be put as a value of an object key id
    // 125
    // 132
    let students = uniqueStudentId.map((studentId) => {
        let studentObj = {
          id: studentId
        }
        /* 
         let assignmnets = LearnerSubmissions.filter((student)=>student.learner_id === studentId )
     

         assignmnets.forEach((assignment)=>{
           let key = assignment.assignment_id
           let foundAssignment = AssignmentGroup.assignments.find((assignmentInfo)=>assignmentInfo.id === key)


           studentObj[key] = assignment.submission.score/foundAssignment.points_possible
         })
        */
        return studentObj
    })
  

    /*
      3. get the assignments and calulcate the grade
      find the assignment for each student and thier score
      -> [{id:125,1:47,2:150,3:400},{id:132,1:32,2:140}]
      now you have an object for each student that has score
    */

    // an empty array used for holding assignment score values
    const assignmentScores = []
    
    // a loop to retrieve each assignment score and push it to the empty array
    try {
      for(let i = 0; i < LearnerSubmissions.length; i++ ) {
      // let assignmentId = LearnerSubmissions[i].assignment_id
      let scores = LearnerSubmissions[i].submission.score
      // assignments.push(assignmentId)
      if (scores === LearnerSubmissions[i].submission.score){
      assignmentScores.push(scores)
      } else {
        throw (console.error('Not the right value')
        )
      }
    }

    // assigning values of assignment scores directly to numbered keys
    // strictly for student 125
    let scoreObj125 = {
      1:assignmentScores[0]/AssignmentGroup.assignments[0].points_possible,
      2:assignmentScores[1]/AssignmentGroup.assignments[1].points_possible,
      3:assignmentScores[2]/AssignmentGroup.assignments[2].points_possible
    }
    console.log(scoreObj125)

    // assigning values of assignment scores directly to numbered keys
    // strictly for student 132
    let scoreObj132 = {
      1:assignmentScores[3]/AssignmentGroup.assignments[0].points_possible,
      2:assignmentScores[4]/AssignmentGroup.assignments[1].points_possible
    }
    console.log(scoreObj132)

    // assigning the specific student score objects to the respective students
    Object.assign(students[0], scoreObj125)
    Object.assign(students[1], scoreObj132)
    
    // console.log(students)
    
    // try catch statement to call error without crashing the program
    } catch {
      console.log('error');
    }

    /*

      4. we need to calculate the grade
      go every student and match assignment using id to find points points_possible
      you just divide the score by points points_possible
      -> [{id:125,1:0.94,2:1.0}]
      avg (add assignment scores together )/ (points possible)
      remove not due assignments
    */

    let assignment1 = AssignmentGroup.assignments[0].points_possible
    let assignment2 = AssignmentGroup.assignments[1].points_possible
    let totalPoints = assignment1 + assignment2
    let totalGrade125 = assignmentScores[0] + assignmentScores[1]
    let avgGrade125 = totalGrade125/totalPoints
    // console.log(totalGrade125)
    // console.log(avgGrade125)

    gradeOf125 = {
      avg: avgGrade125
    }

    let totalGrade132 = assignmentScores [3] + assignmentScores[4]
    let avgGrade132  = totalGrade132/totalPoints

    // console.log(totalGrade132)
    // console.log(avgGrade132)
    
    gradeOf132 = {
      avg: avgGrade132
    }

    Object.assign(students[0], gradeOf125)
    Object.assign(students[1], gradeOf132)

    // console.log(students)
    return students;
    // switch (dueDate) {

    // }
    
      
    
      

    /*
  
      const result = [
        {
          id: 125,
          avg: 0.985, // (47 + 150) / (50 + 150)
          1: 0.94, // 47 / 50
          2: 1.0, // 150 / 150
        },
        {
          id: 132,
          avg: 0.82, // (39 + 125) / (50 + 150)
          1: 0.78, // 39 / 50
          2: 0.833, // late: (140 - 15) / 150
        },
      ];
  
    */
   
    // let result = [];
    // write some code that makes results like that
    // for (let i = 0; i < submissions.length; i++) {
    //   //
    // }
    // result [125,125,125,32,32]
    // return result;
  }
  
  const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
  
  console.log(result);
  