let img_background;
let floor;
let barr_1;

let scala_1;
let scala_2;

let pedana1;
let chiusura_porta = true;

function preload (s) {
    preload_player (s);
    preload_cassa (s);
    preload_cassa2 (s);
    preload_cassa3 (s);
    preload_porta1 (s);
    preload_piatt (s);
    preload_Lanciatore(s);

    img_background = PP.assets.image.load(s, "Assets/Immagini/sfondo.png");
}

//problemi per ora: specie di caduta continua mentre si è sulla cassa, le casse si compenetrano, 
    // servirebbe un modo di mettere 2 collider per lo stesso oggetto in modo da poter saltare anche su pedana
    //

// da inserire: proiettili spostano casse,

function create (s) {
    PP.assets.image.add(s, img_background, 0, 0, 0, 0);

    //pavimento

    floor = PP.shapes.rectangle_add(s, 640, 620, 6280, 1, "0x000000", 0);
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
    
    pedana1 = PP.shapes.rectangle_add(s, 2800, 639, 150, 40, "0xfbc456", 1);
    PP.physics.add(s, pedana1, PP.physics.type.STATIC);


    //funzioni richiamate

    create_player (s);
    create_cassa (s);
    create_cassa2 (s);
    create_cassa3 (s);
    create_porta1(s);
    create_piatt (s);
    create_Lanciatore(s);

    //collider di tutte le cose
    //player
    
    PP.physics.add_collider(s, player, barr_1);
    PP.physics.add_collider(s, player, porta1);
    /*PP.physics.add_collider(s, player, floor);
    PP.physics.add_collider(s, player, scala_1);
    PP.physics.add_collider(s, player, scala_2);
    PP.physics.add_collider(s, player, scala_3);
    PP.physics.add_collider(s, player, cassa);
    PP.physics.add_collider(s, player, cassa2);
    PP.physics.add_collider(s, player, cassa3);
    PP.physics.add_collider(s, player, piatt1);*/
    PP.physics.add_collider_f(s, player, floor, salto_si);
    PP.physics.add_collider_f(s, player, scala_1, salto_si);
    PP.physics.add_collider_f(s, player, scala_2, salto_si);
    PP.physics.add_collider_f(s, player, pedana1, apertura_porta1);
    PP.physics.add_collider_f(s, player, cassa, salto_si);
    PP.physics.add_collider_f(s, player, cassa2, salto_si);
    PP.physics.add_collider_f(s, player, cassa3, salto_si);
    PP.physics.add_collider_f(s, player, piatt1, salto_si);

    PP.physics.add_collider_f(s, player, lanciatore, kill);


    //casse

    PP.physics.add_collider(s, cassa, floor);
    PP.physics.add_collider(s, cassa2, floor);
    PP.physics.add_collider(s, cassa3, floor);
    PP.physics.add_collider(s, cassa, piatt1);
    PP.physics.add_collider(s, cassa2, piatt1);
    PP.physics.add_collider(s, cassa3, piatt1);
    PP.physics.add_collider(s, cassa, scala_1);
    PP.physics.add_collider(s, cassa2, scala_1);
    PP.physics.add_collider(s, cassa3, scala_1);
    PP.physics.add_collider(s, cassa, cassa2);
    PP.physics.add_collider(s, cassa, cassa3);
    PP.physics.add_collider(s, cassa2, cassa3);
    PP.physics.add_collider_f(s, cassa2, pedana1, apertura_porta1);
    PP.physics.add_collider(s, cassa, lanciatore);

    //nemici
    
    PP.physics.add_collider(s, lanciatore, floor);

    
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
    manage_dash(s);
    update_Lanciatore(s);

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
    console.log(chiusura_porta);

    // implementare funzione per il salto
    if (player.geometry.x < 3000 && player.geometry.x > 2800 && player.geometry.y >= 618){
    jump_disable = false;
    }
}

PP.scenes.add("level1", preload, create, update, destroy);