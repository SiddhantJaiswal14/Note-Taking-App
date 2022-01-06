console.log("Starting App.js");

const yargs = require("yargs");
const notes = require("./notes.js");
const argv = yargs.argv;

var title = argv.title;
var body = argv.body;
var command = argv._[0];

if (command === "add") {
  console.log("Note Added Successfully!!");
  notes.addingNote(title, body);
} else if (command === "remove") {
  console.log("Note Removed Successfully!!");
  notes.removingNote(title);
} else if (command === "read") {
  console.log("Read your note below");
  notes.readingNote(title);
} else if (command === "list") {
  console.log("Listing all notes");
  notes.listingNotes();
} else {
  console.log("Sorry!! Unknown command was used.");
}
