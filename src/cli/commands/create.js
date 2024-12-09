import chalk from "chalk";
import inquirer from "inquirer";
import promptCacheSettings from "../../cli-prompts/propmtCacheSettings.js";
import fs from 'fs';
import path from 'path';
import ora from "ora";
import {showStackSpaceInfo} from "../../cli-prompts/info.js";
export async function createStack(){
    showStackSpaceInfo();
    console.log(chalk.blue('Welcome to stackspace 🎉 - The Dynamic Database Solution for Modern Applications.'))

    const { stackName } = await inquirer.prompt([
        {
            type: "input",
            name: 'stackName',
            message: "What are you gonna name your stack? >",
            default: "mystackspace_app",
            validate: (input) => {
                if(!input.trim()){
                    return 'Application name cannot be empty. Please provide a valid name';
                }
                if (/[^a-zA-Z0-9_-]/.test(input)) {
                    return 'Application name can only contain letters, numbers, hyphens, and underscores.';
                }
                return true;
            },
        },
    ]);

    const { cloudProvider } = await inquirer.prompt([
        {
            type: 'list',
            name: 'cloudProvider',
            message: 'Select your cloud provider: ',
            choices: ['AWS', 'Google Cloud Platform', 'Microsoft Azure'],
        },
    ]);

    let cloudConfig = {};

    switch (cloudProvider) {
        case 'AWS':
            cloudConfig = await inquirer.prompt([
                { type: 'input', name: 'awsAccessKey', message: 'Enter AWS Access Key ID:' },
                { type: 'password', name: 'awsSecretKey', message: 'Enter AWS Secret Access Key:' },
                { type: 'input', name: 'region', message: 'Enter AWS region (e.g., us-east-1):' },
            ]);
            break;

        case 'Google Cloud Platform':
            cloudConfig = await inquirer.prompt([
                { type: 'input', name: 'gcpKey', message: 'Provide your GCP service account key (JSON):' },
                { type: 'input', name: 'region', message: 'Enter GCP region (e.g., us-central1):' },
            ]);
            break;

        case 'Microsoft Azure':
            cloudConfig = await inquirer.prompt([
                { type: 'input', name: 'subscriptionId', message: 'Enter Azure Subscription ID:' },
                { type: 'input', name: 'tenantId', message: 'Enter Azure Tenant ID:' },
                { type: 'input', name: 'clientId', message: 'Enter Azure Client ID:' },
                { type: 'password', name: 'clientSecret', message: 'Enter Azure Client Secret:' },
            ]);
            break;
    }


    const { databaseMode } = await inquirer.prompt([
        {
            type: 'list',
            name: 'databaseMode',
            message: 'Which database mode would you like to use?',
            choices: ['Relational (PostgreSQL, MySQL)', 'Non-Relational (MongoDB, DynamoDB)', 'Hybrid - stackspace'],
        },
    ]);

    await promptCacheSettings();

    const stackData = {
        stackName,
        cloudProvider,
        cloudConfig,
        databaseMode,
        createdAt: new Date().toISOString(),
    };

    console.log("-------------------------------------------------------------------------------");

    const spinner = ora(`Saving configuration for stack "${stackName}"...`).start();
    try {
        await new Promise((resolve) => setTimeout(resolve, 6000));
        await saveConfig(stackName, stackData);
        spinner.succeed(`Configuration for stack "${stackName}" saved successfully!`);
    } catch (err) {
        spinner.fail("Failed to save configuration. Please try again.");
        console.error(chalk.red("Error:", err));
    }

    console.log("-------------------------------------------------------------------------------");

    // Display final information
    console.log(chalk.green(`\nYou have configured the following settings for ${stackName}:`));
    console.log(`Cloud Provider: ${cloudProvider}`);
    console.log(`Database Mode: ${databaseMode}`);
    console.log(chalk.yellow('\nYour stackspace project is ready to go! 🚀'));
    
}

const configFile = path.resolve(process.cwd(), 'stackspace_config.json');

async function saveConfig(stackName, data) {
    let configs = {};

    try{
        if(fs.existsSync(configFile)){
            configs = JSON.parse(fs.readFileSync(configFile));
        }
    }catch (err){
        console.error(chalk.red("Failed to read configuration file:", err));
    }

    configs[stackName] = data;

    try{
        fs.writeFileSync(configFile, JSON.stringify(configs, null, 2));
        console.log(chalk(`Configuration saved for stack ${stackName}`))
    }catch (err) {
        console.error(chalk.red("Failed to save configuration file:", err));
    }
}
