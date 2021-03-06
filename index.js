var arreglo1 = [1, 2, 3];
var arreglo2 = [2, 30, 1];

combinarArreglos(arreglo1, arreglo2);

function combinarArreglos(arr1, arr2) {
  var i, j, k, l, lenarr3;
  var arr3 = [];
  var lenarr1 = arr1.length;
  var lenarr2 = arr2.length;

  arr3 = arr1;
  console.log("Arr1: " + arr1);
  console.log("Arr2: " + arr2);
  console.log("Arr3: " + arr3);

  i = lenarr1;
  j = 0;
  while (j < lenarr2) {
    arr3[i] = arr2[j];
    i++;
    j++;
  }
  console.log("Arr3 concat: " + arr3);
  lenarr3 = arr3.length;
  console.log("Long Arr3:" + lenarr3);
  for (i = 0; i < lenarr3; i++) {
    for (j = i + 1; j < lenarr3; j++) {
      if (arr3[i] === arr3[j]) {
        k = j;
        while (k < lenarr3) {
          l = k + 1;
          arr3[k] = arr3[l];
          k++;
        }
        j--;
        lenarr3--;
      }
    }
  }
  console.log("Arr3 Final:" + arr3);
}
