let crediti;
let sfondo_crediti;

function preload (s) {
    crediti = PP.assets.image.load(s, "assets/immagini/mainmenu/Crediti.png");
}

function create (s) {
    sfondo_crediti = PP.assets.image.add(s, crediti, 0, 0, 0, 0);
}

function update(s){
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.C)) {
        PP.scenes.start("Main_Menu");
    }
}

function destroy (s) {
    
}

PP.scenes.add("Crediti", preload, create, update, destroy);