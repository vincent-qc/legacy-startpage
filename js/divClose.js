window.onload = function(){
    var hideMe = document.getElementById('menu');
    document.onclick = function(e){
       if(e.target.id !== 'menu' && e.target.id !== 'menuButton'){
          hideMe.style.display = 'none';
      }
    };
 };