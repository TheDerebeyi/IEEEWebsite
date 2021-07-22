const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const title = document.querySelector("#community-name"); 
const description = document.querySelector("#description");
const mission = document.querySelector("#mission") 
const goal = document.querySelector("#goal") 

function editPage(data){

    title.innerHTML = data.name;

    description.innerHTML = data.description;
    
    mission.innerHTML = data.mission;   

    goal.innerHTML = data.goal;
}

function getData(url){

    fetch(url)
    .then( response => response.json())
    .then( data => editPage(data))
    .catch( err => console.log(err));

}

function main(){    

    var url = "../Datas/community/" + urlParams.get("community") + ".json";

    document.title = "IEEE SAÜ |  " + urlParams.get("community");

    console.log(url);

    getData(url);
}



main();