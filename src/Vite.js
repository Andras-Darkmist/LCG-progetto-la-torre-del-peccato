let img_cuore;
let cuori = [];
let vite_rimanenti = 2;
PP.game_state.set_variable ("Vite", 3);

function preload_vite (s) {
    cuori = [];
    img_cuore = PP.assets.image.load(s, "assets/immagini/carata.jpg", 150, 156);
}

function create_vite(s) {
    for (let i=0; i<PP.game_state.get_variable("Vite"); i++)
    {
         let cuore = PP.assets.image.add(s, img_cuore, 3450, 320, 0, 0);
        cuori.push(cuore);
    }
}

function vita_persa (s) {
    PP.assets.destroy(cuori[vite_rimanenti]);
    danno(s);
    vite_rimanenti --;
    let prev_score = PP.game_state.get_variable("Vite");
    PP.game_state.set_variable("Vite", prev_score-1);
    if (PP.game_state.get_variable("Vite")<=0)
    {
        PP.assets.destroy(cuori[0]);
        morte(s);
        console.log(PP.game_state.get_variable("Vite"));
    }
}

function update_vite(s) {
    for (let i=0; i<PP.game_state.get_variable("Vite"); i++)
    {
        cuori[i].geometry.x = player.geometry.x - 120+i*10;     cuori[i].geometry.y = player.geometry.y - 550;
    }
}