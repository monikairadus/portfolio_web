
//    $(document).on("scroll",function(){
//     //sekcja 2
//     const windowHeight = $(window).height();
//     const scrollValue = $(window).scrollTop();

 
  
//     const $section2 = $('.aboutme');
//     const section2Height = $section2.outerHeight();
//     const section2FromTop = $section2.offset().top;

    
  
    

 
  
//     if(scrollValue > section2Height + section2FromTop - windowHeight){
        
    
//     }
// })

// const arrowbtn = document.querySelector(".arrow");

// const goToSection1 = () => {
//     let wielkoscSkrola = window.scrollY;
//     console.log(wielkoscSkrola);

//     const windowHeight = window.innerHeight;
//     console.log(windowHeight);

//     const wysokoscSekcji1 = document.querySelector('.aboutme').clientHeight;
//     console.log(wysokoscSekcji1);
//     const odlegloscOdPoczatkuSekcji1 = document.querySelector('.aboutme').offsetTop;
//     console.log(odlegloscOdPoczatkuSekcji1);

//     wielkoscSkrola = odlegloscOdPoczatkuSekcji1;
//     console.log(wielkoscSkrola);
    
// }

// arrowbtn.addEventListener("click",goToSection1);



const iconAnimate = () => {
    const wielkoscSkrola = window.scrollY;
    const windowHeight = window.innerHeight;
    const wysokoscSekcji2 = document.querySelector('.technologies').clientHeight;
    const odlegloscOdPoczatkuSekcji2 = document.querySelector('.technologies').offsetTop;
    const divIcons = document.querySelectorAll('.icon');

    if (wielkoscSkrola > odlegloscOdPoczatkuSekcji2 + wysokoscSekcji2/2 - windowHeight) {
        console.log("jestem sekcja2 wywietlona w całości");
        // $art2.addClass('active');
        divIcons.forEach(divIcon => {
            divIcon.classList.add("active");
        })
      }
}


window.addEventListener('scroll', iconAnimate)

// $(document).on('scroll', function () {

//     const windowHeight = $(window).height()
//     const scrollValue = $(this).scrollTop();
//     // console.log(scrollValue);
  
  
//     //Pierwsza sekcja
//     const $section2 = $('.technologies');
//     const section2FromTop = $section2.offset().top
//     // console.log(art2FromTop);
//     const section2Height = $section2.outerHeight()
//     // console.log(art2Height);
    
  
//     if (scrollValue > section2FromTop + section2Height - windowHeight) {
//       console.log("jestem sekcja 2 wywietlona w całości");
//       $(".icon").addClass('active');
//     }
  
// })