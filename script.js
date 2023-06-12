/*Controle do tamanho da senha*/

/*Declaração de Variáveis*/
let sliderElement = document.querySelector("#slider"); //controle do slider
let buttonElement = document.querySelector("#button"); //botão de gerar senha

let sizePassword = document.querySelector("#value"); //valor selecionado no slider
let password = document.querySelector("#password"); //span que contém a senha

let containerPassword = document.querySelector("#container-password");

let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789!@#$&*/_"; //Coleção de caracteres que a senha pode conter
let newPassword = ""; //Variável que armazenará a senha

// Controle do Slider
sizePassword.innerHTML = sliderElement.value; //tamanho da senha recebe o valor selecionado no input do tipo range

slider.oninput = function (){
    sizePassword.innerHTML = this.value;
}

//Gerador de Senha
function generatePassword() {
    let pass = ""; //variavel que receberá a senha

    /*Para 'i' de 0 até o tamanho de senha escolhido, um caractere aleatório da variável 'charset' será selecionado
    e concatenado à variável 'pass', gerando uma senha forte
    */
    for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * n)); //seleção aleatória e concatenação dos caracteres da senha
    }
    containerPassword.classList.remove("hide"); //remove a classe que esconde o campo que mostra a senha
    password.innerHTML = pass; //o campo de span mostra a senha gerada
    newPassword = pass;
    console.log("VAlor de newPassword "+newPassword);
}

//Função de copiar para copiar a senha
function copyPassword(){
  
    navigator.clipboard.writeText(newPassword)
    .then(() => console.log("Texto copiado com sucesso!"))
    .catch(err => console.error("Falha ao copiar o texto:", err));

}
