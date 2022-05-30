import { handleErrors, makeOptions } from "../fetchUtils.js";
import { URL } from "../settings.js";

const racerURL = URL + "/racers"

export function addHandelers(match){
    addValues(match)
    document.getElementById("submit-btn").addEventListener("click", addRacer)
}


function addValues(team){
    const teamId = team.params.teamId;
    const teamName = team.params.teamName;
    

    document.getElementById("teamId").innerHTML = teamId
    document.getElementById("teamName").innerHTML = teamName


}


async function addRacer(){
    const teamId = document.getElementById("teamId").innerHTML
    console.log(teamId)

    const racerToAdd = {}
    racerToAdd.firstName = document.getElementById("firstName").value
    racerToAdd.lastName = document.getElementById("lastName").value
    racerToAdd.country = document.getElementById("country").value
    racerToAdd.age = document.getElementById("age").value
    racerToAdd.points = document.getElementById("points").value
    console.log(racerToAdd)
    try{
        await fetch(racerURL+"/"+teamId, makeOptions("POST", racerToAdd)).then(res => handleErrors (res))
        
        }catch{ 
            console.log(error.messange)
        }
}