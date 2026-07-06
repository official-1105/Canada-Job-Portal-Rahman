/*==================================================
TRAVEL RAHMAN
SCRIPT.JS
PART 1 / 10
==================================================*/

/*=========================
PRELOADER
=========================*/

window.addEventListener("load", () => {

const loader = document.getElementById("loader");

if(loader){

loader.style.opacity = "0";

setTimeout(() => {

loader.style.display = "none";

},500);

}

});

/*=========================
STICKY HEADER
=========================*/

const header = document.querySelector(".header");

window.addEventListener("scroll",()=>{

if(window.scrollY > 80){

header.classList.add("sticky");

}else{

header.classList.remove("sticky");

}

});

/*=========================
SCROLL PROGRESS BAR
=========================*/

const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll",()=>{

const scrollTop = document.documentElement.scrollTop;

const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

const progress = (scrollTop / scrollHeight) * 100;

progressBar.style.width = progress + "%";

});

/*=========================
MOBILE MENU
=========================*/

const menuBtn = document.querySelector(".menu-toggle");

const nav = document.querySelector("nav");

const menuIcon = document.querySelector(".menu-toggle i");

menuBtn.addEventListener("click",()=>{

nav.classList.toggle("active");

if(nav.classList.contains("active")){

menuIcon.classList.remove("fa-bars");

menuIcon.classList.add("fa-xmark");

}else{

menuIcon.classList.remove("fa-xmark");

menuIcon.classList.add("fa-bars");

}

});

/*=========================
CLOSE MENU
=========================*/

document.querySelectorAll("nav a").forEach(link=>{

link.addEventListener("click",()=>{

nav.classList.remove("active");

menuIcon.classList.remove("fa-xmark");

menuIcon.classList.add("fa-bars");

});

});
/*==================================================
SCRIPT.JS
PART 2 / 10
COUNTER + FAQ + TOP BUTTON
==================================================*/

/*=========================
COUNTER
=========================*/

const counters = document.querySelectorAll(".counter-box h2");

let counterStarted = false;

function startCounter() {

if(counterStarted) return;

const section = document.querySelector(".counter-section");

if(!section) return;

const top = section.getBoundingClientRect().top;

if(top < window.innerHeight - 100){

counterStarted = true;

counters.forEach(counter=>{

const target = parseInt(counter.innerText);

let count = 0;

const speed = target / 120;

const update = ()=>{

count += speed;

if(count < target){

counter.innerText = Math.ceil(count);

requestAnimationFrame(update);

}else{

counter.innerText = target + "+";

}

};

update();

});

}

}

window.addEventListener("scroll",startCounter);

window.addEventListener("load",startCounter);

/*=========================
FAQ
=========================*/

document.querySelectorAll(".faq-item").forEach(item=>{

const question = item.querySelector(".faq-question");

question.addEventListener("click",()=>{

document.querySelectorAll(".faq-item").forEach(i=>{

if(i !== item){

i.classList.remove("active");

}

});

item.classList.toggle("active");

});

});

