jQuery(document).ready(function($) {

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
		// console.log("here");
		// // TweenMax.set($("#svg1"),{autoAlpha:0});

		// var stroker = $("#svg1 .pathToStroke");
	 //  var bg = $("#svg1 #background__svg");

	 //  console.log(stroker)

	 //  // TweenMax.set([stroker,bg],{strokeDasharray: "0px, 200px", autoAlpha: 0});
	 //  TweenMax.set($("#svg1#Calque_2"),{autoAlpha: 0});
		
		// stroker.hide();

	});
	document.getElementById("svg1").addEventListener("load", function() {
    var doc = this.getSVGDocument();
    // var rect = doc.querySelector("rect"); // suppose our image contains a <rect>
    // rect.setAttribute("fill", "green");
    var stroker = doc.querySelectorAll(".pathToStroke")
    var bg = doc.querySelector("#background__svg")
	  TweenMax.set([stroker,bg],{strokeDasharray: "0px, 200px", autoAlpha: 0});
	  TweenMax.set(stroker, {stroke: "#000000"});

    console.log("svg load", stroker)

	  var t = 0
	  var tm = new TimelineMax({paused: true, onComplete: completion})

	  tm.to(stroker,1, {autoAlpha: 1, ease: Sine.easeInOut}, t += .5);
	  tm.to(stroker, 3.9, {strokeDasharray: "1650px, 200px", ease: Sine.easeInOut}, t += .9);
	  tm.to(bg, 1.9, {autoAlpha:1, ease: Sine.easeInOut}, t += 3);
	  tm.to(stroker, 3.9, {fill: "#FFFFFF", stroke: "#FFFFFF", ease: Sine.easeInOut}, t += .2);

	  tm.play()


	  function completion(){
	    var t2 = -1
	    var tm2 = new TimelineMax({repeat: -1, yoyo:true, repeatDelay:0})

	    tm2.to(bg, 1, {autoAlpha:1,css: {scaleX: 1,scaleY: 1,transformOrigin: "center center"}, ease: Sine.easeInOut},t2+=1 );
	    tm2.to(bg, 1, {autoAlpha:0.8,css: {scaleX: 0.95,scaleY: 0.95,transformOrigin: "center center"}, ease: Sine.easeInOut},t2+=1);
	    tm2.to(bg, 1, {autoAlpha:1,css: {scaleX: 1,scaleY: 1,transformOrigin: "center center"}, ease: Sine.easeInOut},t2+=1 );
	    // tm2.to(bg, 1, {autoAlpha:1,scale: 1, ease: Sine.easeInOut},t2+=1 );
	    tm2.play()
	  }


	});
});