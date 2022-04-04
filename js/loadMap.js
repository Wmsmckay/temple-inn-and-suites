let map = document.querySelector('.mymap');

maplistner = function (e) { 
    let frame = document.createElement ('iframe'); 
    frame.src = this.getAttribute ('data-src'); 
    map.appendChild (frame); 
    map.removeEventListener ("mouseover", maplistner); 
}; 

map.addEventListener ('mouseover', maplistner);

window.addEventListener('load', 
    function(e) {
         setTimeout(function(){
             let map = document.querySelector('.mymap'); 
             let frame = document.createElement ('iframe'); 
             frame.src = map.getAttribute ('data-src'); 
             map.appendChild (frame); 
    }, 1500);
}); 