const controller = new ScrollMagic.Controller();

// 
// EYES ANIMATION
// 
const eyes = [$('.left .eyelid'), $('.right .eyelid')];

// Initial animation: Start eyes closed, slow open
TweenMax.from(eyes, 1, {
    top: "55px"
});
TweenMax.to(eyes, 1, {
    top: "0",
    delay: 2
});

// Subsequent loop: Blink every 4 seconds
let timeline = new TimelineMax({
    repeat: -1,
    repeatDelay: 4,
    delay: 5
});

timeline.from(eyes, 0.1, { top: "0" });
timeline.to  (eyes, 0.1, { top: "55px" });
timeline.to  (eyes, 0.1, { top: "0" });

// 
// CARD ANIMATION (TEXT AND PHONE)
// 
let fadeInSlideIn = new TweenMax.to('#phone', 1.5, {
    transform: 'translate(-200px, 0)',
    opacity: '1'
});

new ScrollMagic.Scene({
    triggerElement: "#phone",
    reverse: false
})
.setTween(fadeInSlideIn)
.addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#phone-anchor"
})
.setPin('#phone')
.addTo(controller);
