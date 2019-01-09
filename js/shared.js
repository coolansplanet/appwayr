//Menu for mobiles:

    document.querySelector('header nav').addEventListener('click', function(e){

        e.target.classList.toggle('show-menu');
    });



//smooth scroll:

    function setSmoothScroll(arrayOfScreenOffsetTops){

        var dontMove = false;

        document.addEventListener('wheel', function(e){

            e.preventDefault();

            if(dontMove){
                return null;
            }

            var goesTo = 0;
            var goesToNextScreen = e.deltaY >= 0;


            for (var i = 0; i < arrayOfScreenOffsetTops.length; i++) {

                var last;
                var next;

                if (i == 0) {

                    last = 0;
                    next = arrayOfScreenOffsetTops[i+1];

                }else if (i == arrayOfScreenOffsetTops.length-1) {

                    last = arrayOfScreenOffsetTops[i-1];
                    next = arrayOfScreenOffsetTops[i];

                }else{

                    last = arrayOfScreenOffsetTops[i-1];
                    next = arrayOfScreenOffsetTops[i+1];
                }



                if (window.pageYOffset > arrayOfScreenOffsetTops[i] && window.pageYOffset < next) {

                    goesTo = goesToNextScreen ? next : arrayOfScreenOffsetTops[i];
                    break;

                }else if (window.pageYOffset == arrayOfScreenOffsetTops[i] && window.pageYOffset < next+1) {

                    goesTo = goesToNextScreen ? next : last;
                    break;
                }
            }


            if (goesTo == window.pageYOffset) {
                return null;
            }

            dontMove = true;

            $('html, body').animate({
                    scrollTop: goesTo
                }, 800, function(){

                    dontMove = false;
                }
            );


        });

    }

//TODO: addEventListener load, arrowdown, arrowup, swipe


//Form submit:
    document.querySelector('form').addEventListener('submit', function(e){

        e.preventDefault();

        $.ajax({
          method: "POST",
          url: "submit.php",
          data: $('form').serialize()
        })
          .done(function( msg ) {

              e.target.querySelectorAll('input, textarea').forEach(function(oneElement){

                  oneElement.setAttribute('disabled', true);
              });

              e.target.classList.add('sent');

        }).fail(function(error){

            alert("Your message couldn't been sent. Please try again later.");
        });

    });
