const botconfig = require("./botconfig.json");
const tokenfile = require("./tokenfile.json");
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
    console.log(`${bot.user.username} elérhető`);
    bot.user.setActivity("play.dreaming.hu | 1.8 1.12x",{type: "PLAYING"});
   });



bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let nd = messageArray[1];
    let rd = messageArray[2];
    let args =messageArray.slice(1);
    if(cmd === `${prefix}lemon`){

      let botThumb = bot.userAvatarURL;
      let testembed = new Discord.RichEmbed()
      .setColor("#00ff1d")
      .setDescription(":name_badge: Limuska :name_badge: ")
      message.channel.send(testembed);
      console.log(`${message.author.username} GIF!`);
      return;

   }

   if(cmd === `${prefix}szerver`){


      let botThumb = bot.user.displayAvatarURL;
      let testembed = new Discord.RichEmbed()
      .setAuthor(message.author.username)
      .setTitle("Információk")
      .setDescription("")
      .setColor("RANDOM")
      .addField("Szerver IP:", "play.dreaming.hu")
      .addField("Verzió:", "1.8 1.12")
      .addBlankField()
      .addField("Tagfelvétel:", "Jelenleg nincs!")
      .addField("Segítségért:", "#segítség-kérő -be kérj segítséget!")
      .setThumbnail(botThumb)
      .setFooter("© [2019] - Dreaming - Network")
   
      message.channel.send(testembed);
      console.log(`${message.author.username} használta ip commandot!`);
      }
   
      if(cmd === `${prefix}info`){


         let botThumb = bot.user.displayAvatarURL;
         let testembed = new Discord.RichEmbed()
         .setAuthor(message.author.username)
         .setTitle("Bot információ")
         .setDescription("")
         .setColor("#00ff1a")
         .addField("Tulajdonosom:", "@Hunterke#8871")
         .addField("Készítés dátuma:", "2019.március.23")
         .addBlankField()
         .addField("Programozási nyelv:", "JavaScript")
         .setThumbnail(botThumb)
         .setFooter("© [2019] - Dreaming - Network")
   
         message.channel.send(testembed);
         console.log(`${message.author.username} info embed!`);
   
     }
   

    if(cmd === `fasz`) {
       message.delete();
       message.reply("Ne káromkodj kérlek!");
       console.log(`${message.author.username} káromkodott!`);
  
    }

    if(nd === `fasz`) {
      message.delete();
      message.reply("Ne káromkodj kérlek!");
      console.log(`${message.author.username} káromkodott!`);

   }

   if(rd === `fasz`) {
      message.delete();
      message.reply("Ne káromkodj kérlek!");
      console.log(`${message.author.username} káromkodott!`);

   }

   if(cmd === `hülye`) {
      message.delete();
      message.reply("Ne káromkodj kérlek!");
      console.log(`${message.author.username} káromkodott!`);
 
   }

   if(nd === `hülye`) {
     message.delete();
     message.reply("Ne káromkodj kérlek!");
     console.log(`${message.author.username} káromkodott!`);

  }

  if(rd === `hülye`) {
     message.delete();
     message.reply("Ne káromkodj kérlek!");
     console.log(`${message.author.username} káromkodott!`);

  }

  if(cmd === `${prefix}ban`) {
   let banPerson = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
   if(!banPerson) message.channel.send("Adj meg egy felhasználót");
   let reason = args.join(" ").slice(22);
   if(!reason) message.channel.send("Adj meg egy okot!")
   if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Nem bannolhatsz embert!");
   if(banPerson.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Nem bannolhatsz staffot!");
   let bicon = bot.user.displayAvatarURL;
 3
   let banEmbed = new Discord.RichEmbed()
   .setTitle("×Ban×")
   .setColor("#ff0000")
   .setThumbnail(bicon)
   .addField("Bannolt Személy:", `${banPerson} ID: ${banPerson.id}`)
   .addField("A Staff aki kitiltotta:", `@${message.author.username} ID: ${message.author.id}`)
   .addField("Indok:", reason)
   .setTimestamp(message.createdAt)
   .setFooter(`© [2019] -  ¤Magyar Készítő botok™¤`);
 
   let sendTo = message.guild.channels.find(`name`, `logs`);
   if(!sendTo) return message.channel.send("Nem találom a logs csatornát!");
 
   message.guild.member(banPerson).ban(reason);
   sendTo.send(banEmbed);
   console.log(`${message.author.id} Ban kiosztva ${banPerson} ok: ${ok}!`);
 
 }


if(cmd === `${prefix}kick`) {
   let kickPerson = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
   if(!kickPerson) message.channel.send("Adj meg egy felhasználót!");
   let kickReason = args.join(" ").slice(22);
   if(!kickReason) message.channel.send("Adj meg egy okot!");
   if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Nem bannolhatsz embert!");
   if(kickPerson.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Nem bannolhatsz staffot!");
   let bicon = bot.user.displayAvatarURL;

   let kickEmbed = new Discord.RichEmbed()
   .setTitle("×Kick×")
   .setColor("#c12847")
   .setThumbnail(bicon)
   .addField("Kickelt Személy", `${kickPerson} with ID ${kickPerson.id}`)
   .addField("A staff aki kirúgta:", `@${message.author.username} ID ${message.author.id}`)
   .addField("Indok", kickReason)
   .setTimestamp(message.createdAt)
   .setFooter(`© [2019] ¤Magyar Készítő botok™¤`);

   let kickTo = message.guild.channels.find(`name`, `logs`);
   if(!kickTo) return message.channel.send("Nem találom a logs csatornát");

   message.guild.member(kickPerson).kick(kickReason);
   kickTo.send(kickEmbed);
   console.log(`${message.author.id} Ban kiosztva ${kickPerson} ok: ${kickok}!`);

   }
});