/*=========================
BACK TO TOP
=========================*/

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY > 400){

topBtn.classList.add("show");

}else{

topBtn.classList.remove("show");

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

/*=========================
SMOOTH SCROLL
=========================*/

document.querySelectorAll('a[href^="#"]').forEach(link=>{

link.addEventListener("click",function(e){

const target = document.querySelector(this.getAttribute("href"));

if(target){

e.preventDefault();

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

/*==================================================
SCRIPT.JS
PART 3 / 10
SWIPER + AOS + DARK MODE + ACTIVE MENU
==================================================*/

/*=========================
SWIPER SLIDER
=========================*/

if(document.querySelector(".testimonial-slider")){

new Swiper(".testimonial-slider",{

loop:true,

speed:800,

spaceBetween:30,

autoplay:{

delay:3500,

disableOnInteraction:false,

},

pagination:{

el:".swiper-pagination",

clickable:true,

},

breakpoints:{

0:{
slidesPerView:1
},

768:{
slidesPerView:2
},

1200:{
slidesPerView:3
}

}

});

}

/*=========================
AOS
=========================*/

if(typeof AOS !== "undefined"){

AOS.init({

duration:1000,

once:true,

offset:80,

});

}

/*=========================
DARK MODE
=========================*/

const themeBtn=document.querySelector(".theme-toggle");

if(themeBtn){

themeBtn.addEventListener("click",()=>{

document.body.classList.toggle("dark");

const icon=themeBtn.querySelector("i");

if(document.body.classList.contains("dark")){

icon.classList.remove("fa-moon");

icon.classList.add("fa-sun");

localStorage.setItem("theme","dark");

}else{

icon.classList.remove("fa-sun");

icon.classList.add("fa-moon");

localStorage.setItem("theme","light");

}

});

if(localStorage.getItem("theme")==="dark"){

document.body.classList.add("dark");

const icon=themeBtn.querySelector("i");

icon.classList.remove("fa-moon");

icon.classList.add("fa-sun");

}

}

/*=========================
ACTIVE MENU
=========================*/

const sections=document.querySelectorAll("section[id]");

const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-120;

const height=section.offsetHeight;

if(window.scrollY>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

/*=========================
HEADER SHADOW
=========================*/

window.addEventListener("scroll",()=>{

const header=document.querySelector(".header");

if(window.scrollY>30){

header.style.boxShadow="0 10px 30px rgba(0,0,0,.10)";

}else{

header.style.boxShadow="none";

}

});
/*==================================================
SCRIPT.JS
PART 4 / 10
COOKIE + TOAST + SEARCH + LOGIN + LIVE CHAT
==================================================*/

/*=========================
COOKIE NOTICE
=========================*/

const cookieBox = document.querySelector(".cookie-box");
const cookieBtn = document.getElementById("acceptCookie");

if(cookieBox && cookieBtn){

if(!localStorage.getItem("cookieAccepted")){

setTimeout(()=>{

cookieBox.classList.add("show");

},1500);

}

cookieBtn.addEventListener("click",()=>{

localStorage.setItem("cookieAccepted","true");

cookieBox.classList.remove("show");

});

}

/*=========================
WELCOME TOAST
=========================*/

const toast=document.getElementById("toast");

if(toast){

setTimeout(()=>{

toast.classList.add("show");

},1200);

setTimeout(()=>{

toast.classList.remove("show");

},5200);

}

/*=========================
SEARCH POPUP
=========================*/

const searchPopup=document.querySelector(".search-popup");
const openSearch=document.querySelector(".open-search");
const closeSearch=document.querySelector(".close-search");

if(openSearch && searchPopup){

openSearch.addEventListener("click",()=>{

searchPopup.classList.add("active");

});

}

if(closeSearch && searchPopup){

closeSearch.addEventListener("click",()=>{

searchPopup.classList.remove("active");

});

}

window.addEventListener("keydown",(e)=>{

if(e.key==="Escape"){

searchPopup?.classList.remove("active");

}

});

/*=========================
LOGIN MODAL
=========================*/

const loginModal=document.getElementById("loginModal");
const loginBtn=document.querySelector(".login-btn");
const closeLogin=document.querySelector(".close-login");

if(loginBtn && loginModal){

loginBtn.addEventListener("click",()=>{

loginModal.classList.add("active");

});

}

if(closeLogin){

closeLogin.addEventListener("click",()=>{

loginModal.classList.remove("active");

});

}

window.addEventListener("click",(e)=>{

if(e.target===loginModal){

loginModal.classList.remove("active");

}

});

/*=========================
LIVE CHAT
=========================*/

const liveChat=document.querySelector(".live-chat");

if(liveChat){

liveChat.addEventListener("click",()=>{

window.open("https://wa.me/16722844386","_blank");

});

}
/*==================================================
SCRIPT.JS
PART 5 / 10
GALLERY + VIDEO + OBSERVER + PARALLAX
==================================================*/

/*=========================
IMAGE LIGHTBOX
=========================*/

const galleryImages=document.querySelectorAll(".gallery-grid img");

if(galleryImages.length){

const lightbox=document.createElement("div");

lightbox.id="lightbox";

lightbox.innerHTML=`
<span id="lightbox-close">&times;</span>
<img id="lightbox-img">
`;

document.body.appendChild(lightbox);

const lightboxImg=document.getElementById("lightbox-img");

galleryImages.forEach(img=>{

img.addEventListener("click",()=>{

lightbox.classList.add("show");

lightboxImg.src=img.src;

});

});

document.getElementById("lightbox-close").onclick=()=>{

lightbox.classList.remove("show");

};

lightbox.onclick=(e)=>{

if(e.target===lightbox){

lightbox.classList.remove("show");

}

};

}

/*=========================
VIDEO BUTTON
=========================*/

const videoBtn=document.querySelector(".video-btn");

if(videoBtn){

videoBtn.addEventListener("click",(e)=>{

e.preventDefault();

window.open(

"https://www.youtube.com/watch?v=dQw4w9WgXcQ",

"_blank"

);

});

}

/*=========================
INTERSECTION OBSERVER
=========================*/

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show-item");

}

});

},{

threshold:.15

});

document.querySelectorAll(

".country-card,.package-card,.why-card,.testimonial-card,.news-card"

).forEach(el=>{

observer.observe(el);

});

/*=========================
PARALLAX HERO
=========================*/

window.addEventListener("scroll",()=>{

const hero=document.querySelector(".hero");

if(hero){

hero.style.backgroundPositionY=

window.scrollY*0.4+"px";

}

});

/*=========================
LAZY IMAGE
=========================*/

document.querySelectorAll("img").forEach(img=>{

img.loading="lazy";

});

/*=========================
PREVENT DOUBLE SUBMIT
=========================*/

document.querySelectorAll("form").forEach(form=>{

form.addEventListener("submit",()=>{

const btn=form.querySelector("button");

if(btn){

btn.disabled=true;

btn.innerHTML="Please Wait...";

}

});

});
/*==================================================
SCRIPT.JS
PART 6 / 10
TYPE EFFECT + CURSOR + PERFORMANCE
==================================================*/

/*=========================
TYPE WRITER
=========================*/

const typingElement = document.querySelector(".typing-text");

if (typingElement) {

const words = [

"Student Visa",

"Work Permit",

"Tourist Visa",

"Business Visa",

"Immigration"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

const current = words[wordIndex];

if(!deleting){

typingElement.textContent = current.substring(0,charIndex++);

if(charIndex > current.length){

deleting = true;

setTimeout(typeEffect,1200);

return;

}

}else{

typingElement.textContent = current.substring(0,charIndex--);

if(charIndex < 0){

deleting = false;

wordIndex++;

if(wordIndex >= words.length){

wordIndex = 0;

}

}

}

setTimeout(typeEffect,deleting ? 45 : 90);

}

typeEffect();

}

/*=========================
CUSTOM CURSOR
=========================*/

const dot = document.querySelector(".cursor-dot");
const outline = document.querySelector(".cursor-outline");

if(dot && outline){

window.addEventListener("mousemove",(e)=>{

dot.style.left = e.clientX+"px";
dot.style.top = e.clientY+"px";

outline.style.left = e.clientX+"px";
outline.style.top = e.clientY+"px";

});

}

/*=========================
CARD HOVER EFFECT
=========================*/

document.querySelectorAll(

".country-card,.package-card,.why-card,.testimonial-card"

).forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-12px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0)";

});

});

