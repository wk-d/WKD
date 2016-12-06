/*-----------------------*/
/* 1                    */
/*-----------------------*/
/*-----------------------*/
/* Front                    */
/*-----------------------*/
function calculatebodicefrontwomen2(m){
  var DartWidth = 0.5*(m.FullBust - m.UpperChest);
  var DartAngle = Math.asin(DartWidth/20);
  var DartPoint3 = 0.25*m.FullBust+2.5 - 0.25*m.Waist;
  var DartA=0.28*DartPoint3;
  var DartB=0.30*DartPoint3;
  /*Armpit*/
  var pF = [0.5*m.FrontBust+2.5,
  Math.sqrt(m.ArmpittoWaist*m.ArmpittoWaist-0*(0.5*m.FrontBust+2.5-0.25*m.Waist)*(0.5*m.FrontBust+2.5-0.25*m.Waist))];  
  /*SideNeckline*/  
  var pSNL =  [0.5*m.NeckWidth, m.SideFronttoWaist];
  /*Inside Armhole*/
  var pF1 = [0.5*m.ShoulderWidth-2.5,
  Math.sqrt(m.ArmpittoWaist*m.ArmpittoWaist-
  (0.5*m.FrontBust+2.5-0.25*m.Waist)*(0.5*m.FrontBust+2.5-0.25*m.Waist))+
  1./3.*(Math.sqrt((m.CenterFrontWaisttoShoulder)*(m.CenterFrontWaisttoShoulder)-
  0.25*m.ShoulderWidth*m.ShoulderWidth)-(Math.sqrt(m.ArmpittoWaist*m.ArmpittoWaist-
  (0.5*m.FrontBust+2.5-0.25*m.Waist)*(0.5*m.FrontBust+2.5-0.25*m.Waist))))];
  /*Bustpoint*/
  var pH = [0.5*m.BusttoBust, m.SideFronttoWaist-m.SideFronttoBust];
  /*Sidewaistline*/
  var pEt=[0.5*m.FrontBust+2.5,0];
  var pE = rotateAaroundB(pEt,pH,DartAngle);
  /*Shoulderpoint*/
  var pFt = [0.5*m.ShoulderWidth,Math.sqrt((m.CenterFrontWaisttoShoulder)*(m.CenterFrontWaisttoShoulder)-0.25*(m.ShoulderWidth)*(m.ShoulderWidth))];
  var pF2 = rotateAaroundB(pFt,pH,DartAngle);
  /*Beginning of Bottom DartA*/
  var pJ2 = [0.5*m.BusttoBust+0.5*DartA,0];
  /*Dartpoint*/
  var help4 = controlpointort(pFt,pSNL,pFt,-10.,-10.);
  var help5 = controlpointort(pF,pEt,pF,7.,-7.);
  newBez = dividebezier(pFt,pF,help4,help5,0.6);
  pF2 = newBez.P;
  var pF3 = rotateAaroundB(pF2,pH,-DartAngle);
 var pDP = [pH[0]-2.5*unitvector(pH,pF1)[0],pH[1]-2.5*unitvector(pH,pF1)[1]]; 
  var pD2 = [pF3[0]-1.5*unitvector(pF3,pDP)[0],pF3[1]-1.5*unitvector(pF3,pDP)[1]]; ;
  var bodice = new Array();
  bodice=[
    /*CenterWaistline*/[0,0],
    /*CenterNeckline*/ [0,+m.CenterFronttoWaist],
    /*SideNeckline*/   pSNL,
     /*Shoulderpoint*/ pFt,
    /*Inside Armhole*/ pF2,
    /*Dartpoint*/       pDP,
    /*Dartpoint2*/      pF3,
    /*Armpit*/          rotateAaroundB(pF,pH,-DartAngle),
    /*SideWaistline*/   pEt,
    /*Dartposition Waist*/[pD2[0]+0.5*DartB,0],
    /*Dartpoint*/       pD2,
    /*DartPositionWaist2*/[pD2[0]-0.5*DartB,0],
    /*Dartposition Waist*/pJ2,
    /*Dartpoint*/       [0.5*m.BusttoBust, m.SideFronttoWaist - m.SideFronttoBust -3],
    /*DartPositionWaist2*/[0.5*m.BusttoBust-0.5*DartA,0],
        
  [0,0],
  [0,-m.WaisttoHips],
  [0.5*m.FrontBust + 2.5,-m.WaisttoHips],
  [0.5*m.FrontBust + 2.5,0]
  ];
  return bodice;
  }

