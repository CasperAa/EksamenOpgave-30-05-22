import { handleErrors } from "../fetchUtils.js";
import { URL } from "../settings.js";

const racerURL = URL + "/racers"


export function racerHandelsers(){
    showAllRacers();
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