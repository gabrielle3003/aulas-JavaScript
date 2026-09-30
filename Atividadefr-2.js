const formatarReal = valor => `o valor é R$` + valor.toFixed(2).replace('.',','); 

console.log(formatarReal(67));