// 

const countries = [
    {name: "Brunei", description: "Is an Asean Country"},
    {name: "Cambodia", description: "Is an Asean Country"},
    {name: "Indonesia", description: "Is an Asean Country"},
    {name: "Laos", description: "Is an Asean Country"},
    {name: "Malaysia", description: "Is an Asean Country"},
    {name: "Myanmar", description: "Is an Asean Country"},
    {name: "Philippines", description: "Is an Asean Country"},
    {name: "Singapore", description: "Is an Asean Country"},
    {name: "Thailand", description: "Is an Asean Country"},
    {name: "VietNam", description: "Is an Asean Country"}
];

let country_info = document.querySelector('#info');
let country_name = document.querySelector('#country_name');

// loop through every country id and add hover-like tag where information about the country is displayed 
countries.forEach((country) => {
    let lcCountry = country.name.toLowerCase();
    let country_id = '#' + lcCountry;
    console.log(country_id);
    let country_selected = document.querySelector(country_id);
    country_selected.addEventListener("mouseover", () => {
        // may replace with innerHTML for styling or something 
        country_name.innerText += country.name;
        country_info.innerText += country.description;
        
    });
    
    country_selected.addEventListener("mouseout", () => {
        country_name.innerText = "Country: ";
        country_info.innerText = "Description: ";
        // country_info.style.background = "";
        // country_info.style.border = "";
    });

});

