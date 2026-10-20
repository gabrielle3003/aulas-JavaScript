const elementosFake = [
    {id: 1, tagName: 'DIV',style:{ color:'blue', display:'flex'},classList:['container','active']},
    {id: 2, tagName: 'H1',style: {color:'blue', display:'block'}, classList:['title']},
    {id: 3, tagName:'BUTTON', style:{color:'white', display:'inline-block'}, classList:['bnt', 'btn-primary']},
    {id: 4, tagName: "LI", Style:{ color:'black', display: 'list-item'}, classList: ['item-lista', 'pending']},
    {id: 5, tagName: "LI", Style:{ color:'black', display: 'list-item'}, classList: ['item-lista', 'done']},
    {id: 6, tagName: "SECTION", Style:{ color:'gray', display: 'grid'}, classList: ['main-section']},
    {id: 7, tagName: "P", Style:{ color:'green', display: 'block'}, classList: ['text-content']},
    {id: 8, tagName: "SPAN", Style:{ color:'yellow', display: 'inline'}, classList: ['highlight']},
    {id: 9, tagName: "LI", Style:{ color:'black', display: 'list-item'}, classList: ['item-lista', 'pending']},
    {id: 10, tagName: "FOOTER", Style:{ color:'white', display: 'flex'}, classList: ['footer-area',]},
];
    
    for (let elemento of elementosFake){
      elemento.style.backgroundColor ='FFFFFF';
    }
    console.log(elementosFake);  