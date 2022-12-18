function switch2PrimaryIndexer(){
    // set display:none for all children of mainContent 
    var mainContent = document.getElementById("mainContent");
    var children = mainContent.children;
    for (var i = 0; i < children.length; i++) {
        children[i].style.display = "none";
    }
    // set display to '' for primaryIndexer
    document.getElementById("primaryIndexer").style.display = "";

}

function switch2precesionIndexer(){
    // set display:none for all children of mainContent 
    var mainContent = document.getElementById("mainContent");
    var children = mainContent.children;
    for (var i = 0; i < children.length; i++) {
        children[i].style.display = "none";
    }
    // set display to '' for primaryIndexer
    document.getElementById("precisionIndexer").style.display = "";

}

function switch2yanhuashu(){
    // set display:none for all children of mainContent 
    var mainContent = document.getElementById("mainContent");
    var children = mainContent.children;
    for (var i = 0; i < children.length; i++) {
        children[i].style.display = "none";
    }
    // set display to '' for primaryIndexer
    document.getElementById("yanhuashu").style.display = "";

}