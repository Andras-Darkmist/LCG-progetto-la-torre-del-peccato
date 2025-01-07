let img_lettere;
let lettera_1_img;
let lettera_2_img;
let lettera_3_img;
let lettera_1;
let Lettere = [];
let testo_lettere = [];

let lettera_aperta = false;

function preload_lettera (s) {
    Lettere=[];
    testo_lettere = [];
    img_lettere= PP.assets.image.load(s, "assets/immagini/Lettera.PNG", 150, 156);

    // ovviamente da cambiare le immagini delle lettere che ora sono placeholder

    lettera_1_img = PP.assets.image.load(s, "assets/immagini/Lettera1.png", 150, 150);
    lettera_2_img = PP.assets.image.load(s, "assets/immagini/Lettera 2.png", 150, 150);
    lettera_3_img = PP.assets.image.load(s, "assets/immagini/arca.jpg", 150, 150);
    lettera_4_img = PP.assets.image.load(s, "assets/immagini/arca.jpg", 150, 150);
    lettera_5_img = PP.assets.image.load(s, "assets/immagini/arca.jpg", 150, 150);
}

function create_lettera (s, x, y){
    let Lettere_sing = PP.assets.image.add(s, img_lettere, x, y, 0, 0);
    PP.physics.add(s, Lettere_sing, PP.physics.type.STATIC);
    Lettere.push(Lettere_sing);
    testo_lettere.push(lettera_1_img);
    testo_lettere.push(lettera_2_img);
    testo_lettere.push(lettera_3_img);
    testo_lettere.push(lettera_4_img);
    testo_lettere.push(lettera_5_img);
}

function collision_lettera (s, lettera, player) {
    /*for (let i = 0; i < casse.length; i++){
        if (lettera == Lettere[i]){
            lettera_1 = PP.assets.image.add(s, testo_lettere[i], player.geometry.x + 250, player.geometry.y - 150, 0.5, 0.5);
        }
    }*/
    let prev_score = PP.game_state.get_variable("Lettere");
    PP.game_state.set_variable("Lettere", prev_score+1);
    PP.assets.destroy(lettera);

    lettera_1 = PP.assets.image.add(s, testo_lettere[prev_score], player.geometry.x + 250, player.geometry.y - 150, 0.5, 0.5);
    PP.physics.set_velocity_x(player, 0);
    PP.physics.set_velocity_y(player, 0);
    PP.physics.set_allow_gravity(player, false);
    lettera_aperta = true;
    jump_disable = true;
    dash_disable = true;
    move_disable = true;
    invincibilità = true;
}

function update_lettere (s){
    if (lettera_aperta == true){
        if (PP.interactive.kb.is_key_down(s, PP.key_codes.C)) {
            console.log("deino")
            jump_disable = false;
            dash_disable = false;
            move_disable = false;
            invincibilità = false;
            PP.physics.set_allow_gravity(player, true);
            PP.assets.destroy(lettera_1);
        }
    }
}

