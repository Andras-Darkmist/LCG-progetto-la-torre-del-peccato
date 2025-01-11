let img_enemy_3;
let img_vita_char;
let attack_check2 = false;
let caricatore;
let danno_reaload = true;;
let vulnerabile = false;
let morte_animazioni_caricatore = false;
let caricatore_vita;
let vite_char = [];
let curr_anim_caricatore = "Base";
let next_anim_caricatore = curr_anim_caricatore;



function preload_caricatore(s) {
    img_enemy_3 = PP.assets.sprite.load_spritesheet(s, "Assets/Immagini/Sprite Caricatore.PNG", 258, 260);
    img_vita_char = PP.assets.image.load(s, "Assets/Immagini/piattaforme/Piattaforma-03.png")
}

function create_caricatore(s) {
    caricatore = PP.assets.sprite.add(s, img_enemy_3, 480, 200, 0.5, 1);
    PP.physics.add(s, caricatore, PP.physics.type.DYNAMIC);
    PP.physics.set_allow_gravity(caricatore, false);
    caricatore_vita = 3;
    caricatore.geometry.scale_x = 1.3;
    caricatore.geometry.scale_y = 1.3;
    for (let i=0; i<caricatore_vita; i++)
        {
             let cuore = PP.assets.image.add(s, img_vita_char, 400+i*170, 680, 0, 0);
             cuore.tile_geometry.scroll_factor_x = 0;
             cuore.tile_geometry.scroll_factor_y = 0;
            vite_char.push(cuore);
        }
}

function load_animazioni_caricatore(s){
    PP.assets.sprite.animation_add(caricatore, "Base", 12, 13, 5, -1);
    PP.assets.sprite.animation_add(caricatore, "carica", 0, 5, 5, -1);
    PP.assets.sprite.animation_add(caricatore, "corsa", 5, 9, 5, -1);
    PP.assets.sprite.animation_add(caricatore, "Frenata", 10, 11, 5, -1);
    PP.assets.sprite.animation_play(caricatore, "Base");
}


function charge(s) {
    if (morte_animazioni_caricatore == false) {
        vulnerabile = false;
        next_anim_caricatore = "corsa";
        let sp;
        if (caricatore.geometry.flip_x == true) {
            sp = 900;
        }
        else {
            sp = -900;
        }
    
        PP.physics.set_velocity_x(caricatore, sp);
    }
   
}

function charge_stop(s) {
    if (morte_animazioni_caricatore == false) {
        vulnerabile = false;
        next_anim_caricatore = "Frenata";
        PP.physics.set_velocity_x(caricatore, 0);
        attack_check2 = false;
    }
}

function update_caricatore(s) {
    if (morte_animazioni_caricatore == false) {
        if (attack_check2 == true) {
            return;
        }
        if (caricatore.geometry.x < player.geometry.x) {
            next_anim_caricatore = "carica";
            caricatore.geometry.flip_x = true;
            PP.timers.add_timer(s, 1000, charge, false);
            PP.timers.add_timer(s, 2000, charge_stop, false);
            attack_check2 = true;
            vulnerabile = true;
        }
        else if (Math.abs(caricatore.geometry.x - player.geometry.x) < 500) {
            next_anim_caricatore = "carica";
            caricatore.geometry.flip_x = false;
            PP.timers.add_timer(s, 1000, charge, false);
            PP.timers.add_timer(s, 2000, charge_stop, false);
            attack_check2 = true;
            vulnerabile = true;
        }
        else {
            next_anim_caricatore = "Base";
        }
    }
}

function danno_caricatore (s, obj1, obj2) {
    if (danno_reaload == true) {
        danno_reaload = false;
        PP.timers.add_timer(s, 1000, reload_danno, false);
        if (eseguendo_dash == true && (PP.physics.get_velocity_x(player) >= 800 || PP.physics.get_velocity_x(player) <= -800) && vulnerabile == true)
            {
                caricatore_vita --;
                PP.assets.destroy (vite_char[caricatore_vita]);
                console.log(caricatore_vita);
                if (caricatore_vita <= 0)
                {
                    PP.assets.destroy (obj2);
                    morte_animazioni_caricatore = true;
                }
            }
        else if (eseguendo_dash == true){
            return;
        }
        else if (curr_anim != "die" && invincibilità == false){
            //console.log("sus danno");
            vita_persa (s);
        }
    }
    
    /*if (eseguendo_dash == true && vulnerabile == true){
        caricatore_vita --;
        console.log(caricatore_vita);
        if (caricatore_vita <= 0)
        {
            PP.assets.destroy (obj2);
            morte_animazioni_caricatore = true;
        }
    }
    else 
    {

    }*/
}

function reload_danno (s) {
    danno_reaload = true;
}

function update_animazioni_caricatore (s){
    if (morte_animazioni_caricatore == false) {
        if (next_anim_caricatore != curr_anim_caricatore) {
            PP.assets.sprite.animation_play(caricatore, next_anim_caricatore);
            curr_anim_caricatore = next_anim_caricatore;
        }
    }
}




