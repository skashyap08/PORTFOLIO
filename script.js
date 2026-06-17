const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
menuBtn.addEventListener("click", () => {

});
menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
window.addEventListener("scroll", reveal);
function reveal(){

}
function reveal(){

    const reveals =
    document.querySelectorAll(".reveal");

}
function reveal(){

    const reveals =
    document.querySelectorAll(".reveal");

    for(let i = 0; i < reveals.length; i++){

        let windowHeight =
        window.innerHeight;

        let revealTop =
        reveals[i].getBoundingClientRect().top;

        let revealPoint = 150;

        if(revealTop < windowHeight - revealPoint){
            reveals[i].classList.add("active");
        }
    }
}