
// Function to close all dropdowns except the one that is clicked
function closeAllDropdowns(exceptDropdown = null) {
	const dropdowns = [
		document.getElementById('dropdownContentExpertise'),
		document.getElementById('dropdownContentServices')
	];

	dropdowns.forEach((dropdown) => {
		if (dropdown !== exceptDropdown) {
			dropdown.classList.add("opacity-0", "translate-y-5");
			dropdown.classList.remove("opacity-100", "translate-y-0");
			setTimeout(() => {
				dropdown.classList.add("hidden");
			}, 500);
		}
	});
}

// Expertise Dropdown
const dropdownButtonExpertise = document.getElementById("dropdownButtonExpertise");
const dropdownContentExpertise = document.getElementById("dropdownContentExpertise");

dropdownButtonExpertise.addEventListener("click", () => {
	if (dropdownContentExpertise.classList.contains("hidden")) {
		closeAllDropdowns(dropdownContentExpertise); // Close other dropdowns

		dropdownContentExpertise.classList.remove("hidden", "opacity-0", "translate-y-5");
		dropdownContentExpertise.classList.add("opacity-100", "translate-y-0");
	} else {
		dropdownContentExpertise.classList.add("opacity-0", "translate-y-5");
		dropdownContentExpertise.classList.remove("opacity-100", "translate-y-0");
		setTimeout(() => {
			dropdownContentExpertise.classList.add("hidden");
		}, 500);
	}
});

// Services Dropdown
const dropdownButtonServices = document.getElementById("dropdownButtonServices");
const dropdownContentServices = document.getElementById("dropdownContentServices");

dropdownButtonServices.addEventListener("click", () => {
	if (dropdownContentServices.classList.contains("hidden")) {
		closeAllDropdowns(dropdownContentServices); // Close other dropdowns

		dropdownContentServices.classList.remove("hidden", "opacity-0", "translate-y-5");
		dropdownContentServices.classList.add("opacity-100", "translate-y-0");
	} else {
		dropdownContentServices.classList.add("opacity-0", "translate-y-5");
		dropdownContentServices.classList.remove("opacity-100", "translate-y-0");
		setTimeout(() => {
			dropdownContentServices.classList.add("hidden");
		}, 500);
	}
});

// Detect click outside the dropdowns to close them
document.addEventListener("click", (e) => {
	const isClickInsideExpertise = dropdownButtonExpertise.contains(e.target) || dropdownContentExpertise.contains(e.target);
	const isClickInsideServices = dropdownButtonServices.contains(e.target) || dropdownContentServices.contains(e.target);

	if (!isClickInsideExpertise) {
		dropdownContentExpertise.classList.add("opacity-0", "translate-y-5");
		dropdownContentExpertise.classList.remove("opacity-100", "translate-y-0");
		setTimeout(() => {
			dropdownContentExpertise.classList.add("hidden");
		}, 500);
	}

	if (!isClickInsideServices) {
		dropdownContentServices.classList.add("opacity-0", "translate-y-5");
		dropdownContentServices.classList.remove("opacity-100", "translate-y-0");
		setTimeout(() => {
			dropdownContentServices.classList.add("hidden");
		}, 500);
	}
});