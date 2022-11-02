const inputArray = document.querySelectorAll(".arrayNumeros");

//inputArray[0].addEventListener('change', holaMundo);
//inputArray.map((element)=>{element.addEventListener('change', holaMundo);});
//inputArray.forEach((element)=>{element.addEventListener('change', holaMundo);});


function holaMundo(){
    console.log("hola mundo");
}



function numMayor(arrayNums) {
  let max = arrayNums[0];
  arrayNums.forEach((element) => {
    if (element > max) {
      max = element;
    }
  });
  return max;
}

function numMenor(arrayNums) {
  let min = arrayNums[0];
  arrayNums.forEach((element) => {
    if (element < min) {
      max = element;
    }
  });
  return min;
}

function filterPares(arrayNums) {
  let pares = [];
  function checkParity(num) {
    return num % 2 == 0;
  }
  pares = arrayNums.filter(checkParity);

  return pares;
}

function filterImpares(arrayNums) {
  let impares = [];
  function checkOdds(num) {
    return num%2 != 0;
  }
  impares = arrayNums.filter(checkOdds);
  return impares;
}

function sortAsc(arrayNums){
    return arrayNums.sort((a,b)=>{
        if(a<b){
            return -1;
        }
        if(a>b){
            return 1;
        }
        return 0;
    })
}

function sortDesc(arrayNums){
    return arrayNums.sort((a,b)=>{
        if(a>b){
            return -1;
        }
        if(a<b){
            return 1;
        }
        return 0;
    })
}

function arrayNumeros(){
    return inputArray;
}
