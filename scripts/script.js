
// original dragging tutorial
// https://dev.to/code_passion/creating-a-draggable-element-using-html-css-and-javascript-54g7

/*

    One Bug: If you have multiple "tags" and then click and drag the oldest one onto the next oldest one...
    then soon you can drag around a stack. I want to make this a feature and reverse it for whatever you click 

    bug seems to bee based off of the z-index
*/

const addNoteBtn = document.getElementById("add-btn");
let tagCount = 0;
addNoteBtn.addEventListener("click", () => {
    makeNote(tagCount)
    tagCount++;
});


function makeNote(tagCount) {
    let tagId = "tag" + `${tagCount}`;

    // create the tag
    const newTag = document.createElement("div");
    newTag.id = tagId;
    newTag.className = "draggable";
    document.querySelector("main").appendChild(newTag);
    
    // create note to follow tag
    const tagNote = document.createElement("div"); // the actual note that the user uses is just a content editable div that follows it's parent tag.
    tagNote.className = "note"; // I might implement groups later on so we can have multiple colors for note organization!
    tagNote.setAttribute("contenteditable", "true");

    newTag.appendChild(tagNote);

    // find the tag
    let tag = document.getElementById(tagId);
    let offsetX, offsetY;
    
    // mouse events
    tag.addEventListener("mousedown", startDrag);
    document.addEventListener("mouseup", stopDrag);

    // touch events
    tag.addEventListener("touchstart", startDrag);
    document.addEventListener("touchend", stopDrag);

    function startDrag(e) {

        if (e.target.classList.contains("note")) { // cease dragging behavior for notes. only drag from tag!
            return;
        }

        e.preventDefault();

        if (e.type === "touchstart") {
            offsetX = e.touches[0].clientX - tag.getBoundingClientRect().left;
            offsetY = e.touches[0].clientY - tag.getBoundingClientRect().top;
        } else {
            offsetX = e.clientX - tag.getBoundingClientRect().left;
            offsetY = e.clientY - tag.getBoundingClientRect().top;
        }

        tag.classList.add("dragging");

        document.addEventListener("mousemove", dragtag);
        document.addEventListener("touchmove", dragtag);
    }

    function dragtag(e) {
        e.preventDefault();

        let clientX, clientY;

        if (e.type === "touchmove") {
            clientX = e.touches[0].clientX;
            clientY = e.touches[0].clientY;
        } else {
            clientX = e.clientX;
            clientY = e.clientY;
        }

        //sets variables for touch IF there is a touch
        


        let x = clientX - offsetX;
        let y = clientY - offsetY;

        tag.style.left = x + 'px';
        tag.style.top = y + 'px';
    };

    function stopDrag() {
        tag.classList.remove("dragging");
        document.removeEventListener("mousemove", dragtag);
        document.removeEventListener("touchmove", dragtag);
        
    }

    return tagCount;
};


const tagBook = document.querySelectorAll(".draggable");


console.log(tagBook);