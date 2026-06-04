const express = require("express");
const app = express();

app.use(express.json());

// Student Data
let students = [
  {
    id: 101,
    name: "Amar",
    age: 21,
    course: "BTech",
    city: "Bally",
    fees: 52000
  },
  {
    id: 102,
    name: "Debayush",
    age: 22,
    course: "BCA",
    city: "Shyambazar",
    fees: 47000
  },
  {
    id: 103,
    name: "Aniket",
    age: 21,
    course: "BTech",
    city: "Tangra",
    fees: 58000
  }
];

// 1. Welcome Message
app.get("/", (req, res) => {
  res.send("Student Management API is running successfully");
});

// 2. Fetch All Students
app.get("/students", (req, res) => {
  res.status(200).json(students);
});

// 3. Fetch Student By ID
app.get("/students/:id", (req, res) => {
  const student = students.find(
    student => student.id === Number(req.params.id)
  );

  if (!student) {
    return res.status(404).json({
      message: "Student not found"
    });
  }

  res.status(200).json(student);
});

// 4. Add New Student
app.post("/students", (req, res) => {
  const { name, age, course, city, fees } = req.body;

  const newStudent = {
    id: students.length
      ? students[students.length - 1].id + 1
      : 101,
    name,
    age,
    course,
    city,
    fees
  };

  students.push(newStudent);

  res.status(201).json({
    message: "Student added successfully",
    student: newStudent
  });
});

// 5. Delete Student By ID
app.delete("/students/:id", (req, res) => {
  const previousCount = students.length;

  students = students.filter(
    student => student.id !== Number(req.params.id)
  );

  if (students.length === previousCount) {
    return res.status(404).json({
      message: "Student not found"
    });
  }

  res.status(200).json({
    message: "Record removed successfully"
  });
});

// 6. Update Student Information
app.put("/students/:id", (req, res) => {
  const student = students.find(
    student => student.id === Number(req.params.id)
  );

  if (!student) {
    return res.status(404).json({
      message: "Student not found"
    });
  }

  Object.assign(student, req.body);

  res.status(200).json({
    message: "Student updated successfully",
    student
  });
});

// 7. Search Students By Name
app.get("/students/find", (req, res) => {
  const { name } = req.query;

  const matchingStudents = students.filter(student =>
    student.name.toLowerCase().includes(name.toLowerCase())
  );

  res.status(200).json(matchingStudents);
});

// 8. Search Students By Course
app.get("/students/by-course/:course", (req, res) => {
  const filteredStudents = students.filter(
    student =>
      student.course.toLowerCase() ===
      req.params.course.toLowerCase()
  );

  res.status(200).json(filteredStudents);
});

// 9. Filter Students By City
app.get("/students/by-city/:city", (req, res) => {
  const filteredStudents = students.filter(
    student =>
      student.city.toLowerCase() ===
      req.params.city.toLowerCase()
  );

  res.status(200).json(filteredStudents);
});

// 10. Count Total Students
app.get("/students/total", (req, res) => {
  res.status(200).json({
    totalStudents: students.length
  });
});

// 11. Fees Greater Than Given Amount
app.get("/students/fees/greater/:amount", (req, res) => {
  const amount = Number(req.params.amount);

  const filteredStudents = students.filter(
    student => student.fees > amount
  );

  res.status(200).json(filteredStudents);
});

// 12. Fees Less Than Given Amount
app.get("/students/fees/less/:amount", (req, res) => {
  const amount = Number(req.params.amount);

  const filteredStudents = students.filter(
    student => student.fees < amount
  );

  res.status(200).json(filteredStudents);
});

// 13. Sort Students By Name
app.get("/students/sort/name", (req, res) => {
  const sortedStudents = [...students].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  res.status(200).json(sortedStudents);
});

// 14. Sort Students By Fees (Low to High)
app.get("/students/sort/fees-asc", (req, res) => {
  const sortedStudents = [...students].sort(
    (a, b) => a.fees - b.fees
  );

  res.status(200).json(sortedStudents);
});

// 15. Sort Students By Fees (High to Low)
app.get("/students/sort/fees-desc", (req, res) => {
  const sortedStudents = [...students].sort(
    (a, b) => b.fees - a.fees
  );

  res.status(200).json(sortedStudents);
});

// 16. Check Whether Student Exists
app.get("/students/exists/:id", (req, res) => {
  const studentExists = students.some(
    student => student.id === Number(req.params.id)
  );

  res.status(200).json({
    exists: studentExists
  });
});

// 17. Calculate Total Fees
app.get("/students/fees/total", (req, res) => {
  const totalFees = students.reduce(
    (sum, student) => sum + student.fees,
    0
  );

  res.status(200).json({
    totalFeesCollected: totalFees
  });
});

// 18. Course Wise Student List
app.get("/students/coursewise", (req, res) => {
  const courseData = {};

  students.forEach(student => {
    if (!courseData[student.course]) {
      courseData[student.course] = [];
    }

    courseData[student.course].push(student);
  });

  res.status(200).json(courseData);
});

// 19. Add Multiple Students
app.post("/students/many", (req, res) => {
  const newStudents = req.body.map((student, index) => ({
    id:
      students.length > 0
        ? students[students.length - 1].id + index + 1
        : 101 + index,
    ...student
  }));

  students.push(...newStudents);

  res.status(201).json({
    message: "Multiple students added successfully",
    addedStudents: newStudents
  });
});

// 20. Student Dashboard
app.get("/dashboard", (req, res) => {
  const totalStudents = students.length;

  const totalFees = students.reduce(
    (sum, student) => sum + student.fees,
    0
  );

  const averageFees = totalFees / totalStudents;

  res.status(200).json({
    totalStudents,
    totalFeesCollected: totalFees,
    averageFees
  });
});

// Server
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});