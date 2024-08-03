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
  animateProgressBars();

  var timelineItems = document.querySelectorAll(".timeline-item");

  var observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        } else {
          entry.target.classList.remove("in-view");
        }
      });
    },
    { threshold: 0.5 },
  );

  timelineItems.forEach((item) => {
    observer.observe(item);
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
