const controller = new ScrollMagic.Controller();

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
