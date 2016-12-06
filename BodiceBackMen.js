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


