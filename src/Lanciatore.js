let img_lanciatore;
let lanciatore;
let attack_check =false;
let img_carta;
let lancio = true;
let carta;
let vita_lanciatore = true;

let curr_anim_Lanciatore = "Idle"; // Questa variabile contiene l'animazione corrente

function preload_Lanciatore(s) {
    img_lanciatore = PP.assets.sprite.load_spritesheet(s, "Assets/Immagini/Spritesheet_test_1.PNG", 154, 200);
    img_carta = PP.assets.image.load(s, "assets/immagini/carata.jpg");
}


function configure_Lanciatore_animations(s) {
    PP.assets.sprite.animation_add(lanciatore, "Attack", 6, 13, 5, -1);
    PP.assets.sprite.animation_add(lanciatore, "Idle", 0, 5, 5, -1);
    PP.assets.sprite.animation_play(lanciatore, "Idle");
}


function create_Lanciatore(s){
    lanciatore = PP.assets.sprite.add(s, img_lanciatore, 800, 620, 0.5, 1);
    PP.physics.add(s, lanciatore, PP.physics.type.DYNAMIC);
    PP.physics.set_drag_x(lanciatore, 7000);

}

//morte toccando il nemico, uccisione nemico se lo si tocca dashando

function kill (s, obj1, obj2){
    if (dash_disable == true && PP.physics.get_velocity_x(player) >= 800){
        PP.assets.destroy(obj2);
        vita_lanciatore = false;
    }

    if (dash_disable == true && PP.physics.get_velocity_x(player) <= 800){
        PP.assets.destroy(obj2);
        vita_lanciatore = false;
    }

    else {
        morte(s);
        PP.timers.add_timer(s, 1000, game_over, false);
    }
}


function game_over(s){
    move_disable = false;
    PP.scenes.start("morte");
}


//morte toccando una carta, immunità usando il dash


function morte_carta(s, obj1, obj2){
    if (dash_disable == false){

        if(PP.physics.get_velocity_x(player) > -800 || 800 > PP.physics.get_velocity_x(player)){

            PP.assets.destroy(obj2);
            morte(s);
            move_disable = true;
            PP.timers.add_timer(s, 700, game_over, false);
        }
    }
}



function attack(s) {
    attack_check = false;
    lancio = false;
    
    carta = PP.assets.image.add(s, img_carta, lanciatore.geometry.x,
        lanciatore.geometry.y - 120,
        0.5, 0.5);
    PP.physics.add(s, carta, PP.physics.type.DYNAMIC);
    PP.physics.set_allow_gravity(carta, false);
    PP.physics.set_rotation(carta, 360);
    PP.physics.set_velocity_x(carta, -600);
    
    PP.physics.add_overlap_f(s, player, carta, morte_carta);

    console.log ("attacco");
    console.log (Math.abs(lanciatore.geometry.x - player.geometry.x));
}


function update_Lanciatore(s){
    let next_anim_Lanciatore = curr_anim_Lanciatore;
    
    //se il lanciatore è morto update non fa niente

    if (attack_check != false || vita_lanciatore == false)
        {
            return;
        }

    //il lanciatore spara solo se il giocatore gli è vicino

    if (Math.abs(lanciatore.geometry.x - player.geometry.x) < 500)
        {
            next_anim_Lanciatore = "Attack";
            PP.timers.add_timer(s, 1600, attack, false);
            attack_check = true;
        }
    else {
                next_anim_Lanciatore = "Idle";
    }    
    
    if (next_anim_Lanciatore != curr_anim_Lanciatore) {
        PP.assets.sprite.animation_play(lanciatore, next_anim_Lanciatore);
        curr_anim_Lanciatore = next_anim_Lanciatore;
    }
    
}




