function patternpart(points,stringline,pmi,pma,offset){
/*shift patternpart stringline by offset*/
this.points=points;
this.stringline=stringline;
this.pmi=pmi;
this.pma=pma;
this.offset=offset;
this.offsetpoints = offsetpoints;
function offsetpoints(offset){
  for (var i = 0; i<this.points.length; i++){
  this.points[i][0]+=offset[0];
  this.points[i][1]-=offset[1];
  }
  }
}

function pickpattern(chosenpat,scale){

/*choose relevant pattern pieces from file EachPatternConfig.csv*/
var pattern = new patternpart;
$.ajax({ url: "../../EachPatternConfig.csv",
         async: false,/*soooo nicht!!!! soll man nicht machen!!!*/
         dataType: 'text',
         success: function(data) {

              processPatternPieces(data,pattern);

            }
        });

return pattern.stringline;
}

function processPatternPieces(allText,pattern) {

/*get necessary patternfunctions, drawfunctions for each pattern... */
   var allTextLines = allText.split(/\r\n|\n/);

    var headers = allTextLines[0].split(',');
    var lines = [];
    var pp = new Array();
    var pd = new Array();

    for (var i=1; i<allTextLines.length; i++) {
        var data = allTextLines[i].split(',');
        if (data[0] == chosenpat) {

        for (var j=0; j<(data.length-1)/3;j++) {
        if (data[3*j+2].length>0){

          pp.push(new patternpart());

          /* calculatepatternpoints from measurements m */
          pp[j].points=this[data[3*j+2]](m); /*calculatefunction name*/

          pd[j]=data[3*j+3]; /*drawfunction name*/

          helpvar = pms(pp[j].points);                                                                
          pp[j].pmi = helpvar[0];
      pp[j].pma = helpvar[1];
      if(j>0){
      /* offset to last pattern piece and such that x and y is positive */
      pp[j].offset = [-pp[j].pmi[0]+0.2, +pp[j].pma[1]-pp[j-1].pmi[1]+.2];
      }
      else{
      /* offset to last pattern piece and such that x and y is positive */
      pp[j].offset = [-pp[j].pmi[0]+0.2, +pp[j].pma[1]+.2];
      }
      pp[j].offsetpoints(pp[j].offset);
      helpvar = pms(pp[j].points);
      pp[j].pmi = helpvar[0];
      pp[j].pma = helpvar[1];
      nopatts=j+1;      }
       };
        
       for (var j=0; j<nopatts;j++){
       /*draw each patternpiece result:stringline*/
           pp[j].stringline=this[pd[j]](pp[j].points,0,scale);
            }
      pattern.stringline="";
        
    for (var j=0; j<nopatts;j++){
    /*join patternpieces together*/
    pattern.stringline = pattern.stringline.concat(pp[j].stringline); 
}      
       break;
        };}

return pattern;
}

/* for a chosen pattern chosenpat, determine the string need to draw the pattern*/


