let img_cuore;
let cuori = [];
let vite_rimanenti = 2;
PP.game_state.set_variable ("Vite", 3);

function preload_vite (s) {
    PP.game_state.set_variable ("Vite", 3);
    vite_rimanenti = 2;
    cuori = [];
    img_cuore = PP.assets.image.load(s, "assets/immagini/carata.jpg", 150, 156);
}

function create_vite(s) {
    for (let i=0; i<PP.game_state.get_variable("Vite"); i++)
    {
         let cuore = PP.assets.image.add(s, img_cuore, 100 +i*30, 20, 0, 0);
         cuore.tile_geometry.scrollactor_x = 0;
         cuore.tile_geometry.scrollactor_y = 0;
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


PP.physics.add_collider(s, casse[i], scalino_vert_1);
PP.physics.add_collider(s, casse[i], scalino_vert_2);
PP.physics.add_collider(s, casse[i], scalino_vert_3);
PP.physics.add_collider(s, casse[i], scalino_vert_4);
PP.physics.add_collider(s, casse[i], scalino_vert_5);
PP.physics.add_collider(s, casse[i], scalino_vert_6);
PP.physics.add_collider(s, casse[i], scalino_vert_7);
PP.physics.add_collider(s, casse[i], scalino_vert_8);
PP.physics.add_collider(s, casse[i], scalino_orizz_1);
PP.physics.add_collider(s, casse[i], scalino_orizz_2);
PP.physics.add_collider(s, casse[i], scalino_orizz_3);
PP.physics.add_collider(s, casse[i], scalino_orizz_4);
PP.physics.add_collider(s, casse[i], scalino_orizz_5);
PP.physics.add_collider(s, casse[i], scalino_orizz_6);
PP.physics.add_collider(s, casse[i], scalino_orizz_7);
PP.physics.add_collider(s, casse[i], scalino_orizz_8);
PP.physics.add_collider(s, casse[i], scalino_orizz_9);
PP.physics.add_collider(s, casse[i], scalino_orizz_10);
PP.physics.add_collider(s, casse[i], scalino_orizz_11);
PP.physics.add_collider(s, casse[i], scalino_orizz_12);
PP.physics.add_collider(s, casse[i], scalino_orizz_13);
PP.physics.add_collider(s, casse[i], scalino_orizz_14);
PP.physics.add_collider(s, casse[i], scalino_orizz_15);