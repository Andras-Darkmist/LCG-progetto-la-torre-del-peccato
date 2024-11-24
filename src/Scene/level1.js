let img_background;
let floor;
let barr_1;
let scala_1;
let scala_2;
let scala_3;

function preload (s) {
    preload_player (s);
    preload_cassa (s);
    preload_cassa2 (s);
    preload_cassa3 (s);
    preload_piatt (s);
    preload_Lanciatore(s);

    img_background = PP.assets.image.load(s, "Assets/Immagini/sfondo.png");
}

//problemi per ora: il personaggio è in una specie di caduta continua mentre è sulla cassa, le casse si compenetrano, 
    //scala non si colora, la morte per contatto da sopra impedisce di muoversi al ricaricamento della scena
    //il nemico non sempre inizia a sparare quando gli si è vicino, 

// da inserire: proiettili spostano casse, dash fa schivare i proiettili, il dash fa danno, 

function create (s) {
    PP.assets.image.add(s, img_background, 0, 0, 0, 0);

    floor = PP.shapes.rectangle_add(s, 640, 620, 6280, 1, "0x000000", 0);
    PP.physics.add(s, floor, PP.physics.type.STATIC);

    barr_1 = PP.shapes.rectangle_add(s, 0, 0, 1, 1280, "0x000000", 0);
    PP.physics.add(s, barr_1, PP.physics.type.STATIC);

    scala_1 = PP.shapes.rectangle_add(s, 1800, 370, 200, 500, "0xfab304", 0);
    PP.physics.add(s, scala_1, PP.physics.type.STATIC);
    
    scala_2 = PP.shapes.rectangle_add(s, 2000, 430, 200, 350, "0xfab304", 0);
    PP.physics.add(s, scala_2, PP.physics.type.STATIC);
    
    scala_3 = PP.shapes.rectangle_add(s, 2200, 500, 200, 230, "0xfab304", 0);
    PP.physics.add(s, scala_3, PP.physics.type.STATIC);


    //funzioni richiamate

    create_player (s);
    create_cassa (s);
    create_cassa2 (s);
    create_cassa3 (s);
    create_piatt (s);
    create_Lanciatore(s);

    //collider di tutte le cose
    //player
    
    PP.physics.add_collider(s, player, barr_1);
    PP.physics.add_collider(s, player, floor);
    PP.physics.add_collider(s, player, scala_1);
    PP.physics.add_collider(s, player, scala_2);
    PP.physics.add_collider(s, player, scala_3);
    PP.physics.add_collider(s, player, cassa);
    PP.physics.add_collider(s, player, cassa2);
    PP.physics.add_collider(s, player, cassa3);
    PP.physics.add_collider(s, player, piatt1);
    PP.physics.add_collider_f(s, player, lanciatore, kill)
    PP.physics.add_overlap_f(s, player, lanciatore, kill)


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
    update_piatt (s);
    manage_dash(s);
    update_Lanciatore(s);

    //console.log(move_disable);
}

function destroy (s) {
    
}

PP.scenes.add("level1", preload, create, update, destroy);