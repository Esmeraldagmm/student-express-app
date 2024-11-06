const bodyParser = require("body-parser"); // required to create a post 
const {PrismaClient} = require("@prisma/client"); // for prisma
const express = require("express");
const app = express();
const cors = require("cors"); // for cors

app.use(bodyParser.json()); // required to create a post
app.use(cors()); // for cors

const port = 3000;

const prisma = new PrismaClient(); // for prisma


app.get("/hello", (req, res) => {
  res.json({ message:"Hello World" });
});


app.get('/student', async (req, res) => {
  console.log(req.query.school);

  // instead of only school, generically filter by any property name
  if (req.query) {
    const propertyNames = Object.keys(req.query);
    let students = await prisma.student.findMany();
    for (const propertyName of propertyNames) {
      students = students.filter((s) => s[propertyName] === req.query[propertyName]);
    }
    res.json(students);
  } else {
    // else, respond with the entire list
    res.json(studentList);
  }
});

// write a GET /students/:id endpoint that returns a single student by id
app.get('/student/:id', (req, res) => {
  // id exists in the request
  const id = req.params.id;
  console.log(id);

  // TODO: studentList is no longer a thing, let's fix
  // find student with matching ID and respond with the student
  const student = studentList.find((s) => s.sId === id);
  if (student) {
    res.json(student);
  } else {
    res.status(404).json({ message: 'student not found' });
  }
});


// create a student
app.post("/student", async (req, res) => {
  console.log(req.body);
  const students = await prisma.student.create({data: req.body}); 
  res.json({students});
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
