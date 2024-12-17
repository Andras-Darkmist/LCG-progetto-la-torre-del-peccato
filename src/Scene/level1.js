let bg;
let img_background;
let img_colonne;
let img_slot_nuove;
let colonne_davanti;
let slot_nuove;
let img_moquette;
let moquette;

let floor;
let floor_finale;
let floor_finale_2;
let floor_finale_3;
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

let pedana1;
let pedana2;
let pedana3;
let chiusura_porta_1 = true;
let chiusura_porta_finale = true;


function preload (s) {
    preload_vite (s);
    preload_lettera (s);
    preload_score (s);
    preload_player (s);
    preload_cassa (s);
    preload_porta (s);
    preload_piatt (s);
    preload_piatt_move (s);
    //preload_piatt_move2 (s);
    preload_ghiglio(s);
    preload_Lanciatore(s);
    preload_slot(s);

    img_background = PP.assets.image.load(s, "Assets/Immagini/Sfondo lvl1 copia.png");
    img_slot_nuove = PP.assets.image.load(s, "Assets/Immagini/slot nuove copia.png");
    img_colonne = PP.assets.image.load(s, "Assets/Immagini/colonne davanti copia.png");
    img_moquette = PP.assets.image.load(s, "Assets/Immagini/moquette.png");
}

// PROBLEMI PER ORA: specie di caduta continua mentre si è sulla cassa, le casse si compenetrano, HUD ferma, se si lascia in vita il primo
// lanciatore e si uccide il secondo quando si esce dall'area di lancio carte crasha tutto, il restart dopo game over non va,
//  problema con la scomparsa delle carte lanciatore su scalino, animazione lanciatore è scoordinata rispetto a lancio effettivo carta, 
// da sistemaer il lieve lag della piattaforma mobile fnale rispetto alla pressione pedana, passaggio da sotto pavimento finel lv 1 non sempre va anzi,
// errore violation quando si è a fine livello e relativo lag pesante, problema funzione salto solo da sopra agli oggetti che con casse non va, 
// problema lame ghigliottine ogni tanto rimanogno giù, problema del dash sulle slot, piattaforme mobili non sono sincronizzate bene

// DA INSERIRE: proiettili spostano casse, proiettili lanciatore scompaiono dopo un po' o al contatto
    // modo di rendere immateriale la porta, sostituire carta di quadri con picche,

