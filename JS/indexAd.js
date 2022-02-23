function ad(link){
    //const body = document.getElementsByTagName("body");
    const obj = document.getElementById("ad");
    document.getElementsByTagName("body")[0].style.overflowY = "hidden";
    obj.style.position = "fixed";
    obj.style.width = "100%";
    obj.style.backgroundColor = "rgba(128,128,128,.5)";
    obj.style.top = "0";
    obj.style.right= "0";
    obj.style.height= "100vh";
    const div = document.createElement("div");
    div.style.padding = "50px";
    div.style.width = "fit-content";
    div.style.margin = "auto";
    div.style.position = "relative";
    obj.style.paddingTop = "15vh";
    const close = document.createElement("button");
    close.className = "btn-close";
    close.type= "button";
    close.style.width = "40px";
    close.style.height = "40px";
    close.style.margin = "10px";
    close.style.right = "0";
    close.style.top = "0";
    close.style.position="absolute";
    close.onclick= ()=>{
        obj.remove();
        document.getElementsByTagName("body")[0].style.overflowY = "scroll";
    };
    close.ariaLabel = "Kapat";
    const ad = document.createElement("img");
    ad.src = link;
    ad.style.opacity = "1";
    ad.style.height = "65vh";
    const linkInner = document.createElement("a");
    linkInner.href = "https://www.instagram.com/p/CaUTl3ysq7v/";
    obj.appendChild(div);
    div.appendChild(close);
    div.appendChild(linkInner);
    linkInner.appendChild(ad);
}


ad("./images/2022/enerji zirvesi.jpeg");