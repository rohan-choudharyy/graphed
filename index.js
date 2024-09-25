import express from "express";
import SeachService from "./services/SearchService.js";
import logger from "./utils/logger.js";
import config from "./config/config.js";


const app = express();
const searchService = new SeachService();

app.use(express.json());

app.post('/search', (req,res) => {
    const { searchTerm } = req.body;
    if(!searchTerm){
        return res.status(400).json({error: 'Search term is required'});
    }
    const results = searchService.search(searchTerm);
    res.json(results);
});

app.listen(config.port, () => {
    logger.info(`Server running on port ${config.port}`);
});