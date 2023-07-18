function some() {
   let txt1 = document.getElementById('txt1');
   let txt2= document.getElementById('txt2');
   let res = document.getElementById('res');
   let n1 = Number(txt1.value);
   let n2 = Number(txt2.value);
   let s = n1 + n2;
   if (txt1.value == 0 || txt2.value == 0){
    alert('Incira um valor para poder somar')
    res = ` `
   }
   res.innerHTML = `A soma de ${n1} e ${n2} é igual a ${s}` 
}