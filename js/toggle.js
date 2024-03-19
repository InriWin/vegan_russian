const toggleBtn = document.querySelector('[data-show-all-btn]');
const hiddenItems = document.querySelector('[data-hidden-items]');

toggleBtn.addEventListener("click", toggleItems);

function toggleItems() {
    toggleBtn.classList.toggle('sale__visible--active');
    hiddenItems.classList.toggle('sale__items--hidden');
}

