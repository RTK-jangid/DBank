import {hello} from "../../declarations/hello";

window.addEventListener('load',async function(){
    this.document.getElementById("value").innerHTML=Math.round((await hello.checkBalance() + Number.EPSILON) * 100) / 100;
});

document.querySelector("form").addEventListener("submit",async function (event){
    event.preventDefault();
    const inputAmount=parseFloat(document.getElementById("input-amount").value);
    const outputAmount=parseFloat(document.getElementById("withdrawal-amount").value);
    const button =event.target.querySelector("#submit-btn");
    button.setAttribute("disabled",true);
    if (document.getElementById("input-amount").value.length!=0){
        await hello.topUp(inputAmount);
    }
    if (document.getElementById("withdrawal-amount").value.length!=0){
        await hello.withdraw(outputAmount);
    }
    button.removeAttribute("disabled");
    document.getElementById("value").innerHTML=Math.round((await hello.checkBalance() + Number.EPSILON) * 100) / 100;
    document.getElementById("input-amount").value="";
    document.getElementById("withdrawal-amount").value="";

});