/*=========================
NUMBER FORMAT
=========================*/

document.querySelectorAll(".counter-box h2").forEach(item=>{

const value = item.textContent.trim();

if(!value.includes("+")){

item.textContent = value + "+";

}

});

/*=========================
WINDOW RESIZE FIX
=========================*/

window.addEventListener("resize",()=>{

if(window.innerWidth > 992){

const nav = document.querySelector("nav");
const icon = document.querySelector(".menu-toggle i");

if(nav){

nav.classList.remove("active");

}

if(icon){

icon.classList.remove("fa-xmark");
icon.classList.add("fa-bars");

}

}

});

/*=========================
DISABLE RIGHT CLICK
(Optional)
=========================*/

// document.addEventListener("contextmenu",(e)=>{

// e.preventDefault();

// });

/*=========================
END PART 6
=========================*/
/*==================================================
SCRIPT.JS
PART 7 / 10
PREMIUM EFFECTS + SCROLL + NOTIFICATION
==================================================*/

/*=========================
SCROLL REVEAL
=========================*/

const revealElements = document.querySelectorAll(
".about-item,.why-card,.country-card,.package-card,.testimonial-card,.gallery-grid img,.contact-box,.footer-box"
);

const revealObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show-item");

revealObserver.unobserve(entry.target);

}

});

},{
threshold:0.15
});

revealElements.forEach(el=>{

revealObserver.observe(el);

});

