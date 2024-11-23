let img_player;
let player;
let png_shu;

let player_speed    = 300;
let jump_init_speed = 500;
let floor_height    = 620;
let player_dash     = 1000;

move_disable = false;
dash_disable = false;

let curr_anim = "stop"; // Questa variabile contiene l'animazione corrente

function configure_player_animations(s) {
    // Configuro le animazioni secondo lo spritesheet
    PP.assets.sprite.animation_add_list(player, "run", [6, 13, 20, 27, 34], 10, -1);    // Lista di frame, a 10 fps, inifito
    PP.assets.sprite.animation_add(player, "jump_up", 36, 36, 10, 0);
    PP.assets.sprite.animation_add(player, "jump_down", 42, 45, 10, 0);
    PP.assets.sprite.animation_add(player, "stop", 21, 21, 10, 0);
    PP.assets.sprite.animation_play(player, "stop");
}

function preload_player(s) {
    img_player     = PP.assets.sprite.load_spritesheet(s, "assets/immagini/spritesheet_player.png", 223, 190);
}

function create_player(s) {

    player = PP.assets.sprite.add(s, img_player, 150, 620, 0.5, 1);
    // Aggiungiamo il giocatore alla fisica come entità dinamica
    PP.physics.add(s, player, PP.physics.type.DYNAMIC);

}

function player_update(s) {

    //il giocatore inizia ad essere seguito
    
    if(player.geometry.x >= 400) {
        PP.camera.start_follow(s, player, -235, 260)
    }
    if(player.geometry.x < 400) {
        PP.camera.set_follow_offset(s, -235, 260)
    }

    //console.log(PP.physics.get_velocity_y(player));

    // Creo una variabile che conterra' l'animazione futura
    // per poter verificare se cambia dalla attuale
    let next_anim = curr_anim;
    if (move_disable == false){
        if(PP.interactive.kb.is_key_down(s, PP.key_codes.RIGHT)) {
            // Se e' premuto il tasto destro...
            PP.physics.set_velocity_x(player, player_speed);
            next_anim = "run";
        }
        else if(PP.interactive.kb.is_key_down(s, PP.key_codes.LEFT)) {
            // Se e' premuto il tasto sinistro...
            PP.physics.set_velocity_x(player, -player_speed);
            next_anim = "run";
            } else {
            // Se non e' premuto alcun tasto...
            PP.physics.set_velocity_x(player, 0);
             next_anim = "stop";
        }
    }

    //salto

    if(PP.physics.get_velocity_y(player) == 0) {

        if(PP.interactive.kb.is_key_down(s, PP.key_codes.SPACE)) {
            // ... e premo il tasto spazio, allo salto
            PP.physics.set_velocity_y(player, -jump_init_speed);
        }
    }


    // Le animazioni del salto vengono gestite in base alla velocita'
    // verticale
    if(PP.physics.get_velocity_y(player) < 0) {
        next_anim = "jump_up";
    }
    else if(PP.physics.get_velocity_y(player) > 0) {
        next_anim = "jump_down";
    }


    // Ora verifico l'animazione scelta:
    // - se e' uguale a quella attuale, non faccio niente
    // - se e' cambiata, la applico e aggiorno curr_anim
    if(next_anim != curr_anim) {
        curr_anim = next_anim;
        PP.assets.sprite.animation_play(player, next_anim);
    }

    // Logica per specchiare il giocatore:
    if (PP.physics.get_velocity_x(player) < 0) {
        player.geometry.flip_x = true;
    }
    else if (PP.physics.get_velocity_x(player) > 0) {
        player.geometry.flip_x = false;
    }

}

    function dash_reset(s) {
        PP.physics.set_velocity_x(player, 0);
        PP.physics.set_allow_gravity (player, true);
        move_disable = false;
    }

    function reenable_dash(s) {
        dash_disable = false;
    }

    function manage_dash (s){
        if (dash_disable == false) {
            if (PP.interactive.kb.is_key_down(s, PP.key_codes.Q)) {
                PP.physics.set_velocity_y(player, 0);
                if (player.geometry.flip_x == true) {
                    PP.physics.set_velocity_x(player, -player_speed-800);
                }
                else if (player.geometry.flip_x == false) {
                    PP.physics.set_velocity_x(player, player_speed+800);
                }
                move_disable = true;
                PP.physics.set_allow_gravity (player, false);
                PP.timers.add_timer(s, 700, reenable_dash, false);
                PP.timers.add_timer(s,200, dash_reset, false);
                dash_disable = true;
            }
        }
    }