function scalepattern(pattern,scale){
for ( var i=0;i<=pattern.length-1; ++i ){
  pattern[i][1] = -pattern[i][1]; /*invert y axis*/
  pattern[i][0]=pattern[i][0]*scale; /*scale cms to pixels*/
  pattern[i][1]=pattern[i][1]*scale; /*scale cms to pixels*/
  }
return pattern;
}
/*drawpattern draws the line given in stringline scaled by scale*/
function drawpattern(stringline,scale){

var corig = document.createElementNS("http://www.w3.org/2000/svg", "path");
corig.setAttribute("id","corig");
corig.setAttribute("d",stringline);
corig.setAttribute("stroke", "#333333");
corig.setAttribute("stroke-width", "1");
corig.setAttribute("fill", "#ffffff");
/*svg construction*/
var container = document.getElementById("svgContainer");
var mySvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
mySvg.setAttribute("xmlns","http://www.w3.org/2000/svg");
mySvg.setAttribute("xmlns:xlink","http://www.w3.org/1999/xlink"); 

container.appendChild(mySvg);
mySvg.appendChild(corig);
var bbox = corig.getBBox();
var geodim = {};
geodim.scale = scale;
geodim.paperx = (bbox.width)+5; /*width of pattern in pixels*/
geodim.papery = (bbox.height)+5; /*height of pattern in pixels */
geodim.a4x = 14; /*width of printing paper in cm minus margin of 4 cm*/
geodim.a4y = 21; /*height of printing paper in cm minus margin of 4 cm*/
geodim.partsx=(geodim.paperx-geodim.paperx%(geodim.a4x*geodim.scale))/(geodim.a4x*geodim.scale)+1; /*number of columns*/
geodim.partsy=(geodim.papery-geodim.papery%(geodim.a4y*geodim.scale))/(geodim.a4y*geodim.scale)+1; /*number of rows*/
mySvg.setAttribute("id","mySvg");
mySvg.setAttribute("version", "1.2");
mySvg.setAttribute("width",(geodim.paperx/geodim.scale+1)+"cm"); 
mySvg.setAttribute("height",(geodim.papery/geodim.scale+1)+"cm");
var myDefs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
myDefs.setAttribute("id","myDefs");
mySvg.appendChild(myDefs);
return {mySvg : mySvg, geodim : geodim};
}
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

        
    /*visible window per page*/
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
    myCircle.setAttribute("stroke", "#333333");
    myCircle.setAttribute("stroke-width", "1");
    myCircle.setAttribute("fill", "#333333");  
    s.appendChild(myCircle);
        
    /* dashed line around page window */
    myRect= document.createElementNS("http://www.w3.org/2000/svg", "rect");
    myRect.setAttribute("id", "rectA"+i+"-"+j);
        myRect.setAttribute("x", 0);
        myRect.setAttribute("y", 0);
    myRect.setAttribute("width", geodim.a4x*geodim.scale);
    myRect.setAttribute("height", geodim.a4y*geodim.scale);
    myRect.setAttribute("stroke", "#333333");
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
    myRect2.setAttribute("stroke", "#333333");
    myRect2.setAttribute("fill", "none");
    myRect2.setAttribute("stroke-width", "1");
    myRect2.setAttribute("stroke-dasharray", "5,5");
    s.appendChild(myRect2);

    /*glue marker*/
    myGlue= document.createElementNS("http://www.w3.org/2000/svg", "text");
    myGlue.setAttribute("id", "glue"+i+"-"+j);
        myGlue.setAttribute("x",(geodim.a4x+0.75)*geodim.scale);
        myGlue.setAttribute("y", (geodim.a4y/3)*geodim.scale);
    myGlue.setAttribute("fill", "#333333");
    myGlue.setAttribute("font-family", "Verdana");
    myGlue.setAttribute("font-size", "20");
    myGlue.setAttribute("transform","rotate(270 "+((geodim.a4x+0.75)*geodim.scale)+","+(geodim.a4y/3)*geodim.scale+")");    
    myGlue.appendChild(document.createTextNode("glue"));
    s.appendChild(myGlue);

    myGlue= document.createElementNS("http://www.w3.org/2000/svg", "text");
    myGlue.setAttribute("id", "2glue"+i+"-"+j);
        myGlue.setAttribute("x",(geodim.a4x+0.75)*geodim.scale);
        myGlue.setAttribute("y", (2*geodim.a4y/3)*geodim.scale);
    myGlue.setAttribute("fill", "#333333");
    myGlue.setAttribute("font-family", "Verdana");
    myGlue.setAttribute("font-size", "20");
    myGlue.setAttribute("transform","rotate(270 "+((geodim.a4x+0.75)*geodim.scale)+","+(2*geodim.a4y/3)*geodim.scale+")");    
    myGlue.appendChild(document.createTextNode("glue"));
    s.appendChild(myGlue);
    
    myGlue= document.createElementNS("http://www.w3.org/2000/svg", "text");
    myGlue.setAttribute("id", "3glue"+i+"-"+j);
        myGlue.setAttribute("x",(geodim.a4x*0.25)*geodim.scale);
        myGlue.setAttribute("y", (geodim.a4y+1)*geodim.scale);
    myGlue.setAttribute("fill", "#333333");
    myGlue.setAttribute("font-family", "Verdana");
    myGlue.setAttribute("font-size", "20");
    myGlue.appendChild(document.createTextNode("glue"));
    s.appendChild(myGlue);

    myGlue= document.createElementNS("http://www.w3.org/2000/svg", "text");
    myGlue.setAttribute("id", "4glue"+i+"-"+j);
        myGlue.setAttribute("x",(geodim.a4x*0.75)*geodim.scale);
        myGlue.setAttribute("y", (geodim.a4y+1)*geodim.scale);
    myGlue.setAttribute("fill", "#333333");
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
    myText.setAttribute("fill", "#333333");
          myText.appendChild(document.createTextNode("(x"+(i+1)+",y"+(j+1)+")"));
    s.appendChild(myText);
      /* circle marks in NE corner for joining pages together */
    myCircleA= document.createElementNS("http://www.w3.org/2000/svg", "circle");
    myCircleA.setAttribute("id", "circB"+i+"-"+j);
        myCircleA.setAttribute("cx", (1)*geodim.a4x*geodim.scale);
        myCircleA.setAttribute("cy", 0);
    myCircleA.setAttribute("r", "10");
    myCircleA.setAttribute("stroke", "#333333");
    myCircleA.setAttribute("stroke-width", "1");
    myCircleA.setAttribute("fill", "#333333");  
    s.appendChild(myCircleA);
    /* circle marks in SW corner for joining pages together */
    myCircleB= document.createElementNS("http://www.w3.org/2000/svg", "circle");
    myCircleB.setAttribute("id", "circC"+i+"-"+j);
        myCircleB.setAttribute("cx", 0);
        myCircleB.setAttribute("cy", (1)*geodim.a4y*geodim.scale);
    myCircleB.setAttribute("r", "10");
    myCircleB.setAttribute("stroke", "#333333");
    myCircleB.setAttribute("stroke-width", "1");
    myCircleB.setAttribute("fill", "#333333");  
    s.appendChild(myCircleB);
    /* circle marks in SE corner for joining pages together */
    myCircleC= document.createElementNS("http://www.w3.org/2000/svg", "circle");
    myCircleC.setAttribute("id", "circD"+i+"-"+j);
    myCircleC.setAttribute("cx", geodim.a4x*geodim.scale);
    myCircleC.setAttribute("cy", geodim.a4y*geodim.scale);
    myCircleC.setAttribute("r", "10");
    myCircleC.setAttribute("stroke", "#333333");
    myCircleC.setAttribute("stroke-width", "1");
    myCircleC.setAttribute("fill", "#333333");  
    s.appendChild(myCircleC);

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
  }
}

