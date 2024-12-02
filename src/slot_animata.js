let img_slot;
let slot_animata;

//variabili per capire se la slot è accesa o no e in che direzione si sta muovendo

let slot_inerme = false;
let direzione_positiva = true;


function preload_slot(s) {
    img_slot = PP.assets.image.load(s, "Assets/Immagini/slot-giusta.png", 154, 200);
}

function create_slot_animata(s){
    slot_animata = PP.assets.image.add(s, img_slot, 5300, 620, 0.5, 1);
    PP.physics.add(s, slot_animata, PP.physics.type.DYNAMIC);
    
    PP.timers.add_timer(s, 5000, inerme, true);
    PP.timers.add_timer(s, 5000, cambio_direz, true);
    
    let slot_inerme = false;
    let direzione_positiva = true;
}


function update_slot_animata(s){

}

//funzione per far cambiare direzione alla slot ogni 5 secondi

function cambio_direz (s){
    if (direzione_positiva == true){
        if (slot_inerme == false){
            PP.physics.set_velocity_x(slot_animata, -200);
            direzione_positiva = false;
        }
        else {
            PP.physics.set_velocity_x(slot_animata, 0);
        }
    }
    else if (direzione_positiva == false){
        if (slot_inerme == false){
            PP.physics.set_velocity_x(slot_animata, 200);
            direzione_positiva = true;
        }
        else {
            PP.physics.set_velocity_x(slot_animata, 0);
        }
    }
}

// funzione per spegnere la slot ogni 5 secondi

function inerme(s){
    PP.physics.set_velocity_x(slot_animata, 0)
    if (slot_inerme == true){
        slot_inerme = false;
        console.log("vero")
        return
    }
    if (slot_inerme == false){
        slot_inerme = true;
        console.log("falso")
    }
}
