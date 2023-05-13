/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log

  // a better approach would have been using filter, but as mentioned in ques we have to use map

  // console.log(arr.filter((student) => student.marks >50 ));

  // using map

  arr.map((student) => {
    if (student.marks > 50) {
      console.log(student);
    }
  });
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach((student) => {
    if (student.marks > 50) {
      console.log(student);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  const newStudent = {
    id: 4,
    name: "susan",
    age: "20",
    marks: 45,
  };
  arr.push(newStudent);
  console.log(arr);
}

function removeFailedStudent() {
  //Write your code here, just console.log
   arr = arr.filter((student) => student.marks > 50 )
   console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let newArr = [
    { id: 5, name: "ayush", age: "23", marks: 90 },
    { id: 6, name: "sanjana", age: "24", marks: 55 },
    { id: 7, name: "mandy", age: "25", marks: 75 },
  ];
   arr = arr.concat(newArr);
  console.log(arr);

}
