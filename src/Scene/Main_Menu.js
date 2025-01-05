let sfondo_titolo;
let crediti;
let storia;
let gioco;
let sfondo;
let pulsante_storia;
let pulsante_gioco;
let pulsante_crediti; 

function preload (s) {
    sfondo_titolo = PP.assets.image.load(s, "assets/immagini/mainmenu/Schermata titolo.png");
    crediti = PP.assets.image.load(s, "assets/immagini/mainmenu/Bottone_crediti.png");
    storia = PP.assets.image.load(s, "assets/immagini/mainmenu/Bottone_storia.png");
    gioco = PP.assets.image.load(s, "assets/immagini/mainmenu/Bottone_gioco.png");
}

function create (s){
    sfondo = PP.assets.image.add(s, sfondo_titolo, 0, 0, 0, 0);
    pulsante_storia = PP.assets.image.add(s, storia, 65, 520, 0, 0);
    pulsante_gioco = PP.assets.image.add(s, gioco, 65+400, 520, 0, 0);
    pulsante_crediti = PP.assets.image.add(s, crediti, 65+800, 520, 0, 0);
    PP.interactive.mouse.add(pulsante_storia, "pointerdown", goto_storia);
    PP.interactive.mouse.add(pulsante_crediti, "pointerdown", goto_crediti);
    PP.interactive.mouse.add(pulsante_gioco, "pointerdown", goto_gioco);
   
}

function update (s) {
    
}

function goto_storia (s){
    PP.scenes.start("Storia");
}

function goto_crediti (s){
    PP.scenes.start("Crediti");
}

function goto_gioco (s){
    PP.scenes.start("level1");
}

function destroy (s) {
    
}



PP.scenes.add("Main_Menu", preload, create, update, destroy);