/*=========================
SHOW NOTIFICATION
=========================*/

function showNotification(message){

const toast=document.getElementById("toast");

if(!toast) return;

const text=toast.querySelector("span");

if(text){

text.textContent=message;

}

toast.classList.add("show");

setTimeout(()=>{

toast.classList.remove("show");

},3500);

}

/*=========================
WELCOME MESSAGE
=========================*/

setTimeout(()=>{

showNotification("Welcome To Travel Rahman");

},2000);

/*=========================
HEADER HIDE / SHOW
=========================*/

let lastScroll=0;

window.addEventListener("scroll",()=>{

const header=document.querySelector(".header");

const current=window.pageYOffset;

if(current>150){

if(current>lastScroll){

header.style.transform="translateY(-100%)";

}else{

header.style.transform="translateY(0)";

}

}else{

header.style.transform="translateY(0)";

}

lastScroll=current;

});

/*=========================
BUTTON RIPPLE
=========================*/

document.querySelectorAll(".btn-primary,.btn-outline").forEach(btn=>{

btn.addEventListener("click",function(e){

const circle=document.createElement("span");

const diameter=Math.max(this.clientWidth,this.clientHeight);

const radius=diameter/2;

circle.style.width=diameter+"px";
circle.style.height=diameter+"px";

circle.style.left=e.offsetX-radius+"px";
circle.style.top=e.offsetY-radius+"px";

circle.classList.add("ripple");

const old=this.querySelector(".ripple");

if(old){

old.remove();

}

this.appendChild(circle);

});

});

/*=========================
AUTO CLOSE MOBILE MENU
=========================*/

document.querySelectorAll("nav ul li a").forEach(link=>{

link.addEventListener("click",()=>{

const nav=document.querySelector("nav");

const icon=document.querySelector(".menu-toggle i");

if(nav){

nav.classList.remove("active");

}

if(icon){

icon.classList.remove("fa-xmark");

icon.classList.add("fa-bars");

}

});

});

/*=========================
END PART 7
=========================*/
/*==================================================
SCRIPT.JS
PART 8 / 10
FORM VALIDATION + NEWSLETTER + UI EFFECTS
==================================================*/

/*=========================
CONTACT FORM VALIDATION
=========================*/

const contactForm = document.querySelector(".contact-form form");

if(contactForm){

contactForm.addEventListener("submit",(e)=>{

e.preventDefault();

const name = contactForm.querySelector('input[name="name"]');
const email = contactForm.querySelector('input[name="email"]');
const message = contactForm.querySelector("textarea");

if(!name.value.trim()){

showNotification("Please enter your name");

name.focus();

return;

}

if(!email.value.trim()){

showNotification("Please enter your email");

email.focus();

return;

}

const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailPattern.test(email.value)){

showNotification("Please enter a valid email");

email.focus();

return;

}

if(!message.value.trim()){

showNotification("Please enter your message");

message.focus();

return;

}

const btn = contactForm.querySelector("button");

btn.disabled = true;

btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

setTimeout(()=>{

btn.disabled = false;

btn.innerHTML = "Send Message";

contactForm.reset();

showNotification("Message sent successfully!");

},1800);

});

}

/*=========================
NEWSLETTER
=========================*/

const newsletterForm = document.querySelector(".newsletter form");

if(newsletterForm){

newsletterForm.addEventListener("submit",(e)=>{

e.preventDefault();

const input = newsletterForm.querySelector("input");

if(input.value.trim()===""){

showNotification("Please enter your email");

input.focus();

return;

}

newsletterForm.reset();

showNotification("Thanks for subscribing!");

});

}

/*=========================
BUTTON LOADING EFFECT
=========================*/

document.querySelectorAll(".btn-primary").forEach(btn=>{

btn.addEventListener("click",()=>{

btn.classList.add("loading");

setTimeout(()=>{

btn.classList.remove("loading");

},1200);

});

});

/*=========================
COPY EMAIL
=========================*/

const emailLink = document.querySelector(".copy-email");

if(emailLink){

emailLink.addEventListener("click",(e)=>{

e.preventDefault();

const email = emailLink.dataset.email;

navigator.clipboard.writeText(email);

showNotification("Email copied!");

});

}

/*=========================
CURRENT YEAR
=========================*/

const year = document.getElementById("year");

