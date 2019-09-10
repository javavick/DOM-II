/*==================== GLOBAL ====================*/

// Variables
let body = document.querySelector("body");
let footer = document.querySelector("footer");

// Functions
function darkStyling() {
  event.target.style.color = "crimson";
  logoHeading.style.color = "white";
  navHeader.style.backgroundColor = "black";
  body.style.backgroundColor = "black";
  body.style.color = "white";
  footer.style.borderTop = "2px dashed white";
  footer.style.background = "black";
  footerParagraph.style.backgroundColor = "black";
  footerParagraph.style.color = "white";
}

function navAnchorsDark() {
  navAnchors.forEach(atr => {
    atr.style.color = "white";
  });
}

function defaultStyling() {
  event.target.style.removeProperty("color");
  logoHeading.style.removeProperty("color");
  navHeader.style.removeProperty("background-color");
  body.style.removeProperty("background-color");
  body.style.removeProperty("color");
  navAnchors.forEach(atr => {
    atr.style.removeProperty("color");
  });
  footer.style.removeProperty("border-top");
  footer.style.removeProperty("background");
  footerParagraph.style.removeProperty("background-color");
  footerParagraph.style.removeProperty("color");
}

// Event Listeners
body.addEventListener("keypress", event => {
  window.alert("Loser.");
});

/*==================== NAV ====================*/

// Header
let navHeader = document.querySelector(".main-navigation");

// Logo Heading
let logoHeading = document.querySelector(".logo-heading");

logoHeading.addEventListener("mouseenter", event => {
  event.target.textContent = "cHAoS bUs";
  darkStyling();
  navAnchorsDark();
  event.target.style.color = "crimson";
});
logoHeading.addEventListener("mouseleave", event => {
  event.target.textContent = "Fun Bus";
  defaultStyling();
});

// Nav Anchors
let navAnchors = document.querySelectorAll(".nav-link");

navAnchors[0].addEventListener("mouseenter", event => {
  event.target.textContent = "Purgatory";
  event.target.style.color = "crimson";
  darkStyling();
  navAnchors.forEach(atr => {
    if (atr != navAnchors[0]) {
      atr.style.color = "white";
    }
  });
});
navAnchors[0].addEventListener("mouseleave", event => {
  event.target.textContent = "Home";
  defaultStyling();
});

navAnchors[1].addEventListener("mouseenter", event => {
  event.target.textContent = "Demons";
  event.target.style.color = "crimson";
  darkStyling();
  navAnchors.forEach(atr => {
    if (atr != navAnchors[1]) {
      atr.style.color = "white";
    }
  });
});
navAnchors[1].addEventListener("mouseleave", event => {
  event.target.textContent = "About Us";
  defaultStyling();
});

navAnchors[2].addEventListener("mouseenter", event => {
  event.target.textContent = "Vlog";
  event.target.style.color = "crimson";
  darkStyling();
  navAnchors.forEach(atr => {
    if (atr != navAnchors[2]) {
      atr.style.color = "white";
    }
  });
});
navAnchors[2].addEventListener("mouseleave", event => {
  event.target.textContent = "Blog";
  defaultStyling();
});

navAnchors[3].addEventListener("mouseenter", event => {
  event.target.textContent = "Terms and Conditions";
  event.target.style.color = "crimson";
  darkStyling();
  navAnchors.forEach(atr => {
    if (atr != navAnchors[3]) {
      atr.style.color = "white";
    }
  });
});
navAnchors[3].addEventListener("mouseleave", event => {
  event.target.textContent = "Contact";
  defaultStyling();
});

/*==================== INTRO ====================*/

// Image
let bus = document.querySelector(".intro img");

bus.addEventListener("mouseenter", event => {
  event.target.setAttribute("src", "img/fun-bus2.jpg");
  darkStyling();
  navAnchorsDark();
});
bus.addEventListener("mouseleave", event => {
  event.target.setAttribute("src", "img/fun-bus.jpg");
  defaultStyling();
});

// h2
let introHeading = document.querySelector(".intro h2");

