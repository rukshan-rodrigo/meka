const smileString = 'lorem ipsum test text very long hello';
let truncatedString = '';

let i = 0;

while (i < smileString.length) {
    truncatedString = smileString.substring(0, i+1);
    console.log(truncatedString);
    $('#curveText textPath').text(truncatedString);
    i = i+1;

    setTimeout(function() {
    }, 1000);
}

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
// TEXT ANIMATION
//
const $numberOfScreens = $('.screen');

for (let i = 0; i < $numberOfScreens.length; i++) {
    const screenNumber = i + 2; // First screen is #screen-2
    let fadeInSlideInText = new TweenMax.to(`#screen-${screenNumber} .l-container`, 1.5, {
        transform: 'translate(200px, 0)',
        opacity: '1'
    });

    new ScrollMagic.Scene({
        triggerElement: `#screen-${screenNumber}`,
        reverse: false
    })
    .setTween(fadeInSlideInText)
    .addTo(controller);
}

//
// PHONE ANIMATION
//
let fadeInSlideIn = new TweenMax.to('#phone', 1.5, {
    delay: 0.2,
    transform: 'translate(-200px, 0)',
    opacity: '1'
});

new ScrollMagic.Scene({
    triggerElement: "#screen-2",
    reverse: false
})
.setTween(fadeInSlideIn)
.addTo(controller);

//
// PHONE PIN
//
new ScrollMagic.Scene({
    triggerElement: "#phone-anchor"
})
.setPin('#phone')
.addTo(controller);
