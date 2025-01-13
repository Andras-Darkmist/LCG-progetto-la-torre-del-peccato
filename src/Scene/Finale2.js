let Finale2;
let sfondo_Final2;

function preload (s) {
    Finale2 = PP.assets.image.load(s, "assets/immagini/Finali/Finale2.png");
}

function create (s) {
    sfondo_Final2 = PP.assets.image.add(s, Finale2, 0, 0, 0, 0);
}

function update(s){
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.M)) {
        PP.scenes.start("Main_Menu");
    }
}

function destroy (s) {
    
}

PP.scenes.add("Finale2", preload, create, update, destroy);