
import debounce from "../debounce.js"

export default function () {
    "use strict";
    let mainOfferDiv = document.querySelector(".body .mainOffer")
    let scrollDotsDiv = document.querySelector(".body .offerTopDiv .slider")

    let totalMainOffersCount = mainOfferDiv.childElementCount

    //Create dots
    for(let i = 0; i<totalMainOffersCount; i++){
        let dot = document.createElement("div")
        dot.classList.add("dot")
        scrollDotsDiv.appendChild(dot)
    }
    scrollDotsDiv.firstElementChild.classList.add("active")

    //Main offer Scroll
    mainOfferDiv.addEventListener("scroll", debounce(mainOfferScroll, 100, false))
    mainOfferDiv.addEventListener("touchmove", debounce(mainOfferScroll, 100, false))

    function mainOfferScroll(){
        let scrollWidth = mainOfferDiv.scrollLeft
        let oneWidth = mainOfferDiv.offsetWidth
        let dotNumber = scrollWidth / oneWidth || 0
        dotNumber = Math.round(dotNumber)
        activeDot(dotNumber)
    }

    function activeDot(n){
        let count = totalMainOffersCount
        
        for(let i = 0; i < count; i++)
            scrollDotsDiv.children[i].classList.remove("active")
        scrollDotsDiv.children[n].classList.add("active")
    }
}