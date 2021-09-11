const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

const body = document.getElementsByTagName("body")[0]
const sectionExtra = document.getElementById("section-extra")
const listaKatas = document.createElement("ol")
function showResults(text){
    const itemKata = document.createElement("li")
    itemKata.innerText = text
    listaKatas.appendChild(itemKata)    
}

function kata1(x) {      
    let result = []
    for(let i = 1; i<=x; i++){
        result.push(i)
    }     
    result = result.join(", ") + "."    
    return showResults(result)
} kata1(25)

function kata2(x) {
    let result = []
    for(let i = 1; x>=i; x--){
        result.push(x)
    }     
    result = result.join(", ") + "."  
    return showResults(result)
} kata2(25)

function kata3(x) { 
    let result = []
    for(let i = -1; i>=(x*-1); i--){
        result.push(i)
    }     
    result = result.join(", ") + "."    
    return showResults(result)    
} kata3(25)

function kata4(x) { 
    let result = []
    x = x*-1
    for(let i = -1; x<=i; x++){        
        result.push(x)
    }     
    result = result.join(", ") + "."  
    return showResults(result)    
} kata4(25)

function kata5(x) { 
    let result = []
    for(let i=x;i>=(x*-1);i--){
        if(i%2!=0){
            result.push(i)
        }
    }
    result = result.join(", ") + "."    
    return showResults(result) 
} kata5(25)

function kata6(x) {  
    let result = []
    for(let i = 1; i<=x;i++){
        if(i%3==0){
            result.push(i)
        }
    }
    result = result.join(", ") + "."    
    return showResults(result)  
} kata6(100)

function kata7(x) {  
    let result = []
    for(let i = 1; i<=x;i++){
        if(i%7==0){
            result.push(i)
        }
    }
    result = result.join(", ") + "."    
    return showResults(result)  
} kata7(100)

function kata8(x) {   
    let result = []
    for(let i=1;x>=i;x--){        
        if(x%3==0 || x%7==0){
            result.push(x)
        }
    }
    result = result.join(", ") + "."    
    return showResults(result)  
} kata8(100)

function kata9(x) {
    let result = []
    for(let i = 1; i<=x;i++){
        if(i%2!=0){
            result.push(i)
        }
    }
    result = result.join(", ") + "."    
    return showResults(result)  
} kata9(100) 

function kata10(x) {
    let result = []
    for(let i=0;i<20;i++){
        result.push(x[i])        
    }
    result = result.join(", ") + "."   
    return showResults(result)  
} kata10(sampleArray)

function kata11(x) {
    let result = []
    for(let i=0;i<x.length;i++){        
        if(x[i]%2==0){
            result.push(x[i])     
        }
    }
    result = result.join(", ") + "."   
    return showResults(result)  
} kata11(sampleArray)

function kata12(x) {
    let result = []
    for(let i=0;i<x.length;i++){        
        if(x[i]%2!=0){
            result.push(x[i])     
        }
    }
    result = result.join(", ") + "."   
    return showResults(result)  
} kata12(sampleArray)

function kata13(x) {
    let result = []
    for(let i=0;i<x.length;i++){      
        if(x[i]%8==0){
            result.push(x[i])     
        }
    }
    result = result.join(", ") + "."   
    return showResults(result)  
} kata13(sampleArray)

function kata14(x) {
    let result = []
    for(let i=0;i<x.length;i++){        
        result.push(x[i]*x[i])
    }
    result = result.join(", ") + "."   
    return showResults(result)  
} kata14(sampleArray)

function kata15(x) {
    let result = 0
    for(let i=1; i<=x;i++){
        result += i
    }
    result += "."
    return showResults(result)  
} kata15(20)

function kata16(x) {
    let result = 0
    for(let i=0;i<x.length;i++){        
        result += x[i]
    }
    result += "."    
    return showResults(result)  
} kata16(sampleArray)

