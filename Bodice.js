function calculatebodicefrontmen(m){
  var bodice=[
  [0,0],
  [0,+m.CenterFronttoWaist],
  [0.5*m.NeckWidth, m.SideFronttoWaist],
  [0.5*m.ShoulderWidth,
  Math.sqrt(m.CenterFrontWaisttoShoulder*m.CenterFrontWaisttoShoulder 
  - 0.25*m.ShoulderWidth*m.ShoulderWidth)],
  [0.5*m.ShoulderWidth,
  Math.sqrt(m.CenterFrontWaisttoShoulder*m.CenterFrontWaisttoShoulder - 0.25*m.ShoulderWidth*m.ShoulderWidth)-2/3*
  (Math.sqrt(m.CenterFrontWaisttoShoulder*m.CenterFrontWaisttoShoulder - 0.25*m.ShoulderWidth*m.ShoulderWidth)-Math.sqrt(m.ArmpittoWaist*m.ArmpittoWaist - 
  (0.25*m.Chest+2.5-0.25*m.Waist)*(0.25*m.Chest+2.5-0.25*m.Waist)))
  ],
  [0.25*m.Chest + 2.5, 
     Math.sqrt(m.ArmpittoWaist*m.ArmpittoWaist - (0.25*m.Chest+2.5-0.25*m.Waist)*(0.25*m.Chest+2.5-0.25*m.Waist))],
  [0.25*m.Waist, 0]
  ];
  return bodice;
}

function drawbodicem(bodiceorig,offsetorig,scale){
var bodice=scalepattern(bodiceorig, scale);
/*path*/
var c1 = new Array();
var c2 = new Array();
c1[0] = controlpointpar(bodice[0],bodice[0],bodice[6],0*scale,0*scale);/*line*/
c2[0] = controlpointpar(bodice[0],bodice[0],bodice[1],0*scale,0*scale);/*line*/
c1[1] = controlpointpar(bodice[1],bodice[1],bodice[0],0*scale,0*scale);/*line*/
c2[1] = controlpointort(bodice[1],bodice[0],bodice[1],5*scale,-5*scale);
c1[2] = controlpointort(bodice[2],bodice[3],bodice[2],-2*scale,-2*scale);
c2[2] = controlpointpar(bodice[2],bodice[2],bodice[3],0*scale,0*scale);/*line*/
c1[3] = controlpointpar(bodice[3],bodice[3],bodice[2],0*scale,0*scale);/*line*/
c2[3] = controlpointort(bodice[3],bodice[3],bodice[2],-3*scale,-3*scale);
c1[4] = controlpointpar(bodice[4],bodice[3],bodice[5],3*scale,3*scale);
c2[4] = controlpointpar(bodice[4],bodice[3],bodice[5],-3*scale,-3*scale);
c1[5] = controlpointort(bodice[5],bodice[6],bodice[5],-1*scale,1*scale); 
c2[5] = controlpointpar(bodice[5],bodice[5],bodice[6],0*scale,0*scale);
c1[6] = controlpointpar(bodice[6],bodice[6],bodice[5],0*scale,0*scale);
c2[6] = controlpointpar(bodice[6],bodice[6],bodice[0],0*scale,0*scale);
var stringline = setstringline(bodice,c1,c2);
helpvar = pms(bodice);
tpmi = helpvar[0];
tpma = helpvar[1];
helptext = [tpmi[0]+105,(tpma[1]+tpmi[1])/2];
textline =textlinegen(helptext,'Bodice Front');
stringline = stringline.concat(textline);   
i=3;
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

function drawbodiceback(bodiceorig,offsetorig,scale){
var bodice=scalepattern(bodiceorig, scale);
/*path*/
var c1 = new Array();
var c2 = new Array();
c1[0] = controlpointpar(bodice[0],bodice[0],bodice[8],0*scale,0*scale);/*line*/

c2[0] = controlpointpar(bodice[0],bodice[0],bodice[1],0*scale,0*scale);/*line*/
c1[1] = controlpointpar(bodice[1],bodice[1],bodice[0],0*scale,0*scale);/*line*/
c2[1] = controlpointort(bodice[1],bodice[0],bodice[1],5*scale,-5*scale);
c1[2] = controlpointort(bodice[2],bodice[3],bodice[2],-2*scale,-2*scale);
c2[2] = controlpointpar(bodice[2],bodice[2],bodice[3],0*scale,0*scale);/*line*/
c1[3] = controlpointpar(bodice[3],bodice[3],bodice[2],0*scale,0*scale);/*line*/

c2[3] = controlpointpar(bodice[3],bodice[3],bodice[4],0*scale,0*scale);/*line*/
c1[4] = controlpointpar(bodice[4],bodice[4],bodice[3],0*scale,0*scale);/*line*/

c2[4] = controlpointpar(bodice[4],bodice[4],bodice[5],0*scale,0*scale);/*line*/
c1[5] = controlpointpar(bodice[5],bodice[5],bodice[4],0*scale,0*scale);/*line*/

c2[5] = controlpointpar(bodice[5],bodice[5],bodice[6],0*scale,0*scale);/*line*/
c1[6] = controlpointpar(bodice[6],bodice[6],bodice[5],0*scale,0*scale);/*line*/

c2[6] = controlpointort(bodice[6],bodice[5],bodice[6],10*scale,10*scale);
c1[7] = controlpointort(bodice[7],bodice[8],bodice[7],-7*scale,-7*scale);

c2[7] = controlpointpar(bodice[7],bodice[7],bodice[8],0*scale,0*scale);
c1[8] = controlpointpar(bodice[8],bodice[8],bodice[7],0*scale,0*scale);
c2[8] = controlpointpar(bodice[8],bodice[8],bodice[0],0*scale,0*scale);


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


