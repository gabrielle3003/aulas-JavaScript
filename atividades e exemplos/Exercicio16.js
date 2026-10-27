const verificarVIP = (nomes, nomeBuscado) => {
    for (const nome of nomes){
            if (nome === nomeBuscado){
               return true;
            }
    }
    return false;
};
console.log(verificarVIP(["Ana Paula", "Eduarda", "Maria"], "Eduarda"));