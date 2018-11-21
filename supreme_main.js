$.extend($.expr[":"], {
    "containsNC": function(elem, i, match, array) {
        return (elem.textContent || elem.innerText || "").toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
    }
});

if(window.location.href.indexOf(pageTarget) > -1) {
    var textding="";
    var i = 0;


// Update the count down every 1 second
    var x = setInterval(function() {

        // Get todays date and time
        var now = new Date().getTime();

        // Find the distance between now an the count down date
        var distance = goTime - now;
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            
            setTimeout(clickTime, 10);
        }
    }, 500);


    function clickTime(){
        //met color
        if(itemcolor != "none"){
            textding = $(".inner-article:containsNC(" + itemname + "):containsNC(" + itemname2 + "):containsNC(" + itemcolor + ")").find("a").attr("href");
        }else{
            textding = $(".inner-article:containsNC(" + itemname + ")").find("a").attr("href");
        }

        textding = "http://www.supremenewyork.com"+textding;

        if(textding !== "http://www.supremenewyork.comundefined")
        {window.open(textding);}
        else{
            while (i < 10) {
                setTimeout(refresh, 500);
                i++;
            }
        }
    }

    function refresh(){
        window.location.replace('https://www.supremenewyork.com/shop/all/shoes');
        //pageDestination
    }
}

console.log("shop/" + pageTarget.substring(9));
if(window.location.href.indexOf("shop/" + pageTarget.substring(9)) > -1) {
    function selectSize(){
        if(kledingmaat == "Small"){
            if ((document.querySelector("#size").textContent || document.querySelector("#size").innerText).indexOf('Small') > -1) {
                $("#size option:contains('Small')").prop('selected', true);
            }else{
                $("#size option:contains('Medium')").prop('selected', true);
            }
        }else{
            $("#size option:contains(kledingmaat)").prop('selected', true);
        }

        $('input[name=commit]').click();

        if(checkout == "yes") {
            setTimeout(toCheckout, 100);
        }
    }

    function toCheckout(){

        var lengte = "AA";
        var prijs = "";
        prijs = $("#subtotal").text();
        if(prijs.length >= lengte.length){
            window.open("https://www.supremenewyork.com/checkout");
        }else{
            window.location.replace(window.location.href);
            console.log("asdas");
            selectSize();
        }
    }

    setTimeout(selectSize, 100);
}

console.log("gebeurt niks, error");

