let bg;
let bg_sopra;
let sfondott0;
let sfondott1;
let sfondott2;
let sfondott3;
let transzionett;
let img_background;
let img_colonne;
let img_volte;
let volte_dietro;
let img_slot_nuove;
let colonne_davanti;
let colonne_davanti_sopra;
let slot_nuove;
let img_moquette;
let moquette;
let img_lampa;
let lampadari;
let img_pavi_prosp;
let pavi_prosp;

let ascensore1;
let ascensore2;
let ascensoremuro;

let pavimento_19;
let muro_iniziale;

let pavimento1;
let pavimento2;
let pavimento2_90;
let pavimento3;
let pavimento3_90;
let scala1;
let scala2;

let scala_1;
let scala_2;
let scala_3;
let scala_4;
let scala_5;

let pedana1;
let pedana2;
let pedana3;
let chiusura_porta_1 = true;
let chiusura_porta_finale = true;

let collider_sopra;
let collider_Asmodeo = true;
let collider_casse_sopra = [];
let collider_porta1 = true;


livello.push(1);

function preload (s) {
    collider_casse_sopra = [];

    preload_vite (s);
    preload_lettera (s);
    preload_score (s);
    preload_player (s);
    preload_cassa (s);
    preload_porta (s);
    preload_piatt (s);
    preload_piatt_move (s);
    //preload_piatt_move2 (s);
    preload_ghiglio(s);
    preload_Lanciatore(s);
    preload_slot(s);

    preload_Asmodeo (s);
    preload_Dialogo1 (s);

    img_background = PP.assets.image.load(s, "Assets/Immagini/carta parati.png");
    img_slot_nuove = PP.assets.image.load(s, "Assets/Immagini/slot sfondo.png");
    img_colonne = PP.assets.image.load(s, "Assets/Immagini/colonne davanti copia.png");
    img_lampa = PP.assets.image.load(s, "Assets/Immagini/lampadari.png");
    img_pavi_prosp = PP.assets.image.load(s, "Assets/Immagini/moquette prospettica.png"); 

    img_volte = PP.assets.image.load(s, "Assets/Immagini/volta dietro.png");

    img_moquette = PP.assets.image.load(s, "Assets/Immagini/moquette.png");
    pavimento1 = PP.assets.image.load(s, "Assets/Immagini/Piattaforme/Piattaforma_Tavola disegno 1.png");
    pavimento2 = PP.assets.image.load(s, "Assets/Immagini/Piattaforme/Piattaforma-03.png");
    pavimento2_90 = PP.assets.image.load(s, "Assets/Immagini/Piattaforme/Piattaforma-03 - Copia.png");
    pavimento3 = PP.assets.image.load(s, "Assets/Immagini/Piattaforme/Piattaforma-02.png");
    pavimento3_90 = PP.assets.image.load(s, "Assets/Immagini/Piattaforme/Piattaforma-02 - Copia.png");
    scala1 = PP.assets.image.load(s, "Assets/Immagini/Piattaforme/Piattaforma-05.png");
    scala2 = PP.assets.image.load(s, "Assets/Immagini/Piattaforme/Piattaforma-04.png");
    sfondott0 = PP.assets.image.load(s, "Assets/immagini/Livello1-sfondo metallico.png");
    sfondott1 = PP.assets.image.load(s, "Assets/immagini/Sfondo tutorial 1.png");
    sfondott2 = PP.assets.image.load(s, "Assets/immagini/Sfondo tutorial 2.png");
    sfondott3 = PP.assets.image.load(s, "Assets/immagini/Sfondo tutorial 3.png");
    transzionett = PP.assets.image.load(s, "Assets/immagini/Cambio zona.PNG");
    ascensore1 = PP.assets.image.load(s, "Assets/immagini/Ascensore1.PNG");
    ascensore2 = PP.assets.image.load(s, "Assets/immagini/Ascensore2.PNG");
    ascensoremuro = PP.assets.image.load(s, "Assets/immagini/AscensoreMuro.PNG");
}

// PROBLEMI PER ORA: specie di caduta continua mentre si è sulla cassa, le casse si compenetrano, HUD ferma,
// animazione lanciatore è scoordinata rispetto a lancio effettivo carta,
// problema funzione salto solo da sopra aagli oggetti permette di saltare anche quando si tocca la parte laterale superiore di questi

// DA INSERIRE: proiettili spostano casse,
    // drop monete dei nemici,
    // cambio tra livelli, modificare game over per far ripartire dal secondo livello se ci si muore, menù iniziale placeholder per ora
    // vere immagini lettere che ora sono placeholder, da cambiare png porta e porta aperta
    // sfondo livello 2 di luigi

