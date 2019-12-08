var ssid = document.getElementById('ssid');
var pass = document.getElementById('password');
var encryption = document.getElementById("encryption");
var qr = document.getElementById('qr-holder')

function networkData(sec,id,pw){
    return 'WIFI:T:'+sec+';S:'+id+';P:'+pw+';;'
}

function createQr(){
    qr.innerHTML = '<img src="https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl='+networkData(encryption.value,ssid.value,pass.value)+'&choe=UTF-8" alt="">'
}

//WIFI:T:WPA;S:mynetwork;P:mypasscode;;