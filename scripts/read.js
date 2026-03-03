// Read the html page that the User is using, and save their notes as JSON
// offer to download the JSON with an alert()

const bulletinBoard = document.getElementById("bulletin-board");


export function readBoard(notesArray) {
    console.log(notesArray);
    let saveFile = {notes:[]}; // This will be JSON, added onto later
  
    for (const note of notesArray) {
      console.log("Adding Note " + note.id + " to JSON-export file");
      saveFile.notes.push(String(note.innerHTML));
      
    }
    let saveJSON = JSON.stringify(saveFile,null,1)
    downloadSave(saveJSON)
    console.log(saveFile);
}

function downloadSave(object){
    let datastring = 'data:text/json;charset=utf-8,' + encodeURI(object);

    // Create an anchor element for the download
    const downloadLink = document.createElement('a');
    downloadLink.href = datastring;
    downloadLink.download = "notes.json"; // Set the file name

    // Append the link to the body (necessary for Firefox)
    document.body.appendChild(downloadLink);

    // Programmatically click the link to trigger the download
    downloadLink.click();

    // Clean up by removing the link and revoking the URL
    document.body.removeChild(downloadLink);
};
