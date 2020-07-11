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

// loop through every country id and add hover-like tag where information about the country is displayed 
countries.forEach((country) => {
    let lcCountry = country.name.toLowerCase();
    let country_id = '#' + lcCountry;
    console.log(country_id);
    let country_selected = document.querySelector(country_id);
    country_selected.addEventListener("mouseover", () => {
        // may replace with innerHTML for styling or something 
        country_info.innerText = country.name + "\n" + country.description;

    });
    
    country_selected.addEventListener("mouseout", () => {
        country_info.innerText = "";
    });

});