function drawbodicew2(bodice,offsetorig,scale){

bodice=scalepattern(bodice, scale);

 helpvar = pms(bodice);
/*control points for cubic splines*/
var c1 = $.extend( {}, bodice );
var c2 = $.extend( {}, bodice );

/*neckline*/
c2[1] = controlpointort(bodice[1],bodice[0],bodice[1],5*scale,-5*scale);
c1[2] = controlpointort(bodice[2],bodice[3],bodice[2],-2*scale,-2*scale);
/*armhole*/
c2[3] = controlpointort(bodice[3],bodice[2],bodice[3],10*scale,10*scale);
c1[4] = controlpointpar(bodice[4],bodice[4],bodice[6],0.5*scale,0.5*scale);
/*armhole*/  
c2[6] = controlpointpar(bodice[6],bodice[6],bodice[4],0.5*scale,0.5*scale);
c1[7] = controlpointort(bodice[7],bodice[8],bodice[7],-4*scale,4*scale);
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
textline = textlinegen(helptext,'TriangleSouth')
stringline = stringline.concat(textline);       
helptext = [bodice[i][0]-13,  bodice[i][1]+30];
textline = textlinegen(helptext,'B')
stringline = stringline.concat(textline);       
 i=7;
helptext = [bodice[i][0]-2,bodice[i][1]+2];
textline = textlinegen(helptext,'TriangleSouth')
stringline = stringline.concat(textline);        
helptext = [bodice[i][0]-13,  bodice[i][1]+30];
textline = textlinegen(helptext,'A')
stringline = stringline.concat(textline);        
return stringline;
}

/*-----------------------*/
/* Back                    */
/*-----------------------*/
function calculatebodicebackwomen2(m){
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
  [0.5*m.BackBust + 2.5, 0],
        
  [pW[0] + 0.5*DartD, 0],
  [pW[0], m.ArmpittoWaist],
  [pW[0] -0.5*DartD,0],      
 
  [pZ[0]-1.+ 0.5*DartE, 0],
  [pZ[0]-1, m.ArmpittoWaist],
  [pZ[0]-1-0.5*DartE,0],
        
  [0,0],
  [0,-m.WaisttoHips],
  [0.5*m.BackBust + 2.5,-m.WaisttoHips],
  [0.5*m.BackBust + 2.5,0]
  ];
  return bodice;
}

function drawbodiceback2(bodiceorig,offsetorig,scale){
var bodice=scalepattern(bodiceorig, scale);
/*path*/
var c1 = $.extend( {}, bodice );
var c2 = $.extend( {}, bodice );
/*Neckline*/
c2[1] = controlpointort(bodice[1],bodice[0],bodice[1],5*scale,-5*scale);
c1[2] = controlpointort(bodice[2],bodice[3],bodice[2],-2*scale,-2*scale);
/*Armhole*/
c2[6] = controlpointort(bodice[6],bodice[5],bodice[6],10*scale,10*scale);
c1[7] = controlpointort(bodice[7],bodice[8],bodice[7],-7*scale,-7*scale);


var stringline = setstringline(bodice,c1,c2);
helpvar = pms(bodice);
tpmi = helpvar[0];
tpma = helpvar[1];
helptext = [tpmi[0]+105,(tpma[1]+tpmi[1])/2];
textline =textlinegen(helptext,'Bodice Back');
stringline = stringline.concat(textline);   


i=6;
helptext = [bodice[i][0]-2,bodice[i][1]+2];
textline = textlinegen(helptext,'TriangleSouth')
stringline = stringline.concat(textline);       
helptext = [bodice[i][0]-13,  bodice[i][1]+30];
textline = textlinegen(helptext,'B')
stringline = stringline.concat(textline);       
 i=7;
helptext = [bodice[i][0]-2,bodice[i][1]+2];
textline = textlinegen(helptext,'TriangleSouth')
stringline = stringline.concat(textline);        
helptext = [bodice[i][0]-13,  bodice[i][1]+30];
textline = textlinegen(helptext,'C')
stringline = stringline.concat(textline);        
return stringline;
}

/*-----------------------*/
/* 1A                    */
/*-----------------------*/
function calculatebodicefrontwomen1a(m){
  var bodice = calculatebodicefrontwomen2(m);
  bodice.splice(9, 6);
  return bodice;
  }

