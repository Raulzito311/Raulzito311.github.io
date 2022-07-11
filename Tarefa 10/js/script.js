/* ======== QUESTÃO 01 - Funções Numéricas ======== */

function sum(...array) {
    let sum = 0;
    array.forEach(n => sum += n);
    return sum;
}

function sumOdds(...array) {
    let arrayOdds = [];
    array.forEach(n => {
        if (n % 2 == 1) 
            arrayOdds.push(n);
    });
    return sum(...arrayOdds);
}

function product(...array) {
    let prod = 1;
    array.forEach(n => prod *= n);
    return prod;
}

/* ======== QUESTÃO 02 - Números Primos ======== */

function customPrimos(...args) {
    if (args.length == 1) {
        const limit = args[0];
        let primos = [];
        let aux = 2;
        while (primos.length < limit) {
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
    } else if(args.lenght == 2) {
        const init = args[0];
        const end = args[1];
        let primos = [];
        let aux = init;
        while (aux <= end) {
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
}

/* ======== QUESTÃO 03 - Números Romanos ======== */

function decToRom(num) {
    var roman = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
      };
      var str = '';
    
      for (var i of Object.keys(roman)) {
        var q = Math.floor(num / roman[i]);
        num -= q * roman[i];
        str += i.repeat(q);
      }
    
      return str;
}

/* ======== QUESTÃO 04 - Saque Mínimo ======== */

function saqueMinimo(num) {
    let result = {}
    const cedulas = [100, 50, 20, 10, 5, 2];
    for (let i = 0; i < cedulas.length; i++) {
        result[`${cedulas[i]}`] = 0;
        if (num >= cedulas[i]) {
            result[`${cedulas[i]}`] = Math.floor(num / cedulas[i]);
            num -= result[`${cedulas[i]}`] * cedulas[i];
            if (num == 1) {
                result[`${cedulas[i]}`]--;
                num += cedulas[i];
            }
        }
    }
    return result;
}