let img_piatt_move1;
let piatt_move1;

function preload_piatt_move1 (s) {
    img_piatt_move1 = PP.assets.image.load(s, "assets/immagini/piatt_move.png", 150, 156);

}

function create_piatt_move1 (s){
    piatt_move1 = PP.assets.image.add(s, img_piatt_move1, 5175, 350, 0, 0);
    PP.physics.add(s, piatt_move1, PP.physics.type.DYNAMIC);
    PP.physics.set_immovable(piatt_move1, true);
    PP.physics.set_allow_gravity(piatt_move1, false);
    PP.physics.set_velocity_y(piatt_move1, -200)
}

function update_piatt_move1(s) {
    if (piatt_move1.geometry.y <= -450){
        PP.physics.set_velocity_y(piatt_move1, 0)
        PP.timers.add_timer(s, 2000, inizio_discesa, false)
    }
    if (piatt_move1.geometry.y >= 350) {
        PP.physics.set_velocity_y(piatt_move1, 0)
        PP.timers.add_timer(s, 2000, inizio_salita, false)
    }
}

function inizio_discesa(s){
    PP.physics.set_velocity_y(piatt_move1, 200)
}

function inizio_salita(s){
    PP.physics.set_velocity_y(piatt_move1, -200)
}