// ========================================
// AUTOVAULT - JAVASCRIPT
// ========================================

const carCards = document.querySelectorAll(".car-card");
const searchInput = document.getElementById("searchInput");
const brandFilter = document.getElementById("brandFilter");
const noResults = document.getElementById("noResults");

const modal = document.getElementById("carModal");
const closeModalButton = document.getElementById("closeModal");


// ========================================
// SEARCH DAN FILTER MOBIL
// ========================================

function filterCars() {
    const searchText = searchInput.value.toLowerCase().trim();
    const selectedBrand = brandFilter.value;

    let visibleCars = 0;

    carCards.forEach((card) => {
        const carName = card.dataset.name.toLowerCase();
        const carBrand = card.dataset.brand;

        const matchesSearch = carName.includes(searchText);

        const matchesBrand =
            selectedBrand === "all" ||
            carBrand === selectedBrand;

        const shouldShow = matchesSearch && matchesBrand;

        card.hidden = !shouldShow;

        if (shouldShow) {
            visibleCars++;
        }
    });

    noResults.hidden = visibleCars > 0;
}

searchInput.addEventListener("input", filterCars);
brandFilter.addEventListener("change", filterCars);


// ========================================
// MODAL SPESIFIKASI MOBIL
// ========================================

function openModal(card) {
    document.getElementById("modalBrand").textContent =
        card.dataset.brand.toUpperCase() + " / SPECIFICATIONS";

    document.getElementById("modalName").textContent =
        card.dataset.name;

    document.getElementById("modalYear").textContent =
        "Model year reference: " + card.dataset.year;

    document.getElementById("modalEngine").textContent =
        card.dataset.engine;

    document.getElementById("modalPower").textContent =
        card.dataset.power;

    document.getElementById("modalTorque").textContent =
        card.dataset.torque;

    document.getElementById("modalTransmission").textContent =
        card.dataset.transmission;

    document.getElementById("modalDrive").textContent =
        card.dataset.drive;

    document.getElementById("modalSpeed").textContent =
        card.dataset.speed;

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeModal() {
    modal.classList.remove("active");
    document.body.style.overflow = "";
}

document.querySelectorAll(".details-button").forEach((button) => {
    button.addEventListener("click", () => {
        const card = button.closest(".car-card");
        openModal(card);
    });
});

closeModalButton.addEventListener("click", closeModal);

// Tutup modal saat area gelap di luar kotak diklik.
modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

// Tutup modal dengan tombol Escape.
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeModal();
    }
});


// ========================================
// ANIMASI SAAT SCROLL
// ========================================

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.12
    }
);

revealElements.forEach((element) => {
    revealObserver.observe(element);
});


// ========================================
// EFEK NAVBAR SAAT SCROLL
// ========================================

const navbar = document.querySelector(".navbar");

window.addEventListener(
    "scroll",
    () => {
        if (window.scrollY > 50) {
            navbar.style.background = "#0b0c0eeF";
        } else {
            navbar.style.background = "#0b0c0e70";
        }
    },
    { passive: true }
);


// ========================================
// TAHUN FOOTER OTOMATIS
// ========================================

const copyright = document.querySelector(".copyright");

if (copyright) {
    copyright.textContent =
        `© ${new Date().getFullYear()} AutoVault. All rights reserved.`;
}

console.log("AutoVault website loaded successfully!");
