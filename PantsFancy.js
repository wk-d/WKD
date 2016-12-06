/*-------------------------------------------*/
/*-------------------------------------------*/
function calculatepantsfrontwomenfancy(m){
	var pants = calculatepantsfrontwomen(m);
	/*alterations for loose hip pant*/
	pants[6][0]+=1;
	pants[5][0]+=1.5;
	pants[4][0]+=1;
	pants[7][1]=pants[7][1]-m.WaisttoHips/2;
	pants[6][0]=(pants[6][0]+pants[5][0])/2;
	pants[6][1]=pants[6][1]-m.WaisttoHips/2;
	return pants;
}
/*-------------------------------------------*/
/*-------------------------------------------*/
function calculatepantsbackwomenfancy(m){
	var Angle = Math.atan(4/(0.25*m.Hips+4)); 
	var pants = calculatepantsbackwomen(m);
	/*undo rotate waist part before alterations*/
	pants[6]=rotateAaroundB(pants[6],pants[5],Angle);
	pants[7]=rotateAaroundB(pants[7],pants[5],Angle);
	pants[8]=rotateAaroundB(pants[8],pants[5],Angle);
	/*alterations for loose hip pant*/
	pants[6][0]+=0;
	pants[5][0]+=0.5;
	pants[4][0]+=0;
	pants[7][1]=pants[7][1]-m.WaisttoHips/2;
	pants[6][0]=(pants[6][0]+pants[5][0])/2;
	pants[6][1]=pants[6][1]-m.WaisttoHips/2;
	/*rotate waist part again*/
	pants[6]=rotateAaroundB(pants[6],pants[5],-Angle);
	pants[7]=rotateAaroundB(pants[7],pants[5],-Angle);
	pants[8]=rotateAaroundB(pants[8],pants[5],Angle);	
	return pants;
}
/*-------------------------------------------*/
/*-------------------------------------------*/
function drawpantsfrontfancy(pantsorig,offsetorig,scale){
var pants=scalepattern(pantsorig, scale);
/*helpvar = pms(pants);
pmi = helpvar[0];
pma = helpvar[1];
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

/*-------------------------------------------*/
/*placket*/
/*-------------------------------------------*/

var placket = new Array();
placket[0] = [pants[7][0]-1.5*2.5*scale,pants[7][1]]; 
placket[1] = [pants[7][0]-1.5*2.5*scale,pants[7][1]+2.5*5.5*scale]; 
placket[2] = [pants[7][0],pants[7][1]+2.5*7*scale];
rxry = [1.5*2.5*scale,1.5*2.5*scale];

/*-------------------------------------------*/
/*pocket*/
/*-------------------------------------------*/

var pocket = new Array();
var pocketc1 = new Array();
var pocketc2 = new Array();
pocket[0]=[pants[6][0]-7*scale,pants[6][1]];
pocket[1]=[pants[6][0]-14*scale,pants[6][1]];
pocket[3]=[pants[4][0]+0.1*(pants[3][0]-pants[4][0]),pants[4][1]+0.1*(pants[3][1]-pants[4][1])];
pocket[4]=pants[4];
pocketc2[3]=pocket[4];
pocketc1[4]=controlpointpar(pocket[4],pocket[3],pocket[4],3*scale,3*scale);
pocket[2]=[pocket[1][0],pocket[3][1]];
newBez2 = dividebezier(pants[4],pants[5],c2[4],c1[5],0.02);
pocketc2[4]=newBez.A1;
pocket[5]=newBez2.P;
pocketc1[5]=newBez.C1;
pocketc2[5]=controlpointort(pocket[5],pants[4],pants[5],-3*scale,3*scale);
newBez2 = dividebezier(pants[5],pants[6],c2[5],c1[6],0.75);
pocket[8]=newBez2.P;
pocketc2[8]=newBez2.C2;
pocketc1[8]=controlpointort(pocket[8],pocket[8],pants[6],-3*scale,-3*scale);
phelp = controlpointort(pants[4],pants[4],pocket[8],5*scale,5*scale);
pocket[7]=[0.5*(pants[4][0]+pocket[8][0])-3*scale*unitvector(phelp,pants[4])[0],
0.5*(pants[4][1]+pocket[8][1])-3*scale*unitvector(phelp,pants[4])[1]];
pocketc1[7]=controlpointpar(pocket[7],pants[5],pocket[8],3*scale,+3*scale);
pocketc2[7]=controlpointpar(pocket[7],pants[5],pocket[8],-3*scale,-3*scale);
newBez1=dividebezier(pocket[5],pocket[7],pocketc2[5],pocketc1[7],0.75);
pocket[6]=newBez1.P;
pocketc2[6]=newBez1.C2;
pocketc1[6]=newBez1.C1;
pocketc2[5]=newBez1.A1;
pocketc1[7]=newBez1.A2;
pocketc1help=controlpointort(pocket[6],pants[5],pocket[8],5*scale,5*scale);
pocket[9]=pants[6];
pocketc1[9]=pocket[8];
pocketc2[9]=pocket[0];
pocketc1[0]=pocket[8];
pocketc2[0]=pocket[1];
pocketc1[1]=pocket[0];
pocketc2[1]=pocket[2];
pocketc1[2]=pocket[1];
pocketc2[2]=pocket[3];
pocketc1[3]=pocket[2];
var stringline = 
'M ' + pathpoint(pants[0]) + 
' C ' + pathpoint(c2[0]) + ' ' + pathpoint(c1[1]) + ' ' + pathpoint(pants[1]) +
' C ' + pathpoint(c2[1]) + ' ' + pathpoint(c1[2]) + ' ' + pathpoint(pants[2]) +
' C ' + pathpoint(c2[2]) + ' ' + pathpoint(c1[3]) + ' ' + pathpoint(pants[3]) +
' C ' + pathpoint(c2[3]) + ' ' + pathpoint(c1[4]) + ' ' + pathpoint(pants[4]) +
' C ' + pathpoint(pocketc2[4]) + ' ' + pathpoint(pocketc1[5])+ ' ' + pathpoint(pocket[5]) +
' C ' + pathpoint(pocketc2[5]) + ' ' + pathpoint(pocketc1[6])+ ' ' + pathpoint(pocket[6]) +
' C ' + pathpoint(pocketc2[6]) + ' ' + pathpoint(pocketc1[7])+ ' ' + pathpoint(pocket[7]) +
' C ' + pathpoint(pocketc2[7]) + ' ' + pathpoint(pocketc1[8])+ ' ' + pathpoint(pocket[8]) +
' C ' + pathpoint(pocketc2[8]) + ' ' + pathpoint(pocketc1[9])+ ' ' + pathpoint(pocket[9]) +
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
stringlinehelp=allpoints(pants);
stringline = stringline.concat(stringlinehelp);
for (i=0; i<placket.length-1; i++)
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
stringline = stringline.concat(stringlinehelp); 

return stringline;
}
/*-------------------------------------------*/
/*-------------------------------------------*/
function drawpantsbackfancy(pantsorig,offsetorig,scale){
/*-------------------------------------------*/
/*pants*/
/*-------------------------------------------*/
var pants=scalepattern(pantsorig, scale);
/*helpvar = pms(pants);
pmi = helpvar[0];
pma = helpvar[1];
var offset = [-pmi[0]+5, -pmi[1]+5+offsetorig];
for ( var i=0;i<=pants.length-1; ++i ){
	pants[i][0] += offset[0];
	pants[i][1] += ofPants Women,Waist,Hips,WaisttoHips,WaisttoKnee,WaisttoFloor,Inseam,Thigh,,,,,,,,,,,,,,,
	fset[1];
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

/*-------------------------------------------*/
/*bund*/
/*-------------------------------------------*/

var bund = new Array();
var bundc1 = new Array();
var bundc2 = new Array();
newBez2 = dividebezier(pants[4],pants[5],c2[4],c1[5],0.02);
bund[0]=newBez2.P;
bundc2[0]=newBez2.C2;
bhelp = controlpointpar(pants[7],pants[7],pants[8],scale,scale);
bund[3]=[pants[7][0]+5*scale*unitvector(pants[7],bhelp)[0],pants[7][1]+5*scale*unitvector(pants[7],bhelp)[1]];
bundc1[3]=controlpointort(bund[3],pants[7],pants[8],-20*scale,-20*scale);
newBez1 = dividebezier(bund[0],bund[3],bundc2[0],bundc1[3],0.55);
bund[1]=newBez1.P;
bundc1[1]=newBez1.C1;
bundc2[1]=[bund[1][0]-3*scale,bund[1][1]];
bundc2[0]=newBez1.A1;
newBez3 = dividebezier(bund[0],bund[3],bundc2[0],bundc1[3],0.85);
bund[2]=newBez3.P;
bundc2[2]=newBez3.C2;
bundc1[2]=[bund[2][0],bund[2][1]+3*scale];
bundc1[3]=newBez3.A2;

/*-------------------------------------------*/
/*bund1*/
/*-------------------------------------------*/

var bund1 = new Array();
var bund1c1 = new Array();
var bund1c2 = new Array();
bund1[0]=bund[0];
bund1c2[0]=newBez2.C2;
bund1[1]=bund[3];
bund1c1[1]=controlpointort(bund[3],pants[7],pants[8],-20*scale,-20*scale);
/*-------------------------------------------*/
/*pocket*/
/*-------------------------------------------*/

var pocket = new Array();
var pocketc1 = new Array();
var pocketc2 = new Array();

newBez1 = dividebezier(bund[0],bund[1],bundc2[0],bundc1[1],0.85);
pocket[0]=newBez1.P;
pocketc2[0]=newBez1.C2;
pocket[1]=bund[1];
pocketc1[1]=newBez1.A2;
pocketc2[1]=bundc2[1];
pocket[2]=bund[2];
pocketc1[2]=bundc1[2];
newBez2 = dividebezier(bund[2],bund[3],bundc2[2],bundc1[3],0.15);
pocketc2[2]=newBez2.A1;
pocket[3]=newBez2.P;
pocketc1[3]=newBez2.C1;
pocket[5]= [pants[4][0]-5*scale*unitvector(pants[4],pants[3])[0],pants[4][1]-5*scale*unitvector(pants[4],pants[3])[1]];
pocket[4]=[pocket[3][0],pocket[5][1]];

/*-------------------------------------------*/
/*draw pants and pockets ! still need to separate these*/
/*-------------------------------------------*/


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
' M ' + pathpoint(bund1[0]) + 
' C ' + pathpoint(bund1c2[0]) + ' ' + pathpoint(bund1c1[1]) + ' ' + pathpoint(bund1[1]) + 
' M ' + pathpoint(bund[0]) + 
' C ' + pathpoint(bundc2[0]) + ' ' + pathpoint(bundc1[1]) + ' ' + pathpoint(bund[1]) + 
' C ' + pathpoint(bundc2[1]) + ' ' + pathpoint(bundc1[2]) + ' ' + pathpoint(bund[2]) + 
' C ' + pathpoint(bundc2[2]) + ' ' + pathpoint(bundc1[3]) + ' ' + pathpoint(bund[3]) + 
' M ' + pathpoint(pocket[0]) + 
' C ' + pathpoint(pocketc2[0]) + ' ' + pathpoint(pocketc1[1]) + ' ' + pathpoint(pocket[1]) + 
' C ' + pathpoint(pocketc2[1]) + ' ' + pathpoint(pocketc1[2]) + ' ' + pathpoint(pocket[2]) + 
' C ' + pathpoint(pocketc2[2]) + ' ' + pathpoint(pocketc1[3]) + ' ' + pathpoint(pocket[3]) + 
' L ' + pathpoint(pocket[4]) + 
' L ' + pathpoint(pocket[5]) + 
'';
stringlinehelp=allpoints(pants);
stringline = stringline.concat(stringlinehelp);
return stringline;
}
/*-------------------------------------------*/
/*-------------------------------------------*/
function drawpantspocketsfancy(pantsorig,offsetorig,scale){
var pants=scalepattern(pantsorig, scale);
/*helpvar = pms(pants);
pmi = helpvar[0];
pma = helpvar[1];
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
/*radius of placket bottom */ rxry = [1.5*2.5*scale,1.5*2.5*scale];
var pocket = new Array();
var pocketc1 = new Array();
var pocketc2 = new Array();

pocket[0]=[pants[6][0]-7*scale,pants[6][1]];
pocket[1]=[pants[6][0]-14*scale,pants[6][1]];
pocket[3]=[pants[4][0]+0.1*(pants[3][0]-pants[4][0]),pants[4][1]+0.1*(pants[3][1]-pants[4][1])];
pocket[4]=pants[4];
pocketc2[3]=pocket[4];
pocketc1[4]=controlpointpar(pocket[4],pocket[3],pocket[4],3*scale,3*scale);
pocket[2]=[pocket[1][0],pocket[3][1]];
newBez2 = dividebezier(pants[4],pants[5],c2[4],c1[5],0.02);
pocketc2[4]=newBez.A1;
pocket[5]=newBez2.P;
pocketc1[5]=newBez.C1;
pocketc2[5]=controlpointort(pocket[5],pants[4],pants[5],-3*scale,3*scale);
newBez2 = dividebezier(pants[5],pants[6],c2[5],c1[6],0.75);
pocket[8]=newBez2.P;
pocketc2[8]=newBez2.C2;
pocketc1[8]=controlpointort(pocket[8],pocket[8],pants[6],-3*scale,-3*scale);
phelp = controlpointort(pants[4],pants[4],pocket[8],5*scale,5*scale);
pocket[7]=[0.5*(pants[4][0]+pocket[8][0])-3*scale*unitvector(phelp,pants[4])[0],
0.5*(pants[4][1]+pocket[8][1])-3*scale*unitvector(phelp,pants[4])[1]];
pocketc1[7]=controlpointpar(pocket[7],pants[5],pocket[8],3*scale,+3*scale);
pocketc2[7]=controlpointpar(pocket[7],pants[5],pocket[8],-3*scale,-3*scale);
newBez1=dividebezier(pocket[5],pocket[7],pocketc2[5],pocketc1[7],0.75);
pocket[6]=newBez1.P;
pocketc2[6]=newBez1.C2;
pocketc1[6]=newBez1.C1;
pocketc2[5]=newBez1.A1;
pocketc1[7]=newBez1.A2;
pocketc1help=controlpointort(pocket[6],pants[5],pocket[8],5*scale,5*scale);
pocket[9]=pants[6];
pocketc1[9]=pocket[8];
pocketc2[9]=pocket[0];
pocketc1[0]=pocket[8];
pocketc2[0]=pocket[1];
pocketc1[1]=pocket[0];
pocketc2[1]=pocket[2];
pocketc1[2]=pocket[1];
pocketc2[2]=pocket[3];
pocketc1[3]=pocket[2];
/*-------------------------------------------*/
/*flap*/
/*-------------------------------------------*/

var flap1 = new Array();
var flap1c1 = new Array();
var flap1c2 = new Array();
var flap2 = new Array();
var flap2c1 = new Array();
var flap2c2 = new Array();

flap1[0] = [pocket[6][0]+5*scale*unitvector(pocket[6],pocketc1help)[0],
pocket[6][1]+5*scale*unitvector(pocket[6],pocketc1help)[1]];
flap1c1[0]=pocket[6];
flap1[1]=[pocket[1][0],pocket[1][1]];
flap1c2[0]=flap1[1];
flap1c2[0]=flap1[1];
flap1c1[1]=flap1[0];
flap1[2]=[pocket[9][0]+7*scale,pocket[9][1]];
flap1c2[1]=flap1[2];
flap1c1[2]=flap1[1];
fhelp = 
flap1[3]=[pocket[8][0]+7*scale*unitvector(pocket[8],pocketc1[8])[0],
pocket[8][1]+7*scale*unitvector(pocket[8],pocketc1[8])[1]];
flap1c2[2]=flap1[3];
flap1c1[3]=flap1[2];
flap1c2[3]=pants[8];
flap1c1[4]=[0,0];
flap1c2[4]=[0,0];
flap1c1[5]=[0,0];
flap1c2[5]=[0,0];
flap1[4] = [pocket[6][0]+3*scale*unitvector(pocket[6],pocketc1help)[0],
pocket[6][1]+3*scale*unitvector(pocket[6],pocketc1help)[1]];
fhelp = controlpointort(flap1[4],flap1[0],pocket[6],20*scale,20*scale);
flap1[5] = intersect2lines(flap1[4],fhelp,pants[7],pants[6])

/*draw front pocket front*/
var stringline = 
' M ' + pathpoint(pocket[0]) + 
' L ' + pathpoint(pocket[1]) +
' L ' + pathpoint(pocket[2]) +
' L ' + pathpoint(pocket[3]) +
' C ' + pathpoint(pocketc2[3]) + ' ' + pathpoint(pocketc1[4])+ ' ' + pathpoint(pocket[4]) +
' C ' + pathpoint(pocketc2[4]) + ' ' + pathpoint(pocketc1[5])+ ' ' + pathpoint(pocket[5]) +
' C ' + pathpoint(pocketc2[5]) + ' ' + pathpoint(pocketc1[6])+ ' ' + pathpoint(pocket[6]) +
' C ' + pathpoint(pocketc2[6]) + ' ' + pathpoint(pocketc1[7])+ ' ' + pathpoint(pocket[7]) +
' C ' + pathpoint(pocketc2[7]) + ' ' + pathpoint(pocketc1[8])+ ' ' + pathpoint(pocket[8]) +
' C ' + pathpoint(pocketc2[8]) + ' ' + pathpoint(pocketc1[9])+ ' ' + pathpoint(pocket[9]) +
' Z ';
stringlinehelp = allpoints(pocket);
stringline = stringline.concat(stringlinehelp); 			

helpvar = pms(pocket);
pmi = helpvar[0];
pma = helpvar[1];
offset2 = pma[1]-pmi[1]+5;
for (var i=0;i<=pocket.length-1; ++i ){
	pocket[i] = [pocket[i][0], pocket[i][1] + offset2];
	pocketc1[i] = [pocketc1[i][0], pocketc1[i][1] + offset2];
	pocketc2[i] = [pocketc2[i][0], pocketc2[i][1] + offset2];
	}
	pants[6] = [pants[6][0], pants[6][1] + offset2];
	c2[5] = [c2[5][0], c2[5][1] + offset2];
	c1[6] = [c1[6][0], c1[6][1] + offset2];
	pants[4] = [pants[4][0], pants[4][1] + offset2];
	c2[3] = [c2[3][0], c2[3][1] + offset2];
	c1[4] = [c1[4][0], c1[4][1] + offset2];
	pants[5] = [pants[5][0], pants[5][1] + offset2];
	c2[4] = [c2[4][0], c2[4][1] + offset2];
	c1[5] = [c1[5][0], c1[5][1] + offset2];
for (var i=0;i<=flap1.length-1; ++i ){
	flap1[i] = [flap1[i][0], flap1[i][1] + offset2];
	}
/*draw front pocket back*/

stringlinehelp = 
' M ' + pathpoint(pocket[0]) + 
' L ' + pathpoint(pocket[1]) +
' L ' + pathpoint(pocket[2]) +
' L ' + pathpoint(pocket[3]) +
' L ' + pathpoint(pants[4]) +
' C ' + pathpoint(c2[4]) + ' ' + pathpoint(c1[5])+ ' ' + pathpoint(pants[5]) +
' C ' + pathpoint(c2[5]) + ' ' + pathpoint(c1[6])+ ' ' + pathpoint(pants[6]) +
' L ' + pathpoint(pocket[0]) +
' ';
stringline = stringline.concat(stringlinehelp);
/*pocket.splice(5,5,pants[6]);
stringlinehelp = allpoints(pocket);
stringline = stringline.concat(stringlinehelp);*/


helpvar = pms(pocket);
pmi = helpvar[0];
pma = helpvar[1];
offset2 = pma[1]-pmi[1]+5;
for (var i=0;i<=pocket.length-1; ++i ){
	pocket[i] = [pocket[i][0], pocket[i][1] + offset2];
	pocketc1[i] = [pocketc1[i][0], pocketc1[i][1] + offset2];
	pocketc2[i] = [pocketc2[i][0], pocketc2[i][1] + offset2];
	}
	pants[6] = [pants[6][0], pants[6][1] + offset2];
	c2[5] = [c2[5][0], c2[5][1] + offset2];
	c1[6] = [c1[6][0], c1[6][1] + offset2];
	pants[4] = [pants[4][0], pants[4][1] + offset2];
	c2[3] = [c2[3][0], c2[3][1] + offset2];
	c1[4] = [c1[4][0], c1[4][1] + offset2];
	pants[5] = [pants[5][0], pants[5][1] + offset2];
	c2[4] = [c2[4][0], c2[4][1] + offset2];
	c1[5] = [c1[5][0], c1[5][1] + offset2];
for (var i=0;i<=flap1.length-1; ++i ){
	flap1[i] = [flap1[i][0], flap1[i][1] + offset2];
	}
/*draw flap part1*/
	
stringlinehelp = 
' M ' + pathpoint(pocket[6]) + 
' C ' + pathpoint(pocketc2[6]) + ' ' + pathpoint(pocketc1[7])+ ' ' + pathpoint(pocket[7]) +
' C ' + pathpoint(pocketc2[7]) + ' ' + pathpoint(pocketc1[8])+ ' ' + pathpoint(pocket[8]) +
' L ' + pathpoint(flap1[3]) +
' L ' + pathpoint(flap1[2]) +
' L ' + pathpoint(flap1[5]) +
' L ' + pathpoint(flap1[4]) +
' Z ';
stringline = stringline.concat(stringlinehelp);
/*draw flap part2*/
stringlinehelp = 
' M ' + pathpoint(pocket[6]) + 
' C ' + pathpoint(pocketc2[6]) + ' ' + pathpoint(pocketc1[7])+ ' ' + pathpoint(pocket[7]) +
' C ' + pathpoint(pocketc2[7]) + ' ' + pathpoint(pocketc1[8])+ ' ' + pathpoint(pocket[8]) +
' L ' + pathpoint(flap1[3]) +
' L ' + pathpoint(flap1[2]) +
' L ' + pathpoint(flap1[1]) +
' L ' + pathpoint(flap1[0]) +
' Z ';
stringline = stringline.concat(stringlinehelp);
return stringline;
}
