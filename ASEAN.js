// 

const countries = [
    {
        name: "Brunei",
        description: "\u25CA Is an Asean Country"
    },
    { 
        name: "Cambodia",
        description: "\u25CA Is an Asean Country"
    },
    { 
        name: "Indonesia",
        description: "\u25CA Is an Asean Country"
    },
    { 
        name: "Laos",
        description: "\u25CA Is an Asean Country"
    },
    { 
        name: "Malaysia",
        description: "\u25CA Is an Asean Country"
    },
    { 
        name: "Myanmar",
        description: "\u25CA Is an Asean Country"
    },
    { 
        name: "Philippines",
        description: "\u25CA Is an Asean Country"
    },
    { 
        name: "Singapore",
        description: "\u25CA Is an Asean Country"
    },
    { 
        name: "Thailand",
        description: "\u25CA Is an Asean Country"
    },
    { 
        name: "VietNam",
        description: "\u25CA Is an Asean Country"
    }
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
        country_info.innerText += "\n" + country.description;

    });

    country_selected.addEventListener("mouseout", () => {
        country_name.innerText = "";
        country_info.innerText = "";
        // country_info.style.background = "";
        // country_info.style.border = "";
    });

});

