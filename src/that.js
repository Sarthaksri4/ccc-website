const text = document.querySelector(".sec-text");

const textLoad = () => {
if(text){
    setTimeout(() => {
        text.textContent = "Think.";
    }, 0);
    setTimeout(() => {
        text.textContent = "Develop.";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Deploy.";
    }, 8000); 
}
}
const ram = (Math.random()+1)*1000;
textLoad();
setInterval(textLoad, ram);