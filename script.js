/**
 * script utk membuat social media hover
 */
document.querySelectorAll(".socmed i").forEach((socmed) => {
    socmed.addEventListener("mouseenter", () => {
        socmed.classList.remove("ph");
        socmed.classList.add("ph-fill");
    });
    socmed.addEventListener("mouseleave", ()=> {
        socmed.classList.remove("ph-fill");
        socmed.classList.add("ph");
    })
});

/**
 * text animation while scrolling
 */
document.addEventListener("scroll",(e)=>{
    document.querySelector(
        ".animasi-bg").style.transform = `translateX(${window.scrollY}px)`;
});