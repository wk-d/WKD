function calculatebodicefrontwomen(m){

  var DartWidth = 0.5*(m.FullBust - m.UpperChest);
  var DartAngle = Math.asin(DartWidth/20);
 var DartPoint3 = 0.5*m.FrontBust+2.5 - 0.25*m.Waist;
  var pH = [0.5*m.BusttoBust, m.SideFronttoWaist-m.SideFronttoBust];
  var pEt=[0.25*m.Waist+DartPoint3,0];
  var pE = rotateAaroundB(pEt,pH,DartAngle);

  var bodice=[
   /*CenterWaistline*/ [0              ,   0],
   /*CenterNeckline*/ [0              ,  +m.CenterFronttoWaist],
   /*SideNeckline*/  [0.5*m.NeckWidth          ,  m.SideFronttoWaist],
   /*Shoulderpoint*/    [0.5*m.ShoulderWidth          ,
  Math.sqrt((m.CenterFrontWaisttoShoulder)*(m.CenterFrontWaisttoShoulder)-
  0.25*m.ShoulderWidth*m.ShoulderWidth)],
  /*Inside Armhole*/   [0.5*m.ShoulderWidth-2.5        ,
    Math.sqrt(m.ArmpittoWaist*m.ArmpittoWaist-
  (0.5*m.FrontBust+2.5-0.25*m.Waist)*(0.5*m.FrontBust+2.5-0.25*m.Waist))+
  1./3.*(Math.sqrt((m.CenterFrontWaisttoShoulder)*(m.CenterFrontWaisttoShoulder)-
  0.25*m.ShoulderWidth*m.ShoulderWidth)-(Math.sqrt(m.ArmpittoWaist*m.ArmpittoWaist-
  (0.5*m.FrontBust+2.5-0.25*m.Waist)*(0.5*m.FrontBust+2.5-0.25*m.Waist))))],
  /*Armpit*/  [0.5*m.FrontBust+2.5          ,
  Math.sqrt(m.ArmpittoWaist*m.ArmpittoWaist-
  (0.5*m.FrontBust+2.5-0.25*m.Waist)*(0.5*m.FrontBust+2.5-0.25*m.Waist))],
  /*SideWaistline*/  pE,
  /*Dart Beginning*/  [0.5*m.BusttoBust+Math.sin(DartAngle)*(m.SideFronttoWaist - m.SideFronttoBust),
  (1-Math.cos(DartAngle))*(m.SideFronttoWaist - m.SideFronttoBust)],
  /*Dartpoint*/  [0.5*m.BusttoBust, m.SideFronttoWaist - m.SideFronttoBust -2.5+0.5*(DartWidth-2.5)],

  [0.5*m.BusttoBust+Math.sin(DartAngle)*(m.SideFronttoWaist - m.SideFronttoBust)+
  0.5*Math.cos(DartAngle)*DartPoint3,
  (1-Math.cos(DartAngle))*(m.SideFronttoWaist - m.SideFronttoBust)+
  0.5*Math.sin(DartAngle)*DartPoint3],
  /*Dartpoint*/  [0.5*m.BusttoBust, m.SideFronttoWaist - m.SideFronttoBust -2.5+0.5*(DartWidth-2.5)],
  [0.5*m.BusttoBust-0.5*DartPoint3,0],
  /*Dartpoint*/  [0.5*m.BusttoBust, m.SideFronttoWaist - m.SideFronttoBust -2.5+0.5*(DartWidth-2.5)],
  /*Dartend*/  [0.5*m.BusttoBust,0]
  ];

  return bodice;
}
function drawbodicew(bodiceorig,offsetorig,scale){
bodice=scalepattern(bodiceorig, scale);
var c1 = new Array();
var c2 = new Array();
c1[0] = controlpointpar(bodice[0],bodice[0],bodice[13],0*scale,0*scale);/*line*/
c2[0] = controlpointpar(bodice[0],bodice[0],bodice[1],0*scale,0*scale);/*line*/
c1[1] = controlpointpar(bodice[1],bodice[1],bodice[0],0*scale,0*scale);/*line*/
c2[1] = controlpointort(bodice[1],bodice[0],bodice[1],5*scale,-5*scale);
c1[2] = controlpointort(bodice[2],bodice[3],bodice[2],-2*scale,-2*scale);
c2[2] = controlpointpar(bodice[2],bodice[2],bodice[3],0*scale,0*scale);/*line*/
c1[3] = controlpointpar(bodice[3],bodice[3],bodice[2],0*scale,0*scale);/*line*/
c2[3] = controlpointort(bodice[3],bodice[3],bodice[2],-1*scale,-1*scale);
c1[4] = controlpointpar(bodice[4],bodice[3],bodice[5],3*scale,3*scale);
c2[4] = controlpointpar(bodice[4],bodice[3],bodice[5],-3*scale,-3*scale);
c1[5] = controlpointort(bodice[5],bodice[6],bodice[5],-3*scale,3*scale);
c2[5] = controlpointpar(bodice[5],bodice[5],bodice[6],0*scale,0*scale);
c1[6] = controlpointpar(bodice[6],bodice[6],bodice[5],0*scale,0*scale);
c2[6] = controlpointpar(bodice[6],bodice[6],bodice[7],0*scale,0*scale);
c1[7] = controlpointpar(bodice[7],bodice[7],bodice[6],0*scale,0*scale);
c2[7] = controlpointpar(bodice[7],bodice[7],bodice[8],0*scale,0*scale);
c1[8] = controlpointpar(bodice[8],bodice[8],bodice[7],0*scale,0*scale);
c2[8] = controlpointpar(bodice[8],bodice[8],bodice[9],0*scale,0*scale);
c1[9] = controlpointpar(bodice[9],bodice[9],bodice[8],0*scale,0*scale);
c2[9] = controlpointpar(bodice[9],bodice[9],bodice[10],0*scale,0*scale);
c1[10] = controlpointpar(bodice[10],bodice[10],bodice[9],0*scale,0*scale);
c2[10] = controlpointpar(bodice[10],bodice[10],bodice[11],0*scale,0*scale);
c1[11] = controlpointpar(bodice[11],bodice[11],bodice[10],0*scale,0*scale);
c2[11] = controlpointpar(bodice[11],bodice[11],bodice[12],0*scale,0*scale);
c1[12] = controlpointpar(bodice[12],bodice[12],bodice[11],0*scale,0*scale);
c2[12] = controlpointpar(bodice[12],bodice[12],bodice[13],0*scale,0*scale);
c1[13] = controlpointpar(bodice[13],bodice[13],bodice[12],0*scale,0*scale);
c2[13] = controlpointpar(bodice[13],bodice[13],bodice[0],0*scale,0*scale);
helptext = [bodice[5][0]/2-10,(bodice[1][1]-bodice[0][1])/2];
/*path*/
var stringlinep = setstringline(bodice,c1,c2);
helpvar = pms(bodice);
tpmi = helpvar[0];
tpma = helpvar[1];
helptext = [tpmi[0]+105,(tpma[1]+tpmi[1])/2];
textline =textlinegen(helptext,'Bodice Front');
 var stringline = stringlinep.concat(textline);
i=3
helptext = [bodice[i][0]-2,bodice[i][1]+2];
textline = textlinegen(helptext,'TriangleSouth')
stringline = stringline.concat(textline);
helptext = [bodice[i][0]-13,  bodice[i][1]+30];
textline = textlinegen(helptext,'B')
stringline = stringline.concat(textline);
 i=5;
helptext = [bodice[i][0]-2,bodice[i][1]+2];
textline = textlinegen(helptext,'TriangleSouth')
stringline = stringline.concat(textline);
helptext = [bodice[i][0]-13,  bodice[i][1]+30];
textline = textlinegen(helptext,'A')
stringline = stringline.concat(textline);
return stringline;
}


