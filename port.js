//================
// Typing Animation
//================
const typing = document.getElementById("typing");
const words = [
    "BCA Student",
    "Python Learner",
    "Web Developer",
    "Django Developer"
] ;
let wordIndex = 0;
let charIndex = 0;
let deleting = false;
function typeEffect(){
    const current = words[wordIndex];
    if(!deleting){
        typing.textContent=current.substring(0,charIndex++);
    }
    else{
        typing.textContent=current.substring(0,charIndex--);
    }
    let speed = deleting ? 60 : 120;
    if(!deleting && charIndex==current.length+1){
        deleting = true;
        speed =1200;
    }
    if(deleting && charIndex===0){
        deleting = false;
        wordIndex = (wordIndex+1)%words.length;
    }
    setTimeout(typeEffect,speed);

}
typeEffect();
//=================
//Mobile menu
//=================
const menu=document.querySelector(".menu");
const nav=document.querySelector("nav");
menu.onclick=function(){
    nav.classList.toggle("active");
}
//=================
//navbar background
//==================
window.addEventListener("scroll",()=>{
    const header=document.querySelector("heading");
    if(window.scrollY>50){
        header.style.background="#08111f";
    }
    else{
        header.style.background="rgba(255,255,255,0.8)";
    }
});
//================
//scroll animation
//================
const cards=document.querySelectorAll(
    ".skill-card,.project-card,.about-box,.edu-box");
    const observer=new
    IntersectionObserver((entries)=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                entry.target.style.opacity="1";
                entry.target.style.transform="translateY(0px)";
            }
        });
    });cards.forEach(card=>{
        card.style.opacity="0";
        card.style.transform="translateY(40px)";
        card.style.transition=".8s";
        observer.observe(card);

    });
    //===================
    //back to top button
    //===================
    const topBtn=document.createElement("button");
    topBtn.innerHTML="&#8593;";
    topBtn.style.position="fixed";
    topBtn.style.right="20px";
    topBtn.style.bottom="20px";
    topBtn.style.width="50px";
    topBtn.style.height="50px";
    topBtn.style.borderRadius="50%";
    topBtn.style.border="none";
    topBtn.style.background="#38bdf8";
    topBtn.style.fontSize="22px";
    topBtn.style.cursor="pointer";
    topBtn.style.display="none";
    document.body.appendChild(topBtn);
    window.addEventListener("scroll",()=>{
        if(window.srollY>300){
            topBtn.style.display="block";
        
        }
        else{
            topBtn.style.display="none";

        }
    });
    topBtn.onclick=()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        });
    };
    //=====================
    //contact form
    //=====================
    const form=document.querySelector("form");
    form.addEventListener("submit",(e)=>{
        e.preventDefault();
        alert("Thank You Kartik! Your messages has been sent.");
        form.reset();
    });