introHeading.addEventListener("mouseenter", event => {
  event.target.textContent = "You Are NOT Welcome Here!";
  darkStyling();
  navAnchorsDark();
});
introHeading.addEventListener("mouseleave", event => {
  event.target.textContent = "Welcome To Fun Bus!";
  defaultStyling();
});

// Paragraph
let introParagraph = document.querySelector(".intro p");

introParagraph.addEventListener("mouseenter", event => {
  event.target.textContent =
    "Murder death destruction, dirty disgusting vlogger dirty nasty slaughter despair stab. Kill destroy lego, travelvlogger self-deprecating abysmal damage fail evil callous apocalypse creepy cry criminal dastardly villain. Grotesque hideous horrible messy pain rotten revenge.";
  darkStyling();
  navAnchorsDark();
});
introParagraph.addEventListener("mouseleave", event => {
  event.target.textContent =
    "Traveling expedition modern, clean webdesign blogger clean website theme website modern. Design pretty design, travelblogger adventure WordPress wanderlust theme blogger website expedition theme travelblogger. Adventure fun traveler pretty design website expedition.";
  defaultStyling();
});

/*==================== MAIN CONTENT ====================*/

/*========== Top ==========*/

// h2
let topHeading = document.querySelectorAll(".content-section h2");

topHeading[0].addEventListener("mouseenter", event => {
  event.target.textContent = "Get Out!";
  darkStyling();
  navAnchorsDark();
});
topHeading[0].addEventListener("mouseleave", event => {
  event.target.textContent = "Let's Go!";
  defaultStyling();
});

topHeading[1].addEventListener("mouseenter", event => {
  event.target.textContent = "Murder Awaits if You Stay";
  darkStyling();
  navAnchorsDark();
});
topHeading[1].addEventListener("mouseleave", event => {
  event.target.textContent = "Adventure Awaits";
  defaultStyling();
});

// Paragraphs
let topParagraphs = document.querySelectorAll(".content-section p");

topParagraphs.forEach(atr => {
  if (atr === topParagraphs[0] || atr === topParagraphs[2]) {
    atr.addEventListener("mouseenter", event => {
      event.target.textContent =
        "Murder death destruction, dirty disgusting vlogger dirty nasty slaughter despair stab. Kill destroy lego, travelvlogger self-deprecating abysmal damage fail evil callous apocalypse creepy.";
      darkStyling();
      navAnchorsDark();
    });
    atr.addEventListener("mouseleave", event => {
      event.target.textContent =
        "Adventure webdesign pretty design design, excursion cute WordPress blogger design webdesign adventure. Pretty simple traveling fun WordPress wanderlust darn simple organized.";
      defaultStyling();
    });
  } else {
    atr.addEventListener("mouseenter", event => {
      event.target.textContent =
        "Murder death destruction, dirty disgusting vlogger dirty nasty slaughter despair stab kill destroy lego tomatoes fart.";
      darkStyling();
      navAnchorsDark();
    });
    atr.addEventListener("mouseleave", event => {
      event.target.textContent =
        "Expedition colorful design simple excursion blogger blogger design WordPress design, design organized website theme.";
      defaultStyling();
    });
  }
});

// Images

let topImages = document.querySelectorAll(".img-content img");

topImages[0].addEventListener("mouseenter", event => {
  event.target.setAttribute("src", "img/adventure2.jpg");
  darkStyling();
  navAnchorsDark();
});
topImages[0].addEventListener("mouseleave", event => {
  event.target.setAttribute("src", "img/adventure.jpg");
  defaultStyling();
});

topImages[1].addEventListener("mouseenter", event => {
  event.target.setAttribute("src", "img/fun2.jpg");
  darkStyling();
  navAnchorsDark();
});
topImages[1].addEventListener("mouseleave", event => {
  event.target.setAttribute("src", "img/fun.jpg");
  defaultStyling();
});

/*========== Middle ==========*/

//h2
let destinationHeading = document.querySelector(".content-destination h2");

