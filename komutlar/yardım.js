const Discord = require("discord.js"); // 🌕 ' Caspərr
const db = require("quick.db"); // 🌕 ' Caspərr
// 🌕 ' Caspərr
exports.run = (client, message, params, args) => { // 🌕 ' Caspərr
    const yardım = new Discord.MessageEmbed() // 🌕 ' Caspərr
    .setAuthor(``, client.user.avatarURL()) // BAŞLIK
    .setThumbnail(client.user.avatarURL()) // EMBED İCON
    .setColor(`RANDOM`) // Burayı RANDOM YERİNE Başka Renk Kodu Yapabilirsiniz
    .setDescription(
        `` // 🌕 ' Caspərr
    ) // 🌕 ' Caspərr
    .setImage(client.user.avatarURL()) // EMBED İMAGE
    .setFooter(``, client.user.avatarURL()) // SONUÇ
message.react('Emoji') // Buraya Emoji Girin
message.channel.send() // BURAYI message.author.send() yaparsanız özelden atar
}; // 🌕 ' Caspərr
// 🌕 ' Caspərr
exports.conf = { // 🌕 ' Caspərr
    enable: true, // 🌕 ' Caspərr
    guildOnly: false, // 🌕 ' Caspərr
    aliases: ["yardım", "y"] // Buradaki yardım, y gibi yerleri değiştirebilirsiniz
}; // 🌕 ' Caspərr
// 🌕 ' Caspərr
exports.help = { // 🌕 ' Caspərr
    name: "yardım" // yardım yerine başka bişi yapabilirsiniz
};
// komutlar.txt dosyasına girip ordaki yardım.js bakınız boş halini görebilirsiniz