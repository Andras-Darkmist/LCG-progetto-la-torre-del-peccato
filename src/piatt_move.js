let img_piatt_move1;
let piatt_move_sing
/*
let piatt_move = [];
let valori_piatt_move = [];
let vicinanza = [];*/

function preload_piatt_move (s) {
    img_piatt_move1 = PP.assets.image.load(s, "assets/immagini/piatt_move.png", 150, 156);

}

function create_piatt_move (s, x, y){
    /*let*/ piatt_move_sing = PP.assets.image.add(s, img_piatt_move1, x, y, 0, 0);
    PP.physics.add(s, piatt_move_sing, PP.physics.type.DYNAMIC);
    PP.physics.set_immovable(piatt_move_sing, true);
    PP.physics.set_allow_gravity(piatt_move_sing, false);
    PP.physics.set_velocity_y(piatt_move_sing, 0);
    /*piatt_move.push(piatt_move_sing);*/
   /* vicinanza.push(piatt_move_sing);*/
}

function update_piatt_move(s) {
    if (Math.abs(piatt_move_sing.geometry.x - player.geometry.x < 500)) {
        if (piatt_move_sing.geometry.y <= -450) {
            PP.physics.set_velocity_y(piatt_move_sing, 0)
            PP.timers.add_timer(s, 2000, inizio_discesa, false)
        }
        if (piatt_move_sing.geometry.y >= 350) {
            PP.physics.set_velocity_y(piatt_move_sing, 0)
            PP.timers.add_timer(s, 2000, inizio_salita, false)
        }

    }
    
    /*
    for (let i = 0; i < valori_piatt_move.length; i++) {
        if (Math.abs(valori_piatt_move[i].geometry.x - player.geometry.x < 500)) {
            vicinanza[i] = true;
            console.log(vicinanza[0]);
        }
        else {
            vicinanza[i] = false;
            console.log(vicinanza[0]);
        }

        if (vicinanza[0] == true) {
            if (piatt_move[0].geometry.y <= -450) {
                PP.physics.set_velocity_y(piatt_move[0], 0)
                PP.timers.add_timer(s, 2000, inizio_discesa(), false)
                valori_piatt_move.push(0);
            }
            if (piatt_move[0].geometry.y >= 350) {
                PP.physics.set_velocity_y(piatt_move[0], 0)
                PP.timers.add_timer(s, 2000, inizio_salita(), false)
                valori_piatt_move.push(0);
            }
        }


        if (vicinanza[1] == true) {
            if (piatt_move[1].geometry.y <= -950) {
                PP.physics.set_velocity_y(piatt_move[0], 0)
                PP.timers.add_timer(s, 2000, inizio_discesa(), false)
                valori_piatt_move.push(1);
            }
            if (piatt_move[1].geometry.y >= -450) {
                PP.physics.set_velocity_y(piatt_move[0], 0)
                PP.timers.add_timer(s, 2000, inizio_salita(), false)
                valori_piatt_move.push(1);
            }
        }
    }
    */
}

function inizio_discesa(s){
    /*valori_piatt_move.push(0);
    i = valori_piatt_move.shift();
    console.log(i);*/
    PP.physics.set_velocity_y(piatt_move_sing, 200)
}

function inizio_salita(s){
    /*i = valori_piatt_move.shift();
    console.log(i);*/
    PP.physics.set_velocity_y(piatt_move_sing, -200)
}