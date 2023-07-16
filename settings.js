export function registerUpTheCreekSettings() {


    //--------welcome message 

    game.settings.register("te002-up-the-creek", "welcomeMessage", {
        // game.setting.register("NameOfTheModule", "VariableName",
        name: "Display the welcome message", // Register a module setting with checkbox
        hint: "If checked, the welcome message will pop up once your world has loaded.", // Description of the settings
        scope: "world", // This specifies a client-stored setting
        config: true, // This specifies that the setting appears in the configuration view
        type: Boolean,
        default: true, // The default value for the setting
    });

}