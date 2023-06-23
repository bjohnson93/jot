import { AppState } from "../AppState.js";
import { Note } from "../models/Note.js";
import { saveState } from "../utils/Store.js";

function _saveState() {
  saveState('notes', AppState.notes)
}


class NotesService {
  createNote(noteData) {
    // console.log('yo now we got the data to the svc, good job', noteData);
    // debugger
    const newNote = new Note(noteData)
    console.log(newNote, 'here is the new note');
    AppState.notes.push(newNote)
    AppState.emit('notes')
    AppState.emit('activeNote')
    console.log(AppState.notes);

    _saveState()
  }
  selectActiveNote(noteId) {
    const selectedNote = AppState.notes.find(n => n.id == noteId)
    // console.log('here is the selected note, now in service', selectedNote);
    AppState.activeNote = selectedNote
    // console.log('active note', AppState.activeNote);

  }
  saveActiveNote(noteScript) {
    console.log(noteScript, 'from service');
    const activeNote = AppState.activeNote
    activeNote.description = noteScript.description
    activeNote.dateEdited = new Date()
    console.log(activeNote, 'here is the new active note');
    AppState.emit('activeNote')
    //this one took a long time. the .description on noteScript above is what took the new form data out from being an object.
    // console.log(noteScript, 'coming from the service... noteScript');

    // console.log(AppState.activeNote);

    _saveState()

  }
  deleteNote(noteId) {
    //you want to FIND the index of the selected note to delete
    const noteIndex = AppState.notes.findIndex(n => n.id == noteId)
    console.log('index of the note', noteIndex);
    //then you splice (remove at that index, 1 object)
    AppState.notes.splice(noteIndex, 1)
    //then save it in place
    _saveState()
    AppState.emit('notes')
  }

}

export const notesService = new NotesService()