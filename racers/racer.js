import { handleErrors } from "../fetchUtils.js";
import { URL } from "../settings.js";

const racerURL = URL + "/racers"
const teamURL = URL + "/teams"


export function racerHandelsers(){
    showAllRacers()
    showAllTeams()
    document.getElementById("search-btn").addEventListener("click", showAllRacersByTeam)
    
}


async function showAllRacers(){
    try{
    const racer = await fetch(racerURL).then(res => handleErrors (res))
        console.log(racer)
        const tableData = racer.map(racer => `
        <tr> 
            <td>${racer.id}</td>    
            <td>${racer.firstName}</td>
            <td>${racer.lastName}</td>
            <td>${racer.team}</td>
            <td>${racer.country}</td>
            <td>${racer.age}</td>
            <td>${racer.points}</td>
            <td class="edit-btn"> <a class="btn btn-primary" href="#/EditRacer?id=${racer.id}" data-navigo> 
            Edit </td>
        
        </tr>
        `).join("\n")
        document.getElementById("tbl-body").innerHTML = tableData
    }catch{
        console.log(error.messange)
    }
    
}

async function showAllTeams(){
    try{
    const teams = await fetch(teamURL).then(res => handleErrors (res))
        console.log(teams)
        const allTeams = teams.map(team => `
                
                <option> ${team.name} </option>    
      
        `).join("\n")
        document.getElementById("teams").innerHTML = allTeams
    }catch{
        //console.log(error.messange)
    }
}


async function showAllRacersByTeam(){
    document.getElementById("tbl-body").innerHTML = ""
    const searchTeam = document.getElementById("teams").value
    try{
    const racer = await fetch(racerURL + "?team=" + searchTeam).then(res => handleErrors (res))
        console.log(racerURL + "?team=" + searchTeam)
        const tableData = racer.map(racer => `
        <tr> 
            <td>${racer.id}</td>    
            <td>${racer.firstName}</td>
            <td>${racer.lastName}</td>
            <td>${racer.team}</td>
            <td>${racer.country}</td>
            <td>${racer.age}</td>
            <td>${racer.points}</td>
            <td class="edit-btn"> <a class="btn btn-primary" href="#/EditRacer?id=${racer.id}" data-navigo> 
            Edit </td>
        
        </tr>
        `).join("\n")
        document.getElementById("tbl-body").innerHTML = tableData
    }catch{
        console.log(error.messange)
    }
    
}

