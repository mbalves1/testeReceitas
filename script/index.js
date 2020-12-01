
const quantidade = document.querySelector('.inputQuantidade'),
ingredient = document.querySelector('.ingredient'),
btn = document.querySelector('.button'),
respo = document.getElementById('response'),
comoFaz =  document.querySelector('.comoFaz'),
button2 = document.querySelector('.button2')


/*** Botao 1 */
btn.addEventListener('click', adiciona)

var linha = ''

function adiciona(event){
    event.preventDefault();
    
    let quant = quantidade.value;
    let ingre = ingredient.value;

    let respo = $('#response');

     linha = $(
        `
        <li>${quant} - ${ingre}</li>    
    `
    )    
    respo.append(linha)
}

/******** Botao 2 */
button2.addEventListener('click', adicionaComo)

function adicionaComo(event){
    event.preventDefault();

    const como = comoFaz.value;
    respo.append(como)
}

respo.addEventListener('click', event => {
    const excluir = event.target
    
        excluir.remove('<li>')
    
})

/******* incluindo no array */

const receitas = []

/**    Botão salvar    */

const salvar = document.querySelector('.salvar');

salvar.addEventListener('click', incluir)

var linhaArray = ''


function incluir(event){
    event.preventDefault();
    
    let quant = quantidade.value;
    let ingre = ingredient.value;

    const resp = document.querySelector('#response')
    const cardMural = document.querySelector('.card')

    linhaArray = $(`
        <div class="cardStyle">
          
            <p></p>
            <p></p>
        </div>

    `)


    cardMural.append(linhaArray)

}

/***     classe        ***/

// class Validacao {
//     constructor(){
//         this.validations = [

//         ]
//     }

//     // iniciar a validação dos campos
//     validate(form){
//         let inputs = form.getElementByTagName('input');

//         console.log(inputs);

//         let inputArray = [...inputs]

//         console.log(inputArray);

        
//     }
// }