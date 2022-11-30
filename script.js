
const navigation = document.getElementsByClassName('nav');
const nav1 = navigation[0].getBoundingClientRect(top);
const projet = document.querySelectorAll('.projet')
const projets = document.querySelector("#projets")
let projet1 = projet[0]
let projet2 = projet1.getElementsByClassName('desc_projet')
let desc;
let i = 0;



projet.forEach(elem => {
    elem.setAttribute("id", `p${i}`)
    i ++
});

/*
document.addEventListener('mousemove', () => {
    console.log("yes")
    projet.forEach(e => {
            let desc = e.querySelector('.desc_projet')
            desc.addEventListener("mouseenter", () => anim1.play());
            desc.addEventListener("mouseleave", () => anim1.reverse());
    
    });
})
*/



projet.forEach(e => {
    e.addEventListener("mouseenter", () => {
        gsap.to(e.querySelector('.desc_projet'),{
            duration: 0.5,
            yPercent: -100,
            yoyo:true
        })       
    });
    e.addEventListener("mouseleave", () => {
        gsap.to(e.querySelector('.desc_projet'),{
            duration: 0.5,
            yPercent: 0,
            yoyo:true
        })
    });
});
