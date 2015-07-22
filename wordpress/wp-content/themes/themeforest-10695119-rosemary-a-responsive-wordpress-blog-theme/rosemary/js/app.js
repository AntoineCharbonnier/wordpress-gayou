// APPLICATION PART
console.log("aaa")
//  need Jquery loaded
jQuery(document).ready(function($) {
  var App = function(){
    document.getElementById("svg1").addEventListener("load", function() {
      
      this.doc                    = this.getSVGDocument();
      this.stroker                = this.doc.querySelectorAll(".pathToStroke")
      this.bg                     = this.doc.querySelector("#background__svg")
      this.slider                 = document.querySelector(".featured-area")
      console.log("a")
      this.content                = $("#content")
      this.contentPostTitle       = $("article .post-header")
      this.contentImg             = $("#attachment_22")
      this.contentTexts           = $(".post-entry p")
      this.menuLi                 = $(".menu ul li ")
      this.searchInput            = $("#s")
      this.searchInputIconDesktop = $(".search-desktop")
      // this.instaImg = $(".instagram-footer ul ")
      this.insta1 = $("#instagram-footer .instagram-pics li:nth-child(1) img")
      this.insta2 = $("#instagram-footer .instagram-pics li:nth-child(2) img")
      this.insta3 = $("#instagram-footer .instagram-pics li:nth-child(3) img")
      this.insta4 = $("#instagram-footer .instagram-pics li:nth-child(4) img")
      this.insta5 = $("#instagram-footer .instagram-pics li:nth-child(5) img")
      this.insta6 = $("#instagram-footer .instagram-pics li:nth-child(6) img")

      this.instaTitle = $(".instagram-title")
      console.log("b")

      console.log("insta")
      console.log(this.insta1)

      // console.log(this.doc)
      // console.log(this.stroker)
      // console.log(this.bg)
      // console.log(this.slider)
      // console.log(this.content)
      // console.log(this.contentPostTitle)
      // console.log(this.contentImg)
      // console.log(this.contentTexts)
      // console.log(this.menuLi)
      // console.log(this.searchInput)
      // console.log(this.searchInputIconDesktop)


    })
  }

  App.prototype = {
    startShow: function(){
      document.getElementById("svg1").addEventListener("load", function() {
        // only if the page contains the svg logo
        console.log(this.stroker)
        if (this.stroker) {
          console.log("c")
          if(this.contentPostTitle && this.contentImg && this.contentTexts){

            var timelineContent = new TimelineMax({paused: true})
            var timelineContentDelay = 0
            
            timelineContent.to(this.contentPostTitle,1, {autoAlpha: 1, ease: Ease.easeOut}, timelineContentDelay += .5);
            timelineContent.to(this.contentImg,.5, {autoAlpha: 1,x: 0, ease: Ease.easeOut}, timelineContentDelay += .5);
            timelineContent.staggerTo(this.contentTexts, .5, {autoAlpha: 1,y:0, ease: Ease.easeOut}, .2);

            // ////////////////////////
            // SCROLL
            // ////////////////////////

            var body = document.querySelector("body")
            // var html = document.documentElement
            // var height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
            
            body.addEventListener("mousewheel",scrollManager,false)
            body.addEventListener("touchmove",scrollManagerMobile,false)
            function scrollManager(e){
              // e.preventDefault()
              var contentContexted = $("#content")
              var mouseY = e.pageY
              console.log(mouseY)
              if(document.querySelector("body").classList.contains("home")){

                if (mouseY + 200 < contentContexted.offset().top) {
                // if (true) {
                  timelineContent.play()
                }
              }
              else{
                timelineContent.play()
              }
            }
            function scrollManagerMobile(e){
              // e.preventDefault()
              var contentContexted = $("#content")
              var mouseY = e.pageY
              console.log(mouseY,$(this).scrollTop()  )
              if (mouseY + 200 < contentContexted.offset().top) {
                timelineContent.play()
              }
            }
            console.log("d")
            // var body = document.body  
          }

        }
      });
    },


    // ////////////////////////
    // MENU ANIMATION
    // ////////////////////////
    menuShow: function(){
      document.getElementById("svg1").addEventListener("load", function() {
        var t = 0
        console.log("menu");
        var timelineMenu = new TimelineMax({paused : true})
        timelineMenu.to(this.menuLi, .2, {autoAlpha:0, ease: Sine.easeInOut},t+=1.5);
        timelineMenu.staggerTo(this.menuLi, 1.3, {autoAlpha: 1, ease: Ease.easeOut}, 3.5);
        timelineMenu.to(this.searchInput, .2, {autoAlpha: 1, ease: Ease.easeInOut},t+= .4)
        timelineMenu.to(this.searchInputIconDesktop, .2, {autoAlpha: 1, x: 0, ease: Ease.easeInOut},t+= .4)
        timelineMenu.play()
      });
    },


    // ////////////////////////
    // LOGO ANIMATION
    // ////////////////////////
    logoShow: function(){
      document.getElementById("svg1").addEventListener("load", function() {
        console.log("d")
        // only if the page contains the svg logo
        if (this.stroker) {
          var t = 0
          var tm = new TimelineMax({paused: true, onComplete: completion, onCompleteParams:[this.bg]})

          tm.to(this.stroker,1, {autoAlpha: 1, ease: Sine.easeInOut}, t += .5);
          tm.to(this.stroker, 3.9, {strokeDasharray: "1650px, 200px", ease: Sine.easeInOut}, t += .9);
          tm.to(this.bg, 1.9, {autoAlpha:1, ease: Sine.easeInOut}, t += 3);
          tm.to(this.stroker, 3.9, {fill: "#FFFFFF", stroke: "#FFFFFF", ease: Sine.easeInOut}, t += .2);

          // switch degueu selon les pages
          if(document.querySelector("body").classList.contains("home")){
            tm.to(this.slider,1, {autoAlpha: 1,x: 0, ease: Ease.easeOut}, t += .5);
          }
          tm.play()
          // ////////////////////////
          // COMPLETION SVG ANIMATION
          // ////////////////////////          
          function completion(bg){
            var t2 = -1
            var tm2 = new TimelineMax({repeat: -1, yoyo:true, repeatDelay:0})
            console.log("completion")
            tm2.to(bg, 1, {autoAlpha:1,css: {scaleX: 1,scaleY: 1,transformOrigin: "center center"}, ease: Sine.easeInOut},t2+=1 );
            tm2.to(bg, 1, {autoAlpha:0.8,css: {scaleX: 0.95,scaleY: 0.95,transformOrigin: "center center"}, ease: Sine.easeInOut},t2+=1);
            tm2.to(bg, 1, {autoAlpha:1,css: {scaleX: 1,scaleY: 1,transformOrigin: "center center"}, ease: Sine.easeInOut},t2+=1 );
            tm2.play()
          }
          console.log("e")
        }
      })
    },

    instaShow: function(){
      document.getElementById("svg1").addEventListener("load", function() {
        if(this.instaTitle){
          var body = document.querySelector("body")
          var html = document.documentElement
          // var height = Math.min( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
          console.log(body.scrollHeight)
          console.log(body.offsetHeight)
          console.log(html.clientHeight)
          console.log(html.scrollHeight)
          console.log(html.offsetHeight)

          var height = html.scrollHeight - html.clientHeight
          
          console.log("height",height)

          var time = 0
          var timeline = new TimelineMax({paused:true})
          timeline.to(this.insta6,.5, {autoAlpha: 1,x: 0, ease: Sine.easeOut}, time += .9);
          timeline.to(this.insta1,.5, {autoAlpha: 1,x: 0, ease: Sine.easeOut}, time );
          timeline.to(this.insta5,.5, {autoAlpha: 1,x: 0, ease: Sine.easeOut}, time += .9);
          timeline.to(this.insta2,.5, {autoAlpha: 1,x: 0, ease: Sine.easeOut}, time );
          timeline.to(this.instaTitle,.9, {autoAlpha: 1,y: 0, ease: Ease.easeOut}, time);
          timeline.to(this.insta4,.5, {autoAlpha: 1,x: 0, ease: Sine.easeOut}, time += .9);
          timeline.to(this.insta3,.5, {autoAlpha: 1,x: 0, ease: Sine.easeOut}, time );
          
          body.addEventListener("mousewheel",scrollManagerInsta,false)
          body.addEventListener("touchmove",scrollManagerMobileInsta,false)
          function scrollManagerInsta(e){
            // e.preventDefault()
            var contentContexted = $("#content")
            var mouseY = e.pageY
            console.log(mouseY)
            if(document.querySelector("body").classList.contains("home")){

              if (mouseY  > height - 200) {
              // if (true) {
                timeline.play()
                console.log("insta play")
              }
            }
            else{
              timeline.play()
              console.log("insta play")
            }
          }
          function scrollManagerMobileInsta(e){
            // e.preventDefault()
            var contentContexted = $("#content")
            var mouseY = e.pageY
            console.log(mouseY,$(this).scrollTop()  )
            if (mouseY + 200 > height - 300) {
              timeline.play()
            }
          }
        }
      });
    },


    // ////////////////////////
    // INITIALISATION
    // ////////////////////////
    init : function(){
      document.getElementById("svg1").addEventListener("load", function() {

        if(this.searchInput && this.searchInputIconDesktop){
          TweenMax.set([this.searchInput,this.searchInputIconDesktop],{autoAlpha: 0})
          TweenMax.set(this.searchInputIconDesktop,{x : 50})
        }
        if(this.slider){
          TweenMax.set(this.slider,{autoAlpha:0})
          TweenMax.set(this.slider,{x : 1000})
        }
        if(this.contentPostTitle && this.contentImg && this.contentTexts){
          // TweenMax.set([this.contentPostTitle,this.contentImg,this.contentTexts],{autoAlpha:0})
          TweenMax.set(this.contentPostTitle,{autoAlpha:0})
          TweenMax.set(this.contentImg,{autoAlpha:0})
          TweenMax.set(this.contentTexts,{autoAlpha:0})
          TweenMax.set(this.contentImg,{x : -1000})
          TweenMax.set(this.contentTexts,{y : 1000})
        }
        if(this.menuLi){
          TweenMax.set(this.menuLi,{autoAlpha:0})
        }
        console.log("init")
        console.log(this.stroker)
        if(this.stroker && this.bg){
          TweenMax.set([this.stroker,this.bg],{ autoAlpha: 0});
          TweenMax.set(this.stroker, {strokeDasharray: "0px, 200px",stroke: "#000000"});
        }

        if(this.instaTitle){
          TweenMax.set(this.instaTitle,{autoAlpha:0, y: 200})
          TweenMax.set(this.insta1,{autoAlpha:0, x: -200})
          TweenMax.set(this.insta2,{autoAlpha:0, x: -200})
          TweenMax.set(this.insta3,{autoAlpha:0, x: -200})
          TweenMax.set(this.insta4,{autoAlpha:0, x: 200})
          TweenMax.set(this.insta5,{autoAlpha:0, x: 200})
          TweenMax.set(this.insta6,{autoAlpha:0, x: 200})
        }


      })
    }
  }



  // ////////////////////////
  // START
  // //////////////////////// 
  var app = new App()
  app.init()
  app.logoShow()
  app.startShow()
  app.menuShow()
  app.instaShow()

});
