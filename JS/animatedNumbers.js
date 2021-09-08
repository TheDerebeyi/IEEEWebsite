var values = [100,50,10];
var counter = 1;

function animatedNumbers(val) {
    let object = document.getElementById(val);
    let range = values[counter-1];
    let i = 0;
    let myVar = setInterval(() => { if (i >= range) { clearInterval(myVar); counter++; if(counter < 4){animatedNumbers("num" + counter);}} object.innerHTML = i; i++; }, 15);
}

/*function animatedNumbers2(val2) {
    let object2 = document.getElementById(val2);
    let range2 = object2.innerHTML;

    let i2 = 0;
    let myVar2 = setInterval(() => { if (i2 >= range2) { clearInterval(myVar2);} object2.innerHTML = i2; i2++; }, 10);
}*/



function isIntoView(elem)
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
