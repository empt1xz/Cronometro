const load = function (){
    setTimeout( () => {
    let loading = document.getElementById('carregamento')
    loading.style.display = 'none'
    document.getElementsByTagName('main')[0].style.display = 'flex'
    }, 3000)
} 
 
load();

 let ini = document.getElementById('start')
 ini.addEventListener('click', enable)
let i;
 function enable(){
    clearInterval(i)
 i = setInterval(()=>{

    ini.disabled = true;
    const contador = document.getElementById('contagem').innerHTML;
    const somar = Number(contador) + 1
    if (somar < 10 ){
        document.getElementById('contagem').innerHTML = '0' + somar
    }else if(somar > 59){
        document.getElementById('contagem').innerHTML =  00;
    }else{
   document.getElementById('contagem').innerHTML =  somar;
   }
    }, 1000)

 }



 ini.addEventListener('click', enable2)

 function enable2(){
u = setInterval(()=>{
const contador2 = document.getElementById('segundos').innerHTML;
const somar2 = Number(contador2) + 1
if (somar2 < 10){
    document.getElementById('segundos').innerHTML = '0' + somar2
}else{
document.getElementById('segundos').innerHTML =  somar2;
}
}, 60000)
 }


let parar = document.getElementById('finish')
parar.addEventListener('click', ()=>{
    clearInterval(i)
    clearInterval(u)
    document.getElementById('finish').style.display = 'none'
    document.getElementById('reset').style.display = 'inline'
})

let resetar = document.getElementById('reset')
resetar.addEventListener('click', ()=>{
    document.getElementById('contagem').innerHTML = '00'
    document.getElementById('segundos').innerHTML =  '00';
    document.getElementById('finish').style.display = 'inline'
    resetar.style.display = 'none'
    ini.disabled = false;
})






