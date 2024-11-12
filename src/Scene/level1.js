function preload (s) {
    preload_player (s);
}

function create (s) {
    create_player (s);
}

function update (s) {
    update_player (s);
}

function destroy (s) {
    
}

PP.scenes.add("level1", preload, create, update, destroy);