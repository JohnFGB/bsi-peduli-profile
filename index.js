const sidenav = document.querySelectorAll('.sidenav');
M.Sidenav.init(sidenav);

const slider = document.querySelectorAll('.slider');
M.Slider.init(slider, {
  height: 600,
  transition: 600,
  interval: 4000,
});

const parallax = document.querySelectorAll('.parallax');
M.Parallax.init(parallax);

const carousel = document.querySelectorAll('.carousel');
M.Carousel.init(carousel, {
  duration: 700,
  dist: -50,
  height: 500,
});
