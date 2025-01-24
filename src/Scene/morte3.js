let sfondo_mortis2;


function preload (s) {
    sfondo_mortis2 = PP.assets.image.load (s, "assets/immagini/mainmenu/gameover.png");  

}

function create (s) {
    PP.game_state.set_variable("Monete", PP.game_state.get_variable("Monete_checkpoint"));
    PP.game_state.set_variable("Lettere", PP.game_state.get_variable("Lettere_checkpoint"));
    let mortis = PP.assets.image.add (s, sfondo_mortis2, 0, 0, 0, 0);
    mortis.geometry.scale_x = 2;
    mortis.geometry.scale_y = 2;    
}

function update (s) {
    
    if(PP.interactive.kb.is_key_down(s, PP.key_codes.C)) {
        //riavvia la partita
        console.log("sus");
        PP.scenes.start("level3");
        if(PP.interactive.kb.is_key_down(s, PP.key_codes.M)) {
            //riavvia la partita
            console.log("sus");
            PP.scenes.start("Main_Menu");
        }
    }
}

function destroy (s) {
    
}

PP.scenes.add("morte3", preload, create, update, destroy);