let img_background;
let rect;

function preload (s) {
    preload_player (s);
    preload_cassa (s);
    preload_cassa2 (s);
    preload_cassa3 (s);
    preload_piatt (s);
    img_background = PP.assets.image.load(s, "Assets/Immagini/sfondo.png");
}

//problemi per ora: il personaggio è in una specie di caduta continua mentre è sulla cassa, le casse si compenetrano, la sprite del protagonista ha smesso di andare

function create (s) {
    PP.assets.image.add(s, img_background, 0, 0, 0, 0);
    rect = PP.shapes.rectangle_add(s, 640, 620, 1280, 1, "0x000000", 0);
    PP.physics.add(s, rect, PP.physics.type.STATIC);
    PP.physics.set_friction_x(rect, 1);

    create_player (s);
    create_cassa (s);
    create_cassa2 (s);
    create_cassa3 (s);
    create_piatt (s);

    PP.physics.add_collider(s, player, rect);
    PP.physics.add_collider(s, player, cassa);
    PP.physics.add_collider(s, player, cassa2);
    PP.physics.add_collider(s, player, cassa3);
    PP.physics.add_collider(s, cassa, rect);
    PP.physics.add_collider(s, cassa, cassa2);
    PP.physics.add_collider(s, cassa, cassa3);
    PP.physics.add_collider(s, cassa2, cassa3);
    PP.physics.add_collider(s, cassa2, rect);
    PP.physics.add_collider(s, cassa3, rect);
    PP.physics.add_collider(s, cassa, piatt);
    PP.physics.add_collider(s, cassa2, piatt);
    PP.physics.add_collider(s, cassa3, piatt);
    PP.physics.add_collider(s, player, piatt);
    
    configure_player_animations(s); 
}

function update (s) {
    manage_player_update(s);
    update_cassa(s);
    update_cassa2(s);
    update_cassa3(s);
    update_piatt (s);
    manage_dash(s);
}

function destroy (s) {
    
}

PP.scenes.add("level1", preload, create, update, destroy);