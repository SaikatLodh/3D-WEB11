function locomotive(){
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });
    
    
    
    
    
    
    
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}
locomotive();
function navBar(){
    gsap.to(".svg svg", {
        transform: "translateY(-100%)",
        scrollTrigger: {
          trigger: ".page1",
          scroller: ".main",
          start: "top 0",
          end: "top 0%",
          scrub: 1,
        },
      });
    
    
      gsap.to(".eliments h6", {
        transform: "translateY(-100%)",
        opacity:0,
        scrollTrigger: {
          trigger: ".page1",
          scroller: ".main",
          start: "top 0",
          end: "top 0%",
          scrub: 1,
          
        },
      });
}

navBar();


function textAnimation(){
    gsap.from(".page1-text h2",{
        y:100,
        delay:0.4,
        opacity:0,
        stagger:3,
        duration:0.9
        
        })
        
        
        
        gsap.from(".page1-text1 h2",{
            y:100,
            delay:0.8,
            opacity:0,
            stagger:3,
            duration:0.9
            
            })


            gsap.from(".page1-video video",{
                y:200,
                delay:1,
                opacity:0,
                stagger:3,
                duration:1
                
                })
}

textAnimation();

function enterMouse(){
    var curser = document.querySelector(".curser")

    var main = document.querySelector(".main")
    
    var enter = document.querySelector(".page-3main")

 
    
    main.addEventListener("mousemove",function(dets){
        curser.style.left= dets.x+"px";
        curser.style.top= dets.y+"px";
    });
    
    enter.addEventListener("mouseenter",function(){
        curser.style.opacity=1;
        curser.style.scale=1;
    });
    
    enter.addEventListener("mouseleave",function(){
        curser.style.opacity=0;
        curser.style.scale=0;
    });
    
}

enterMouse();

function enterMouse2(){
    var play = document.querySelector(".play")

    var curserMove  = document.querySelector(".main")
    
    var video = document.querySelector(".page1-video video")
    
    curserMove.addEventListener("mousemove",function(dets){
        play.style.left = dets.x+"px";
        play.style.top = dets.y+"px"
    });
    
    video.addEventListener("mouseenter",function(){
        play.style.opacity= 1;
        play.style.scale= 1;
    });
    
    video.addEventListener("mouseleave",function(){
        play.style.opacity= 0;
        play.style.scale= 0;
    })
}


enterMouse2();

var show = document.querySelector("#one")

var down = document.querySelector(".show-and-hide")

var hide = document.querySelector("#two")


show.addEventListener("click",function(){
  gsap.to(".show-and-hide",{
    top:"0%",
    duration:1,
    ease: "power4.out",
  })

  down.style.display = "block"
 

})


hide.addEventListener("click",function(){
  gsap.to(".show-and-hide",{
    top:"-100%",
    duration:1,
    ease: "power4.out",
  })
 
})








