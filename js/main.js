 $(function () {
//Фильтр котов. 
 let a_sort = $('#sorting button');
  let div_conteiner = jQuery.makeArray($('#conteiner .catalog__item'));
  a_sort.each(function (index, self) {
      let id = $(self).attr("id");
      let reg = new RegExp("^.*?(" + id + "\\S+).*?$");
      $(self).click(function (e) {
          e.preventDefault();
          div_conteiner.sort(function f(a, b) {
              a = a.className.replace(reg, '$1');
              b = b.className.replace(reg, '$1');
              let c = 0
              if (a > b) c = 1;
              if (a < b) c = -1;
              return c
          });
          $.map(div_conteiner, function (div) {
              $(div).appendTo($('#conteiner'))
          });
      });
  });
   
//Скролл
  let toTopBtn = document.querySelector('.to-up');
  window.onscroll = function () {
    if (window.pageYOffset > 30) {
      toTopBtn.style.display = 'block'
    } else {
      toTopBtn.style.display = 'none'
    }
  }
  //Плавность скролла  
  toTopBtn.addEventListener('click', function () {
    window.scrollBy({
      top: -document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  });

   let likeBtn = $('.catalog__like-btn');
   
   likeBtn.on('click', function () {
     $(this).toggleClass('active');
     if ($(this).hasClass('active')) {
       $('.notification').css('display', 'block');
       setTimeout(function () {
          $('.notification').css('display', 'none');
       }, 2000);
      
     }
   })


});