function create (s) {

    bg = PP.assets.tilesprite.add(s, img_background, 0, 0, 2800, 380, 0, 0);
    bg.tile_geometry.scroll_factor_x = 0;
    //bg.tile_geometry.scroll_factor_y = 0;
    slot_nuove = PP.assets.tilesprite.add(s, img_slot_nuove, 0, 390, 2800, 175, 0, 0);
    slot_nuove.tile_geometry.scroll_factor_x = 0;
    //slot_nuove.tile_geometry.scroll_factor_y = 0;
    colonne_davanti = PP.assets.tilesprite.add(s, img_colonne, 0, 0, 2800, 650, 0, 0);
    colonne_davanti.tile_geometry.scroll_factor_x = 0;
    //colonne_davanti.tile_geometry.scroll_factor_y = 0;
    moquette = PP.assets.tilesprite.add(s, img_moquette, 0, 650, 12000, 200, 0, 0);
    moquette.tile_geometry.scroll_factor_x = 0;
    //colonne_davanti.tile_geometry.scroll_factor_y = 0;

    bg.geometry.scale_x = 1.7;
    bg.geometry.scale_y = 1.7;
    //bg.tile_geometry.scroll_factor_y = 0;
    //pavimento

    create_score(s);
    create_vite(s);

    floor = PP.shapes.rectangle_add(s, 640, 635, 19880, 30, "0x000000", 1   );
    PP.physics.add(s, floor, PP.physics.type.STATIC);

    floor_finale = PP.shapes.rectangle_add(s, 11300, 635, 280, 30, "0x00f080", 1   );
    PP.physics.add(s, floor_finale, PP.physics.type.STATIC);
    
    floor_finale_2 = PP.shapes.rectangle_add(s, 12280, 635, 560, 30, "0x00f080", 1   );
    PP.physics.add(s, floor_finale_2, PP.physics.type.STATIC);
    
    floor_finale_3 = PP.shapes.rectangle_add(s, 11720, 635, 560, 30, "0xdcf080", 1   );
    PP.physics.add(s, floor_finale_3, PP.physics.type.STATIC);
    
    scalino_1 = PP.shapes.rectangle_add(s, 11190, 713, 30, 185, "0x00f080", 1   );
    PP.physics.add(s, scalino_1, PP.physics.type.STATIC);
    
    scalino_2 = PP.shapes.rectangle_add(s, 11080, 780, 250, 30, "0x00f080", 1   );
    PP.physics.add(s, scalino_2, PP.physics.type.STATIC);
    
    scalino_3 = PP.shapes.rectangle_add(s, 10970, 850, 30, 185, "0x00f080", 1   );
    PP.physics.add(s, scalino_3, PP.physics.type.STATIC);
    
    scalino_4 = PP.shapes.rectangle_add(s, 10560, 910, 860, 30, "0x00f080", 1   );
    PP.physics.add(s, scalino_4, PP.physics.type.STATIC);

    scalino_5 = PP.shapes.rectangle_add(s, 9490, 950, 30, 750, "0x00f080", 1   );
    PP.physics.add(s, scalino_5, PP.physics.type.STATIC);
    
    scalino_6 = PP.shapes.rectangle_add(s, 9900, 1210, 850, 30, "0x00f080", 1   );
    PP.physics.add(s, scalino_6, PP.physics.type.STATIC);
    
    scalino_7 = PP.shapes.rectangle_add(s, 10320, 1350, 30, 300, "0x00f080", 1   );
    PP.physics.add(s, scalino_7, PP.physics.type.STATIC);
    
    scalino_8 = PP.shapes.rectangle_add(s, 11410, 1510, 2210, 30, "0x00f080", 1   );
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

    // pedane a pressione
    
    pedana1 = PP.shapes.rectangle_add(s, 3000, 639, 150, 40, "0xfbc456", 1);
    PP.physics.add(s, pedana1, PP.physics.type.STATIC);
    
    pedana2 = PP.shapes.rectangle_add(s, 12200, 1513, 150, 40, "0xfbc456", 1);
    PP.physics.add(s, pedana2, PP.physics.type.STATIC);

    pedana3 = PP.shapes.rectangle_add(s, 12200, 637, 150, 40, "0xfbc456", 1);
    PP.physics.add(s, pedana3, PP.physics.type.STATIC);


    //funzioni richiamate
    create_lettera(s, 7800, 170);
    create_lettera(s, 7000, 170);
    create_lettera(s, 5400, -1400);

    create_player (s);
    create_cassa (s, 750, 450);
    create_cassa (s, 2550, 450);
    create_cassa (s, 4050, 360);
    create_cassa (s, 5400, 60);
    //create_cassa (s, 7350, 60);
    create_cassa (s, 11050, 950);
    create_cassa (s, 11090, 780);

    create_porta (s, 3450, 320);
    create_porta (s, 12600, 320);

    create_piatt (s, 5100, 320);
    create_piatt (s, 5350, -950);
    create_piatt_move (s, 5550, 320);
    create_piatt_move (s, 5900, -950);
    create_piatt_move (s, 11600, 1495);
    //create_piatt_move2 (s, 5780, -450);  potenzialmente da silurare permanentemente
    create_ghiglio(s, 8025, 380);
    create_ghiglio(s, 8575, 380);
    create_ghiglio(s, 9125, 380);
    
    create_Lanciatore(s, 1500, 450);
    create_Lanciatore(s, 4650, 450);
    create_Lanciatore(s, 9900, 250);
    create_slot_animata(s, 6600, 620);

    //collider di tutte le cose
    //player
    
    PP.physics.add_collider(s, player, muro_iniziale);
    for (let g = 0; g < porte.length; g++) {
        PP.physics.add_collider(s, player, porte[g]);
    }
    PP.physics.add_collider_f(s, player, floor, salto_si);
    PP.physics.add_collider_f(s, player, floor_finale, salto_si);
    PP.physics.add_collider_f(s, player, floor_finale_2, salto_si);
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
    PP.physics.add_collider_f(s, player, pedana1, apertura_porta);
    PP.physics.add_collider_f(s, player, pedana2, attiva_piatt_move);
    PP.physics.add_collider_f(s, player, pedana3, apertura_porta_finale);
    

    for (let i = 0; i < ghigliottine.length; i++) {
        PP.physics.add_collider_f(s, player, ghigliottine[i], salto_si);
        for (let g = 0; g < casse.length; g++) {
            PP.physics.add_collider(s, casse[g], ghigliottine[i]);
        }
    }

    for (let g = 0; g < Lettere.length; g++) {
        PP.physics.add_overlap_f(s, Lettere[g], player, collision_lettera);
    }

    for (let i = 0; i < piatt.length; i++) {
        PP.physics.add_collider_f(s, player, piatt[i], salto_si);
        for (let g = 0; g < casse.length; g++) {
            PP.physics.add_collider(s, casse[g], piatt[i]);
        }
    }

    
    for (let i = 0; i < piatt_move.length; i++) {
        PP.physics.add_collider_f(s, player, piatt_move[i], salto_si);
        for (let g = 0; g < casse.length; g++) {
            PP.physics.add_collider(s, casse[g], piatt_move[i]);
        }
    }



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
        PP.physics.add_collider_f(s, casse[i], pedana2, attiva_piatt_move);
        PP.physics.add_collider_f(s, casse[i], pedana3, apertura_porta_finale);
        for (let g = 0; g < casse.length; g++) {
            PP.physics.add_collider(s, casse[g], casse[i]);
        }
    }
    
    for (let g = 0; g < casse.length; g++) {
        PP.physics.add_collider_f(s, casse[g], pedana1, apertura_porta);
    }

    // lame ghigliottine
    
    for (let g = 0; g < lame.length; g++) {
        PP.physics.add_overlap_f(s, player, lame[g], decapitazione);
    }

    //nemici

    for (let i = 0; i < slot_animate.length; i++) {
        PP.physics.add_collider_f(s, player, slot_animate[i], kill_slot);
        for (let g = 0; g < casse.length; g++) {
            PP.physics.add_collider(s, casse[g], slot_animate[i]);
        }
        PP.physics.add_collider(s, slot_animate[i], floor);
        posizione_slot.push(i);
    }
    

    for (let i = 0; i < lanciatori.length; i++) {
        PP.physics.add_overlap_f(s, player, lanciatori[i], kill_lanciatore);
        PP.physics.add_collider(s, lanciatori[i], scala_3);
        for (let g = 0; g < casse.length; g++) {
            PP.physics.add_collider(s, casse[g], lanciatori[i]);
        }
        PP.physics.add_collider(s, lanciatori[i], floor);
    }



    
    configure_player_animations(s);
    configure_Lanciatore_animations(s);
}

