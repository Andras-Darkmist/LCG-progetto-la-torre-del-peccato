let img_background;
let floor;
let barr_1;

let scala_1;
let scala_2;

let pedana;
let chiusura_porta = true;


function preload (s) {
    preload_player (s);
    preload_cassa (s);
    preload_porta1 (s);
    preload_piatt (s);
    preload_piatt_move (s);
    preload_ghiglio(s);
    preload_Lanciatore(s);
    preload_slot(s);

    img_background = PP.assets.image.load(s, "Assets/Immagini/sfondo.png");
}

// PROBLEMI PER ORA: specie di caduta continua mentre si è sulla cassa, le casse si compenetrano, 
    // servirebbe un modo di mettere 2 collider per lo stesso oggetto in modo da poter saltare anche su pedana,
    // animazione morte personaggio non va ogni tanto, animazione morte non viene riprodotta alla morte, dal secondo lanciatore in poi sparano
    // anche da morti e fanno si che il giocatore possa muoversi quando lo uccide, cambio visuale si bugga quando si salta, 
    // la slot non cambia direzione ogni 5 sec come dovrebbe, le pedane mobili non vanno su e giù come dovrebbero, 

// DA INSERIRE: proiettili spostano casse, proiettili lanciatore scompaiono dopo un po' o al contatto
    // modo di rendere immateriale la porta, 

function create (s) {
    PP.assets.image.add(s, img_background, 0, 0, 0, 0);

    //pavimento

    floor = PP.shapes.rectangle_add(s, 640, 635, 20280, 30, "0x000000", 0);
    PP.physics.add(s, floor, PP.physics.type.STATIC);

    //barriera inizio livello

    barr_1 = PP.shapes.rectangle_add(s, 0, 0, 1, 1280, "0x000000", 0);
    PP.physics.add(s, barr_1, PP.physics.type.STATIC);

    //prime scale

    scala_1 = PP.shapes.rectangle_add(s, 1800, 470, 200, 300, "0xfab304", 1);
    PP.physics.add(s, scala_1, PP.physics.type.STATIC);
    
    scala_2 = PP.shapes.rectangle_add(s, 2000, 545, 200, 150, "0xfab304", 1);
    PP.physics.add(s, scala_2, PP.physics.type.STATIC);
    
    //bo
    
    pedana = PP.shapes.rectangle_add(s, 2800, 639, 150, 40, "0xfbc456", 1);
    PP.physics.add(s, pedana, PP.physics.type.STATIC);


    //funzioni richiamate

    create_player (s);
    create_cassa (s, 630, 450);
    create_cassa (s, 2400, 450);
    create_cassa (s, 3760, 360);
    create_porta1(s);
    create_piatt (s, 4760, 310);
    create_piatt (s, 4945, -950);
    create_piatt_move (s, 5175, 300);
    create_piatt_move (s, 5395, -450);
    create_ghiglio(s);
    
    create_Lanciatore(s, 1300);
    create_Lanciatore(s, 4400);
    create_Lanciatore(s, 7000);
    create_slot_animata(s, 5300, 620);
    create_slot_animata(s, 5300, 620);

    //collider di tutte le cose
    //player
    
    PP.physics.add_collider(s, player, barr_1);
    PP.physics.add_collider(s, player, porta1);
    PP.physics.add_collider_f(s, player, floor, salto_si);
    PP.physics.add_collider_f(s, player, scala_1, salto_si);
    PP.physics.add_collider_f(s, player, scala_2, salto_si);
    PP.physics.add_collider_f(s, player, pedana, apertura_porta1);

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
        PP.physics.add_collider(s, casse[i], scala_1);
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
    player_update(s);
    update_cassa(s);
    update_cassa2(s);
    update_cassa3(s);
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