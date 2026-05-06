const nameInp = document.getElementById("name-input");
const nameDisplay = document.getElementById("display-name");
nameInp.addEventListener("input", ()=> {
    nameDisplay.innerText = nameInp.value;

    if(nameInp.value === ""){
        nameDisplay.innerText = "Your Name";
    }
});

const phoneInp = document.getElementById("phone-input");
const phoneDisplay = document.getElementById("display-phone");
phoneInp.addEventListener("input", ()=>{
    phoneDisplay.innerText = phoneInp.value;
    if(phoneInp.value === ""){
        phoneDisplay.innerText = "";
    }
});


const emailInp = document.getElementById("email-input");
const emailDisplay = document.getElementById("display-email");
    emailInp.addEventListener("input", ()=>{
    emailDisplay.innerText = emailInp.value;
    if(emailInp.value === ""){
        emailDisplay.innerText = "";
    }
});


const locationInp = document.getElementById("location-input");
const locationDisplay = document.getElementById("display-location");
    locationInp.addEventListener("input", ()=>{
        locationDisplay.innerText = locationInp.value;
    if(locationInp.value === ""){
        locationDisplay.innerText = "";
    }
});

const skillInp = document.getElementById("skills-input");
const skillDisplay = document.getElementById("display-skills");
skillInp.addEventListener("input", ()=>{
   const skillsArray = skillInp.value.split(","); 
   const listItem = skillsArray.map(skill =>{
    if(skill.trim() !== ""){
        return `<li>${skill.trim()}</li>`;
    }
    return "";
   }).join("");
   skillDisplay.innerHTML = listItem || "<li>No skill</li>";
});
   
const experienceInp = document.getElementById("experience-input");
const experienceDisplay = document.getElementById("display-experience");
experienceInp.addEventListener("input", ()=>{
    const experienceArray = experienceInp.value.split(",");
    const listItem = experienceArray.map(experience =>{
        if(experience.trim() !== ""){
            return `<li>${experience.trim()}</li>`;
        }
        return"";
    }).join("");
    experienceDisplay.innerHTML = listItem || "<li>No experience</li>";
});                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     

const educationInp = document.getElementById("education-input");
const educationDisplay = document.getElementById("display-education");
educationInp.addEventListener("input", ()=>{
    const educationArray = educationInp.value.split("\n");
    const listItem = educationArray.map(education =>{
        if (education.trim() !== ""){
            return `<li>${education.trim()}</li>`;
        }
        return "";
    }).join("");
    educationDisplay.innerHTML = listItem || "<li>No education</li>";
});
const aboutInp = document.getElementById("about-input");
const aboutDisplay = document.getElementById("display-about");
aboutInp.addEventListener("input", ()=>{
    aboutDisplay.innerText = aboutInp.value.split("\n").join("\n");
    if(aboutInp.value === ""){
        aboutDisplay.innerText = "";
    }
});


const imageInp = document.getElementById("image-input");
const imageDisplay = document.getElementById("display-img");
imageInp.addEventListener("change", ()=>{
    const file = imageInp.files[0];
    if(file){
        const reader = new FileReader;
        reader.onload = function(e){
            imageDisplay.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});
