if(year){

year.textContent = new Date().getFullYear();

}

/*=========================
END PART 8
=========================*/

/*==================================================
SCRIPT.JS
PART 9 / 10
PERFORMANCE + SCROLL SPY + MOBILE FIX
==================================================*/

/*=========================
LAZY ANIMATION
=========================*/

const animateItems = document.querySelectorAll(
".country-card,.package-card,.why-card,.testimonial-card,.news-card,.gallery-grid img,.about-item"
);

const animationObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("animate");

animationObserver.unobserve(entry.target);

}

});

},{
threshold:0.10
});

animateItems.forEach(item=>{

animationObserver.observe(item);

});

/*=========================
SCROLL SPY
=========================*/

const allSections = document.querySelectorAll("section[id]");
const menuLinks = document.querySelectorAll("nav ul li a");

function activeMenu(){

let current = "";

allSections.forEach(section=>{

const sectionTop = section.offsetTop - 130;
const sectionHeight = section.offsetHeight;

if(window.scrollY >= sectionTop){

current = section.getAttribute("id");

}

});

menuLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href") === "#" + current){

link.classList.add("active");

}

});

}

window.addEventListener("scroll",activeMenu);

/*=========================
HEADER BACKGROUND
=========================*/

window.addEventListener("scroll",()=>{

const header=document.querySelector(".header");

if(window.scrollY>50){

header.classList.add("scrolled");

}else{

header.classList.remove("scrolled");

}

});

/*=========================
MOBILE MENU RESET
=========================*/

window.addEventListener("resize",()=>{

const nav=document.querySelector("nav");

const icon=document.querySelector(".menu-toggle i");

if(window.innerWidth>992){

nav.classList.remove("active");

if(icon){

icon.classList.remove("fa-xmark");
icon.classList.add("fa-bars");

}

}

});

/*=========================
PAGE VISIBILITY
=========================*/

document.addEventListener("visibilitychange",()=>{

if(document.hidden){

console.log("Page Hidden");

}else{

console.log("Page Active");

}

});

/*=========================
ERROR SAFE
=========================*/

window.onerror=function(message,file,line){

console.log("JS Error:",message);

return true;

};

/*=========================
END PART 9
=========================*/
/*==================================================
SCRIPT.JS
PART 10 / 10 (FINAL)
FINAL INITIALIZATION
==================================================*/

/*=========================
AUTO UPDATE FOOTER YEAR
=========================*/

const footerYear = document.querySelector("#year");

if(footerYear){

footerYear.textContent = new Date().getFullYear();

}

/*=========================
PAGE LOADER
=========================*/

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});

/*=========================
REMOVE PRELOADER
=========================*/

const pageLoader=document.getElementById("loader");

if(pageLoader){

setTimeout(()=>{

pageLoader.style.opacity="0";

setTimeout(()=>{

pageLoader.style.display="none";

},500);

},600);

}

/*=========================
IMAGE FALLBACK
=========================*/

document.querySelectorAll("img").forEach(img=>{

img.onerror=function(){

this.src="https://via.placeholder.com/600x400?text=Travel+Rahman";

};

});

/*=========================
BUTTON RIPPLE
=========================*/

document.querySelectorAll(".btn-primary,.btn-outline").forEach(btn=>{

btn.addEventListener("click",function(e){

const ripple=document.createElement("span");

const rect=this.getBoundingClientRect();

const size=Math.max(rect.width,rect.height);

const x=e.clientX-rect.left-size/2;
const y=e.clientY-rect.top-size/2;

ripple.style.width=size+"px";
ripple.style.height=size+"px";
ripple.style.left=x+"px";
ripple.style.top=y+"px";

ripple.className="ripple";

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});

/*=========================
SMOOTH PAGE SCROLL
=========================*/

window.scroll({

top:0,

left:0,

behavior:"instant"

});

/*=========================
CONSOLE MESSAGE
=========================*/

console.log("%cTravel Rahman Premium Website",
"color:#00b894;font-size:22px;font-weight:bold;");

console.log("%cDeveloped with HTML • CSS • JavaScript",
"color:#081b29;font-size:15px;");

/*=========================
WEBSITE READY
=========================*/

document.addEventListener("DOMContentLoaded",()=>{

console.log("Website Ready");

});

/*=========================
END OF FILE
==================================================*/