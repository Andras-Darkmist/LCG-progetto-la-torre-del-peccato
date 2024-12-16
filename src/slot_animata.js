let img_slot;
let slot_animate = [];
let posizione_slot = [];
let slot_spenta = [];

let limite_sx = 6100;
let limite_dx = 7100;

//variabili per capire se la slot è accesa o no e in che direzione si sta muovendo

let direzione_positiva = true;


function preload_slot(s) {
    slot_animate = [];
    inermità_slot = [];
    slot_spenta = [];

    img_slot = PP.assets.image.load(s, "Assets/Immagini/slot-giusta.png", 154, 200);
}

function create_slot_animata(s, x, y){
    let slot_animata = PP.assets.image.add(s, img_slot, x, y, 0.5, 1);
    PP.physics.add(s, slot_animata, PP.physics.type.DYNAMIC);
    //PP.timers.add_timer(s, 5000, cambio_direz, true);
    PP.physics.set_velocity_x(slot_animata, 200);
    slot_spenta.push(false);
    slot_animate.push(slot_animata);
    
    let direzione_positiva = true;
}


function update_slot_animata(s) {

    for (let i = 0; i < slot_animate.length; i++) {
        if (slot_animate[i].geometry.x <= limite_sx && PP.physics.get_velocity_x(slot_animate[i]) != 200 && slot_spenta[i] == false && PP.physics.get_velocity_x(slot_animate[i]) != 0) {
            PP.physics.set_velocity_x(slot_animate[i], 200);
        }
        if (slot_animate[i].geometry.x >= limite_dx && PP.physics.get_velocity_x(slot_animate[i]) != -200 && slot_spenta[i] == false && PP.physics.get_velocity_x(slot_animate[i]) != 0) {
            PP.physics.set_velocity_x(slot_animate[i], -200);
        }
    }
}

//funzione per far cambiare direzione alla slot ogni 5 secondi

// funzione che spegne la slot tramite il dash

function kill_slot(s, obj1, obj2){
    i = posizione_slot.shift();
    if (dash_disable == true || PP.physics.get_velocity_x(obj2) == 0) {
        PP.physics.set_velocity_x(obj2, 0);
        PP.physics.set_drag_x(obj2, 7000);
        i = posizione_slot.shift();
        slot_spenta[i] = true;
    }
    else if (slot_spenta[i] == false && invincibilità == false) {
        console.log("sus morto")
        vita_persa (s);
    }
}
