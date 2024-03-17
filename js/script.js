const codificador = document.getElementById('codificador');

const buttonCriptografar = document.getElementById('button-criptografar');

const buttonDescriptografar = document.getElementById('button-descriptografar');

const buttonCopiar = document.getElementsByClassName('button-copiar');

const sectionDescriptografar = document.getElementById('section-descriptografar');


buttonCriptografar.addEventListener('click', () => {
    let conteudoCodificador = codificador.value;

    let conteudoCriptografado = '';

    if(conteudoCodificador.length > 0){

        for(var letra in conteudoCodificador){

            if( conteudoCodificador[letra] === 'a'){

                conteudoCriptografado += 'ai'

            } else if( conteudoCodificador[letra] === 'e'){

                conteudoCriptografado += 'enter'

            } else if( conteudoCodificador[letra] === 'i'){

                conteudoCriptografado += 'imes'

            } else if( conteudoCodificador[letra] === 'o'){

                conteudoCriptografado += 'ober'

            } else if( conteudoCodificador[letra] === 'u'){

                conteudoCriptografado += 'ufat'

            } else {

                conteudoCriptografado += conteudoCodificador[letra]

            };

        };

        sectionDescriptografar.classList.remove('section-descriptografar');

        sectionDescriptografar.classList.add('section-descriptografada');

        sectionDescriptografar.innerHTML = `<p>${conteudoCriptografado}</p> <button class='button-copiar'>Copiar</button>`;
        
        buttonCopiar[0].addEventListener('click', () => {

            navigator.clipboard.writeText(conteudoCriptografado);

        });

    }
    
})

buttonDescriptografar.addEventListener('click', () => {
    let conteudoCodificador = codificador.value;

    let transformaConteudoCodificadorEmArray = conteudoCodificador.split('');

    let conteudoDescriptografado = ''

    if(conteudoCodificador.length > 0){
        for(var letra in transformaConteudoCodificadorEmArray){

            if( transformaConteudoCodificadorEmArray[letra] === 'a'){

                transformaConteudoCodificadorEmArray.splice(letra, 1);

                conteudoDescriptografado += 'a';

            } else if(transformaConteudoCodificadorEmArray[letra] === 'e'){

                transformaConteudoCodificadorEmArray.splice(letra, 4);

                conteudoDescriptografado += 'e';

            } else if(transformaConteudoCodificadorEmArray[letra] === 'i'){

                transformaConteudoCodificadorEmArray.splice(letra, 3);

                conteudoDescriptografado += 'i';

            } else if(transformaConteudoCodificadorEmArray[letra] === 'o'){

                transformaConteudoCodificadorEmArray.splice(letra, 3);

                conteudoDescriptografado += 'o';

            } else if(transformaConteudoCodificadorEmArray[letra] === 'u'){

                transformaConteudoCodificadorEmArray.splice(letra, 3);

                conteudoDescriptografado += 'u';

            } else {

                conteudoDescriptografado += transformaConteudoCodificadorEmArray[letra];

            };

        };

         sectionDescriptografar.classList.remove('section-descriptografar');

        sectionDescriptografar.classList.add('section-descriptografada');

        sectionDescriptografar.innerHTML = `<p>${conteudoDescriptografado}</p> <button class='button-copiar'>Copiar</button>`;
        
        buttonCopiar[0].addEventListener('click', () => {

            navigator.clipboard.writeText(conteudoDescriptografado);

        });
        
    };
});