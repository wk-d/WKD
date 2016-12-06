function calculatebodicefrontwomen2princess(m){
  /*(mHelp2)*/ var DartWidth = m.FullBust - m.UpperChest;
  var DartAngle = Math.asin(0.1*0.5*DartWidth);
  /*(mHelp3)*/ var DartPoint1 = m.FrontBust - m.BackBust;
  /*(mHelp4)*/ var DartPoint2 = 0.5*m.FrontBust - 0.5*m.BusttoBust;
  /*(mHelp5)*/ var DartPoint3 = 0.5*m.FrontBust - 0.25*m.Waist;
  var pF = [0.25*m.Chest+2.5,
  Math.sqrt(m.ArmpittoWaist*m.ArmpittoWaist-(0.25*m.Chest+2.5-0.25*m.Waist)*(0.25*m.Chest+2.5-0.25*m.Waist))];  
  var pE = 
  [0.5*m.BusttoBust+Math.sin(DartAngle)*(m.SideFronttoWaist - m.SideFronttoBust)+Math.cos(DartAngle)*DartPoint3,
  (1-Math.cos(DartAngle))*(m.SideFronttoWaist - m.SideFronttoBust)+Math.sin(DartAngle)*DartPoint3];
  var pH = [0.5*m.BusttoBust, m.SideFronttoWaist-m.SideFronttoBust];
  var pJ2 = [0.5*m.BusttoBust+Math.sin(DartAngle)*(m.SideFronttoWaist - m.SideFronttoBust)+0.5*DartPoint3*Math.cos(DartAngle),
  (1-Math.cos(DartAngle))*(m.SideFronttoWaist - m.SideFronttoBust)+0.5*DartPoint3*Math.sin(DartAngle)];  
  var pK = [pF[0]-2*unitvector(pF,pE)[0],pF[1]-2*unitvector(pF,pE)[1]];
  var bodice=[
  /*pA */[0,0],
  /*pB */[0,+m.CenterFronttoWaist],
  /*pC */[0.5*m.NeckWidth, +m.SideFronttoWaist],
  /*pD*/[0.5*m.ShoulderWidth,Math.sqrt((m.CenterFrontWaisttoShoulder)*(m.CenterFrontWaisttoShoulder)-0.25*(m.ShoulderWidth)*(m.ShoulderWidth))],
  /*pG*/[0.5*m.ShoulderWidth-2.5,
  Math.sqrt(m.ArmpittoWaist*m.ArmpittoWaist-
  (0.25*m.Chest+2.5-0.25*m.Waist)*(0.25*m.Chest+2.5-0.25*m.Waist))+
  1./3.*(Math.sqrt((m.CenterFrontWaisttoShoulder)*(m.CenterFrontWaisttoShoulder)-
  0.25*m.ShoulderWidth*m.ShoulderWidth)-(Math.sqrt(m.ArmpittoWaist*m.ArmpittoWaist-
  (0.25*m.Chest+2.5-0.25*m.Waist)*(0.25*m.Chest+2.5-0.25*m.Waist))))],
  /*pF*/pF,
  /*pK*/ pK,  
  /*pK4*/[0.5*m.BusttoBust+2.5+0.5*Math.max(DartWidth-2.5,0), m.SideFronttoWaist-m.SideFronttoBust],
  /*pK2*/rotateAaroundB(pK,pH,-DartAngle),
  /*pE2*/rotateAaroundB(pE,pH,-DartAngle),
  /* [0.5*m.FrontBust,0],*/
  /*pJ3*/rotateAaroundB(pJ2,pH,-DartAngle),
  /*pH2*/ [0.5*m.BusttoBust, m.SideFronttoWaist - m.SideFronttoBust -2.5-0.5*Math.max(DartWidth-2.5,0)],
  /*pI2*/[0.5*m.BusttoBust-0.5*DartPoint3,0] 
  ];
  return bodice;
  }

