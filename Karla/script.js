const text = "Aspiring Web Developer";
let i = 0;

function typing(){
if(i < text.length){
document.getElementById("typing").innerHTML += text.charAt(i);
i++;
setTimeout(typing,80);
}
}

typing();

const fills = document.querySelectorAll(".fill");

window.addEventListener("scroll", () => {
fills.forEach(fill => {
fill.style.width = fill.classList.contains("html") ? "90%" :
fill.classList.contains("css") ? "85%" : "75%";
});
});