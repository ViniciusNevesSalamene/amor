var form = document.getElementById("teamo")
var boxes = ["mqt","nm","ng","nu","nmt"]
const body = document.getElementById("body")
var result = document.createElement("result")
result.id = "result"

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    var string = "Eu te amo"
    for(var i = 0;i < boxes.length; i++ ){
        if(document.getElementById(boxes[i]).checked && boxes[i] == "mqt"){
            string += " mais que tudo"
        }else if(document.getElementById(boxes[i]).checked && boxes[i] == "nm"){
            string += " nesse mundo"
        }else if(document.getElementById(boxes[i]).checked && boxes[i] == "ng"){
            string += " nessa galáxia"
        }else if(document.getElementById(boxes[i]).checked && boxes[i] == "nu"){
            string += " nesse universo"
        }else if (document.getElementById(boxes[i]).checked && boxes[i] == "nmt"){
            string += " nesse multiverso"
        }
    }
    string +="."
    var vezes = document.getElementById("vezes")
    var final = ""
    if(vezes.value == ""){
        final = string
    }else{
        for (var i = 0; i < vezes.value; i++){
            final += (i+1) +" "+ string + "<br>"
        }
    }
    result.innerHTML = final
    body.appendChild(result)
})