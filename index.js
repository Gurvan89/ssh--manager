#!/usr/bin/env
import config from './config.js';
import { Command, program } from 'commander';
import { ActionFactory } from './actions.js'

program.version(config.version).description(config.description).name(config.name);
config.commands.forEach(cmd => {
    const command = new Command(cmd.name);
    command.description(cmd.description);
    const action = ActionFactory.get(cmd.name, cmd.arguments, cmd.options);
    command.action(() => action.run())
    program.addCommand(command);
});

program.parse(process.argv);