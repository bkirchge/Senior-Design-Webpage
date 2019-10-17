
// https://embed.plnkr.co/plunk/ZDkUYz


// function needed for loading google maps
function initMap() {
    var map;
    var home = {lat: 39.581 , lng: -104.916};
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        center: home,
        zoom: 16
    });

    var marker = new google.maps.Marker({map: map, position: home,title:"ass eating capital of america"});
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
  
    function placeTestPins(){
      debugger;
    }
  

    $(document).ready(function(){
      console.log("page ready");
      console.log("checking for valid api key");
      placeTestPins();
    });

})(Window);

// class for a BAT box
// this is just gonna be down here for now, but in the future
(function () {
  function Box(boxID) {
    this.boxID = boxID;
    this.dummyMode = false;
    this.location = {lat: 0 , lng: 0};
  }

  // return a dictionary for x and y
  Box.prototype.getLocation = function(){
    
  }

  // return a dictionary for peak current, battery life
  Box.prototype.getStatus = function(){
    if(this.dummyMode == true){
     
    }
  }

  // update the box from hologram
  Box.prototype.update = function(){

  }

  // turn a blank box object into a dummy box
  Box.prototype.makeDummy = function(testPos,testCurrent){
    this.dummyMode = true;
    this.location = testPos;
    this.peakLoadCurrent = testCurrent;
  }
  
  window.Box = Box;

})();

// class for hologram calls
// https://github.com/jlongster/canvas-game-bootstrap/blob/master/js/sprite.js
(function(){
  function Hologram(){

  }
})();

