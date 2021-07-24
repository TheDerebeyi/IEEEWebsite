var obj = [
    {
        "id": "1",
        "title": "Mentör Buluşmaları",
        "discription": "Bu etkinlik klüb üyelerimiz ile...",
        "image": "../assets/projects/r.jpg",
        "date": "2020-11-17T03:24:00"
    },
    {
        "id": "2",
        "title": "Elektronik Günleri",
        "discription": "Bu etkinlik klüb üyelerimiz ile...",
        "image": "../assets/projects/r.jpg",
        "date": "2021-12-17T03:24:00"
    }
];


var arr = [];

var counter = 0;

for (let i = 0; i < obj.length; i++) {
    let date1 = new Date(obj[i].date);
    let date2 = new Date();

    let gün;
    let saat;
    let dakika;
    if (date1.getUTCFullYear - date2.getUTCFullYear > 0) {
        arr[counter] = obj[i];
        counter++;
    }
    else if(date1.getUTCFullYear - date2.getUTCFullYear == 0){
        if (date1.getUTCMonth - date2. getUTCMonth > 0){
            arr[counter] = obj[i];
            counter++;
        }
        else if (date1.getUTCMonth - date2. getUTCMont == 0){
            if(date1.getUTCMonth - date2. getUTCMonth > 0){

            }

            else if(date1.getUTCMonth - date2. getUTCMonth == 0){
                if (date1.getUTCDay - date2. getUTCDay > 0 ){}
                else if(date1.getUTCDay - date2. getUTCDay == 0){
                    
                }
            }
        }
    }
}

alert(obj[1].id);

/*        gün = date1.getUTCDate() - date2.getUTCDate();
        if (date1.getUTCHours() - date2.getUTCHours() >= 0) {
            saat = date1.getUTCHours() - date2.getUTCHours()
        }
        else {
            gün -= 1;
            saat = date1.getUTCHours() - date2.getUTCHours() + 24;
        }
        if (date1.getUTCMinutes() - date2.getUTCMinutes() >= 0) {
            dakika = date1.getUTCMinutes() - date2.getUTCMinutes();
        }
        else {
            dakika = date1.getUTCMinutes() - date2.getUTCMinutes() + 60;
            saat -= 1;
        }*/