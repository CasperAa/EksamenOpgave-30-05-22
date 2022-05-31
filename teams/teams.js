import { handleErrors } from "../fetchUtils.js";
import { URL } from "../settings.js";

const teamURL = URL + "/teams"


export function teamHandelsers(){
    showAllTeams();
}


async function showAllTeams(){
    try{
    const teams = await fetch(teamURL).then(res => handleErrors (res))
        const tableData = teams.map(team => `
        <tr> 
            <td>${team.id}</td>    
            <td>${team.name}</td>
            <td class="add-btn"> <a class="btn btn-primary" href="#/AddRacer?teamId=${team.id}&teamName=${team.name}" data-navigo> 
            Add Member to the Team </td>
        </tr>
        `).join("\n")
        document.getElementById("tbl-body").innerHTML = tableData
    }catch{
        console.log(error.messange)
    }
    
}