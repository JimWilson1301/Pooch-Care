function toggle() {
    var trailer = document.querySelector(".trailer");
    var video = document.querySelector("iframe");
    trailer.classList.toggle("active");
    // video.pause();
    // video.currentTime = 0;
  }
  
  function stopVideos() {
    toggle();
    var videos = document.querySelectorAll("iframe, video");
    Array.prototype.forEach.call(videos, function (video) {
      if (video.tagName.toLowerCase() === "video") {
        video.pause();
      } else {
        var src = video.src;
        video.src = src;
      }
    });
  }
  
  window.onscroll = function () {
    scrollFunction();
  };
  
  function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("header").style.height = "80px";
    } else {
      document.getElementById("header").style.height = "90px";
    }
  }
  var open = true;
  function myFunction() {
    var container_reponsive = document.getElementById("container-reponsive");
    container_reponsive.classList.toggle("open");
    var navbar_reponsive = document.getElementById("navbar-reponsive");
    navbar_reponsive.classList.toggle("open");
    var container_fluid = document.getElementById("container-fluid");
    container_fluid.classList.toggle("open");
  
    var open_button = document.getElementById("open-button");
    
    if (open) {
      open_button.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
      open = false;
    } else {
      open_button.innerHTML = `<i class="fa fa-bars"></i>`
      open = true;
    }
    
  }
  
  $(document).ready(function() {
    $(".counter").counterUp({
      time: 1500
    });
  });
  