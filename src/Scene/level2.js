let img_background;
let floor;
let barr_1;
let platform1;

function preload (s) {
    preload_player (s);
    preload_cassa (s);
    preload_piatt (s);
    preload_Lanciatore(s);

    img_background = PP.assets.image.load(s, "Assets/Immagini/natura morta.jpg");
}

//problemi per ora: il personaggio è in una specie di caduta continua mentre è sulla cassa, le casse si compenetrano, 
    //la morte per contatto da sopra uccide il nemico oltre che il giocatore
    //

// da inserire: proiettili spostano casse, 

function create (s) {
    PP.assets.image.add(s, img_background, 0, 0, 0, 0);

    floor = PP.shapes.rectangle_add(s, 640, 620, 6280, 1, "0x000000", 0);
    PP.physics.add(s, floor, PP.physics.type.STATIC);

    barr_1 = PP.shapes.rectangle_add(s, 0, 0, 1, 1280, "0x000000", 0);
    PP.physics.add(s, barr_1, PP.physics.type.STATIC);

    platform1 = PP.shapes.rectangle_add(s, 640, 420, 400, 19, "0xFA0000", 1);
    PP.physics.add(s, platform1, PP.physics.type.STATIC);

    //funzioni richiamate

    create_player (s);
    //create_piatt (s);
    create_cassa (s);

    //collider di tutte le cose
    //player
    
    PP.physics.add_collider(s, player, barr_1);
    PP.physics.add_collider(s, player, floor);
    PP.physics.add_collider(s, player, platform1);
    PP.physics.add_collider(s, player, cassa);
    //PP.physics.add_collider(s, player, piatt1);
    //PP.physics.add_overlap_f(s, player, lanciatore, kill)


    //casse

    PP.physics.add_collider(s, cassa, floor);

    //nemici

    
    configure_player_animations(s);
}

function update (s) {
    player_update(s);
    update_cassa (s);
    //update_piatt (s);
    manage_dash(s);

    //console.log(move_disable);
}

function destroy (s) {
    
}

PP.scenes.add("level2", preload, create, update, destroy);