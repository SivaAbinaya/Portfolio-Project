// menu icon navbar //
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let sections=document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () =>{
    sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height) {
    navLinks.forEach(links =>{
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
    });
   };
});

// sticky navbar //
let header = document.querySelector('.header');

header.classList.toggle('sticky',window.scrollY > 100);

menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
}

//  Dark mode //
let darkModeIcon = document.querySelector('#darkmood-icon');
darkModeIcon.onclick = () =>{
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
}

// <!-- scroll reveal --> //

ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration:1000,
    delay:10
 });
ScrollReveal().reveal('.home-content, .heading', { origin: 'left' })
ScrollReveal().reveal('.home-img img, .skills-container, .project-box, contact form', { origin: 'bottom' })
ScrollReveal().reveal('.home-content h1, .about-img img',{ origin: 'left' }) 


const contactForm=document.getElementById('contact-form'),
   contactMessage= document.getElementById('contact-message')

const sendEmail  = (e) =>{
    e.preventDefault()
    
    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_z3zcld9','template_7j587ha','#contact-form','cchnQWofsHFIZVos8')
    .then(() =>{
    // Show sent message
      contactMessage.textContent="Message sent successfully ✅"
     
    //Remove message after five seconds
    setTimeout(() =>{
        contactMessage.textContent =""
    },5000)   
    
    // Clear input fields
    contactForm.reset()

},()=>{
    //Show error message
    contactMessage.textCOntent='Message not sent (service error) ❌'
}) 
}
contactForm.addEventListener('submit',sendEmail)