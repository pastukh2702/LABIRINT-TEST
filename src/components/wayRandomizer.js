let rand = (num) => {
    return Math.floor(Math.random() * num)
}

const wayRandomizer = (start, matrixSize) => {

    let ways = [];

    let iPOS = start[0];
    let jPOS = start[1];

    for (let i = 0; i < 10; i++) {

        let way = rand(4);

        if(way === 0){
            if(jPOS !== matrixSize-1){
                jPOS+=1;
                ways.push(way)
            } else {
                jPOS-=1;
                ways.push(1)
            }
        }
        if(way === 1){
            if(jPOS !== 0){
                jPOS-=1;
                ways.push(way)
            } else {
                jPOS+=1
                ways.push(0)
            }
        }
        if(way === 2){
            if(iPOS !== matrixSize-1){
                iPOS+=1;
                ways.push(way)
            } else {
                iPOS-=1
                ways.push(3)
            }
            
        }
        if(way === 3){
            if(iPOS !== 0){
                iPOS-=1;
                ways.push(way)
            } else {
                iPOS+=1
                ways.push(2)
            }
        }

    }

    return [[iPOS, jPOS], ways]
}   

export default wayRandomizer