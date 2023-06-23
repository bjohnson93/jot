import { AppState } from "../AppState.js";
import { notesService } from "../services/NotesService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML, setText } from "../utils/Writer.js";


function _drawListOfNotes() {
  const notesList = AppState.notes
  let template = ''
  // console.log(notesList);

  notesList.forEach(n => template += n.ListOfNotesTemplate)
  // console.log(template);
  setHTML('notes-list', template)
  //later put in the amount of notes with setText!ff
  setText('amountJots', AppState.notes.length)
}

function _drawActiveNote() {
  const activeNote = AppState.activeNote
  // console.log('heres a hello from the actives', activeNote);
  if (activeNote) {
    setHTML('active-note', activeNote.ActiveNoteTemplate)
  } else {
    return
  }
}

export class NotesController {

  constructor() {
    // console.log('the notes controller is hooked up :)');
    _drawListOfNotes()
    _drawActiveNote()

    AppState.on('notes', _drawListOfNotes)
    AppState.on('activeNote', _drawActiveNote)
  }

  createNote() {
    event.preventDefault()
    const form = event.target
    // console.log('yo the create button note works!');
    let noteData = getFormData(form)
    console.log(noteData);
    notesService.createNote(noteData)
  }

  selectActiveNote(noteId) {
    // console.log('you selected a note');
    notesService.selectActiveNote(noteId)
  }

  saveActiveNote() {
    event?.preventDefault()
    const form = event?.target
    let noteScript = getFormData(form)
    // console.log('here is the note', theNote);
    console.log('here is noteScript from the controller:', noteScript);

    notesService.saveActiveNote(noteScript)
  }

  async deleteNote(noteId) {
    console.log('you clicked the delete button.');
    const areYouSure = await Pop.confirm('Are you sure you want to delete this note?!')
    if (!areYouSure) {
      return
    }
    notesService.deleteNote(noteId)
  }
}