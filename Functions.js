

/* calculate length of a bezier curve with end points P1 and P2 and control points C1 and C2*/
function lengthofbezier(P1,P2,C1,C2){
P1temp=P1;
length = 0;
for (i=1;i<100;i++){
t=0.01*i;
P2temp=[(1-t)*(1-t)*(1-t)*P1[0] + 3*(1-t)*(1-t)*t*C1[0] + 3*(1-t)*t*t*C2[0] + t*t*t*P2[0],
        (1-t)*(1-t)*(1-t)*P1[1] + 3*(1-t)*(1-t)*t*C1[1] + 3*(1-t)*t*t*C2[1] + t*t*t*P2[1]];
length = length+Math.sqrt((P2temp[0]-P1temp[0])*(P2temp[0]-P1temp[0])+(P2temp[1]-P1temp[1])*(P2temp[1]-P1temp[1]));
P1temp = P2temp;
}
return length;
}
/* mark a point on a bezier curve*/
/*!!doesn't do exactly what I want!!)*/
function markpointalongline(P1,P2,C1,C2,length){
l=lengthofbezier(P1,P2,C1,C2);
t=length/l;
P =[(1-t)*(1-t)*(1-t)*P1[0] + 3*(1-t)*(1-t)*t*C1[0] + 3*(1-t)*t*t*C2[0] + t*t*t*P2[0],
        (1-t)*(1-t)*(1-t)*P1[1] + 3*(1-t)*(1-t)*t*C1[1] + 3*(1-t)*t*t*C2[1] + t*t*t*P2[1]];
return P;
}

/* given a set of points p and sets of control points c1 and c2 determine the string for drawing the line */
function setstringline(p, c1, c2){
var stringline = 
'M ' + pathpoint(p[0]);
for (i=1; i<p.length; i++){ 
stringhelp=' C ' + pathpoint(c2[i-1]) + ' '  + pathpoint(c1[i]) +  ' ' + pathpoint(p[i]);
stringline = stringline.concat(stringhelp);
}
stringhelp =' C ' + pathpoint(c2[p.length-1]) + ' '  + pathpoint(c1[0]) +  ' ' + pathpoint(p[0])+ ' ';

stringline = stringline.concat(stringhelp);
return stringline
}
/* reflect point A along line B to C */
function reflect(A,B,C){
D=[-A[0]+2*B[0]+2*unitvector(B,C)[0]*(unitvector(B,C)[0]*(A[0]-B[0])+unitvector(B,C)[1]*(A[1]-B[1])),
-A[1]+2*B[1]+2*unitvector(B,C)[1]*(unitvector(B,C)[0]*(A[0]-B[0])+unitvector(B,C)[1]*(A[1]-B[1]))];
return D};
/* draw squares around each point of a pattern */
function allpoints(pattern){
var stringline = '';
for (var i=0; i<pattern.length; i++)
{
stringlinehelp = ' M '+pathpoint([pattern[i][0]-2,pattern[i][1]-2])+
' '+ pathpoint([pattern[i][0]-2,pattern[i][1]+2])+
' '+ pathpoint([pattern[i][0]+2,pattern[i][1]+2])+
' '+ pathpoint([pattern[i][0]+2,pattern[i][1]-2])+
' Z';
stringline = stringline.concat(stringlinehelp);       
}
return stringline;
}
/* insert a point p with control points c1 and c2 into existing pattern at position index */
function insertstraightpoint(pattern,c1,c2,index,p){
if (index<1){
newc2=pattern[index];
newc1=pattern[pattern.length-1];
c1[index]=newbodice;
c2[pattern.length-1]=newbodice;
pattern.splice(index,0,p);
c2.splice(index,0,newc2);
c1.splice(index,0,newc1);}
else if (index>pattern.length-2){
newc2=pattern[index];
newc1=pattern[index-1];
c1[index]=newbodice;
c2[index-1]=newbodice;
pattern.splice(-1,0,p);
c2.splice(-1,0,newc2);
c1.splice(-1,0,newc1);}
else{
newc2=pattern[index];
newc1=pattern[index-1];
c1[index]=newbodice;
c2[index-1]=newbodice;
pattern.splice(index,0,p);
c2.splice(index,0,newc2);
c1.splice(index,0,newc1);}}

/*move A orthogonally to AB. If this crosses AC, move along AC */
function moveoutside(A,B,C,l){
/*not correct l and l should be replaced so that the they together correspond to a total length of l (change controlpointort function)*/
D= controlpointort(A,A,B,l,l);
angleAB=findangle(A,B,C);
/*if (angleAB<Math.PI/2)
{
x=l/Math.cos(Math.PI/2-angleAB);
D=[A[0]+x*unitvector(C,A)[0],A[1]+x*unitvector(C,A)[1]];}
*/
return [D[0]-A[0],D[1]-A[1]];}

