// Read the html page that the User is using, and save their notes as JSON
// offer to download the JSON with an alert()

const bulletinBoard = document.getElementById("bulletin-board");


export function readBoard(notesArray) {
    
    let saveFile = ""; // This will be JSON, added onto later
  
    for (const note of notesArray) {
      console.log("Adding Note " + note + " to JSON-export file");
      saveFile += String(note.innerHTML);
      
  }
  console.log(saveFile); // Apparantly the notes.innerHTML are "undefined" per note. Maybe do something other than inner.hmtl?
}

