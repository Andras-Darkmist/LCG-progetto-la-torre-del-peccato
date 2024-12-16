let img_generatore3;
let generatore3;
let timer_gener3 = false;

function preload_generatore3 (s){
    img_generatore3 = PP.assets.image.load(s, "assets/immagini/porta1.png", 150, 156);
}

function create_generatore3 (s){
    generatore3 = PP.assets.image.add(s, img_generatore3, 10500, -200, 0, 0);
    PP.physics.add(s, generatore3, PP.physics.type.DYNAMIC);
    PP.physics.set_immovable(generatore3, true);
    PP.physics.set_allow_gravity(generatore3, false);
}

function update_generatore3 (s) {
    if (generatore3.geometry.x <= 10500) {
        PP.physics.set_velocity_x(generatore3, 500);
    }
    if (generatore3.geometry.x >= 11600) {
        PP.physics.set_velocity_x(generatore3, -500);
    }
}

function generatore_crea_cassa3 (s) {
    if (timer_gener3 !=false)
    {
        return
    }
    spostamento_cassa_generaider3  (s, generatore3.geometry.x, generatore3.geometry.y);
    timer_gener3 = true;
    PP.timers.add_timer(s, 1200, reenable_timer3, false);
}

function reenable_timer3 (s){
    timer_gener3 = false;
}