let img_background;
let floor;
let floor_finale;
let scalino_1;
let scalino_2;
let scalino_3;
let scalino_4;
let scalino_5;
let scalino_6;
let scalino_7;
let scalino_8;
let scalino_9;
let muro_iniziale;

let scala_1;
let scala_2;
let scala_3;
let scala_4;
let scala_5;

let bg;

let pedana;
let chiusura_porta = true;


function preload (s) {
    preload_lettera (s);
    preload_score (s);
    preload_player (s);
    preload_cassa (s);
    preload_porta1 (s);
    preload_piatt (s);
    preload_piatt_move (s);
    preload_ghiglio(s);
    preload_Lanciatore(s);
    preload_slot(s);

    img_background = PP.assets.image.load(s, "Assets/Immagini/Sfondo lvl1.PNG");
}

// PROBLEMI PER ORA: specie di caduta continua mentre si è sulla cassa, le casse si compenetrano, 
    // servirebbe un modo di mettere 2 collider per lo stesso oggetto in modo da poter saltare anche su pedana,
    // animazione morte personaggio non va ogni tanto, animazione morte non viene riprodotta alla morte, dal secondo lanciatore in poi sparano
    // anche da morti e fanno si che il giocatore possa muoversi anche dopo la morte, cambio visuale si bugga quando si salta, 
    // le pedane mobili non vanno su e giù come dovrebbero, 

// DA INSERIRE: proiettili spostano casse, proiettili lanciatore scompaiono dopo un po' o al contatto
    // modo di rendere immateriale la porta, 

