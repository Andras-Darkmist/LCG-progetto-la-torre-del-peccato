let img_player;
let player;
let png_shu;

let player_speed = 300;
let jump_init_speed = 350;
let floor_height = 620;
let player_dash = 1000;
let danno_on = false;

move_disable = false;
dash_disable = false;
jump_disable = false;
eseguendo_dash = false;

let curr_anim = "stop"; // Questa variabile contiene l'animazione corrente

let next_anim;
next_anim = curr_anim;

function configure_player_animations(s) {
    // Configuro le animazioni secondo lo spritesheet
    PP.assets.sprite.animation_add(player, "run", 4, 7, 5, -1);    // Lista di frame, a 10 fps, inifito
    PP.assets.sprite.animation_add(player, "jump_up", 8, 8, 5, 0);
    PP.assets.sprite.animation_add(player, "jump_down", 8, 8, 10, 0);
    PP.assets.sprite.animation_add(player, "stop", 0, 0, 5, 0);
    PP.assets.sprite.animation_add(player, "dash", 1, 3, 5, -1);
    PP.assets.sprite.animation_add(player, "Danno", 9, 10, 8, -1);
    PP.assets.sprite.animation_add(player, "die", 9, 10, 8, -1);
    //PP.assets.sprite.animation_add_list(player, "die", [0, 1, 2, 3, 4, 5, 7, 8, 9, 10, 10, 10, 10, 10], 10, 0);
    //PP.assets.sprite.animation_add(player, "dead", 10, 10, 10, -1);
    PP.assets.sprite.animation_play(player, "stop");
}

function preload_player(s) {
    img_player = PP.assets.sprite.load_spritesheet(s, "assets/immagini/Elia_spritehseet_1.PNG", 172, 200);
}

function create_player(s) {
    player = PP.assets.sprite.add(s, img_player, 500, 100, 0.5, 1);
    // Aggiungiamo il giocatore alla fisica come entità dinamica
    PP.physics.add(s, player, PP.physics.type.DYNAMIC);

    //disattivo il blocco del movimento creato dalla morte  

    move_disable = false;
    dash_disable = false;
}

