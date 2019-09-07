/*==================== GLOBAL ====================*/
let body = document.querySelector("body");

/*==================== NAV ====================*/

// Header
let navHeader = document.querySelector(".main-navigation");

// Logo Heading
let logoHeading = document.querySelector(".logo-heading");

logoHeading.addEventListener("mouseenter", (event) => {
  event.target.textContent = "cHAoS bUs";
  event.target.style.color = "crimson";
  navHeader.style.backgroundColor = "black";
  body.style.backgroundColor = "black";
  body.style.color = "white";
  navAnchors.forEach((atr) => {
    atr.style.color = "white";
  });
});
logoHeading.addEventListener("mouseleave", (event) => {
  event.target.textContent = "Fun Bus";
  event.target.style.color = "black";
  navHeader.style.removeProperty("background-color");
  body.style.removeProperty("background-color");
  body.style.removeProperty("color");
  navAnchors.forEach((atr) => {
    atr.style.removeProperty("color");
  });
});

// Nav Anchors
let navAnchors = document.querySelectorAll(".nav-link");

navAnchors[0].addEventListener("mouseenter", (event) => {
  event.target.textContent = "Purgatory";
  event.target.style.color = "crimson";
  logoHeading.style.color = "white";
  navHeader.style.backgroundColor = "black";
  body.style.backgroundColor = "black";
  body.style.color = "white";
  navAnchors.forEach((atr) => {
    if (atr != navAnchors[0]) {
      atr.style.color = "white";
    }
  });
});
navAnchors[0].addEventListener("mouseleave", (event) => {
  event.target.textContent = "Home";
  event.target.style.removeProperty("color");
  logoHeading.style.removeProperty("color");
  navHeader.style.removeProperty("background-color");
  body.style.removeProperty("background-color");
  body.style.removeProperty("color");
  navAnchors.forEach((atr) => {
    atr.style.removeProperty("color");
  });
});

navAnchors[1].addEventListener("mouseenter", (event) => {
  event.target.textContent = "Demons";
  event.target.style.color = "crimson";
  logoHeading.style.color = "white";
  navHeader.style.backgroundColor = "black";
  body.style.backgroundColor = "black";
  body.style.color = "white";
  navAnchors.forEach((atr) => {
    if (atr != navAnchors[1]) {
      atr.style.color = "white";
    }
  });
});
navAnchors[1].addEventListener("mouseleave", (event) => {
  event.target.textContent = "About Us";
  event.target.style.removeProperty("color");
  logoHeading.style.removeProperty("color");
  navHeader.style.removeProperty("background-color");
  body.style.removeProperty("background-color");
  body.style.removeProperty("color");
  navAnchors.forEach((atr) => {
    atr.style.removeProperty("color");
  });
});

navAnchors[2].addEventListener("mouseenter", (event) => {
  event.target.textContent = "Vlog";
  event.target.style.color = "crimson";
  logoHeading.style.color = "white";
  navHeader.style.backgroundColor = "black";
  body.style.backgroundColor = "black";
  body.style.color = "white";
  navAnchors.forEach((atr) => {
    if (atr != navAnchors[2]) {
      atr.style.color = "white";
    }
  });
});
navAnchors[2].addEventListener("mouseleave", (event) => {
  event.target.textContent = "Blog";
  event.target.style.removeProperty("color");
  logoHeading.style.removeProperty("color");
  navHeader.style.removeProperty("background-color");
  body.style.removeProperty("background-color");
  body.style.removeProperty("color");
  navAnchors.forEach((atr) => {
    atr.style.removeProperty("color");
  });
});

navAnchors[3].addEventListener("mouseenter", (event) => {
  event.target.textContent = "Terms and Conditions";
  event.target.style.color = "crimson";
  logoHeading.style.color = "white";
  navHeader.style.backgroundColor = "black";
  body.style.backgroundColor = "black";
  body.style.color = "white";
  navAnchors.forEach((atr) => {
    if (atr != navAnchors[3]) {
      atr.style.color = "white";
    }
  });
});
navAnchors[3].addEventListener("mouseleave", (event) => {
  event.target.textContent = "Contact";
  event.target.style.removeProperty("color");
  logoHeading.style.removeProperty("color");
  navHeader.style.removeProperty("background-color");
  body.style.removeProperty("background-color");
  body.style.removeProperty("color");
  navAnchors.forEach((atr) => {
    atr.style.removeProperty("color");
  });
});

/*==================== INTRO ====================*/

// Image
let bus = document.querySelector(".intro img");

