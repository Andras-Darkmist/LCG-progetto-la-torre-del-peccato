let Finale3;
let sfondo_Final3;

function preload (s) {
    Finale3 = PP.assets.image.load(s, "assets/immagini/Finali/Finale3.png");
}

function create (s) {
    sfondo_Final3 = PP.assets.image.add(s, Finale3, 0, 0, 0, 0);
}

function update(s){
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.M)) {
        PP.scenes.start("Main_Menu");
    }
}

function destroy (s) {
    
}

PP.scenes.add("Finale3", preload, create, update, destroy);