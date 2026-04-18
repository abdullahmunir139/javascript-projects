function getUsers(){
    fetch("https://randomuser.me/api/?results=3")
.then((raw) => raw.json())
.then((data) => {
document.querySelector(".users").innerHTML = "";
 data.results.forEach(function (user) {
    let body = document.body;

// Card div
let card = document.createElement("div");
card.className = "shadow-lg hover:shadow-blue-500/20 hover:scale-105 transition duration-300 flex items-center gap-6 bg-gray-900/70 border border-gray-600 rounded-2xl px-7 py-7 w-[330px] backdrop-blur-md";

// Image
let img = document.createElement("img");
img.src = user.picture.large;
img.alt = "User";
img.className = "w-16 h-16 rounded-full object-cover";

// Text container
let textDiv = document.createElement("div");

// Name
let name = document.createElement("h2");
name.className = "text-white text-lg font-semibold";
name.innerText = user.name.first + " " + user.name.last;

// Email
let email = document.createElement("p");
email.className = "text-gray-400 text-sm";
email.innerText = user.email;

// Status
let status = document.createElement("p");
status.className = "text-gray-500 text-sm mt-1";
status.innerText = "Active";

// Append text elements
textDiv.appendChild(name);
textDiv.appendChild(email);
textDiv.appendChild(status);

// Append to card
card.appendChild(img);
card.appendChild(textDiv);



document.querySelector(".users").appendChild(card);
    
 });
});
}

getUsers();

document.querySelector("#refreshBtn").addEventListener("click", function(){
    getUsers();
});