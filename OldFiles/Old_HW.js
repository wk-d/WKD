var chosenpat;
var m;

window.onload = function() {
    var div = document.getElementById('Measures');
    var h2 = div.getElementsByTagName('h2')[0];
    var form = div.getElementsByTagName('form')[0];
    
h2.onclick = function() {
    var table = form.getElementsByTagName('table')[0];
    table.style.display = table.style.display == 'none' ? 'block' : 'none';
    
    }
    };

function openHW2() {
w=window.open('HW2.php');
w.chosenpat=chosenpat;
w.m = m;
}
