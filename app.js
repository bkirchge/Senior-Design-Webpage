
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


    //debugger;



    $(document).ready(function(){
      console.log("page ready");
    });

})(Window);
