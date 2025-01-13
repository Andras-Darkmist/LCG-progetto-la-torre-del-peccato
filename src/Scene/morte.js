let sfondo_mortis0;


function preload (s) {
    sfondo_mortis0 = PP.assets.image.load (s, "assets/immagini/mainmenu/gameover.png");  
}

function create (s) {
    let mortis = PP.assets.image.add (s, sfondo_mortis0, 0, 0, 0, 0);
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
        "Premi Q per riavviare il livello",
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
    
    if(PP.interactive.kb.is_key_down(s, PP.key_codes.Q)) {
        //riavvia la partita
        console.log("sus");
        PP.scenes.start("level1");
    }

    if(PP.interactive.kb.is_key_down(s, PP.key_codes.C)) {
        //riavvia la partita
        console.log("sus");
        PP.scenes.start("Main_Menu");
    }
}

function destroy (s) {
    
}

PP.scenes.add("morte", preload, create, update, destroy);