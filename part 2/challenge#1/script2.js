const calcAverage = (score1, score2, score3) =>{
    return (score1 + score2 + score3) / 3
}

const scoreDolphins = calcAverage(44, 23, 71);

const scoreKoalas =  calcAverage(65, 54, 49);

const checkWinner = (avgDolphins, avgKoalas) => {
    if(avgDolphins > 2 * avgKoalas){
        return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`
    
    }else if(avgKoalas >= 2 * avgDolphins){
       return `Koalas win (${avgKoalas} vs. ${avgDolphins})`
        
    }else{
        return 'No team wins... '
    }
}
const result = checkWinner(scoreDolphins, scoreKoalas)