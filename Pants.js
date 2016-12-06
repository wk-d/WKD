/*pants women and men */
function calculatepantsfrontmen(m){
	var pants=[
	/*0 thigh inside*/[-.25*m.Thigh,+m.Inseam], 
	/*1 bottom inside*/[-10,0],
	/*2 floor middle*/[0,0],
	/*3 floor outside*/[10,0],
	/*4 thigh outside*/[.25*m.Thigh,+m.Inseam],
	/*5 hips outside*/[-0.125*m.Waist + 0.25*m.Hips,+m.WaisttoFloor - m.WaisttoHips], 
	/*6 waist outside*/[0.125*m.Waist,+m.WaisttoFloor], 
	/*7 waist inside*/[-0.125*m.Waist,+m.WaisttoFloor], 
	/*8 bottom of fly*/[-0.125*m.Waist, +m.Inseam + 5],
	/*9 knee*/[0,+m.WaisttoFloor - m.WaisttoKnee], 
	/*10 knee*/[0,+m.WaisttoFloor - m.WaisttoKnee]
	];
	/*adjust x of thigh inside*/ pants[0][0] = Math.min(pants[0][0], pants[8][0] - 5);
	/*adjust x of thigh outside*/pants[4][0] = Math.max(pants[4][0], pants[5][0]);
	
	return pants;
}
function calculatepantsbackmen(m){
	/*rotation to adjust for backside*/ 
	var Angle = Math.atan(4/(0.25*m.Hips+5)); 
	var pants=[
	/*0 thigh inside*/[-.25*m.Thigh-4,+m.Inseam], 
	/*1 floor inside*/[-10,0],
	/*2 floor middle*/[0,0],
	/*3 floor outside*/[10,0],
	/*4 thigh outside*/[.25*m.Thigh+4,+m.Inseam],
	/*5 hips outside*/[-0.125*m.Waist + 0.25*m.Hips+5,+m.WaisttoFloor - m.WaisttoHips], 
	/*6 waist outside*/[0.125*m.Waist,+m.WaisttoFloor],
    /*7 waist inside*/[-0.125*m.Waist,+m.WaisttoFloor], 
	/*8*/[-0.125*m.Waist, +m.Inseam + 8], 
	/*9 knee*/[0,+m.WaisttoFloor - m.WaisttoKnee], 
	/*10 knee*/[0,+m.WaisttoFloor - m.WaisttoKnee]
	];
    /*adjust x of thigh inside*/ pants[0][0] = Math.min(pants[0][0], pants[8][0] - 5);
	/*adjust x of thigh outside*/pants[4][0] = Math.max(pants[4][0], pants[5][0]);
	/*rotate waist part */
	pants[6]=rotateAaroundB(pants[6],pants[5],-Angle);
	pants[7]=rotateAaroundB(pants[7],pants[5],-Angle);
	pants[8]=rotateAaroundB(pants[8],pants[5],-Angle);
	return pants;
}
function calculatepantsfrontwomen(m){
	/*outer seam of women's pants shifte 2cm to the back*/
	var pants=[
	/*0 thigh inside*/[-.25*m.Thigh,+m.Inseam], 
	/*1 floor inside*/[-10,0],
	/*2 floor middle*/[0,0],
	/*3 floor outside*/[10+2,0],
	/*4 thigh outside*/[2+.25*m.Thigh,+m.Inseam],
	/*5 hips outside*/[2-0.125*m.Waist + 0.25*m.Hips,+m.WaisttoFloor - m.WaisttoHips], 
	/*6 waist outside*/[2+0.125*m.Hips,+m.WaisttoFloor], 
	/*7 waist inside*/[-0.125*m.Waist,+m.WaisttoFloor], 
	/*8 fly*/[-0.125*m.Waist, +m.Inseam + 5],
	/*knee*/[0,+m.WaisttoFloor - m.WaisttoKnee], 
	/*knee*/[0,+m.WaisttoFloor - m.WaisttoKnee]
	];
	/*adjust x of thigh inside*/ pants[0][0] = Math.min(pants[0][0], pants[8][0] - 4.5);
	/*adjust x of thigh outside*/pants[4][0] = Math.max(pants[4][0], pants[5][0]);
	return pants;
}
function calculatepantsbackwomen(m){
	/*outer seam of women's pants shifte 2cm to the back*/
	/*rotation to adjust for backside*/ var Angle = Math.atan(4/(0.25*m.Hips+4)); 
	var pants=[
	/*0 thigh inside*/[-.25*m.Thigh-4,+m.Inseam], 
	/*1 floor inside*/[-10,0],
	/*2 floor middle*/[0,0],
	/*3 floor outside*/[10-2,0],
	/*4 thigh outside*/[.25*m.Thigh-2+4,+m.Inseam],
	/*5 hips outside*/[-0.125*m.Waist + 0.25*m.Hips-2+4,+m.WaisttoFloor - m.WaisttoHips], 
	/*6 waist outside*/[-2+0.125*m.Hips,+m.WaisttoFloor],
    /*7 waist inside*/[-0.125*m.Waist,+m.WaisttoFloor], 
	/*8*/[-0.125*m.Waist, +m.Inseam + 8], 
	/*knee*/[0,+m.WaisttoFloor - m.WaisttoKnee], 
	/*knee*/[0,+m.WaisttoFloor - m.WaisttoKnee]
	];
	/*adjust x of thigh inside*/ pants[0][0] = Math.min(pants[0][0], pants[8][0] - 5);
	/*adjust x of thigh outside*/pants[4][0] = Math.max(pants[4][0], pants[5][0]);
	/*rotate waist part*/
	pants[6]=rotateAaroundB(pants[6],pants[5],-Angle);
	pants[7]=rotateAaroundB(pants[7],pants[5],-Angle);
	pants[8]=rotateAaroundB(pants[8],pants[5],-Angle);
	
	return pants;
}


