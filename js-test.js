/*

*******
******
*****
****
***
**
*

*/
function oppStair() {
  for (var j = 0; j <= 5; j++) {
    document.write("<br/>");
    for (var i = 5; i >= j; i--) {
      document.write("*");
    }
  }
}

document.write("<br/>");
document.write("<br/>");
/*

*
**
***

*/
function stair() {
  for (var t = 0; t <= 5; t++) {
    document.write("<br/>");
    for (var k = 0; t >= k; k++) {
      document.write("*");
      console.log("k=" + k)
    }
    console.log("t=" + t)
  }
}




var res = 0;
function resistance() {
  var i = [6, 3, 6];
  var k = [];
  var arr = [];
  for (var j = 0; j <= 2; j++) {
    var result = 1 / i[j];
    arr[j] = result;

    res = res + result;
  }
  document.write(1 / res)
}



function oddNum() {
  for (var l = 1; l < 100; l = l + 2) {
    document.write("<br/>")
    document.write(l);
  }
}

function multiplication() {
  for (var i = 1; i <= 10; i++) {
    document.write("<br/>")
    document.write(7 * i)
  }
}

function table_1_to_10() {
  for (var j = 0; j <= 10; j++) {
    for (var i = 1; i <= 10; i++) {
      document.write("<br/>")
      document.write(j * i)
    }
    document.write("<br/>")
  }
}

function sumation() {
  var total = 0;
  for (var i = 1; i <= 10; i++) {
    total = total + i;

  }
  document.write(total)
}


function product() {
  var prod = 1;

  for (var i = 1; i <= 10; i++) {
    prod = prod * i;
  }

  document.write(prod);
}

function sum30() {
  var sum = 0;
  for (var i = 1; (i <= 30); i = i + 2) {
    // document.write("<br/>");
    sum = sum + i;
  }
  document.write(sum);
}

function arrSum() {
  var arr = [1, 2, 3, 4, 5, 5];
  var sum = 0;
  for (var i = 0; i <= 5; i++) {
    sum = sum + arr[i];
  }

  document.write(sum);
  document.write("<br/>");
  document.write(sum / arr.length);
}

function arrAvrg() {

  document.write(arrSum() / arr.length);

}
// Challenge #12
function posNum() {
  var arr1 = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
  var sum = 0;
  for (var i = 0; i < arr1.length; i++) {
    
    if (arr1[i] >0){
      sum = sum + arr1[i];
    }
}
document.write(sum);
}
