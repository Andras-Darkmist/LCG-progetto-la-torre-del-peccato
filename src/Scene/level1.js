let img_background;
let rect;

function preload (s) {
    preload_player (s);
    preload_cassa (s);
    img_background = PP.assets.image.load(s, "Assets/Immagini/sfondo.png");
}



function create (s) {
    PP.assets.image.add(s, img_background, 0, 0, 0, 0);
    rect = PP.shapes.rectangle_add(s, 640, 620, 1280, 1, "0x000000", 0);
    PP.physics.add(s, rect, PP.physics.type.STATIC); 

    create_player (s);
    create_cassa (s);

    PP.physics.add_collider(s, player, rect);
    PP.physics.add_collider(s, player, cassa);
    PP.physics.add_collider(s, cassa, rect);
    configure_player_animations(s); 
}

function update (s) {
    manage_player_update(s);
    update_cassa(s);
    manage_dash(s);
}

function destroy (s) {
    
}

PP.scenes.add("level1", preload, create, update, destroy);