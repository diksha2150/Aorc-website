/****************************Header***********************************/


// var swiper = new Swiper(".client-otr", {
//     slidesPerView: 2,
//     spaceBetween: 40,
//     loop: true,
//     autoplay: {
//         delay: 0,
//         disableOnInteraction: false,
//     },
//     speed:1000,
//     breakpoints: {
//         0: {
//             slidesPerView: 1,
//             spaceBetween: 20,
//         },
//         480: {
//             slidesPerView: 1.3,
//             spaceBetween: 20,
//         },
//         601: {
//             slidesPerView: 1.8,
//             spaceBetween: 20,
//         },        
//         767: {
//             slidesPerView: 2.3,
//             spaceBetween: 20,
//         },
//         901: {
//             slidesPerView: 2.5,
//             spaceBetween: 25,
//         },
//         1025: {
//             slidesPerView: 3,
//             spaceBetween: 30,
//         },
//         1200: {
//             slidesPerView: 3.2,
//             spaceBetween: 30,
//         },
//         1300: {
//             slidesPerView: 2,
//             spaceBetween: 30,
//         },
//     },
// });

$(document).ready(function() {
    // Function to dynamically set slidesOffsetBefore
    function updateSwiperOffset(swiperInstance, targetElement) {
      var target = $(targetElement);
  
      if (target.length) {
        // If the target element exists, get the left offset
        var bioOffset = target.offset().left;
  
        // Update the Swiper slidesOffsetBefore based on the offset value
        swiperInstance.params.slidesOffsetBefore = bioOffset;
  
        // Reinitialize Swiper to apply the updated offset
        swiperInstance.update();
      } else {
        console.warn(`Element "${targetElement}" not found. Cannot update Swiper offset.`);
      }
    }
    var swiper1 = new Swiper(".client-otr", {
      slidesPerView: "auto",
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      breakpoints: {
        320: {
          slidesPerView: 1.8,
          spaceBetween: 20,
        },
        480: {
          slidesPerView: 2.1,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 2.3,
          spaceBetween: 30,
        },
        901: {
          slidesPerView: 2.5,
          spaceBetween: 35,
        },
        1024: {
          slidesPerView: "auto",
        }
      },
      slidesOffsetBefore: 300, // Default value, will be updated dynamically
      spaceBetween: 50,
      grabCursor: true,
      speed: 800, // Adjust speed for smooth transition
      effect: 'slide',
      easing: 'ease-in-out',
    });
  
    // Call updateSwiperOffset for both sliders on load
    updateSwiperOffset(swiper1, '.client-wrapper'); // Align swiper1 based on .work_miriam_bio
    updateSwiperOffset(swiper2, '.client-wrapper'); // Align swiper2 based on .work_miriam_bio
  
    // Update offset on window resize for both sliders
    $(window).resize(function() {
      updateSwiperOffset(swiper1, '.client-wrapper'); // Update swiper1 on resize
      updateSwiperOffset(swiper2, '.client-wrapper'); // Update swiper2 on resize
    });
  });
