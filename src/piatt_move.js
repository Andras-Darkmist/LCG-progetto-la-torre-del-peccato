let img_piatt_move1;
//let piatt_move_sing

let piatt_move = [];
let valori_piatt_move = [];
let posizioni_cambio_direz_alto = []; // array in cui mettere i limiti di movimento superiori delle piattaforme
let posizioni_cambio_direz_basso = []; // array in cui mettere i limiti di movimento inferiori delle piattaforme

function preload_piatt_move (s) {
    piatt_move = [];
    valori_piatt_move = [];
    posizioni_cambio_direz_alto = [];
    posizioni_cambio_direz_basso = [];
    
    img_piatt_move1 = PP.assets.image.load(s, "assets/immagini/piatt_move.png", 150, 156);

    posizioni_cambio_direz_alto.push(-315); // limite alto prima piatt
    posizioni_cambio_direz_alto.push(-950); // limite alto seconda piatt

    posizioni_cambio_direz_basso.push(310); // limite basso prima piatt
    posizioni_cambio_direz_basso.push(-315); // limite basso seconda piatt
}

function create_piatt_move (s, x, y){
    let piatt_move_sing = PP.assets.image.add(s, img_piatt_move1, x, y, 0, 0);
    PP.physics.add(s, piatt_move_sing, PP.physics.type.DYNAMIC);
    PP.physics.set_immovable(piatt_move_sing, true);
    PP.physics.set_allow_gravity(piatt_move_sing, false);
    PP.physics.set_velocity_y(piatt_move_sing, 0);
    piatt_move.push(piatt_move_sing);
}

function update_piatt_move(s) {
    /*if (Math.abs(piatt_move_sing.geometry.x - player.geometry.x < 500)) {
        if (piatt_move_sing.geometry.y <= -450) {
            PP.physics.set_velocity_y(piatt_move_sing, 0)
            PP.timers.add_timer(s, 2000, inizio_discesa, false)
        }
        if (piatt_move_sing.geometry.y >= 350) {
            PP.physics.set_velocity_y(piatt_move_sing, 0)
            PP.timers.add_timer(s, 2000, inizio_salita, false)
        }

    }*/

        // questi due if funzionano per ogni piattaformache si muove verticalmente, basta aggiungere i suoi limiti di movimento nei 2 array

    for (let i = 0; i < piatt_move.length; i++) {
        if (piatt_move[i].geometry.y <= posizioni_cambio_direz_alto[i] && PP.physics.get_velocity_y(piatt_move[i]) != 200) {
            PP.physics.set_velocity_y(piatt_move[i], 0);
            PP.timers.add_timer(s, 2000, inizio_discesa, false);
            valori_piatt_move.push(i);
        }
        if (piatt_move[i].geometry.y >= posizioni_cambio_direz_basso[i] && PP.physics.get_velocity_y(piatt_move[i]) != -200) {
            PP.physics.set_velocity_y(piatt_move[i], 0);
            PP.timers.add_timer(s, 2000, inizio_salita, false);
            valori_piatt_move.push(i);
        }


        /*if (piatt_move[0].geometry.y <= -315 && PP.physics.get_velocity_y(piatt_move[0]) != 200) {
            PP.physics.set_velocity_y(piatt_move[0], 0);
            PP.timers.add_timer(s, 2000, inizio_discesa, false);
            valori_piatt_move.push(0);
        }
        if (piatt_move[0].geometry.y >= 310) {
            PP.physics.set_velocity_y(piatt_move[0], 0);
            PP.timers.add_timer(s, 2000, inizio_salita, false);
            valori_piatt_move.push(0);
        }


        if (piatt_move[1].geometry.y <= -950) {
            PP.physics.set_velocity_y(piatt_move[1], 0);
            PP.timers.add_timer(s, 2000, inizio_discesa, false);
            valori_piatt_move.push(1);
        }
        if (piatt_move[1].geometry.y >= -315) {
            PP.physics.set_velocity_y(piatt_move[1], 0);
            PP.timers.add_timer(s, 2000, inizio_salita, false);
            valori_piatt_move.push(1);
        }*/
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