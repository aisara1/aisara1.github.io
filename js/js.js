gsap.registerPlugin("ScrollTrigger", "ScrollSmoother");

if(ScrollTrigger.isTouch !== 1) {
    ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.content',
        smooth: 1.5,
        effects: true,
        
      })

      gsap.fromTo('.hero-sectionM', {opacity: 1}, {
        opacity: 0,
        scrollTrigger: {
            trigger: 'hero-sectionM',
            start: 'center',
            end: '820',
            scrub: true
        }
    })

    let itemsL = gsap.utils.toArray('.gallery__leftM .gallery__itemM')

   itemsL.forEach(item => {
    gsap.fromTo(item, {x: -90, opacity: 0}, {
        opacity: 1, x: 0,
        scrollTrigger: {
            trigger: item,
            start: '-850',
            end: '-100',
            scrub: true
        }
    })
   })

   
   let itemsR = gsap.utils.toArray('.gallery__rightM .gallery__itemM')

   itemsR.forEach(item => {
    gsap.fromTo(item, {x: 90, opacity: 0}, {
        opacity: 1, x: 0,
        scrollTrigger: {
            trigger: item,
            start: '-850',
            end: '-100',
            scrub: true
        }
    })
   })
}