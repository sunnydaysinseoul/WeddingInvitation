const myImage = document.getElementsByClassName("img");
document.addEventListener("DOMContentLoaded", function () {
  if (!Notification) {
    alert("Notification not supported");
    return;
  }
});
var myIndex = 0;

const changeImage = () => {
  var i;
  for (i = 0; i < myImage.length; i++) {
    myImage[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > myImage.length) {
    myIndex = 1;
  }
  myImage[myIndex - 1].style.display = "block";
  setTimeout(changeImage, 3000);
};

const init = () => {
  myImage[0].style.display = "block";
  for (i = 0; i < myImage.length; i++) {
    myImage[i].style.display = "none";
  }
  changeImage();
};

//////////////////////////////////////////////////
const notif = (bodis) => {
  if (Notification.permission !== "granted") Notification.requestPermission();
  else {
    var notification = new Notification("Notification Title", {
      icon: "url/to/icon.png",
      body: bodis,
    });

    notification.onclick = function () {
      window.open("window/open/on/notification/click");
    };
  }
};

//////////////////////////////////////////////////
let deferredPrompt;

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  console.log("👍", "beforeinstallprompt", event);
  window.deferredPrompt = event;
});

const installApp = async () => {
  console.log("👍", "butInstall-clicked");
  const promptEvent = window.deferredPrompt;
  if (!promptEvent) {
    console.log("The deferred prompt isn't available.");
    return;
  }
  // Show the install prompt.
  promptEvent.prompt();
  // Log the result
  const result = await promptEvent.userChoice;
  console.log("👍", "userChoice", result);
  // Reset the deferred prompt variable, since
  // prompt() can only be called once.
  window.deferredPrompt = null;
};

//////////////////////////////////////////////////
init();
