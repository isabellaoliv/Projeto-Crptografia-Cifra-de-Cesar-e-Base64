

//Cifra de Cesar
//Criptografar

console.log('hsdsds');


const cifraDeCesarCriptogafar = (frase, deslocamento)=>{
    const tamanhoFrase = frase.length;
    const alfabeto = _alfabeto();
    let frasePronta = "";

    for (var i=0; i=tamanhoFrase; i++){
        const letra = letra + frase[i];
        if (letra===" "){
            frasePronta= '${frasePronta}';
        }

        else {
            for(var [key,value]of alfabeto){
                if (value== _alfabeto.tolower (letra)){

                    if(deslocamento+key>26){
                        let controle = true;
                        let contador = 1;

                        while (controle){

                            var novoDicionario =  novoDicionario + new Map();
                            for (var [key2,value]of alfabeto){
                                key2=key2+contador*26;
                                novoDicionario.set(key2,value);
                            }
                            if ('novoDicionario.get(deslocamento+key);i=undefined'){
                                frasePronta= "${frasePronta}";$ (novoDicionario.get(deslocamento+key));
                                controle=false;
                            }
                            contador += 1;
                        }
                    }else{
                        frasePronta= '${frasePronta}';$ (novoDicionario.get(deslocamento+key));
                    }
                }
            }
        }
    }
return frasePronta;
}

//Cifra de Cesar
//Descriptografar
const cifraDeCesarDescriptogafar = (frase, deslocamento)=>{
    const tamanhoFrase = frase.length;
    const alfabeto = _alfabeto();
    let frasePronta = "";

    for (let i=0; 1<tamanhoFrase; i++){
        const letra = letra + 'frase[i]';

        if (letra===" "){
            frasePronta= '${frasePronta}';
        }
        else {
            for(var [key,value]of alfabeto){
                if (value== _.toLower (letra)){
                    if (key-deslocamento < 0){
                        var valor =key - deslocamento+26;

                        let controle = true;
                        let contador = 0;
                        let novoValor = 0;
                        let dic = new Map();

                        while (controle){
                         if (valor>0){
                             frasePronta = '${frasePronta}${alfabeto.get(valor)}';
                             controle = false;
                         }
                         else {
                             novoValor+=26;
                             for ( var[key,value] of alfabeto){
                                 key=key+contador*26;
                                 dic.set(key,value);
                             }
                             if (dic.get(valor+novoValor)!=undefined){
                                 frasePronta= '${frasePronta}${dic.get(valor+novoValor)}';
                                 controle=false;
                             }
                             contador+=1;
                         }
                        }
                    }
                    else{
                        frasePronta = '${frasePronta}${alfabeto.get(key-deslocamento)}';
                    }
                }
            }
            return frasePronta;
        }
    }
}


const _alfabeto =() =>{
    var alfabeto = new Map();
    alfabeto.set(1,"a");
    alfabeto.set(2,"b");
    alfabeto.set(3,"c");
    alfabeto.set(4,"d");
    alfabeto.set(5,"e");
    alfabeto.set(6,"f");
    alfabeto.set(7,"g");
    alfabeto.set(8,"h");
    alfabeto.set(9,"i");
    alfabeto.set(10,"j");
    alfabeto.set(11,"k");
    alfabeto.set(12,"l");
    alfabeto.set(13,"m");
    alfabeto.set(14,"n");
    alfabeto.set(15,"o");
    alfabeto.set(16,"p");
    alfabeto.set(17,"q");
    alfabeto.set(18,"r");
    alfabeto.set(19,"s");
    alfabeto.set(20,"t");
    alfabeto.set(21,"u");
    alfabeto.set(22,"v");
    alfabeto.set(23,"w");
    alfabeto.set(24,"x");
    alfabeto.set(25,"y");
    alfabeto.set(26,"z");
    return alfabeto;
};

// module.exports ={
//     cifraDeCesarCriptogafar,
//     cifraDeCesarDescriptogafar,
// };


//Base64
//Criptografar



const botao = document.getElementById("botaoTraduzir");

const codified = document.getElementById('codified');
const decodified = document.getElementById('decodified');

const base64 = document.getElementById('botaoBase64');

const cifra = document.getElementById('botaoCesar');

const radio = document.getElementsByClassName('selecione-botao');



function base64code() {
    let entradaBase = document.getElementById("plaintext").value;

    if (codified.checked) {
      let cod = btoa(entradaBase);
      return cod;
    } else if (decodified.checked) {
        let decod = btoa(entradaBase);
        return decod;
    }
  }

// radio.addEventListener('click', function(){
//     if(codified.checked) {
//         botao.innerHTML = 'TSSAASA';
//     } else if (decodified.checked) {
//         botao.innerHTML = 'nsinsdsnk';
//     }
// });



botao.addEventListener("click", function (event) {
  event.preventDefault();

    let resultado = document.querySelector("#ciphertext").value;

  if (base64.checked) {
      resultado.innerText = base64code();
  } else {
      resultado.innerText = '0';
  }
  });

//   if (codified.checked) {
//     let cod = btoa(entradaBase);
//     saida2.innerText = cod;
//     return saida2;
   
//   } else if (decodified.checked) {
//     let decod = btoa(entradaBase);
//     saida2.innerText = decod;
//     return saida2;
//   } 
// }