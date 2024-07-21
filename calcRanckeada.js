function calcularNivel(vitorias) {
    if (vitorias <= 10) {
        return { nivel: "Ferro" };
    } else if (vitorias >= 11 && vitorias <= 20) {
        return { nivel: "Bronze" };
    } else if (vitorias >= 21 && vitorias <= 50) {
        return { nivel: "Prata" };
    } else if (vitorias >= 51 && vitorias <= 80) {
        return { nivel: "Ouro" };
    } else if (vitorias >= 81 && vitorias <= 90) {
        return { nivel: "Diamante" };
    } else if (vitorias >= 91 && vitorias <= 100) {
        return { nivel: "Lendário" };
    } else {
        return { nivel: "Imortal" };
    }
}

function main() {
    let vitorias = 21; 
    let derrotas = 4;

    let { nivel } = calcularNivel(vitorias);

    let saldo = vitorias - derrotas;

    console.log(`O Herói tem um saldo de ${saldo} e está no nível ${nivel}`);
}

main();