document.addEventListener('DOMContentLoaded', function () {
  var splide = new Splide('.splide', {
    perPage: 3,
    rewind: true,
    autoScroll: {
      speed: 0.5,
    },
  }).mount(window.splide.Extensions);

  function adjustPerPage() {
    splide.options.perPage = window.innerWidth < 1100 ? 1 : 3;
    splide.refresh();
  }

  adjustPerPage();

  window.addEventListener('resize', function() {
    adjustPerPage();
  });
});