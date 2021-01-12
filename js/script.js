var valor;
var resultado;
function botao(num){
    valor = document.calc.display.value += num;
    
    
}
function reseta(){
    document.calc.display.value = '';
}

function calcula(){
    resultado = eval(valor)
    document.calc.display.value = resultado;

}