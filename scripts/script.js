
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
    

    // find the tag
    let tag = document.getElementById(tagId);
    let offsetX, offsetY;
    

    tag.addEventListener("mousedown", startDrag);
    tag.addEventListener("mouseup", stopDrag);

    function startDrag(e) {
        e.preventDefault();
        offsetX = e.clientX - tag.getBoundingClientRect().left;
        offsetY = e.clientY - tag.getBoundingClientRect().top;

        tag.classList.add("dragging");

        document.addEventListener("mousemove", dragtag);
    }

    function dragtag(e) {
        e.preventDefault();
        let x = e.clientX - offsetX;
        let y = e.clientY - offsetY;

        tag.style.left = x + 'px';
        tag.style.top = y + 'px';
    };

    function stopDrag() {
        tag.classList.remove("dragging");
        document.removeEventListener("mousemove", dragtag);
    }

    return tagCount;
};


const tagBook = document.querySelectorAll(".draggable");


console.log(tagBook);