function drawpantsfront(pantsorig,offsetorig,scale){
var pants=scalepattern(pantsorig, scale);
/*[pmi,pma]=pms(pants);
var offset = [-pmi[0]+5, -pmi[1]+5+offsetorig];
for ( var i=0;i<=pants.length-1; ++i ){
	pants[i][0] += offset[0];
	pants[i][1] += offset[1];
}*/
/*control points for cubic splines*/
var c1 = new Array();
var c2 = new Array();
c1[0] = controlpointort(pants[0],pants[0],pants[1],-3*scale,+3*scale);
c2[0] = controlpointpar(pants[0],pants[0],pants[1],-5*scale,-5*scale);
c1[1] = controlpointpar(pants[1],pants[1],pants[0],-5*scale,-5*scale);
c2[1] = controlpointpar(pants[1],pants[1],pants[2],-5*scale,-5*scale);
c1[2] = controlpointpar(pants[2],pants[2],pants[1],-5*scale,-5*scale);
c2[2] = controlpointpar(pants[2],pants[2],pants[3],-5*scale,-5*scale);
c1[3] = controlpointpar(pants[3],pants[3],pants[2],-5*scale,-5*scale);
c2[3] = controlpointpar(pants[3],pants[3],pants[4],-5*scale,-5*scale);
c1[4] = controlpointpar(pants[4],pants[4],pants[3],-5*scale,-5*scale);
c2[4] = controlpointpar(pants[4],pants[3],pants[4],-5*scale,-5*scale);
c1[5] = controlpointpar(pants[5],pants[6],pants[4],-5*scale,-5*scale);
c2[5] = controlpointpar(pants[5],pants[6],pants[4],+5*scale,+5*scale);
c1[6] = controlpointpar(pants[6],pants[6],pants[5],-5*scale,-5*scale);
c2[6] = controlpointpar(pants[6],pants[6],pants[7],-5*scale,-5*scale);
c1[7] = controlpointpar(pants[7],pants[7],pants[6],-5*scale,-5*scale);
c2[7] = controlpointpar(pants[7],pants[7],pants[8],-5*scale,-5*scale);
c1[8] = controlpointpar(pants[8],pants[8],pants[7],-5*scale,-5*scale);
c2[8] = controlpointpar(pants[8],pants[8],pants[7],+3*scale,+3*scale);

/*NEW*/
/*c1[0] = cp(o,0,0,1,-3,+3);
c2[0] = cp(p,0,0,1,-5,-5);
c1[1] = cp(p,1,1,0,-5,-5);*/
c2[1] = controlpointpar(pants[1],pants[1],pants[2],-5*scale,-5*scale);
c1[2] = controlpointpar(pants[2],pants[2],pants[1],-5*scale,-5*scale);
c2[2] = controlpointpar(pants[2],pants[2],pants[3],-5*scale,-5*scale);
c1[3] = controlpointpar(pants[3],pants[3],pants[2],-5*scale,-5*scale);
c2[3] = controlpointpar(pants[3],pants[3],pants[4],-5*scale,-5*scale);
c1[4] = controlpointpar(pants[4],pants[4],pants[3],-5*scale,-5*scale);
c2[4] = controlpointpar(pants[4],pants[3],pants[4],-5*scale,-5*scale);
c1[5] = controlpointpar(pants[5],pants[6],pants[4],-5*scale,-5*scale);
c2[5] = controlpointpar(pants[5],pants[6],pants[4],+5*scale,+5*scale);
c1[6] = controlpointpar(pants[6],pants[6],pants[5],-5*scale,-5*scale);
c2[6] = controlpointpar(pants[6],pants[6],pants[7],-5*scale,-5*scale);
c1[7] = controlpointpar(pants[7],pants[7],pants[6],-5*scale,-5*scale);
c2[7] = controlpointpar(pants[7],pants[7],pants[8],-5*scale,-5*scale);
c1[8] = controlpointpar(pants[8],pants[8],pants[7],-5*scale,-5*scale);
c2[8] = controlpointpar(pants[8],pants[8],pants[7],+3*scale,+3*scale);

pantshelp7 = controlpointort(pants[9],pants[9],pants[7],+5*scale,+5*scale);
/*path*/
/*kneeline*/
knee = [[pants[0][0],pants[10][1]],[pants[4][0],pants[10][1]]];
var kneenewl = intersect2lines(knee[0],knee[1],pants[0],pants[1]);
knee[0]=kneenewl;
var kneenewr = intersect2lines(knee[0],knee[1],pants[4],pants[3]);
knee[1]=kneenewr;

var placket = new Array();
placket[0] = [pants[7][0]-1.5*2.5*scale,pants[7][1]]; 
placket[1] = [pants[7][0]-1.5*2.5*scale,pants[7][1]+2.5*5.5*scale]; 
placket[2] = [pants[7][0],pants[7][1]+2.5*7*scale];
rxry = [1.5*2.5*scale,1.5*2.5*scale];
var pocket = new Array();
var pocketc1 = new Array();
var pocketc2 = new Array();
pocket[0]=[pants[6][0]-7*scale,pants[6][1]];
pocket[1]=[pants[6][0]-14*scale,pants[6][1]];
newBez = dividebezier(pants[4],pants[5],c2[4],c1[5],0.5);
pocket[3]=newBez.P;
pocketc2[3]=newBez.C2;
pocketc1[4]=newBez.A2;
pocket[2]=[pocket[1][0],pocket[3][1]];
pocket[4]=pants[5];
newBez2 = dividebezier(pants[5],pants[6],c2[5],c1[6],0.15);
pocketc2[4]=newBez.A1;
pocket[5]=newBez2.P;
pocketc1[5]=newBez.C1;
var stringline = 
'M ' + pathpoint(pants[0]) + 
' C ' + pathpoint(c2[0]) + ' ' + pathpoint(c1[1]) + ' ' + pathpoint(pants[1]) +
' C ' + pathpoint(c2[1]) + ' ' + pathpoint(c1[2]) + ' ' + pathpoint(pants[2]) +
' C ' + pathpoint(c2[2]) + ' ' + pathpoint(c1[3]) + ' ' + pathpoint(pants[3]) +
' C ' + pathpoint(c2[3]) + ' ' + pathpoint(c1[4]) + ' ' + pathpoint(pants[4]) +
' C ' + pathpoint(c2[4]) + ' ' + pathpoint(c1[5]) + ' ' + pathpoint(pants[5]) +
' C ' + pathpoint(pocketc2[4]) + ' ' + pathpoint(pocketc1[5])+ ' ' + pathpoint(pocket[5]) +
' L ' + pathpoint(pocket[0]) +
' L ' + pathpoint(pocket[1]) +
' L ' + pathpoint(pants[7]) +
' C ' + pathpoint(c2[7]) + ' ' + pathpoint(c1[8]) + ' ' + pathpoint(pants[8]) +
' C ' + pathpoint(c2[8]) + ' ' + pathpoint(c1[0]) + ' ' + pathpoint(pants[0]) + 
' M ' + pathpoint(knee[0]) + 
' L ' + pathpoint(knee[1]) + 
' M ' + pathpoint(pants[7]) + 
' L ' + pathpoint(placket[0]) +
' L ' + pathpoint(placket[1]) +
/*' L ' + pathpoint(placket[2]) +*/
' A ' + pathpoint(rxry) + ' 0 0 0 ' + pathpoint(placket[2]) +
'';
pants.splice(6,1);
/*stringlinehelp=allpoints(pants);
stringline = stringline.concat(stringlinehelp);*/
/*draw squares at points of front pocket front*/
i=0;
helptext = [pocket[i][0]-8,pocket[i][1]+12];
textline = textlinegen(helptext,'TriangleNorth')
stringline = stringline.concat(textline); 			
helptext = [pocket[i][0]+4,pocket[i][1]+34];
textline = textlinegen(helptext,'A')
stringline = stringline.concat(textline); 			
i=5;
helptext = [pocket[i][0]-12,pocket[i][1]-2];
textline = textlinegen(helptext,'TriangleEast')
stringline = stringline.concat(textline); 			
helptext = [pocket[i][0]-18,pocket[i][1]+4];
textline = textlinegen(helptext,'B')
stringline = stringline.concat(textline); 			
helpvar = pms(pants);
tpmi = helpvar[0];
tpma = helpvar[1];
helptext = [tpmi[0]+105,(tpma[1]+tpmi[1])/2];
textline =textlinegen(helptext,'Pants Front');
stringline = stringline.concat(textline); 	
/*for (i=0; i<placket.length-1; i++)
{
stringlinehelp = 'M '+pathpoint([placket[i][0]-2,placket[i][1]-2])+
' '+ pathpoint([placket[i][0]-2,placket[i][1]+2])+
' '+ pathpoint([placket[i][0]+2,placket[i][1]+2])+
' '+ pathpoint([placket[i][0]+2,placket[i][1]-2])+
' Z';
stringline = stringline.concat(stringlinehelp); }
i=5;
stringlinehelp = 'M '+pathpoint([pocket[i][0]-2,pocket[i][1]-2])+
' '+ pathpoint([pocket[i][0]-2,pocket[i][1]+2])+
' '+ pathpoint([pocket[i][0]+2,pocket[i][1]+2])+
' '+ pathpoint([pocket[i][0]+2,pocket[i][1]-2])+
' Z';
stringline = stringline.concat(stringlinehelp); 
i=0;
stringlinehelp = 'M '+pathpoint([pocket[i][0]-2,pocket[i][1]-2])+
' '+ pathpoint([pocket[i][0]-2,pocket[i][1]+2])+
' '+ pathpoint([pocket[i][0]+2,pocket[i][1]+2])+
' '+ pathpoint([pocket[i][0]+2,pocket[i][1]-2])+
' Z';
stringline = stringline.concat(stringlinehelp); 
i=1;
stringlinehelp = 'M '+pathpoint([pocket[i][0]-2,pocket[i][1]-2])+
' '+ pathpoint([pocket[i][0]-2,pocket[i][1]+2])+
' '+ pathpoint([pocket[i][0]+2,pocket[i][1]+2])+
' '+ pathpoint([pocket[i][0]+2,pocket[i][1]-2])+
' Z';
stringline = stringline.concat(stringlinehelp); */
return stringline;
}