function create (s) {
    


    bg = PP.assets.tilesprite.add(s, img_background, 0, -180, 2800, 800, 0, 0);
    bg.tile_geometry.scroll_factor_x = 0;
    //bg.tile_geometry.scroll_factor_y = 0;
    //pavimento

    create_score(s);
    floor = PP.shapes.rectangle_add(s, 640, 635, 19880, 30, "0x000000", 1   );
    PP.physics.add(s, floor, PP.physics.type.STATIC);

    floor_finale = PP.shapes.rectangle_add(s, 12300, 635, 2250, 30, "0x00f080", 1   );
    PP.physics.add(s, floor_finale, PP.physics.type.STATIC);
    
    scalino_1 = PP.shapes.rectangle_add(s, 11190, 713, 30, 185, "0x00f080", 1   );
    PP.physics.add(s, scalino_1, PP.physics.type.STATIC);
    
    scalino_2 = PP.shapes.rectangle_add(s, 11080, 820, 250, 30, "0x00f080", 1   );
    PP.physics.add(s, scalino_2, PP.physics.type.STATIC);
    
    scalino_3 = PP.shapes.rectangle_add(s, 10970, 900, 30, 185, "0x00f080", 1   );
    PP.physics.add(s, scalino_3, PP.physics.type.STATIC);
    
    scalino_4 = PP.shapes.rectangle_add(s, 10560, 1010, 860, 30, "0x00f080", 1   );
    PP.physics.add(s, scalino_4, PP.physics.type.STATIC);

    scalino_5 = PP.shapes.rectangle_add(s, 9490, 1000, 30, 750, "0x00f080", 1   );
    PP.physics.add(s, scalino_5, PP.physics.type.STATIC);
    
    scalino_6 = PP.shapes.rectangle_add(s, 9900, 1410, 850, 30, "0x00f080", 1   );
    PP.physics.add(s, scalino_6, PP.physics.type.STATIC);
    
    scalino_7 = PP.shapes.rectangle_add(s, 10320, 1550, 30, 300, "0x00f080", 1   );
    PP.physics.add(s, scalino_7, PP.physics.type.STATIC);
    
    scalino_8 = PP.shapes.rectangle_add(s, 11410, 1710, 2210, 30, "0x00f080", 1   );
    PP.physics.add(s, scalino_8, PP.physics.type.STATIC);
    
    scalino_9 = PP.shapes.rectangle_add(s, 12500, 1220, 30, 1150, "0x00f080", 1   );
    PP.physics.add(s, scalino_9, PP.physics.type.STATIC);

    //barriera inizio livello

    muro_iniziale = PP.shapes.rectangle_add(s, 0, 0, 1, 1280, "0x000000", 0);
    PP.physics.add(s, muro_iniziale, PP.physics.type.STATIC);

    //prime scale

    scala_1 = PP.shapes.rectangle_add(s, 1850, 470, 150, 300, "0xfab304", 1);
    PP.physics.add(s, scala_1, PP.physics.type.STATIC);
    
    scala_2 = PP.shapes.rectangle_add(s, 2000, 545, 150, 150, "0xfab304", 1);
    PP.physics.add(s, scala_2, PP.physics.type.STATIC);
    
    scala_3 = PP.shapes.rectangle_add(s, 9900, 545, 150, 150, "0xfab304", 1);
    PP.physics.add(s, scala_3, PP.physics.type.STATIC);

    scala_4 = PP.shapes.rectangle_add(s, 10050, 470, 150, 300, "0xfab304", 1);
    PP.physics.add(s, scala_4, PP.physics.type.STATIC);
    
    scala_5 = PP.shapes.rectangle_add(s, 10200, 470, 150, 300, "0xfab304", 1);
    PP.physics.add(s, scala_5, PP.physics.type.STATIC);

    //bo
    
    pedana = PP.shapes.rectangle_add(s, 3000, 639, 150, 40, "0xfbc456", 1);
    PP.physics.add(s, pedana, PP.physics.type.STATIC);


    //funzioni richiamate
    create_lettera(s, 7800, 170);
    create_lettera(s, 7000, 170);

    create_player (s);
    create_cassa (s, 750, 450);
    create_cassa (s, 2550, 450);
    create_cassa (s, 4050, 360);
    create_cassa (s, 5400, 60);
    create_cassa (s, 7350, 60);
    create_cassa (s, 11050, 950);
    create_cassa (s, 11090, 780);
    create_porta1 (s);
    create_piatt (s, 5100, 310);
    create_piatt (s, 5350, -950);
    create_piatt_move (s, 5550, 320);
    create_piatt_move (s, 5780, -450);
    create_ghiglio(s, 7950, 170);
    create_ghiglio(s, 8500, 170);
    create_ghiglio(s, 8950, 170);
    
    create_Lanciatore(s, 1500, 450);
    create_Lanciatore(s, 4650, 450);
    create_Lanciatore(s, 9900, 250);
    create_slot_animata(s, 6600, 620);

    //collider di tutte le cose
    //player
    
    PP.physics.add_collider(s, player, muro_iniziale);
    PP.physics.add_collider(s, player, porta1);
    PP.physics.add_collider_f(s, player, floor, salto_si);
    PP.physics.add_collider_f(s, player, floor_finale, salto_si);
    PP.physics.add_collider_f(s, player, scala_1, salto_si);
    PP.physics.add_collider_f(s, player, scalino_1, salto_si);
    PP.physics.add_collider_f(s, player, scalino_2, salto_si);
    PP.physics.add_collider_f(s, player, scalino_3, salto_si);
    PP.physics.add_collider_f(s, player, scalino_4, salto_si);
    PP.physics.add_collider_f(s, player, scalino_5, salto_si);
    PP.physics.add_collider_f(s, player, scalino_6, salto_si);
    PP.physics.add_collider_f(s, player, scalino_7, salto_si);
    PP.physics.add_collider_f(s, player, scalino_8, salto_si);
    PP.physics.add_collider_f(s, player, scalino_9, salto_si);
    PP.physics.add_collider_f(s, player, scala_2, salto_si);
    PP.physics.add_collider_f(s, player, scala_3, salto_si);
    PP.physics.add_collider_f(s, player, scala_4, salto_si);
    PP.physics.add_collider_f(s, player, scala_5, salto_si);
    PP.physics.add_collider_f(s, player, pedana, apertura_porta1);
    for (let g = 0; g < casse.length; g++) {
        PP.physics.add_collider(s, casse[g], piatt_move_sing);
    }
    PP.physics.add_collider_f(s, player, piatt_move_sing, salto_si);
    PP.physics.add_collider_f(s, player, ghiglio, salto_si);

    for (let g = 0; g < Lettere.length; g++) {
        PP.physics.add_overlap_f(s, Lettere[g], player, collision_lettera);
    }

    /*
    for (let i = 0; i < ghigliottine.length; i++) {
        PP.physics.add_collider_f(s, player, ghigliottine[i], salto_si);
        PP.physics.add_collider(s, floor, ghigliottine[i]);
        for (let g = 0; g < casse.length; g++) {
            PP.physics.add_collider(s, casse[g], ghigliottine[i]);
        }
    }
        */

    for (let i = 0; i < piatt.length; i++) {
        PP.physics.add_collider_f(s, player, piatt[i], salto_si);
        for (let g = 0; g < casse.length; g++) {
            PP.physics.add_collider(s, casse[g], piatt[i]);
        }
    }

    /*
    for (let i = 0; i < piatt_move.length; i++) {
        PP.physics.add_collider_f(s, player, piatt_move[i], salto_si);
        for (let g = 0; g < casse.length; g++) {
            PP.physics.add_collider(s, casse[g], piatt_move[i]);
        }
    }
        */


    //casse

    for (let i = 0; i < casse.length; i++) {
        PP.physics.add_collider_f(s, player, casse[i], salto_si);
        PP.physics.add_collider(s, floor, casse[i]);
        PP.physics.add_collider(s, floor_finale, casse[i]);
        PP.physics.add_collider(s, casse[i], scala_1);
        PP.physics.add_collider(s, casse[i], scalino_2);
        PP.physics.add_collider(s, casse[i], scalino_3);
        PP.physics.add_collider(s, casse[i], scalino_6);
        PP.physics.add_collider(s, casse[i], scalino_7);
        PP.physics.add_collider(s, casse[i], scalino_8);
        for (let g = 0; g < casse.length; g++) {
            PP.physics.add_collider(s, casse[g], casse[i]);
        }
    }
    
    for (let g = 0; g < casse.length; g++) {
        PP.physics.add_collider_f(s, casse[g], pedana, apertura_porta1);
    }
   

    //nemici

    for (let i = 0; i < slot_animate.length; i++) {
        PP.physics.add_collider_f(s, player, slot_animate[i], inerme);
        for (let g = 0; g < casse.length; g++) {
            PP.physics.add_collider(s, casse[g], slot_animate[i]);
        }
        PP.physics.add_collider(s, slot_animate[i], floor);
        inermità_slot. push(i);
    }
    

    for (let i = 0; i < lanciatori.length; i++) {
        PP.physics.add_overlap_f(s, player, lanciatori[i], kill);
        PP.physics.add_collider(s, lanciatori[i], scala_3);
        for (let g = 0; g < casse.length; g++) {
            PP.physics.add_collider(s, casse[g], lanciatori[i]);
        }
        PP.physics.add_collider(s, lanciatori[i], floor);
        morte_nemici.push(i);
    }



    
    configure_player_animations(s);
    configure_Lanciatore_animations(s);
}

function update (s) {
    bg.tile_geometry_x = PP.camera.get_scroll_x(s) * 0.5;


    update_score(s);

    player_update(s);
    update_cassa(s);
    update_porta1(s);
    update_piatt (s);
    update_piatt_move (s);
    update_ghiglio(s);

    update_Lanciatore(s);
    update_slot_animata(s);

    manage_dash(s);

    // per chiudere la porta

    if(chiusura_porta == false){
        porta1.geometry.y = 40;
        porta1.geometry.body_y = 40;
    }

    if(chiusura_porta == true){
        porta1.geometry.y = 320;
        porta1.geometry.body_y = 320;
    }

    chiusura_porta = true;

    //console.log(move_disable);
}

function destroy (s) {
    
}

function apertura_porta1(s) {
    chiusura_porta = false;

    // implementare funzione per il salto
    if ((player.geometry.x < 3050 || player.geometry.x > 2700) && player.geometry.y >= 618){
        jump_disable = false;
    }
}

PP.scenes.add("level1", preload, create, update, destroy);