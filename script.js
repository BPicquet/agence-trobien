gsap.to(".form__line", {
    scrollTrigger: ".form__line",
    duration: 1.5, 
    height: 200
});

gsap.to(".svg-sauving", {
    scrollTrigger: ".svg-sauving",
    duration: 1.5, 
    width: 500
});

gsap.to(".svg-light", {
    scrollTrigger: ".svg-light",
    duration: 1.5, 
    width: 500
});

gsap.to(".arms-sauving", {
    scrollTrigger: {
        trigger: ".svg-sauving",
        scrub: true,
        start: "top 20%", // when the top of the trigger hits the 10% top of the viewport
        end: "+=1500", // end after scrolling 700px beyond the start
      },
    y: window.innerHeight,
});


        


gsap.to(".cls-5-light-1", {
    scrollTrigger: {
      trigger: ".cls-5-light-1",
      toggleActions: "restart pause reverse pause",
      scrub: true,
      end: "+=1500"
    }, 
    duration: 10,
    startAt: {y: 500, fill="red"},
    ease: "none"
  });

//   gsap.to(".cls-5-light-2", {
//     scrollTrigger: {
//       trigger: ".cls-5-light-2",
//       toggleActions: "restart pause reverse pause",
//       scrub: true,
//       end: "+=1500"
//     }, 
//     duration: 10,
//     onScroll: document.querySelector(".cls-5-light-2").style.fill="red",
//     ease: "none"
//   });

//   gsap.to(".cls-5-light-3", {
//     scrollTrigger: {
//       trigger: ".cls-5-light-3",
//       toggleActions: "restart pause reverse pause",
//       scrub: true,
//       end: "+=1500"
//     }, 
//     duration: 10,
//     onStart: document.querySelector(".cls-5-light-3").style.fill="red",
//     ease: "none"
//   });

   

