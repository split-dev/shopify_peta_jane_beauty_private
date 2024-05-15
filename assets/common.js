

(function(){
    let sw_i = 100;

    function runSwiperHandle() {
        // eslint-disable-next-line
        var homeReviews = new Swiper('.js-home-reviews-slider-init', {
            slidesPerView: 1,
            centeredSlides: false,
            loop: false,
            spaceBetween: 15,
            breakpoints: {
                575: {
                    slidesPerView: 1.5,
                    spaceBetween: 15,
                    centeredSlides: false,
                },
                750: {
                    slidesPerView: 2,
                    spaceBetween: 15,
                    centeredSlides: false,
                },
                990: {
                    slidesPerView: 3,
                    spaceBetween: 28,
                    centeredSlides: false,
                }
            },
            navigation: {
                nextEl: ".swiper-reviews-button-next",
                prevEl: ".swiper-reviews-button-prev",
            },
        });

        var homeInsta = new Swiper('.js-inst-block-slider-init', {
            slidesPerView: 1.1,
            centeredSlides: true,
            loop: true,
            preventClicks :true,
            shortSwipes: 20,
            spaceBetween: 8,
            breakpoints: {
                480: {
                    slidesPerView: 1.5,
                    spaceBetween: 15,
                    centeredSlides: false,
                    loop: true,
                },
                575: {
                    slidesPerView: 2.1,
                    spaceBetween: 15,
                    centeredSlides: false,
                    loop: true,
                },
                750: {
                    slidesPerView: 2.5,
                    spaceBetween: 15,
                    centeredSlides: false,
                    loop: true,
                    allowTouchMove: true,
                    a11y: true,
                },
                1199: {
                    slidesPerView: 4,
                    spaceBetween: 28,
                    centeredSlides: false,
                    loop: true,
                    allowTouchMove: false,
                    a11y: true,
                }
            },
        });

        var homeCollection = new Swiper('.js-featured-collection-new-slider-init', {
            slidesPerView: 1,
            spaceBetween: 8,
            centeredSlides: true,
            breakpoints: {
                480: {
                    slidesPerView: 1.6,
                    spaceBetween: 15,
                    centeredSlides: true,
                    initialSlide: 1,
                    loop: true,
                },
                575: {
                    slidesPerView: 2,
                    spaceBetween: 15,
                    centeredSlides: true,
                    initialSlide: 1,
                    loop: true,
                },
                990: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                    centeredSlides: false,
                },
                1199: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                    centeredSlides: false,
                }
            },
            navigation: {
                nextEl: ".swiper-featured-collection-new-button-next",
                prevEl: ".swiper-featured-collection-new-button-prev",
            },
        });

        var homeVideos = new Swiper('.js-slideshow-videos-slider-init', {
            slidesPerView: 1,
            spaceBetween: 8,
            centeredSlides: true,
            breakpoints: {
                480: {
                    slidesPerView: 1.5,
                    spaceBetween: 15,
                    centeredSlides: true,
                    initialSlide: 1,
                    loop: true,
                },
                750: {
                    slidesPerView: 2,
                    spaceBetween: 15,
                    initialSlide: 1,
                    centeredSlides: false,
                    allowTouchMove: false,
                    a11y: true,
                },
                1240: {
                    slidesPerView: 4,
                    spaceBetween: 28,
                    centeredSlides: false,
                    allowTouchMove: false,
                    a11y: true,
                }
            },
            navigation: {
                nextEl: ".swiper-slideshow-videos-button-next",
                prevEl: ".swiper-slideshow-videos-button-prev",
            },
        });

        (() => {
            var aboutBanner = new Swiper('.js-about-banner-slider-init', {
                slidesPerView: 1,
                centeredSlides: false,
                loop: false,
                spaceBetween: 15,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                breakpoints: {
                    575: {
                        slidesPerView: 1.5,
                        spaceBetween: 15,
                        centeredSlides: false,
                    },
                    750: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                        centeredSlides: false,
                    },
                    990: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                        centeredSlides: false,
                    }
                },
                navigation: {
                    nextEl: ".swiper-reviews-button-next",
                    prevEl: ".swiper-reviews-button-prev",
                },
            });
        })();


        function Marquee(selector, speed) {
            const parentSelector = document.querySelector(selector);
            if (parentSelector) {
                const clone = parentSelector.innerHTML;
                const firstElement = parentSelector.children[0];
                const iterations = 17;
                let i = 0;

                for (let k = 0; k <= iterations; k++) {
                    parentSelector.insertAdjacentHTML('beforeend', clone);
                }
                function updateMargin() {
                    firstElement.style.marginLeft = `-${i}px`;
                    if (i > firstElement.clientWidth) {
                        i = 0;
                    }
                    i = i + speed;
                }

                setInterval(updateMargin, 0);
            }
        }

        //after window is completed load
        //1 class selector for marquee
        //2 marquee speed 0.2
        Marquee('.marquee', 0.2);
    }

    function checkSwiper() {
        if (window.Swiper && (document.readyState === "complete")) {
            runSwiperHandle();
        } else if (sw_i > 0) {
            sw_i = sw_i - 1;
            setTimeout(checkSwiper, 100);
        }
    }

    checkSwiper();
})();



// document.querySelectorAll('[data-video-wrapper]').forEach(wrapper => {
//     const videoInsta = wrapper.querySelector('video');
//     const videoPlayInsta = wrapper.querySelector('.icon.icon-play');
//     const videoImgInsta = wrapper.querySelector('.slideshow-videos__img');
//     const videoOverlayInsta = wrapper.querySelector('.apply__video-overlay');
//     const videoText = wrapper.querySelector('.slideshow-videos__block-title');

//     if (videoPlayInsta) {
//         videoPlayInsta.addEventListener('click', function() {
//             videoPlayInsta.classList.add('hide');
//             videoOverlayInsta.classList.add('hide');
//             videoImgInsta.classList.add('hide');
//             if (videoText) {
//                 videoText.classList.add('hide');
//             }
//             //videoInsta.setAttribute('controls', 'true')
//             videoInsta.classList.add('show');
//             videoInsta.play();
//         })
//     }
// })





