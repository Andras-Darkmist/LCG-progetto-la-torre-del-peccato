let img_lanciatore;
let lanciatori = [];
let curr_anim_Lanciatore = [];
let attack_check = [];
let enemy_check = [];
let img_carta;
let carte = [];
let vita_lanciatore = [] /*true*/;
let morte_animazioni_lanciatore = []
let img_moneta;
let moneta;

let distanza_atk = 500;
let distanza_atk_lungo = 1050;


// Questa variabile contiene l'animazione corrente

function preload_Lanciatore(s) {
    lanciatori = [];
    curr_anim_Lanciatore = [];
    attack_check = [];
    enemy_check = [];
    vita_lanciatore = [];
    morte_animazioni_lanciatore = [];
    carte = [];
    img_lanciatore = PP.assets.sprite.load_spritesheet(s, "Assets/Immagini/Sprite_Lanciatore.PNG", 172, 200);
    img_carta = PP.assets.image.load(s, "assets/immagini/cartapicche.png");
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
        PP.assets.sprite.animation_add(lanciatori[i], "Mortis", 11, 13, 8, -1);
        PP.assets.sprite.animation_play(lanciatori[i], "Idle");
        vita_lanciatore[i] = true;
        morte_animazioni_lanciatore[i] = false;
        attack_check[i] = false;
        curr_anim_Lanciatore[i] = "Idle";
    }
}


//morte toccando il nemico, uccisione nemico se lo si tocca dashando

function kill_lanciatore(s, obj1, obj2) {
    let controllo; 
    if (dash_disable == true && (PP.physics.get_velocity_x(player) >= 800 || PP.physics.get_velocity_x(player) <= -800)) {
        console.log("sus")
        for (g = 0; g < lanciatori.length; g++){
            if (obj2 == lanciatori[g]){
                vita_lanciatore[g] = false;
                controllo = g;
            }
        }

        PP.timers.add_timer(s, 500, distruzione, false);

        function distruzione (s) {
            PP.assets.destroy(obj2);
            for (g = 0; g < lanciatori.length; g++){
                if (obj2 == lanciatori[g]){
                    morte_animazioni_lanciatore[g] = true;
                }
            }
        }
        // questo for per ogni lanciatore in mappa controlla se la collisione è avvenuta con lui, poi dstrugge quello con cui la collisione è effettivamente avventuta

        console.log(vita_lanciatore[i]);
        let x = 1200;
        let y = 600;
        let moneta = PP.assets.image.add(s, img_moneta, (x), (y), 0, 0)
        PP.physics.add(s, moneta, PP.physics.type.DYNAMIC);
        PP.physics.set_drag_x(moneta, 7000);
    }

    else if (curr_anim != "die" && invincibilità == false && vita_lanciatore[controllo] == true){
        console.log("sus danno");
        vita_persa (s);
    }
}

//funzione che innesca la schermata di game over




//morte toccando una carta, immunità usando il dash


function morte_carta(s, obj1, obj2) {
    if (dash_disable == true && (PP.physics.get_velocity_x(player) >= 800 || PP.physics.get_velocity_x(player) <= -800)) {

        PP.assets.destroy(obj2);
    }
    else if (invincibilità == false) {
        PP.assets.destroy(obj2);
        vita_persa (s);
    }
}


function attack(s) {
    i = enemy_check.shift();
    console.log(i);
    if (vita_lanciatore[i] == false) {
        return
    }
    attack_check[i] = false;

    let carta = PP.assets.image.add(s, img_carta, lanciatori[i].geometry.x, lanciatori[i].geometry.y - 120, 0.5, 0.5);
    PP.physics.add(s, carta, PP.physics.type.DYNAMIC);
    PP.physics.set_allow_gravity(carta, false);
    PP.physics.set_rotation(carta, 360);
    PP.physics.set_velocity_x(carta, -600);
    carte.push(carta);

    PP.physics.add_overlap_f(s, player, carta, morte_carta);

    for (let g = 0; g < casse.length; g++) {
        PP.physics.add_collider(s, casse[g], carta);
    }

    PP.timers.add_timer(s, 2000, distruggi_carte, false)

    console.log("attacco");

    function distruggi_carte(s, obj1) {
        carta_vecchia = carte.shift();
        PP.assets.destroy(carta_vecchia);
    }


}


function update_Lanciatore(s) {
    for (let i = 0; i < lanciatori.length; i++) {
        let next_anim_Lanciatore = curr_anim_Lanciatore[i];

        if (morte_animazioni_lanciatore[i] != true) {
            if(attack_check[i] != true){
                if (Math.abs(lanciatori[i].geometry.x - player.geometry.x) < distanza_atk || Math.abs(lanciatori[i].geometry.x - player.geometry.x) < distanza_atk_lungo && i == 2) {
                    next_anim_Lanciatore = "Attack";
                    attack_check [i] = true;
                    PP.timers.add_timer(s, 1400, attack, false);
                    enemy_check.push(i);
                }

                else {
                    next_anim_Lanciatore = "Idle";
                }

                
        
            }
            if (vita_lanciatore[i] == false)
                {
                    console.log("BORTIS");
                    next_anim_Lanciatore = "Mortis";
                }
            if (next_anim_Lanciatore != curr_anim_Lanciatore[i]) {
                PP.assets.sprite.animation_play(lanciatori[i], next_anim_Lanciatore);
                curr_anim_Lanciatore [i] = next_anim_Lanciatore;
            }
        }
    
        }

        //il lanciatore spara solo se il giocatore gli è vicino

}




