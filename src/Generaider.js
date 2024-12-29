let img_generatore;
let generatore;
let timer_gener = false;

function preload_generatore (s){
    img_generatore = PP.assets.image.load(s, "assets/immagini/Generaider.PNG", 150, 156);
}

function create_generatore (s){
    generatore = PP.assets.image.add(s, img_generatore, 800, 130, 0, 0);
    PP.physics.add(s, generatore, PP.physics.type.DYNAMIC);
    PP.physics.set_immovable(generatore, true);
    PP.physics.set_allow_gravity(generatore, false);
}

function update_generatore (s) {
    if (generatore.geometry.x < 850) {
        PP.physics.set_velocity_x(generatore, 500);
    }
    if (generatore.geometry.x > 2100) {
        PP.physics.set_velocity_x(generatore, -500);
    }
}

function generatore_crea_cassa(s) {
    if (timer_gener !=false)
    {
        return
    }
    spostamento_cassa_generaider1 (s, generatore.geometry.x, generatore.geometry.y);
    timer_gener = true;
    PP.timers.add_timer(s, 1200, reenable_timer, false);
}

function reenable_timer (s){
    timer_gener = false;
}