bus.addEventListener("mouseenter", (event) => {
  event.target.setAttribute("src", "img/fun-bus2.jpg");
  logoHeading.style.color = "white";
  navHeader.style.backgroundColor = "black";
  body.style.backgroundColor = "black";
  body.style.color = "white";
  navAnchors.forEach((atr) => {
    atr.style.color = "white";
  });
});
bus.addEventListener("mouseleave", (event) => {
  event.target.setAttribute("src", "img/fun-bus.jpg");
  logoHeading.style.removeProperty("color");
  navHeader.style.removeProperty("background-color");
  body.style.removeProperty("background-color");
  body.style.removeProperty("color");
  navAnchors.forEach((atr) => {
    atr.style.removeProperty("color");
  });
});

// h2
let introHeading = document.querySelector(".intro h2");

introHeading.addEventListener("mouseenter", (event) => {
  event.target.textContent = "You Are NOT Welcome Here!";
  event.target.style.color = "crimson";
  logoHeading.style.color = "white";
  navHeader.style.backgroundColor = "black";
  body.style.backgroundColor = "black";
  body.style.color = "white";
  navAnchors.forEach((atr) => {
    atr.style.color = "white";
  });
});
introHeading.addEventListener("mouseleave", (event) => {
  event.target.textContent = "Welcome To Fun Bus!";
  event.target.style.removeProperty("color");
  logoHeading.style.removeProperty("color");
  navHeader.style.removeProperty("background-color");
  body.style.removeProperty("background-color");
  body.style.removeProperty("color");
  navAnchors.forEach((atr) => {
    atr.style.removeProperty("color");
  });
});

// Paragraph
let introParagraph = document.querySelector(".intro p");

introParagraph.addEventListener("mouseenter", (event) => {
  event.target.textContent =
    "Murder death destruction, dirty disgusting vlogger dirty nasty slaughter despair stab. Kill destroy lego, travelvlogger self-deprecating abysmal damage fail evil callous apocalypse creepy cry criminal dastardly villain. Grotesque hideous horrible messy pain rotten revenge.";
  event.target.style.color = "crimson";
  logoHeading.style.color = "white";
  navHeader.style.backgroundColor = "black";
  body.style.backgroundColor = "black";
  body.style.color = "white";
  navAnchors.forEach((atr) => {
    atr.style.color = "white";
  });
});
introParagraph.addEventListener("mouseleave", (event) => {
  event.target.textContent =
    "Traveling expedition modern, clean webdesign blogger clean website theme website modern. Design pretty design, travelblogger adventure WordPress wanderlust theme blogger website expedition theme travelblogger. Adventure fun traveler pretty design website expedition.";
  event.target.style.removeProperty("color");
  logoHeading.style.removeProperty("color");
  navHeader.style.removeProperty("background-color");
  body.style.removeProperty("background-color");
  body.style.removeProperty("color");
  navAnchors.forEach((atr) => {
    atr.style.removeProperty("color");
  });
});

/*==================== MAIN CONTENT ====================*/

/*========== Top ==========*/

// h2
let topHeading = document.querySelector(".content-section h2");

topHeading.addEventListener("mouseenter", (event) => {
  event.target.textContent = "Get Out!";
  event.target.style.color = "crimson";
  logoHeading.style.color = "white";
  navHeader.style.backgroundColor = "black";
  body.style.backgroundColor = "black";
  body.style.color = "white";
  navAnchors.forEach((atr) => {
    atr.style.color = "white";
  });
});
topHeading.addEventListener("mouseleave", (event) => {
  event.target.textContent = "Let's Go!";
  event.target.style.removeProperty("color");
  logoHeading.style.removeProperty("color");
  navHeader.style.removeProperty("background-color");
  body.style.removeProperty("background-color");
  body.style.removeProperty("color");
  navAnchors.forEach((atr) => {
    atr.style.removeProperty("color");
  });
});

// Paragraphs
let topParagraphs = document.querySelectorAll(".content-section p");

topParagraphs[0].addEventListener("mouseenter", (event) => {
  event.target.textContent =
    "Murder death destruction, dirty disgusting vlogger dirty nasty slaughter despair stab. Kill destroy lego, travelvlogger self-deprecating abysmal damage fail evil callous apocalypse creepy.";
  event.target.style.color = "crimson";
  logoHeading.style.color = "white";
  navHeader.style.backgroundColor = "black";
  body.style.backgroundColor = "black";
  body.style.color = "white";
  navAnchors.forEach((atr) => {
    atr.style.color = "white";
  });
});
topParagraphs[0].addEventListener("mouseleave", (event) => {
  event.target.textContent =
    "Adventure webdesign pretty design design, excursion cute WordPress blogger design webdesign adventure. Pretty simple traveling fun WordPress wanderlust darn simple organized.";
  event.target.style.removeProperty("color");
  logoHeading.style.removeProperty("color");
  navHeader.style.removeProperty("background-color");
  body.style.removeProperty("background-color");
  body.style.removeProperty("color");
  navAnchors.forEach((atr) => {
    atr.style.removeProperty("color");
  });
});
