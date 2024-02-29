(function () {
    "use strict";

    const HERO_SLIDER_SELECTORS = {
        self: ".heroslider",
        component: ".cmp-heroslider",
        viewfinder: ".cmp-heroslider__viewfinder",
        images: ".--images",
        imageItem: ".cmp-heroslider__image-item",
        image: ".cmp-heroslider__image",
        links: ".--links",
        linkItem: ".cmp-heroslider__link-item",
        linkTitle: ".cmp-heroslider__link-title",
        active: ".--active",
    };

    const ACTIVE_CLASS = "--active";
    const CSS_TRANSITION_TEXT = "-webkit-transition: -webkit-transform .6s ease-in-out; transition: -webkit-transform .6s ease-in-out; transition: transform .6s ease-in-out; transition: transform .6s ease-in-out,-webkit-transform .6s ease-in-out;"

    function HeroSlider(config) {
        function init(config) {
            let heroSliderEle = config.element;
            let heroSliderCmp = heroSliderEle.querySelector(HERO_SLIDER_SELECTORS.component);
            let viewfinder = heroSliderCmp.querySelector(HERO_SLIDER_SELECTORS.viewfinder);
            let images = viewfinder.querySelector(HERO_SLIDER_SELECTORS.images);
            let links = viewfinder.querySelector(HERO_SLIDER_SELECTORS.links);
            let activeLinkItem = "";

            let linkItems = links.querySelectorAll(HERO_SLIDER_SELECTORS.linkItem);
            linkItems.forEach(function (item) {
                if (item.classList.contains(ACTIVE_CLASS)) {
                    activeLinkItem = item;
                }

                let linkTitle = item.querySelector(HERO_SLIDER_SELECTORS.linkTitle);
                linkTitle.addEventListener("click", function () {
                    goToSlide(this, activeLinkItem, images);
                });
            });
        }

        function goToSlide(clickedLinkTitle, activeLinkItem, imageList) {
            //get the index of the clicked item:

            let targetedIndex = parseInt(clickedLinkTitle.parentElement.dataset.index);
            let currentIndex = parseInt(activeLinkItem.dataset.index);

            //Only do something if th index is different from current
            if(targetedIndex !== currentIndex) {
                imageList.style.transform = `translate(${-100 * targetedIndex}%)`;
            } else {
                imageList.removeAttribute("style");
            }
        }

        if (config && config.element) {
            init(config);
        }
    }

    function onDocumentReady() {
        let heroSliderElements = document.querySelectorAll(HERO_SLIDER_SELECTORS.self);
        if (heroSliderElements.length > 0) {
            for (const HERO_SLIDER_ELEMENT of heroSliderElements) {
                new HeroSlider({element: HERO_SLIDER_ELEMENT});
            }
        }
    }

    if (document.readyState !== "loading") {
        onDocumentReady();
    } else {
        document.addEventListener("DOMContentLoaded", onDocumentReady);
    }
}());
