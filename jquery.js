
var scroll = new SmoothScroll('a[href*="#"]');

// humburger

$(function() {
    // ハンバーガークリックしたら✕、navを出す
    $('.humburger').on('click', function() {
        $('.humburger').toggleClass('active');
        $('.header-nav').fadeToggle(500);
    });

    //nav linkクリックしたらクリアする
    $('.nav-item a').on('click', function() {
        if($('.humburger').hasClass('active')) {
            $('.humburger').toggleClass('active');
            $('.header-nav').fadeToggle(500);
        }
    });
});




// $(function() {
//     背景スライドできない
//     $(window).scroll(function() {
//         $('.skill').each(function() {
//             var target = $(this).offset().top;

//             var scroll = $(window).scrollTop();

//             var windowHeight = $(window).height();

//             if(scroll > target - windowHeight + 200) {
//                 $(this).addClass('fade');
//             }
//         });
//     });
// });



// var parallaxBkImg = function() {
//     $(window).on('load resize', function() {
//         $(window).on('load scroll', function() {
//             var $winTop = $(window).scrollTop();
//             var $target = $('.home');
//             var $winWidth = $(window).width();
//             if($winWidth < 736) {
//                 $target.each(function(index) {
//                     var $position = $windTop - $target.eq(index).offset().top;
//                     if($winTop > $target.eq(index).offset().top -800) {
//                         $target.eq(index).css({
//                             'background-position-y':$position 
//                         });
//                     }
//                 });
//             }
//         });
//     });
// }


// DOM, 画像の読み込みが全て終わったらする処理
$(window).on('load', function() {
    var loading = function() {
        $('.circle').fadeOut(1000);
        $('.loader-wrapper').fadeOut(800);
        
    };
    setTimeout(loading,2500);
});


// ↓load終わった段階ですぐ表示させたいとき

// $(window).on('load', function() {
//     endLoading();
// })

// 5秒経過した段階で、上記の処理を上書き、強制終了
// $(function() {
//     setTimeout('endLoading()', 5000);
// });

// function endLoading() {
    // $('.circle').fadeOut(1000, function(){
    //     $('.load-wrapper').fadeOut(800);
    // });
// }