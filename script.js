//locomotive js- smooth scrolling
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

//gsap to animate
gsap.from(".nlink",{
    stagger:.1,
    y:10,
    duration:1,
    ease:Power2,
    opacity:0
})

Shery.textAnimate("#heading h1" , {
    style: 1,
    y: 10,
    delay: 0.1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });
//shery js to animate images according

