import SearchService from "../services/SearchService";

describe('SearchService', () => {
    let searchService;

    beforeEach(() => {
        searchService = new SearchService();
    });

    test('search returns results for valid search term', () =>{
        const results = searchService.search('captcha');
        expect(results.length).toBeGreaterThan(0);
    });

    test('search returns empty array for non-matching search term', () => {
        const results = searchService.search('nonexistentterm');
        expect(results).toEqual([]);
    });
});