function player_update(s) {

    // per capire le misure del livello
    //console.log(player.geometry.x)
    //console.log(player.geometry.y)

    //il giocatore inizia ad essere seguito dalla camera

    let pos_y_pla = player.geometry.y - 350;
    let pos_x_pla = player.geometry.x - 645;

    if (player.geometry.x >= 400) {
        PP.camera.start_follow(s, player, -235, 260)
    }

    //prova per sistemare problema della camera

    /*if(player.geometry.x >= 400) {
        if(player.geometry.x >= 401){
            if (PP.physics.get_velocity_y(player) < 0 || PP.physics.get_velocity_y(player) > 0){
                PP.camera.set_follow_offset(s, -235, pos_y_pla)
                console.log("sus")
            }
            else {
                PP.camera.set_follow_offset(s, -235, 260)
            }
        }
        else {
            PP.camera.start_follow(s, player, -235, 260)
        }
    }*/

    if (player.geometry.x < 400) {
        PP.camera.set_follow_offset(s, (pos_x_pla), (pos_y_pla))
    }


    // Creo una variabile che conterra' l'animazione futura
    // per poter verificare se cambia dalla attuale

    

    // MOVIMENTO laterale giocatore

    if (move_disable == false) {
        if (PP.interactive.kb.is_key_down(s, PP.key_codes.RIGHT)) {
            // Se e' premuto il tasto destro...
            PP.physics.set_velocity_x(player, player_speed);
            next_anim = "run";
        }
        else if (PP.interactive.kb.is_key_down(s, PP.key_codes.LEFT)) {
            // Se e' premuto il tasto sinistro...
            PP.physics.set_velocity_x(player, -player_speed);
            next_anim = "run";
        }
        else {
            // Se non e' premuto alcun tasto...
            PP.physics.set_velocity_x(player, 0);
            next_anim = "stop";
        }
    }


    // SALTO

    //(PP.physics.get_velocity_y(player) == 0)

    if (jump_disable == false) {
        if (PP.interactive.kb.is_key_down(s, PP.key_codes.SPACE)) {
            // ... e premo il tasto spazio, allo salto
            PP.physics.set_velocity_y(player, -jump_init_speed);
        }
    }


    // Le animazioni del salto vengono gestite in base alla velocita'
    // verticale

    if (PP.physics.get_velocity_y(player) < 0) {
        if (danno_on == false) {
            next_anim = "jump_up";
        }
    }
    else if (PP.physics.get_velocity_y(player) > 0) {
        if (danno_on == false) {
            next_anim = "jump_up";
        }
    }

    if (PP.physics.get_velocity_x(player) < -800) {
        next_anim = "dash";
    }
    else if (PP.physics.get_velocity_x(player) > 800) {
        next_anim = "dash";
    }

    // Ora verifico l'animazione scelta:
    // - se e' uguale a quella attuale, non faccio niente
    // - se e' cambiata, la applico e aggiorno curr_anim

    if (next_anim != curr_anim) {
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



    // blocco salto se non si è in collisione con qualcosa

    jump_disable = true;
}

// FUNZIONE PER IL SALTO IN COLLISIONE

function salto_si(s, obj1, obj2) {
    // if necessario per impedire che si possa saltare anche toccando il lato degli oggetti
    //  PROBLEMA - penso per il fatto che il personaggio cade mentre è sulle cassa la posizione y di personaggio e cassa
    // risulta sfasata, questa soluzione non permette quindi di saltare mentre si è sulle casse ma su tutto
    // il resto si

    //if((obj1).geometry.y < (obj2).geometry.y){
    jump_disable = false;
    //}

    // questa parte della funzione permette di spingere la cassa un po' più forte e quindi più lontano quando si dasha
    // sostanzialmente sospende temporaneamente il drag delle casse nel momento in cui avviene la collisione

    for (let i = 0; i < ghigliottine.length; i++) {
        if (obj2 == casse[i] && eseguendo_dash ==true) {
            console.log("sus")
            PP.physics.set_drag_x(casse[i], 0);
            if (player.geometry.flip_x == true) {
                PP.physics.set_drag_x(casse[i], 0);
                PP.physics.set_velocity_x(casse[i], -500);
                PP.timers.add_timer(s, 400, rimetti_drag, false);
            }
            if (player.geometry.flip_x == false) {
                PP.physics.set_drag_x(casse[i], 0);
                PP.physics.set_velocity_x(casse[i], 500);
                PP.timers.add_timer(s, 400, rimetti_drag, false);
            }
        }
    }
}

function rimetti_drag(s) {
    for (let i = 0; i < ghigliottine.length; i++) {
        PP.physics.set_drag_x(casse[i], 7000);
    }
}



//funzioni per il dash

function dash_reset(s) {
    PP.physics.set_velocity_x(player, 0);
    PP.physics.set_allow_gravity(player, true);
    move_disable = false;
    eseguendo_dash = false;
}

function reenable_dash(s) {
    dash_disable = false;
}

function manage_dash(s) {
    if (dash_disable == false) {
        if (PP.interactive.kb.is_key_down(s, PP.key_codes.Q)) {
            PP.physics.set_velocity_y(player, 0);
            if (player.geometry.flip_x == true) {
                eseguendo_dash = true;
                PP.physics.set_velocity_x(player, -player_speed - 800);
                console.log(player.geometry.x);
                console.log(player.geometry.y);
                //console.log(PP.physics.get_velocity_x(player));

            }
            else if (player.geometry.flip_x == false) {
                eseguendo_dash = true;
                PP.physics.set_velocity_x(player, player_speed + 800);
                console.log(player.geometry.x);
                console.log(player.geometry.y);
                console.log(PP.physics.get_velocity_x(player));
            }
            move_disable = true;
            PP.physics.set_allow_gravity(player, false);
            PP.timers.add_timer(s, 2000, reenable_dash, false);
            PP.timers.add_timer(s, 300, dash_reset, false);
            dash_disable = true;
        }
    }
}

function morte(s) {
    move_disable = true;
    dash_disable = true;
    jump_disable = true;
    danno_on = true;
    PP.physics.set_velocity_x(player, 0);
    PP.physics.set_velocity_y(player, 30);
    PP.assets.sprite.animation_stop(player);
    next_anim = "die";
    console.log(next_anim);
    PP.assets.sprite.animation_play(player, next_anim);
    PP.timers.add_timer(s, 1000, game_over, false);
}

function game_over(s) {
    PP.scenes.start("morte");
}


let invincibilità = false;

function danno(s) {
    danno_on = true;
    invincibilità = true;
    next_anim = "Danno";
    console.log("dano subito");
    move_disable = true;
    dash_disable = true;
    jump_disable = true;
    PP.physics.set_velocity_x(player, -200);
    PP.physics.set_velocity_y(player, -300);
    PP.assets.sprite.animation_stop(player);
    PP.timers.add_timer(s,1000, fine_danno, false);
}

function fine_danno(s) {
    danno_on = false;
    invincibilità = false;
    move_disable = false;
    dash_disable = false;
    jump_disable = false;
    next_anim = "idle";
}