let img_slot;
let slot_animata;

function preload_slot(s) {
    img_slot = PP.assets.image.load(s, "Assets/Immagini/slot.png", 154, 200);
}

function create_slot_animata(s){
    slot_animata = PP.assets.image.add(s, img_slot, 10000, 320, 0.5, 1);
    PP.physics.add(s, slot_animata, PP.physics.type.DYNAMIC);
    //PP.physics.set_drag_x(slot_animata, 7000);

    // riporto a true la vita del lanciatore e a false il lancio
}

//morte toccando il nemico, uccisione nemico se lo si tocca dashando


//funzione che innesca la schermata di game over


//morte toccando una carta, immunità usando il dash


function update_slot_animata(s){
    
    //se il lanciatore è morto update non fa niente

    //il lanciatore spara solo se il giocatore gli è vicino

    if ((slot_animata.geometry.x <= 10200)){
        PP.physics.set_velocity_x(slot_animata, 200)
    }
    else if ((slot_animata.geometry.x >= 10000)){
        PP.physics.set_velocity_x(slot_animata, -200)
    }
}




