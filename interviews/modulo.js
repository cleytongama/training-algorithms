function moduloRest(dividendo, divisor) {

    const quocienteInteiro = Math.trunc(dividendo / divisor)

    const modulo = dividendo - divisor * quocienteInteiro

    return modulo
}