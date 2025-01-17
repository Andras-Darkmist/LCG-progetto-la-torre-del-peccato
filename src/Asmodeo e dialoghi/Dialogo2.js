let img_dialogo2;
let dialogo2_1_img;
let dialogo2_2_img;
let dialogo2_3_img;
let dialogo2_4_img;
let Dialogo2_testo;
let Dialogo2 = [];
let contatore_dialogo2 = 0;
let timer_dialogo2 = false;
let fine_lettura_testo_2 = false
let lettura_testo_2 = false;

function preload_Dialogo2 (s) {
    Dialogo2=[];
    testo_lettere = [];
    
    dialogo2_1_img = PP.assets.image.load(s, "assets/immagini/Dialoghi livello 2/Dialogo_Asmodeo1.png", 150, 150);
    dialogo2_2_img = PP.assets.image.load(s, "assets/immagini/Dialoghi livello 2/Dialogo_Asmodeo2.png", 150, 150);
    dialogo2_3_img = PP.assets.image.load(s, "assets/immagini/Dialoghi livello 2/Dialogo_Asmodeo3.png", 150, 150);
    dialogo2_4_img = PP.assets.image.load(s, "assets/immagini/Dialoghi livello 2/Dialogo_Asmodeo4.png", 150, 150);
}

function create_Dialogo2 (s){
    Dialogo2.push(dialogo2_1_img);
    Dialogo2.push(dialogo2_2_img);
    Dialogo2.push(dialogo2_3_img);
    Dialogo2.push(dialogo2_4_img);
}

function collision_Dialogo2 (s, Asmodeo, player) {
    if (lettura_testo_2 == false && fine_lettura_testo_2 == false) {
        PP.physics.set_velocity_x(player, 0);
        PP.physics.set_velocity_y(player, 0);
        PP.physics.set_allow_gravity(player, false);
        lettura_testo_2 = true;
        jump_disable = true;
        dash_disable = true;
        move_disable = true;
        invincibilità = true;
        next_anim = "stop";
        scrivi_dialogue2 (s);
    }
}

function scrivi_dialogue2 (s) {
    console.log(contatore_dialogo2);
    Dialogo2_testo = PP.assets.image.add(s, Dialogo2[contatore_dialogo2], 640, 520, 0.5, 0);
    Dialogo2_testo.tile_geometry.scroll_factor_x = 0;
    Dialogo2_testo.tile_geometry.scroll_factor_y = 0;
    contatore_dialogo2 ++;
    
    
}

function reenable_dialgue2 (s) {
    
    timer_dialogo2 = false;
}

function update_Dialogo2(s) {
    if (lettura_testo_2 == true) {
        if (timer_dialogo2 == false) {
            if (PP.interactive.kb.is_key_down(s, PP.key_codes.C)) {
                if (contatore_dialogo2 >= 4) {
                    console.log("deino")
                    jump_disable = false;
                    dash_disable = false;
                    move_disable = false;
                    invincibilità = false;
                    fine_lettura_testo_2 = true;
                    lettura_testo_2 = false;
                    contatore_dialogo2 = 0;
                    PP.physics.set_allow_gravity(player, true);
                    PP.assets.destroy(Dialogo2_testo);
                    PP.timers.add_timer(s, 10000, reenable_testo2, false);
                    return;
                }
                PP.assets.destroy(Dialogo2_testo);
                scrivi_dialogue2(s);
                timer_dialogo2 = true;
                PP.timers.add_timer(s, 800, reenable_dialgue2, false);
            }
        }
    }
}

function reenable_testo2 (s) {
    fine_lettura_testo_2 = false;
}