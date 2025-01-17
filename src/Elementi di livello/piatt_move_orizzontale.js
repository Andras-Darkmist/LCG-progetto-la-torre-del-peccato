let img_piatt_move_orizz;
//let piatt_move_sing

let piatt_move_orizz = [];
let valori_piatt_move_orizz = [];
let posizioni_cambio_direz_sinistra = []; // array in cui mettere i limiti di movimento superiori delle piattaforme
let posizioni_cambio_direz_destra = []; // array in cui mettere i limiti di movimento inferiori delle piattaforme

function preload_piatt_move_orizz (s) {
    piatt_move_orizz = [];
    valori_piatt_move_orizz = [];
    posizioni_cambio_direz_sinistra = [];
    posizioni_cambio_direz_destra = [];
    
    img_piatt_move_orizz = PP.assets.image.load(s, "assets/immagini/piatt_move_level2.png", 150, 156);

    posizioni_cambio_direz_sinistra.push(5950); // limite alto prima piatt
    posizioni_cambio_direz_destra.push(6750); // limite alto seconda piatt

    posizioni_cambio_direz_sinistra.push(7050); // limite basso prima piatt
    posizioni_cambio_direz_destra.push(7850); // limite basso seconda piatt
}

function create_piatt_move_orizz (s, x, y){
    let piatt_move_sing = PP.assets.image.add(s, img_piatt_move_orizz, x, y, 0, 0);
    PP.physics.add(s, piatt_move_sing, PP.physics.type.DYNAMIC);
    PP.physics.set_immovable(piatt_move_sing, true);
    PP.physics.set_allow_gravity(piatt_move_sing, false);
    PP.physics.set_velocity_y(piatt_move_sing, 0);
    piatt_move_orizz.push(piatt_move_sing);
}

function update_piatt_move_orizz(s) {
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

    for (let i = 0; i < piatt_move_orizz.length; i++) {
        if (piatt_move_orizz[i].geometry.x <= posizioni_cambio_direz_sinistra[i]) {
            PP.physics.set_velocity_x(piatt_move_orizz[i], 0);
            PP.timers.add_timer(s, 1500, inizio_destra, false);
            valori_piatt_move_orizz.push(i);
        }
        if (piatt_move_orizz[i].geometry.x >= posizioni_cambio_direz_destra[i]) {
            PP.physics.set_velocity_x(piatt_move_orizz[i], 0);
            PP.timers.add_timer(s, 1500, inizio_sinistra, false);
            valori_piatt_move_orizz.push(i);
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

function inizio_destra(s){
    i = valori_piatt_move_orizz.shift();
    PP.physics.set_velocity_x(piatt_move_orizz[i], 200);
}

function inizio_sinistra(s){
    i = valori_piatt_move_orizz.shift();
    PP.physics.set_velocity_x(piatt_move_orizz[i], -200);
}