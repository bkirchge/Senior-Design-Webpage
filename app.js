
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
  

    // collection of functions for updating stuff on the actuall web page
    var uiBoxStatusModal = {}; // object for holding functions relating to the box status modal

    uiBoxStatusModal.deviceInfoButtons = function(){
      var buttonHtml = "<li class=\"list-group-item\"><button type=\"button\" class=\"btn btn-primary btn-lg btn-block\">BOX PLACE HOLDER $N$</button></li>";
      var boxList = $('[name="active_box_list"]'); // list a list of boxes
      // make a list of dummy boxes, for now
      var mockList = Hologram.makeDeviceDummyList(4);
      for(var i=0;i<mockList.length;i++){
        boxList.append(buttonHtml.replace("$N$",i+""));
      }
    }

    uiBoxStatusModal.updateActiveDeviceList = function(){
      $('[name="boxlist_update_button"]').click(function(){
        console.log("sent a reqest for updating current");
        
      });
    }

    // super important
    // this is a Jquery event that files when the entire box is loaded
    $(document).ready(function(){
      console.log("page ready");
      console.log("checking for valid api key");
      //placeTestPins();
      // connect to the hologram api
      //var hologramService = new Hologram("XXXnothing");
      var holoKey = "7W0zCvqPkKvI6A2E7X6oXVvvsRNGJ";
      Hologram.setApiKey(holoKey);
      // Attach UI control events to the bootstrap page
      uiBoxStatusModal.deviceInfoButtons();
      uiBoxStatusModal.updateActiveDeviceList();
    });

})(Window);


// class for hologram calls
// usefull links:
// https://hologram.io/docs/reference/cloud/http/
// 
// https://github.com/jlongster/canvas-game-bootstrap/blob/master/js/sprite.js
// also has the class for the Bat box


(function(){
//  function Hologram(hologramAPI){
//    this.apiKey = hologramAPI;
//  }

  // Javascript class for related functions
  function Box(boxID,bLat,bLng) {
    this.boxID = boxID;
    this.dummyMode = false;
    this.location = {lat: bLat , lng: bLng};
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

  var Hologram = {}; // object for hologram functions

  Hologram.setApiKey = function(hologramAPI){
    this.apiKey = hologramAPI;
  }


  Hologram.getActiveDevies = function(){
    activeBoxes = []; // make an array of itmes with 'Box' type
    return activeBoxes;
  }

  Hologram.isApiKeySet = function(){
    var isSet = false;
    if(this.apiKey){
      isSet = true;
    }
    return isSet;
  }

  // return a list of dummy boxes
  Hologram.makeDeviceDummyList = function(nDevices){
    //var nDevices = 10;
    var dummyList = [];
    for(var i=0;i<nDevices;i++){
      var dbox = new Box(i,0,0); // right now just 0,0
      dbox.dummyMode = true;
      dummyList.push(dbox);
    }
   
    return dummyList;
  }

  window.Hologram = Hologram;
})();

