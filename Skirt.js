function pointsskirt(m){
	var skirt=[
	[0,m.WaisttoKnee],
	[0,0],
	[0.25*m.Hips+0.5*2.5,0], 
	[0.25*m.Hips+0.5*2.5,m.WaisttoKnee -(m.WaisttoHips)], 
	[0.25*m.Waist+0.5*0.25*(m.Hips-m.Waist),m.WaisttoKnee]
	];
	return skirt;
}

function drawskirt(skirtorig,offsetorig,scale){
var skirt=scalepattern(skirtorig, scale);
/*control points for cubic splines*/
var c1 = $.extend( {}, skirt );
var c2 = $.extend( {}, skirt );
c2[3] = controlpointpar(skirt[3],skirt[3],skirt[2],5*scale,5*scale);
c1[4] = controlpointpar(skirt[4],skirt[3],skirt[4],5*scale,5*scale);

var stringline = setstringline(skirt,c1,c2);
helpvar = pms(skirt);
tpmi = helpvar[0];
tpma = helpvar[1];
helptext = [tpmi[0]+105,(tpma[1]+tpmi[1])/2];
textline =textlinegen(helptext,'Skirt Front/Back');
stringline = stringline.concat(textline); 	
return stringline;
}
