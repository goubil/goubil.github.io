//remember to add an ID of "mainmenu" to the nav ul
var urlString = document.location.href;
var urlArray = urlString.split('/');
var pageHREF = urlArray[urlArray.length - 1];

if (pageHREF !== "") {
    var menu = document.querySelectorAll('ul#hideorshow li a');
    var i;
    //loop through all the menu items in the navigation
    for (i = 0; i < menu.length; i++) {
        var currentURL = (menu[i].getAttribute("href"));
        menu[i].parentNode.className=""; //turn off hilighting by default
        if (currentURL === pageHREF) {
            menu[i].parentNode.className = "active"; //turn on if a match
        } // end if
    } // end of the search for a match
} // end of if !==
logoclose
DEALSEARNINGS
CURRENT EARNINGS
$0.63
Earnings that are paid out weekly based on your payment method.
PENDING EARNINGS
$-0.63
Pending earning are locked anywhere from 15 to 90 days depending on the retailer.
ALL TIME EARNINGS
$0.00
This is everything you've ever earned from Giving Assistant.
https://givingassistant.orghttps://givingassistant.org
https://givingassistant.orghttps://givingassistant.org