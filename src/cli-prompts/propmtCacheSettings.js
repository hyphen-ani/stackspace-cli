import inquirer from "inquirer";

export default async function promptCacheSettings() {

    const { enableCache } = await inquirer.prompt([
        {
            type: 'confirm',
            name: 'enableCache',
            message: 'Do you want to enable caching for your application?',
            default: false,
        }
    ]);

    if(enableCache){
        const { cacheMethod } = await inquirer.prompt([
            {
                type: 'list',
                name: 'cacheMethod',
                message: 'Which cache method would you like to use?',
                choices: ['Redis', 'Memcached'],
            },

        ]);

        return {
            enableCache,
            cacheMethod
        };
    }

    return { enableCache };

}