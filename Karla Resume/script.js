const text = "Aspiring Web Developer | UI/UX Designer | IT Student";

let i = 0;

function typing(){

const el = document.getElementById("typing");

if(i < text.length){

el.innerHTML += text.charAt(i);
i++;

setTimeout(typing,70);

}else{

setTimeout(()=>{
el.innerHTML="";
i=0;
typing();
},1500);

}

}

typing();


// card animation

const cards = document.querySelectorAll(".card");

window.addEventListener("scroll",()=>{

const trigger = window.innerHeight*0.85;

cards.forEach(card=>{

const top = card.getBoundingClientRect().top;

if(top < trigger){

card.classList.add("show");

}

});

});