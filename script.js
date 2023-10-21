function resolverRecorrencia() {
    const coefA = parseFloat(document.getElementById('coefA').value);
    const coefB = parseFloat(document.getElementById('coefB').value);
    const coefC = parseFloat(document.getElementById('coefC').value);

    const delta = coefB * coefB - 4 * coefA * coefC;

    if (delta > 0) {
        const raiz1 = (-coefB + Math.sqrt(delta)) / (2 * coefA);
        const raiz2 = (-coefB - Math.sqrt(delta)) / (2 * coefA);
        document.getElementById('resultado').textContent = `Solução: a_n = C1 * ${raiz1}^n + C2 * ${raiz2}^n`;
    } else if (delta === 0) {
        const raiz = -coefB / (2 * coefA);
        document.getElementById('resultado').textContent = `Solução: a_n = (C1 + C2 * n) * ${raiz}^n`;
    } else {
        const realPart = -coefB / (2 * coefA);
        const imaginaryPart = Math.sqrt(Math.abs(delta)) / (2 * coefA);
        document.getElementById('resultado').textContent = `Solução: a_n = (C1 * ${realPart}^n * cos(n * ${imaginaryPart}) + C2 * ${realPart}^n * sin(n * ${imaginaryPart}))`;
    }
}