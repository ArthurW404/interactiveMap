const countries = [
  {
    name: "Brunei",
    description:
      "• Unemployment Rate - 9.2% \n \
            • Labour Force Participation - 62.7% \n \
            • GDP (2018) - $14 Billion  \n \
            • Population (2018) - 0.43 million  \n ",
  },
  {
    name: "Cambodia",
    description:
      "• Unemployment Rate - 1.1% \n \
            • Labour Force Participation - 84.3% \n \
            • GDP (2018) - $25 Billion  \n \
            • Population (2018) - 16.25 million  \n ",
  },
  {
    name: "Indonesia",
    description:
      "• Unemployment Rate - 5.3% \n \
            • Labour Force Participation -  68.3% \n \
            • GDP (2018) - $1.04 Trillion  \n \
            • Population (2018) - 267.7 million \n ",
  },
  {
    name: "Laos",
    description:
      "• Unemployment Rate - 0.6% \n \
            • Labour Force Participation - 64.1% \n \
            • GDP (2018) - $18 Billion  \n \
            • Population (2018) - 7.062 million \n ",
  },
  {
    name: "Malaysia",
    description:
      "• Unemployment Rate - 3.2% \n \
            • Labour Force Participation - 67.7% \n \
            • GDP (2018) - $354 Billion  \n \
            • Population (2018) - 31.53 million \n ",
  },
  {
    name: "Myanmar",
    description:
      "• Unemployment Rate - 4.0 % \n \
            • Labour Force Participation - 62% \n \
            • GDP (2018) - $71 Billion  \n \
            • Population (2018) - 53.71 million \n ",
  },
  {
    name: "Philippines",
    description:
      "• Unemployment Rate - 5.4% \n \
            • Labour Force Participation - 60.1% \n \
            • GDP (2018) - $331 Billion  \n \
            • Population (2018) - 106.7 million \n ",
  },
  {
    name: "Singapore",
    description:
      "• Unemployment Rate - 2.9% \n \
            • Labour Force Participation - 68% \n \
            • GDP (2018) - $364 Billion  \n \
            • Population (2018) - 5.639 million \n ",
  },
  {
    name: "Thailand",
    description:
      "• Unemployment Rate - 1.1% \n \
            • Labour Force Participation - 68.3% \n \
            • GDP (2018) - $505 Billion  \n \
            • Population (2018) - 69.43 million \n ",
  },
  {
    name: "VietNam",
    description:
      "• Unemployment Rate - 2.2% \n \
            • Labour Force Participation - 76.8% \n \
            • GDP (2018) - $245 Billion  \n \
            • Population (2018) - 95.54 million \n ",
  },
];

let country_info = document.querySelector("#info");
let country_name = document.querySelector("#country_name");
// loop through every country id and add hover-like tag where information about the country is displayed
countries.forEach((country) => {
  let lcCountry = country.name.toLowerCase();
  let country_id = "#" + lcCountry;
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
