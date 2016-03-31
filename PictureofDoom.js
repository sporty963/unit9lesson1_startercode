$(document).ready(function(){
    console.log("herrow")

    $("button").click(function(){
        console.log("herrow")
         for (i = 0; i <= 100; i++) {
             $("#mkay").prepend("<img id='theImg' src='http://cdn.playbuzz.com/cdn/d717ed0f-a98e-4bd4-8930-f53735a68b15/104d81a2-d953-405d-8349-18b839e1878a.jpg'>");
    
         }
    });
})