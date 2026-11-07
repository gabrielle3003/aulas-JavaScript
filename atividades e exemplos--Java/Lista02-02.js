const elementosFake = [
  {
    tagName: 'DIV',
    style:{ color:'blue', display:'flex'},
    classList:['container','active']
  }
]; 
for (let elemento of elementosFake) {
    if (elemento.style.color === 'blue') {
        console.log(`O elemento ${elemento.tagName} é azul!`)
    }
}