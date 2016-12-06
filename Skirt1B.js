/*-----------------------*/
/* 1A                    */
/*-----------------------*/
function pointsskirt1ab(m){
  var Raise=1; /*change later to table on p.14 Japanese Book*/
  var skirt=[
  [0                ,  m.WaisttoKnee],
  [0                ,  0],
  [0.25*m.Hips              ,  0], 
  [0.25*m.Hips              ,  m.WaisttoKnee -(m.WaisttoHips)], 
  [0.25*m.Hips-0.144*(m.Hips/2+2-(m.Waist/2+0.5))      ,  m.WaisttoKnee+Raise],
  [(0.25*m.Hips)*2/3+0.211/2*(m.Hips/2+2-(m.Waist/2+0.5))    ,  m.WaisttoKnee+Raise*0.3],
  [(0.25*m.Hips)*2/3+0.5            ,  m.WaisttoKnee-(m.WaisttoHips)+5+1/3*(1/2*m.WaisttoHips-5)],
  [(0.25*m.Hips)*2/3-0.211/2*(m.Hips/2+2-(m.Waist/2+0.5))    ,  m.WaisttoKnee+Raise*0.1],
        [(0.25*m.Hips)*1/3-0.5+0.211*(m.Hips/2+2-(m.Waist/2+0.5))  ,  m.WaisttoKnee],
        [(0.25*m.Hips)*1/3+0.211/2*(m.Hips/2+2-(m.Waist/2+0.5))    ,  m.WaisttoKnee-(m.WaisttoHips)+5],
  [(0.25*m.Hips)*1/3-0.5            ,  m.WaisttoKnee]
    ];
  return skirt;
}

function drawskirt1ab(skirtorig,offsetorig,scale){
var skirt=scalepattern(skirtorig, scale);
/*control points for cubic splines*/
/*... + pathpoint(p[i-1]) +' C ' + pathpoint(c2[i-1]) + ' '  + pathpoint(c1[i]) +  ' ' + pathpoint(p[i]) + ...*/
/*function controlpointpar(C,A,B,alpha,beta){var CP = [C[0]+alpha*unitvector(A,B)[0], C[1]+beta*unitvector(A,B)[1]];*/
var c1 = $.extend( {}, skirt );
var c2 = $.extend( {}, skirt );
c2[3] = controlpointpar(skirt[3],skirt[2],skirt[3],-5*scale,-5*scale);
c1[4] = controlpointort(skirt[4],skirt[4],skirt[5],-5*scale,-5*scale);


var stringline = setstringline(skirt,c1,c2);
helpvar = pms(skirt);
tpmi = helpvar[0];
tpma = helpvar[1];
helptext = [tpmi[0]+105,(tpma[1]+tpmi[1])/2];
textline =textlinegen(helptext,'Skirt Back');
stringline = stringline.concat(textline); 
return stringline;
}

/*-----------------------*/
/* 1B                   */
/*-----------------------*/
function pointsskirt1bb(m){
  var skirt = pointsskirt1ab(m);
  skirt[2][0]=skirt[2][0]+2;
  return skirt;
}

function drawskirt1bb(skirtorig,offsetorig,scale){
var skirt=scalepattern(skirtorig, scale);
/*control points for cubic splines*/
var c1 = $.extend( {}, skirt );
var c2 = $.extend( {}, skirt );
c2[3] = controlpointpar(skirt[3],skirt[2],skirt[3],-5*scale,-5*scale);
c1[4] = controlpointort(skirt[4],skirt[4],skirt[5],-5*scale,-5*scale);


var stringline = setstringline(skirt,c1,c2);
helpvar = pms(skirt);
tpmi = helpvar[0];
tpma = helpvar[1];
helptext = [tpmi[0]+105,(tpma[1]+tpmi[1])/2];
textline =textlinegen(helptext,'Skirt Back');
stringline = stringline.concat(textline); 
return stringline;
}

/*-----------------------*/
/* 1C                   */
/*-----------------------*/
function pointsskirt1cb(m){
  var skirt = pointsskirt1ab(m);
  skirt[2][0]=skirt[2][0]-2;
  return skirt;
}

function drawskirt1cb(skirtorig,offsetorig,scale){
var skirt=scalepattern(skirtorig, scale);
/*control points for cubic splines*/
var c1 = $.extend( {}, skirt );
var c2 = $.extend( {}, skirt );
c2[3] = controlpointpar(skirt[3],skirt[2],skirt[3],-5*scale,-5*scale);
c1[4] = controlpointort(skirt[4],skirt[4],skirt[5],-5*scale,-5*scale);


var stringline = setstringline(skirt,c1,c2);
helpvar = pms(skirt);
tpmi = helpvar[0];
tpma = helpvar[1];
helptext = [tpmi[0]+105,(tpma[1]+tpmi[1])/2];
textline =textlinegen(helptext,'Skirt Back');
stringline = stringline.concat(textline); 
return stringline;
}