bot.on("message", msg => {
   if(msg.content === "szerver-infó") {
 let embed = new Discord.RichEmbed()
 .setColor("RANDOM")
 .setTitle("Szerver Információk")
 .addField("Discord Szerver Neve:",msg.guild.name)
 .addField("Discord Szerver Tulajdonos:", msg.guild.owner)
 .addField("Felhasználók:", msg.guild.memberCount)
 .addField("Rangok:", msg.guild.roles.size)
 console.log(`${message.author.username} használta szerver-infó commandot!`);
 msg.channel.send(embed)
   }
});

bot.on("message", msg => {
    if(msg.content === "Sziasztok") {
       msg.channel.send("Szia");
       console.log("Használtam a köszönés commandot")
       return;
    }
   });

bot.on("message", msg => {
    if(msg.content === "hali") {
       msg.channel.send("Szia");
       console.log("Használtam a köszönés commandot")
       return;
    }
   });


     bot.on("message", msg => {
      if(msg.content === "!?creator") {
         msg.channel.send("Engem a ¤Magyar Készítő botok™¤ szerver készített Linkje: https://discord.gg/QdkgfHQ  https://discord.io/nightcraftkozosseg !")
         console.log("Használtam a készítő commandot")
         return;
      }
     });

     bot.on("message", msg => {
      if(msg.content === "!?moderation") { 
         let embed = new Discord.RichEmbed()
         .setColor("RANDOM")
         .setTitle("Moderációs parancsaim:")
         .setDescription("\nr!ban Személy kitiltása JOG: (Tagok kitiltása)\nr!kick Személy kirúgása JOG: (Tagok kirúgása)\nEgyenlőre ez a 2. parancs elérhető moderációs parancsokból!")
         console.log("Használtam a parancsok commandot")
         msg.channel.send(":white_check_mark: A moderácíós sikeresen lefutott privátban! :white_check_mark: ")
         msg.author.send(embed)
      }
     });

     bot.on("message", msg => {
      if(msg.content === "!?helping") { 
         let embed = new Discord.RichEmbed()
         .setColor("RANDOM")
         .setTitle("Jelenlegi parancsaim:")
         .setDescription("\nHa köszönsz hogy ***Sziasztok*** akkor visszaköszön hogy szia\n***r!version***: kiírja a bot verzióját. \n***r!info***: Ki írja a bot információját + a késztőm/fejlesztőm nevét.\n***r!clear***  [Szám] Például : r!clear 10\n***r!kick*** ezt csak Adminisztrátorok használhatják.\n***r!ban*** ezt csak Adminisztrátorok használhatják.\nr!avatar [Említés] És megmutatja a profilképét.\nr!update megmutatja a újításokat.")
         console.log("Használtam a parancsok commandot")
         msg.channel.send(":white_check_mark: A parancsok sikeresen lefutott privátban! :white_check_mark: ")
         msg.author.send(embed)
      }
     });

   
   bot.on("message", msg => {
      if(msg.content === "!?ping") {
         msg.channel.send("pong! :ping_pong:");
         console.log("Használtam a ping commandot!")
         return;
      }
     });


   bot.on("message", msg => {
    if(msg.content === "!?version") {
       msg.channel.send("A bot *verziója:* ***1.2 BETA***");
       console.log("Használtam a verzió commandot!")
       return;
    }
   });

   

bot.login("NTU5MDEzMzY4MjI1MjAyMjA3.D3fOTw.3lXm5WG65ZFBMCh9ftXVuKCSlvA"); 