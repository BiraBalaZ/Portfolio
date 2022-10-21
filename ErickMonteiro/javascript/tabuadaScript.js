function gerar() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('SelTab')

    if (num.value.leght == 0){
        alert('[ERRO] Faltam dados!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while(c <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++;
        }
    }
}

/*
    var a = document.getElementById('num1');
    var b = document.getElementById('num2');
    for(i = 10; i > 0; i--){

        var res = a*b;
        console.log(`${a} x ${b} = ${res}`)
        b++;
    }
    document.write('res')
*/