#!/usr/bin/env node

import {Command} from "commander";
import {showStackSpaceInfo} from './cli-prompts/info.js'
import {createStack} from "./cli/commands/create.js";

const program = new Command();

showStackSpaceInfo();

program
    .command('create')
    .version("1.0.0-alpha_release")
    .description("Create a new Stackspace project.")
    .action(() =>  createStack())

program
    .command('list-stacks')
    .description('Lists all stackspace projects')
    .action(() => {
        console.log('Listing all stackspace projects')
    })
