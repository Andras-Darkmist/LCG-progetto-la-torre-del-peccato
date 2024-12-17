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
    txt_lettere = PP.shapes.text_styled_add(s, 1200, 20, "0", 50, "Helvetica", "normal", "0x000000", null, 0, 0);
    lettera = PP.assets.image.add(s, img_lettera, 1200 - 80, 20, 0, 0);
    lettera.tile_geometry.scroll_factor_x = 0;
    lettera.tile_geometry.scroll_factor_y = 0;
    txt_lettere.tile_geometry.scroll_factor_x = 0;
    txt_lettere.tile_geometry.scroll_factor_y = 0;
}



function update_score(s) {
    let curr_score = PP.game_state.get_variable("Lettere");
    PP.shapes.text_change(txt_lettere, "" + curr_score);
}