function update (s) {
    bg.tile_geometry.x = PP.camera.get_scroll_x(s) * 1/(2+1);
    slot_nuove.tile_geometry.x = PP.camera.get_scroll_x(s) * 0.8;
    colonne_davanti.tile_geometry.x = PP.camera.get_scroll_x(s) * 1.1;
    moquette.tile_geometry.x = PP.camera.get_scroll_x(s) * 1.1;
    //bg.tile_geometry.y = PP.camera.get_scroll_y(s);


    update_score(s);
    update_vite (s);
    player_update(s);
    update_cassa(s);
    update_porta(s);
    update_piatt (s);
    update_piatt_move (s);
    update_ghiglio(s);

    update_Lanciatore(s);
    update_slot_animata(s);

    manage_dash(s);

    // per chiudere la porta

    if(chiusura_porta_1 == false){
        porte[0].geometry.y = 40;
        porte[0].geometry.body_y = 40;
    }

    if(chiusura_porta_1 == true){
        porte[0].geometry.y = 320;
        porte[0].geometry.body_y = 320;
    }

    chiusura_porta_1 = true;

    // per porta finale
    
    if(chiusura_porta_finale == false){
        porte[1].geometry.y = 40;
        porte[1].geometry.body_y = 40;
    }

    if(chiusura_porta_finale == true){
        porte[1].geometry.y = 320;
        porte[1].geometry.body_y = 320;
    }

    chiusura_porta_finale = true;


    // if che permette al giocatore di attraversare la piattaforma a fine livello da sotto ma non da sopra

    if (player.geometry.y >= floor_finale_3.geometry.y){
        PP.physics.add_overlap_f(s, player, floor_finale_3, salto_si);
        for (let g = 0; g < casse.length; g++) {
            PP.physics.add_overlap_f(s, casse[g], floor_finale_3, nulla);
        }
    }
    else {
        PP.physics.add_collider_f(s, player, floor_finale_3, salto_si);
        for (let g = 0; g < casse.length; g++) {
            PP.physics.add_collider(s, casse[g], floor_finale_3);
        }
    }
    
    
    // if che permette alle casse di attraversare la piattaforma a fine livello da sotto ma non da sopra
    
    for (let g = 0; g < casse.length; g++){
    if (casse[g].geometry.y >= 610){
            PP.physics.add_overlap_f(s, casse[g], floor_finale_3, nulla);
        }
        else {
            for (let g = 0; g < casse.length; g++) {
                PP.physics.add_collider(s, casse[g], floor_finale_3);
            }
        }
    }
}

function destroy (s) {
    
}


function apertura_porta(s, obj1, obj2) {
    chiusura_porta_1 = false;

    // implementare funzione per il salto

    if ((player.geometry.x >= (obj2.geometry.x - 100) && player.geometry.x <= (obj2.geometry.x) + 100) || player.geometry.y >= (obj2.geometry.y + 20)){
        jump_disable = false;
    }
}

function apertura_porta_finale(s, obj1, obj2) {
    chiusura_porta_finale = false;

    // implementare funzione per il salto

    if ((player.geometry.x >= (obj2.geometry.x - 100) && player.geometry.x <= (obj2.geometry.x) + 100) || player.geometry.y >= (obj2.geometry.y + 20)){
        jump_disable = false;
    }
}

function nulla(s){
    return;
}


PP.scenes.add("level1", preload, create, update, destroy);