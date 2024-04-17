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
});

Shery.textAnimate("#heading h1" , {
    style: 1,
    y: 10,
    delay: 0.1,
    duration: 1,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });

gsap.from(".anim2", {
    stagger:.3,
    y:50,
    duration:1,
    ease:Expo,
    opacity:0
});

Shery.mouseFollower({
  skew: true,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: .5,
});

Shery.imageEffect("#imgntext img",{
    style: 4,
    debug: true
});
//shery js to animate images according

