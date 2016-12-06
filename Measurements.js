function emptytable(){
measurementtable=document.getElementById("Measurementtable")
  while(measurementtable.hasChildNodes())
{
   measurementtable.removeChild(measurementtable.firstChild);
}
}


function newmeasurementtableitem(texti, item, defaultvalue, description){
/*
newmeasurementsitem creates an entry in the measurement table in PickPattern.php 
newmeasurementtableitem('name to be displayed', "variable name", "default value");
*/
measurementtable=document.getElementById("Measurementtable")
newitem = document.createElement("tr");
newitem.setAttribute("id",item);
newitem.setAttribute("style","display:none;");
measurementtable.appendChild(newitem);  
newitemtext = document.createElement("td");
newitem.appendChild(newitemtext)
newitemtext.innerHTML=texti;
newitemtext.setAttribute("title",description);
newitemitem = document.createElement("td");
newitem.appendChild(newitemitem)
newitemitem.setAttribute("title",description);
newiteminput = document.createElement("input");
newitemitem.appendChild(newiteminput)
newiteminput.setAttribute("name",item);
newiteminput.setAttribute("type","text");
newiteminput.setAttribute("size","4");
newiteminput.setAttribute("maxlength","10");
newiteminput.setAttribute("value",defaultvalue);
newiteminput.setAttribute("onClick","this.select()");
newiteminput.setAttribute("id","MeasurementSize");
newitemitem = document.createElement("td");
newitem.appendChild(newitemitem)
newitemitem.innerHTML=" cm";
};

function showmeasurements(){
/*used in PickPattern.php to display measurements table*/
    var form = document.getElementById('Measures');
    form.style.display = 'block';
    var form = document.getElementById('ProceedM');
    form.style.display = 'block';

};
function displaym(x){
/*display measurement item*/
measurementitem=document.getElementById(x);
measurementitem.setAttribute("style","display:table-row;");}

function hidem(x){
/*hide measurement item*/
measurementitem=document.getElementById(x);
measurementitem.setAttribute("style","display:none;");}


/*load measurements from a file*/
function loadmeasurements(file){
$(document).ready(function(){
    $.get(file,function(data){processData(data);
    },"text");
});}

function processData(allText) {
    var allTextLines = allText.split(/\r\n|\n/);
    var headers = allTextLines[0].split(',');
    var lines = [];
    emptytable();
    for (var i=1; i<allTextLines.length; i++) {
        var data = allTextLines[i].split(',');
        
       newmeasurementtableitem(data[0],data[1],data[2],data[3]);
    }}

/* load relevant measurements for each pattern type from a file*/
function loadmeasurementstoshow(file){
$(document).ready(function(){
    $.get(file,function(data){processDataToshow(data);
    },"text");
});}

function loadmeasurementshideall(file){
$(document).ready(function(){
    $.get(file,function(data){processDataHideAll(data);
    },"text");
});}

function processDataHideAll(allText) {
    var allTextLines = allText.split(/\r\n|\n/);
    var headers = allTextLines[0].split(',');
    var lines = [];

    for (var i=1; i<allTextLines.length-1; i++) {
        var data = allTextLines[i].split(',');
        hidem(data[1]);
    }
}


function processDataToshow(allText) {
    var allTextLines = allText.split(/\r\n|\n/);
    var headers = allTextLines[0].split(',');
    var lines = [];

    for (var i=1; i<allTextLines.length; i++) {
        var data = allTextLines[i].split(',');
        if (data[0] == chosenpat)
        {x=data;x.shift();x.map(displaym);break;}
    }
}


function measurements(m){
/* create m as a list of all Measurement values */
/*!!Change to Loop over Measurements*/
m = {
WaisttoFloor : Number(document.Formular.WaisttoFloor.value),
Thigh : Number(document.Formular.Thigh.value),
Inseam : Number(document.Formular.Inseam.value),
Waist : Number(document.Formular.Waist.value),
Hips : Number(document.Formular.Hips.value),
WaisttoHips : Number(document.Formular.WaisttoHips.value),
WaisttoKnee : Number(document.Formular.WaisttoKnee.value),
CenterFronttoWaist : Number(document.Formular.CenterFronttoWaist.value),
NeckWidth : Number(document.Formular.NeckWidth.value),
SideFronttoWaist : Number(document.Formular.SideFronttoWaist.value),
ShoulderWidth : Number(document.Formular.ShoulderWidth.value),
CenterFrontWaisttoShoulder : Number(document.Formular.CenterFrontWaisttoShoulder.value),
ArmpittoWaist : Number(document.Formular.ArmpittoWaist.value),
Chest : Number(document.Formular.Chest.value),
Palm : Number(document.Formular.Palm.value),
Wrist : Number(document.Formular.Wrist.value),
Biceps : Number(document.Formular.Biceps.value),
Armlength : Number(document.Formular.Armlength.value),
SleeveCap : Number(document.Formular.SleeveCap.value),
FullBust : Number(document.Formular.FullBust.value),
UpperChest : Number(document.Formular.UpperChest.value),
FrontBust : Number(document.Formular.FrontBust.value),
BackBust : Number(document.Formular.BackBust.value),
BusttoBust : Number(document.Formular.BusttoBust.value),
BusttoShoulder : Number(document.Formular.BusttoShoulder.value),
SideFronttoBust : Number(document.Formular.SideFronttoBust.value),
CenterBackWaisttoShoulder : Number(document.Formular.CenterBackWaisttoShoulder.value),
CenterBack : Number(document.Formular.CenterBack.value),
SideBack : Number(document.Formular.SideBack.value)};
return m;
}
