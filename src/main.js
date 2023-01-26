function isInView(elem) {
	var distance = elem.getBoundingClientRect();
	return (
		distance.top >= 0 &&
		distance.left >= 0 &&
		distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		distance.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
};
var loader = [];
for (let i = 1; i <= 11; i++) loader[i - 1] = document.getElementById("loading" + i);

window.addEventListener("scroll", scrollEvent);
function scrollEvent() {
	for (let i = 0; i < 11; i++) if (isInView(loader[i])) loader[i].classList.add("loading" + (i + 1));
}

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