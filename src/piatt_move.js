let img_piatt_move1;
//let piatt_move_sing

let piatt_move = [];
let valori_piatt_move = [];
let posizioni_cambio_direz_alto = []; // array in cui mettere i limiti di movimento superiori delle piattaforme
let posizioni_cambio_direz_basso = []; // array in cui mettere i limiti di movimento inferiori delle piattaforme

let blocco_piatt_move = true;
let verso_lalto;

function preload_piatt_move (s) {
    piatt_move = [];
    valori_piatt_move = [];
    posizioni_cambio_direz_alto = [];
    posizioni_cambio_direz_basso = [];
    
    img_piatt_move1 = PP.assets.image.load(s, "assets/immagini/piatt_move.png", 150, 156);

    posizioni_cambio_direz_alto.push(-315); // limite alto prima piatt
    posizioni_cambio_direz_alto.push(-950); // limite alto seconda piatt
    posizioni_cambio_direz_alto.push(620); // limite alto terza piatt

    posizioni_cambio_direz_basso.push(310); // limite basso prima piatt
    posizioni_cambio_direz_basso.push(-315); // limite basso seconda piatt
    posizioni_cambio_direz_basso.push(1695); // limite basso terza piatt
}

function create_piatt_move(s, x, y) {
    let piatt_move_sing = PP.assets.image.add(s, img_piatt_move1, x, y, 0, 0);
    PP.physics.add(s, piatt_move_sing, PP.physics.type.DYNAMIC);
    PP.physics.set_immovable(piatt_move_sing, true);
    PP.physics.set_allow_gravity(piatt_move_sing, false);
    PP.physics.set_velocity_y(piatt_move_sing, 0);
    piatt_move.push(piatt_move_sing);

    if (piatt_move.length == 3) {
        PP.timers.add_timer(s, 1000, bloccamento, true);
    }
}

function update_piatt_move(s) {

    // questi due if funzionano per ogni piattaformache si muove verticalmente, basta aggiungere i suoi limiti di movimento nei 2 array

    for (let i = 0; i < piatt_move.length; i++) {
        if (i != 2) {
            if (piatt_move[i].geometry.y <= posizioni_cambio_direz_alto[i] && PP.physics.get_velocity_y(piatt_move[i]) != 200) {
                PP.physics.set_velocity_y(piatt_move[i], 0);
                PP.timers.add_timer(s, 800, inizio_discesa, false);
                valori_piatt_move.push(i);
            }
            if (piatt_move[i].geometry.y >= posizioni_cambio_direz_basso[i] && PP.physics.get_velocity_y(piatt_move[i]) != -200) {
                PP.physics.set_velocity_y(piatt_move[i], 0);
                PP.timers.add_timer(s, 800, inizio_salita, false);
                valori_piatt_move.push(i);
            }
        }
        else if (i == 2 && blocco_piatt_move != true) {
            if (piatt_move[i].geometry.y <= posizioni_cambio_direz_alto[i] && PP.physics.get_velocity_y(piatt_move[i]) != 200) {
                PP.physics.set_velocity_y(piatt_move[i], 0);
                PP.timers.add_timer(s, 800, inizio_discesa, false);
                valori_piatt_move.push(i);
            }
            if (piatt_move[i].geometry.y >= posizioni_cambio_direz_basso[i] && PP.physics.get_velocity_y(piatt_move[i]) != -200) {
                PP.physics.set_velocity_y(piatt_move[i], 0);
                PP.timers.add_timer(s, 800, inizio_salita, false);
                valori_piatt_move.push(i);
            }
            if (i == 2 && blocco_piatt_move == true) {
                return;
            }
        }  //console.log(blocco_piatt_move);
    }

    if(blocco_piatt_move == true){
        if (PP.physics.get_velocity_y(piatt_move[2]) < 0){
            verso_lalto = true;
            console.log("56")
        }
        else if (PP.physics.get_velocity_y(piatt_move[2]) > 0){
            verso_lalto = false;
        }
        PP.physics.set_velocity_y(piatt_move[2], 0);
    }
}

function inizio_discesa(s){
    i = valori_piatt_move.shift();
    PP.physics.set_velocity_y(piatt_move[i], 200);
}

function inizio_salita(s){
    i = valori_piatt_move.shift();
    PP.physics.set_velocity_y(piatt_move[i], -200);
}

function attiva_piatt_move(s, obj1, obj2) {
    blocco_piatt_move = false;
    console.log(verso_lalto);
    if (620 > piatt_move[2].geometry.y < 1695 && PP.physics.get_velocity_y(piatt_move[2]) == 0){
        if (verso_lalto == false){
        PP.physics.set_velocity_y(piatt_move[2], 200);
        }
        else{
        PP.physics.set_velocity_y(piatt_move[2], -200);
        }
    }

    // implementare funzione per il salto

    if ((player.geometry.x >= (obj2.geometry.x - 100) && player.geometry.x <= (obj2.geometry.x) + 100) || player.geometry.y >= (obj2.geometry.y + 20)){
        jump_disable = false;
    }
}

function bloccamento(s){
    blocco_piatt_move = true;
    console.log("£$")
}