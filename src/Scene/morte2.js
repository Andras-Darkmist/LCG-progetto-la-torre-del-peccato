let sfondo_mortis;

function preload (s) {
    sfondo_mortis = PP.assets.image.load (s, "assets/immagini/mainmenu/gameover.png");  
}

function create (s) {
    PP.game_state.set_variable("Monete", PP.game_state.get_variable("Monete_checkpoint"));
    PP.game_state.set_variable("Lettere", PP.game_state.get_variable("Lettere_checkpoint"));
    let mortis = PP.assets.image.add (s, sfondo_mortis, 0, 0, 0, 0);
    mortis.geometry.scale_x = 2;
    mortis.geometry.scale_y = 2;
    /*
    PP.shapes.text_styled_add(s, 
        PP.game.config.canvas_width / 2,
        PP.game.config.canvas_height / 2,
        "Game Over",
        100,
        "Helvetica",
        "normal",
        "0xFFFFFF",
        null,
        0.5,
        0.5);
        
    PP.shapes.text_styled_add(s, 
        PP.game.config.canvas_width / 2,
        PP.game.config.canvas_height / 2,
        "Premi Q per riavviare",
        40,
        "Helvetica",
        "normal",
        "0xFFFFFF",
        null,
        0.5,
        -2);

        PP.shapes.text_styled_add(s, 
            PP.game.config.canvas_width / 2,
            PP.game.config.canvas_height / 4,
            "Premi C per tornare al menù",
            40,
            "Helvetica",
            "normal",
            "0xFFFFFF",
            null,
            0.5,
            -2); */
}

function update (s) {
    
    if(PP.interactive.kb.is_key_down(s, PP.key_codes.C)) {
        //riavvia la partita
        console.log("sus");
        PP.scenes.start("level2");
        if(PP.interactive.kb.is_key_down(s, PP.key_codes.M)) {
            //riavvia la partita
            console.log("sus");
            PP.scenes.start("Main_Menu");
        }
    }
}

function destroy (s) {
    
}

PP.scenes.add("morte2", preload, create, update, destroy);