function kata17(x) {
    let result = x[0]
    for(let i=1;i<x.length;i++){        
        if(result > x[i]){
            result = x[i]
        }
    }
    result += "."
    return showResults(result)  
} kata17(sampleArray)

function kata18(x) {
    let result = x[0]
    for(let i=1;i<x.length;i++){        
        if(result < x[i]){
            result = x[i]
        }
    }
    result += "."
    return showResults(result)  
} kata18(sampleArray)

body.appendChild(listaKatas)

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1(n) {
    const divRetangulos = document.createElement("div")
    divRetangulos.classList.add("divRetangulos")
    sectionExtra.appendChild(divRetangulos)
    for(let i = 1; i<=n ;i++){
        const retangulo = document.createElement("div")
        retangulo.classList.add("retangulo-cinza")
        divRetangulos.appendChild(retangulo)        
    }
} kataBonus1(20)

function kataBonus2(n) {     
    const divRetangulosR = document.createElement("div")
    divRetangulosR.classList.add("divRetangulosRw")
    sectionExtra.appendChild(divRetangulosR)
    const min = 105
    const max = 200
    for(let i = 1; i<=n ;i++){
        const retangulo = document.createElement("div")
        retangulo.classList.add("retangulo-cinza-rw")
        retangulo.id = "retanguloRw"+i
        divRetangulosR.appendChild(retangulo)            
        const currentRetanguloId = document.getElementById("retanguloRw"+i)
        currentRetanguloId.style.width = Math.floor(Math.random()*(max-min+1)+min)+"px";
    }    
} kataBonus2(20)

function kataBonus3(arr) {
    const divRetangulosWidthArr = document.createElement("div")
    divRetangulosWidthArr.classList.add("divRetangulosWidthArr")
    sectionExtra.appendChild(divRetangulosWidthArr)
    for(let i=0;i<arr.length;i++){
        const retangulo = document.createElement("div")
        retangulo.classList.add("retanguloWidthArr")
        retangulo.id = "retanguloWidthArr"+(i+1)
        divRetangulosWidthArr.appendChild(retangulo)
        const currentRetanguloId = document.getElementById("retanguloWidthArr"+(i+1))
        currentRetanguloId.style.width = sampleArray[i] +"px"
    }
} kataBonus3(sampleArray)

function kataBonus4(arr) {
    const divRetangulosWidthArr = document.createElement("div")
    divRetangulosWidthArr.classList.add("divRetangulosColoridos")
    sectionExtra.appendChild(divRetangulosWidthArr)
    for(let i=0;i<arr.length;i++){
        const retangulo = document.createElement("div")
        retangulo.classList.add("retanguloColorido")
        retangulo.id = "retanguloColorido"+(i+1)
        divRetangulosWidthArr.appendChild(retangulo)
        const currentRetanguloId = document.getElementById("retanguloColorido"+(i+1))
        currentRetanguloId.style.width = sampleArray[i] +"px"
        if(i%2==0){
            currentRetanguloId.style.backgroundColor = "red"
        }
        else{
            currentRetanguloId.style.backgroundColor = "grey"
        }
    }
} kataBonus4(sampleArray)

function kataBonus5(arr) {
    const divRetangulosColoridosPar = document.createElement("div")
    divRetangulosColoridosPar.classList.add("divRetangulosColoridosPar")
    sectionExtra.appendChild(divRetangulosColoridosPar)
    for(let i=0;i<arr.length;i++){
        const retangulo = document.createElement("div")
        retangulo.classList.add("retanguloColoridoPar")
        retangulo.id = "retanguloColoridoPar"+(i+1)
        divRetangulosColoridosPar.appendChild(retangulo)
        const currentRetanguloId = document.getElementById("retanguloColoridoPar"+(i+1))
        currentRetanguloId.style.width = sampleArray[i] +"px"        
        if((i+1)%2==0){
            currentRetanguloId.style.backgroundColor = "red"
        }
        else{
            currentRetanguloId.style.backgroundColor = "grey"
        }
    }
} kataBonus5(sampleArray)