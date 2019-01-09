var boostYourBrandingSection = document.getElementById('boost-your-branding');


var firstLineOfSlides = document.createElement("div");
document.querySelector('.slides .right-side').appendChild(firstLineOfSlides).classList.add('first-line');

var lastLineOfSlides = document.createElement("div");
document.querySelector('#link-your-booking-system .right-side').appendChild(lastLineOfSlides).classList.add('last-line');


var slides = document.getElementsByClassName('slides');


var leftSideOfSlides = slides[0].getElementsByClassName('left-side')[0];
var allIconGroups = slides[0].querySelectorAll('.left-side ul');
var allScreenshots = slides[0].querySelectorAll('.left-side img.screen');


window.addEventListener('scroll', function(e) {

    //Shows "boost-your-branding" data when it appears on screen:

        if (window.pageYOffset > document.querySelector('section#main').clientHeight-20 && boostYourBrandingSection.classList.contains("hidden-content")) {

            boostYourBrandingSection.classList.remove("hidden-content");
        }




        for (var i = 0; i < slides.length; i++) {

            var slidePositionInPx = slides[i].offsetTop - window.pageYOffset;
            var slidePositionInVh = (slidePositionInPx/window.innerHeight)*100;

            if (slidePositionInVh <= 100 && slidePositionInVh >= -100){

                var numberPosition = 50 + slidePositionInVh/1.4;
                var containerPosition = 50 + slidePositionInVh*1.4;

                slides[i].getElementsByTagName('h2')[0].style.top = numberPosition+'vh';
                slides[i].getElementsByClassName('container')[0].style.top = containerPosition+'vh';
            }

            if (i == 0) {

                slides[i].querySelector('.first-line').style.height = (100-numberPosition)+'vh';

            }else if (i == slides.length-1) {

                slides[i].querySelector('.last-line').style.height = (numberPosition)+'vh';
            }

        }



        //Icons:

            for (var i = 0; i < allIconGroups.length; i++) {

                allIconGroups[i].classList.remove('show');
            }

            for (var i = 0; i < allScreenshots.length; i++) {
                allScreenshots[i].classList.remove('show-screen');
            }



            var margin = window.innerHeight/10;

            if (window.pageYOffset >= slides[0].offsetTop && window.pageYOffset < slides[1].offsetTop+margin) {

                slides[0].getElementsByClassName('better-engadgement-and-performance-metrics')[0].classList.add('show');

                if(window.pageYOffset < slides[0].offsetTop+margin){

                    slides[0].querySelector('.screen.better-engadgement').classList.add('show-screen');
                }else if (window.pageYOffset >= slides[1].offsetTop) {

                    slides[0].querySelector('.screen.performance-metrics').classList.add('show-screen');
                }

            }else if(window.pageYOffset >= slides[2].offsetTop && window.pageYOffset < slides[2].offsetTop+margin){

                slides[0].getElementsByClassName('unlimited-loyalty-channels')[0].classList.add('show');
                slides[0].querySelector('.screen.unlimited-loyalty-channels').classList.add('show-screen');

            }else if(window.pageYOffset >= slides[3].offsetTop && window.pageYOffset < slides[3].offsetTop+margin){

                slides[0].getElementsByClassName('social-media')[0].classList.add('show');
                slides[0].querySelector('.screen.social-media').classList.add('show-screen');

            }else if(window.pageYOffset >= slides[4].offsetTop){

                slides[0].getElementsByClassName('link-your-booking-system')[0].classList.add('show');
                slides[0].querySelector('.screen.link-your-booking-system').classList.add('show-screen');
            }

        //Smarthphone fixed to the screen:

            if (window.pageYOffset >= slides[0].offsetTop) {

                leftSideOfSlides.classList.add('fixed');

            }else{

                leftSideOfSlides.classList.remove('fixed');
            }


            if (window.pageYOffset > slides[slides.length-1].offsetTop+5) {

                leftSideOfSlides.classList.add('hidden');

            }else{

                leftSideOfSlides.classList.remove('hidden');
            }

});


//Mouse wheel events:

    var arrayOfScreenOffsetTops = [];
    adjustArrayOfScreenOffsetTops(arrayOfScreenOffsetTops);
    setSmoothScroll(arrayOfScreenOffsetTops);

    window.addEventListener('resize', function(e){

        adjustArrayOfScreenOffsetTops(arrayOfScreenOffsetTops);
        window.scrollBy(0, 10);
    });



    function adjustArrayOfScreenOffsetTops(theArray){
        theArray.length = 0;

        theArray.push(0);
        theArray.push(document.querySelector('section#main').clientHeight);

        for (var i = 0; i < slides.length; i++) {

            theArray.push(slides[i].offsetTop);
        }

        theArray.push(document.body.scrollHeight - window.innerHeight);
    }
