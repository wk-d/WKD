<!DOCTYPE HTML>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script type="text/javascript" src="../jspdf/libs/base64.js"></script>
<script type="text/javascript" src="../jspdf/libs/sprintf.js"></script>
<script type="text/javascript" src="../jspdf/jspdf.js"></script>

<script src="Functions.js"></script>
<script src="Patterntext.js"></script>
<script src="Measurements.js"></script>
<script src="EachPattern.js"></script>
<script src="Pants.js"></script>
<script src="PantsFancy.js"></script>
<script src="Bodice.js"></script>
<script src="BodiceW.js"></script>
<script src="ShirtW.js"></script>
<script src="BodiceW2.js"></script>
<script src="BodiceWPrincess.js"></script>
<script src="BodiceWPrincess2.js"></script>
<script src="BodiceBackWomen.js"></script>
<script src="BodiceBackMen.js"></script>
<script src="SleeveShirtW.js"></script>
<script src="Sleeve.js"></script>
<script src="Skirt.js"></script>
<script>
var ret;
var chosenpat;

function pms(pattern){
var pa=pattern[0].slice(); /*pma will be the maximum x and y value */
var pi=pattern[0].slice(); /*pmi will be the minimum x and y value */
for ( i=0;i<=pattern.length-1; ++i ){
	pa[0]=Math.max(pa[0],pattern[i][0]);
	pa[1]=Math.max(pa[1],pattern[i][1]);
	pi[0]=Math.min(pi[0],pattern[i][0]);
	pi[1]=Math.min(pi[1],pattern[i][1]);
}
return [pi,pa];
}

function openHW3() {
w=window.open('HW3.php');
w.ret=ret;
}
</script>
      <style type="text/css" media="all">
		@import "style.css";
	</style>
      <style>
            #svgContainer {
            }
        </style>
        

</head>
<body onload="scale = 96./2.54;
stringline = pickpattern(chosenpat,scale);
alert(stringline);
ret=drawpattern(stringline,scale);" >

<input type="submit" onclick="openHW3();" value="Prepare for printing"/>
<p>these are your pattern pieces. To save and print them (on A4 or US letter), please click 'Prepare for printing' and print the resulting page. Please make sure that the scale factor is 100%</p>
<div id="svgContainer"></div>
	

</body>
</html>
