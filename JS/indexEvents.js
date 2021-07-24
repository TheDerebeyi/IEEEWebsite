async function foo() {

    var source = await fetch("./Datas/Activities/2021.json");

    var obj = await source.json();

    var arr = [];

    var counter = 0;

    for (let i = 0; i < obj.length; i++) {
        let date1 = new Date(obj[i].date);
        let date2 = new Date();

        if (date1.getUTCFullYear() - date2.getUTCFullYear() > 0) {
            arr[counter] = i;
            counter++;
        }
        else if (date1.getUTCFullYear() - date2.getUTCFullYear() == 0) {
            if (date1.getUTCMonth() - date2.getUTCMonth() > 0) {
                arr[counter] = i;
                counter++;
            }
            else if (date1.getUTCMonth() - date2.getUTCMont == 0) {
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
        document.getElementById("events-table" + i + "-header").innerHTML = obj[arr[i - 1]].title;

        let date = new Date(obj[arr[i - 1]].date);
       
        let tmp;
        let month;
    
        switch (date.getMonth) {
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
    
        tmp = date.getUTCDate + month + date.getUTCFullYear;

        document.getElementById("events-table" + i + "-date").innerHTML = tmp;
        document.getElementById("events-table" + i + "-desc").innerHTML = obj[arr[i - 1]].description;
    }
}

foo();