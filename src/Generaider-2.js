let img_generatore2;
let generatore2;
let img_barra2;
let barra2;
let timer_gener2 = false;

function preload_generatore2 (s){
    img_generatore2 = PP.assets.image.load(s, "assets/immagini/Generaider.PNG", 150, 156);
    img_barra2 = PP.assets.image.load(s, "assets/immagini/Barra_Generaider2.PNG", 150, 156);
}

function create_generatore2 (s){
    barra2 = PP.assets.image.add(s, img_barra2, 6070, 1230, 0, 0);
    generatore2 = PP.assets.image.add(s, img_generatore2, 6000, 1230, 0, 0);
    
    PP.physics.add(s, generatore2, PP.physics.type.DYNAMIC);
    PP.physics.set_immovable(generatore2, true);
    PP.physics.set_allow_gravity(generatore2, false);
}

function update_generatore2 (s) {
    if (generatore2.geometry.x <= 6000) {
        PP.physics.set_velocity_x(generatore2, 500);
    }
    if (generatore2.geometry.x >= 6700) {
        PP.physics.set_velocity_x(generatore2, -500);
    }
}

function generatore_crea_cassa2 (s) {
    if (timer_gener2 !=false)
    {
        return
    }
    spostamento_cassa_generaider2 (s, generatore2.geometry.x, generatore2.geometry.y);
    timer_gener2 = true;
    PP.timers.add_timer(s, 1200, reenable_timer2, false);
}

function reenable_timer2 (s){
    timer_gener2 = false;
}