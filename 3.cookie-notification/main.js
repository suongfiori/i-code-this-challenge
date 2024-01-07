import './style.css'

const closeAndReappear = (element) => {
	element.style.visibility = "hidden"
	setTimeout(() => {
		element.style.visibility = "visible"
	}, 1500)
} 

// event delegation
document.addEventListener("click", (event) => {
	const target = event.target;
	if (target.classList.contains("close-btn")) {
	  const parent = target.closest(".banner, .notification-container")
	  if (parent) {
		closeAndReappear(parent)
	  }
	}
})


