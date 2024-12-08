#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import {Command} from "commander";
import {showStackSpaceInfo} from './cli-prompts/info.js'
import promptCacheSettings from "./cli-prompts/propmtCacheSettings.js";

const program = new Command();

program
    .version("1.0.0-alpha_release")
    .description("The Dynamic Database Solution for Modern Applications.")
    .parse(process.argv);


showStackSpaceInfo();

async function main(){
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

    switch (cloudProvider) {
        case 'AWS':
            await inquirer.prompt([
                { type: 'input', name: 'awsAccessKey', message: 'Enter AWS Access Key ID:' },
                { type: 'password', name: 'awsSecretKey', message: 'Enter AWS Secret Access Key:' },
                { type: 'input', name: 'region', message: 'Enter AWS region (e.g., us-east-1):' },
            ]);
            break;

        case 'Google Cloud Platform':
            await inquirer.prompt([
                { type: 'input', name: 'gcpKey', message: 'Provide your GCP service account key (JSON):' },
                { type: 'input', name: 'region', message: 'Enter GCP region (e.g., us-central1):' },
            ]);
            break;

        case 'Microsoft Azure':
            await inquirer.prompt([
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


    // Display final information
    console.log(chalk.green(`\nYou have configured the following settings for ${stackName}:`));
    console.log(`Cloud Provider: ${cloudProvider}`);
    console.log(`Database Mode: ${databaseMode}`);
    console.log(chalk.yellow('\nYour stackspace project is ready to go! 🚀'));
}

main().catch((err) => {
    console.error(chalk.red(`An error occured:`, err));
    process.exit(1);
});


