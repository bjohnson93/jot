import { AboutController } from "./controllers/AboutController.js";
import { HomeController } from "./controllers/HomeController.js";
import { NotesController } from "./controllers/NotesController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";


export const router = [
  {
    path: '',
    controller: NotesController,
    view: /*html*/`
    <div class="container-fluid p-3">
    <section class="row">
      <div class="col-3">
        <p class="fs-3">Jots: <span id="amountJots">0</span></p>
        <p id="notes-list" class="fs-4">Type of Note, color</p>
      </div>
    <div class="col-8" id="active-note">
  </div>
    `
  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: AboutView
  }
]


{/* <div class="card">
      <div class="card-body">
        <p>Home Page</p>
        <button class="btn btn-dark" onclick="app.HomeController.testButton()">😎</button>
      </div>
    </div> */}