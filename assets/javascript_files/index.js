//declaring variables for dom elements
const parentContainer = document.querySelector('#parentContainer');
const aboutLink = document.querySelector('.about');
const skillsLink = document.querySelector('.skills');
const experienceLink = document.querySelector('.experience');
const projectsLink = document.querySelector('.projects');
const educationLink = document.querySelector('.education');
const contactLink = document.querySelector('.contact');
const statsLink = document.querySelector('.stats');
const homeSection = document.querySelector('#homeSection');
const skillSection = document.querySelector('#skillSection');
const experienceSection = document.querySelector('#experienceSection');
const projectSection = document.querySelector('#projectSection');
const educationSection = document.querySelector('#educationSection');
const contactSection = document.querySelector('#contactSection');
const statsSection = document.querySelector('#statsSection');
const webAppList = document.querySelectorAll('.webApp')
const aiList = document.querySelectorAll('.ai');
const allProjectList = document.querySelectorAll('.projectCard');
const allProject = document.querySelector('#allProject');
const webAppProject = document.querySelector('#webApplicationProject');
const aiProject = document.querySelector('#artifiicalIntelligenceProject');
const projectContainer = document.querySelector('#projectContainer');
const footerAbout = document.querySelector('#about');
const footerSkills = document.querySelector('#skills');
const footerExperience = document.querySelector('#experience');
const footerProject = document.querySelector('#project');
const footerEducation = document.querySelector('#education');
const footerContact = document.querySelector('#contact');
const footerStats = document.querySelector('#stats');
let typewriter = document.querySelector('.typewriter');


//Objects:-
//1. Array for typewriter effect on homeIntro2
const carouselText = ['Full-Stack Developer', 'Open source contributor', 'AI Enthusiast', 'Blogger'];
let carouselIndex = 0


//Functions:-
//1. function to wait a few seconds
function sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms))
}

//2. async function for a forever loop
async function typewriterLoop() {
    while(true) {
        let currentWord = carouselText[carouselIndex]
        
        for(let i = 0; i < carouselText[carouselIndex].length; i++) {
            typewriter.innerText = currentWord.substring(0, i + 1)
            await sleep(300)
        }

        if(carouselIndex === 3) {
            carouselIndex = 0;
            console.log(carouselIndex)
        } else if(typewriter.innerText.length === currentWord.length && carouselIndex < carouselText.length) {
            carouselIndex++;
            console.log(carouselIndex)
        }
        
        await sleep(1000)

        for(let i = currentWord.length; i > 0; i--) {
            typewriter.innerText = currentWord.substring(0, i - 1)
            await sleep(300)
        }
    }
}


//Event Listeners:-
//1. event listener for header element upon click to scroll into view
aboutLink.addEventListener('click', () => {
    homeSection.scrollIntoView();
})

//2. event listener for header element upon click to scroll into view
skillsLink.addEventListener('click', () => {
    skillSection.scrollIntoView();
})

//3. event listener for header element upon click to scroll into view
experienceLink.addEventListener('click', () => {
    experienceSection.scrollIntoView();
})

//4. event listener for header element upon click to scroll into view
projectsLink.addEventListener('click', () => {
    projectSection.scrollIntoView();
})

//5. event listener for header element upon click to scroll into view
educationLink.addEventListener('click', () => {
    educationSection.scrollIntoView();
})

//6. event listener for header element upon click to scroll into view
contactLink.addEventListener('click', () => {
    contactSection.scrollIntoView();
})

//7. event listener for header element upon click to scroll into view
statsLink.addEventListener('click', () => {
    statsSection.scrollIntoView();
})

//8. event listener for all project tab click under project section
allProject.addEventListener('click', () => {
    while(projectContainer.firstChild) {
        projectContainer.removeChild(projectContainer.firstChild)
    }
    allProjectList.forEach((child) => {
        projectContainer.appendChild(child)
    })
})

//9. event listener for webapp project tab click under project section
webAppProject.addEventListener('click', () => {
    while(projectContainer.firstChild) {
        projectContainer.removeChild(projectContainer.firstChild)
    }
    webAppList.forEach((child) => {
        projectContainer.appendChild(child);
    })
})

//10. event listener for ai project tab click under project section 
aiProject.addEventListener('click', () => {
    while(projectContainer.firstChild) {
        projectContainer.removeChild(projectContainer.firstChild)
    }
    aiList.forEach((child) => {
        projectContainer.appendChild(child)
    })
})

//11. event listener for footer about element
footerAbout.addEventListener('click', () => {
    homeSection.scrollIntoView()
})

//12. event listener for footer skill element
footerSkills.addEventListener('click', () => {
    skillSection.scrollIntoView();
})

//13. event listener for footer experience element
footerExperience.addEventListener('click', () => {
    experienceSection.scrollIntoView();
})

//14. event listener for footer project element
footerProject.addEventListener('click', () => {
    projectSection.scrollIntoView()
})

//15. event listener for footer education element
footerEducation.addEventListener('click', () => {
    educationSection.scrollIntoView();
})

//16. event listener for footer contact element
footerContact.addEventListener('click', () => {
    contactSection.scrollIntoView();
})

//17. event listener for footer stats element
footerStats.addEventListener('click', () => {
    statsSection.scrollIntoView();
})

//18. window on load listener for running typewriter
window.addEventListener('load', typewriterLoop())