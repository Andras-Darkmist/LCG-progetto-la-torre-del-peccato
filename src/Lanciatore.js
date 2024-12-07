let img_lanciatore;
let lanciatori = [];
let curr_anim_Lanciatore = [];
let attack_check = [];
let enemy_check = [];
let img_carta;
let carta;
let vita_lanciatore = [] /*true*/;
let img_moneta;
let moneta;

let morte_nemici = [];

// Questa variabile contiene l'animazione corrente

function preload_Lanciatore(s) {
    img_lanciatore = PP.assets.sprite.load_spritesheet(s, "Assets/Immagini/Sprite_Lanciatore.PNG", 172, 200);
    img_carta = PP.assets.image.load(s, "assets/immagini/carata.jpg");
    img_moneta = PP.assets.image.load(s, "assets/immagini/monetamini.png");
}

function create_Lanciatore(s, x, y) {
    let lanciatore = PP.assets.sprite.add(s, img_lanciatore, x, y, 0.5, 1);
    PP.physics.add(s, lanciatore, PP.physics.type.DYNAMIC);
    PP.physics.set_drag_x(lanciatore, 7000);
    lanciatori.push(lanciatore);
}

function configure_Lanciatore_animations(s) {
    for (let i = 0; i < lanciatori.length; i++) {
        PP.assets.sprite.animation_add(lanciatori[i], "Attack", 4, 10, 5, -1);
        PP.assets.sprite.animation_add(lanciatori[i], "Idle", 0, 3, 5, -1);
        PP.assets.sprite.animation_play(lanciatori[i], "Idle");
        vita_lanciatore[i] = true;
        attack_check[i] = false;
        curr_anim_Lanciatore[i] = "Idle";
    }
}


//morte toccando il nemico, uccisione nemico se lo si tocca dashando

function kill(s, obj1, obj2) {
    if (dash_disable == true && (PP.physics.get_velocity_x(player) >= 800 || PP.physics.get_velocity_x(player) <= -800)) {
        console.log("sus")
        PP.assets.destroy(obj2);
        i = morte_nemici.shift();
        vita_lanciatore[i] = false;
        let x = 1200;
        let y = 600;
        let moneta = PP.assets.image.add(s, img_moneta, (x), (y), 0, 0)
        PP.physics.add(s, moneta, PP.physics.type.DYNAMIC);
        PP.physics.set_drag_x(moneta, 7000);
    }

    else if (curr_anim != "die"){
        console.log("sus morto")
        morte(s);
        PP.timers.add_timer(s, 1000, game_over, false);
    }
}

//funzione che innesca la schermata di game over

function game_over(s) {

    PP.scenes.start("morte");
}


//morte toccando una carta, immunità usando il dash


function morte_carta(s, obj1, obj2) {
    if (dash_disable == true && (PP.physics.get_velocity_x(player) >= 800 || PP.physics.get_velocity_x(player) <= -800)) {

        PP.assets.destroy(obj2);
    }
    else {
        PP.assets.destroy(obj2);
        morte(s);
        move_disable = true;
        PP.timers.add_timer(s, 700, game_over, false);
    }
}

function distruggi_carte(s, obj1) {
    PP.assets.destroy(obj1);
}


function attack(s) {
    i = enemy_check.shift();
    console.log(i);
    if (vita_lanciatore[i] == false) {
        return
    }
    attack_check[i] = false;

    carta = PP.assets.image.add(s, img_carta, lanciatori[i].geometry.x,
        lanciatori[i].geometry.y - 120,
        0.5, 0.5);
    PP.physics.add(s, carta, PP.physics.type.DYNAMIC);
    PP.physics.set_allow_gravity(carta, false);
    PP.physics.set_rotation(carta, 360);
    PP.physics.set_velocity_x(carta, -600);

    PP.physics.add_overlap_f(s, player, carta, morte_carta);
    for (let g = 0; g < casse.length; g++) {
        PP.physics.add_collider(s, casse[g], carta);
    }
    //PP.timers.add_timer(s, 2000, distruggi_carte(carta), false)
    console.log("attacco");


}


function update_Lanciatore(s) {
    for (let i = 0; i < lanciatori.length; i++) {
        let next_anim_Lanciatore = curr_anim_Lanciatore[i];

        if (vita_lanciatore[i] != false) {
            if(attack_check[i] != true){
                if (Math.abs(lanciatori[i].geometry.x - player.geometry.x) < 500) {
                    next_anim_Lanciatore = "Attack";
                    attack_check [i] = true;
                    PP.timers.add_timer(s, 1600, attack, false);
                    enemy_check.push(i);
                }

                else {
                    next_anim_Lanciatore = "Idle";
                }
        
                if (next_anim_Lanciatore != curr_anim_Lanciatore[i]) {
                    PP.assets.sprite.animation_play(lanciatori[i], next_anim_Lanciatore);
                    curr_anim_Lanciatore [i] = next_anim_Lanciatore;
                }
            }
        }
    
        }

        //il lanciatore spara solo se il giocatore gli è vicino

}




