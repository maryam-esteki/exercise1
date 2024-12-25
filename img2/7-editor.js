/*
Look at editor.png, you should create a text editor similar to that.

- The first button removes the last letter when clicked.
- The second button deletes the entire text when clicked.
- The third button bolds the text when clicked.
- The fourth button italicizes the text when clicked.
*/
const editor = document.getElementById("editor");
const removeLastBtn = document.getElementById("remove-last");
const clearAllBtn = document.getElementById("clear-all");
const boldTextBtn = document.getElementById("bold-text");
const italicTextBtn = document.getElementById("italic-text");

removeLastBtn.addEventListener("click", () => {
    editor.value = editor.value.slice(0, -1);
});

clearAllBtn.addEventListener("click", () => {
    editor.value = "";
});

boldTextBtn.addEventListener("click", () => {
    if (editor.style.fontWeight === "bold") {
        editor.style.fontWeight = "normal";
    } else {
        editor.style.fontWeight = "bold";
    }
});

italicTextBtn.addEventListener("click", () => {
    if (editor.style.fontStyle === "italic") {
        editor.style.fontStyle = "normal";
    } else {
        editor.style.fontStyle = "italic";
    }
});
