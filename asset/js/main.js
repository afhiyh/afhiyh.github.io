/* -- navbar fungsion -- */
function myMenuFunction() {
    var menuBtn = document.getElementById("myNavMenu");

    if(menuBtn.className == "nav-menu"){
        menuBtn.className += " responsive";
    }else{
        menuBtn.className = "nav-menu";
    }
}

/* -- add shadow om nav bar ketika skrol-- */
window.onscroll = function() {headerShadow()};

function headerShadow() {
  const navHeader = document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";

  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }

}

/* -- typing efek-- */
var typingEffect = new Typed(".typedText", {
    strings: ["Fatih Gesang", "UI/UX Designer", "Freelancer", "Demon King"],
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000,
    loop: true
})

/* -- scroll reveal animasi -- */
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/* -- home -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay:100})
sr.reveal('.featured-text-info',{delay:200})
sr.reveal('.featured-text-btn',{delay:200})
sr.reveal('.social-icons',{delay:200})
sr.reveal('.featured-image',{delay:300})

/* -- project -- */
sr.reveal('.project-box',{interval:200})

/* --  heading -- */
sr.reveal('.top-header',{})

/* --  about info -- */
const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration:2000,
    reset: true

})

srLeft.reveal('.about-info',{delay:200})
srLeft.reveal('.contact-info',{delay:200})

/* - -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
})
srRight.reveal('.skills-box', {delay: 100})
srRight.reveal('.form-control', {delay: 100})

/* - -- change aactive link -- */
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.scrollY;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){

            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link');

        }else{

            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link');

        }
    })
}

window.addEventListener('scroll', scrollActive)

/* - -- DOWLOAD CV navbar -- */
document.getElementById('download-cv').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'asset/Fatih Gesang CV.pdf'; // Path to your CV file
    link.download = 'Fatih Gesang CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

/* - -- DOWLOAD CV body -- */
document.getElementById('download-cv-body').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'asset/Fatih Gesang CV.pdf'; // Path to your CV file
    link.download = 'Fatih Gesang CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});