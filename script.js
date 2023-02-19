const volbutton = document.getElementById("volumebutton");
const volon = volbutton.querySelector(".on");
const voloff = volbutton.querySelector(".off");
var video = document.getElementById("vid");

console.log("Do people actually use this thing?");

volbutton.addEventListener("mouseover", (event) => {
    volbutton.style.backgroundColor = "rgb(122, 134, 148)";
    
});
volbutton.addEventListener("mouseleave", (event) => {
    volbutton.style.backgroundColor = "";
});

volbutton.addEventListener("click", (event) => {
    
    if (window.getComputedStyle(volon).display == "none") {
        voloff.style.display = "none";
        volon.style.display = "inline";
        video.muted = !video.muted;
    }

    else if (window.getComputedStyle(voloff).display == "none") {
        volon.style.display = "none";
        voloff.style.display = "inline";
        video.muted = !video.muted;
    }
    
});

const observer = new window.IntersectionObserver(([entry]) => {
  if (entry.isIntersecting) {
    console.log('ENTER')
    video.play();
    return
  }
  console.log('LEAVE')
  video.pause();
}, {
  root: null,
  threshold: 0.1, // set offset 0.1 means trigger if atleast 10% of element in viewport
});

observer.observe(video);
