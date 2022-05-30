import "https://unpkg.com/navigo"  //Will create the global Navigo object used below

import { setActiveLink, loadTemplate, renderTemplate, adjustForMissingHash } from "./utils.js"
import { racerHandelsers } from "./racers/racer.js"
import { editHandelsers } from "./edit/edit.js"
import { teamHandelsers } from "./teams/teams.js"
import { addHandelers } from "./add/add.js"



window.addEventListener("load", async () => {
  const templateRacers = await loadTemplate("./racers/racer.html")
  const templateEdit = await loadTemplate("./edit/edit.html")
  const templateAdd = await loadTemplate("./add/add.html")
  const templateTeams = await loadTemplate("./teams/teams.html")



  const router = new Navigo("/", { hash: true });
  adjustForMissingHash()
  router
    .hooks({
      before(done, match) {
        setActiveLink("menu", match.url)
        done()
      }
    })

    .on("/Racers", () => {
      renderTemplate(templateRacers, "content")
      router.updatePageLinks()
      racerHandelsers()

    })

    
    .on("/Teams", () => {
      renderTemplate(templateTeams, "content")
      router.updatePageLinks()
      teamHandelsers()
    })

    .on("/AddRacer", (match) => {
        renderTemplate(templateAdd, "content")
        addHandelers(match)
        console.log(match)

    })

    .on("/EditRacer", (match) => {
    renderTemplate(templateEdit, "content")
        console.log(match)
        editHandelsers(match)

    })

    });   

  window.onerror = (e) => alert(e)