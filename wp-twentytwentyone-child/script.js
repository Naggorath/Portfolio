console.log("Twentytwentyone Theme JS is running!");

document.addEventListener("DOMContentLoaded", function () {
    //fade effect
    //-----------------------------------
    jQuery(document).ready(function($) {
        $(document).ready(function() {
            $('body').hide().fadeIn(500);
            $("a").not('#scrollTop, #arkiv').click(function(e) {            
                    e.preventDefault();
                    $link = $(this).attr("href");
                    $("body").fadeOut(500,function(){
                      window.location =  $link; 
                    });
            });
         });
    });
    //-----------------------------------
    console.log("The DOM is ready!");
    initScrollToTop();
    

    let button = document.querySelector("#arkiv");

    button.addEventListener("click", function () {
        console.log("Button clicked");
        alert("Siden er under opbygning");
    });

   
});

// ---------- smooth scroll ---------- //

function initScrollToTop() {
    document.querySelector("body").innerHTML += /*html*/`
        <a id="scrollTop" onclick="scrollToTheTop()" title="Go to top">^</a>
    `;
    window.onscroll = function () {
        scrollFunction();
    };
}

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById("scrollTop").style.display = "block";
    } else {
        document.getElementById("scrollTop").style.display = "none";
    }
}

function scrollToTheTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
