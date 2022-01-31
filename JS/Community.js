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

    getData("Datas/Activities/2021.json", editTable);
}

function editTable(data){
    var arr = [];

    var counter = 0;
    
    for (let i = 0; i < data.length; i++) {
        let date1 = new Date(data[i].date);
        let date2 = new Date();

        if(data[i].tag != urlParams.get("community")){

            continue;
        }
        
        if (date1.getUTCFullYear() - date2.getUTCFullYear() > 0) {
            arr[counter] = i;
            counter++;
        }
        else if (date1.getUTCFullYear() - date2.getUTCFullYear() == 0) {
            if (date1.getUTCMonth() - date2.getUTCMonth() > 0) {
                arr[counter] = i;
                counter++;
            }
            else if (date1.getUTCMonth() - date2.getUTCMonth() == 0) {
                if (date1.getUTCMonth() - date2.getUTCMonth() > 0) {
                    arr[counter] = i;
                    counter++;
                }
                else if (date1.getUTCMonth() - date2.getUTCMonth() == 0) {
                    if (date1.getUTCDate() - date2.getUTCDate() > 0) {
                        arr[counter] = i;
                        counter++;
                    }
                    else if (date1.getUTCDate() - date2.getUTCDate() == 0) {
                        if (date1.getUTCHours() - date2.getUTCHours() > 0) {
                            arr[counter] = i;
                            counter++;
                        }
                        else if (date1.getUTCHours() - date2.getUTCHours() == 0) {
                            if (date1.getUTCMinutes() - date2.getUTCMinutes() > 0) {
                                arr[counter] = i;
                                counter++;
                            }
                            else if (date1.getUTCMinutes() - date2.getUTCMinutes() == 0) {
                                if (date1.getUTCSeconds() - date2.getUTCSeconds() > 0) {
                                    arr[counter] = i;
                                    counter++;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    for (let i = 1; i <= arr.length && i <= 3; i++) {
        document.getElementById("events-table" + i).style.visibility = "visible";
        document.getElementById("events-table" + i + "-header").innerHTML = data[arr[i - 1]].title;

        let date = new Date(data[arr[i - 1]].date);
       
        let tmp;
        let month;
    
        switch (date.getMonth()) {
            case 0:
                month = "Ocak";
                break;
            case 1:
                month = "Şubat";
                break;
            case 2:
                month = "Mart";
                break;
            case 3:
                month = "Nisan";
                break;
            case 4:
                month = "Mayıs";
                break;
            case 5:
                month = "Haziran";
                break;
            case 6:
                month = "Temmuz";
                break;
            case 7:
                month = "Ağustos";
                break;
            case 8:
                month = "Eylül";
                break;
            case 9:
                month = "Ekim";
                break;
            case 10:
                month = "Kasım";
                break;
            case 11:
                month = "Aralık";
                break;
        }
    
        tmp = date.getDate() + " " + month +" "+ date.getFullYear();

        document.getElementById("events-table" + i + "-date").innerHTML = tmp;
        document.getElementById("events-table" + i + "-desc").innerHTML = data[arr[i - 1]].description;
    }
}

function getData(url, callback){

    fetch(url)
    .then( response => response.json())
    .then( data => callback(data))
    .catch( err => console.log(err));

}

function main(){    

    var url = "Datas/community/" + urlParams.get("community") + ".json";

    document.title = "IEEE SAÜ |  " + urlParams.get("community");

    console.log(url);

    getData(url, editPage);
}



main();