function calculatebodicebackwomen(m){
  var DartPoint3 = 0.25*m.FullBust+2.5 - 0.25*m.Waist;
  var DartE = 0.36*DartPoint3;
  var DartD = 0.70*DartPoint3;
  /*SideNeckline*/

  var pA = [0.5*m.NeckWidth, m.SideBack];
  /*ShoulderPoint*/
  var pB = [0.5*m.ShoulderWidth,
  Math.sqrt(m.CenterBackWaisttoShoulder*m.CenterBackWaisttoShoulder
  - 0.25*m.ShoulderWidth*m.ShoulderWidth)];
  var pX = [pA[0]-6*unitvector(pA,pB)[0],pA[1]-6*unitvector(pA,pB)[1]];
  var pY = [pA[0]-7*unitvector(pA,pB)[0],pA[1]-7*unitvector(pA,pB)[1]];
  var pZ = [pX[0]-1.5,m.CenterBack-8];
  var pW = [m.BackBust/4+5,m.ArmpittoWaist+(-pZ[1]-m.ArmpittoWaist)/2];
      var bodice=[
  [0,0],
  [0,+m.CenterBack],
  pA,
  pX,
  pZ,
  pY,
  pB,
  [0.5*m.BackBust + 2.5,Math.sqrt(m.ArmpittoWaist*m.ArmpittoWaist -
     (0.5*m.BackBust+2.5-(0.25*m.Waist+2.5*1.5))*(0.5*m.BackBust+2.5-(0.25*m.Waist+2.5*1.5)))],
  [0.25*m.BackBust + 2.5,0]
  ];
  return bodice;
}
