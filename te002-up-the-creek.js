import { registerUpTheCreekSettings } from "./settings.js";

Hooks.once("init", async function() {
    console.log("torgeternity | Initializing Up the Creek Introductory Adventure Module");

    //-----system settings
    registerUpTheCreekSettings()

})
Hooks.on("ready", async function() {


    //----rendering welcome message

    let welcomeMessage = await renderTemplate("modules/te002-up-the-creek/welcomeMessage.hbs");

    if (game.settings.get("te002-up-the-creek", "welcomeMessage") == true) {
        let d = new Dialog({
            title: "Welcome to the Up the Creek Introductory Adventure Module!",
            content: welcomeMessage,
            buttons: {
                one: {
                    icon: '<i class="fas fa-check"></i>',
                    label: "OK",
                },
                two: {
                    icon: '<i class="fas fa-ban"></i>',
                    label: "Don't show again",
                    callback: () =>
                        game.settings.set("te002-up-the-creek", "welcomeMessage", false),
                },
            },
        }, {
            left: 100,
            top: 100,
            height: 425,
            width: 450,
            resizable: false
        });
        d.render(true);
    }


})