destinationHeading.addEventListener("mouseenter", event => {
  event.target.textContent = "Leave Immediately!";
  darkStyling();
  navAnchorsDark();
});
destinationHeading.addEventListener("mouseleave", event => {
  event.target.textContent = "Pick Your Destination";
  defaultStyling();
});

// Paragraph
let destinationParagraph = document.querySelector(".content-destination p");

destinationParagraph.addEventListener("mouseenter", event => {
  event.target.textContent =
    "Murder death destruction, dirty disgusting vlogger dirty nasty slaughter despair stab. Kill destroy lego, travelvlogger self-deprecating abysmal damage fail evil callous apocalypse creepy.";
  darkStyling();
  navAnchorsDark();
});
destinationParagraph.addEventListener("mouseleave", event => {
  event.target.textContent =
    "Expedition excursion design darn excursion fun, clean simple organized WordPress Travel colorful webdesign. Traveler blogger website design expedition clean excursion traveling.";
  defaultStyling();
});

// Image

let destinationImage = document.querySelector(".content-destination img");

destinationImage.addEventListener("mouseenter", event => {
  event.target.setAttribute("src", "img/destination2.jpg");
  darkStyling();
  navAnchorsDark();
});
destinationImage.addEventListener("mouseleave", event => {
  event.target.setAttribute("src", "img/destination.jpg");
  defaultStyling();
});

/*========== Bottom ==========*/

// h4
let pickHeadings = document.querySelectorAll(".content-pick h4");

pickHeadings[0].addEventListener("mouseenter", enter => {
  event.target.textContent = "I Will Look For You";
  darkStyling();
  navAnchorsDark();
});
pickHeadings[0].addEventListener("mouseleave", enter => {
  event.target.textContent = "Fun In The Sun";
  defaultStyling();
});

pickHeadings[1].addEventListener("mouseenter", enter => {
  event.target.textContent = "I Will Find You";
  darkStyling();
  navAnchorsDark();
});
pickHeadings[1].addEventListener("mouseleave", enter => {
  event.target.textContent = "Mountain Excursion";
  defaultStyling();
});

pickHeadings[2].addEventListener("mouseenter", enter => {
  event.target.textContent = "And I Will Kill You";
  darkStyling();
  navAnchorsDark();
});
pickHeadings[2].addEventListener("mouseleave", enter => {
  event.target.textContent = "Island Getaway";
  defaultStyling();
});

// Paragraphs
let pickParagraphs = document.querySelectorAll(".content-pick p");

pickParagraphs.forEach(atr => {
  atr.addEventListener("mouseenter", event => {
    event.target.textContent =
      "Murder death destruction, dirty disgusting vlogger dirty nasty slaughter despair stab. Kill destroy lego, travelvlogger self-deprecating abysmal damage fail evil callous apocalypse creepy cry villain.";
    darkStyling();
    navAnchorsDark();
  });

  atr.addEventListener("mouseleave", event => {
    event.target.textContent =
      "Expedition excursion design darn excursion fun, clean simple organized WordPress Travel colorful webdesign. Traveler blogger website design expedition clean excursion traveling.";
    defaultStyling();
  });
});

// Buttons
let pickButtons = document.querySelectorAll(".content-pick .btn");

pickButtons.forEach(atr => {
  atr.addEventListener("mouseenter", event => {
    darkStyling();
    navAnchorsDark();
    event.target.style.color = "white";
    event.target.style.backgroundColor = "crimson";
    event.target.style.borderColor = "white";
    event.target.textContent = "Execution!";
  });

  atr.addEventListener("mouseleave", event => {
    defaultStyling();
    event.target.style.removeProperty("background-color");
    event.target.textContent = "Sign Me Up!";
  });
});

/*==================== FOOTER ====================*/

// Paragraph
let footerParagraph = document.querySelector("footer p");

footerParagraph.addEventListener("mouseenter", event => {
  event.target.textContent = "Copyright Beelzebub 0000";
  darkStyling();
  navAnchorsDark();
  event.target.style.color = "crimson";
});
footerParagraph.addEventListener("mouseleave", event => {
  event.target.textContent = "Copyright Fun Bus 2018";
  defaultStyling();
});
