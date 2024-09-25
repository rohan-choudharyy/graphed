import vectorCompare from "../models/vectorCompare.js";
import documents from "../data/document.js";
import logger from "../utils/logger.js"

class SearchService {
    constructor(){
        this.vectorCompare = new vectorCompare();
        this.index = this.buildIndex();
    }

    buildIndex(){
        const index = {};
        for(let i=0; i<Object.keys(documents).length; i++){
            index[i] = this.vectorCompare.concordance
            (documents[i].toLowerCase());
        }
        return index;
    }

    search(searchTerm){
        logger.info(`Searching for: ${searchTerm}`);
        const matches = [];

        for(let i=0; i<Object.keys(this.index).length; i++){
            const relation = this.vectorCompare.relation(
                this.vectorCompare.concordance(searchTerm.toLowerCase()),
                this.index[i]
            );
            if(relation !== 0){
                matches.push([relation, documents[i].slice(0,100)]);
            }
        }
        matches.sort((a,b) => b[0] - a[0]);
        logger.info(`Found ${matches.length} matches`);
        return matches;
    }
}

export default SearchService;