function calculatebodicefrontwomen2princess2(m){
  /*(mHelp2)*/ var DartWidth = m.FullBust - m.UpperChest;
  var DartAngle = Math.asin(0.1*0.5*DartWidth);
  /*(mHelp3)*/ var DartPoint1 = m.FrontBust - m.BackBust;
  /*(mHelp4)*/ var DartPoint2 = 0.5*m.FrontBust - 0.5*m.BusttoBust;
  /*(mHelp5)*/ var DartPoint3 = 0.5*m.FrontBust - 0.25*m.Waist;
  var pF = [0.25*m.Chest+2.5,
  Math.sqrt(m.ArmpittoWaist*m.ArmpittoWaist-(0.25*m.Chest+2.5-0.25*m.Waist)*(0.25*m.Chest+2.5-0.25*m.Waist))];  
  var pE = 
  [0.5*m.BusttoBust+Math.sin(DartAngle)*(m.SideFronttoWaist - m.SideFronttoBust)+Math.cos(DartAngle)*DartPoint3,
  (1-Math.cos(DartAngle))*(m.SideFronttoWaist - m.SideFronttoBust)+Math.sin(DartAngle)*DartPoint3];
  var pH = [0.5*m.BusttoBust, m.SideFronttoWaist-m.SideFronttoBust];
  var pJ2 = [0.5*m.BusttoBust+Math.sin(DartAngle)*(m.SideFronttoWaist - m.SideFronttoBust)+0.5*DartPoint3*Math.cos(DartAngle),
  (1-Math.cos(DartAngle))*(m.SideFronttoWaist - m.SideFronttoBust)+0.5*DartPoint3*Math.sin(DartAngle)];  
  var pK = [pF[0]-2*unitvector(pF,pE)[0],pF[1]-2*unitvector(pF,pE)[1]];
  var bodice=[
  /*pA */[0,0],
  /*pB */[0,+m.CenterFronttoWaist],
  /*pC */[0.5*m.NeckWidth, +m.SideFronttoWaist],
  /*pD*/[0.5*m.ShoulderWidth,Math.sqrt((m.CenterFrontWaisttoShoulder)*(m.CenterFrontWaisttoShoulder)-0.25*(m.ShoulderWidth)*(m.ShoulderWidth))],
  /*pG*/[0.5*m.ShoulderWidth-2.5,
  Math.sqrt(m.ArmpittoWaist*m.ArmpittoWaist-
  (0.25*m.Chest+2.5-0.25*m.Waist)*(0.25*m.Chest+2.5-0.25*m.Waist))+
  1./3.*(Math.sqrt((m.CenterFrontWaisttoShoulder)*(m.CenterFrontWaisttoShoulder)-
  0.25*m.ShoulderWidth*m.ShoulderWidth)-(Math.sqrt(m.ArmpittoWaist*m.ArmpittoWaist-
  (0.25*m.Chest+2.5-0.25*m.Waist)*(0.25*m.Chest+2.5-0.25*m.Waist))))],
  /*pF*/pF,
  /*pK*/ pK,  
  /*pK4*/[0.5*m.BusttoBust+2.5+0.5*Math.max(DartWidth-2.5,0), m.SideFronttoWaist-m.SideFronttoBust],
  /*pK2*/rotateAaroundB(pK,pH,-DartAngle),
  /*pE2*/rotateAaroundB(pE,pH,-DartAngle),
  /* [0.5*m.FrontBust,0],*/
  /*pJ3*/rotateAaroundB(pJ2,pH,-DartAngle),
  /*pH2*/ [0.5*m.BusttoBust, m.SideFronttoWaist - m.SideFronttoBust -2.5-0.5*Math.max(DartWidth-2.5,0)],
  /*pI2*/[0.5*m.BusttoBust-0.5*DartPoint3,0] 
  ];
  return bodice;
  }

