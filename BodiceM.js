/*-----------------------*/
/* Front                    */
/*-----------------------*/
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

function drawbodicem(bodice,offsetorig,scale){
bodice=scalepattern(bodice, scale);
/*path*/
var c1 = $.extend( {}, bodice );
var c2 = $.extend( {}, bodice );

/*neckline*/
c2[1] = controlpointort(bodice[1],bodice[0],bodice[1],5*scale,-5*scale);
c1[2] = controlpointort(bodice[2],bodice[3],bodice[2],-2*scale,-2*scale);
/*armhole*/
c2[3] = controlpointort(bodice[3],bodice[3],bodice[2],-3*scale,-3*scale);
c1[4] = controlpointpar(bodice[4],bodice[3],bodice[5],3*scale,3*scale);
/*armhole*/
c2[4] = controlpointpar(bodice[4],bodice[3],bodice[5],-3*scale,-3*scale);
c1[5] = controlpointort(bodice[5],bodice[6],bodice[5],-1*scale,1*scale);
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
 i=5;
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
function calculatebodicebackmen(m){
  var bodice=[
  [0,0],
  [0,+m.CenterBack],
  [0.5*m.NeckWidth, m.SideBack],
  [0.5*m.ShoulderWidth,
  Math.sqrt(m.CenterBackWaisttoShoulder*m.CenterBackWaisttoShoulder
  - 0.25*m.ShoulderWidth*m.ShoulderWidth)],
  [0.25*m.Chest + 2.5,
     Math.sqrt(m.ArmpittoWaist*m.ArmpittoWaist -
     (0.25*m.Chest+2.5-(0.25*m.Waist+2.5*1.5))*(0.25*m.Chest+2.5-(0.25*m.Waist+2.5*1.5)))],
  [(0.25*m.Waist+2.5*1.5), 0]
  ];
  return bodice;
}

function drawbodiceback(bodice,offsetorig,scale){
bodice=scalepattern(bodice, scale);
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
