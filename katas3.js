const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

const body = document.getElementsByTagName("body")[0]
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
    showResults(result)
} kata1(25)

function kata2(x) {
    let result = []
    for(let i = 1; x>=i; x--){
        result.push(x)
    }     
    result = result.join(", ") + "."  
    showResults(result)
} kata2(25)

function kata3(x) { 
    let result = []
    for(let i = -1; i>=(x*-1); i--){
        result.push(i)
    }     
    result = result.join(", ") + "."    
    showResults(result)    
} kata3(25)

function kata4(x) { 
    let result = []
    x = x*-1
    for(let i = -1; x<=i; x++){        
        result.push(x)
    }     
    result = result.join(", ") + "."  
    showResults(result)    
} kata4(25)

function kata5(x) { 
    let result = []
    for(let i=x;i>=(x*-1);i--){
        result.push(i)
    }
    result = result.join(", ") + "."    
    showResults(result) 
} kata5(25)

function kata6(x) {  
    let result = []
    for(let i = 1; i<=x;i++){
        if(i%3==0){
            result.push(i)
        }
    }
    result = result.join(", ") + "."    
    showResults(result)  
} kata6(100)

function kata7(x) {  
    let result = []
    for(let i = 1; i<=x;i++){
        if(i%7==0){
            result.push(i)
        }
    }
    result = result.join(", ") + "."    
    showResults(result)  
} kata7(100)

function kata8(x) {   
    let result = []
    for(let i=1;x>=i;x--){        
        if(x%3==0 || x%7==0){
            result.push(x)
        }
    }
    result = result.join(", ") + "."    
    showResults(result)  
} kata8(100)

function kata9(x) {
    let result = []
    for(let i = 1; i<=x;i++){
        if(i%5==0){
            result.push(i)
        }
    }
    result = result.join(", ") + "."    
    showResults(result)  
} kata9(100) 

function kata10(x) {
    let result = []
    for(let i=0;i<20;i++){
        result.push(x[i])        
    }
    result = result.join(", ") + "."   
    showResults(result)  
} kata10(sampleArray)

function kata11(x) {
    let result = []
    for(let i=0;i<x.length;i++){        
        if(x[i]%2==0){
            result.push(x[i])     
        }
    }
    result = result.join(", ") + "."   
    showResults(result)  
} kata11(sampleArray)

function kata12(x) {
    let result = []
    for(let i=0;i<x.length;i++){        
        if(x[i]%3==0){
            result.push(x[i])     
        }
    }
    result = result.join(", ") + "."   
    showResults(result)  
} kata12(sampleArray)

function kata13(x) {
    let result = []
    for(let i=0;i<x.length;i++){      
        if(x[i]%8==0){
            result.push(x[i])     
        }
    }
    result = result.join(", ") + "."   
    showResults(result)  
} kata13(sampleArray)

function kata14(x) {
    let result = []
    for(let i=0;i<x.length;i++){        
        result.push(x[i]*x[i])
    }
    result = result.join(", ") + "."   
    showResults(result)  
} kata14(sampleArray)

function kata15(x) {
    let result = 0
    for(let i=1; i<=x;i++){
        result += i
    }
    result += "."
    showResults(result)  
} kata15(20)

function kata16(x) {
    let result = 0
    for(let i=0;i<x.length;i++){        
        result += x[i]
    }
    result += "."    
    showResults(result)  
} kata16(sampleArray)

function kata17(x) {
    let result = x[0]
    for(let i=1;i<x.length;i++){        
        if(result > x[i]){
            result = x[i]
        }
    }
    result += "."
    showResults(result)  
} kata17(sampleArray)

function kata18(x) {
    let result = x[0]
    for(let i=1;i<x.length;i++){        
        if(result < x[i]){
            result = x[i]
        }
    }
    result += "."
    showResults(result)  
} kata18(sampleArray)

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}

body.appendChild(listaKatas)