function drawbodicew2princess(bodice,offsetorig,scale){
  bodice=scalepattern(bodice, scale);
  help41 = controlpointpar(bodice[4],bodice[3],bodice[5],-2*scale,-2*scale);
  help5 = controlpointort(bodice[5],bodice[5],bodice[6],2*scale,2*scale);
  newBez = dividebezier(bodice[4],bodice[5],help41,help5,0.1);
  P=newBez.P;
  dart1 = [bodice[6][0]-6*scale*unitvector(bodice[6],bodice[7])[0],
           bodice[6][1]-6*scale*unitvector(bodice[6],bodice[7])[1]];
  dart2 = [bodice[8][0]-6*scale*unitvector(bodice[8],bodice[7])[0],
           bodice[8][1]-6*scale*unitvector(bodice[8],bodice[7])[1]];
  cut1 = [bodice[10][0]-3*scale*unitvector(bodice[10],bodice[9])[0],
          bodice[10][1]-3*scale*unitvector(bodice[10],bodice[9])[1]];
  /*path*/
  Pold=bodice[5];
  bodice[5]=P;
  bodice[6]=dart1;
  bodice[8]=dart2;
  bodice[9]=cut1;
  var c1 = new Array();
  var c2 = new Array();
  c1[0] = controlpointpar(bodice[0],bodice[0],bodice[12],0*scale,0*scale);/*line*/
  c2[0] = controlpointpar(bodice[0],bodice[0],bodice[1],0*scale,0*scale);/*line*/
  c1[1] = controlpointpar(bodice[1],bodice[1],bodice[0],0*scale,0*scale);/*line*/
  c2[1] = controlpointort(bodice[1],bodice[0],bodice[1],5*scale,-5*scale);
  c1[2] = controlpointort(bodice[2],bodice[3],bodice[2],-2*scale,-2*scale);
  c2[2] = controlpointpar(bodice[2],bodice[2],bodice[3],0*scale,0*scale);/*line*/
  c1[3] = controlpointpar(bodice[3],bodice[3],bodice[2],0*scale,0*scale);/*line*/
  c2[3] = controlpointort(bodice[3],bodice[2],bodice[3],3*scale,3*scale);
  c1[4] = controlpointpar(bodice[4],bodice[3],Pold,3*scale,3*scale);
  c2[4] = controlpointpar(bodice[4],bodice[3],Pold,-0*scale,-0*scale);
  c1[5] = controlpointort(bodice[5],bodice[6],bodice[5],0*scale,-0*scale);
  
  c2[5] = controlpointort(bodice[5],bodice[4],bodice[5],0*scale,0*scale);
  c1[6] = controlpointort(bodice[6],bodice[7],bodice[6],-5*scale,-5*scale);
  
  c2[6] = controlpointpar(bodice[6],bodice[6],bodice[7],0*scale,0*scale);/*line*/
  c1[7] = controlpointpar(bodice[7],bodice[7],bodice[6],0*scale,0*scale);/*line*/
  c2[7] = controlpointpar(bodice[7],bodice[7],bodice[8],0*scale,0*scale);/*line*/
  c1[8] = controlpointpar(bodice[8],bodice[8],bodice[7],0*scale,0*scale);/*line*/
  
  c2[8] = controlpointort(bodice[8],bodice[7],bodice[8],2*scale,2*scale);
  c1[9] = controlpointort(bodice[9],bodice[10],bodice[9],-2*scale,-2*scale);
  
  c2[9] = controlpointpar(bodice[9],bodice[9],bodice[10],0*scale,0*scale);/*line*/
  c1[10] = controlpointpar(bodice[10],bodice[10],bodice[9],0*scale,0*scale);/*line*/
  c2[10] = controlpointpar(bodice[10],bodice[10],bodice[11],0*scale,0*scale);/*line*/
  c1[11] = controlpointpar(bodice[11],bodice[11],bodice[10],0*scale,0*scale);/*line*/
  c2[11] = controlpointpar(bodice[11],bodice[11],bodice[12],0*scale,0*scale);/*line*/
  c1[12] = controlpointpar(bodice[12],bodice[12],bodice[11],0*scale,0*scale);/*line*/
  c2[12] = controlpointpar(bodice[12],bodice[12],bodice[0],0*scale,0*scale);/*line*/
  helptext = [bodice[5][0]/2-10,(bodice[1][1]-bodice[0][1])/2];
  /*path*/
  var stringlinep = setstringline(bodice,c1,c2);
  helpvar = pms(bodice);
  tpmi = helpvar[0];
  tpma = helpvar[1];
  helptext = [tpmi[0]+105,(tpma[1]+tpmi[1])/2];
  textline =textlinegen(helptext,'Bodice Front');
  var stringline = stringlinep.concat(textline);
  i=3;
  helptext = [bodice[i][0]-2,bodice[i][1]+2];
  textline = textlinegen(helptext,'TriangleSouth');
  stringline = stringline.concat(textline);       
  helptext = [bodice[i][0]-13,  bodice[i][1]+30];
  textline = textlinegen(helptext,'B');
  stringline = stringline.concat(textline);       
  i=5;
  helptext = [bodice[i][0]-2,bodice[i][1]+2];
  textline = textlinegen(helptext,'TriangleSouth')
    stringline = stringline.concat(textline);        
  helptext = [bodice[i][0]-13,  bodice[i][1]+30];
  textline = textlinegen(helptext,'A');
  stringline = stringline.concat(textline);        
  return stringline;
}

