let img_lettere;
let Lettere=[];

function preload_lettera (s) {
    Lettere=[];
    img_lettere= PP.assets.image.load(s, "assets/immagini/Lettera.PNG", 150, 156);

}

function create_lettera (s, x, y){
    let Lettere_sing = PP.assets.image.add(s, img_lettere, x, y, 0, 0);
    PP.physics.add(s, Lettere_sing, PP.physics.type.STATIC);
    Lettere.push(Lettere_sing);
}

function collision_lettera (s, lettera, player) {
    PP.assets.destroy(lettera);
    let prev_score = PP.game_state.get_variable("Lettere");
    PP.game_state.set_variable("Lettere", prev_score+1);
}

