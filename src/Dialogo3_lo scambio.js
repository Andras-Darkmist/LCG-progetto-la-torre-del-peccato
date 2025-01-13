let img_dialogo3;
let dialogo3_1_img;
let dialogo3_2_img;
let dialogo3_3_img;
let Dialogo3_testo;
let Dialogo3 = [];
let contatore_dialogo3 = 0;
let timer_dialogo3 = false;
let fine_lettura_testo_3 = false;
let lettura_testo_3 = false;
let condizione_finale3 = false;

function preload_Dialogo3 (s) {
    Dialogo3=[];
        
    dialogo3_1_img = PP.assets.image.load(s, "assets/immagini/Dialoghi livello 3/Dialogo_1.png", 150, 150);
    dialogo3_2_img = PP.assets.image.load(s, "assets/immagini/Dialoghi livello 3/Dialogo_2.png", 150, 150);
    dialogo3_3_img = PP.assets.image.load(s, "assets/immagini/Dialoghi livello 3/Dialogo_3.png", 150, 150);
}

function create_Dialogo3 (s){
    Dialogo3.push(dialogo3_1_img);
    Dialogo3.push(dialogo3_2_img);
    Dialogo3.push(dialogo3_3_img);
}

function collision_Dialogo3 (s, ultima_cassa, player) {
    console.log("dialogo ifnale");
    if (fine_lettura_testo_3 == false) {
        scrivi_dialogue3 (s);
        PP.physics.set_velocity_x(player, 0);
        PP.physics.set_velocity_y(player, 0);
        PP.physics.set_allow_gravity(player, false);
        lettura_testo_3 = true;
        jump_disable = true;
        dash_disable = true;
        move_disable = true;
        invincibilità = true;
        next_anim = "stop";
    }
}

function scrivi_dialogue3 (s) {
    console.log(contatore_dialogo3);
    Dialogo3_testo = PP.assets.image.add(s, Dialogo3[contatore_dialogo3], 640, 520, 0.5, 0);
    Dialogo3_testo.tile_geometry.scroll_factor_x = 0;
    Dialogo3_testo.tile_geometry.scroll_factor_y = 0;
    
    
}

function reenable_dialgue3 (s) {
    
    timer_dialogo3 = false;
}

function update_Dialogo3(s) {
    if (lettura_testo_3 == true) {
        if (timer_dialogo3 == false) {
            if (PP.interactive.kb.is_key_down(s, PP.key_codes.C)) {
                let prev_score = PP.game_state.get_variable("Monete");
                if (contatore_dialogo3 != 0) {
                    console.log("deino")
                    jump_disable = false;
                    dash_disable = false;
                    move_disable = false;
                    invincibilità = false;
                    fine_lettura_testo_3 = true;
                    lettura_testo_3 = false;
                    contatore_dialogo3 = 0;
                    PP.physics.set_allow_gravity(player, true);
                    PP.assets.destroy(Dialogo3_testo);
                    if (prev_score >= 14)
                        {
                            prev_score = 0;
                            PP.game_state.set_variable("Monete", prev_score);
                            condizione_finale3 = true;
                        }
                    ultima_cassa.geometry.body_y = 10000;
                    return;
                }

                
                if (prev_score >= 14)
                {
                    PP.assets.destroy(Dialogo3_testo);
                    contatore_dialogo3 = 2;
                    scrivi_dialogue3(s);
                    timer_dialogo3 = true;
                    PP.timers.add_timer(s, 800, reenable_dialgue3, false);
                }
                else
                {
                    PP.assets.destroy(Dialogo3_testo);
                    contatore_dialogo3 = 1;
                    scrivi_dialogue3(s);
                    timer_dialogo3 = true;
                    PP.timers.add_timer(s, 800, reenable_dialgue3, false);
                }

                
            }
        }
    }
}
