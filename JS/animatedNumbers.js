var values = [7,8,500];
var counter = 1;

function animatedNumbers() {
    let object1 = document.getElementById("num1");
    let range = values[counter-1];
    let i = 0;
    let myVar = setInterval(() => { if (i > range) {  counter++; animatedNumbers2(); clearInterval(myVar);}else{ object1.innerHTML = i; i++; }}, 50);
}

function animatedNumbers2() {
    let object2 = document.getElementById("num2");
    let range2 = values[counter-1];
    let i2 = 0;
    let myVar2 = setInterval(() => { if (i2 > range2) { counter++; animatedNumbers3(); clearInterval(myVar2); }else{ object2.innerHTML = i2; i2++; }}, 50);
}

function animatedNumbers3() {
    let object3 = document.getElementById("num3");
    let range3 = values[counter-1];
    let i3 = 0;
    let myVar3 = setInterval(() => { if (i3 > range3) { clearInterval(myVar3); } else{ object3.innerHTML = i3; i3++; }}, 10);
}

/*function animatedNumbers(val) {
    let object = document.getElementById(val);
    let range = values[counter-1];
    let i = 0;
    let myVar = setInterval(() => { if (i >= range) { clearInterval(myVar); counter++; if(counter < 4){animatedNumbers("num" + counter);}} object.innerHTML = i; i++; }, 1000);
}*/

/*function animatedNumbers2(val2) {
    let object2 = document.getElementById(val2);
    let range2 = object2.innerHTML;

    let i2 = 0;
    let myVar2 = setInterval(() => { if (i2 >= range2) { clearInterval(myVar2);} object2.innerHTML = i2; i2++; }, 10);
}*/

/*function isIntoView(elem)
{
    var documentViewTop = $(window).scrollTop();
    var documentViewBottom = documentViewTop + $(window).height();

    var elementTop = $(elem).offset().top;
    var elementBottom = elementTop + $(elem).height();

    return ((elementBottom <= documentViewBottom) && (elementTop >= documentViewTop));
}
  $(window).scroll(function(){
   if (isIntoView($('#stats'))){
        animatedNumbers("num" + counter);
    }
})
*/

animatedNumbers();