<!DOCTYPE HTML>
	<html>
<head>
<script type="text/javascript" src="../jspdf/libs/base64.js"></script>
<script type="text/javascript" src="../jspdf/libs/sprintf.js"></script>
<script type="text/javascript" src="../jspdf/jspdf.js"></script>

<script src="Functions.js"></script>
<script src="Measurements.js"></script>
<script src="EachPattern.js"></script>
<script src="Pants.js"></script>
<script src="PantsFancy.js"></script>
<script src="PantsMen.js"></script>
<script src="Bodice.js"></script>
<script src="BodiceW.js"></script>
<script src="Sleeve.js"></script>
<script scrc="FileSaver.js"></script>
<script>
function drawonpaper(mySvg,geodim){
var container = document.getElementById("svgContainer");
container.appendChild(mySvg);

var corig = mySvg.querySelector('#corig');
var el = mySvg.querySelector('#el');
var myDefs = mySvg.querySelector('#myDefs');
mySvg.setAttribute("width",geodim.a4x+"cm");
mySvg.setAttribute("height",geodim.a4y*geodim.partsx*geodim.partsy+"cm"); 
var myCP;
var myPath;
var myCircle;
var myRect;
var myText;
for (j=0;j<geodim.partsy;j++){

for (i=0; i<geodim.partsx; i++){

		var s = document.createElementNS("http://www.w3.org/2000/svg", "svg");
		s.setAttribute("id","s"+i+"-"+j);
		s.setAttribute("xmlns","http://www.w3.org/2000/svg");
		s.setAttribute("xmlns:xlink","http://www.w3.org/1999/xlink");
		s.setAttribute("version","1.2");
        	s.setAttribute("width",(geodim.a4x+1.5)+"cm");
		s.setAttribute("height",(geodim.a4y+1.5)+"cm");
		container.appendChild(s);
		 

		var d =document.getElementById("myDefs").cloneNode("true");		
		d.setAttribute("id","d"+i+"-"+j);
		s.appendChild(d);
		 		
		var c=document.getElementById("corig").cloneNode("true");
		c.setAttribute("id","c"+i+"-"+j);
		s.appendChild(c);
				
/*	}
}
for (i=0; i<geodim.partsx; i++){
	for (j=0;j<geodim.partsy;j++){
    	sid="s"+i+"-"+j;
		
		alert(sid);s=getElementById(sid);	
d=getElementById("d"+i+"-"+j);		
		
*/		/*visible window per page*/
		myCP = document.createElementNS("http://www.w3.org/2000/svg", "clipPath");
		myCP.setAttribute("id", "clip"+i+"-"+j);
		d.appendChild(myCP);
		myPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
		myPath.setAttribute("d", "M "+i*geodim.a4x*geodim.scale+" "+(((j+1)*geodim.scale*geodim.a4y))+
		" l "+geodim.a4x*geodim.scale+" 0 l 0 "+-geodim.a4y*geodim.scale+" l "+-geodim.a4x*geodim.scale+" 0");
		myCP.appendChild(myPath);
		/* circle marks in NW corner for joining pages together */
		myCircle= document.createElementNS("http://www.w3.org/2000/svg", "circle");
		myCircle.setAttribute("id", "circA"+i+"-"+j);
	    	myCircle.setAttribute("cx", 0);
    		myCircle.setAttribute("cy", 0);
		myCircle.setAttribute("r", "10");
		myCircle.setAttribute("stroke", "#AA99FF");
		myCircle.setAttribute("stroke-width", "1");
		myCircle.setAttribute("fill", "#AA99FF");	
		s.appendChild(myCircle);
				
		/* dashed line around page window */
		myRect= document.createElementNS("http://www.w3.org/2000/svg", "rect");
		myRect.setAttribute("id", "rectA"+i+"-"+j);
	    	myRect.setAttribute("x", 0);
    		myRect.setAttribute("y", 0);
		myRect.setAttribute("width", geodim.a4x*geodim.scale);
		myRect.setAttribute("height", geodim.a4y*geodim.scale);
		myRect.setAttribute("stroke", "#AA99FF");
		myRect.setAttribute("fill", "none");
		myRect.setAttribute("stroke-width", "1");
		myRect.setAttribute("stroke-dasharray", "5,5");
		s.appendChild(myRect);
		
		/* dashed line around page window including overlap */
		myRect2= document.createElementNS("http://www.w3.org/2000/svg", "rect");
		myRect2.setAttribute("id", "rect2A"+i+"-"+j);
	    	myRect2.setAttribute("x", 0);
    		myRect2.setAttribute("y", 0);
		myRect2.setAttribute("width", (geodim.a4x+1.5)*geodim.scale);
		myRect2.setAttribute("height", (geodim.a4y+1.5)*geodim.scale);
		myRect2.setAttribute("stroke", "#AA99FF");
		myRect2.setAttribute("fill", "none");
		myRect2.setAttribute("stroke-width", "1");
		myRect2.setAttribute("stroke-dasharray", "5,5");
		s.appendChild(myRect2);

		/*glue marker*/
		myGlue= document.createElementNS("http://www.w3.org/2000/svg", "text");
		myGlue.setAttribute("id", "glue"+i+"-"+j);
	    	myGlue.setAttribute("x",(geodim.a4x+0.75)*geodim.scale);
    		myGlue.setAttribute("y", (geodim.a4y/3)*geodim.scale);
		myGlue.setAttribute("fill", "#d5ccff");
		myGlue.setAttribute("font-family", "Verdana");
		myGlue.setAttribute("font-size", "20");
		myGlue.setAttribute("transform","rotate(270 "+((geodim.a4x+0.75)*geodim.scale)+","+(geodim.a4y/3)*geodim.scale+")");		
		myGlue.appendChild(document.createTextNode("glue"));
		s.appendChild(myGlue);

		myGlue= document.createElementNS("http://www.w3.org/2000/svg", "text");
		myGlue.setAttribute("id", "2glue"+i+"-"+j);
	    	myGlue.setAttribute("x",(geodim.a4x+0.75)*geodim.scale);
    		myGlue.setAttribute("y", (2*geodim.a4y/3)*geodim.scale);
		myGlue.setAttribute("fill", "#d5ccff");
		myGlue.setAttribute("font-family", "Verdana");
		myGlue.setAttribute("font-size", "20");
		myGlue.setAttribute("transform","rotate(270 "+((geodim.a4x+0.75)*geodim.scale)+","+(2*geodim.a4y/3)*geodim.scale+")");		
		myGlue.appendChild(document.createTextNode("glue"));
		s.appendChild(myGlue);
		
		myGlue= document.createElementNS("http://www.w3.org/2000/svg", "text");
		myGlue.setAttribute("id", "3glue"+i+"-"+j);
	    	myGlue.setAttribute("x",(geodim.a4x*0.25)*geodim.scale);
    		myGlue.setAttribute("y", (geodim.a4y+1)*geodim.scale);
		myGlue.setAttribute("fill", "#d5ccff");
		myGlue.setAttribute("font-family", "Verdana");
		myGlue.setAttribute("font-size", "20");
		myGlue.appendChild(document.createTextNode("glue"));
		s.appendChild(myGlue);

		myGlue= document.createElementNS("http://www.w3.org/2000/svg", "text");
		myGlue.setAttribute("id", "4glue"+i+"-"+j);
	    	myGlue.setAttribute("x",(geodim.a4x*0.75)*geodim.scale);
    		myGlue.setAttribute("y", (geodim.a4y+1)*geodim.scale);
		myGlue.setAttribute("fill", "#d5ccff");
		myGlue.setAttribute("font-family", "Verdana");
		myGlue.setAttribute("font-size", "20");
		
		myGlue.appendChild(document.createTextNode("glue"));
		s.appendChild(myGlue);
		/* page identifier on center of page */   
	   	myText= document.createElementNS("http://www.w3.org/2000/svg", "text");
		myText.setAttribute("id", "text"+i+"-"+j);
	    	myText.setAttribute("x", (1+0.01)*geodim.a4x*geodim.scale);
    		myText.setAttribute("y", (0.02)*geodim.a4y*geodim.scale);
		myText.setAttribute("font-family", "Verdana");
		myText.setAttribute("font-size", "12");
		myText.setAttribute("fill", "#d5ccff");
        	myText.appendChild(document.createTextNode("(x"+(i+1)+",y"+(j+1)+")"));
		s.appendChild(myText);
  		/* circle marks in NE corner for joining pages together */
		myCircleA= document.createElementNS("http://www.w3.org/2000/svg", "circle");
		myCircleA.setAttribute("id", "circB"+i+"-"+j);
	    	myCircleA.setAttribute("cx", (1)*geodim.a4x*geodim.scale);
    		myCircleA.setAttribute("cy", 0);
		myCircleA.setAttribute("r", "10");
		myCircleA.setAttribute("stroke", "#AA99FF");
		myCircleA.setAttribute("stroke-width", "1");
		myCircleA.setAttribute("fill", "#AA99FF");	
		s.appendChild(myCircleA);
		/* circle marks in SW corner for joining pages together */
		myCircleB= document.createElementNS("http://www.w3.org/2000/svg", "circle");
		myCircleB.setAttribute("id", "circC"+i+"-"+j);
	    	myCircleB.setAttribute("cx", 0);
    		myCircleB.setAttribute("cy", (1)*geodim.a4y*geodim.scale);
		myCircleB.setAttribute("r", "10");
		myCircleB.setAttribute("stroke", "#AA99FF");
		myCircleB.setAttribute("stroke-width", "1");
		myCircleB.setAttribute("fill", "#AA99FF");	
		s.appendChild(myCircleB);
		/* circle marks in SE corner for joining pages together */
		myCircleC= document.createElementNS("http://www.w3.org/2000/svg", "circle");
		myCircleC.setAttribute("id", "circD"+i+"-"+j);
	    	myCircleC.setAttribute("cx", (1)*geodim.a4x*geodim.scale);
    		myCircleC.setAttribute("cy", (1)*geodim.a4y*geodim.scale);
		myCircleC.setAttribute("r", "10");
		myCircleC.setAttribute("stroke", "#AA99FF");
		myCircleC.setAttribute("stroke-width", "1");
		myCircleC.setAttribute("fill", "#AA99FF");	
		s.appendChild(myCircleC);
/*	}
}        
for (i=0; i<geodim.partsx; i++){
	for (j=0;j<geodim.partsy;j++){*/
	    /*draw window outlines*/
	    /*cn=myText;*/	        
	   /* cn.setAttribute("clip-path","url(#clip"+0+"-"+0+")");*/
		/*draw circles*/	    
	    /*cn=translpic("circA",i,j,0,0,geodim);*/   
	    cn=myCircle;
	    cn.setAttribute("clip-path","url(#clip"+0+"-"+0+")");	    
	    cn=myCircleA;
	    cn.setAttribute("clip-path","url(#clip"+0+"-"+0+")");	    
	    cn=myCircleB;
	    cn.setAttribute("clip-path","url(#clip"+0+"-"+0+")");	    
	    cn=myCircleC;
	    cn.setAttribute("clip-path","url(#clip"+0+"-"+0+")");	    
		/*draw path in window*/ 
	    cn=translpic("c",i,j,i,j,geodim);	
	    cn.setAttribute("clip-path","url(#clip"+i+"-"+j+")");
	/*pb=document.createElement("br");
	pb.setAttribute("class","pageBreak");
	container.appendChild(pb);	*/	
	}
}

/*mySvg.removeChild(el);
mySvg.removeChild(corig);*/
mySvg=container.removeChild(mySvg);
mySvg.SvgCode=container.innerHTML;

}
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
<body >

	    <div id="svgContainer0" >
<input id = "Printbutton" type="submit" onclick="drawonpaper(ret.mySvg,ret.geodim);" value="Print"/>
</div>
<div id="svgContainer" />
</body>
</html>
