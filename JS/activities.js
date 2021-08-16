class Activities{

    constructor(id, title, discription, date){
        this.id = id;
        this.title = title;
        this.discription = discription;
        this.date = date;
    }

}
/*
 <div class="time-divider text-center">
          <span>2021</span>
        </div>


<div class="box right">
            <div class="content">
                <h2>Robotik Kol</h2>
                <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
                <img src="../assets/projects/r.jpg" class="img-fluid">
                <div class="mt-3 d-flex justify-content-between align-items-center">
                  <a class="btn btn-info">Projeye Git</a>
                  <small class="text-muted">9 mins</small>
                </div>
              </div>
            </div>
        </div>    
*/

function createActivity(data)
{
  var element = document.createElement("div");
  
  if(elementCount % 2 == 0)
  {
    element.className = "box left";
  }
  else
  {
    element.className = "box right";
  }
  
  var divContent = document.createElement("div");
  divContent.classList = "content";
  divContent.style.backgroundColor = "#00629B";
  
  var title = document.createElement("h2");
  title.innerHTML = data.title;
  title.style.color = "white";
  
  var discription = document.createElement("p");
  discription.innerHTML = data.discription;
  
  var image = document.createElement("img");
  image.src = data.image;
  image.className = "img-fluid";

  var div1 = document.createElement("div");
  div1.classList = "mt-3 d-flex justify-content-between align-items-center";
  
  var btn = document.createElement("a");
  btn.classList = "btn btn-info";
  btn.innerHTML = "Detay";
  btn.style.color = "#00629B";
  btn.style.backgroundColor = "white";

  var date = document.createElement("small");
  date.classList = "";
  date.innerHTML = data.date;
  date.style.color = "white";

  console.log(data.date);

  div1.appendChild(btn);
  div1.appendChild(date);

  divContent.appendChild(title);
  divContent.appendChild(discription);
  divContent.appendChild(image);
  divContent.appendChild(div1);

  element.appendChild(divContent);

  elementCount++;

  return element;
}

function getData(year)
{

  fetch(url + year + ".json").
  then( response => response.json())
  .then( data => createTimeLine(data, year))
  .catch( err => console.error("Data çekilirken bir hata oluştu"));

}

function createTimeLine(datas, year)
{   
    var divider = document.createElement("div");
    divider.classList = "time-divider text-center";
    divider.style.backgroundColor = "#00629B";
  
    var dividerText = document.createElement("span");
    dividerText.innerHTML = year;
    dividerText.style.color = "white";
  
    var timeLine = document.createElement("div");
    timeLine.classList = "timeline text-light";

    var i;
    for (i = 0; i < datas.length; i++) {
      var data = datas[i];
      timeLine.appendChild(createActivity(data));
    }

    divider.appendChild(dividerText);
    body.appendChild(divider);
    body.appendChild(timeLine);
}

function main()
{
  alert("Hallo?");
    console.log("main");

    getData("2021");
}

var url = "../Datas/Activities/"; 


var body = document.querySelector(".time-line");
var elementCount = 0;

main();