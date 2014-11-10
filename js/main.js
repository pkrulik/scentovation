
var BV = new $.BigVideo();
BV.init();
if (Modernizr.touch) {
    BV.show('video-poster.jpg');
} else {
    BV.show('http://player.vimeo.com/external/103934218.hd.mp4?s=832a4bf7caa039990acb9a25357b3239',{ambient:true});
}


var $win = $(window);
var winHeight = $win.height();
var $mainContent = $('main');


$mainContent.css({'margin-top':winHeight - 100})