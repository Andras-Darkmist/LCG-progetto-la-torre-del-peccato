let img_pavimento;
let img_muro;

let porta_fine_gioco;

let porta_fine_gioco_img;

let img_bg3;

let ascensore1_3;
let ascensore2_3;
let ascensoremuro_3;

livello.push(3);

function preload (s){
    img_pavimento = PP.assets.image.load (s, "assets/immagini/Pavimento livello 3.PNG");
    img_muro = PP.assets.image.load (s, "assets/immagini/piattaforme/piattaforma-02 - CopiaV.png");
    img_bg3 = PP.assets.image.load (s, "Assets/immagini/Sfondo livello 3.PNG");
    ascensore1_3 = PP.assets.image.load(s, "Assets/immagini/Ascensore1.PNG");
    ascensore2_3 = PP.assets.image.load(s, "Assets/immagini/Ascensore2.PNG");
    ascensoremuro_3 = PP.assets.image.load(s, "Assets/immagini/AscensoreMuro.PNG");
    porta_fine_gioco_img = PP.assets.image.load (s, "Assets/immagini/Porta 1.png");
    
    preload_porta3(s);
    preload_caricatore (s);
    preload_Dialogo3(s);
    prleoad_ultima_cassa (s);
    preload_player (s);
    preload_vite (s);
    preload_score (s);
}

function create (s){
    PP.game_state.set_variable("Monete_checkpoint", PP.game_state.get_variable("Monete"));
    PP.game_state.set_variable("Monete", 30);
    PP.game_state.set_variable("Lettere_checkpoint", PP.game_state.get_variable("Lettere"));

    
    let bg = PP.assets.image.add (s, img_bg3, -20, -200, 0, 0);
    let bg_2 = PP.assets.image.add (s, img_bg3, 1180, -200, 0, 0);
    let bg_3 = PP.assets.image.add (s, img_bg3, 1180+1200, -200, 0, 0);

    let ascensore_2 = PP.assets.image.add(s, ascensore2_3, -100, -150, 0, 0);
    ascensore_2.geometry.flip_x = true;


    let pavimento1 = PP.assets.image.add (s, img_pavimento, 0, 620, 0, 0);
    PP.physics.add (s, pavimento1, PP.physics.type.STATIC);
    
    let pavimento0 = PP.assets.image.add (s, img_pavimento, -1300, 620, 0, 0);
    PP.physics.add (s, pavimento1, PP.physics.type.STATIC);
    
    let pavimento2 = PP.assets.image.add (s, img_pavimento, 1300, 620, 0, 0);
    PP.physics.add (s, pavimento2, PP.physics.type.STATIC);
    
    let pavimento3 = PP.assets.image.add (s, img_pavimento, 2600, 620, 0, 0);
    PP.physics.add (s, pavimento3, PP.physics.type.STATIC);

    porta_fine_gioco = PP.assets.image.add (s, porta_fine_gioco_img, 2700, 620, 0, 1);
    PP.physics.add (s, porta_fine_gioco, PP.physics.type.STATIC);

    //let pavimento2_90 = PP.assets.image.add (s, img_muro, 1300, 620-150, 0, 0);
    //PP.physics.add (s, pavimento2_90, PP.physics.type.STATIC);

    create_ultima_cassa (s);
    create_Dialogo3 (s);
    create_caricatore(s);
    load_animazioni_caricatore(s);
    
    create_player (s, 100, 500,);
    configure_player_animations(s);


    let ascensore_1 = PP.assets.image.add(s, ascensore1_3, -100, -100, 0, 0);
    ascensore_1.geometry.flip_x = true;
    let ascensore_muro = PP.assets.image.add(s, ascensoremuro_3, -500, -100, 0, 0);
    ascensore_muro.geometry.flip_x = true;
    PP.physics.add(s, ascensore_muro, PP.physics.type.STATIC);
    PP.physics.add_collider(s, player, ascensore_muro);
    create_porta3(s, 1300, 190);
    
    create_score(s);
    create_vite(s);
    PP.physics.add_collider_f(s, player, pavimento1, salto_si);
    PP.physics.add_collider_f(s, player, pavimento2, salto_si);
    PP.physics.add_collider_f(s, player, pavimento3, salto_si);
    PP.physics.add_collider_f(s, player, porta_fine_gioco, goto_final);

    PP.physics.add_overlap_f(s, player, caricatore, danno_caricatore);
    PP.physics.add_collider(s, player, porta3);
    PP.physics.add_collider(s, caricatore, ascensore_muro);
    PP.physics.add_collider(s, caricatore, porta3);
    PP.physics.add_collider(s, caricatore, pavimento1);
    PP.physics.add_collider_f(s, ultima_cassa, player, collision_Dialogo3);

}

function update (s){
    update_porta3(s);
    update_caricatore(s);
    update_animazioni_caricatore (s);
    player_update(s);
    manage_dash(s);
    update_score(s);
    update_score_monete(s);
    update_Dialogo3(s);
}

function goto_final(s) {
    if (PP.game_state.get_variable("Lettere") >= 5 && condizione_finale3 == true ) {
        PP.scenes.start("Finale3");
        return;
    }

    if (PP.game_state.get_variable("Lettere") >= 5 && condizione_finale3 == false ) {
        PP.scenes.start("Finale2");
        return;
    }

    if (PP.game_state.get_variable("Lettere") < 6 ) {
        PP.scenes.start("Finale1");
        return;
    }
}

function destroy (s){

}

PP.scenes.add("level3", preload, create, update, destroy);