function calculatebodicebackwomen1a(m){
  var bodice = calculatebodicebackwomen2(m);
  bodice.splice(9, 6);
  return bodice;
  }
/*-----------------------*/
/* 1B                    */
/*-----------------------*/
function calculatebodicefrontwomen1b(m){
  var bodice = calculatebodicefrontwomen1a(m);
  bodice[11][0]=bodice[11][0]+1;
  bodice[12]=bodice[10];
  bodice.splice(8, 3);
  return bodice;
  }

function calculatebodicebackwomen1b(m){
  var bodice = calculatebodicebackwomen1a(m);
  bodice[11][0]=bodice[11][0]+1;
  bodice[12]=bodice[10];
  bodice.splice(8, 3);
  return bodice;
  }

/*-----------------------*/
/* 2C                    */
/*-----------------------*/
function calculatebodicefrontwomen2c(m){
  var bodice = calculatebodicefrontwomen2(m);
  bodice.splice(9, 3);
  bodice[8][0]=bodice[8][0]-1;
  bodice[14][0]=bodice[14][0]+1;
  bodice[15][0]=bodice[15][0]-1;
  bodice[16]=[bodice[9][0],bodice[9][1]];
  bodice[17]=[bodice[10][0],-0.75*m.WaisttoHips];
  bodice[18]=[bodice[11][0],bodice[11][1]];
return bodice;
  }

function calculatebodicebackwomen2c(m){
  var bodice = calculatebodicebackwomen2(m);
  bodice.splice(9, 3);
  bodice[8][0]=bodice[8][0]-1;
  bodice[14][0]=bodice[14][0]+1;
  bodice[15][0]=bodice[15][0]-1;
  bodice[16]=[bodice[9][0],bodice[9][1]];
  bodice[17]=[bodice[10][0],-0.75*m.WaisttoHips];
  bodice[18]=[bodice[11][0],bodice[11][1]];

  return bodice;
  }

/*-----------------------*/
/* 2D                    */
/*-----------------------*/
function calculatebodicefrontwomen2d(m){
  var bodice = calculatebodicefrontwomen2(m);
    bodice[10][1]=bodice[13][1];
   bodice[8][0]=bodice[8][0]-1.5;
  bodice[17][0]=bodice[17][0]+1;
  bodice[18][0]=bodice[18][0]-1.5;
  bodice[19]=[bodice[9][0],bodice[9][1]];
  bodice[20]=[bodice[10][0],-0.75*m.WaisttoHips];
  bodice[21]=[bodice[11][0],bodice[11][1]];
  bodice[22]=[bodice[12][0],bodice[12][1]];
  bodice[23]=[bodice[13][0],-0.75*m.WaisttoHips];
  bodice[24]=[bodice[14][0],bodice[14][1]];
return bodice;
  }

function calculatebodicebackwomen2d(m){
  var bodice = calculatebodicebackwomen2(m);
  bodice[10][1]=bodice[13][1];
  bodice[9][0]=bodice[10][0];
  bodice[10][0]=bodice[9][0]+(bodice[11][0]-bodice[9][0])/2;
  bodice[8][0]=bodice[8][0]-1.5;
  bodice[17][0]=bodice[17][0]+1;
  bodice[18][0]=bodice[18][0]-1.5;
  bodice[19]=[bodice[9][0],bodice[9][1]];
  bodice[20]=[bodice[10][0],-0.75*m.WaisttoHips];
  bodice[21]=[bodice[11][0],bodice[11][1]];
  bodice[22]=[bodice[12][0],bodice[12][1]];
  bodice[23]=[bodice[13][0],-0.75*m.WaisttoHips];
  bodice[24]=[bodice[14][0],bodice[14][1]];
 return bodice;
  }

/*-----------------------*/
/* 3E                    */
/*-----------------------*/

function calculatebodicefrontwomen3e1(m){
  var bodice = calculatebodicefrontwomen2c(m);
  var bodice1 = new Array();
  bodice1[0]=bodice[0];
  bodice1[1]=bodice[1];
  bodice1[2]=bodice[2];
  bodice1[3]=[bodice[2][0]+0.5*(bodice[3][0]-bodice[2][0]),bodice[2][1]+0.5*(bodice[3][1]-bodice[2][1])];
  bodice1[4]=bodice[5];
  bodice1[5]=bodice[11];
  bodice1[6]=[bodice[10][0],bodice[14][1]];
  bodice1[7]=bodice[13];
return bodice1;
  }

