const bgpath = {
    values: [
        {x:0, y:-800}
    ]
}

const tween = new TimelineLite();

tween.add(
    TweenLite.to('.background', 2, {
        bezier: bgpath,
        ease: Power1.easeInOut
    })
);

