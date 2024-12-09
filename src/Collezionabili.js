let txt_lettere;
let img_lettera;
let lettera;
let txt_monete; 
let img_monete;
PP.game_state.set_variable ("Lettere", 0);

function preload_score (s) {
    img_lettera = PP.assets.image.load(s, "assets/immagini/Lettera.PNG", 150, 156);
}

function create_score(s) {
    txt_lettere = PP.shapes.text_styled_add(s, 10, 10, "0", 50, "Helvetica", "normal", "0x000000", null, 0, 0);
    lettera = PP.assets.image.add(s, img_lettera, 3450, 320, 0, 0);
   
}



function update_score(s) {
    txt_lettere.geometry.x = player.geometry.x + 800;     txt_lettere.geometry.y = player.geometry.y - 550;
    lettera.geometry.x = txt_lettere.geometry.x - 80; lettera.geometry.y = txt_lettere.geometry.y; 
    let curr_score = PP.game_state.get_variable("Lettere");
    PP.shapes.text_change(txt_lettere, "" + curr_score);
}