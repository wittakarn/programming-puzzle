import { createClient, print } from "redis";

const client = createClient({
    host: 'us1-vast-phoenix-32654.upstash.io',
    port: 32654,
    password: '63e965ebc06a46509d28990f0536fc48',
});

client.on('error', function (error) {
    console.error(error);
});

client.set('key', 'Wittakarn Keeratichayakorn', print);
client.get('key', print);