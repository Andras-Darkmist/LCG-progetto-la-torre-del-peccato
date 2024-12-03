let img_enemy_3;
let attack_check2 = false;
let caricatore;


function preload_caricatore(s) {
    img_enemy_3 = PP.assets.sprite.load_spritesheet(s, "Assets/Immagini/Sprite Caricatore.PNG", 258, 260);
}

function create_caricatore(s) {
    caricatore = PP.assets.sprite.add(s, img_enemy_3, 800, 620, 0.5, 1);
    PP.physics.add(s, caricatore, PP.physics.type.DYNAMIC);
    PP.physics.set_allow_gravity(caricatore, false);
}

function load_animazioni_caricatore(s){
    PP.assets.sprite.animation_add(caricatore, "Base", 12, 13, 5, -1);
    PP.assets.sprite.animation_add(caricatore, "carica", 0, 5, 5, -1);
    PP.assets.sprite.animation_add(caricatore, "corsa", 5, 9, 5, -1);
    PP.assets.sprite.animation_add(caricatore, "Frenata", 10, 11, 5, -1);
    PP.assets.sprite.animation_play(caricatore, "Base");
}


let curr_anim_caricatore = "Base";
let next_anim_caricatore = curr_anim_caricatore;

function charge(s) {
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

function charge_stop(s) {
    next_anim_caricatore = "Frenata";
    PP.physics.set_velocity_x(caricatore, 0);
    attack_check2 = false;
}

function update_caricatore(s) {
    
    if (attack_check2 == true) {
        return;
    }
    if (caricatore.geometry.x < player.geometry.x) {
        next_anim_caricatore = "carica";
        caricatore.geometry.flip_x = true;
        PP.timers.add_timer(s, 1000, charge, false);
        PP.timers.add_timer(s, 2000, charge_stop, false);
        attack_check2 = true;
    }
    else if (Math.abs(caricatore.geometry.x - player.geometry.x) < 500) {
        next_anim_caricatore = "carica";
        caricatore.geometry.flip_x = false;
        PP.timers.add_timer(s, 1000, charge, false);
        PP.timers.add_timer(s, 2000, charge_stop, false);
        attack_check2 = true;
    }
    else {
        next_anim_caricatore = "Base";
    }

  
 

}

function update_animazioni_caricatore (s){
    if (next_anim_caricatore != curr_anim_caricatore) {
        PP.assets.sprite.animation_play(caricatore, next_anim_caricatore);
        curr_anim_caricatore = next_anim_caricatore;
    }
}




