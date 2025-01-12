let img_pavimento;
let img_muro;






function preload (s){
    img_pavimento = PP.assets.image.load (s, "assets/immagini/piattaforme/Piattaforma_Tavola disegno 1.png");
    img_muro = PP.assets.image.load (s, "assets/immagini/piattaforme/piattaforma-02 - CopiaV.png");
    preload_caricatore (s);
    
    preload_player (s);
    preload_vite (s);
    preload_score (s);
}

function create (s){
    let pavimento1 = PP.assets.image.add (s, img_pavimento, 0, 200, 0, 0);
    PP.physics.add (s, pavimento1, PP.physics.type.STATIC);
    let pavimento1_90 = PP.assets.image.add (s, img_muro, 0, 0, 0, 0);
    PP.physics.add (s, pavimento1_90, PP.physics.type.STATIC);
    let pavimento2 = PP.assets.image.add (s, img_pavimento, 650, 200, 0, 0);
    PP.physics.add (s, pavimento2, PP.physics.type.STATIC);
    let pavimento2_90 = PP.assets.image.add (s, img_muro, 1300, 0, 0, 0);
    PP.physics.add (s, pavimento2_90, PP.physics.type.STATIC);

    create_player (s, 100, 0,);
    configure_player_animations(s)
    create_caricatore(s);
    load_animazioni_caricatore(s);
    create_score(s);
    create_vite(s);
    PP.physics.add_collider_f(s, player, pavimento1, salto_si);
    PP.physics.add_collider_f(s, player, pavimento2, salto_si);
    PP.physics.add_collider_f(s, player, pavimento1, salto_si);
    PP.physics.add_overlap_f(s, player, caricatore, danno_caricatore);
    PP.physics.add_collider(s, player, pavimento1_90);
    PP.physics.add_collider(s, player, pavimento2_90);
    PP.physics.add_collider(s, caricatore, pavimento1_90);
    PP.physics.add_collider(s, caricatore, pavimento2_90);
    PP.physics.add_collider(s, caricatore, pavimento1);
    PP.physics.add_collider(s, caricatore, pavimento2);
}

function update (s){
    update_caricatore(s);
    update_animazioni_caricatore (s);
    player_update(s);
    manage_dash(s);
    update_score(s);
    update_score_monete(s);
}

function destroy (s){

}

PP.scenes.add("level3", preload, create, update, destroy);