function drawpantsback(pantsorig,offsetorig,scale){
var pants=scalepattern(pantsorig, scale);
/*[pmi,pma]=pms(pants);
var offset = [-pmi[0]+5, -pmi[1]+5+offsetorig];
for ( var i=0;i<=pants.length-1; ++i ){
	pants[i][0] += offset[0];
	pants[i][1] += offset[1];
}*/
/*control points for cubic splines*/
var c1 = new Array();
var c2 = new Array();
c1[0] = controlpointort(pants[0],pants[0],pants[1],-3*scale,+3*scale);
c2[0] = pants[1];
c1[1] = pants[0];
c2[1] = pants[2];
c1[2] = pants[1];
c2[2] = pants[3];
c1[3] = pants[2];
c2[3] = pants[4];
c1[4] = pants[3];
c2[4] = controlpointpar(pants[4],pants[3],pants[4],-5*scale,-5*scale);
c1[5] = controlpointpar(pants[5],pants[6],pants[4],-5*scale,-5*scale);
c2[5] = controlpointpar(pants[5],pants[6],pants[4],+5*scale,+5*scale);
c1[6] = controlpointpar(pants[6],pants[6],pants[5],-5*scale,-5*scale);
c2[6] = pants[7];
c1[7] = pants[6];
c2[7] = pants[8];
c1[8] = pants[7];
c2[8] = controlpointpar(pants[8],pants[8],pants[7],+3*scale,+3*scale);
pantshelp7 = controlpointort(pants[9],pants[9],pants[7],+5*scale,+5*scale);
/*path*/
/*kneeline*/
knee = [
[pants[0][0],pants[10][1]],
[pants[4][0],pants[10][1]]
];
var kneenewl = intersect2lines(knee[0],knee[1],pants[0],pants[1]);
knee[0]=kneenewl;
var kneenewr = intersect2lines(knee[0],knee[1],pants[4],pants[3]);
knee[1]=kneenewr;

var stringline = 
'M ' + pathpoint(pants[0]) + 
' C ' + pathpoint(c2[0]) + ' ' + pathpoint(c1[1]) + ' ' + pathpoint(pants[1]) +
' C ' + pathpoint(c2[1]) + ' ' + pathpoint(c1[2]) + ' ' + pathpoint(pants[2]) +
' C ' + pathpoint(c2[2]) + ' ' + pathpoint(c1[3]) + ' ' + pathpoint(pants[3]) +
' C ' + pathpoint(c2[3]) + ' ' + pathpoint(c1[4]) + ' ' + pathpoint(pants[4]) +
' C ' + pathpoint(c2[4]) + ' ' + pathpoint(c1[5]) + ' ' + pathpoint(pants[5]) +
' C ' + pathpoint(c2[5]) + ' ' + pathpoint(c1[6]) + ' ' + pathpoint(pants[6]) +
' C ' + pathpoint(c2[6]) + ' ' + pathpoint(c1[7]) + ' ' + pathpoint(pants[7]) +
' C ' + pathpoint(c2[7]) + ' ' + pathpoint(c1[8]) + ' ' + pathpoint(pants[8]) +
' C ' + pathpoint(c2[8]) + ' ' + pathpoint(c1[0]) + ' ' + pathpoint(pants[0]) + 
' M ' + pathpoint(knee[0]) + 
' L ' + pathpoint(knee[1]) + 
'';
/*stringlinehelp=allpoints(pants);
stringline = stringline.concat(stringlinehelp);*/
helpvar = pms(pants);
tpmi = helpvar[0];
tpma = helpvar[1];
helptext = [tpmi[0]+105,(tpma[1]+tpmi[1])/2];
textline =textlinegen(helptext,'Pants Back');
stringline = stringline.concat(textline); 	
return stringline;
}
function drawpantspockets(pantsorig,offsetorig,scale){
var pants=scalepattern(pantsorig, scale);
/*[pmi,pma]=pms(pants);
var offset = [-pmi[0]+5, -pmi[1]+5+offsetorig];
for ( var i=0;i<=pants.length-1; ++i ){
	pants[i][0] += offset[0];
	pants[i][1] += offset[1];
}*/
/*control points for cubic splines*/
var c1 = new Array();
var c2 = new Array();
c1[0] = controlpointort(pants[0],pants[0],pants[1],-3*scale,+3*scale);
c2[0] = pants[1];
c1[1] = pants[0];
c2[1] = pants[2];
c1[2] = pants[1];
c2[2] = pants[3];
c1[3] = pants[2];
c2[3] = pants[4];
c1[4] = pants[3];
c2[4] = controlpointpar(pants[4],pants[3],pants[4],-5*scale,-5*scale);
c1[5] = controlpointpar(pants[5],pants[6],pants[4],-5*scale,-5*scale);
c2[5] = controlpointpar(pants[5],pants[6],pants[4],+5*scale,+5*scale);
c1[6] = controlpointpar(pants[6],pants[6],pants[5],-5*scale,-5*scale);
c2[6] = pants[7];
c1[7] = pants[6];
c2[7] = pants[8];
c1[8] = pants[7];
c2[8] = controlpointpar(pants[8],pants[8],pants[7],+3*scale,+3*scale);
pantshelp7 = controlpointort(pants[9],pants[9],pants[7],+5*scale,+5*scale);
/*path*/
/*kneeline*/
knee = [
[pants[0][0],pants[10][1]],
[pants[4][0],pants[10][1]]
];
var kneenewl = intersect2lines(knee[0],knee[1],pants[0],pants[1]);
knee[0]=kneenewl;
var kneenewr = intersect2lines(knee[0],knee[1],pants[4],pants[3]);
knee[1]=kneenewr;

var placket = new Array();
placket[0] = [pants[7][0]-1.5*2.5*scale,pants[7][1]]; 
placket[1] = [pants[7][0]-1.5*2.5*scale,pants[7][1]+2.5*5.5*scale]; 
placket[2] = [pants[7][0],pants[7][1]+2.5*7*scale];
rxry = [1.5*2.5*scale,1.5*2.5*scale];
var pocket = new Array();
var pocketc1 = new Array();
var pocketc2 = new Array();
pocket[0]=[pants[6][0]-7*scale,pants[6][1]];
pocket[1]=[pants[6][0]-14*scale,pants[6][1]];
newBez = dividebezier(pants[4],pants[5],c2[4],c1[5],0.5);
pocket[3]=newBez.P;
pocketc2[3]=newBez.C2;
pocketc1[4]=newBez.A2;
pocket[2]=[pocket[1][0],pocket[3][1]];
pocket[4]=pants[5];
newBez2 = dividebezier(pants[5],pants[6],c2[5],c1[6],0.15);
pocketc2[4]=newBez2.A1;
pocket[5]=newBez2.P;
pocketc1[5]=newBez2.C1;
pocket[6]=pants[6];
pocketc2[5]=newBez2.C2;
pocketc1[6]=newBez2.A2;
pocketc1[0]=pocket[6];
pocketc2[0]=pocket[1];
pocketc1[1]=pocket[0];
pocketc2[1]=pocket[2];
pocketc1[2]=pocket[1];
pocketc2[2]=pocket[3];
pocketc1[3]=pocket[2];
pocketc2[6]=pocket[0]
/*draw front pocket front*/
var stringline = 
' M ' + pathpoint(pocket[0]) + 
' L ' + pathpoint(pocket[1]) +
' L ' + pathpoint(pocket[2]) +
' L ' + pathpoint(pocket[3]) +
' C ' + pathpoint(pocketc2[3]) + ' ' + pathpoint(pocketc1[4])+ ' ' + pathpoint(pocket[4]) +
' C ' + pathpoint(pocketc2[4]) + ' ' + pathpoint(pocketc1[5])+ ' ' + pathpoint(pocket[5]) +
' L ' + pathpoint(pocket[0]) +
'';
/*draw squares at points of front pocket front*/
i=0;
helptext = [pocket[i][0]-8,pocket[i][1]+12];
textline = textlinegen(helptext,'TriangleNorth')
stringline = stringline.concat(textline); 			
helptext = [pocket[i][0]+4,pocket[i][1]+34];
textline = textlinegen(helptext,'A')
stringline = stringline.concat(textline); 			
i=5;
helptext = [pocket[i][0]-12,pocket[i][1]-2];
textline = textlinegen(helptext,'TriangleEast')
stringline = stringline.concat(textline); 			
helptext = [pocket[i][0]-18,pocket[i][1]+4];
textline = textlinegen(helptext,'B')
stringline = stringline.concat(textline); 			
helpvar = pms(pocket);
tpmi = helpvar[0];
tpma = helpvar[1];
helptext = [tpmi[0]+105,(tpma[1]+tpmi[1])/2];
textline =textlinegen(helptext,'Front Pocket Front');
stringline = stringline.concat(textline); 	
helpvar = pms(pocket);
pmi = helpvar[0];
pma = helpvar[1];
offset2 = pma[1]-pmi[1]+5;
for (var i=0;i<=pocket.length-1; ++i ){
	pocket[i] = [pocket[i][0], pocket[i][1] + offset2];
	pocketc1[i] = [pocketc1[i][0], pocketc1[i][1] + offset2];
	pocketc2[i] = [pocketc2[i][0], pocketc2[i][1] + offset2];
	}
/*draw front pocket back*/
stringlinehelp = 
' M ' + pathpoint(pocket[0]) + 
' L ' + pathpoint(pocket[1]) +
' L ' + pathpoint(pocket[2]) +
' L ' + pathpoint(pocket[3]) +
' C ' + pathpoint(pocketc2[3]) + ' ' + pathpoint(pocketc1[4])+ ' ' + pathpoint(pocket[4]) +
' C ' + pathpoint(pocketc2[4]) + ' ' + pathpoint(pocketc1[5])+ ' ' + pathpoint(pocket[5]) +
' C ' + pathpoint(pocketc2[5]) + ' ' + pathpoint(pocketc1[6])+ ' ' + pathpoint(pocket[6]) +
' L ' + pathpoint(pocket[6]) +
' L ' + pathpoint(pocket[0]) +
'';
stringline = stringline.concat(stringlinehelp);
/*draw squares at points of front pocket back*/
i=0;
helptext = [pocket[i][0]-8,pocket[i][1]+12];
textline = textlinegen(helptext,'TriangleNorth')
stringline = stringline.concat(textline); 			
helptext = [pocket[i][0]+4,pocket[i][1]+34];
textline = textlinegen(helptext,'A')
stringline = stringline.concat(textline); 			
i=5;
helptext = [pocket[i][0]-12,pocket[i][1]-2];
textline = textlinegen(helptext,'TriangleEast')
stringline = stringline.concat(textline); 			
helptext = [pocket[i][0]-18,pocket[i][1]+4];
textline = textlinegen(helptext,'B')
stringline = stringline.concat(textline); 			
helpvar = pms(pocket);
tpmi = helpvar[0];
tpma = helpvar[1];
helptext = [tpmi[0]+105,(tpma[1]+tpmi[1])/2];
textline =textlinegen(helptext,'Front Pocket Back');
stringline = stringline.concat(textline); 	
return stringline;
}
