<?php 
session_start();
/*if (isset($_SESSION['username'])){
$username = $_SESSION['username'];
echo "Hai " . $username . "
";
echo "This is the Members Area
";}
else{
echo "This is the no Members Area
";}*/
?>
<!DOCTYPE HTML>
<html>

<head>
    <title>Wendy Kress Design - Print your own slopers</title>

<script src="Measurements.js"></script>
<script src="EachPattern.js"></script>
<script src="Functions.js"></script>
<!--<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>-->
<script src="jquery-1.10.2.js"></script>
</head>

<style type="text/css" media="all">
	@import "style.css";
</style>

<body>
    <title id="title">Wendy Kress Design - Pattern Maker</title>
<script type="text/javascript">
	window.onload = function() {
    		var div = document.getElementById('Measures');
    		var h2 = div.getElementsByTagName('h2')[0];
    		var form = div.getElementsByTagName('form')[0];
    		h2.onclick = function() {
    			var table = form.getElementsByTagName('table')[0];
    			table.style.display = table.style.display == 'none' ? 'block' : 'none';
    		}	
    	};
</script>

<h1>Wendy Kress Design - Pattern Maker  <?php echo $username?></h1>

<div id="WhatsThis">

<h2>What is this?</h2>  
<p>it's a tool to create sewing patterns in your size to print out.</p> 

<h2>What do I need to make patterns?</h2>  
<p>you need a webbrowser, a printer, some scissors and glue.</p> 

<h2>What kind of patterns can I print?</h2>  
<p>you can print basic patterns for tops, pants and skirts. These basic patterns are the first step, when designing clothing. Once you have printed out the basic pattern, you can use them to construct all kinds of clothing that you want to sew, by changing necklines, hemlines, adding seams and adding allowances for a looser fit and seam allowances.</p> 

</div>

<div id="Pattern">

<h2>Pick a pattern</h2>  

<form name="Pattern"> 

<p><label><select name = "pattern" onchange="x = document.Pattern.pattern.selectedIndex; chosenpat = document.Pattern.pattern.options[x].text;
selectmeasurementstoshow(chosenpat);showmeasurements();">
<option>...</option>
<option> Bodice Women</option>
<!--<option> Shirt Women</option>-->
<option> Pants Women</option>
<option> Skirt</option>
<option> Skirt1A</option>
<option> Skirt1B</option>
<option> Skirt1C</option>
<option> Skirt2G</option>
<!--<option> Fancy Pants Women</option>-->
<option> Bodice Men</option>
<option> Pants Men</option>
</select></label></p>

</form>

</div>

<div id="Measures" style="display:none;">

<h2 href="#">Enter your measurements</h2>
<p>When you point the mouse at a measurement, a description will appear.</p>

<form name="Formular" >
<table  id="Measurementtable" border="0" >
</table> 
</form>

</div>



<div id = "ProceedM" style = "display:none;">  
<button onclick="m=measurements();sessionStorage.setItem('m', JSON.stringify(m));sessionStorage.chosenpat=chosenpat;window.open('Pattern.html','_self')">done</button> 
</div>  



<div id="footer">
<a href="Impressum.html">Impressum</a> 
</div>

</body>

<script>
loadmeasurements("MeasurementDefaults.csv");

function selectmeasurementstoshow(chosenpat){
        loadmeasurementshideall("MeasurementDefaults.csv");

	loadmeasurementstoshow("PatternNecessaryMeasurement.csv");
	}
</script>
</html>
