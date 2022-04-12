function positions(firstPlace, secondPlace, lastPlace){
    const positionsResult = [firstPlace, secondPlace, lastPlace];
    const nomeDoCompetidor = ['Diego', 'Rafael', 'Manoel'];

    if (positionsResult[0] == nomeDoCompetidor[0] && positionsResult[1] == nomeDoCompetidor[1]){
        return '1º Colocado - ' + nomeDoCompetidor[0] + '\n2º Colocado - ' + nomeDoCompetidor[1] + '\n3º Colocado - ' + nomeDoCompetidor[2];
    }
    if (positionsResult[0] == nomeDoCompetidor[0] && positionsResult[2] == nomeDoCompetidor[1]){
        return '1º Colocado - ' + nomeDoCompetidor[0] + '\n2º Colocado - ' + nomeDoCompetidor[2] + '\n3º Colocado - ' + nomeDoCompetidor[1];
    }
    if (positionsResult[0] == nomeDoCompetidor[1] && positionsResult[1] == nomeDoCompetidor[0]){
        return '1º Colocado - ' + nomeDoCompetidor[0] + '\n2º Colocado - ' + nomeDoCompetidor[1] + '\n3º Colocado - ' + nomeDoCompetidor[2];
    }
    if (positionsResult[0] == nomeDoCompetidor[1] && positionsResult[1] == nomeDoCompetidor[2]){
        return '1º Colocado - ' + nomeDoCompetidor[1] + '\n2º Colocado - ' + nomeDoCompetidor[0] + '\n3º Colocado - ' + nomeDoCompetidor[2];
    }
    if (positionsResult[0] == nomeDoCompetidor[2] && positionsResult[1] == nomeDoCompetidor[0]){
        return '1º Colocado - ' + nomeDoCompetidor[0] + '\n2º Colocado - ' + nomeDoCompetidor[2] + '\n3º Colocado - ' + nomeDoCompetidor[1];
    }
    if (positionsResult[0] == nomeDoCompetidor[2] && positionsResult[1] == nomeDoCompetidor[1]){
        return '1º Colocado - ' + nomeDoCompetidor[2] + '\n2º Colocado - ' + nomeDoCompetidor[0] + '\n3º Colocado - ' + nomeDoCompetidor[1];
    }
}

console.log(positions('Diego','Rafael','Manoel'))



