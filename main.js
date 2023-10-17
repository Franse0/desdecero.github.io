const {log} = console;

const nav = document.getElementById("nav")
const bars = document.querySelector(".fa-bars")
log(nav)
log(bars)

const toggleNav=()=>{
    bars.addEventListener("click", ()=>{
        nav.classList.toggle("toogle-nav");
    });
};

const init=()=>{
    toggleNav()
    
};
init()