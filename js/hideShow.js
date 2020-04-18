document.getElementById('menu').style.display = "none";

function showHide(toggle){
    let menu = document.getElementById(toggle);

    if(menu.style.display === "none"){
        menu.style.display = "block";
    }else{
        menu.style.display = "none";
    }

}

function hide(toggle) {

    let menu = document.getElementById(toggle);
    menu.style.display = "none";

}

function show(toggle) {

    let menu = document.getElementById(toggle);
    menu.style.display = "block";

}

