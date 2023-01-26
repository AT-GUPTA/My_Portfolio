var arr = [];
for (let i = 1; i <= 11; i++) arr[i - 1] = document.getElementById("loading" + i);

window.addEventListener("scroll", scrollEvent);
function scrollEvent() {
	for (let i = 0; i < 11; i++) if (isInView(arr[i])) arr[i].classList.add("loading" + (i + 1));
}

function isInView(elem) {
	var distance = elem.getBoundingClientRect();
	return (
		distance.top >= 0 &&
		distance.left >= 0 &&
		distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		distance.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
};