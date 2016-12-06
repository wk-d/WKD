/*-----------------------*/
/* 1A                    */
/*-----------------------*/
function pointsskirt1af(m){
	var Raise=1; /*change later to table on p.14 Japanese Book*/
	var skirt=[
	[0,m.WaisttoKnee],
	[0,0],
	[0.25*m.Hips+2,0], 
	[0.25*m.Hips+2,m.WaisttoKnee -(m.WaisttoHips)], 
	[0.25*m.Hips+2-0.144*(m.Hips/2+2-(m.Waist/2+0.5)),m.WaisttoKnee+Raise],
	[(0.25*m.Hips+2)*2/3,m.WaisttoKnee+Raise*0.3],
	[(0.25*m.Hips+2)*2/3-0.178/2*(m.Hips/2+2-(m.Waist/2+0.5)),m.WaisttoKnee-1/2*(m.WaisttoHips)],
	[(0.25*m.Hips+2)*2/3-0.178*(m.Hips/2+2-(m.Waist/2+0.5)),m.WaisttoKnee+Raise*0.1],
        [(0.25*m.Hips+2)*1/3+0.111*(m.Hips/2+2-(m.Waist/2+0.5)),m.WaisttoKnee],
        [(0.25*m.Hips+2)*1/3+0.111/2*(m.Hips/2+2-(m.Waist/2+0.5)),m.WaisttoKnee-1/2*(m.WaisttoHips)],
	[(0.25*m.Hips+2)*1/3,m.WaisttoKnee]
		];
	return skirt;
}

function drawskirt1af(skirtorig,offsetorig,scale){
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
textline =textlinegen(helptext,'Skirt Front');
stringline = stringline.concat(textline); 
return stringline;
}

/*-----------------------*/
/* 1B                    */
/*-----------------------*/
function pointsskirt1bf(m){
	var skirt = pointsskirt1af(m);
	skirt[2][0]=skirt[2][0]+2;
	return skirt;

}

function drawskirt1bf(skirtorig,offsetorig,scale){
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
textline =textlinegen(helptext,'Skirt Front');
stringline = stringline.concat(textline); 
return stringline;
}

/*-----------------------*/
/* 1C                    */
/*-----------------------*/
function pointsskirt1cf(m){
	var skirt = pointsskirt1af(m);
	skirt[2][0]=skirt[2][0]-2;
	return skirt;
}

function drawskirt1cf(skirtorig,offsetorig,scale){
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
textline =textlinegen(helptext,'Skirt Front');
stringline = stringline.concat(textline); 
return stringline;
}

/*-----------------------*/
/* 2G                    */
/*-----------------------*/
function pointsskirt2gf(m){
	var skirt = pointsskirt1af(m);
        var Angle = Math.asin(3/(m.WaisttoKnee-m.WaisttoHips/2)); 
        /*var Angle = Math.asin(0.111*(m.Hips/2+2-(m.Waist/2+0.5))/(m.WaisttoHips/2)); 
		skirt[2][0]=skirt[2][0]+1.5; this would be 3i*/
for ( var i=2;i<=8; ++i ){
	skirt[i]=rotateAaroundB(skirt[i],skirt[9],Angle);
}
        /*var Angle = Math.asin(0.178*(m.Hips/2+2-(m.Waist/2+0.5))/(m.WaisttoHips/2)); this would be 3i*/
for ( var i=2;i<=5; ++i ){
	skirt[i]=rotateAaroundB(skirt[i],skirt[6],Angle);
}

	return skirt;
}

function drawskirt2gf(skirtorig,offsetorig,scale){
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
textline =textlinegen(helptext,'Skirt Front');
stringline = stringline.concat(textline); 
return stringline;
}

