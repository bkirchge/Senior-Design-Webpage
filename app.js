
// https://embed.plnkr.co/plunk/ZDkUYz


// function needed for loading google maps
function initMap() {
    var map;
    var home = {lat: 39.581 , lng: -104.916};
    map = new google.maps.Map(document.getElementById('map'), {
        //center: {lat: -34.397, lng: 150.644},
        center: home,
        zoom: 16
    });

    //var marker = new google.maps.Marker({map: map, position: home,title:"ass eating capital of america"});
    Window.google_map = map;
}


(function(w){


    // helper function for cookies from W3 schools
    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
    
    // cookies are needed for reading the API key from the customer
    // this function checks for the needed cookie and returns true if that cookie exists
    function hasKey(){
        var validKey = false;
        var key = getCookie("apikey");
        if(key != ""){
            validkey = true;
        }
        return validkey;
    }
    
    $(document).ready(function(){
      console.log("page ready");
      console.log("checking for valid api key");
      if(hasKey(){ // check for the api key
         var apicode = getCookie("apikey");
         // TODO: add the API key to the div tag in the index page
      }
    });

})(Window);
