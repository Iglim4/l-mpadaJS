const turnOn = document.getElementById('turnOn')
const tunrOff = document.getElementById('turnOff')
const lamp = document.getElementById('lamp')

function isLampBroken(){
    return lamp.src.indexOf('quebrada') > -1
}

function lampOn (){
    if(!isLampBroken() ){
        lamp.src = './src/img/ligada.jpg'
    }
   
}
function lampOff(){
    if(!isLampBroken() ){
        lamp.src = './src/img/desligada.jpg'
    }
   
}
function  lampBroken(){
    lamp.src = './src/img/quebrada.jpg'
}

lamp.addEventListener('dblclick', lampBroken)
turnOn.addEventListener('click', lampOn)
tunrOff.addEventListener('click', lampOff)
lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseleave', lampOff)

