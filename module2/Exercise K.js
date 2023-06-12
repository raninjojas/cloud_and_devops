const students = [
    "Ranin",
    "Ghandy",
    "Ghabrial",
    "Anne",
    "Marina",
    "Anyone",
    "Jimmy",
  ];
  
 
  function getstudentsnames(students) {
    for (let i = 0; i < students.length; i++) {
        const studentname = "Student name is: " + students[i];
        const indexMessage = "index is: " + i;
        console.log(indexMessage, studentname);
      }
  }

  console.log(getstudentsnames(students))