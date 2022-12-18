function refreshprecisionIndexerResult(data){
    deactivateLoading();
    var finalResult='';
    const userSearch = document.getElementById('precisionIndexerSearchBarText').value.toUpperCase();
    // split result.sequence into 3 parts using userSearch as the delimiter
    document.getElementById('precisionIndexerCount').innerHTML = data.length;
    document.getElementById('precisionIndexerSeq').innerHTML = userSearch;
    for (var result of data){
        console.log('parser running')
        var splittedSeq = result.Sequence.split(userSearch);
        var annotation = result.annotations;
        var hnaive_feeder_A_50_1 = result['hnaive-feeder_A-50-1'];
        var hnaive_feeder_TA_50_1 = result['hnaive-feeder_TA-50-1'];
        var hnaive_feeder_con_50_1 = result['hnaive-feeder_con-50-1'];
        var htmlString = `<div class="singleResult"
        style="position:relative;width: 98%;height:20%;background: #ffffff42;margin:1%;/* opacity:0.5; */">
        <div class="sgrheading" style="font-size: 9vh;color:white;">
            ${splittedSeq[0]}
            <span style="color:black;background:white;padding-left: 0.5vw;padding-right: 0.6vw;mix-blend-mode:screen;">${userSearch}</span>
            ${splittedSeq[1]}
                
        </div>
    
        <div class="annotations"
            style="position:absolute;height:20%;width:20%;top: 56%;left: 1%;background: #0000001f;font-size: 3.6vh;">
            <div
                style="position:absolute;height: 98%;width: 0.1%;top:1%;left: -3%;background:white;">
            </div>
            <div
                style="position:absolute;height: 98%;width: 1%;top: 1%;left: -2%;background:white;">
            </div>Annotations
            <div style="position:absolute;text-align:right;width:100%;top: 98%;">${annotation}
            </div>
        </div>
        <div class="reads"
            style="position:absolute;height:20%;width:20%;top: 56%;left: 23%;background: #0000001f;font-size: 3.6vh;">
            <div
                style="position:absolute;height: 98%;width: 0.1%;top:1%;left: -3%;background:white;">
            </div>
            <div
                style="position:absolute;height: 98%;width: 1%;top: 1%;left: -2%;background:white;">
            </div>hnaive-feeder_A-50-1
            <div style="position:absolute;text-align:right;width:100%;top: 98%;">${hnaive_feeder_A_50_1}</div>
        </div>
        <div class="reads"
            style="position:absolute;height:20%;width:20%;top: 56%;left: 45%;background: #0000001f;font-size: 3.6vh;">
            <div
                style="position:absolute;height: 98%;width: 0.1%;top:1%;left: -3%;background:white;">
            </div>
            <div
                style="position:absolute;height: 98%;width: 1%;top: 1%;left: -2%;background:white;">
            </div>hnaive-feeder_TA-50-1
            <div style="position:absolute;text-align:right;width:100%;top: 98%;">${hnaive_feeder_TA_50_1}</div>
        </div>
        <div class="reads"
            style="position:absolute;height:20%;width:20%;top: 56%;left: 67%;background: #0000001f;font-size: 3.6vh;">
            <div
                style="position:absolute;height: 98%;width: 0.1%;top:1%;left: -3%;background:white;">
            </div>
            <div
                style="position:absolute;height: 98%;width: 1%;top: 1%;left: -2%;background:white;">
            </div>hnaive-feeder_con-50-1
            <div style="position:absolute;text-align:right;width:100%;top: 98%;">${hnaive_feeder_con_50_1}</div>
        </div>
        </div>`
        finalResult += htmlString;
    }
    document.getElementById("precisionIndexerEntries").innerHTML = finalResult;

}



function precisionIndexerSearch(){
    activateLoading();
    const value = document.getElementById('precisionIndexerSearchBarText').value;
    network.tx({action:'indexBySeqExact', parameters:{seq:value}});
    //console.log(indexBySeqExact)
}

