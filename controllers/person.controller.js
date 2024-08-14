import Person from "../models/person.model.js";

// create new
async function createPerson(req, res) {
  try {
    const newPerson = await Person.create(req.body);
    res.json(newPerson);
  } catch (error) {
    console.log("CREATE error", error);
    res.status(400).json(error);
  }
}

// READ ALL

async function readAll(req, res) {
  try {
    const newPerson = await Person.find();
    res.json(newPerson);
  } catch (error) {
    console.log("READALL error", error);
    res.status(400).json(error);
  }
}
export { createPerson, readAll };
