const controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
    triggerElement: "#phone-anchor"
})
.setPin('#phone')
.addIndicators()
.addTo(controller);
