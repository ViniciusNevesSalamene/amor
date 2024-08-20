const onsite = true
const texto = document.getElementById("tempo")
showtime()

function showtime(){
    setTimeout(()=>{
        var agora = new Date();
        var dia = new Date('2024-08-17')
        var diferenca = Math.abs(agora.getTime() - dia.getTime())
        var dias = Math.floor(diferenca / (1000*60*60*24))
        var horas = Math.floor((diferenca - (dias*1000*60*60*24)) / (1000*60*60))
        var minutos = Math.floor((diferenca - ((dias*1000*60*60*24)+(horas*1000*60*60))) / (1000*60))
        var segundos = Math.floor((diferenca - ((dias*1000*60*60*24)+(horas*1000*60*60)+(minutos*1000*60))) / (1000))
        texto.textContent = dias+ " dias "+ horas + " horas "+ minutos+" minutos";
    },1000)
}