

function preload (s) {
}

function create (s) {
    
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
}

function update (s) {
    
    if(PP.interactive.kb.is_key_down(s, PP.key_codes.Q)) {
        //riavvia la partita
        console.log("sus");
        PP.scenes.start("level2");
    }
}

function destroy (s) {
    
}

PP.scenes.add("morte2", preload, create, update, destroy);