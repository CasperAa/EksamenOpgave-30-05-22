import { handleErrors, makeOptions } from "../fetchUtils.js";
import { URL } from "../settings.js";

const racerURL = URL + "/racers"


export function editHandelsers(match){
    const racerId = match.params.id;
    showRacerbasedOnID(racerId);
    document.getElementById("submit-btn").addEventListener("click", editRacer)
}


async function showRacerbasedOnID(id){
    try{
    const racer = await fetch(racerURL+"/"+id).then(res => handleErrors (res))
        document.getElementById("firstName").value = racer.firstName;
        document.getElementById("lastName").value = racer.lastName;
        document.getElementById("country").value = racer.country;
        document.getElementById("age").value = racer.age;
        document.getElementById("points").value = racer.points;
        document.getElementById("id").value = racer.id;
        

    }catch{ 
        console.log(error.messange)
    }
}

async function editRacer(){
    const racerId = document.getElementById("id").value
    const racerToAdd = {}
    racerToAdd.firstName = document.getElementById("firstName").value
    racerToAdd.lastName = document.getElementById("lastName").value
    racerToAdd.country = document.getElementById("country").value
    racerToAdd.age = document.getElementById("age").value
    racerToAdd.points = document.getElementById("points").value
    console.log(racerToAdd)
    try{
        await fetch(racerURL+"/"+racerId, makeOptions("PUT", racerToAdd)).then(res => handleErrors (res))
        
        }catch{ 
            console.log(error.messange)
        }
}




