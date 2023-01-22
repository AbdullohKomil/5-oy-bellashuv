const openModal = () => {
  document.body.classList.add('modal-open');
  document.body.style.overflow = "hidden"
};

const closeModal = () => {
  document.body.classList.remove('modal-open');
  document.body.style.overflow = "auto"
};

const openMenu = () => {
  document.body.classList.add("open-menu")
}

const closeMenu = () => {
  document.body.classList.remove("open-menu")
}