function drawbodicew2princess2(bodice,offsetorig,scale){
  bodice=scalepattern(bodice, scale);
  help41 = controlpointpar(bodice[4],bodice[3],bodice[5],-2*scale,-2*scale);
  help5 = controlpointort(bodice[5],bodice[5],bodice[6],2*scale,2*scale);
  newBez = dividebezier(bodice[4],bodice[5],help41,help5,0.1);
  P=newBez.P;
  dart1 = [bodice[6][0]-6*scale*unitvector(bodice[6],bodice[7])[0],
           bodice[6][1]-6*scale*unitvector(bodice[6],bodice[7])[1]];
  dart2 = [bodice[8][0]-6*scale*unitvector(bodice[8],bodice[7])[0],
           bodice[8][1]-6*scale*unitvector(bodice[8],bodice[7])[1]];
  cut1 = [bodice[10][0]-3*scale*unitvector(bodice[10],bodice[9])[0],
          bodice[10][1]-3*scale*unitvector(bodice[10],bodice[9])[1]];
  angle = findangle(bodice[6],bodice[7],bodice[8]);
  rP = rotateAaroundB(P,bodice[7],angle);
  rb4 = rotateAaroundB(bodice[4],bodice[7],angle);
  rb5 = rotateAaroundB(bodice[5],bodice[7],angle);
  
  /*path*/
  var bodice2= new Array();
  bodice2=  [rP,rb5,bodice[9],cut1,dart2];
  var c1 = new Array();
  var c2 = new Array();
  c1[0] = controlpointort(bodice2[0],rb4,bodice2[1],3*scale,3*scale);
  c2[0] = controlpointpar(bodice2[0],rb4,bodice2[0],-3*scale,-3*scale);
  c1[1] = controlpointort(bodice2[1],bodice2[0],bodice2[2],3*scale,3*scale);
  c2[1] = controlpointpar(bodice2[1],bodice2[1],bodice2[2],0*scale,0*scale);/*line*/
  c1[2] = controlpointpar(bodice2[2],bodice2[2],bodice2[1],0*scale,0*scale);/*line*/
  c2[2] = controlpointpar(bodice2[2],bodice2[2],bodice2[3],0*scale,0*scale);/*line*/
  c1[3] = controlpointpar(bodice2[3],bodice2[3],bodice2[2],0*scale,0*scale);/*line*/
  c2[3] = controlpointpar(bodice2[3],bodice2[3],bodice2[4],0*scale,0*scale);/*line*/
  c1[4] = controlpointpar(bodice2[4],bodice2[3],bodice2[0],3*scale,3*scale);
  c2[4] = controlpointpar(bodice2[4],bodice2[3],bodice2[0],-3*scale,-3*scale);
  helptext = [bodice2[2][0]/2-10,(bodice2[1][1]-bodice2[0][1])/2];
  var stringlinep = setstringline(bodice2,c1,c2);
  helpvar = pms(bodice2);
  tpmi = helpvar[0];
  tpma = helpvar[1];
  helptext = [tpmi[0]+15,(tpma[1]+tpmi[1])/2];
  textline =textlinegen(helptext,'Princess Bodice Side Front');
  var stringline = stringlinep.concat(textline);      
  return stringline;
}
