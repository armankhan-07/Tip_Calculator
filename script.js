const BtnCal=document.getElementById("calculate");
const billAmt = document.getElementById("bill");
const tipCal = document.getElementById("tip");
const totSpan = document.getElementById("total");

function TotalCalculate(){
         const BillVal = billAmt.value;
        const tipval = tipCal.value;
        const totalValue = BillVal * (1+tipval/100);
        totSpan.innerText = totalValue.toFixed(2); 
}

BtnCal.addEventListener("click",TotalCalculate);