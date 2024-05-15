  let i = 100;
  let j = 100;

  function checkSwiper() {
    if (window.Swiper && (document.readyState === "complete")) {
      // Iframe lightbox

      const swiper = new Swiper(".mySwiper", {
        slideToClickedSlide: true,
        spaceBetween: 10,
        loopedSlides: 50,
        allowTouchMove: false,
        direction: 'horizontal',
        breakpoints: {
          768: {
            allowTouchMove: false,
          },
          320: {
            direction: 'horizontal',
          }
        }
      });
      const swiper2 = new Swiper(".mySwiper2", {
        spaceBetween: 0,
        effect: "fade",
        thumbs: {
          swiper: swiper,
        },
      });
    } else if (i > 0) {
      i = i - 1;
      setTimeout(checkSwiper, 100);
    }
  }

  function checkIframe() {
    if (window.IframeLightbox && (document.readyState === "complete")) {
      [].forEach.call(document.getElementsByClassName("iframe-lightbox-custom"), function (el) {
        el.lightbox = new IframeLightbox(el);
      }); 
    } else if (j > 0) {
      j = j - 1; 
      setTimeout(checkIframe, 100);
    }
  }

  checkIframe();
  checkSwiper();
