const pago = ()=>{
    let hambu = document.querySelector("input[name='rbHamburguesa']:checked").value;
    let pago = document.querySelector("input[name='rbPago']:checked").value;
    let cantidad = document.getElementsByName('hamburguesas')[0].value;

    if(cantidad<0){
        alert("Ingrese una cantidad de hamburguesas correcta")
    }
    if(cantidad==0){
        alert("Ingrese una cantidad de hamburguesas")
    }
    if(cantidad>0){
        if(pago=="efec"){
            if(hambu=="op1"){
                total = cantidad * 20;
                alert("Total a pagar: $"+total);
            }
            if(hambu=="op2"){
                total = cantidad * 25;
                alert("Total a pagar: $"+total);
            }
            if(hambu=="op3"){
                total = cantidad * 28;
                alert("Total a pagar: $"+total);
            }
        }
        if(pago=="tc"){
            if(hambu=="op1"){
                t1 = cantidad * 20;
                t2 = t1 * 1.05;
                alert("Total a pagar: $"+t2);
            }
            if(hambu=="op2"){
                t1 = cantidad * 25;
                t2 = t1 * 1.05;
                alert("Total a pagar: $"+t2);
            }
            if(hambu=="op3"){
                t1 = cantidad * 28;
                t2 = t1 * 1.05;
                alert("Total a pagar: $"+t2);
            }
        }
    }
}