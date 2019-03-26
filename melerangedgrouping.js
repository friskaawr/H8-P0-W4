function meleeRangedGrouping (str) {
    //your code here
    var b='';
    var arr_b  = [];
    
    if(str === ''){
      return arr_b;
    }
    for (var i=0; i<str.length; i++){
        var found = false;
        if(str[i] !== '-'){
            if(str[i] !== ','){
                found = true;
                b+=str[i]
            }
        }
        if (found == false || i == str.length-1){
            arr_b.push(b);
            b = ''
        }
    }
    // console.log(arr_b)
    var hasil = [[],[]];
    for(var j=0; j<arr_b.length; j++){
      if(arr_b[j] === 'Ranged'){
        hasil[0].push(arr_b[j-1])
      }
      if(arr_b[j] === 'Melee'){
        hasil[1].push(arr_b[j-1])
      }
    }
    return hasil;
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []