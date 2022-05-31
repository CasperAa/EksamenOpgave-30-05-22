import { handleErrors } from "../fetchUtils.js";
import { URL } from "../settings.js";

const raceURL = URL + "/races"

export function raceHandelsers(){
    showAllRaces()
    showAllRacesInOptions()
    document.getElementById("show-btn").addEventListener("click", showRaceWithData)
    document.getElementById("hide-btn").addEventListener("click", hideData)
    

}

async function showAllRaces(){
    try{
    const races = await fetch(raceURL).then(res => handleErrors (res))
        console.log(races)
        const tableData = races.map(race => `
        <tr> 
            <td>${race.id}</td>    
            <td>${race.name}</td>
            <td>${race.distance}</td>
            <td>${race.type}</td
        </tr>
        `).join("\n")
        document.getElementById("tbl-body").innerHTML = tableData
    }catch{
        //console.log(error.messange)
    }
    
}

async function showAllRacesInOptions(){
    try{
    const races = await fetch(raceURL).then(res => handleErrors (res))
        const allRaces = races.map(race => `
                
                <option value="${race.id}"> ${race.name} </option>    
      
        `).join("\n")
        document.getElementById("showForRace").innerHTML = allRaces
    }catch{
        //console.log(error.messange)
    }
}


async function showRaceWithData(){
    document.getElementById("race-results").innerHTML = ""
    const searchTeam = document.getElementById("showForRace").value
    console.log(raceURL + "/race/" + searchTeam)
    try{
    const racesWithData = await fetch(raceURL + "/race/" + searchTeam).then(res => handleErrors (res))
    console.log(racesWithData)
        const tableData = racesWithData.map(raceData => `
            <tr> 
                <td>${raceData.raceName}</td>    
                <td>${raceData.cyclistFirstName + " " + raceData.cyclistLastName}</td>
                <td>${raceData.team}</td>
                <td>${raceData.duration}</td>
                <td>${raceData.placement}</td>
                <td>${raceData.points}</td>
            </tr>
        `).join("\n")
        console.log("after promise")
        document.getElementById("race-results").innerHTML = tableData
    }catch{
        //console.log(error.messange)
    }
}

function hideData(){
    document.getElementById("race-results").innerHTML = ""
    console.log("HIDE")
}
