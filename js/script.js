"use strict";

// const overlay = document.querySelector(".overlay");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const btnScrollTo1 = document.querySelector(".btn--scroll-to-1");
const section1 = document.querySelector("#section1");
const sectionhow = document.querySelector("#how");
const nav = document.querySelector(".main-nav");
const mainnavlinks = document.querySelectorAll(".man-nav-links");

console.log("A page produced and edited by Etzelaire");

////////////////////////////////////////////////

///////////////////////////////////////////////////////////
// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
console.log(currentYear);
console.log("Copyright protected site.");
yearEl.textContent = currentYear;
///////////////////////////////////////////////////////////
// Make mobile navigation work
// const btnNavEl = document.querySelector(".btn-mobile-nav");
// const headerEl = document.querySelector(".header");
// btnNavEl.addEventListener("click", function () {
//   headerEl.classList.toggle("nav-open");
// });

///////////////////////////////////////////////////////////
//BUTTON SCROLLING
btnScrollTo.addEventListener("click", function (e) {
  const s1coords = sectionhow.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log("Current scroll (X/Y)", window.pageXOffset, window.pageYOffset);

  console.log(
    "height/width viewport",
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );
  sectionhow.scrollIntoView({ behavior: "smooth" });
});
///////////////////////////////////////////
btnScrollTo1.addEventListener("click", function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log("Current scroll (X/Y)", window.pageXOffset, window.pageYOffset);

  console.log(
    "height/width viewport",
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );
  section1.scrollIntoView({ behavior: "smooth" });
});
//////////////////////////
//BACK TO TOP BUTTON//
document.addEventListener('DOMContentLoaded', (event) => {
  //Get the button
  var mybutton = document.getElementById("back-to-top-btn");

  // When the user scrolls down from the height of the window, show the button
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
      if (document.body.scrollTop > window.innerHeight || document.documentElement.scrollTop > window.innerHeight) {
          mybutton.style.display = "block";
      } else {
          mybutton.style.display = "none";
      }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
      window.scrollTo({top: 0, behavior: 'smooth'});
  }

  // attach the click event to the button here, inside DOMContentLoaded event listener
  mybutton.addEventListener("click", topFunction);
});

///////////////////////////////////////////////////////////

///////////////////////////////////////
// Menu fade animation
const handleHover = function (e) {
  if (e.target.classList.contains("main-nav-list")) {
    const link = e.target;
    const siblings = link
      .closest(".main-nav")
      .querySelectorAll(".main-nav-list");
    const logo = link.closest(".main-nav").querySelector("img");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
  }
};

// Passing "argument" into handler
nav.addEventListener("mouseover", handleHover.bind(0.5));
nav.addEventListener("mouseout", handleHover.bind(1));
////////////////////////////////////////
//Sticky navigation: Intersection Observer API
document.addEventListener('DOMContentLoaded', (event) => {
  var header = document.getElementById('header');
  var sticky = header.offsetTop;
  var btn = document.querySelector(".back-to-top");

  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
      if (window.pageYOffset > sticky) {
          header.classList.add("sticky");
          btn.style.display = "block"; // show the button when we start scrolling
      } else {
          header.classList.remove("sticky");
          btn.style.display = "none"; // hide the button when we're at the top of the page
      }
  }

  // When the user clicks on the button, scroll to the top of the document
  btn.onclick = function() {
      window.scrollTo({top: 0, behavior: 'smooth'});
  }
});


///////////////////////////////////////////////////////////
// Reveal sections
const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

// Lazy loading images
document.addEventListener("DOMContentLoaded", function() {
  var lazyImages = [].slice.call(document.querySelectorAll("img.lazyload"));

  if ("IntersectionObserver" in window) {
      let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
          entries.forEach(function(entry) {
              if (entry.isIntersecting) {
                  let lazyImage = entry.target;
                  lazyImage.src = lazyImage.dataset.src;
                  lazyImage.classList.remove("lazyload");
                  lazyImageObserver.unobserve(lazyImage);
              }
          });
      });

      lazyImages.forEach(function(lazyImage) {
          lazyImageObserver.observe(lazyImage);
      });
  } else {
      // Fallback for browsers that do not support IntersectionObserver
      lazyImages.forEach(function(lazyImage) {
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.classList.remove("lazyload");
      });
  }
});


// document.addEventListener('DOMContentLoaded', (event) => {
//   // Get the hamburger button, close button and the nav menu
//   // var hamburger = document.querySelector(".icon-mobile-nav[name='menu-outline']");
//   // var close = document.querySelector(".icon-mobile-nav[name='close-outline']");
//   var nav = document.querySelector(".main-nav");

//   // Attach click event to the hamburger button
//   // hamburger.addEventListener("click", function() {
//   //     hamburger.style.display = "none";
//   //     // close.style.display = "block";
//   //     nav.style.display = "block";
//   // });

//   // Attach click event to the close button
//   close.addEventListener("click", function() {
//       // close.style.display = "none";
//       hamburger.style.display = "block";
//       nav.style.display = "none";
//   });

//   // Listen for resize events
//   window.addEventListener('resize', function() {
//       // If the screen size is 768px or larger
//       if (window.innerWidth >= 768) {
//           // Reset everything to the default state
//           hamburger.style.display = "";
//           // close.style.display = "";
//           nav.style.display = "";
//       }
//   });
// });


//DROPDOWN MENU//
document.addEventListener("DOMContentLoaded", function() {
  var mobileNavButton = document.querySelector('.btn-mobile-nav');
  var closeNavButton = document.querySelector('.close-nav-btn');
  var mainNav = document.querySelector('.main-nav');

  mobileNavButton.addEventListener('click', function() {
      // Toggle the active class
      mainNav.classList.toggle('active');
  });

  closeNavButton.addEventListener('click', function() {
      mainNav.classList.remove('active');
  });
});


/********************************************************/
 // Select all dropdown menu links
// const dropdownLinks = document.querySelectorAll('.dropdown .main-nav-link');

// // Add click event listeners to each dropdown link
// dropdownLinks.forEach(link => {
//     link.addEventListener('click', function() {
//         // Toggle display for the submenu of the clicked dropdown link
//         const submenu = this.nextElementSibling;
//         if (submenu.style.display === 'block') {
//             submenu.style.display = 'none';
//         } else {
//             submenu.style.display = 'block';
//         }
//     });
// });


/********************************************************/
 // Close previosuly open menus on clicking a new one
 document.addEventListener("DOMContentLoaded", function() {

  // Get all dropdown parent items
  const dropdowns = document.querySelectorAll('.dropdown');

  // Iterate through each dropdown parent
  dropdowns.forEach(dropdown => {

      // Add click event to each dropdown parent
      dropdown.addEventListener('click', function() {

          // Find the submenu within the clicked dropdown
          const submenu = this.querySelector('.submenu');

          // If this submenu is already open, close it
          if (submenu.classList.contains('open')) {
              submenu.classList.remove('open');
              return;
          }

          // If another submenu is open, close it
          const openSubmenu = document.querySelector('.submenu.open');
          if (openSubmenu) {
              openSubmenu.classList.remove('open');
          }

          // Open the clicked submenu
          submenu.classList.add('open');
      });
  });

});


