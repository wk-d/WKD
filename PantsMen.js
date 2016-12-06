function calculatepantsfrontmen(m){
	var pants=[
	[0,0],
	[0,+m.WaisttoFloor],
	[10,0],
	[-10,0],
	[.25*m.Thigh,+m.Inseam],
	[-.25*m.Thigh,+m.Inseam], 
	[0.125*m.Waist,+m.WaisttoFloor], 
	[-0.125*m.Waist,+m.WaisttoFloor], 
	[-0.125*m.Waist + 0.25*m.Hips,+m.WaisttoFloor - m.WaisttoHips], 
	[-0.125*m.Waist, +m.Inseam + 5],
	[0,+m.WaisttoFloor - m.WaisttoKnee], 
	[0,+m.WaisttoFloor - m.WaisttoKnee]
	];
	pants[5][0] = Math.min(pants[5][0], pants[9][0] - 5);
	pants[4][0] = Math.max(pants[4][0], pants[8][0]);
	return pants;
}
function calculatepantsfrontwomen(m){
	var pants=[
	[0,0],
	[0,+m.WaisttoFloor],
	[10+2,0],
	[-10,0],
	[2+.25*m.Thigh+.5*.125*(m.Hips-m.Waist),+m.Inseam],
	[-.25*m.Thigh,+m.Inseam], 
	[2+0.125*m.Waist,+m.WaisttoFloor], 
	[-0.125*m.Waist,+m.WaisttoFloor], 
	[-0.125*m.Waist + 0.25*m.Hips,+m.WaisttoFloor - m.WaisttoHips], 
	[-0.125*m.Waist, +m.Inseam + 5],
	[0,+m.WaisttoFloor - m.WaisttoKnee], 
	[0,+m.WaisttoFloor - m.WaisttoKnee]
	];
	pants[5][0] = Math.min(pants[5][0], pants[9][0] - 4.5);
	pants[4][0] = Math.max(pants[4][0], pants[8][0]);
	return pants;
}
function calculatepantsbackmen(m){
	var Angle = Math.atan(5/(0.25*m.Hips+5)); 
	var pants=[
	[0,0],
	[0,+m.WaisttoFloor],
	[10,0],
	[-10,0],
	[.25*m.Thigh+4,+m.Inseam],
	[-.25*m.Thigh-4,+m.Inseam], 
	/*pG: [0.125*m.Waist,+m.WaisttoFloor],*/ 
	[-0.125*m.Waist+ 0.25*m.Hips*(1 - Math.cos(Angle)) +(m.WaisttoFloor - m.Inseam - 5)*Math.sin(Angle)+0.25*m.Waist*Math.cos(Angle),
	 +m.Inseam + 5+ 0.25*m.Hips*Math.sin(Angle) + (m.WaisttoFloor - m.Inseam - 5)*Math.cos(Angle)-0.25*m.Waist*Math.sin(Angle)],
   /*pH: [-0.125*m.Waist,+m.WaisttoFloor+5],*/ 
	[-0.125*m.Waist+ 0.25*m.Hips*(1 - Math.cos(Angle)) +(m.WaisttoFloor - m.Inseam - 5)*Math.sin(Angle),
	 +m.Inseam + 5+ 0.25*m.Hips*Math.sin(Angle) + (m.WaisttoFloor - m.Inseam - 5)*Math.cos(Angle)], 
	[-0.125*m.Waist + 0.25*m.Hips+5,+m.WaisttoFloor - m.WaisttoHips], 
	/*pJ: [-0.125*m.Waist, +m.Inseam + 5],*/
	 [-0.125*m.Waist+ 0.25*m.Hips*(1 - Math.cos(Angle)), +m.Inseam + 5+ 0.25*m.Hips*Math.sin(Angle)], 
	[0,+m.WaisttoFloor - m.WaisttoKnee], 
	[0,+m.WaisttoFloor - m.WaisttoKnee]
	];
	pants[5][0] = Math.min(pants[5][0], pants[9][0] - 5);
	pants[4][0] = Math.max(pants[4][0], pants[8][0]);
	return pants;
}
function calculatepantsbackwomen(m){
	var Angle = Math.atan(4/(0.25*m.Hips+4)); 
	var pants=[
	[0,0],
	[0,+m.WaisttoFloor],
	[10-2,0],
	[-10,0],
	[.25*m.Thigh-2+4,+m.Inseam],
	[-.25*m.Thigh-4,+m.Inseam], 
	/*pG: [0.125*m.Waist,+m.WaisttoFloor],*/ 
	[-2-0.125*m.Waist+ 0.25*m.Hips*(1 - Math.cos(Angle)) +(m.WaisttoFloor - m.Inseam - 5)*Math.sin(Angle)+0.25*m.Waist*Math.cos(Angle),
	 +m.Inseam + 5+ 0.25*m.Hips*Math.sin(Angle) + (m.WaisttoFloor - m.Inseam - 5)*Math.cos(Angle)-0.25*m.Waist*Math.sin(Angle)],
   /*pH: [-0.125*m.Waist,+m.WaisttoFloor+5],*/ 
	[-0.125*m.Waist+ 0.25*m.Hips*(1 - Math.cos(Angle)) +(m.WaisttoFloor - m.Inseam - 5)*Math.sin(Angle),
	 +m.Inseam + 5+ 0.25*m.Hips*Math.sin(Angle) + (m.WaisttoFloor - m.Inseam - 5)*Math.cos(Angle)], 
	[-0.125*m.Waist + 0.25*m.Hips+4,+m.WaisttoFloor - m.WaisttoHips], 
	/*pJ: [-0.125*m.Waist, +m.Inseam + 5],*/
	 [-0.125*m.Waist+ 0.25*m.Hips*(1 - Math.cos(Angle)), +m.Inseam + 5+ 0.25*m.Hips*Math.sin(Angle)], 
	[0,+m.WaisttoFloor - m.WaisttoKnee], 
	[0,+m.WaisttoFloor - m.WaisttoKnee]
	];
	pants[5][0] = Math.min(pants[5][0], pants[9][0] - 5);
	pants[4][0] = Math.max(pants[4][0], pants[8][0]);
	return pants;
}