function calculatebodicefrontwomen3e2(m){
  var DartWidth = 0.5*(m.FullBust - m.UpperChest);
  var DartAngle = Math.asin(DartWidth/20);
  var bodice = calculatebodicefrontwomen2c(m);
  var bodice1 = new Array();
  bodice1[0]=bodice[9];
  bodice1[1]=[bodice[5][0],bodice[5][1]];
  help1=[bodice[2][0]+0.5*(bodice[3][0]-bodice[2][0]),bodice[2][1]+0.5*(bodice[3][1]-bodice[2][1])]
  bodice1[2]=rotateAaroundB(help1,bodice1[1],-DartAngle);
  bodice1[3]=rotateAaroundB(bodice[3],bodice1[1],-DartAngle); 
  /*bodice1[4]=rotateAaroundB(bodice[4],bodice1[1],-DartAngle);*/
  bodice1[4]=bodice[7];
  bodice1[5]=bodice[8];
  bodice1[6]=bodice[14];
  bodice1[7]=[bodice[10][0],bodice[14][1]];
return bodice1;
  }


function drawbodicew3e1(bodice,offsetorig,scale){

bodice=scalepattern(bodice, scale);
helpvar = pms(bodice);
/*control points for cubic splines*/
var c1 = $.extend( {}, bodice );
var c2 = $.extend( {}, bodice );

/*neckline*/
c2[1] = controlpointort(bodice[1],bodice[0],bodice[1],5*scale,-5*scale);
c1[2] = controlpointort(bodice[2],bodice[3],bodice[2],-2*scale,-2*scale);
/*princessline1*/
c2[3] = controlpointort(bodice[3],bodice[2],bodice[3],5*scale,5*scale);
c1[4] = controlpointpar(bodice[4],bodice[5],bodice[4],0*scale,0*scale);
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
textline = textlinegen(helptext,'TriangleSouth')
stringline = stringline.concat(textline);       
helptext = [bodice[i][0]-13,  bodice[i][1]+30];
textline = textlinegen(helptext,'B')
stringline = stringline.concat(textline);       
 i=7;
helptext = [bodice[i][0]-2,bodice[i][1]+2];
textline = textlinegen(helptext,'TriangleSouth')
stringline = stringline.concat(textline);        
helptext = [bodice[i][0]-13,  bodice[i][1]+30];
textline = textlinegen(helptext,'A')
stringline = stringline.concat(textline);        
return stringline;
}

function drawbodicew3e2(bodice,offsetorig,scale){

bodice=scalepattern(bodice, scale);
helpvar = pms(bodice);
/*control points for cubic splines*/
var c1 = $.extend( {}, bodice );
var c2 = $.extend( {}, bodice );
/*princessline1*/
c2[1] = controlpointpar(bodice[1],bodice[0],bodice[1],0*scale,0*scale);
 c1[2] = controlpointort(bodice[2],bodice[3],bodice[2],-5*scale,-5*scale);

/*armhole*/
c2[3] = controlpointort(bodice[3],bodice[2],bodice[3],10*scale,10*scale);
/*c1[4] = controlpointort(bodice[4],bodice[3],bodice[4],0*scale,-0*scale);
/*armhole*/  
/*c2[4] = controlpointort(bodice[4],bodice[3],bodice[4],0*scale,0*scale);
c1[5] = controlpointort(bodice[5],bodice[6],bodice[5],-3*scale,3*scale);*/
c1[4] = controlpointort(bodice[4],bodice[5],bodice[4],-7*scale,7*scale);
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
textline = textlinegen(helptext,'TriangleSouth')
stringline = stringline.concat(textline);       
helptext = [bodice[i][0]-13,  bodice[i][1]+30];
textline = textlinegen(helptext,'B')
stringline = stringline.concat(textline);       
 i=7;
helptext = [bodice[i][0]-2,bodice[i][1]+2];
textline = textlinegen(helptext,'TriangleSouth')
stringline = stringline.concat(textline);        
helptext = [bodice[i][0]-13,  bodice[i][1]+30];
textline = textlinegen(helptext,'A')
stringline = stringline.concat(textline);        
return stringline;
}


