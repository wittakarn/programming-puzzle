
import { createClient, print } from 'redis';
import prompts from 'prompts';

let tasks: string[] = [];
const key = 'mylist';

function initialRedisConnection() {
    const client = createClient({
        host: 'us1-vast-phoenix-32654.upstash.io',
        port: 32654,
        password: '63e965ebc06a46509d28990f0536fc48',
    });

    client.on('error', function (error) {
        console.error(error);
    });

    return client;
}

function start(next: () => void) {
    const client = initialRedisConnection();
    client.lrange(key, 0, -1, (err, items: string[]) => {
        console.log('Current to-do-list');
        console.log(items);

        next();
    });
    client.quit();
}

async function commandSelectionPrompt() {
    const response = await prompts({
        type: 'select',
        name: 'command',
        message: 'Please pick a command',
        choices: [
            { title: 'Add', value: 'add' },
            { title: 'Remove', value: 'remove' },
        ],
    });

    console.log(`Command "${response.command}" was selected`);
    return response.command;
};

async function addTaskPrompt() {
    const response = await prompts({
        type: 'text',
        name: 'task',
        message: 'Please add a new task',
    });

    if (response.task === '' || response.task === undefined) {
        const client = initialRedisConnection();
        tasks.forEach(t => client.lpush(key, t));
        client.quit();
    } else {
        tasks = [
            ...tasks,
            response.task
        ];

        console.log(`Task "${response.task}" has been added`);
        addTaskPrompt();
    }
};

async function deleteTaskPrompt() {
    const client = initialRedisConnection();

    client.lrange(key, 0, -1, async (err, items: string[]) => {
        if (items.length === 0) {
            console.log('No task to delete');
            client.quit();
            return;
        }
        const response = await prompts({
            type: 'select',
            name: 'deleteTask',
            message: 'Pick a task to delete',
            choices: items.map(t => (
                {
                    title: t,
                    value: t,
                }
            )),
        });
        if (response.deleteTask !== undefined) {

            console.log(`Task "${response.deleteTask}" had been removed`);
            client.lrem(key, 0, response.deleteTask);
            client.quit();

            deleteTaskPrompt();
        }
    });
};

const process = async () => {
    const command: string = await commandSelectionPrompt();

    if (command === 'add') {
        addTaskPrompt();
    } else {
        deleteTaskPrompt();
    }
}

start(process);