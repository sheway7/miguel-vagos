const Discord = require("discord.js");
const Client = new Discord.Client;
const prefix = "$";
const prefix1 = "/"
const ytdl = require("ytdl-core");

Client.login(process.env.TOKEN);

Client.on("ready", () => {
    console.log("bot ope");
});

Client.on("message", message => {
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;
    //miguel
    if(message.content == prefix1 + "Miguel"){
        message.channel.send("lo que peudo hacer es:"); message.channel.send("$salut"); message.channel.send("$bye"); message.channel.send("$list")
        message.channel.send("$membre"); message.channel.send("$vagos"); message.channel.send("$play + lien"); message.channel.send('$stop')
    }
    //salut
    if(message.content == prefix + "salut"){
        message.channel.send("Hola amigos soy Miguel Vagos que quieres?");
    }
    //bye
    if(message.content == prefix + "bye"){
        message.channel.send("hasta luego bandido");
    } 
    //merci
    if(message.content == prefix1 + "merci"){
        message.channel.send("tkt bg");
    }
    //list
    if(message.content == prefix + "list"){
        message.channel.send("los productos:"); message.channel.send("-gun 4.5mm"); message.channel.send("-uzi 4.5mm"); message.channel.send("-Thompson gold");
        message.channel.send("-Thompson black"); message.channel.send("-matraque telescop"); message.channel.send("-iphone taser"); message.channel.send("-couteau cran d'arret");
        message.channel.send("-p99"); message.channel.send("-aap01"); message.channel.send("-usp compact"); message.channel.send("-beretta plomb");
    }
    //membre
    if(message.content == prefix + "membre"){
    message.channel.send("El Jefe-> EL Patron"); message.channel.send("El Cuervo-> Resp Marketing"); message.channel.send("El Camino-> Community Manager");
    message.channel.send("El Chapo-> Comptable");
    }
    //play
    if(message.content.startsWith(prefix + "play")){
        if(message.member.voice.channel){
            message.member.voice.channel.join().then(connection => {
                let args = message.content.split(" ");
                
                if(!args[1]){
                    message.reply("lien del video no correcto")
                    connection.disconnect();
                }
                else {

                let dispatcher = connection.play(ytdl(args[1]));

                dispatcher.on("finish", () =>{
                    dispatcher.destroy();
                    connection.disconnect();
                });

                dispatcher.on("error", err =>{
                    console.log("erreur de dispatcher : " + err);
                    message.reply("lien del video no correcto")
                });
            }
            }).catch(err => {
                message.reply("tengo una problema de connection : " + err);
            });
        }
        else {
            message.reply("no estas en uno vocal bandido")
        }
    }
    //vagos
    if(message.content == prefix + "vagos"){
        if(message.member.voice.channel){
        message.member.voice.channel.join().then(connection => {
            let dispatcher = connection.play(ytdl("https://www.youtube.com/watch?v=1I0GTJddZDY&t=23s")); 
        
            dispatcher.on("finish", () =>{
                dispatcher.destroy();
                connection.disconnect();
            });
        
            dispatcher.on("error", err =>{
                console.log("erreur de dispatcher : " + err);
            });
        
        
        }).catch(err => {
            message.reply("tengo una problema de connection : " + err);
        });
    }
    else {
        message.reply("no estas en uno vocal bandido")
        }
    }            
    //stop
    if(message.content == prefix + "stop"){
        if(message.member.voice.channel){
        message.member.voice.channel.join().then(connection => {
        let dispatcher = connection.disconnect
        
            connection.disconnect();
            message.reply("hasta leugo")

        }).catch(err => {
            message.reply("tengo una problema de connection : " + err);
        });
    }
    }

});



