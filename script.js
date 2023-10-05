
var scrollInterval;

var navMenuTags=document.querySelectorAll('.nav-menu a');
console.log(navMenuTags);

for(var i=0; i<navMenuTags.length;i++){
    navMenuTags[i].addEventListener('click',function(event){
         event.preventDefault();
         var targetSectionId=this.textContent.trim().toLowerCase();
         console.log(targetSectionId);

         var targetSection=document.getElementById(targetSectionId);
        
         scrollInterval=setInterval( function(){
             scrollvertically(targetSection);
         },20);

    });
}

function scrollvetically(targetSection){
            var targetSectionCordinates=targetSection.getBoundingClientRect();
            if(targetSectionCordinates.top<=0){
                clearInterval(scrollInterval);
                return;
            }
            window.scrollBy(0,50);
  }


