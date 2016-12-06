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
  [0.25*m.Waist,0]
  ];
  return bodice;
}


