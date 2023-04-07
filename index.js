
const config = require("./config.json");

const { Client } = require('discord.js-selfbot-v13');
const client = new Client({
	checkUpdate: false,
});
const chalk = require("chalk");
    console.clear();
  
    console.log(
    chalk.green.bold(
        "           |  _|                             \n    __|  _ \\ | |     __| __ \\   _` | __ `__ \\  \n  \\__ \\  __/ | __| \\__ \\ |   | (   | |   |   | \n  ____/\\___|_|_|   ____/ .__/ \\__,_|_|  _|  _| \n                        _|                     "
      ),
    chalk.red.bold("Made by xea#5288\n"),
    chalk.white.bold("*Xea is released of any liabilities which your usage may entail.")

    );
    console.log("\n");
    console.log(chalk.gray.bold("Reading config.json...."))
    console.log(chalk.gray.bold(" -> channel: " +config.channel))
    console.log(chalk.gray.bold(" -> Guild ID: " +config.guildid))
    console.log(chalk.gray.bold(" -> Message to send: " +config.message_count))
    console.log(chalk.gray.bold(" -> Spam Message: " +config.spam_content))
  
const moment = require('moment');
const fs = require('fs');


fs.readFile('tokens.txt', 'utf-8', (err, data) => {

    console.log(chalk.blueBright(`Starting Users...`));
    if (err || data == "") {
        console.log(chalk.redBright(`No valid tokens.txt found!`));
        console.log(chalk.white(`Exiting...`));

        return;
    }
    const tokens = data.split('\n');
    i = 0;
    for (let token of tokens) {
       i++;
    }
    

    console.log(chalk.greenBright(`Found ${i} tokens!`));
    console.log(chalk.blueBright(`Logging in...`));

    for (let token of tokens) {
        client.login(token);
        console.log(chalk.blueBright(`Logging in as: ` + token));
    
        client.on('ready', async () => {
            console.log(chalk.greenBright(`Logged in as ${client.user.tag}!`));
            const guild = client.guilds.cache.get(config.guildid)
            const channel = guild.channels.cache.get(config.channel);
            console.log(chalk.blueBright(`Starting spam as: ` + token));

            for (let i = 0; i < config.message_count; i++) {
                let newi = +i + +1
                console.log(chalk.blueBright(newi + ` Message sent as: ` + token));

                channel.send(config.spam_content)
            }
            console.log(chalk.greenBright(`Finished Spam as ${client.user.tag}!`));

        });
    }
})
