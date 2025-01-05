let tavola1;
let tavola2;
let tavola3;
let tavola_attiva;
let numero_tavola = 0;
let tavole = [];
let timer_lettura_tavola = false;

function preload (s) {
    numero_tavola = 0;
    tavola1 = PP.assets.image.load(s, "assets/immagini/mainmenu/Tavola1.png");
    tavola2 = PP.assets.image.load(s, "assets/immagini/mainmenu/Tavola2.png");
    tavola3 = PP.assets.image.load(s, "assets/immagini/mainmenu/Tavola3.png");
}

function create (s) {
    tavole.push(tavola1);
    tavole.push(tavola2);
    tavole.push(tavola3);
    seleziona_tavole(s);
}

function seleziona_tavole(s) {
    tavola_attiva = PP.assets.image.add(s, tavole[numero_tavola], 0, 0, 0, 0);
}

function update(s){
    if (timer_lettura_tavola == false) {
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.C)) {
        if (numero_tavola >= 3)
        {
            PP.scenes.start("Main_Menu");
        }
        PP.assets.destroy(tavola_attiva);
        numero_tavola ++;
        seleziona_tavole(s);
        timer_lettura_tavola = true;
        PP.timers.add_timer(s, 800, riattiva_tavole, false);
    }
}
}

function riattiva_tavole (s) {
    timer_lettura_tavola = false;
}


function destroy (s) {
    
}

PP.scenes.add("Storia", preload, create, update, destroy);