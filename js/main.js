$(document).ready(function () {
    myMap();
    $(window).on('scroll', stickyNav);

    var $window = $(window);		//Window object

    var scrollTime = 0.7;			//Scroll time
    var scrollDistance = 200;		//Distance. Use smaller value for shorter scroll and greater value for longer scroll

    $window.on("mousewheel DOMMouseScroll", function(event){

        event.preventDefault();

        var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
        var scrollTop = $window.scrollTop();
        var finalScroll = scrollTop - parseInt(delta*scrollDistance);

        TweenMax.to($window, scrollTime, {
            scrollTo : { y: finalScroll, autoKill:true },
            ease: Power1.easeOut,	//For more easing functions see http://api.greensock.com/js/com/greensock/easing/package-detail.html
            autoKill: true,
            overwrite: 5
        });

    });

});
function stickyNav() {
    var scrollTop = $(window).scrollTop();
    var navTopOffset = $('header .container').height();
    if (scrollTop >= navTopOffset) {
        $('nav').addClass('sticky');
    }
    else {
        $('nav').removeClass('sticky');
    }
}
function myMap() {
    var mapCanvas = document.getElementById("map");

    var mapOptions = {
        center: new google.maps.LatLng(50.4477055, 30.671989),
        zoom: 18,
    };

    var map = new google.maps.Map(mapCanvas, mapOptions);
    var myLatLng = {lat: 50.4477, lng: 30.67315};

    var icon = {
        url: "http://pluspng.com/img-png/free-png-teeth-teeth-images-cartoon-tooth-free-vector-for-free-download-about-3-clip-art-1675.png", // url
        scaledSize: new google.maps.Size(35, 35), // scaled size
        origin: new google.maps.Point(0,0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    };

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Solodent',
        icon: icon,
    });


    var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Solodent</h1>'+
        '<div id="bodyContent">'+
        '<p>Стоматологічна клініка Solodent</p>'+
        '<p>пн-птн: 09:00 - 21:00</p>'+
        '<p>сб-нд: &nbsp; 09:00 - 15:00</p>'+
        '<p>098 507 19 88</p>'+
        '</div>'+
        '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });


    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
}