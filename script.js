var crsr = document.querySelector("#cursor")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x -10 +"px"
    crsr.style.top = dets.y  -10 +"px"
    blur.style.left = dets.x -40 +"px"
    blur.style.top = dets.y  -40 +"px"
})

var blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){

})


gsap.to("#nav",{
    backgroundColor: "#000",
    height: "90px",
    duration: 0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller: "body",
        start:"top -10%",
        end: "top -11%",
        scrub: 1
    }
})

gsap.to("#main",{
    backgroundColor : "rgba(0, 0, 0,0.7)",
    scrollTrigger:{
        trigger:"#main",
        scroller: "body",
        strat: "top -25%",
        end: "top -70%",
        scrub: 3
    }
})