// localStorage.setItem("name","abdullah" ); // ye local storage me data store karta hai, aur ye data tab tak store rahega jab tak aap manually delete nahi karte ya browser ke data clear nahi karte.
// let abc = localStorage.getItem("name");

// sessionStorage.setItem("name", "i am session storage");     // ya ek session storage hai jo tab tak data store karta hai jab tak browser open hai, jaise hi browser band karoge data delete ho jayega.

// let abc = sessionStorage.getItem("name");
// sessionStorage.removeItem("name");
const users = [
// {
//     name: "abdullah",
//     pic: "c:\Users\ABDULLAH\Downloads\Gemini_Generated_Image_wt0f9owt0f9owt0f.png",
//     bio: "BSCS student | Web developer | Data analyst learner",
// },
{
    name: "tariq",
    pic: "https://images.unsplash.com/photo-1584864783592-f1d6d4fcd1d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHN0eWxpc2glMjBib3l8ZW58MHx8MHx8fDA%3D",
    bio: "I am a fashion designer and I love to create new styles and trends.",
},
{
    name: "Maria",
    pic: "https://plus.unsplash.com/premium_photo-1683140788139-7b5454d4acd1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA1fHxkZXNpbmdlcnxlbnwwfHwwfHx8MA%3D%3D",
    bio: "The most expensive design in the world is the History Supreme yacht, which is made of solid gold and platinum and is valued at $4.5 billion.",
},
{
    name: "Shake Shack",
    pic: "https://images.unsplash.com/photo-1619474387533-301ed3b5a734?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2hhZnxlbnwwfHwwfHx8MA%3D%3D",
    bio: "shake shack is a popular fast food chain that is known for its delicious burgers, fries, and shakes. It was founded in 2004 in New York City and has since expanded to locations around the world.",
},
{
    name: "Andrej lipattsev",
    pic: "https://plus.unsplash.com/premium_photo-1673830185972-1b20f2749ab6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmVzdHVyYW50fGVufDB8fDB8fHww",
    bio: "I am a restaurant owner and I love to create new dishes and flavors for my customers.",
},
{
    name: "tariq",
    pic: "https://images.unsplash.com/photo-1584864783592-f1d6d4fcd1d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHN0eWxpc2glMjBib3l8ZW58MHx8MHx8fDA%3D",
    bio: "I am a fashion designer and I love to create new styles and trends.",
},
{
    name: "Luxary hotel",
    pic: "https://plus.unsplash.com/premium_photo-1661876290667-0612447870d5?w=294&dpr=1&h=294&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8UUxCMmRraGFfWW98fGVufDB8fHx8fA%3D%3D",
    bio: "This is the most expensive hotel in the world, the Lover's Deep Luxury Submarine Hotel, which is located underwater and offers luxurious accommodations and amenities for guests.",
},
{
    name: "Shake Shack",
    pic: "https://images.unsplash.com/photo-1619474387533-301ed3b5a734?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2hhZnxlbnwwfHwwfHx8MA%3D%3D",
    bio: "shake shack is a popular fast food chain that is known for its delicious burgers, fries, and shakes. It was founded in 2004 in New York City and has since expanded to locations around the world.",
},
{
    name: "Maria",
    pic: "https://plus.unsplash.com/premium_photo-1683140788139-7b5454d4acd1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA1fHxkZXNpbmdlcnxlbnwwfHwwfHx8MA%3D%3D",
    bio: "The most expensive design in the world is the History Supreme yacht, which is made of solid gold and platinum and is valued at $4.5 billion.",
},
{
    name: "Luxary hotel",
    pic: "https://plus.unsplash.com/premium_photo-1661876290667-0612447870d5?w=294&dpr=1&h=294&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8UUxCMmRraGFfWW98fGVufDB8fHx8fA%3D%3D",
    bio: "This is the most expensive hotel in the world, the Lover's Deep Luxury Submarine Hotel, which is located underwater and offers luxurious accommodations and amenities for guests.",
},
{
    name: "Andrej lipattsev",
    pic: "https://plus.unsplash.com/premium_photo-1673830185972-1b20f2749ab6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmVzdHVyYW50fGVufDB8fDB8fHww",
    bio: "I am a restaurant owner and I love to create new dishes and flavors for my customers.",
},

]
function showUsers(arr){
arr.forEach(function(user) {
    // create card element and add class "card" to it. 
    const card = document.createElement("div");  // ye ek variable ha us ma div elemet create kar raha hai. 
    card.classList.add("card");      // ya card variable ke classList me card class add kar raha hai. jo hamare css file me defined hai.

    // create img element and set its src attribute to user pic
    const img = document.createElement("img"); // ye ek variable ha us ma img elemet create kar raha hai.   
    img.src = user.pic;                        // ya img variable ke src attribute me user ke pic property ki value assign kar raha hai. jo hamare users array me defined hai.
    img.classList.add("bg-img");

    // create blurred Layer div
    const blurredLayer = document.createElement("div");       // ye ek variable ha us ma div elemet create kar raha hai.
    blurredLayer.style.backgroundImage = `url(${user.pic})`;   //ya blurredLayer variable ke style ke backgroundImage property me user ke pic property ki value assign kar raha hai. jo hamare users array me defined hai. aur us value ko url() function ke andar wrap kar raha hai.
    blurredLayer.classList.add("blurred-layer");         // ya blurredLayer variable ke classList me blurred-Layer class add kar raha hai. jo hamare css file me defined hai.

    // Create content div
    const content = document.createElement("div");
    content.classList.add("content");   // ya content variable ke classList me content class add kar raha hai. jo hamare css file ma defined hai.

    // create h3 and paragraph
    const heading = document.createElement("h3");
    heading.textContent = user.name;   // ya heading variable ke textContent property me user ke name property ki value assign kar raha hai. jo hamare users array me defined hai.

    const paragraph = document.createElement("p");
    paragraph.textContent = user.bio;  // ya paragraph variable ke textContent property me user ke bio property ki value assign kar raha hai. jo hamare users array me defined hai.

    // append heading and paragraph to content div
    content.appendChild(heading);
    content.appendChild(paragraph);

    // append to all card
    card.appendChild(img);
    card.appendChild(blurredLayer);
    card.appendChild(content);


    // finnaly append card to main container
    document.querySelector(".cards").appendChild(card); 

});
}
showUsers(users);                 // ye function call kar raha hai aur users array ko argument ke taur par pass kar raha hai. jo hamare users array me defined hai.
let inp = document.querySelector("input");    // ye ek variable ha us ma input element select kar raha hai. jo hamare html file me defined hai.
inp.addEventListener("input", function(){      // ye input element ke input event par ek event listener add kar raha hai. jab bhi user input field me kuch type karega to ye function execute hoga.
    let newUsers = users.filter((user) =>{     // ye users array ke filter method ko call kar raha hai. jo ek naya array return karega jisme sirf wo users honge jinke name property ki value input field ke value se start hoti hai.
        return user.name.toLowerCase().startsWith(inp.value.toLowerCase());   // ya user ke name property ki value startsWith method ke through check kar raha hai ki kya wo input field ke value se start hoti hai. agar ha to wo user newUsers array me include ho jayega.
    });
    document.querySelector(".cards").innerHTML = "";  // ye cards container ke innerHTML property ko empty string assign kar raha hai. jisse pehle se display hone wale users remove ho jayenge. 
    showUsers(newUsers);         // ye showUsers function ko call kar raha hai aur newUsers array ko argument ke taur par pass kar raha hai. jo hamare newUsers array me defined hai. isse filtered users display honge.
});
















