function calculatesleeve(m){
	var sleeve=[
	[0,0],/*line to next*/
	[0.5*m.Palm,0],/*line to next*/
	[0.5*m.Biceps+2.5*1.5,+m.Armlength-m.SleeveCap],/*spline to next orth connection*/
	[2./3.*(0.5*m.Biceps+2.5*1.5),+m.Armlength-2./3.*m.SleeveCap-0.75*2.5],/*spline to next smooth connection, tangent parallel to */
	[1./3.*(0.5*m.Biceps+2.5*1.5),+m.Armlength-1./3.*m.SleeveCap+0.75*2.5],/*spline to next smooth connection*/
	[0,+m.Armlength],/*spline to next smooth connection */
	[1./3.*(-0.5*m.Biceps-2.5*1.5),+m.Armlength-1./3.*m.SleeveCap+2.5],/*spline to next smooth connection */ 
	[2./3.*(-0.5*m.Biceps-2.5*1.5),+m.Armlength-2./3.*m.SleeveCap],
	[-0.5*m.Biceps-2.5*1.5,+m.Armlength-m.SleeveCap],
	[-0.5*m.Palm,0]
	];
	return sleeve;
}


/*NEW*/

/*$.get("PatternControlPoints.csv",function(data){processControlPoints(data,pattern);},"text");*/

/*New not working, yet function processControlPoints(allText,pattern) {
   var allTextLines = allText.split(/\r\n|\n/);
    var headers = allTextLines[0].split(',');
    var lines = [];
    var pp = new Array();
    var pd = new Array();
    for (var i=1; i<allTextLines.length; i++) {
        var data = allTextLines[i].split(',');
        if (data[0] == pattern) {
        	if (data[2]== 'p'){
        	c1[data[1]] =controlpointpar(!"pattern"[data[3]],!"pattern"[data[4]],!"pattern"[data[5]],data[6]*scale,data[7]*scale);}
        	else{
        	c1[data[1]] =controlpointort(!"pattern"[data[3]],!"pattern"[data[4]],!"pattern"[data[5]],data[6]*scale,data[7]*scale);}
        	}
        	var k=6;
        	if (data[k+2]== 'p'){
        	c2[data[k+1]] =controlpointpar(!"pattern"[data[k+3]],!"pattern"[data[k+4]],!"pattern"[data[k+5]],data[k+6]*scale,data[k+7]*scale);}
        	else{
        	c2[data[k+1]] =controlpointort(!"pattern"[data[k+3]],!"pattern"[data[k+4]],!"pattern"[data[k+5]],data[k+6]*scale,data[k+7]*scale);}
        	}
        	      }
        	      stringline = setstringline(pattern,c1,c2);
        	      stringline = addtextmiddle(pattern,pattern,,stringline);
        	      
}*/


/*function addtextmiddle(pattern, text, stringline){
        	      helpvar = pms(pattern);
tpmi = helpvar[0];
tpma = helpvar[1];
helptext = [(tpmi[0]+tpma[0])/2-50,(tpma[1]+tpmi[1])/2];
textline =textlinegen(helptext,text);
var stringline = stringline.concat(textline); 	
return stringline;
}*/
/*END NEW*/
function drawsleeve(sleeveorig,offsetorig,scale){
var sleeve=scalepattern(sleeveorig, scale);
helpvar = pms(sleeve);
pmi = helpvar[0];
pma = helpvar[1];
/* scale is used to convert cms into pixels */
var c1 = new Array();
var c2 = new Array();
/* NEW $.get("PatternControlPoints.csv",function(data){processControlPoints(data,'sleeve');},"text");*/

c1[0] = controlpointpar(sleeve[0],sleeve[0],sleeve[9],0*scale,0*scale);/*line*/
c2[0] = controlpointpar(sleeve[0],sleeve[0],sleeve[1],0*scale,0*scale);/*line*/
c1[1] = controlpointpar(sleeve[1],sleeve[1],sleeve[0],0*scale,0*scale);
c2[1] = controlpointpar(sleeve[1],sleeve[1],sleeve[2],0*scale,0*scale);
c1[2] = controlpointpar(sleeve[2],sleeve[2],sleeve[1],0*scale,0*scale);
c2[2] = controlpointort(sleeve[2],sleeve[2],sleeve[1],2*scale,2*scale);
c1[3] = controlpointpar(sleeve[3],sleeve[3],sleeve[5],2*scale,2*scale);
c2[3] = controlpointpar(sleeve[3],sleeve[3],sleeve[5],-2*scale,-2*scale);
c1[4] = controlpointpar(sleeve[4],sleeve[2],sleeve[4],2*scale,2*scale);
c2[4] = controlpointpar(sleeve[4],sleeve[2],sleeve[4],-2*scale,-2*scale);
c1[5] = controlpointpar(sleeve[5],sleeve[2],sleeve[8],2*scale,-2*scale);
c2[5] = controlpointpar(sleeve[5],sleeve[2],sleeve[8],-2*scale,2*scale);
c1[6] = controlpointpar(sleeve[6],sleeve[8],sleeve[5],-2*scale,-2*scale);
c2[6] = controlpointpar(sleeve[6],sleeve[8],sleeve[5],2*scale,2*scale);
c1[7] = controlpointpar(sleeve[7],sleeve[6],sleeve[7],2*scale,2*scale);
c2[7] = controlpointpar(sleeve[7],sleeve[6],sleeve[7],-2*scale,-2*scale);
c1[8] = controlpointort(sleeve[8],sleeve[8],sleeve[9],-2*scale,-2*scale);
c2[8] = controlpointpar(sleeve[8],sleeve[8],sleeve[9],0*scale,0*scale);
c1[9] = controlpointpar(sleeve[9],sleeve[9],sleeve[8],0*scale,0*scale);
c2[9] = controlpointpar(sleeve[9],sleeve[9],sleeve[0],0*scale,0*scale);

stringline = setstringline(sleeve,c1,c2);
/*seam allowance*/
/*s1=sleeve[1]+angle(sl*/
helpvar = pms(sleeve);
tpmi = helpvar[0];
tpma = helpvar[1];
helptext = [(tpmi[0]+tpma[0])/2-50,(tpma[1]+tpmi[1])/2];
textline =textlinegen(helptext,'Sleeve');
var stringline = stringline.concat(textline); 	

helptext = [sleeve[2][0]-2,sleeve[2][1]+2];
textline = textlinegen(helptext,'TriangleSouth')
stringline = stringline.concat(textline); 			
helptext = [sleeve[2][0]-6,sleeve[2][1]+34];
textline = textlinegen(helptext,'A')
stringline = stringline.concat(textline); 			

helptext = [sleeve[5][0]-7.07,sleeve[5][1]+12];
textline = textlinegen(helptext,'TriangleNorth')
stringline = stringline.concat(textline); 			
helptext = [sleeve[5][0]+3,sleeve[5][1]+34];
textline = textlinegen(helptext,'B')
stringline = stringline.concat(textline); 

helptext = [sleeve[8][0]+17.07,sleeve[8][1]+2];
textline = textlinegen(helptext,'TriangleSouth')
stringline = stringline.concat(textline); 			
helptext = [sleeve[8][0]+23,sleeve[8][1]+34];
textline = textlinegen(helptext,'C')
stringline = stringline.concat(textline); 			
return stringline;
}
