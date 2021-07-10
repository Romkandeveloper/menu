$(function(){
  var menu_link = $('.menu-link');
  var menu = $('.menu');
  var links = $('.menu ul li a');

  menu_link.on('click',rem);
  links.on('click', rem);

  function rem(){
    menu_link.toggleClass('menu-link_active');
    menu.toggleClass('menu_active');
  }
});

