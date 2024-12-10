let img_slot;
let slot_animate = [];
let inermità_slot = [];
let slot_spenta = [];

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
    PP.timers.add_timer(s, 5000, cambio_direz, true);
    slot_spenta.push(0);
    slot_animate.push(slot_animata);
    
    let direzione_positiva = true;
}


function update_slot_animata(s){

}

//funzione per far cambiare direzione alla slot ogni 5 secondi

function cambio_direz(s) {
    if (direzione_positiva == true) {
        direzione_positiva = false;
        console.log("turbosus")
        for (let i = 0; i < slot_animate.length; i++) {
            if (slot_spenta[i] == 0) {
                PP.physics.set_velocity_x(slot_animate[i], -200);
            }
            else {
                for (let i = 0; i < slot_animate.length; i++) {
                    PP.physics.set_velocity_x(slot_animate[i], 0);
                }
            }
        }
        return;
    }

    if (direzione_positiva == false) {
        direzione_positiva = true;
        console.log("susturbo")
        for (let i = 0; i < slot_animate.length; i++) {
            if (slot_spenta[i] == false) {
                PP.physics.set_velocity_x(slot_animate[i], 200);
            }
            else {
                for (let i = 0; i < slot_animate.length; i++) {
                    PP.physics.set_velocity_x(slot_animate[i], 0);
                }
            }
        }
    }
}

// funzione che pegne la slot tramite il dash

function inerme(s){
    if (dash_disable == true) {
        i = inermità_slot.shift();
        PP.physics.set_velocity_x(slot_animate[i], 0);
        slot_spenta[i] = true;
        console.log(slot_spenta[i]);
    }
    else {
        console.log("sus morto")
        morte(s);
        PP.timers.add_timer(s, 1000, game_over, false);
    }
}
