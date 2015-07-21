jQuery(document).ready(function($) {
	// scroll to top for dont make issue with scroll trigger / manager
	$("html, body").animate({ scrollTop: 0 }, "slow");
  "use strict";
  
  // Mobile search
  $('#top-search i.search-toggle').on('click', function ( e ) {
    e.preventDefault();
      $('.show-search').slideToggle('fast');
    });
  
  // BXslider
  $('.featured-area .bxslider').bxSlider({
    pager: false,
    auto: true,
    pause: 6000,
    onSliderLoad: function(){
      $("#sideslides").css("visibility", "visible");
      }
  });
  $('.post-img .bxslider').bxSlider({
    adaptiveHeight: true,
    mode: 'fade',
    pager: false,
    captions: true
  });
  
  // Menu
  $('#nav-wrapper .menu').slicknav({
    prependTo:'.menu-mobile',
    label:'',
    allowParentLinks: true
  });
  
  // Fitvids
  $(document).ready(function(){
    // Target your .container, .wrapper, .post, etc.
    $(".container").fitVids();

  });
  
  $(window).load(function () {
    // when window is loaded
  });

  // when svg is loaded
  document.getElementById("svg1").addEventListener("load", function() {
		var doc     = this.getSVGDocument();
		var stroker = doc.querySelectorAll(".pathToStroke")
		var bg      = doc.querySelector("#background__svg")
		var slider  = document.querySelector(".featured-area")
		
		var content = $("#content")
		var contentPostTitle = $(".post-header")
		var contentImg = $("#attachment_22")

		var contentTexts = $(".post-entry p")
    
    // only if the page contains the svg logo
    if (stroker) {

      TweenMax.set([stroker,bg,slider,contentPostTitle,contentImg,contentTexts],{ autoAlpha: 0});
      TweenMax.set(stroker, {strokeDasharray: "0px, 200px",stroke: "#000000"});
      TweenMax.set(slider,{x : 1000})
      TweenMax.set(contentImg,{x : -1000})
      TweenMax.set(contentTexts,{y : 1000})

      console.log("svg load", stroker)

      var t = 0
      var tm = new TimelineMax({paused: true, onComplete: completion})

      tm.to(stroker,1, {autoAlpha: 1, ease: Sine.easeInOut}, t += .5);
      tm.to(stroker, 3.9, {strokeDasharray: "1650px, 200px", ease: Sine.easeInOut}, t += .9);
      tm.to(bg, 1.9, {autoAlpha:1, ease: Sine.easeInOut}, t += 3);
      tm.to(stroker, 3.9, {fill: "#FFFFFF", stroke: "#FFFFFF", ease: Sine.easeInOut}, t += .2);


      // switch degueu selon les pages
      if(document.querySelector("body").classList.contains("home")){
        tm.to(slider,1, {autoAlpha: 1,x: 0, ease: Ease.easeOut}, t += .5);
      }



      tm.play()

			console.log(content.offset().top)

			var timelineContent = new TimelineMax({paused: true})
			var timelineContentDelay = 0
			
			timelineContent.to(contentPostTitle,1, {autoAlpha: 1, ease: Ease.easeOut}, timelineContentDelay += .5);
			timelineContent.to(contentImg,1, {autoAlpha: 1,x: 0, ease: Ease.easeOut}, timelineContentDelay += .5);

			timelineContent.staggerTo(contentTexts, 1.3, {autoAlpha: 1,y:0, ease: Ease.easeOut}, .1);


			var body = $("body")
			body.on("mousewheel",function(e){
				var mouseY = e.pageY
				console.log(mouseY)
				if (mouseY + 200 < content.offset().top) {
					timelineContent.play()
				}
			})

      // after svg animation, start loop logo animation
      function completion(){
        var t2 = -1
        var tm2 = new TimelineMax({repeat: -1, yoyo:true, repeatDelay:0})
        tm2.to(bg, 1, {autoAlpha:1,css: {scaleX: 1,scaleY: 1,transformOrigin: "center center"}, ease: Sine.easeInOut},t2+=1 );
        tm2.to(bg, 1, {autoAlpha:0.8,css: {scaleX: 0.95,scaleY: 0.95,transformOrigin: "center center"}, ease: Sine.easeInOut},t2+=1);
        tm2.to(bg, 1, {autoAlpha:1,css: {scaleX: 1,scaleY: 1,transformOrigin: "center center"}, ease: Sine.easeInOut},t2+=1 );
        tm2.play()
      }
    }
	 


  });
});

