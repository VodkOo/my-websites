/* отложенный запуск файла js, и burger */
window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.burger').addEventListener('click', function() {
    document.querySelector('#menu').classList.toggle('is-active')
    /* document.querySelectorAll('.burger-line').forEach(function(bl) {
      bl.classList.toggle('burger__is-active') */
    /* }) */
  })
  document.querySelector('.nav__link').addEventListener('click', function() {
    document.querySelector('#menu').classList.toggle('is-active')
  })
  document.querySelector('.close-burger').addEventListener('click', function() {
    document.querySelector('#menu').classList.toggle('is-active')
  })
   /* закрытие burgera после клика по ссылке */
  document.querySelectorAll('.nav__link').forEach(function(nl) {
    nl.addEventListener('click', function() {
      document.querySelector('#menu').classList.toggle('is-active')
      /* document.querySelector('.burger-line').forEach(function(bl) {
        bl.classList.remove('burger__is-active')
      }) */
    })
  })

  /* открытие поля search */
  document.querySelector('.btn-reset_header-search-open').addEventListener('click', function() {
    document.querySelector('.search-hidden-box').classList.add('search-hidden-box_active')
    document.querySelector('.btn-reset_header-search-open').classList.add('header__search_active')
    document.querySelector('.search-box').classList.add('search-box_active')
  })
  /* закрытие поля search */
  document.querySelector('.search-cancel').addEventListener('click', function() {
    document.querySelector('.search-hidden-box').classList.remove('search-hidden-box_active')
    document.querySelector('.btn-reset_header-search-open').classList.remove('header__search_active')
    document.querySelector('.search-box').classList.remove('search-box_active')
  })

  /* swiper с сайта swiperjs.com */
/*   const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'boolean',
    },
  }) */
  const swiper = new Swiper('.swiper-container', {
    loop: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },

   // area-label
    a11y: {
      paginationBulletMessage: 'Тут название слайда {{index}}',
    }
  });

  /* Активация кнопки tab */
  document.querySelectorAll('.btn-reset_item-tabs').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.how-we-work__block-content').forEach(function(tabContent) {
        tabContent.classList.remove('tab-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-active')
    })
  })
  /* Цвет активной кнопки tab */
  document.querySelectorAll('.btn-reset_item-tabs').forEach(function(tabsBtnAccent) {
    tabsBtnAccent.addEventListener('click', function(tab) {
      const accent = tab.currentTarget.dataset.accent

      document.querySelectorAll('.btn-reset_item-tabs').forEach(function(tabsAccent) {
        tabsAccent.classList.remove('tabs-accent')
      })
      document.querySelector(`[data-target="${accent}"]`).classList.add('tabs-accent')
    })
  })

  /* accordion jqueryui.com */
  $( function() {
    $( "#accordion" ).accordion({
      heightStyle: "content"
    })
  })
})
