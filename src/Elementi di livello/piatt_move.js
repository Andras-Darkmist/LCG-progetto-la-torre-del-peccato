let img_piatt_move1;
let img_piatt_move1_2;

//let piatt_move_sing

let piatt_move = [];
let valori_piatt_move = [];
let posizioni_cambio_direz_alto = []; // array in cui mettere i limiti di movimento superiori delle piattaforme
let posizioni_cambio_direz_basso = []; // array in cui mettere i limiti di movimento inferiori delle piattaforme

let blocco_piatt_move = true;
let verso_lalto;
let tempo_attesa_ferme = 2100;

let tempo_attesa_ferma_finale = 800;

let collider_casse_sopra = [];
let collider_sopra = [];

function preload_piatt_move (s) {
    piatt_move = [];
    valori_piatt_move = [];
    posizioni_cambio_direz_alto = [];
    posizioni_cambio_direz_basso = [];
    
    img_piatt_move1 = PP.assets.image.load(s, "assets/immagini/piatt_move.png", 150, 156);
    img_piatt_move1_2 = PP.assets.image.load(s, "assets/immagini/piatt_move_V1.png", 150, 156);


    posizioni_cambio_direz_alto.push(-315); // limite alto prima piatt
    posizioni_cambio_direz_alto.push(-955); // limite alto seconda piatt
    posizioni_cambio_direz_alto.push(620); // limite alto terza piatt

    posizioni_cambio_direz_basso.push(315); // limite basso prima piatt
    posizioni_cambio_direz_basso.push(-325); // limite basso seconda piatt
    posizioni_cambio_direz_basso.push(1695); // limite basso terza piatt
}

function create_piatt_move(s, x, y) {
    piatt_move_sing = PP.assets.image.add(s, img_piatt_move1, x, y, 0, 0);
    piatt_move_sing.geometry.scale_x = 1.5;
    PP.physics.add(s, piatt_move_sing, PP.physics.type.DYNAMIC);
    PP.physics.set_immovable(piatt_move_sing, true);
    PP.physics.set_allow_gravity(piatt_move_sing, false);
    PP.physics.set_velocity_y(piatt_move_sing, 0);
    piatt_move.push(piatt_move_sing);
    
    // timer che blocca periodicamente la piattaforma finale in modo che non si muova se la pedana a presisone non è premuta


}

function create_piatt_move_extra (s, x, y) {
    let piatt_move_sing = PP.assets.image.add(s, img_piatt_move1_2, x, y, 0, 0);
    piatt_move_sing.geometry.scale_x = 1.5;
    PP.physics.add(s, piatt_move_sing, PP.physics.type.DYNAMIC);
    PP.physics.set_immovable(piatt_move_sing, true);
    PP.physics.set_allow_gravity(piatt_move_sing, false);
    PP.physics.set_velocity_y(piatt_move_sing, 0);
    piatt_move.push(piatt_move_sing);
    PP.timers.add_timer(s, 1000, bloccamento, true);
    return;
}

function update_piatt_move(s) {

    // questi due if funzionano per ogni piattaforma che si muove verticalmente, basta aggiungere i suoi limiti di movimento nei 2 array

    for (let i = 0; i < piatt_move.length; i++) {
        if (i != 2) {
            if (piatt_move[i].geometry.y <= posizioni_cambio_direz_alto[i] && PP.physics.get_velocity_y(piatt_move[i]) != 200) {
                PP.physics.set_velocity_y(piatt_move[i], 0);
                PP.timers.add_timer(s, tempo_attesa_ferme, inizio_discesa, false);
                valori_piatt_move.push(i);
            }
            if (piatt_move[i].geometry.y >= posizioni_cambio_direz_basso[i] && PP.physics.get_velocity_y(piatt_move[i]) != -200) {
                PP.physics.set_velocity_y(piatt_move[i], 0);
                PP.timers.add_timer(s, tempo_attesa_ferme, inizio_salita, false);
                valori_piatt_move.push(i);
            }
        }
        else if (i == 2 && blocco_piatt_move != true) {
            if (piatt_move[i].geometry.y <= posizioni_cambio_direz_alto[i] && PP.physics.get_velocity_y(piatt_move[i]) != 200) {
                PP.physics.set_velocity_y(piatt_move[i], 0);
                PP.timers.add_timer(s, tempo_attesa_ferma_finale, inizio_discesa, false);
                valori_piatt_move.push(i);
            }
            if (piatt_move[i].geometry.y >= posizioni_cambio_direz_basso[i] && PP.physics.get_velocity_y(piatt_move[i]) != -200) {
                PP.physics.set_velocity_y(piatt_move[i], 0);
                PP.timers.add_timer(s, tempo_attesa_ferma_finale, inizio_salita, false);
                valori_piatt_move.push(i);
            }
            if (i == 2 && blocco_piatt_move == true) {
                return;
            }
        }

        // qua sotto c sono le cose per far si che il giocatore e le casse possano attraversare le piattaforme mobli da sotto ma non da sopra

        /*if (player.geometry.y >= piatt_move[i].geometry.y) {
            PP.physics.remove_collider_or_overlap(s, PP.physics.add_collider_f(s, player, piatt_move[i], salto_si));
            collider_sopra = false;
        }
        else {
            if (collider_sopra != true) {
                PP.physics.remove_collider_or_overlap(s, PP.physics.add_collider_f(s, player, piatt_move[i], salto_si))
                PP.physics.add_collider_f(s, player, piatt_move[i], salto_si);
                collider_sopra = true;
            }
        }

        for (let g = 0; g < casse.length; g++) {
            if (casse[g].geometry.y >= piatt_move[i].geometry.y) {
                PP.physics.remove_collider_or_overlap(s, PP.physics.add_collider(s, casse[g], piatt_move[i]));
                collider_casse_sopra[g - 1] = false;
            }
            else if (collider_casse_sopra[g - 1] != true) {
                PP.physics.remove_collider_or_overlap(s, PP.physics.add_collider(s, casse[g], piatt_move[i]));
                PP.physics.add_collider(s, casse[g], piatt_move[i]);
                collider_casse_sopra[g - 1] = true;
            }
        }*/
    }


    // parte di codice necessaria a far capire alla piattaforma finale da che parte ripartire dopo che si è fermata

    if (blocco_piatt_move == true) {
        if (PP.physics.get_velocity_y(piatt_move[2]) < 0) {
            verso_lalto = true;
        }
        else if (PP.physics.get_velocity_y(piatt_move[2]) > 0) {
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
}