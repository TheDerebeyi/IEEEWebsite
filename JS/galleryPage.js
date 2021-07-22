//Youtube Videoları için



function changeVideo(a, video)
{

    videoPlayer.src = decodeVideoUrl(video.url);

    videoTitle.innerHTML = video.title;
    VideoChanel.innerHTML = video.chanel;
}

function decodeVideoUrl(url){

    var sp = url.split("watch?v=");

    return sp[0] + "embed/" + sp[1];
}

function getVideoPicture(url)
{

    var id = url.split("=")[1];
    return "http://i3.ytimg.com/vi/" + id +"/hqdefault.jpg";
}


function createYoutubeVideo(video){
    /*
    <div class="col-lg-3 col-md-4 col-xs-6 thumb">
        <a data-lightbox="mygallery" href="../assets/projects/forest.jpg" class="fancybox">
            <img  src="../assets/projects/forest.jpg" class="zoom img-fluid "  alt="">
        </a>
    </div>
    */
    var element = document.createElement("div");
    element.className = "col-lg-3 col-md-4 col-xs-6 thumb";

    var link = document.createElement("a");
    link.href = "#video";
    link.onclick = (a) => changeVideo(a, video);

    var img = document.createElement("img");
    img.classList = "zoom img-fluid";
    img.src = getVideoPicture(video.url);

    link.appendChild(img);

    element.appendChild(link);


    youtubeDiv.appendChild(element);
}

function updatePage(videoList){

    var i;

    for (i = 0; i < videoList.length; i++)
    {
        var video = videoList[i];
        
        createYoutubeVideo(video);
    }

}

var youtubeDiv = document.getElementById("video-gallery");
var videoPlayer = document.getElementById("video");
var videoTitle = document.getElementById("title");
var VideoChanel = document.getElementById("chanel");

function main()
{
    youtubeVideoList = 
    [
        {
            "title":"Veri yapıları Stack ile String ifadede parantez kullanımı kontrolü.",
            "chanel":"Ömer Demirtaş",
            "url":"https://www.youtube.com/watch?v=aBnzRjwY9tk"
        },
        {
            "title":"Veri Yapıalrı ödev #2 Stack, Linked List & Array kullanarak Tren yapısı oluşturma",
            "chanel":"Ömer Demirtaş",
            "url":"https://www.youtube.com/watch?v=HGCexcRILEE"
        }
    ];


    changeVideo(null, youtubeVideoList[0]);

    //ilk sayfa yğklendiğinde youtube  oynatcısını güncellemek için 
    updatePage(youtubeVideoList);

}

main();