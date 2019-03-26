function kaliTerusRekursif(angka) {
    // you can only write your code here!
    var string = String(angka);

    if(string.length == 1) {
      return angka;
    }
    else{
      var a = 1;
    for(var i=0; i<string.length; i++){
      a = a * Number(string[i]);
    }
    return kaliTerusRekursif(a);
    }

  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6