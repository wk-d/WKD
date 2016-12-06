function calculatebodicefrontwomenprincess(m){
	var DartWidth = m.FullBust - m.UpperChest;
	var DartAngle = Math.asin(0.1*0.5*DartWidth);
	/*(mHelp3)/*
	var DartPoint1 = m.FrontBust - m.BackBust;
	/*(mHelp4)*/
	var DartPoint2 = 0.5*m.FrontBust - 0.5*m.BusttoBust;
	/*(mHelp5)*/
	var DartPoint3 = 0.5*m.FrontBust - 0.25*m.Waist;
	var bodice=[
	[0,0],
	[0,+m.CenterFronttoWaist],
	[0.5*m.NeckWidth, m.SideFronttoWaist],
	[0.5*m.ShoulderWidth,
	Math.sqrt((m.CenterFrontWaisttoShoulder)*(m.CenterFrontWaisttoShoulder)-
	0.25*m.ShoulderWidth*m.ShoulderWidth)],
	[0.5*m.ShoulderWidth-2.5,
    Math.sqrt(m.ArmpittoWaist*m.ArmpittoWaist-
	(0.25*m.Chest+2.5-0.25*m.Waist)*(0.25*m.Chest+2.5-0.25*m.Waist))+
	1./3.*(Math.sqrt((m.CenterFrontWaisttoShoulder)*(m.CenterFrontWaisttoShoulder)-
	0.25*m.ShoulderWidth*m.ShoulderWidth)-(Math.sqrt(m.ArmpittoWaist*m.ArmpittoWaist-
	(0.25*m.Chest+2.5-0.25*m.Waist)*(0.25*m.Chest+2.5-0.25*m.Waist))))],
	[0.25*m.Chest+2.5,
	Math.sqrt(m.ArmpittoWaist*m.ArmpittoWaist-
	(0.25*m.Chest+2.5-0.25*m.Waist)*(0.25*m.Chest+2.5-0.25*m.Waist))],
	[0.5*m.BusttoBust+Math.sin(DartAngle)*(m.SideFronttoWaist - m.SideFronttoBust)+Math.cos(DartAngle)*DartPoint3,
	(1-Math.cos(DartAngle))*(m.SideFronttoWaist - m.SideFronttoBust)+Math.sin(DartAngle)*DartPoint3],
	[0.5*m.BusttoBust+Math.sin(DartAngle)*(m.SideFronttoWaist - m.SideFronttoBust),
	(1-Math.cos(DartAngle))*(m.SideFronttoWaist - m.SideFronttoBust)],
	[0.5*m.BusttoBust, m.SideFronttoWaist - m.SideFronttoBust -2.5-0.5*Math.max(DartWidth-2.5,0)],
	[0.5*m.BusttoBust+Math.sin(DartAngle)*(m.SideFronttoWaist - m.SideFronttoBust)+
	0.5*Math.cos(DartAngle)*DartPoint3,
	(1-Math.cos(DartAngle))*(m.SideFronttoWaist - m.SideFronttoBust)+
	0.5*Math.sin(DartAngle)*DartPoint3],	
	[0.5*m.BusttoBust, m.SideFronttoWaist - m.SideFronttoBust -2.5-0.5*Math.max(DartWidth-2.5,0)],
	[0.5*m.BusttoBust-0.5*DartPoint3,0], 
	[0.5*m.BusttoBust, m.SideFronttoWaist - m.SideFronttoBust -2.5-0.5*Math.max(DartWidth-2.5,0)],
	[0.5*m.BusttoBust,0], 
	[0.5*m.BusttoBust, m.SideFronttoWaist - m.SideFronttoBust]
	];	
	return bodice;
}
function calculatebodicefrontwomenprincess2(m){
	var DartWidth = m.FullBust - m.UpperChest;
	var DartAngle = Math.asin(0.1*0.5*DartWidth);
	/*(mHelp3)/*
	var DartPoint1 = m.FrontBust - m.BackBust;
	/*(mHelp4)*/
	var DartPoint2 = 0.5*m.FrontBust - 0.5*m.BusttoBust;
	/*(mHelp5)*/
	var DartPoint3 = 0.5*m.FrontBust - 0.25*m.Waist;
	var bodice=[
	[0,0],
	[0,+m.CenterFronttoWaist],
	[0.5*m.NeckWidth, m.SideFronttoWaist],
	[0.5*m.ShoulderWidth,
	Math.sqrt((m.CenterFrontWaisttoShoulder)*(m.CenterFrontWaisttoShoulder)-
	0.25*m.ShoulderWidth*m.ShoulderWidth)],
	[0.5*m.ShoulderWidth-2.5,
    Math.sqrt(m.ArmpittoWaist*m.ArmpittoWaist-
	(0.25*m.Chest+2.5-0.25*m.Waist)*(0.25*m.Chest+2.5-0.25*m.Waist))+
	1./3.*(Math.sqrt((m.CenterFrontWaisttoShoulder)*(m.CenterFrontWaisttoShoulder)-
	0.25*m.ShoulderWidth*m.ShoulderWidth)-(Math.sqrt(m.ArmpittoWaist*m.ArmpittoWaist-
	(0.25*m.Chest+2.5-0.25*m.Waist)*(0.25*m.Chest+2.5-0.25*m.Waist))))],
	[0.25*m.Chest+2.5,
	Math.sqrt(m.ArmpittoWaist*m.ArmpittoWaist-
	(0.25*m.Chest+2.5-0.25*m.Waist)*(0.25*m.Chest+2.5-0.25*m.Waist))],
	/*[0.25*m.Waist,0],*/
	[0.5*m.BusttoBust+Math.sin(DartAngle)*(m.SideFronttoWaist - m.SideFronttoBust)+Math.cos(DartAngle)*DartPoint3,
	(1-Math.cos(DartAngle))*(m.SideFronttoWaist - m.SideFronttoBust)+Math.sin(DartAngle)*DartPoint3],
	[0.5*m.BusttoBust+Math.sin(DartAngle)*(m.SideFronttoWaist - m.SideFronttoBust),
	(1-Math.cos(DartAngle))*(m.SideFronttoWaist - m.SideFronttoBust)],
	[0.5*m.BusttoBust, m.SideFronttoWaist - m.SideFronttoBust -2.5-0.5*Math.max(DartWidth-2.5,0)],
	[0.5*m.BusttoBust+Math.sin(DartAngle)*(m.SideFronttoWaist - m.SideFronttoBust)+
	0.5*Math.cos(DartAngle)*DartPoint3,
	(1-Math.cos(DartAngle))*(m.SideFronttoWaist - m.SideFronttoBust)+
	0.5*Math.sin(DartAngle)*DartPoint3],	
	[0.5*m.BusttoBust, m.SideFronttoWaist - m.SideFronttoBust -2.5-0.5*Math.max(DartWidth-2.5,0)],
	[0.5*m.BusttoBust-0.5*DartPoint3,0], 
	[0.5*m.BusttoBust, m.SideFronttoWaist - m.SideFronttoBust -2.5-0.5*Math.max(DartWidth-2.5,0)],
	[0.5*m.BusttoBust,0], 
	[0.5*m.BusttoBust, m.SideFronttoWaist - m.SideFronttoBust]
	];
	angle = findangle(bodice[7],bodice[14],bodice[13])
	for ( var i=0;i<=bodice.length-1; ++i ){
	bodice[i] =rotateAaroundB(bodice[i],bodice[14],-angle);
	}	
	bodice[8]=rotateAaroundB(bodice[8],bodice[14],angle);
	bodice[10]=rotateAaroundB(bodice[10],bodice[14],angle);
	bodice[12]=rotateAaroundB(bodice[12],bodice[14],angle);
	return bodice;
}
function drawbodicewprincess(bodice,offsetorig,scale){
bodice=scalepattern(bodice, scale);
helpvar = pms(bodice);
pmi = helpvar[0];
pma = helpvar[1];
var offset = [-pmi[0]+5, -pmi[1]+5+offsetorig];
for ( var i=0;i<=bodice.length-1; ++i ){
	bodice[i][0] += offset[0];
	bodice[i][1] += offset[1];
}
/*control points for cubic splines*/
var c1 = new Array();
var c2 = new Array();
c1[0] = bodice[13];
c2[0] = bodice[1];
c1[1] = bodice[0];
c2[1] = controlpointort(bodice[1],bodice[0],bodice[1],5*scale,-5*scale);
c1[2] = controlpointort(bodice[2],bodice[3],bodice[2],-2*scale,-2*scale);
c2[2] = bodice[3];
c1[3] = bodice[2];
c2[3] = controlpointort(bodice[3],bodice[2],bodice[3],2*scale,2*scale);
c1[4] = controlpointpar(bodice[4],bodice[3],bodice[5],2*scale,2*scale);
c2[4] = controlpointpar(bodice[4],bodice[3],bodice[5],-2*scale,-2*scale);
c1[5] = controlpointort(bodice[5],bodice[5],bodice[6],2*scale,2*scale);
c2[5] = bodice[5];
c1[6] = bodice[6];
c2[6] = bodice[6];
c1[7] = bodice[7];
c2[7] = bodice[7];
c1[8] = bodice[8];
c2[8] = bodice[8];
c1[9] = bodice[9];
c2[9] = bodice[9];
c1[10] = controlpointpar(bodice[10],bodice[10],bodice[13],2*scale,2*scale);
c2[10] = bodice[11];
c1[11] = bodice[10];
c2[11] = bodice[12];
c1[12] = bodice[11];
c2[12] = bodice[13];
c1[13] = bodice[12];
c2[13] = bodice[0];
help43= controlpointpar(bodice[14],bodice[12],bodice[14],-4*scale,-4*scale);
help44= controlpointpar(bodice[14],bodice[12],bodice[14],4*scale,4*scale);
/*path*/
newBez = dividebezier(bodice[3],bodice[4],c2[3],c1[4],0.8);
C1=newBez.C1;
C2=newBez.C2;
c1[4]=newBez.A2;
c2[3]=newBez.A1;
P=newBez.P;
help42= controlpointort(P,C1,C2,2*scale,2*scale);
/*insert P, C1, help42; bodice14, help43, help44 after bodice[4],*/   
bodice.splice(4,6,P,bodice[14]);
bodice.pop();
c1.splice(4,6,C1,help43);
c2.splice(4,6,help42,help44);
helpvar = pms(bodice);
tpmi = helpvar[0];
tpma = helpvar[1];helptext = [tpmi[0]+15,(tpma[1]+tpmi[1])/2];
var stringline = setstringline(bodice,c1,c2);
textline =textlinegen(helptext,'Princess Bodice Center Front');
var stringline = stringline.concat(textline); 			
return stringline;
/*insert*/
}
function drawbodicewprincess2(bodice,offsetorig,scale){
bodice=scalepattern(bodice, scale);
helpvar = pms(bodice);
pmi = helpvar[0];
pma = helpvar[1];
var offset = [5-bodice[13][0], -pmi[1]+5+offsetorig+bodice[2][1]-bodice[4][1]+100];
for ( var i=0;i<=bodice.length-1; ++i ){
	bodice[i][0] += offset[0];
	bodice[i][1] += offset[1];
}
var c1 = new Array();
var c2 = new Array();
c1[0] = bodice[13];
c2[0] = bodice[1];
c1[1] = bodice[0];
c2[1] = controlpointort(bodice[1],bodice[0],bodice[1],5*scale,-5*scale);
c1[2] = controlpointort(bodice[2],bodice[3],bodice[2],-2*scale,-2*scale);
c2[2] = bodice[3];
c1[3] = bodice[2];
c2[3] = controlpointort(bodice[3],bodice[2],bodice[3],2*scale,2*scale);
c1[4] = controlpointpar(bodice[4],bodice[3],bodice[5],2*scale,2*scale);
c2[4] = controlpointpar(bodice[4],bodice[3],bodice[5],-2*scale,-2*scale);
c1[5] = controlpointort(bodice[5],bodice[5],bodice[6],2*scale,2*scale);
c2[5] = bodice[6];
c1[6] = bodice[5];
c2[6] = bodice[7];
c1[7] = bodice[6];
c2[7] = bodice[8];
c1[8] = bodice[7];
c2[8] = bodice[9];
c1[9] = bodice[8];
c2[9] = bodice[8];
c1[10] = bodice[9];
c2[10] = controlpointpar(bodice[8],bodice[7],bodice[8],2*scale,2*scale);
c1[11] = bodice[10];
c2[11] = bodice[12];
c1[12] = bodice[11];
c2[12] = bodice[13];
c1[13] = bodice[12];
c2[13] = bodice[0];
/*control points for cubic splines*/
/*
help1 = controlpointort(bodice[1],bodice[0],bodice[1],5*scale,-5*scale);
help2 = controlpointort(bodice[2],bodice[3],bodice[2],-2*scale,-2*scale);
help3 = controlpointort(bodice[3],bodice[2],bodice[3],2*scale,2*scale);
help4 = controlpointpar(bodice[4],bodice[3],bodice[5],2*scale,2*scale);
help41 = controlpointpar(bodice[4],bodice[3],bodice[5],-2*scale,-2*scale);
help42= controlpointort(bodice[4],bodice[3],bodice[5],2*scale,2*scale);
help43= controlpointpar(bodice[12],bodice[12],bodice[14],-4*scale,-4*scale);
help44= controlpointpar(bodice[12],bodice[12],bodice[14],4*scale,4*scale);
help6 = controlpointpar(bodice[12],bodice[12],bodice[7],1*scale,1*scale);*/
/*path*/
help43= controlpointpar(bodice[14],bodice[12],bodice[14],-4*scale,-4*scale);
help44= controlpointpar(bodice[14],bodice[12],bodice[14],4*scale,4*scale);
newBez = dividebezier(bodice[3],bodice[4],c2[3],c1[4],0.8);
C1=newBez.C1;
C2=newBez.C2;
c1[4]=newBez.A2;
c2[3]=newBez.A1;
P=newBez.P;
help42= controlpointort(P,C1,C2,2*scale,2*scale);
bodice.splice(0,4);
bodice.splice(7,3,bodice[10],P);
bodice.pop();
c2.splice(0,4);
c2.splice(7,3,help43,C2);
c1.splice(0,4);
c1.splice(7,3,help44,help42);
helpvar = pms(bodice);
tpmi = helpvar[0];
tpma = helpvar[1];
helptext = [tpmi[0]+15,(tpma[1]+tpmi[1])/2];
var stringline = setstringline(bodice,c1,c2);
textline =textlinegen(helptext,'Princess Bodice Side Front');
var stringline = stringline.concat(textline); 			
return stringline;
/*insert*/
}
