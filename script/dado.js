export default class Dado {
    static criarDados(quantidadeDeDados) {
        let dados = document.getElementById('dados');
        for (let i = 0; i < quantidadeDeDados; i++) {
            let dado = document.createElement('img');
            dado.classList.add('dado');
            dado.id = 'dado-' + (i + 1);
            dado.src = `../monopoly/img/dice-01.svg`;
            dados.appendChild(dado);
        }
    }
    
    static rolar(dados) {
        for (let i = 0; i < dados.length; i++) {
            console.log(dados[i]);
            document.getElementById("dado-" + (i + 1)).classList.add("shake");
        }
        setTimeout(function () {
            for (let i = 0; i < dados.length; i++) {
                let dado = document.getElementById("dado-" + (i + 1))
                console.log(dado);
                dado.classList.remove("shake");
                dado.src = `../img/dice-0${dados[i]}.svg`;
            }
        }, 1000);
    }
}
