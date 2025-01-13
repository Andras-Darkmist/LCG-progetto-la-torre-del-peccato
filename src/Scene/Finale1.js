let Finale1;
let sfondo_Final1;

function preload (s) {
    Finale1 = PP.assets.image.load(s, "assets/immagini/Finali/Finale1.png");
}

function create (s) {
    sfondo_Final1 = PP.assets.image.add(s, Finale1, 0, 0, 0, 0);
}

function update(s){
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.M)) {
        PP.scenes.start("Main_Menu");
    }
}

function destroy (s) {
    
}

PP.scenes.add("Finale1", preload, create, update, destroy);