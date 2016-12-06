<!DOCTYPE HTML>
<html>
<head>
<script type="text/javascript" src="EachPattern.js"></script>
<script type="text/javascript" src="Functions.js"></script>
<script type="text/javascript" src="Measurements.js"></script>
<script type="text/javascript" src="HW.js"></script>
</head>
<style type="text/css" media="all">
		@import "style.css";
	</style>
	<body>

    


<h1>Patternmaker</h1>
 <div id="Pattern">
 <h2>Pattern</h2>  
  <form name="Pattern"> 
<p>please pick a pattern from the drop down menu and then click ok</p> 
<p> 
	<label>
		<select name = "pattern">
			<option> Bodice Women</option>
			<!--<option> Shirt Women</option>-->
			<option> Pants Women</option>
			<!--<option> Fancy Pants Women</option>-->
			<option> Bodice Men</option>
			<option> Pants Men</option>
			<option> Skirt</option>
		</select>
	</label>
</p>
</form>
</div>
<div id = "ProceedP">  
<input type="button" value="ok"
onclick="x = document.Pattern.pattern.selectedIndex; chosenpat = document.Pattern.pattern.options[x].text; newmeasurements();
selectmeasurementstoshow(chosenpat);showmeasurements();"/>
</div> 
<div id="Measures" style="display:none;">
<h2 href="#">Measurements</h2>
<p>
please enter your measurements (in centimeters) and then click ok.
</p><form name="Formular" >
<table  id="Measurementtable" border="0" >

 </table> 
  </form>
</div>
<p> 
<div id = "ProceedM" style = "display:none;">  
<input type="button" value="ok" 
  onclick="m=measurements();openHW2();" /> 
</div>  
</p> 

</body>
</html>
