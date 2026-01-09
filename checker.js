// prompt("state the country")
const btn=document.querySelector("button")
function regionHandler() {





















    let country = prompt("state the country").trim().toLowerCase()
    switch (true) {
        case country == "gambia" || country == "mali":
            alert("West Africa")

    }
   














    
}
console.log(btn);
btn.addEventListener("click", () => {
    regionHandler()
})