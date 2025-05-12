function relogio(){
const relogio = document.querySelector(".relogio")
let segundos = 0
let temp;
function criarHora(segundos){
    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString('pt-BR',{ 
        timeZone:'UTC'
    })
}
function adicionarTime(){
     temp= setInterval(function(){
        segundos++
        relogio.innerHTML = criarHora(segundos)
    },1000)
 }
 
 document.addEventListener('click',function(e){
    let el = e.target
    if(el.classList.contains('zerar')){
        relogio.classList.remove("pausado")

    setTimeout(function(){
        relogio.innerHTML = `00:00:00`
        segundos = 0
    },1)
    }if(el.classList.contains('iniciar')){
         relogio.classList.remove("pausado")
        clearInterval(temp)
        adicionarTime()
    }if(el.classList.contains('pausar')){
         relogio.classList.add("pausado")
         clearInterval(temp)
    }
 })
}
relogio()
