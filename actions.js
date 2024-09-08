
import * as fs from fs;

export class ActionFactory {
    static get(name, args, options) {
        const commandConstructor = commandList.get(name);
        if (!commandConstructor) throw new Error("This command does not exist");
        return new commandConstructor(args, options);
    }
}

class ActionBase {
    constructor(args, options) {
        this.args = args;
        this.options = options;
    }
    run() {
        throw new Error("Run method should be implemented in the child class");
    }
}

class AddAction extends ActionBase {
    run() {
        console.log("Add");
    }
}

class DeleteAction extends ActionBase {
    run() {
        console.log("Delete");
    }
}

class ListAction extends ActionBase {
    run() {
        console.log("List");
    }
}

export const commandList = new Map([
    ["add", AddAction],
    ["delete", DeleteAction],
    ["list", ListAction],
]);
