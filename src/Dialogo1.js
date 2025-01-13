let img_dialogo1;
let dialogo1_1_img;
let dialogo1_2_img;
let dialogo1_3_img;
let dialogo1_4_img;
let dialogo1_5_img;
let Dialogo1_testo;
let Dialogo1 = [];
let contatore_dialogo1 = 0;
let timer_dialogo1 = false;
let fine_lettura_testo_1 = false;
let lettura_testo_1 = false;

function preload_Dialogo1 (s) {
    Dialogo1=[];
        
    dialogo1_1_img = PP.assets.image.load(s, "assets/immagini/Dialoghi livello 1/Dialogo_Asmodeo1.png", 150, 150);
    dialogo1_2_img = PP.assets.image.load(s, "assets/immagini/Dialoghi livello 1/Dialogo_Asmodeo2.png", 150, 150);
    dialogo1_3_img = PP.assets.image.load(s, "assets/immagini/Dialoghi livello 1/Dialogo_Asmodeo3.png", 150, 150);
    dialogo1_4_img = PP.assets.image.load(s, "assets/immagini/Dialoghi livello 1/Dialogo_Asmodeo4.png", 150, 150);
    dialogo1_5_img = PP.assets.image.load(s, "assets/immagini/Dialoghi livello 1/Dialogo_Asmodeo5.png", 150, 150);
}

function create_Dialogo1 (s){
    Dialogo1.push(dialogo1_1_img);
    Dialogo1.push(dialogo1_2_img);
    Dialogo1.push(dialogo1_3_img);
    Dialogo1.push(dialogo1_4_img);
    Dialogo1.push(dialogo1_5_img);
}

function collision_Dialogo1 (s, Asmodeo, player) {
    if (fine_lettura_testo_1 == false) {
        scrivi_dialogue1 (s);
        PP.physics.set_velocity_x(player, 0);
        PP.physics.set_velocity_y(player, 0);
        PP.physics.set_allow_gravity(player, false);
        lettura_testo_1 = true;
        jump_disable = true;
        dash_disable = true;
        move_disable = true;
        invincibilità = true;
        next_anim = "stop";
    }
}

function scrivi_dialogue1 (s) {
    console.log(contatore_dialogo1);
    Dialogo1_testo = PP.assets.image.add(s, Dialogo1[contatore_dialogo1], 640, 520, 0.5, 0);
    Dialogo1_testo.tile_geometry.scroll_factor_x = 0;
    Dialogo1_testo.tile_geometry.scroll_factor_y = 0;
    contatore_dialogo1 ++;
    
    
}

function reenable_dialgue1 (s) {
    
    timer_dialogo1 = false;
}

function update_Dialogo1(s) {
    if (lettura_testo_1 == true) {
        if (timer_dialogo1 == false) {
            if (PP.interactive.kb.is_key_down(s, PP.key_codes.C)) {
                if (contatore_dialogo1 >= 5) {
                    console.log("deino")
                    jump_disable = false;
                    dash_disable = false;
                    move_disable = false;
                    invincibilità = false;
                    fine_lettura_testo_1 = true;
                    lettura_testo_1 = false;
                    contatore_dialogo1 = 0;
                    PP.physics.set_allow_gravity(player, true);
                    PP.assets.destroy(Dialogo1_testo);
                    PP.timers.add_timer(s, 10000, reenable_testo1, false);
                    Asmodeo.geometry.body_y = 8000;
                    return;
                }
                PP.assets.destroy(Dialogo1_testo);
                scrivi_dialogue1(s);
                timer_dialogo1 = true;
                PP.timers.add_timer(s, 800, reenable_dialgue1, false);
            }
        }
    }
}

function reenable_testo1 (s) {
    fine_lettura_testo_1 = false;
    Asmodeo.geometry.body_y = 520;
}