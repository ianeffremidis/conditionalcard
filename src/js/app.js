import "../style/index.css";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    {
        includeCover: true, // if includeCover is true the algorithm should
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the url of the image that will used as background for the profile cover
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
        socialMediaPosition: "left", // social media bar position (left or right)
        
        twitter: null, // social media usernames
        github: null,
        linkedin: null,
        instagram: null,

        name: null,
        lastname: null,
        role: null,
        country: null,
        city: null
    }
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables); //print on the console
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  let space = " ";

  let ifname = variables.name;
  if (variables.name == null) {
    ifname = "Enter Name";
  }

  let iflast = variables.lastname;
  if (variables.lastname == null) {
    iflast = "";
  }

  let ifrole = variables.role;
  if (variables.role == null) {
    ifrole = "Choose your Role";
  }

  let ifcity = variables.city;
  if (variables.city == null) {
    ifcity = "City";
  }

  let ifcountry = variables.country;
  if (variables.country == null) {
    ifcountry = "Country";
  }

  let iftwitter = variables.twitter;
  if (variables.twitter == null) {
    iftwitter = "";
  } else {
    iftwitter = `<a href="${variables.twitter}" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-twitter"></i></a>`;
  }

  let ifgithub = variables.github;
  if (variables.github == null) {
    ifgithub = "";
  } else {
    ifgithub = `<a href="${variables.github}" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github"></i></a>`;
  }

  let iflinkedin = variables.linkedin;
  if (variables.linkedin == null) {
    iflinkedin = "";
  } else {
    iflinkedin = `<a href="${variables.linkedin}" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin"></i></i></a>`;
  }

  let ifinsta = variables.instagram;
  if (variables.instagram == null) {
    ifinsta = "";
  } else {
    ifinsta = `<a href="${variables.instagram}" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-instagram"></i></i></a>`;
  }

  let side = variables.socialMediaPosition;
  if (variables.socialMediaPosition == "position-right") {
    side = "position-right";
  } else {
    side = "position-left";
  }
  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>${ifname}${space}${iflast}</h1>
          <h2>${ifrole}</h2>
          <h3>${ifcity}, ${ifcountry}</h3>
          <ul class="${side}">
            <li>${iftwitter}</li>
            <li>${ifgithub}</li>
            <li>${iflinkedin}</li>
            <li>${ifinsta}</li>
          </ul>
        </div>
    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should
    includeCover: true,
    // this is the url of the image that will used as background for the profile cover
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    // this is the url for the profile avatar
    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",
    // social media bar position (left or right)
    socialMediaPosition: "position-right",
    // social media usernames
    twitter: null,
    github: null,
    linkedin: null,
    instagram: null,
    name: null,
    lastname: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables); //render the card for the first time

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new valus
    });
  });
};
