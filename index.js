const Discord = require("discord.js");
const client = new Discord.Client();
 
// Prefixo
let prefix = "r;";
client.on("message", (message) => {
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();


  // Se não começar com o prefixo, ignorar, se é um bot ignorar.
  if (!message.content.startsWith(prefix) || message.author.bot) return;
 
  if (command === "item") {
    // Pegar o primeiro argumento, que é o ID.
    let id = args[0]
    // Colocar esse id nas 2 URLS, para depois enviar.
    const url1 = `https://www.rolimons.com/item/${id}`
    const url2 = `https://www.roblox.com/catalog/${id}`
    message.channel.send(`Rolimons: ${url1}\nRoblox: ${url2}`);
  }
});

// Logar na conta do bot, com o token. 
client.login("O Token Secreto Aqui");
    