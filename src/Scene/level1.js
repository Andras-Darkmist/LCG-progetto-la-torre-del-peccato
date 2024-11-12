let img_background;

function preload (s) {
    preload_player (s);
    img_background = PP.assets.image.load(s, "Assets/Immagini/SFONDO2.png");
}

function create (s) {
    PP.assets.image.add(s, img_background, 0, 0, 0, 0);
    create_player (s);
}

function update (s) {
    update_player (s);
}

function destroy (s) {
    
}

PP.scenes.add("level1", preload, create, update, destroy);