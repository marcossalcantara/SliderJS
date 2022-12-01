// ======= DEFININDO OS LINKS DAS IMAGENS
let images = [
    "url(https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
    "url(https://images.pexels.com/photos/4840134/pexels-photo-4840134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
    "url(https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
    "url(https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)"
]

// CAPTURANDO O ELEMENTO DO MAIN
let main = document.querySelector("main")
let i = 0
main.style.backgroundImage = images[i]


// FUNÇÃO PARA MUDAR AUTOMATICAMENTE
/*let timeout
function changeimage(){
    timeout = setTimeout(change,5000)
}

function change(){
    for (let n = 0; n >= 0; ++n){

        main.style.backgroundImage = images[n]
        main.style.transition = ".3s"

        if (n == 3){
            n = 0
            main.style.backgroundImage = images[n]
            main.style.transition = ".3s"
        }
        return n
    }
}

change()*/



// ======= FUNÇÕES DOS BOTÕES - OK
function voltar() {
    if (i == 0){
        i = 3
        main.style.backgroundImage = images[i]
        main.style.transition = ".3s"
        return i
    }
    else if(i > 0){
        --i
        main.style.backgroundImage = images[i]
        main.style.transition = ".3s"
        return i
    }
}

function adiantar(){
    if (i == 3){
        i = 0
        main.style.backgroundImage = images[i]
        main.style.transition = ".3s"
        return i
    }
    else if(i < 3){
        ++i
        main.style.backgroundImage = images[i]
        main.style.transition = ".3s"
        return i
    }
}