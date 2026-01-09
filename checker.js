// prompt("state the country")
const btn=document.querySelector("button")
function regionHandler() {

    let country = prompt("state the country").trim().toLowerCase()
    switch (true) {
        case country == "gambia" || country == "mali" || country == "benin" || country == "burkina faso" || country == "cape verde" || country == "ghana" || country == "guinea" || country == "guinea bissau" || country == "ivory coast" || country == "Côte d’lvoire" || country == "liberia" || country == "mauritania" || country == "niger" || country == "nigeria" || country == "senegal" || country == "sierra leaone" || country == "togo":
            alert("West Africa")
            break;
        
        case country == "algeria" || country == "egypt" || country == "libya" || country == "sudan" || country == "tunisia" || country == "morocco":
            alert("North Africa")
            break;
        case country == "south africa" || country == "namibia" || country == "botswana" || country == "zimbabwe" || country == "zambia" || country == "mozanbique" || country == "lesotho" || country == "eswatini" || country == "swaziland" || country == "angola" || country == "malawi":
         alert("South Africa")
            break;
        
        case country == "kenya" || country == "tanzania" || country == "uganda" || country == "rwanda" || country == "burundi" || country == "south sudan":
            alert("East Africa")
            break;
        
        case country == "cameroon" || country == "chad" || country == "gabon" || country == "sao tome" || country == "equatorial guinea" || country == "DR CONGO "|| country == "CONGO" ||country==  "DEMOCRATIC REPUBLIC OF CONGO" ||country=="central african republic":
            alert("Central Africa")
            break;
        default:
            alert("This is not an African country")
      

    }
      
}
console.log(btn);
btn.addEventListener("click", () => {
    regionHandler()
})