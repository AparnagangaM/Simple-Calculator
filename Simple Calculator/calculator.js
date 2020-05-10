function display(val) 
{ 
    document.getElementById("result").value+=val 
} 
function calculate() 
{ 
    let x = document.getElementById("result").value
    console.log(x) 
    let y = eval(x) 
    document.getElementById("result").value=y 
    console.log(y)
} 
function clearscrn(){
    document.getElementById("result").value="" 
   
}