const openModal = () => {
  document.body.classList.add('modal-open');
  document.body.style.overflow = 'hidden';
};

const closeModal = () => {
  document.body.classList.remove('modal-open');
  document.body.style.overflow = 'auto';
};

const openMenu = () => {
  document.body.classList.add('open-menu');
};

const closeMenu = () => {
  document.body.classList.remove('open-menu');
};

$('.products__carousel').slick({
  slidesToShow: 3.9,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 1500,
});
