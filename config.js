import packageInfo from './package.json' assert { type: 'json' };

export default {
    name: packageInfo.name,
    description: packageInfo.description,
    version: packageInfo.version,
    commands: [
        {
            name: "add",
            description: "Add new ssh connection",
            arguments: [
                {
                    "name": "<moodle_name>",
                    "description": "Name of the moodle instance"
                }
            ],
            options: [
                {
                    "flags": "-u, -url <url>",
                    "description": "Moodle instance url",
                    "required": true
                }
            ]
        },
        {
            name: "delete", description: "Delete ssh connection",
            arguments: [],
            options: []
        },
        {
            name: "list", description: "List all the ssh connection",
            arguments: [],
            options: []
        },
    ]
};