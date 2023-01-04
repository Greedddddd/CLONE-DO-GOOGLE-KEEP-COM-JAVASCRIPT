// Elementos
const notesContainer = document.querySelector("#notes-container")

const noteInput = document.querySelector("#note-content")

const addNotebtn = document.querySelector(".add-note")

// Funções
function showNotes(){
    getNotes().forEach((note) => {
      const noteElement = creatNote(note.id, note.content, note.fixed); 

      notesContainer.appendChild(noteElement)
    });
}

function addNote() {
    const notes =getNotes();

    const noteObject = {
        id: generateId(),
        content: noteInput.value,
        fixed: false,
    };
    const noteElement = creatNote(noteObject.id, noteObject.content);

    notesContainer.appendChild(noteElement);

    notes.push(noteObject);

    saveNotes(notes);

    noteInput.value = "";
}

function generateId() {
    return Math.floor(Math.random() * 5000);
}

function creatNote(id, content, fixed){
    const element = document.createElement("div");

    element.classList.add("note");

    const textarea = document.createElement("textarea");

    textarea.value = content;

    textarea.placeholder = "Adicione algum texto...";

    element.appendChild(textarea);

    const pinIcon = document.createElement("i");

    pinIcon.classList.add(...["bi", "bi-pin"]);

    element.appendChild(pinIcon)

    //eventos do elemento
    element.querySelector(".bi-pin").addEventListener("click", () => {
        toggleFixNote(id)
    });

    return element;
}

function toggleFixNote(id){

}

//local storage
function getNotes(){
    const notes = JSON.parse(localStorage.getItem("notes") || "[]");

    return notes;
}

function saveNotes(notes) {
    localStorage.setItem("notes", JSON.stringify(notes));
}

// Eventos
addNotebtn.addEventListener("click", () => addNote());

//inicialização
showNotes();