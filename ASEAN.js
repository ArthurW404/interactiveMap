class Queue {
  constructor() {
    this.arr = [];
  }

  get queue() {
    return this.arr;
  }

  get size() {
    return this.arr.length;
  }

  enqueue(item){
    this.arr.push(item);
  }

  dequeue() {
    return this.arr.shift();
  }

}

class Country_Queue extends Queue {

  enqueue(item) {
    // if item already in queue, move item to top
    this.arr = this.arr.filter( country => country != item);

    super.enqueue(item);
  }

  display_country(details_container) {
    // console.log(details_container.childNodes[1]);

    details_container.innerHTML = "";
    // console.log(this.arr.length);
    const selected = this.arr.length - 1;
    let i = 0;

    this.arr.forEach((country) => {

      // create new h1 object
      let country_descript_block = document.createElement("div");

      let h1 = document.createElement("h1");
      h1.classList.add("country_details");

      // highlight currently selected country
      if (i == selected) {
        // console.log("Selected is " + country.name);
        country_descript_block.style.border = "1px solid grey";
        country_descript_block.style.borderRadius = "15px";
      }
      h1.textContent = country.name;
      
      // create new div object
      let div_descript = document.createElement("div");
      div_descript.classList.add("country_details");
      div_descript.innerText =  "\n" + country.description + "\n\n";

      country_descript_block.insertBefore(h1, null);
      country_descript_block.insertBefore(div_descript, null);

      details_container.insertBefore(country_descript_block, details_container.childNodes[0]);

      i++;
    })
  }

}

function add_description(country, country_element) {
  // selects country on map
  // adds country to queue
  display_countries.enqueue(country);
  // country_name.innerText += this.name;
  // country_info.innerText += "\n" + this.description + "\n\n";
  country_element.style.fill = "white";
  display_countries.display_country(details_container);
}

function remove_description(country, country_element) {
  // country_name.innerText = "";
  // country_info.innerText = "";
  if (display_countries.size == 3) {
    display_countries.dequeue();
    display_countries.display_country(details_container);
  }
  country_element.style.fill = "#84ade9";

  // country_info.style.background = "white";
  // country_info.style.border = "";
}

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

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

let display_countries = new Country_Queue();
let curr_country = getRandomInt(countries.length);
let country_info = document.querySelector("#info");
let country_name = document.querySelector("#country_name");
let details_container = document.querySelector(".details_container");
let selected_country = null;

// loop through every country id and add hover-like tag where information about the country is displayed
countries.forEach((country) => {
  let lcCountry = country.name.toLowerCase();
  let country_id = "#" + lcCountry;
  console.log(country_id);
  let country_element = document.querySelector(country_id);
  country.el = country_element;

  country_element.onclick = () => {
    // clearInterval(autoSlide);

    if (selected_country != null) {
      // Basically in click mode, we must remove the previously selected
      // country before we can add a new country
      remove_description(country, selected_country.el);
    } 
    else {
      // This occurs when existing autoslide mode
      // In order to avoid 
      remove_description(country, countries[curr_country].el);
    }

    // console.log(selected_country);

    if (selected_country != country) {
      // Set currently selected country as the newly clicked country
      curr_country = -1;
      selected_country = country;
      add_description(country, country_element);
    }
    else {
      // this section occurs when the same country is clicked twice
      // essentially unselecting it
      // resulting in the autoSlide to resume as usual
      selected_country = null;
      curr_country = getRandomInt(countries.length);
      
      add_description(countries[curr_country], countries[curr_country].el)
    } 
  };
  
});

let autoSlide =  setInterval(
  () => {
    if ( (! selected_country) && (curr_country != -1) ) {
      let curr_c = countries[curr_country];
      remove_description(curr_c, curr_c.el);
      curr_country = (curr_country + 1) % countries.length;
      curr_c = countries[curr_country];
      add_description(curr_c, curr_c.el);
    }
  },
  5000
);

add_description(countries[curr_country], countries[curr_country].el)
