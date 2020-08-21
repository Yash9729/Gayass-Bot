const Discord = require ('discord.js');
const bot = new Discord.Client();

bot.login(Process.env.token)

const PREFIX = '!';

var Version = '1.0.1';

bot.on('ready', () =>{
    console.log('This bot is online!');
})

bot.on('message', message=>{
    
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'ping':
            message.channel.send('Pong!')
            break;   
        case 'website':
            message.channel.send('https://www.youtube.com/channel/UCVpJX0oNOzVebxJepPcBffA?view_as=subscriber')
            break;
        case 'info':
            if(args[1] === 'version'){
                message.channel.send('Version ' + Version);
            }else{
                message.channel.send('Invalid Args')
            }
                break;
            case 'clear':
                if(!args [1]) return message.reply('Error please define second args')
                message.channel.BulkDelete([1]);
                break;
            case 'owner':
                message.channel.send('Yash')
                break;
            case 'ip' :
                message.channel.send('```IntoXicatioN  Public Server  Server IP : 34.93.145.42:27015 Server Location : Mumbai. India Server Owners : Dashanan Ravan and Billa Singh Founder : Billa Singh Online Since : March, 2020 Server Features : Shop , Admin , No-VIP , ClientMod , FastDL , WaRMoDe , Rank.```')
                break;
                
    }

})

bot.login(token);

