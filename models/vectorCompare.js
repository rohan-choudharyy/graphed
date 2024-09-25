import math from 'math';

class vectorCompare{
    magnitude(concordance){
        if(typeof concordance !== 'object' ||
            concordance ===null){
                throw new Error('Supplied argument should be of type object');
            }
            let total = 0;
            for(const [, count] of Object.entries(concordance)){
                total += count ** 2;
            }     
            return Math.sqrt(total);
    }

    relation(concordance1, concordance2){
        if(typeof concordance1 !== 'object' ||
            concordance1 === null){
                throw new Error('Supplied Argument 1 should be of type object');
            }
        if(typeof concordance2 !== 'object' ||
            concordance2 === null){
                throw new Error('Supplied Argument 2 should be of type object');
            }
        let topValue = 0;
        for(const [word, count] of Object.entries(concordance1)){
            if(concordance2.hasOwnProperty(word)){
                topValue += count * concordance2[word];
            }
        }
        const magnitude = this.magnitude(concordance1) * this.magnitude(concordance2);
        return magnitude != 0 ? topValue/magnitude : 0;
    }
    concordance(document){
        if(typeof document !== 'string'){
            throw new Error('Supplied argument should be of type String');
        }
        const con = {};
        for(const word of document.split(' ')){
            con[word] = (con[word] || 0) + 1;
        }
        return con;
    }
}

export default vectorCompare;