/*function not used, calculatebodicebackwomen and men is used instead*/
function calculatebodiceback(m){
  var bodice=[
  [0,0],
  [0,+m.CenterBack],
  [0.5*m.NeckWidth, m.SideBack],
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

function drawbodicem(bodice,offsetorig){
var scale=25.;
bodice=scalepattern(bodice, scale);
[pmi,pma]=pms(bodice);
var offset = [-pmi[0]+5, -pmi[1]+5+offsetorig];
for ( var i=0;i<=bodice.length-1; ++i ){
  bodice[i][0] += offset[0];
  bodice[i][1] += offset[1];
}
/*control points for cubic splines*/
help1 = controlpointort(bodice[1],bodice[0],bodice[1],5*scale,-5*scale);
help2 = controlpointort(bodice[2],bodice[3],bodice[2],-2*scale,-2*scale);
help3 = controlpointort(bodice[3],bodice[2],bodice[3],1*scale,-1*scale);
help4 = controlpointpar(bodice[4],bodice[3],bodice[5],2*scale,2*scale);
help5 = controlpointort(bodice[5],bodice[5],bodice[6],2*scale,2*scale);
/*path*/
var stringline = 
'M ' + pathpoint(bodice[0]) + 
' L ' + pathpoint(bodice[1]) + 
' C ' + pathpoint(help1) + ' ' + pathpoint(help2) +  ' ' + pathpoint(bodice[2]) +
' L ' + pathpoint(bodice[3]) + 
' C ' + pathpoint(help3) + ' ' + pathpoint(help4) + ' ' + pathpoint(bodice[4]) +
' S ' + pathpoint(help5) + ' ' + pathpoint(bodice[5]) +
' L ' + pathpoint(bodice[6]) + 
' Z ';
return stringline;
}