/*move A orthogonally to AB. If this crosses AC, move along AC */
function moveinside(A,B,C,l){
D= controlpointort(A,B,A,l,l);
angleAB=findangle(A,B,C);
/*if (angleAB<Math.PI/2)
{
x=l/Math.cos(Math.PI/2-angleAB);
D=[A[0]+x*unitvector(C,A)[0],A[1]+x*unitvector(C,A)[1]];}
*/
return [D[0]-A[0],D[1]-A[1]];}
/*function cut(pattern,index1,add){
pattern1.p = pattern.p.slice(1,index1);
pattern1.p.splice(index1,0,add.p);
pattern2.p = pattern.p.slice(index1);
pattern2.p.splice(index1,1,add.p.reverse());
return ...
}*/
function join(pattern1, pattern2, A,B,C,D){
translation=[A[0]-B[0],A[1]-B[1]];
for (i=0; i<pattern2.p.length; i++){
pattern2.p[i]=[pattern2.p[i][0]+translation[0],pattern2.p[i][1]+translation[1]];
pattern2.c1[i]=[pattern2.c1[i][0]+translation[0],pattern2.c1[i][1]+translation[1]];
pattern2.c2[i]=[pattern2.c2[i][0]+translation[0],pattern2.c2[i][1]+translation[1]];
}
rotation = findangle(C,B,D);
for (i=0; i<pattern2.p.length; i++){
pattern2.p[i]=rotateAaroundB(pattern2.p[i],B,rotation);
pattern2.c1[i]=rotateAaroundB(pattern2.c1[i],B,rotation);
pattern2.c2[i]=rotateAaroundB(pattern2.c2[i],B,rotation);
}
var pattern3 = new Object();
pattern3.p = new Array();
pattern3.c1 = new Array();
pattern3.c2 = new Array();
pattern3.p =pattern1.p.concat(pattern2.p.reverse().splice(0,2));
pattern3.c1 = pattern1.c1.concat(pattern2.c2.reverse().splice(0,2));
pattern3.c2 = pattern1.c2.concat(pattern2.c1.reverse().splice(0,2));
return pattern3;
} 
function findangle(a,b,c){
helpa1 = unitvector(a,b);
helpa2 = unitvector(c,b);
helpa3 = helpa1[0]*helpa2[0]+helpa1[1]*helpa2[1];
angle = Math.acos(helpa3);
return angle;
}
/*startpoint P1 endpoint P2 controlpoint start C1 controlpoint end C2*/
/*segment 1: startpoint P1 endpoint newBez.P controlpoint start newBez.A1 controlpoint end newBez.C2*/
/*segment 2: startpoint newBez.P endpoint P2 controlpoint start newBez.C1 controlpoint end C2*/
function dividebezier(P1,P2,C1,C2,t){
    newBez=new Object();
    newBez.A1 = [(1-t)*P1[0]+t*C1[0],(1-t)*P1[1]+t*C1[1]]; 
    newBez.A2 = [(1-t)*C2[0]+t*P2[0],(1-t)*C2[1]+t*P2[1]];
    newBez.C1 =[(1-t)*(1-t)*P1[0] + 2*(1-t)*t*C1[0] + t*t*C2[0],
        (1-t)*(1-t)*P1[1] + 2*(1-t)*t*C1[1] + t*t*C2[1]];
    newBez.C2 =[(1-t)*(1-t)*C1[0] + 2*(1-t)*t*C2[0] + t*t*P2[0],(1-t)*(1-t)*C1[1] + 2*(1-t)*t*C2[1] + t*t*P2[1]];
    newBez.P =[(1-t)*(1-t)*(1-t)*P1[0] + 3*(1-t)*(1-t)*t*C1[0] + 3*(1-t)*t*t*C2[0] + t*t*t*P2[0],
        (1-t)*(1-t)*(1-t)*P1[1] + 3*(1-t)*(1-t)*t*C1[1] + 3*(1-t)*t*t*C2[1] + t*t*t*P2[1]];
return newBez;
}

function rotateAaroundB(A,B,Angle){
var C =
[B[0]-Math.cos(Angle)*(B[0]-A[0])+Math.sin(Angle)*(B[1]-A[1]),
B[1]-Math.sin(Angle)*(B[0]-A[0])-Math.cos(Angle)*(B[1]-A[1])];
return C;
}
function unitvector(A,B){
var alpha = Math.sqrt((A[0]-B[0])*(A[0]-B[0])+(A[1]-B[1])*(A[1]-B[1]));
var C=[(A[0]-B[0])/alpha, (A[1]-B[1])/alpha];
return C;
}
function controlpointpar(C,A,B,alpha,beta){
var CP = [C[0]+alpha*unitvector(A,B)[0], C[1]+beta*unitvector(A,B)[1]];
return CP;
}
function controlpointort(C,A,B,alpha,beta){
var CP = [C[0]+alpha*unitvector(A,B)[1], C[1]-beta*unitvector(A,B)[0]];
return CP;
}
function pathpoint(A){
var pathA = A[0] + ' ' + A[1];
return pathA;
}
function intersect2lines(A1,B1,A2,B2){
var E = [ B1[0]-A1[0], B1[1]-A1[1]];
var F = [ B2[0]-A2[0], B2[1]-A2[1]];
var P = [ -E[1], E[0] ];
h = ((A1[0]-A2[0])*P[0]+(A1[1]-A2[1])*P[1])/(F[0]*P[0]+F[1]*P[1]);
var I = [A2[0]+h*F[0],A2[1]+h*F[1]];
return I;
}



