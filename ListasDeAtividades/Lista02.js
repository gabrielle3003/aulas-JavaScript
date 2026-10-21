const elementosFake = [
    {
      tagName: 'DIV',
      style:{ color:'blue', display:'flex'},
      classList:['container','active']
    },
    {
    tagName:'H1',
    style:{color:'red', display:'block'},
    classList:['title']
    },
    {
      tagName:'BUTTON',
      style:{color:'white', display:'inline-block'},
      classList:['bnt', 'btn-primary']
    }
  ]; 
  
  // Atividade 01
  console.log(" \n   ==== ATIVIDADE 01 ====   ")

  const primeiroElemento = elementosFake[0];
  for (let propriedade in primeiroElemento) {
  
    console.log(propriedade, primeiroElemento[propriedade]);

  }


  // Atividade 02
  console.log(" \n   ==== ATIVIDADE 02 ====   ")

  for (let elemento of elementosFake) {
      if (elemento.style.color === 'blue') {
          console.log(`O elemento ${elemento.tagName} é azul!`)
      }
  }




// Atividade 03
console.log("\n    ==== ATIVIDADE 03 ====   ")

    elementosFake.forEach(elementos => {
    console.log(`Nome da tag: ${elementos.tagName}`);

});




// Atividade 04 
console.log(" \n   ==== ATIVIDADE 04 ====   ")

elementosFake.forEach(elementos => {
    console.log(
        `Nome da tag: ${elementos.tagName} possui ${elementos.classList.length} classe(s).`
    );
  });



  // Atividade 05
  console.log("\n    ==== ATIVIDADE 05 ====   ")

  elementosFake.forEach(elementos => {
    console.log(
         `Nome da tag: ${elementos.tagName} possui ${elementos.classList.length} classe(s): ${elementos.classList.join (', ')}`
    );
  });