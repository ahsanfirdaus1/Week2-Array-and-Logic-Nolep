function pasanganTerbesar(num) {
    // you can only write your code here!
    let strNum = num.toString();
    let max = 0;

    for(let i = 0; i < strNum.length - 1; i++) {
        let pasangan = strNum[i] + strNum[i+1];
        if(Number(pasangan) > max){
            max = Number(pasangan);
        }
    }

    return max;

  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99