function drawpants(pants){
/* scale is used to convert cms into pixels */
var scale=25.;
	for ( var i=0;i<=pants.length-1; ++i ){
	pants[i][1] = -pants[i][1]; /*invert y axis*/
	pants[i][0]=pants[i][0]*scale; /*scale cms to pixels*/
	pants[i][1]=pants[i][1]*scale; /*scale cms to pixels*/
	}
var pma=pants[0].slice(); /*pma will be the maximum x and y value */
var pmi=pants[0].slice(); /*pmi will be the minimum x and y value */
for ( i=0;i<=pants.length-1; ++i ){
	pma[0]=Math.max(pma[0],pants[i][0]);
	pma[1]=Math.max(pma[1],pants[i][1]);
	pmi[0]=Math.min(pmi[0],pants[i][0]);
	pmi[1]=Math.min(pmi[1],pants[i][1]);
}
var paperx = (pma[0]-pmi[0])+5; /*width of pattern in pixels*/
var papery = (pma[1]-pmi[1])+5; /*height of pattern in pixels */
var a4x = 21.0 - 4; /*width of printing paper in cm minus margin of 4 cm*/
var a4y = 29.7 - 4; /*height of printing paper in cm minus margin of 4 cm*/
var partsx=(paperx-paperx%(a4x*scale))/(a4x*scale)+1; /*number of columns*/
var partsy=(papery-papery%(a4y*scale))/(a4y*scale)+1; /*number of rows*/
var offset = [-pmi[0]+5, -pmi[1]+5];
for ( var i=0;i<=pants.length-1; ++i ){
	pants[i][0] += offset[0];
	pants[i][1] += offset[1];
}
/*control points for cubic splines*/
pantshelp4 = controlpointpar(pants[4],pants[2],pants[4],-5*scale,-5*scale);
pantshelp28 = controlpointpar(pants[8],pants[6],pants[4],-5*scale,-5*scale);
pantshelp6 = controlpointpar(pants[6],pants[6],pants[8],-5*scale,-5*scale);
pantshelp5 = controlpointort(pants[5],pants[5],pants[3],-3*scale,+3*scale);
pantshelp9 = controlpointpar(pants[9],pants[9],pants[7],+3*scale,+3*scale);
pantshelp7 = controlpointort(pants[9],pants[9],pants[7],+5*scale,+5*scale);
/*path*/
var stringline = 
'M ' + pathpoint(pants[5]) + 
' L ' + pathpoint(pants[3]) + 
' L ' + pathpoint(pants[0]) + 
' L ' + pathpoint(pants[2]) + 
' L ' + pathpoint(pants[4]) + 
' C ' + pathpoint(pantshelp4) + ' ' + pathpoint(pantshelp28) +  ' ' + pathpoint(pants[8]) +
' S ' + ' ' + pathpoint(pantshelp6) + ' ' + pathpoint(pants[6]) +
' L ' + pathpoint(pants[7]) + 
' L ' + pathpoint(pants[9]) +
' C ' + pathpoint(pantshelp9) + ' ' + pathpoint(pantshelp5) + ' ' + pathpoint(pants[5]) + 
'';
/*kneeline*/
knee = [
[pants[5][0],pants[10][1]],
[pants[4][0],pants[10][1]]
];
var kneenewl = intersect2lines(knee[0],knee[1],pants[5],pants[3]);
knee[0]=kneenewl;
var kneenewr = intersect2lines(knee[0],knee[1],pants[4],pants[2]);
knee[1]=kneenewr;
var kneeline ='M ' + pathpoint(knee[0]) + 
' L ' + pathpoint(knee[1]); 
/*svg construction*/
var container = document.getElementById("svgContainer");
var mySvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
mySvg.setAttribute("version", "1.2");
mySvg.setAttribute("baseProfile", "tiny");
mySvg.setAttribute("width",(paperx/scale)+"cm"); 
mySvg.setAttribute("height",((partsx+1)*papery/scale)+"cm");
mySvg.setAttribute("viewBox","0 0 "+(paperx)+" "+((partsx+1)*papery));
container.appendChild(mySvg);
var myDefs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
mySvg.appendChild(myDefs);
var myCP;
var myPath;
var myCircle;
var myRect;
var myText;
/*path*/
var corig = document.createElementNS("http://www.w3.org/2000/svg", "path");
corig.setAttribute("id","corig");
corig.setAttribute("d",stringline);
corig.setAttribute("stroke", "#AA99FF");
corig.setAttribute("stroke-width", "1");
corig.setAttribute("fill", "yellow");
corig.setAttribute("fill-opacity", "0.5");
mySvg.appendChild(corig);
/*kneeline*/
var kneeorig = document.createElementNS("http://www.w3.org/2000/svg", "path");
kneeorig.setAttribute("id","kneeorig");
kneeorig.setAttribute("d",kneeline);
kneeorig.setAttribute("stroke", "#AA99FF");
kneeorig.setAttribute("stroke-width", "1");
kneeorig.setAttribute("fill", "none");
kneeorig.setAttribute("fill-opacity", "0.5");
kneeorig.setAttribute("stroke-dasharray", "3,5");
mySvg.appendChild(kneeorig);
/*clones of path and knee for each page for printing*/
for (i=0; i<partsx; i++){
	for (j=0;j<partsy;j++){
		var c=document.getElementById("corig").cloneNode("true");
		c.setAttribute("id","c"+i+"-"+j);
		mySvg.appendChild(c);		
		var k=document.getElementById("kneeorig").cloneNode("true");
		k.setAttribute("id","k"+i+"-"+j);
		mySvg.appendChild(k);		
	}
}
for (i=0; i<partsx; i++){
	for (j=0;j<partsy;j++){
     	/*visible window per page*/
		myCP = document.createElementNS("http://www.w3.org/2000/svg", "clipPath");
		myCP.setAttribute("id", "clip"+i+"-"+j);
		myDefs.appendChild(myCP);
		myPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
		myPath.setAttribute("d", "M "+i*a4x*scale+" "+(((j+1)*scale*a4y))+" l "+a4x*scale+" 0 l 0 "+-a4y*scale+" l "+-a4x*scale+" 0");
		myCP.appendChild(myPath);
		/* circle marks in NW corner for joining pages together */
		myCircle= document.createElementNS("http://www.w3.org/2000/svg", "circle");
		myCircle.setAttribute("id", "circA"+i+"-"+j);
	    myCircle.setAttribute("cx", i*a4x*scale);
    	myCircle.setAttribute("cy", j*a4y*scale);
		myCircle.setAttribute("r", "10");
		myCircle.setAttribute("stroke", "#AA99FF");
		myCircle.setAttribute("stroke-width", "1");
		myCircle.setAttribute("fill", "#AA99FF");	
		mySvg.appendChild(myCircle);
		/* dashed line around page window */
		myRect= document.createElementNS("http://www.w3.org/2000/svg", "rect");
		myRect.setAttribute("id", "rectA"+i+"-"+j);
	    myRect.setAttribute("x", i*a4x*scale);
    	myRect.setAttribute("y", j*a4y*scale);
		myRect.setAttribute("width", a4x*scale);
		myRect.setAttribute("height", a4y*scale);
		myRect.setAttribute("stroke", "#AA99FF");
		myRect.setAttribute("fill", "none");
		myRect.setAttribute("stroke-width", "1");
		myRect.setAttribute("stroke-dasharray", "5,5");
		mySvg.appendChild(myRect);
		/* page identifier on center of page */   
	   	myText= document.createElementNS("http://www.w3.org/2000/svg", "text");
		myText.setAttribute("id", "text"+i+"-"+j);
	    myText.setAttribute("x", (i+0.5)*a4x*scale);
    	myText.setAttribute("y", (j+0.5)*a4y*scale);
		myText.setAttribute("font-family", "Verdana");
		myText.setAttribute("font-size", "40");
		myText.setAttribute("fill", "#AA99FF");
        myText.appendChild(document.createTextNode("(x"+(i+1)+",y"+(j+1)+")"));
		mySvg.appendChild(myText);
  		/* circle marks in NE corner for joining pages together */
		myCircle= document.createElementNS("http://www.w3.org/2000/svg", "circle");
		myCircle.setAttribute("id", "circB"+i+"-"+j);
	    myCircle.setAttribute("cx", (i+1)*a4x*scale);
    	myCircle.setAttribute("cy", j*a4y*scale);
		myCircle.setAttribute("r", "10");
		myCircle.setAttribute("stroke", "#AA99FF");
		myCircle.setAttribute("stroke-width", "1");
		myCircle.setAttribute("fill", "#AA99FF");	
		mySvg.appendChild(myCircle);
		/* circle marks in SW corner for joining pages together */
		myCircle= document.createElementNS("http://www.w3.org/2000/svg", "circle");
		myCircle.setAttribute("id", "circC"+i+"-"+j);
	    myCircle.setAttribute("cx", i*a4x*scale);
    	myCircle.setAttribute("cy", (j+1)*a4y*scale);
		myCircle.setAttribute("r", "10");
		myCircle.setAttribute("stroke", "#AA99FF");
		myCircle.setAttribute("stroke-width", "1");
		myCircle.setAttribute("fill", "#AA99FF");	
		mySvg.appendChild(myCircle);
		/* circle marks in SE corner for joining pages together */
		myCircle= document.createElementNS("http://www.w3.org/2000/svg", "circle");
		myCircle.setAttribute("id", "circD"+i+"-"+j);
	    myCircle.setAttribute("cx", (i+1)*a4x*scale);
    	myCircle.setAttribute("cy", (j+1)*a4y*scale);
		myCircle.setAttribute("r", "10");
		myCircle.setAttribute("stroke", "#AA99FF");
		myCircle.setAttribute("stroke-width", "1");
		myCircle.setAttribute("fill", "#AA99FF");	
		mySvg.appendChild(myCircle);
	}
}        
for (i=0; i<partsx; i++){
	for (j=0;j<partsy;j++){
	    /*draw window outlines*/
	    c = document.getElementById("rectA"+i+"-"+j);
		c.setAttribute("transform","translate("+(-i*a4x*scale+10)+","+((i+j*(partsx-1))*((a4y+j)*scale))+")");
	    c = document.getElementById("text"+i+"-"+j);
		c.setAttribute("transform","translate("+(-i*a4x*scale+10)+","+((i+j*(partsx-1))*((a4y+j)*scale))+")");
	    /*draw circles*/
	    c = document.getElementById("circA"+i+"-"+j);
		c.setAttribute("clip-path","url(#clip"+i+"-"+j+")");
		c.setAttribute("transform","translate("+(-i*a4x*scale+10)+","+((i+j*(partsx-1))*((a4y+j)*scale))+")");
	    c = document.getElementById("circB"+i+"-"+j);
		c.setAttribute("clip-path","url(#clip"+i+"-"+j+")");
		c.setAttribute("transform","translate("+(-i*a4x*scale+10)+","+((i+j*(partsx-1))*((a4y+j)*scale))+")");
	    c = document.getElementById("circC"+i+"-"+j);
		c.setAttribute("clip-path","url(#clip"+i+"-"+j+")");
		c.setAttribute("transform","translate("+(-i*a4x*scale+10)+","+((i+j*(partsx-1))*((a4y+j)*scale))+")");
	    c = document.getElementById("circD"+i+"-"+j);
		c.setAttribute("clip-path","url(#clip"+i+"-"+j+")");
		c.setAttribute("transform","translate("+(-i*a4x*scale+10)+","+((i+j*(partsx-1))*((a4y+j)*scale))+")");
	    /*draw path in window*/
	    c = document.getElementById("c"+i+"-"+j);
		c.setAttribute("clip-path","url(#clip"+i+"-"+j+")");
		c.setAttribute("transform","translate("+(-i*a4x*scale+10)+","+((i+j*(partsx-1))*((a4y+j)*scale))+")");
		/*draw knee in window*/
	    c = document.getElementById("k"+i+"-"+j);
		c.setAttribute("clip-path","url(#clip"+i+"-"+j+")");
		c.setAttribute("transform","translate("+(-i*a4x*scale+10)+","+((i+j*(partsx-1))*((a4y+j)*scale))+")");
	}
}
mySvg.removeChild(corig);
mySvg.removeChild(kneeorig);
}