mySvg=container.removeChild(mySvg);
mySvg.SvgCode=container.innerHTML;
}



function clickeventhandler(evt){
var corig = evt.target;
var mySvg = corig.parentNode;
var el = mySvg.querySelector('#el');
var corig = mySvg.querySelector('#corig');
var myDefs = mySvg.querySelector('#myDefs');
drawonpaper(mySvg,myDefs,geodim,corig,el);
}

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



function translpic(picid,idi,idj,i,j,geodim){
var c = document.getElementById(picid+i+"-"+j);
    c.setAttribute("transform","translate("+(-i*geodim.a4x*geodim.scale+0*geodim.scale)+
    ","+(-j*geodim.a4y*geodim.scale+0*geodim.scale)+")");
return c}    
function changesize(evt,s){
var tagi = evt.target;
tagi.setAttribute("r",s);
}

function movepoint(evt){
     alert(evt.clientX,evt.clientY);
   }

function load(chosenpat){
ret=drawpattern(stringline,scale);
return stringline;
}





function offsetpoints(offset){
  for (var i = 0; i<this.points.length; i++){
  this.points[i][0]+=offset[0];
  this.points[i][1]-=offset[1];
  }
  }

function patternpart(points,stringline,pmi,pma,offset){
/*shift patternpart stringline by offset*/
this.points=points;
this.stringline=stringline;
this.pmi=pmi;
this.pma=pma;
this.offset=offset;
this.offsetpoints = offsetpoints;
}



