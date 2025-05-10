// https://dev.to/code_passion/creating-a-draggable-element-using-html-css-and-javascript-54g7
let note = document.getElementById("note1");
let offsetX, offsetY;

note.addEventListener("mousedown", startDrag);
note.addEventListener("mouseup", stopDrag);

function startDrag(e) {
    e.preventDefault();
    offsetX = e.clientX - note.getBoundingClientRect().left;
    offsetY = e.clientY - note.getBoundingClientRect().top;

    note.classList.add("dragging");

    document.addEventListener("mousemove", dragNote);
}

function dragNote(e) {
    e.preventDefault();
    let x = e.clientX - offsetX;
    let y = e.clientY - offsetY;

    note.style.left = x + 'px';
    note.style.top = y + 'px';
};

function stopDrag() {
    note.classList.remove("dragging");
    document.removeEventListener("mousemove", dragNote);
}




// The note add button
const addBtn = document.getElementById("add-btn");