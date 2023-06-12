const numberOfStudents = 15;
const numberOfMentors = 8;
const total = numberOfStudents + numberOfMentors;

const studentPercentage = Math.round((numberOfStudents / total) * 100);
const mentorPercentage = Math.round((numberOfMentors / total) * 100);

console.log("Percentage of students: " + studentPercentage + "%");
console.log("Percentage of mentors: " + mentorPercentage + "%");
