const btn01 = document.querySelector("#q01-executar");
const btn02 = document.querySelector("#q02-executar");
const btn03 = document.querySelector("#q03-executar");
const btn04 = document.querySelector("#q04-executar");
const btn05 = document.querySelector("#q05-executar");

const getNumber = () => parseInt(document.querySelector("#q01-numero").value) || 0;

function fatorial(number) {
    if (number <= 1) return 1;
    return number * fatorial(number - 1);
}

btn01.addEventListener("click", () => {
    let number = getNumber();
    const listaResp = document.querySelector("#q01-result");
    const liResp = `<li>${number}! = ${fatorial(number)}</li>`
    listaResp.innerHTML = liResp;
});

btn02.addEventListener("click", () => {
    const table = document.querySelector("#q02-result");
    table.innerHTML = `<tr>
                            <th>Potência</th>
                            <th>Resultado</th>
                        </tr>`;
    for (let i = 1; i <= 30; i++) {
        table.innerHTML += `<tr>
                                <td>4^${i}</td>
                                <td>${Math.pow(4, i)}</td>
                            </tr>`;
    }
});

function somaParesAte(limite, offset = 2) {
    if (limite < offset) return 0;
    return offset + somaParesAte(limite, offset + 2);
}

btn03.addEventListener("click", () => {
    const result = document.querySelector("#q03-result");
    result.innerHTML = `<li>${somaParesAte(1000)}</li>`;
});

function fibo(i) {
    if (i <= 1) return 1;
    return fibo(i - 1) + fibo(i - 2);
}

btn04.addEventListener("click", () => {
    const table = document.querySelector("#q04-result");
    table.innerHTML = `<tr>
                            <th>Índice</th>
                            <th>Valor</th>
                        </tr>`;

    let x = 1;
    let y = 1;
    let temp;
    for (let i = 1; i <= 100; i++) {
        console.log(`fibo(${i}) = ${y}`);
        table.innerHTML += `<tr>
                                <td>A${i}</td>
                                <td>${y}</td>
                            </tr>`;
        temp = x;
        x = y;
        y = x + temp;
    }
});

function primosAte(limit) {
    let primos = [];
    let aux = 2;
    while (aux <= limit) {
        let primo = true;
        for (let i = 2; i < aux; i++) {
            if (aux % i == 0) 
                primo = false;     
        }
        if (primo) 
            primos.push(aux);
        
        aux++;
    }
    return primos;
}

btn05.addEventListener("click", () => {
    const listaResp = document.querySelector("#q05-result");
    let liResp = "";
    primosAte(1000).forEach(e => liResp += `<li>${e}</li>`);
    listaResp.innerHTML = liResp;
});