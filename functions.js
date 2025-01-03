const closebtn=document.querySelector(".close-btn");
const about=document.querySelector(".about");
const aboutbtn=document.querySelector(".about-btn");
const lockintro=document.querySelector(".lock-intro");
const latestbutton = document.querySelector(".latest-btn");
const topbutton = document.querySelector(".top-btn");
const logo1=document.querySelector(".logo1");
closebtn.addEventListener("click",function(){
about.classList.add("hidden");
})

aboutbtn.addEventListener("click",function(){
about.classList.remove("hidden");
})

function disableSectionScroll(event) {
    event.preventDefault();
  }
  lockintro.addEventListener("wheel", disableSectionScroll, { passive: false });
  lockintro.addEventListener("touchmove", disableSectionScroll, { passive: false });
  


  latestbutton.addEventListener("click", () => {
    window.scrollBy({
      top: window.innerHeight, // Scroll down by 100vh (viewport height)
      behavior: "smooth" // Smooth scrolling effect
    });
  });
  
  topbutton.addEventListener("click", () => {
    window.scrollTo({
      top: 0, // Scroll down by 100vh (viewport height)
      behavior: "smooth" // Smooth scrolling effect
    });
  });
  

  