document.addEventListener("DOMContentLoaded", function () {
  var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: "#spying",
  });
  var progressBars = document.querySelectorAll(".progress-bar");

  function animateProgressBars() {
    if (isInView(document.getElementById("skills"))) {
      progressBars.forEach(function (progressBar) {
        progressBar.style.width = progressBar.getAttribute("data-width");
      });
      window.removeEventListener("scroll", animateProgressBars);
    }
  }

  window.addEventListener("scroll", animateProgressBars);
  animateProgressBars(); // Initial check in case the section is already in view

  // IntersectionObserver for timeline and award items
  var timelineItems = document.querySelectorAll(".timeline-item");
  var awardItems = document.querySelectorAll(".award-item");
  var aboutSection = document.querySelector("#about");
  var contactSection = document.querySelector("#contact");
  var projectCards = document.querySelectorAll(".project-card");
  var headings = document.querySelectorAll(".custom-head");

  var observerOptions = { threshold: 0.5 };

  var observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate__fadeIn");
        entry.target.classList.remove("animate__fadeOut");
      } else {
        entry.target.classList.add("animate__fadeOut");
        entry.target.classList.remove("animate__fadeIn");
      }
    });
  }, observerOptions);

  timelineItems.forEach((item) => {
    observer.observe(item);
  });

  awardItems.forEach((item) => {
    observer.observe(item);
  });

  observer.observe(aboutSection);
  observer.observe(contactSection);

  // IntersectionObserver for project cards
  var projectObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      } else {
        entry.target.classList.remove("in-view");
      }
    });
  }, observerOptions);

  // IntersectionObserver for headings
  var headingObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      } else {
        entry.target.classList.remove("in-view");
      }
    });
  }, observerOptions);

  headings.forEach((heading) => {
    heading.classList.add("fade-in");
    headingObserver.observe(heading);
  });

  projectCards.forEach((card) => {
    projectObserver.observe(card);
  });
});

function isInView(elem) {
  var distance = elem.getBoundingClientRect();
  return (
    (distance.top >= 0 && distance.top < window.innerHeight / 1.75) ||
    (distance.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
      distance.bottom >= window.innerHeight / 1.75)
  );
}

// contact me email
var form = document.getElementById("contact-form");
form.addEventListener("submit", SendMail);

function SendMail(e) {
  e.preventDefault();
  var args = {
    from_name: document.getElementById("name").value,
    from_email: document.getElementById("email").value,
    to_name: "Atul",
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };
  emailjs.send("service_4p75rwl", "template_ido2q0a", args).then(() => {
    alert("Message sent!");
  });
  form.reset();
}
