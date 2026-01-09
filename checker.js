// prompt("state the country")
const btn=document.querySelector("button")
function regionHandler() {

    let country = prompt("state the country").trim().toLowerCase()
    switch (true) {
        case country == "gambia" || country == "mali" || country == "benin" || country == "burkina faso" || country == "cape verde" || country == "ghana" || country == "guinea" || country == "guinea bissau" || country == "ivory coast" || country == "côte d’lvoire" || country == "liberia" || country == "mauritania" || country == "niger" || country == "nigeria" || country == "senegal" || country == "sierra leone" || country == "togo":
            alert(`${country} is in West Africa`)
            break;
        
        case country == "algeria" || country == "egypt" || country == "libya" || country == "sudan" || country == "tunisia" || country == "morocco":
            alert(`${country} is in North Africa`)
            break;
        case country == "south africa" || country == "namibia" || country == "botswana" || country == "zimbabwe" || country == "zambia" || country == "mozambique" || country == "lesotho" || country == "eswatini" || country == "swaziland" || country == "angola" || country == "malawi":
            alert(`${country} is in South Africa`)
            break;
        
        case country == "kenya" || country == "tanzania" || country == "uganda" || country == "rwanda" || country == "burundi" || country == "south sudan":
            alert(`${country} is in East Africa`)
            break;
        
        case country == "cameroon" || country == "chad" || country == "gabon" || country == "sao tome" || country == "equatorial guinea" || country == "dr congo"|| country == "congo" ||country==  "democratic republic of congo" ||country=="central african republic":
            alert(`${country } is in Central Africa`)
            break;
        default:
            alert("This is not an African country")
      

    }
      
}
console.log(btn);
btn.addEventListener("click", () => {
    regionHandler()
})