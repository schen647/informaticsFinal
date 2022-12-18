function activateLoading() {
    var loading = document.getElementById("loading");
    loading.style.display = "";
}

function deactivateLoading() {
    var loading = document.getElementById("loading");
    setTimeout(()=>{loading.style.display = "none"},300);
}