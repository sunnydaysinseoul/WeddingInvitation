const myImage = document.getElementsByClassName("img");
document.addEventListener('DOMContentLoaded', function () {
  if (!Notification) {
    alert('Notification not supported');
    return;
  }
});
var myIndex = 0;

function changeImage() {
  var i;
  for (i = 0; i < myImage.length; i++) {
    myImage[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > myImage.length) {myIndex = 1}    
  myImage[myIndex-1].style.display = "block";  
  setTimeout(changeImage, 3000);    
}

function init(){
  myImage[0].style.display = "block";  
  for (i = 0; i < myImage.length; i++) {
    myImage[i].style.display = "none";  
  }
  changeImage();
}


function notif(bodis) {
  if (Notification.permission !== "granted")
    Notification.requestPermission();
  else {
    var notification = new Notification('Notification Title', {
      icon: 'url/to/icon.png',
      body: bodis,
    });

    notification.onclick = function () {
      window.open("window/open/on/notification/click");
    };
  }
}

init();

