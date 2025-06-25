const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});

gsap.from(".nlink", {
  stagger: 0.1,
  y: 10,
  duration: 1,
  ease: "power2.out",
  opacity: 0
});

Shery.textAnimate("#heading h1", {
  style: 1,
  y: 10,
  delay: 0.1,
  duration: 1,
  ease: "cubic-bezier(0.23, 1, 0.32, 1)",
  multiplier: 0.1
});

gsap.from(".anim2", {
  stagger: 0.3,
  y: 50,
  duration: 1,
  ease: "expo.out",
  opacity: 0
});

Shery.mouseFollower({
  skew: true,
  ease: "cubic-bezier(0.23, 1, 0.32, 1)",
  duration: 0.5
});

Shery.imageEffect("#imgntext img", {
  style: 3,
  config: {
    uFrequencyX: { value: 12 },
    uFrequencyY: { value: 6.11 },
    uFrequencyZ: { value: 31.3 },
    displaceAmount: 0.5,
    durationIn: 1.5,
    durationOut: 1,
    growSize: 4,
    onMouse: 1,
    gooey: false
  }
});

Shery.imageEffect(".imgeff img", {
  style: 5,
  config: {
    a: { value: 0.92 },
    b: { value: 0.75 },
    displaceAmount: 0.5,
    durationIn: 1.5,
    durationOut: 1,
    growSize: 4,
    onMouse: 1,
    gooey: false
  }
});

gsap.from("#imgntext img", {
  z: -3,
  opacity: 0,
  duration: 2,
  ease: "expo.inOut"
});

Shery.imageEffect("#bimg", {
  style: 5,
  config: {
    a: { value: 2 },
    b: { value: -0.98 },
    displaceAmount: 0.5,
    durationIn: 1.5,
    durationOut: 1,
    growSize: 4,
    onMouse: 1,
    gooey: true
  }
});

document.querySelector("#future button")?.addEventListener("mouseover", function () {
  gsap.to("#future video", {
    opacity: 1,
    duration: 1,
    ease: "power4.out"
  });
});

document.querySelector("#future button")?.addEventListener("mouseleave", function () {
  gsap.to("#future video", {
    opacity: 0,
    duration: 1,
    ease: "power4.out"
  });
});
