import { generateId } from "../utils/generateId.js";



export class Note {

  constructor(data) {
    this.id = generateId()
    this.description = data.description
    this.type = data.type
    this.color = data.color
    this.title = data.title
    this.dateCreated = data.dateCreated ? new Date(data.dateCreated) : new Date()
    this.dateEdited = data.dateEdited ? new Date(data.dateEdited) : new Date()
  }

  get ListOfNotesTemplate() {
    return `
    <div class="p-2 ">
    <p class="fs-3 mb-0 selectable" onclick="app.NotesController.selectActiveNote('${this.id}')">${this.title} <i class="fs-5 mdi mdi-circle-double" style="color:${this.color};"></i></p>
    <p class="fs-4 mb-0">${this.type} </p> 

    </div>
    `

  }

  get ActiveNoteTemplate() {
    return /*html*/`

      <div class="row ">
        <div class="col-3 p-4" style="background-color: ${this.color};">
          <p class="fs-1">${this.title} </p>
          <p class="fs-2">${this.type}</p>
          <p class="fs-5">Date Created: ${this.dateCreated.toLocaleString()}</p>
          <p class="fs-5">Date Edited: ${this.dateEdited.toLocaleString()}</p>
        </div>
        <div class="col-7 bg-white">
          <form class="p-3" onsubmit="app.NotesController.saveActiveNote()">
            <label for="activeNote"></label>
            <textarea id="activeNote" class="fs-5" cols="57%" rows="17%" name="description">${this.description}</textarea>
            <button class="btn ms-3 px-2 button">Save Note!</button>
            </div>
        <div class="col-2 p-4" style="background-color: ${this.color};">
          <button class="btn button" id="activeNote" onclick="app.NotesController.deleteNote('${this.id}')">Delete <i class="mdi mdi-trash-can"></i></button>
          </form>

        </div>
      </div>

    `
  }
}