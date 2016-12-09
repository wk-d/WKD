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
