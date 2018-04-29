// $("a[href^='#']").off().on("click", function (event) {
//     event.preventDefault();
//     var id  = $(this).attr('href');
//     //var h = $('header').height();
//     //var top = $(id).offset().top - h;
//     var top = $(id).offset().top + 1;//1more px to scroll precisely on required section
//
//     $('body,html').stop(true).animate({scrollTop: top}, 1000);
//     if($(window).width() < 767) {
//         var h = $('header').height();
//         top = $(id).offset().top - h;
//         $('body,html').stop(true).animate({scrollTop: top}, 1000);
//     }
// });