function create (s) {
    

    bg = PP.assets.tilesprite.add(s, img_background, 0, 30, 2800, 380, 0, 0);
    bg.tile_geometry.scroll_factor_x = 0.1;
    bg_sopra = PP.assets.tilesprite.add(s, img_background, 0, -600, 2800, 380, 0, 0);
    bg_sopra.tile_geometry.scroll_factor_x = 0.1;
    
    volte_dietro = PP.assets.tilesprite.add(s, img_volte, -2000, 100, 20000, 453, 0, 0);
    volte_dietro.tile_geometry.scroll_factor_x = 0.1;
    
    lampadari = PP.assets.tilesprite.add(s, img_lampa, -2000, 40, 20000, 93, 0, 0);
    lampadari.tile_geometry.scroll_factor_x = 0.2;

    pavi_prosp = PP.assets.tilesprite.add(s, img_pavi_prosp, -2000, 550, 20000, 100, 0, 0);
    pavi_prosp.tile_geometry.scroll_factor_x = 0.4;
    
    slot_nuove = PP.assets.tilesprite.add(s, img_slot_nuove, 0, 485, 12800, 90, 0, 0);
    slot_nuove.tile_geometry.scroll_factor_x = 0.4;

    moquette = PP.assets.tilesprite.add(s, img_moquette, 0, 650, 12000, 172, 0, 0);
    moquette.tile_geometry.scroll_factor_x = 0.1;

    colonne_davanti = PP.assets.tilesprite.add(s, img_colonne, 0, 0, 2800, 650, 0, 0);
    colonne_davanti.tile_geometry.scroll_factor_x = 0;

    colonne_davanti_sopra = PP.assets.tilesprite.add(s, img_colonne, 0, -650, 2800, 650, 0, 0);
    colonne_davanti_sopra.tile_geometry.scroll_factor_x = 0;


    bg.geometry.scale_x = 1.7;
    bg.geometry.scale_y = 1.7;
    bg_sopra.geometry.scale_x = 1.7;
    bg_sopra.geometry.scale_y = 1.7;
    //bg.tile_geometry.scroll_factor_y = 0;
    //pavimento
    let bgtt0 = PP.assets.image.add(s, sfondott0, -3566, 0, 0, 0);
    let bgtt1 = PP.assets.image.add(s, sfondott1, -2600, 0, 0, 0);
    let bgtt2 = PP.assets.image.add(s, sfondott2, -1634, 0, 0, 0);
    let bgtt3 = PP.assets.image.add(s, sfondott3, -688, 0, 0, 0);

    //let bgtt0 = PP.assets.image.add(s, sfondott0, -588, 0, 0, 0);

    let ascensore_2 = PP.assets.image.add(s, ascensore2, 12555, -150, 0, 0);

    // PAVIMENTO INTRO

    let pavimento_01 = PP.assets.image.add(s, pavimento1, -650, 620, 0, 0);
    PP.physics.add(s, pavimento_01, PP.physics.type.STATIC);

    let pavimento_02 = PP.assets.image.add(s, pavimento1, -1300, 620, 0, 0);
    PP.physics.add(s, pavimento_02, PP.physics.type.STATIC);

    let pavimento_03 = PP.assets.image.add(s, pavimento1, -1950, 620, 0, 0);
    PP.physics.add(s, pavimento_03, PP.physics.type.STATIC);

    let pavimento_04 = PP.assets.image.add(s, pavimento1, -2600, 620, 0, 0);
    PP.physics.add(s, pavimento_04, PP.physics.type.STATIC);
    

    // PAVIMENTO LIVELLO

    let pavimento_1 = PP.assets.image.add(s, pavimento1, 0, 620, 0, 0);
    PP.physics.add(s, pavimento_1, PP.physics.type.STATIC);
    
    let pavimento_2 = PP.assets.image.add(s, pavimento1, 650, 620, 0, 0);
    PP.physics.add(s, pavimento_2, PP.physics.type.STATIC);
    
    let pavimento_3 = PP.assets.image.add(s, pavimento1, 1300, 620, 0, 0);
    PP.physics.add(s, pavimento_3, PP.physics.type.STATIC);
    
    let pavimento_4 = PP.assets.image.add(s, pavimento1, 1950, 620, 0, 0);
    PP.physics.add(s, pavimento_4, PP.physics.type.STATIC);
    
    let pavimento_5 = PP.assets.image.add(s, pavimento1, 2600, 620, 0, 0);
    PP.physics.add(s, pavimento_5, PP.physics.type.STATIC);
    
    let pavimento_6 = PP.assets.image.add(s, pavimento1, 3250, 620, 0, 0);
    PP.physics.add(s, pavimento_6, PP.physics.type.STATIC);
    
    let pavimento_7 = PP.assets.image.add(s, pavimento1, 3900, 620, 0, 0);
    PP.physics.add(s, pavimento_7, PP.physics.type.STATIC);
    
    let pavimento_8 = PP.assets.image.add(s, pavimento1, 4550, 620, 0, 0);
    PP.physics.add(s, pavimento_8, PP.physics.type.STATIC);
    
    let pavimento_9 = PP.assets.image.add(s, pavimento1, 5200, 620, 0, 0);
    PP.physics.add(s, pavimento_9, PP.physics.type.STATIC);
    
    let pavimento_10 = PP.assets.image.add(s, pavimento1, 5750, 620, 0, 0);
    PP.physics.add(s, pavimento_10, PP.physics.type.STATIC);
    
    let pavimento_11 = PP.assets.image.add(s, pavimento1, 6400, 620, 0, 0);
    PP.physics.add(s, pavimento_11, PP.physics.type.STATIC);
    
    let pavimento_12 = PP.assets.image.add(s, pavimento1, 7050, 620, 0, 0);
    PP.physics.add(s, pavimento_12, PP.physics.type.STATIC);
    
    let pavimento_13 = PP.assets.image.add(s, pavimento1, 7700, 620, 0, 0);
    PP.physics.add(s, pavimento_13, PP.physics.type.STATIC);
    
    let pavimento_14 = PP.assets.image.add(s, pavimento1, 8350, 620, 0, 0);
    PP.physics.add(s, pavimento_14, PP.physics.type.STATIC);
    
    let pavimento_15 = PP.assets.image.add(s, pavimento1, 9000, 620, 0, 0);
    PP.physics.add(s, pavimento_15, PP.physics.type.STATIC);
    
    let pavimento_16 = PP.assets.image.add(s, pavimento1, 9650, 620, 0, 0);
    PP.physics.add(s, pavimento_16, PP.physics.type.STATIC);
    
    let pavimento_17 = PP.assets.image.add(s, pavimento1, 9950, 620, 0, 0);
    PP.physics.add(s, pavimento_17, PP.physics.type.STATIC);
    
    let pavimento_18 = PP.assets.image.add(s, pavimento3, 11150, 620, 0, 0);
    PP.physics.add(s, pavimento_18, PP.physics.type.STATIC);

    // piattaforma attraversabile
    
    pavimento_19 = PP.assets.image.add(s, pavimento1, 11450, 620, 0, 0);
    PP.physics.add(s, pavimento_19, PP.physics.type.STATIC);
    
    let pavimento_20 = PP.assets.image.add(s, pavimento1, 12100, 620, 0, 0);
    PP.physics.add(s, pavimento_20, PP.physics.type.STATIC);


    // scalini e stanza sotterranea fine livello fine livello

    
    let scalino_vert_1 = PP.assets.image.add(s, pavimento2_90, 11150, 620, 0, 0);
    PP.physics.add(s, scalino_vert_1, PP.physics.type.STATIC);
    
    let scalino_orizz_1 = PP.assets.image.add(s, pavimento2, 11050, 770, 0, 0);
    PP.physics.add(s, scalino_orizz_1, PP.physics.type.STATIC);
    
    let scalino_vert_2 = PP.assets.image.add(s, pavimento2_90, 11000, 770, 0, 0);
    PP.physics.add(s, scalino_vert_2, PP.physics.type.STATIC);

    let scalino_orizz_2 = PP.assets.image.add(s, pavimento3, 10750, 920, 0, 0);
    PP.physics.add(s, scalino_orizz_2, PP.physics.type.STATIC);
    
    let scalino_orizz_3 = PP.assets.image.add(s, pavimento3, 10450, 920, 0, 0);
    PP.physics.add(s, scalino_orizz_3, PP.physics.type.STATIC);
    
    let scalino_orizz_4 = PP.assets.image.add(s, pavimento3, 10150, 920, 0, 0);
    PP.physics.add(s, scalino_orizz_4, PP.physics.type.STATIC);
    
    let scalino_vert_3 = PP.assets.image.add(s, pavimento3_90, 9490, 670, 0, 0);
    PP.physics.add(s, scalino_vert_3, PP.physics.type.STATIC);
    
    let scalino_vert_4 = PP.assets.image.add(s, pavimento3_90, 9490, 970, 0, 0);
    PP.physics.add(s, scalino_vert_4, PP.physics.type.STATIC);
    
    let scalino_orizz_5 = PP.assets.image.add(s, pavimento3, 9490, 1270, 0, 0);
    PP.physics.add(s, scalino_orizz_5, PP.physics.type.STATIC);
    
    let scalino_orizz_6 = PP.assets.image.add(s, pavimento3, 9790, 1270, 0, 0);
    PP.physics.add(s, scalino_orizz_6, PP.physics.type.STATIC);
    
    let scalino_orizz_7 = PP.assets.image.add(s, pavimento3, 9990, 1270, 0, 0);
    PP.physics.add(s, scalino_orizz_7, PP.physics.type.STATIC);
    
    let scalino_vert_5 = PP.assets.image.add(s, pavimento3_90, 10290, 1270, 0, 0);
    PP.physics.add(s, scalino_vert_5, PP.physics.type.STATIC);
    
    let scalino_orizz_8 = PP.assets.image.add(s, pavimento3, 10290, 1570, 0, 0);
    PP.physics.add(s, scalino_orizz_8, PP.physics.type.STATIC);
    
    let scalino_orizz_9 = PP.assets.image.add(s, pavimento3, 10590, 1570, 0, 0);
    PP.physics.add(s, scalino_orizz_9, PP.physics.type.STATIC);
    
    let scalino_orizz_10 = PP.assets.image.add(s, pavimento3, 10890, 1570, 0, 0);
    PP.physics.add(s, scalino_orizz_10, PP.physics.type.STATIC);
    
    let scalino_orizz_11 = PP.assets.image.add(s, pavimento3, 11190, 1570, 0, 0);
    PP.physics.add(s, scalino_orizz_11, PP.physics.type.STATIC);
    
    let scalino_orizz_12 = PP.assets.image.add(s, pavimento3, 11490, 1570, 0, 0);
    PP.physics.add(s, scalino_orizz_12, PP.physics.type.STATIC);
    
    let scalino_orizz_13 = PP.assets.image.add(s, pavimento3, 11790, 1570, 0, 0);
    PP.physics.add(s, scalino_orizz_13, PP.physics.type.STATIC);
    
    let scalino_orizz_14 = PP.assets.image.add(s, pavimento3, 12090, 1570, 0, 0);
    PP.physics.add(s, scalino_orizz_14, PP.physics.type.STATIC);
    
    let scalino_orizz_15 = PP.assets.image.add(s, pavimento2, 12390, 1570, 0, 0);
    PP.physics.add(s, scalino_orizz_15, PP.physics.type.STATIC);
    let scalino_orizz_16 = PP.assets.image.add(s, pavimento2, 12740, 620, 0, 0);
    PP.physics.add(s, scalino_orizz_16, PP.physics.type.STATIC);
    
    let scalino_vert_6 = PP.assets.image.add(s, pavimento3_90, 12490, 1270, 0, 0);
    PP.physics.add(s, scalino_vert_6, PP.physics.type.STATIC);
    
    let scalino_vert_7 = PP.assets.image.add(s, pavimento3_90, 12490, 970, 0, 0);
    PP.physics.add(s, scalino_vert_7, PP.physics.type.STATIC);
    
    let scalino_vert_8 = PP.assets.image.add(s, pavimento3_90, 12490, 670, 0, 0);
    PP.physics.add(s, scalino_vert_8, PP.physics.type.STATIC);


    //barriera inizio livello

    muro_iniziale = PP.shapes.rectangle_add(s, -2600, 0, 1, 1280, "0x000000", 0);
    PP.physics.add(s, muro_iniziale, PP.physics.type.STATIC);

    //prime scale

    let scala_1 = PP.assets.image.add(s, scala1, 1850, 470, 0, 0);
    PP.physics.add(s, scala_1, PP.physics.type.STATIC);
    
    let scala_2 = PP.assets.image.add(s, scala2, 2000, 320, 0, 0);
    PP.physics.add(s, scala_2, PP.physics.type.STATIC);

    //scale fine livello
    
    let scala_3 = PP.assets.image.add(s, scala1, 9900, 470, 0, 0);
    PP.physics.add(s, scala_3, PP.physics.type.STATIC);

    let scala_4 = PP.assets.image.add(s, scala2, 10050, 320, 0, 0);
    PP.physics.add(s, scala_4, PP.physics.type.STATIC);
    
    let scala_5 = PP.assets.image.add(s, scala2, 10200, 320, 0, 0);
    PP.physics.add(s, scala_5, PP.physics.type.STATIC);

    // PEDANE A PRESSIONE

    // porta tutorial
    
    pedana1 = PP.shapes.rectangle_add(s, 3000, 639, 150, 40, "0xfbc456", 1);
    PP.physics.add(s, pedana1, PP.physics.type.STATIC);

    // piattaforma sotterranea fine livello
    
    pedana2 = PP.shapes.rectangle_add(s, 12200, 1588, 150, 40, "0xfbc456", 1);
    PP.physics.add(s, pedana2, PP.physics.type.STATIC);

    // porta finale

    pedana3 = PP.shapes.rectangle_add(s, 12350, 637, 150, 40, "0xfbc456", 1);
    PP.physics.add(s, pedana3, PP.physics.type.STATIC);

    
    

    //funzioni richiamate
    create_lettera(s, 100, 170);
    create_lettera(s, 7800, 170);
    //create_lettera(s, 7000, 170);
    create_lettera(s, 7100, -1400);

    create_player (s, -2130, 600);
    
    create_cassa (s, 750, 450);
    create_cassa (s, 2550, 450);
    create_cassa (s, 4050, 360);
    create_cassa (s, 5400, 60);
    //create_cassa (s, 7350, 60);
    create_cassa (s, 11050, 950);
    create_cassa (s, 11090, 780);

    create_porta (s, 3450, 320);
    create_porta (s, 12600, 320);

    create_piatt (s, 5100, 320);
    create_piatt (s, 5900, -320);
    create_piatt (s, 6700, -950);
    create_piatt_move (s, 5550, 320);
    create_piatt_move (s, 6350, -955);
    create_piatt_move (s, 11600, 1570);
    //create_piatt_move2 (s, 5780, -450);  potenzialmente da silurare permanentemente
    create_ghiglio(s, 8025, 398);
    create_ghiglio(s, 8575, 398);
    create_ghiglio(s, 9125, 398);
    
    create_Lanciatore(s, 1500, 450);
    create_Lanciatore(s, 4650, 450);
    create_Lanciatore(s, 9900, 250);
    create_slot_animata(s, 6600, 620);

    let muro1 = PP.assets.image.add(s, transzionett, 130, 0, 0, 0);
    

    
    //collider di tutte le cose
    //player
    
    PP.physics.add_collider(s, player, muro_iniziale);

    for (let g = 0; g < porte.length; g++) {
        PP.physics.add_collider(s, player, porte[g]);
    }

    PP.physics.add_collider_f(s, player, pavimento_1, salto_si);
    PP.physics.add_collider_f(s, player, pavimento_2, salto_si);
    PP.physics.add_collider_f(s, player, pavimento_3, salto_si);
    PP.physics.add_collider_f(s, player, pavimento_4, salto_si);
    PP.physics.add_collider_f(s, player, pavimento_5, salto_si);
    PP.physics.add_collider_f(s, player, pavimento_6, salto_si);
    PP.physics.add_collider_f(s, player, pavimento_7, salto_si);
    PP.physics.add_collider_f(s, player, pavimento_8, salto_si);
    PP.physics.add_collider_f(s, player, pavimento_9, salto_si);
    PP.physics.add_collider_f(s, player, pavimento_10, salto_si);
    PP.physics.add_collider_f(s, player, pavimento_11, salto_si);
    PP.physics.add_collider_f(s, player, pavimento_12, salto_si);
    PP.physics.add_collider_f(s, player, pavimento_13, salto_si);
    PP.physics.add_collider_f(s, player, pavimento_14, salto_si);
    PP.physics.add_collider_f(s, player, pavimento_15, salto_si);
    PP.physics.add_collider_f(s, player, pavimento_16, salto_si);
    PP.physics.add_collider_f(s, player, pavimento_17, salto_si);
    // il collider della parte attraversabile da sotto non c'è perché viene messa e tolta a seconda
    PP.physics.add_collider_f(s, player, pavimento_18, salto_si);
    PP.physics.add_collider_f(s, player, pavimento_20, salto_si);

    // collider stanza sotterranea fine livello 1
    
    PP.physics.add_collider_f(s, player, scalino_vert_1, salto_si);
    PP.physics.add_collider_f(s, player, scalino_vert_2, salto_si);
    PP.physics.add_collider_f(s, player, scalino_vert_3, salto_si);
    PP.physics.add_collider_f(s, player, scalino_vert_4, salto_si);
    PP.physics.add_collider_f(s, player, scalino_vert_5, salto_si);
    PP.physics.add_collider_f(s, player, scalino_vert_6, salto_si);
    PP.physics.add_collider_f(s, player, scalino_vert_7, salto_si);
    PP.physics.add_collider_f(s, player, scalino_vert_8, salto_si);
    PP.physics.add_collider_f(s, player, scalino_orizz_1, salto_si);
    PP.physics.add_collider_f(s, player, scalino_orizz_2, salto_si);
    PP.physics.add_collider_f(s, player, scalino_orizz_3, salto_si);
    PP.physics.add_collider_f(s, player, scalino_orizz_4, salto_si);
    PP.physics.add_collider_f(s, player, scalino_orizz_5, salto_si);
    PP.physics.add_collider_f(s, player, scalino_orizz_6, salto_si);
    PP.physics.add_collider_f(s, player, scalino_orizz_7, salto_si);
    PP.physics.add_collider_f(s, player, scalino_orizz_8, salto_si);
    PP.physics.add_collider_f(s, player, scalino_orizz_9, salto_si);
    PP.physics.add_collider_f(s, player, scalino_orizz_10, salto_si);
    PP.physics.add_collider_f(s, player, scalino_orizz_11, salto_si);
    PP.physics.add_collider_f(s, player, scalino_orizz_12, salto_si);
    PP.physics.add_collider_f(s, player, scalino_orizz_13, salto_si);
    PP.physics.add_collider_f(s, player, scalino_orizz_14, salto_si);
    PP.physics.add_collider_f(s, player, scalino_orizz_15, salto_si);
    PP.physics.add_collider_f(s, player, scalino_orizz_16, next_level);


    PP.physics.add_collider_f(s, player, scala_1, salto_si);
    PP.physics.add_collider_f(s, player, scala_2, salto_si);
    PP.physics.add_collider_f(s, player, scala_3, salto_si);
    PP.physics.add_collider_f(s, player, scala_4, salto_si);
    PP.physics.add_collider_f(s, player, scala_5, salto_si);
    PP.physics.add_collider_f(s, player, pedana1, apertura_porta);
    PP.physics.add_collider_f(s, player, pedana2, attiva_piatt_move);
    PP.physics.add_collider_f(s, player, pedana3, apertura_porta_finale);
    
    PP.physics.add_collider_f(s, player, pavimento_01, salto_si);
    PP.physics.add_collider_f(s, player, pavimento_02, salto_si);
    PP.physics.add_collider_f(s, player, pavimento_03, salto_si);
    PP.physics.add_collider_f(s, player, pavimento_04, salto_si);

    for (let i = 0; i < ghigliottine.length; i++) {
        PP.physics.add_collider_f(s, player, ghigliottine[i], salto_si);
        for (let g = 0; g < casse.length; g++) {
            PP.physics.add_collider(s, casse[g], ghigliottine[i]);
        }
    }

    for (let g = 0; g < Lettere.length; g++) {
        PP.physics.add_overlap_f(s, Lettere[g], player, collision_lettera);
    }

    for (let i = 0; i < piatt.length; i++) {
        PP.physics.add_collider_f(s, player, piatt[i], salto_si);
        for (let g = 0; g < casse.length; g++) {
            PP.physics.add_collider(s, casse[g], piatt[i]);
        }
    }

    
    for (let i = 0; i < piatt_move.length; i++) {
        PP.physics.add_collider_f(s, player, piatt_move[i], salto_si);
        for (let g = 0; g < casse.length; g++) {
            PP.physics.add_collider(s, casse[g], piatt_move[i]);
        }
    }



    //casse

    for (let i = 0; i < casse.length; i++) {
        PP.physics.add_collider_f(s, player, casse[i], salto_si);

        PP.physics.add_collider(s, casse[i], pavimento_1);
        PP.physics.add_collider(s, casse[i], pavimento_2);
        PP.physics.add_collider(s, casse[i], pavimento_3);
        PP.physics.add_collider(s, casse[i], pavimento_4);
        PP.physics.add_collider(s, casse[i], pavimento_5);
        PP.physics.add_collider(s, casse[i], pavimento_6);
        PP.physics.add_collider(s, casse[i], pavimento_7);
        PP.physics.add_collider(s, casse[i], pavimento_8);
        PP.physics.add_collider(s, casse[i], pavimento_9);
        PP.physics.add_collider(s, casse[i], pavimento_10);
        PP.physics.add_collider(s, casse[i], pavimento_11);
        PP.physics.add_collider(s, casse[i], pavimento_12);
        PP.physics.add_collider(s, casse[i], pavimento_13);
        PP.physics.add_collider(s, casse[i], pavimento_14);
        PP.physics.add_collider(s, casse[i], pavimento_15);
        PP.physics.add_collider(s, casse[i], pavimento_16);
        PP.physics.add_collider(s, casse[i], pavimento_17);
        PP.physics.add_collider(s, casse[i], pavimento_18);
        PP.physics.add_collider(s, casse[i], pavimento_19);
        PP.physics.add_collider(s, casse[i], pavimento_20);

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

        PP.physics.add_collider(s, casse[i], scala_1);
        PP.physics.add_collider_f(s, casse[i], pedana1, apertura_porta);
        PP.physics.add_collider_f(s, casse[i], pedana2, attiva_piatt_move);
        PP.physics.add_collider_f(s, casse[i], pedana3, apertura_porta_finale);

        for (let g = 0; g < casse.length; g++) {
            if (g != i){
            PP.physics.add_collider(s, casse[g], casse[i]);
            }
        }
    }


    // lame ghigliottine
    
    for (let g = 0; g < lame.length; g++) {
        PP.physics.add_overlap_f(s, player, lame[g], decapitazione);
    }

    //nemici

    for (let i = 0; i < slot_animate.length; i++) {
        PP.physics.add_collider_f(s, player, slot_animate[i], kill_slot);

        PP.physics.add_collider(s, slot_animate[i], pavimento_1);
        PP.physics.add_collider(s, slot_animate[i], pavimento_2);
        PP.physics.add_collider(s, slot_animate[i], pavimento_3);
        PP.physics.add_collider(s, slot_animate[i], pavimento_4);
        PP.physics.add_collider(s, slot_animate[i], pavimento_5);
        PP.physics.add_collider(s, slot_animate[i], pavimento_6);
        PP.physics.add_collider(s, slot_animate[i], pavimento_7);
        PP.physics.add_collider(s, slot_animate[i], pavimento_8);
        PP.physics.add_collider(s, slot_animate[i], pavimento_9);
        PP.physics.add_collider(s, slot_animate[i], pavimento_10);
        PP.physics.add_collider(s, slot_animate[i], pavimento_11);
        PP.physics.add_collider(s, slot_animate[i], pavimento_12);
        PP.physics.add_collider(s, slot_animate[i], pavimento_13);
        PP.physics.add_collider(s, slot_animate[i], pavimento_14);
        PP.physics.add_collider(s, slot_animate[i], pavimento_15);
        PP.physics.add_collider(s, slot_animate[i], pavimento_16);
        PP.physics.add_collider(s, slot_animate[i], pavimento_17);
        PP.physics.add_collider(s, slot_animate[i], pavimento_18);
        PP.physics.add_collider(s, slot_animate[i], pavimento_19);
        PP.physics.add_collider(s, slot_animate[i], pavimento_20);
        posizione_slot.push(i);
        
        for (let g = 0; g < casse.length; g++) {
            PP.physics.add_collider(s, casse[g], slot_animate[i]);
        }
    }
    

    for (let i = 0; i < lanciatori.length; i++) {
        PP.physics.add_overlap_f(s, player, lanciatori[i], kill_lanciatore);
        PP.physics.add_collider(s, lanciatori[i], scala_3);

        PP.physics.add_collider(s, lanciatori[i], pavimento_1);
        PP.physics.add_collider(s, lanciatori[i], pavimento_2);
        PP.physics.add_collider(s, lanciatori[i], pavimento_3);
        PP.physics.add_collider(s, lanciatori[i], pavimento_4);
        PP.physics.add_collider(s, lanciatori[i], pavimento_5);
        PP.physics.add_collider(s, lanciatori[i], pavimento_6);
        PP.physics.add_collider(s, lanciatori[i], pavimento_7);
        PP.physics.add_collider(s, lanciatori[i], pavimento_8);
        PP.physics.add_collider(s, lanciatori[i], pavimento_9);
        PP.physics.add_collider(s, lanciatori[i], pavimento_10);
        PP.physics.add_collider(s, lanciatori[i], pavimento_11);
        PP.physics.add_collider(s, lanciatori[i], pavimento_12);
        PP.physics.add_collider(s, lanciatori[i], pavimento_13);
        PP.physics.add_collider(s, lanciatori[i], pavimento_14);
        PP.physics.add_collider(s, lanciatori[i], pavimento_15);
        PP.physics.add_collider(s, lanciatori[i], pavimento_16);
        PP.physics.add_collider(s, lanciatori[i], pavimento_17);
        PP.physics.add_collider(s, lanciatori[i], pavimento_18);
        PP.physics.add_collider(s, lanciatori[i], pavimento_19);
        PP.physics.add_collider(s, lanciatori[i], pavimento_20);
        
        for (let g = 0; g < casse.length; g++) {
            PP.physics.add_collider(s, casse[g], lanciatori[i]);
        }
    }


    let ascensore_1 = PP.assets.image.add(s, ascensore1, 12555, -150, 0, 0);
    let ascensore_muro = PP.assets.image.add(s, ascensoremuro, 12755, -150, 0, 0);
    create_score(s);
    create_vite(s);

    create_Asmodeo(s);
    create_Dialogo1(s);
    configure_player_animations(s);
    configure_Lanciatore_animations(s);

    PP.physics.add_collider_f(s, Asmodeo, player, collision_Dialogo1);
}

