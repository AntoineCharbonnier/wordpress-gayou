// APPLICATION PART

//  need Jquery loaded
jQuery(document).ready(function($) {
  var App = function(){
    document.getElementById("svg1").addEventListener("load", function() {
      
      this.doc              = this.getSVGDocument();
      this.stroker          = this.doc.querySelectorAll(".pathToStroke")
      this.bg               = this.doc.querySelector("#background__svg")
      this.slider           = document.querySelector(".featured-area")
      this.content          = $("#content")
      this.contentPostTitle = $(".post-header")
      this.contentImg       = $("#attachment_22")
      this.contentTexts     = $(".post-entry p")
    })
  }

  App.prototype = {
    startShow: function(){

      document.getElementById("svg1").addEventListener("load", function() {
        
        // only if the page contains the svg logo
        if (this.stroker) {

          TweenMax.set([this.stroker,this.bg,this.slider,this.contentPostTitle,this.contentImg,this.contentTexts],{ autoAlpha: 0});
          TweenMax.set(this.stroker, {strokeDasharray: "0px, 200px",stroke: "#000000"});
          TweenMax.set(this.slider,{x : 1000})
          TweenMax.set(this.contentImg,{x : -1000})
          TweenMax.set(this.contentTexts,{y : 1000})

          // console.log("svg load", this.stroker)

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

          console.log(this.content.offset().top)

          var timelineContent = new TimelineMax({paused: true})
          var timelineContentDelay = 0
          
          timelineContent.to(this.contentPostTitle,1, {autoAlpha: 1, ease: Ease.easeOut}, timelineContentDelay += .5);
          timelineContent.to(this.contentImg,1, {autoAlpha: 1,x: 0, ease: Ease.easeOut}, timelineContentDelay += .5);
          timelineContent.staggerTo(this.contentTexts, 1.3, {autoAlpha: 1,y:0, ease: Ease.easeOut}, .1);


          // var body = $("body")
          var body = document.querySelector("body")
          body.addEventListener("mousewheel",scrollManager,false)
          body.addEventListener("touchmove",scrollManagerMobile)


          function scrollManager(e){
            // e.preventDefault()
            var contentContexted = $("#content")
            var mouseY = e.pageY
            console.log(mouseY)
            if (mouseY + 200 < contentContexted.offset().top) {
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

          // after svg animation, start loop logo animation
          function completion(bg){
            var t2 = -1
            var tm2 = new TimelineMax({repeat: -1, yoyo:true, repeatDelay:0})
            console.log("completion", bg)
            tm2.to(bg, 1, {autoAlpha:1,css: {scaleX: 1,scaleY: 1,transformOrigin: "center center"}, ease: Sine.easeInOut},t2+=1 );
            tm2.to(bg, 1, {autoAlpha:0.8,css: {scaleX: 0.95,scaleY: 0.95,transformOrigin: "center center"}, ease: Sine.easeInOut},t2+=1);
            tm2.to(bg, 1, {autoAlpha:1,css: {scaleX: 1,scaleY: 1,transformOrigin: "center center"}, ease: Sine.easeInOut},t2+=1 );
            tm2.play()
          }
        }
       


      });
      
    }
  }


  var app = new App()
  app.startShow()


});
