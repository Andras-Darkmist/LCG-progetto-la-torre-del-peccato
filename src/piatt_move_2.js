let img_piatt_move2;
let piatt_move_sing2;
/*
let piatt_move = [];
let valori_piatt_move = [];
let vicinanza = [];*/

function preload_piatt_move2 (s) {
    img_piatt_move2
 = PP.assets.image.load(s, "assets/immagini/piatt_move.png", 150, 156);

}

function create_piatt_move2 (s, x, y){
    /*let*/ piatt_move_sing2 = PP.assets.image.add(s, img_piatt_move2, x, y, 0, 0);
    PP.physics.add(s, piatt_move_sing2, PP.physics.type.DYNAMIC);
    PP.physics.set_immovable(piatt_move_sing2, true);
    PP.physics.set_allow_gravity(piatt_move_sing2, false);
    PP.physics.set_velocity_y(piatt_move_sing2, 0);
    /*piatt_move.push(piatt_move_sing2);*/
   /* vicinanza.push(piatt_move_sing2);*/
}

function update_piatt_move2 (s) {
    if (Math.abs(piatt_move_sing2.geometry.x - player.geometry.x < 500)) {
        if (piatt_move_sing2.geometry.y <= -450) {
            PP.physics.set_velocity_y(piatt_move_sing2, 0);
            PP.timers.add_timer(s, 2000, inizio_discesa_2, false);
        }
        if (piatt_move_sing2.geometry.y >= 350) {
            PP.physics.set_velocity_y(piatt_move_sing2, 0);
            PP.timers.add_timer(s, 2000, inizio_discesa_2, false);
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
                PP.timers.add_timer(s, 2000, inizio_discesa_2(), false)
                valori_piatt_move.push(0);
            }
            if (piatt_move[0].geometry.y >= 350) {
                PP.physics.set_velocity_y(piatt_move[0], 0)
                PP.timers.add_timer(s, 2000, inizio_discesa_2(), false)
                valori_piatt_move.push(0);
            }
        }


        if (vicinanza[1] == true) {
            if (piatt_move[1].geometry.y <= -950) {
                PP.physics.set_velocity_y(piatt_move[0], 0)
                PP.timers.add_timer(s, 2000, inizio_discesa_2(), false)
                valori_piatt_move.push(1);
            }
            if (piatt_move[1].geometry.y >= -450) {
                PP.physics.set_velocity_y(piatt_move[0], 0)
                PP.timers.add_timer(s, 2000, inizio_discesa_2(), false)
                valori_piatt_move.push(1);
            }
        }
    }
    */
}

function inizio_discesa_2(s){
    /*valori_piatt_move.push(0);
    i = valori_piatt_move.shift();
    console.log(i);*/
    PP.physics.set_velocity_y(piatt_move_sing2, 200)
}

function inizio_discesa_2(s){
    /*i = valori_piatt_move.shift();
    console.log(i);*/
    PP.physics.set_velocity_y(piatt_move_sing2, -200)
}