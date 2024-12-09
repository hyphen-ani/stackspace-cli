#!/usr/bin/env node

import { Command } from "commander";
import {showStackSpaceInfo} from './cli-prompts/info.js'
import {createStack} from "./cli/commands/create.js";
import {ListStacks} from "./cli/commands/list.js";
import chalk from "chalk";

const program = new Command();

program
    .command('create')
    .version("1.0.0-alpha_release")
    .description("Create a new Stackspace project.")
    .action(async () => {
        try{
            await createStack();
        } catch (err){
            console.error(chalk.red(`An error occurred during stack creation: ${err.message}`));
            process.exit(1);
        }
    });

program
    .command('list-stacks')
    .description('Lists all stackspace projects')
    .action( () => {
        ListStacks();
    });

program.exitOverride();

program.on('command:*', () => {
    console.error(chalk.red('Invalid command entered!'));
    process.exit(1);
});

if (process.argv.length <= 2) {
    console.error(chalk.yellow('No command provided! Please use a valid command like "create" or "list-stacks".'));
    process.exit(1);
}

program.parse(process.argv);