//Mouse wheel events:

    var sections = document.getElementsByTagName('section');


    var arrayOfScreenOffsetTops = [];
    adjustArrayOfScreenOffsetTops(arrayOfScreenOffsetTops);
    setSmoothScroll(arrayOfScreenOffsetTops);



    window.addEventListener('resize', function(e){

        adjustArrayOfScreenOffsetTops(arrayOfScreenOffsetTops);
    });


    function adjustArrayOfScreenOffsetTops(theArray){

        theArray.length = 0;

        for (var i = 0; i < sections.length; i++) {

            theArray.push(sections[i].offsetTop);
        }

        theArray.push(document.body.scrollHeight - window.innerHeight);
    }
