type Student = {
  name: string;
  lastName: string;
  age: number;
  grade: (number | string | undefined )[];
};

const studentA: Student = {
  name: "Anton",
  lastName: "Meier",
  age: 16,
  grade: [1,4,3,1,"A",undefined,1,2],
};

const studentB: Student = {
  name: "Berta",
  lastName: "Müller",
  age: 17,
  grade: ["A",undefined,1], 
};

const studentC: Student = {
  name: "Cäsar",
  lastName: "Schmidt",
  age: 17,
  grade: ["A",1,undefined,3,2,4,5],
};

function displayStudent(student: Student) {
    let output: string = "";
    const grades = student.grade.map((item) => (item === undefined ? "*" : item));
    output += `${student.name} ${student.lastName} (${student.age})\n`;
    output += "==============================\n"
    output += `Grades: ${grades.toString()}\n`;

    return output;
}

// same as above but adapted length of dividing line to current name string
function highlightStudent(student: Student) {
    let output: string = "";
    const grades = student.grade.map((item) => (item === undefined ? "*" : item));
    const nameInfo = `${student.name} ${student.lastName} (${student.age})`;
    const line =  Array.from(nameInfo).reduce((str, item) => {return str += "="}, "");

    output += nameInfo + "\n";
    output += line + "\n";
    output += `Grades: ${grades.toString()}` + "\n";

    return output;
}


function logStudents(...args: Student[]) {
    for (let student of args) {
        console.log(displayStudent(student));
    }
}

function logStudents2(...args: Student[]) {
    for (let student of args) {
        console.log(highlightStudent(student));
    }
}

// static length of 30 for dividing line
logStudents(studentA, studentB, studentC);

// adapted length of dividing line to current name string
logStudents2(studentA, studentB, studentC);
