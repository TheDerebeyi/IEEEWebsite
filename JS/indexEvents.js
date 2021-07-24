async function foo() {

    var source = await fetch("./Datas/Activities/2021.json");

    var obj = await source.json();

    alert(data[0].id);

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
                    if (date1.getUTCDay() - date2.getUTCDay() > 0) {
                        arr[counter] = i;
                        counter++;
                    }
                    else if (date1.getUTCDay() - date2.getUTCDay() == 0) {
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
        document.getElementById("events-table" + i + "-date").innerHTML = obj[arr[i - 1]].date;
        document.getElementById("events-table" + i + "-desc").innerHTML = obj[arr[i - 1]].description;
    }
}

foo();