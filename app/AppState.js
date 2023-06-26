import { Note } from "./models/Note.js"
import { Value } from "./models/Value.js"
import { EventEmitter } from "./utils/EventEmitter.js"
import { isValidProp } from "./utils/isValidProp.js"
import { loadState } from "./utils/Store.js"

class ObservableAppState extends EventEmitter {
  page = ''

  /** @type {import('./models/Value.js').Value[]} */
  values = loadState('values', [Value])

  // NOTE Used to load initial data


  /** @type {import('./models/Note.js').Note[]} */
  notes = [
    new Note({
      description: 'these are words, many words about notes and notes about words', type: 'JavaScript', color: 'blue', title: 'functions101'
    }),
    new Note({
      description: 'I like stylin bc I be stylin', type: 'CSS', color: 'red', title: 'make it pretty'
    })
  ]

  /** @type {import('./models/Note.js').Note | null} */
  activeNote = null

  init() {
    this.notes = loadState('notes', [Note])
  }
  //^^this is what finally brought form out of local storage and onto page :)
}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