function update (s) {

    bg.tile_geometry.x = PP.camera.get_scroll_x(s) * 1/(2+1);
    bg_sopra.tile_geometry.x = PP.camera.get_scroll_x(s) * 1/(2+1);
    slot_nuove.tile_geometry.x = PP.camera.get_scroll_x(s) * 0.8;
    colonne_davanti.tile_geometry.x = PP.camera.get_scroll_x(s) * 1.1;
    colonne_davanti_sopra.tile_geometry.x = PP.camera.get_scroll_x(s) * 1.1;
    moquette.tile_geometry.x = PP.camera.get_scroll_x(s) * 1.1;
    //bg.tile_geometry.y = PP.camera.get_scroll_y(s);


    update_score(s);
    update_score_monete(s);
    player_update(s);
    update_cassa(s);
    update_porta(s);
    update_piatt (s);
    update_piatt_move (s);
    update_ghiglio(s);
    update_lettere(s);

    update_Lanciatore(s);
    update_slot_animata(s);

    manage_dash(s);

    update_Dialogo1(s);
    
    // per chiudere la porta

    if(chiusura_porta_1 == false){
        porte[0].geometry.y = -3000;
        porte[0].geometry.body_y = -3000;
        porte_aperte[0].geometry.y = 320;
    }

    if(chiusura_porta_1 == true){
        porte[0].geometry.y = 320;
        porte[0].geometry.body_y = 320;
        porte_aperte[0].geometry.y = -3000;
    }
    
    chiusura_porta_1 = true;


    // per porta finale
    
    if(chiusura_porta_finale == false){
        porte[1].geometry.y = -50;
        porte[1].geometry.body_y = -50;
    }

    if(chiusura_porta_finale == true){
        porte[1].geometry.y = 320;
        porte[1].geometry.body_y = 320;
    }

    chiusura_porta_finale = true;


    // if che permette al giocatore di attraversare la piattaforma a fine livello da sotto ma non da sopra

    if (player.geometry.y >= (pavimento_19.geometry.body_y + 1)) {
        if (collider_sopra != false) {
            PP.physics.remove_collider_or_overlap(s, PP.physics.add_collider_f(s, player, pavimento_19, salto_si));
            collider_sopra = false;
        }
    }
    else {
        if (collider_sopra != true) {
            PP.physics.remove_collider_or_overlap(s, PP.physics.add_collider_f(s, player, pavimento_19, salto_si))
            PP.physics.add_collider_f(s, player, pavimento_19, salto_si);
            collider_sopra = true;
        }
    }

    /*if (fine_lettura_testo_1 == false)
    {
        if (collider_Asmodeo != false) {
            console.log("NON puoi passare");
            PP.physics.remove_collider_or_overlap(s, PP.physics.add_collider_f(s, Asmodeo, player, collision_Dialogo1))
            PP.physics.add_collider_f(s, Asmodeo, player, collision_Dialogo1);
            collider_Asmodeo = true;
            
        }    
    }

    else {
        if (collider_Asmodeo !=true) {
            console.log("puoi passare");
            PP.physics.remove_collider_or_overlap(s, PP.physics.add_collider_f(s, Asmodeo, player, collision_Dialogo1));
            collider_Asmodeo = false;
        }
    } */

    // if che permette alle casse di attraversare la piattaforma a fine livello da sotto ma non da sopra
    // ora quando la cassa g è sopra il pavimento la corrispondente nell'array collider casse sopra viene settato a true e il collider non viene continuamente ricreato
    // se il corrispondente valore non è false


    for (let g = 0; g < casse.length; g++) {
        if (casse[g].geometry.y >= (pavimento_19.geometry.body_y + 1)) {
            PP.physics.remove_collider_or_overlap(s, PP.physics.add_collider(s, casse[g], pavimento_19));
            collider_casse_sopra[g - 1] = false;
        }
        else if (collider_casse_sopra[g - 1] != true) {
            PP.physics.remove_collider_or_overlap(s, PP.physics.add_collider(s, casse[g], pavimento_19));
            PP.physics.add_collider(s, casse[g], pavimento_19);
            collider_casse_sopra[g - 1] = true;
        }
    }
}

function destroy (s) {
    
}


function apertura_porta(s, obj1, obj2) {
    chiusura_porta_1 = false;
    // implementare funzione per il salto

    if (obj1 == player){
        jump_disable = false;
    }
}

function apertura_porta_finale(s, obj1, obj2) {
    chiusura_porta_finale = false;

    // implementare funzione per il salto

    if (obj1 == player){
        jump_disable = false;
    }
}

function next_level (s) {
    PP.scenes.start("level2");
}

PP.scenes.add("level1", preload, create, update, destroy);