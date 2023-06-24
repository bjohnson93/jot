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
    <button class="btn button text-light fs-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"
    aria-controls="offcanvasExample">
    List of Notes
  </button>
  <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
    <div class="offcanvas-header">
    <div class="vstack">
    <p class="fs-2">Jots: <span id="amountJots">0</span></p>
    <p id="notes-list" class="fs-4">Type of Note, color</p>
    
    </div>
  </div>

      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
    </div>
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


