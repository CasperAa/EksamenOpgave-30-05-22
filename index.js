import "https://unpkg.com/navigo"  //Will create the global Navigo object used below

import { setActiveLink, loadTemplate, renderTemplate, adjustForMissingHash } from "./utils.js"
import { racerHandelsers } from "./racers/racer.js"
import { editHandelsers } from "./edit/edit.js"
import { teamHandelsers } from "./teams/teams.js"
import { addHandelers } from "./add/add.js"
import { raceHandelsers } from "./races/race.js"



window.addEventListener("load", async () => {
  const templateRacers = await loadTemplate("./racers/racer.html")
  const templateEdit = await loadTemplate("./edit/edit.html")
  const templateAdd = await loadTemplate("./add/add.html")
  const templateTeams = await loadTemplate("./teams/teams.html")
  const templateRaces = await loadTemplate("./races/race.html")



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

    })

    .on("/EditRacer", (match) => {
    renderTemplate(templateEdit, "content")
        editHandelsers(match)
    })

    .on("/Races", () => {
        renderTemplate(templateRaces, "content")
        raceHandelsers()
        })


    });   

  window.onerror = (e) => alert(e)