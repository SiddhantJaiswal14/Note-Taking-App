const fs = require("fs");
const { title } = require("process");
var fetchNotes = () => {
  try {
    return JSON.parse(fs.readFileSync("./notes.txt")); // get all notes present beforehand from notes.txt
  } catch (err) {
    return []; // if no note is present then fetch empty note
  }
};
var addingNote = (title, body) => {
  var notes = fetchNotes(); // fetch notes if any

  var note = {
    // create a new note
    title,
    body,
  };

  var duplicate = notes.filter((note) => note === note.title);

  if (duplicate.length === 0) {
    notes.push(note); // append the note
    fs.writeFileSync("./notes.txt", JSON.stringify(notes)); // update the notes.txt
    logNotes(note);
  } else {
    console.log("Title already taken!");
  }
};

var removingNote = (title) => {
  var notes = fetchNotes();

  var filteredNotes = notes.filter((note) => note.title !== title);
  if (notes.length !== filteredNotes.length) {
    fs.writeFileSync("./notes.txt", JSON.stringify(filteredNotes));
  } else {
    console.log("Note not found!");
  }
};

var readingNote = (title) => {
  var notes = fetchNotes();

  var filteredNotes = notes.filter((note) => note.title === title);
  logNotes(filteredNotes[0]);
};

var listingNotes = () => {
  var notes = fetchNotes();

  notes.forEach((note) => logNotes(note));
};

var logNotes = (note) => {
  // function to print note on command line
  console.log("************************");
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
};

module.exports = {
  addingNote,
  removingNote,
  readingNote,
  listingNotes,
};
