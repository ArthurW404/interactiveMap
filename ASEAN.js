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

/*
  This section of code handles hover effect of countries
 */

let country_info = document.querySelector("#info");
let country_name = document.querySelector("#country_name");
/* loop through every country id and add hover-like tag where information about the country is displayed */
countries.forEach((country) => {
  let lcCountry = country.name.toLowerCase();
  let country_id = "#" + lcCountry;
  console.log(country_id);
  let country_selected = document.querySelector(country_id);
  country_selected.addEventListener("mouseover", () => {
    /* may replace with innerHTML for styling or something */
    country_name.innerText += country.name;
    country_info.innerText += "\n" + country.description;
  });
  country_selected.addEventListener("mouseout", () => {
    country_name.innerText = "";
    country_info.innerText = "";
    /* country_info.style.background = ""; */
    /* country_info.style.border = ""; */
  });
});


/* 
  solution for manipulating svg
*/ 

// let interactive_map = document.querySelector(".interactive_map");

const MAX_WIDTH = 480;
const MAX_HEIGHT = 480;

function min (val1, val2) {
  return val1 > val2 ? val2 : val1;
}

/**
 * Takes svg as input and zooms in or out based on value (which is a double acting as percentage)
 * @param {*} svg 
 * @param {*} value double between 0 and 1 to zoom in or > 1 to zoom out
 */
function svg_zoom(svg, value) {
  var box = svg.viewBox.baseVal;

  /**
   * Width and height are capped at max_width/height 
   */
  let width = min(box.width * value, MAX_WIDTH);
  let height =  min(box.height * value, MAX_HEIGHT);

  let new_prop = box.x + " " + box.y + " " + width + " " + height;
  console.log(new_prop);
  svg.setAttribute('viewBox', new_prop);
}

/**
 * Function for dragging the map along it's x,y coordinates
 * @param {*} svg 
 * @param {*} dx 
 * @param {*} dy 
 */
function svg_mv_xy(svg, dx, dy) {
  var box = svg.viewBox.baseVal;

  // TODO have a way of capping the new_coord such that you cannot keep moving past a certain point 
  // as eventually the blue background disappears (since it's just a rectangle obj in svg) and it will look bad
  let new_x = box.x + dx;
  if (new_x < 0) 
    new_x = 0;
  let new_y =  box.y + dy;
  if (new_y < 0) 
    new_y = 0;
  
  let new_prop = new_x + " " + new_y + " " + box.width + " " + box.height;
  console.log(new_prop);
  svg.setAttribute('viewBox', new_prop);
}

var svg = document.querySelector('svg');

/**
 * Function used by svg to give svg dragging capability
 * @param {*} evt 
 */
function makeDraggable(evt) {
  var svg = evt.target;
  var is_drag = false;
  var prev_coord = null;
  svg.addEventListener('mousedown', startDrag);
  svg.addEventListener('mousemove', drag);
  svg.addEventListener('mouseup', endDrag);
  svg.addEventListener('mouseleave', endDrag);

  function getMousePosition(evt) {
    var CTM = svg.getScreenCTM();
    return {
      x: (evt.clientX - CTM.e) / CTM.a,
      y: (evt.clientY - CTM.f) / CTM.d
    };
  }

  function startDrag(evt) {
    is_drag = true;
    prev_coord = getMousePosition(evt);
  }

  function drag(evt) {
    if (is_drag) {
      let curr_coord = getMousePosition(evt);
      // process difference between prev and curr coord

      // we only want the direction
      let dx = prev_coord.x - curr_coord.x;
      dx = dx > 0 ? 1 : -1;
      let dy = prev_coord.y - curr_coord.y;
      dy = dy > 0 ? 1 : -1;
      svg_mv_xy(svg, dx, dy);
      prev_coord = curr_coord;
    }
  }

  function endDrag(evt) {
    is_drag = false;
  }
}





// var lastScrollTop = 0;

// window.addEventListener("scroll",() => {
//   var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
//   console.log("H");
//   if (st > lastScrollTop){
//      // downscroll code
//      svg_zoom(svg, 1.1);
//   } else {
//      // upscroll code
//      svg_zoom(svg, 0.9);
//     }
//   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
// }, {passive: true});

// var runOnScroll =  function(evt) {
//   // not the most exciting thing, but a thing nonetheless
//   console.log(evt.target);
// };

// window.addEventListener("scroll", runOnScroll, {passive: true});
