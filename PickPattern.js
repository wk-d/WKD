var chosenpat;
var sizefile;

function choosepattern(){
  var x = document.getElementById('patterntable').selectedIndex;
  chosenpat = document.getElementById('patterntable').options[x].text;
  selectmeasurementstoshow(chosenpat,sizefile);
  showmeasurements();
  changeBild(chosenpat);
}

function changeBild(chosenpat){
switch (chosenpat){
case "Bodice Women":
document.getElementById("Bild").src="http://wendykressdesign.com/wp/wp-content/uploads/2016/09/BodiceWomen.png";
break;
case "Pants Women":
document.getElementById("Bild").src="http://wendykressdesign.com/wp/wp-content/uploads/2016/09/PantsWomen.png";
break;
case "Pants Men":
document.getElementById("Bild").src="http://wendykressdesign.com/wp/wp-content/uploads/2016/09/PantsWomen.png";
break;
case "Skirt1B":
document.getElementById("Bild").src="http://wendykressdesign.com/wp/wp-content/uploads/2016/09/Skirt1B.png";
break;
case "Skirt1C":
document.getElementById("Bild").src="http://wendykressdesign.com/wp/wp-content/uploads/2016/09/Skirt1C.png";
break;
case "Skirt1A":
document.getElementById("Bild").src="http://wendykressdesign.com/wp/wp-content/uploads/2016/09/Skirt1A.png";
break;
case "Skirt":
document.getElementById("Bild").src="http://wendykressdesign.com/wp/wp-content/uploads/2016/09/Skirt.png";
break;

default:
document.getElementById("Bild").src=document.Pattern.pattern.options[x].value;
}}

/*load patterns from a file*/
function loadpatterns(file){
$(document).ready(function(){
    $.get(file,function(data){processData(data);
    },"text");
});}

function processPatterns(allText) {
    var allTextLines = allText.split(/\r\n|\n/);
    var headers = allTextLines[0].split(',');
    var lines = [];
    emptytable();
    for (var i=1; i<allTextLines.length; i++) {
        var data = allTextLines[i].split(',');

       newpatterntableitem(data[0],data[1]);
    }}

function newpatterntableitem(pattern, description){
    /*
    newpattern creates an entry in the pattern table in PickPattern
    newpatterntableitem('name to be displayed', "description");
    */
    var patterntable=document.getElementById("pattern")
    newitem = document.createElement("option");
    newitem.innerHTML=pattern;
    patterntable.appendChild(newitem);
    };
