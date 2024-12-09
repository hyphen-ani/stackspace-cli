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
program.parse(process.argv);