/* for a chosen pattern chosenpat, determine the string need to draw the pattern*/


function scalepattern(pattern,scale){
for ( var i=0;i<=pattern.length-1; ++i ){
  pattern[i][1] = -pattern[i][1]; /*invert y axis*/
  pattern[i][0]=pattern[i][0]*scale; /*scale cms to pixels*/
  pattern[i][1]=pattern[i][1]*scale; /*scale cms to pixels*/
  }
return pattern;
}
/*drawpattern draws the line given in stringline scaled by scale*/
function drawpattern(stringline,scale){
var corig = document.createElementNS("http://www.w3.org/2000/svg", "path");
corig.setAttribute("id","corig");
corig.setAttribute("d",stringline);
corig.setAttribute("stroke", "#333333");
corig.setAttribute("stroke-width", "1");
corig.setAttribute("fill", "#ffffff");
/*svg construction*/
var container = document.getElementById("svgContainer");
var mySvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
mySvg.setAttribute("xmlns","http://www.w3.org/2000/svg");
mySvg.setAttribute("xmlns:xlink","http://www.w3.org/1999/xlink"); 

container.appendChild(mySvg);
mySvg.appendChild(corig);
var bbox = corig.getBBox();
var geodim = {};
geodim.scale = scale;
geodim.paperx = (bbox.width)+5; /*width of pattern in pixels*/
geodim.papery = (bbox.height)+5; /*height of pattern in pixels */
geodim.a4x = 14; /*width of printing paper in cm minus margin of 4 cm*/
geodim.a4y = 21; /*height of printing paper in cm minus margin of 4 cm*/
geodim.partsx=(geodim.paperx-geodim.paperx%(geodim.a4x*geodim.scale))/(geodim.a4x*geodim.scale)+1; /*number of columns*/
geodim.partsy=(geodim.papery-geodim.papery%(geodim.a4y*geodim.scale))/(geodim.a4y*geodim.scale)+1; /*number of rows*/
mySvg.setAttribute("id","mySvg");
mySvg.setAttribute("version", "1.2");
/*mySvg.setAttribute("baseProfile", "tiny");*/
mySvg.setAttribute("width",(geodim.paperx/geodim.scale+1)+"cm"); 
mySvg.setAttribute("height",(geodim.papery/geodim.scale+1)+"cm");
/*!!viewBox setting caused Firefox to crash!!*/
/*mySvg.setAttribute("viewBox","0 0 "+(geodim.paperx)+" "+((geodim.partsx+1)*geodim.papery) );*/
var myDefs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
myDefs.setAttribute("id","myDefs");
mySvg.appendChild(myDefs);
/*path*/
/*Bodice front as path*/
return {mySvg : mySvg, geodim : geodim};
}



function clickeventhandler(evt){
var corig = evt.target;
var mySvg = corig.parentNode;
var el = mySvg.querySelector('#el');
var corig = mySvg.querySelector('#corig');
var myDefs = mySvg.querySelector('#myDefs');
drawonpaper(mySvg,myDefs,geodim,corig,el);
}

/*pms returns the maximum and minimum x and y value of the pattern*/ 




function translpic(picid,idi,idj,i,j,geodim){
var c = document.getElementById(picid+i+"-"+j);
    c.setAttribute("transform","translate("+(-i*geodim.a4x*geodim.scale+0*geodim.scale)+
    ","+(-j*geodim.a4y*geodim.scale+0*geodim.scale)+")");
return c}    
function changesize(evt,s){
var tagi = evt.target;
tagi.setAttribute("r",s);
}

function movepoint(evt){
     alert(evt.clientX,evt.clientY);
   }


