import { jest, describe, it, expect } from '@jest/globals';
import inquirer from 'inquirer';
import promptCacheSettings from '../cli/cli-prompts/propmtCacheSettings';
describe('promptCacheSettings', () => {
    it('should return correct object when caching is enabled', async () => {
        // Mock the first and second prompt calls
        inquirer.prompt = jest.fn()
            .mockResolvedValueOnce({ enableCache: true }) // First call for enableCache
            .mockResolvedValueOnce({ cacheMethod: 'Redis' }); // Second call for cacheMethod

        const result = await promptCacheSettings();

        // Expect the returned object to match the expected structure
        expect(result).toEqual({ enableCache: true, cacheMethod: 'Redis' });

        // Ensure prompt was called twice
        expect(inquirer.prompt).toHaveBeenCalledTimes(2);
    });

    it('should return correct object when caching is disabled', async () => {
        // Mock the prompt call
        inquirer.prompt = jest.fn()
            .mockResolvedValueOnce({ enableCache: false }); // First call for enableCache

        const result = await promptCacheSettings();

        // Expect the returned object to match the expected structure
        expect(result).toEqual({ enableCache: false });

        // Ensure prompt was called once
        expect(inquirer.prompt).toHaveBeenCalledTimes(1);
    });
});


