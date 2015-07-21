$(function() {
  var stroker = $(".pathToStroke");
  var bg = $("#background__svg");
  var h1 = $(".title");

  TweenMax.set([h1,stroker,bg],{strokeDasharray: "0px, 200px", autoAlpha: 0});
  TweenMax.set(h1,{y: 600});
  t = 0
  tm = new TimelineMax({paused: true, onComplete: completion})

  tm.to(stroker,1, {autoAlpha: 1, ease: Sine.easeInOut}, t += .5);
  tm.to(stroker, 3.9, {strokeDasharray: "1650px, 200px", ease: Sine.easeInOut}, t += .9);
  tm.to(bg, 1.9, {autoAlpha:1, ease: Sine.easeInOut}, t += 3);
  tm.to(stroker, 3.9, {fill: "#FFFFFF", ease: Sine.easeInOut}, t += .2);
  tm.to(h1, .9, {autoAlpha: 1, y: 0, ease: Back.easeOut}, t += .1);

  tm.play()


  function completion(){
    t2 = -1
    tm2 = new TimelineMax({repeat: -1, yoyo:true, repeatDelay:0})

    tm2.to(bg, 1, {autoAlpha:1,css: {scaleX: 1,scaleY: 1,transformOrigin: "center center"}, ease: Sine.easeInOut},t2+=1 );
    tm2.to(bg, 1, {autoAlpha:0.8,css: {scaleX: 0.95,scaleY: 0.95,transformOrigin: "center center"}, ease: Sine.easeInOut},t2+=1);
    tm2.to(bg, 1, {autoAlpha:1,css: {scaleX: 1,scaleY: 1,transformOrigin: "center center"}, ease: Sine.easeInOut},t2+=1 );
    // tm2.to(bg, 1, {autoAlpha:1,scale: 1, ease: Sine.easeInOut},t2+=1 );
    tm2.play()
  }

});
