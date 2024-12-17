let img_background;
let floor;
let barr_1;
let platform1;
let pavimento1;
let pavimento2;
let pavimento2_90;
let pavimento3;
let scala1;
let scala2;
let pedana2;
let pedana3;
let pedana4;

let spine_img;


function preload (s) {

    preload_score (s);
    preload_lettera (s);
    preload_vite(s);
    
    preload_generatore (s);
    preload_generatore2 (s);
    preload_generatore3 (s);
    preload_player (s);
    preload_cassa (s);
    preload_piatt (s);
    preload_Lanciatore(s);
    
    preload_cassa_generaider1 (s);
    preload_cassa_generaider2 (s);
    preload_cassa_generaider3 (s);

    preload_piatt_move_level2 (s);
    preload_piatt_move_orizz (s);

    pavimento1 = PP.assets.image.load(s, "Assets/Immagini/Piattaforme/Piattaforma_Tavola disegno 1.png");
    pavimento2 = PP.assets.image.load(s, "Assets/Immagini/Piattaforme/Piattaforma-03.png");
    pavimento2_90 = PP.assets.image.load(s, "Assets/Immagini/Piattaforme/Piattaforma-03 - Copia.png");
    pavimento3 = PP.assets.image.load(s, "Assets/Immagini/Piattaforme/Piattaforma-02.png");
    scala1 = PP.assets.image.load(s, "Assets/Immagini/Piattaforme/Piattaforma-05.png");
    scala2 = PP.assets.image.load(s, "Assets/Immagini/Piattaforme/Piattaforma-04.png");
    img_background = PP.assets.image.load(s, "Assets/Immagini/natura morta.jpg");
    spine_img = PP.assets.image.load(s, "Assets/Immagini/Spine.PNG");
}

function create (s) {

    
    //zona iniziale
    PP.assets.image.add(s, img_background, 0, 0, 0, 0);

    floor = PP.assets.image.add(s, pavimento1, 0, 620, 0, 0);
    PP.physics.add(s, floor, PP.physics.type.STATIC);

    let scalin = PP.assets.image.add(s, pavimento2_90, 650, 620, 0, 0);
    PP.physics.add(s, scalin, PP.physics.type.STATIC);

    let scalin2 = PP.assets.image.add(s, pavimento2, 650, 620+150, 0, 0);
    PP.physics.add(s, scalin2, PP.physics.type.STATIC);

    let scalin3 = PP.assets.image.add(s, pavimento2_90, 800, 620+150, 0, 0);
    PP.physics.add(s, scalin3, PP.physics.type.STATIC);

    let floor2 = PP.assets.image.add(s, pavimento1, 800, 770+150, 0, 0);
    PP.physics.add(s, floor2, PP.physics.type.STATIC);

    let floor3 = PP.assets.image.add(s, pavimento1, 1450, 770+150, 0, 0);
    PP.physics.add(s, floor3, PP.physics.type.STATIC);

    let scalin4 = PP.assets.image.add(s, pavimento2_90, 2100, 770, 0, 0);
    PP.physics.add(s, scalin4, PP.physics.type.STATIC);

    let scalin5 = PP.assets.image.add(s, pavimento2_90, 2100, 620, 0, 0);
    PP.physics.add(s, scalin5, PP.physics.type.STATIC);

    let floor4 = PP.assets.image.add(s, pavimento1, 2150, 620, 0, 0);
    PP.physics.add(s, floor4, PP.physics.type.STATIC);

    let floor5 = PP.assets.image.add(s, pavimento1, 2800, 620, 0, 0);
    PP.physics.add(s, floor5, PP.physics.type.STATIC);
    
    let floor6 = PP.assets.image.add(s, pavimento1, 3450, 620, 0, 0);
    PP.physics.add(s, floor6, PP.physics.type.STATIC);

    let floor7 = PP.assets.image.add(s, pavimento1, 4100, 620, 0, 0);
    PP.physics.add(s, floor7, PP.physics.type.STATIC);

    let scalin6 = PP.assets.image.add(s, scala1, 3000, 470, 0, 0);
    PP.physics.add(s, scalin6, PP.physics.type.STATIC);
    
    // zona sotterranea
    let floor8 = PP.assets.image.add(s, pavimento1, 5100, 1650, 0, 0);
    PP.physics.add(s, floor8, PP.physics.type.STATIC);

    let spine1 = PP.assets.image.add(s, spine_img, 5800, 1700, 0, 0);
    PP.physics.add(s, spine1, PP.physics.type.STATIC);

    let spine2 = PP.assets.image.add(s, spine_img, 6054, 1700, 0, 0);
    PP.physics.add(s, spine2, PP.physics.type.STATIC);
    
    let spine3 = PP.assets.image.add(s, spine_img, 6302, 1700, 0, 0);
    PP.physics.add(s, spine3, PP.physics.type.STATIC);

    let floor9 = PP.assets.image.add(s, pavimento1, 5800, 1794, 0, 0);
    PP.physics.add(s, floor9, PP.physics.type.STATIC);
    let floor10 = PP.assets.image.add(s, pavimento1, 6450, 1794, 0, 0);
    PP.physics.add(s, floor10, PP.physics.type.STATIC);
    let floor11 = PP.assets.image.add(s, pavimento1, 7100, 1650, 0, 0);
    PP.physics.add(s, floor11, PP.physics.type.STATIC);

    create_lettera(s, 7300, 1500);
    /*
    for (let i = 0; i < Lettere.length; i++) {
        PP.physics.add_overlap_f(s, Lettere[i], player, collision_lettera);
    }
    */
    create_piatt_move_level2 (s, 4880, 200);
    
    //zona pozzo senza fonto
    let scalin7 = PP.assets.image.add(s, pavimento2_90, 5100, 400, 0, 0);
    PP.physics.add(s, scalin7, PP.physics.type.STATIC);
    let scalin8 = PP.assets.image.add(s, pavimento2_90, 5100, 250, 0, 0);
    PP.physics.add(s, scalin8, PP.physics.type.STATIC);

    let floor12 = PP.assets.image.add(s, pavimento1, 5100, 250, 0, 0);
    PP.physics.add(s, floor12, PP.physics.type.STATIC);
    
    let scalin9= PP.assets.image.add(s, pavimento2_90, 5750, 253, 0, 0);
    PP.physics.add(s, scalin9, PP.physics.type.STATIC);
    let scalin10 = PP.assets.image.add(s, pavimento2_90, 5750, 400, 0, 0);
    PP.physics.add(s, scalin10, PP.physics.type.STATIC);

    create_piatt_move_orizz (s,5950, 200);
    create_cassa (s, 6050, 50);
    create_piatt_move_orizz (s,7850, 200);

    let floor14 = PP.assets.image.add(s, pavimento1, 8600, -100, 0, 0);
    PP.physics.add(s, floor14, PP.physics.type.STATIC);
    create_lettera(s, 8800, -200);

    let floor15 = PP.assets.image.add(s, pavimento1, 8650, 250, 0, 0);
    PP.physics.add(s, floor15, PP.physics.type.STATIC);
    
    
    let floor13 = PP.assets.image.add(s, pavimento1, 9300, 250, 0, 0);
    PP.physics.add(s, floor13, PP.physics.type.STATIC);

    let buco_morte = PP.assets.image.add(s, pavimento1, 5800, 1000, 0, 0);
    PP.physics.add(s, buco_morte, PP.physics.type.STATIC);
    let buco_morte2 = PP.assets.image.add(s, pavimento1, 6450, 1000, 0, 0);
    PP.physics.add(s, buco_morte2, PP.physics.type.STATIC);
    let buco_morte3 = PP.assets.image.add(s, pavimento1, 7100, 1000, 0, 0);
    PP.physics.add(s, buco_morte3, PP.physics.type.STATIC);
    let buco_morte4 = PP.assets.image.add(s, pavimento1, 7750, 1000, 0, 0);
    PP.physics.add(s, buco_morte4, PP.physics.type.STATIC);
    
    //zona finale
    let scalin11 = PP.assets.image.add(s, pavimento2_90, 9950, 250, 0, 0);
    PP.physics.add(s, scalin11, PP.physics.type.STATIC);
    let scalin12 = PP.assets.image.add(s, pavimento2_90, 9950, 400, 0, 0);
    PP.physics.add(s, scalin12, PP.physics.type.STATIC);

    let floor16 = PP.assets.image.add(s, pavimento1, 9950, 550, 0, 0);
    PP.physics.add(s, floor16, PP.physics.type.STATIC);
    let floor17 = PP.assets.image.add(s, pavimento1, 10600, 550, 0, 0);
    PP.physics.add(s, floor17, PP.physics.type.STATIC);
    let floor18 = PP.assets.image.add(s, pavimento1, 11250, 550, 0, 0);
    PP.physics.add(s, floor18, PP.physics.type.STATIC);

    let scalin13 = PP.assets.image.add(s, pavimento2_90, 11900, 250, 0, 0);
    PP.physics.add(s, scalin13, PP.physics.type.STATIC);
    let scalin14 = PP.assets.image.add(s, pavimento2_90, 11900, 400, 0, 0);
    PP.physics.add(s, scalin14, PP.physics.type.STATIC);
    let scalin15 = PP.assets.image.add(s, pavimento2_90, 11900, 100, 0, 0);
    PP.physics.add(s, scalin15, PP.physics.type.STATIC);
    let scalin16 = PP.assets.image.add(s, pavimento2_90, 11900, -50, 0, 0);
    PP.physics.add(s, scalin16, PP.physics.type.STATIC);

    barr_1 = PP.shapes.rectangle_add(s, 0, 0, 1, 1280, "0x000000", 0);
    PP.physics.add(s, barr_1, PP.physics.type.STATIC);

    platform1 = PP.shapes.rectangle_add(s, 640, 200, 400, 19, "0xFA0000", 1);
    PP.physics.add(s, platform1, PP.physics.type.STATIC);

    

    


    //funzioni richiamate
    create_generatore (s);
    create_generatore2 (s);
    create_generatore3 (s);
    
    create_player (s);
    //create_piatt (s);
    create_cassa (s, 300, 200);
    create_cassa_generaider1 (s, 300, 1000);
    create_cassa_generaider1 (s, 300, 1000);
    create_cassa_generaider1 (s, 300, 1000);

    create_cassa_generaider2 (s, 300, 1000);
    create_cassa_generaider2 (s, 300, 1000);
    
    create_cassa_generaider3 (s, 300, 1000);
    create_cassa_generaider3 (s, 300, 1000);
    create_cassa_generaider3 (s, 300, 1000);
    create_cassa_generaider3 (s, 300, 1000);
    create_cassa_generaider3 (s, 300, 1000);
    create_cassa_generaider3 (s, 300, 1000);
    
    //collider di tutte le cose
    //player
    
    PP.physics.add_collider(s, player, barr_1);
    PP.physics.add_collider(s, player, platform1);
    
    for (let i = 0; i < casse.length; i++) {
        PP.physics.add_collider_f(s, player, casse[i], salto_si);
        PP.physics.add_collider(s, floor, casse[i]);
        PP.physics.add_collider(s, scalin, casse[i]);
        PP.physics.add_collider(s, scalin3, casse[i]);
        PP.physics.add_collider(s, scalin4, casse[i]);
        PP.physics.add_collider(s, scalin5, casse[i]);
        PP.physics.add_collider(s, scalin6, casse[i]);
        PP.physics.add_collider(s, scalin7, casse[i]);
        PP.physics.add_collider(s, scalin8, casse[i]);
        PP.physics.add_collider(s, scalin9, casse[i]);
        PP.physics.add_collider(s, scalin10, casse[i]);
        PP.physics.add_collider(s, scalin11, casse[i]);
        PP.physics.add_collider(s, scalin12, casse[i]);
        PP.physics.add_collider(s, scalin13, casse[i]);
        PP.physics.add_collider(s, scalin14, casse[i]);
        PP.physics.add_collider(s, scalin15, casse[i]);
        PP.physics.add_collider(s, scalin16, casse[i]);
        PP.physics.add_collider(s, floor2, casse[i]);
        PP.physics.add_collider(s, floor3, casse[i]);
        PP.physics.add_collider(s, floor4, casse[i]);
        PP.physics.add_collider(s, floor5, casse[i]);
        PP.physics.add_collider(s, floor6, casse[i]);
        PP.physics.add_collider(s, floor7, casse[i]);
        PP.physics.add_collider(s, floor8, casse[i]);
        PP.physics.add_collider(s, floor9, casse[i]);
        PP.physics.add_collider(s, floor10, casse[i]);
        PP.physics.add_collider(s, floor11, casse[i]);
        PP.physics.add_collider(s, floor12, casse[i]);
        PP.physics.add_collider(s, floor13, casse[i]);
        PP.physics.add_collider(s, floor14, casse[i]);
        PP.physics.add_collider(s, floor15, casse[i]);
        PP.physics.add_collider(s, floor16, casse[i]);
        PP.physics.add_collider(s, floor17, casse[i]);
        PP.physics.add_collider(s, floor18, casse[i]);


        for (let g = 0; g < casse.length; g++) {
            PP.physics.add_collider(s, casse[g], casse[i]);
        }

        for (let g = 0; g < casse_generaider1.length; g++) {
            PP.physics.add_collider(s, casse_generaider1[g], casse[i]);
        }

        for (let g = 0; g < casse_generaider2.length; g++) {
            PP.physics.add_collider(s, casse_generaider2[g], casse[i]);
        }

        for (let g = 0; g < casse_generaider3.length; g++) {
            PP.physics.add_collider(s, casse_generaider3[g], casse[i]);
        }
    }

    for (let i = 0; i < casse_generaider1.length; i++) {
        PP.physics.add_collider_f(s, player, casse_generaider1[i], salto_si);
        PP.physics.add_collider(s, floor, casse_generaider1[i]);
        PP.physics.add_collider(s, scalin, casse_generaider1[i]);
        PP.physics.add_collider(s, scalin3, casse_generaider1[i]);
        PP.physics.add_collider(s, scalin4, casse_generaider1[i]);
        PP.physics.add_collider(s, scalin5, casse_generaider1[i]);
        PP.physics.add_collider(s, scalin6, casse_generaider1[i]);
        PP.physics.add_collider(s, scalin7, casse_generaider1[i]);
        PP.physics.add_collider(s, scalin8, casse_generaider1[i]);
        PP.physics.add_collider(s, scalin9, casse_generaider1[i]);
        PP.physics.add_collider(s, scalin10, casse_generaider1[i]);
        PP.physics.add_collider(s, scalin11, casse_generaider1[i]);
        PP.physics.add_collider(s, scalin12, casse_generaider1[i]);
        PP.physics.add_collider(s, scalin13, casse_generaider1[i]);
        PP.physics.add_collider(s, scalin14, casse_generaider1[i]);
        PP.physics.add_collider(s, scalin15, casse_generaider1[i]);
        PP.physics.add_collider(s, floor2, casse_generaider1[i]);
        PP.physics.add_collider(s, floor3, casse_generaider1[i]);
        PP.physics.add_collider(s, floor4, casse_generaider1[i]);
        PP.physics.add_collider(s, floor5, casse_generaider1[i]);
        PP.physics.add_collider(s, floor6, casse_generaider1[i]);
        PP.physics.add_collider(s, floor7, casse_generaider1[i]);
        PP.physics.add_collider(s, floor8, casse_generaider1[i]);
        PP.physics.add_collider(s, floor9, casse_generaider1[i]);
        PP.physics.add_collider(s, floor10, casse_generaider1[i]);
        PP.physics.add_collider(s, floor11, casse_generaider1[i]);
        PP.physics.add_collider(s, floor12, casse_generaider1[i]);
        PP.physics.add_collider(s, floor13, casse_generaider1[i]);
        PP.physics.add_collider(s, floor14, casse_generaider1[i]);
        PP.physics.add_collider(s, floor15, casse_generaider1[i]);
        PP.physics.add_collider(s, floor16, casse_generaider1[i]);
        PP.physics.add_collider(s, floor17, casse_generaider1[i]);
        PP.physics.add_collider(s, floor18, casse_generaider1[i]);

        for (let g = 0; g < casse_generaider1.length; g++) {
            PP.physics.add_collider(s, casse_generaider1[g], casse_generaider1[i]);
        }

        for (let g = 0; g < casse_generaider3.length; g++) {
            PP.physics.add_collider(s, casse_generaider3[g], casse_generaider1[i]);
        }
    }

    for (let i = 0; i < casse_generaider3.length; i++) {
        PP.physics.add_collider_f(s, player, casse_generaider3[i], salto_si);
        PP.physics.add_collider(s, scalin10, casse_generaider3[i]);
        PP.physics.add_collider(s, scalin11, casse_generaider3[i]);
        PP.physics.add_collider(s, scalin12, casse_generaider3[i]);
        PP.physics.add_collider(s, scalin13, casse_generaider3[i]);
        PP.physics.add_collider(s, scalin14, casse_generaider3[i]);
        PP.physics.add_collider(s, scalin15, casse_generaider3[i]);
        PP.physics.add_collider(s, floor14, casse_generaider3[i]);
        PP.physics.add_collider(s, floor15, casse_generaider3[i]);
        PP.physics.add_collider(s, floor16, casse_generaider3[i]);
        PP.physics.add_collider(s, floor17, casse_generaider3[i]);
        PP.physics.add_collider(s, floor18, casse_generaider3[i]);

        for (let g = 0; g < casse_generaider3.length; g++) {
            PP.physics.add_collider(s, casse_generaider3[g], casse_generaider3[i]);
        }
    }
    
    for (let i = 0; i < casse_generaider2.length; i++) {
        PP.physics.add_collider_f(s, player, casse_generaider2[i], salto_si);
        PP.physics.add_collider(s, floor, casse_generaider2[i]);
        PP.physics.add_collider(s, scalin, casse_generaider2[i]);
        PP.physics.add_collider(s, scalin3, casse_generaider2[i]);
        PP.physics.add_collider(s, scalin4, casse_generaider2[i]);
        PP.physics.add_collider(s, scalin5, casse_generaider2[i]);
        PP.physics.add_collider(s, floor2, casse_generaider2[i]);
        PP.physics.add_collider(s, floor3, casse_generaider2[i]);
        PP.physics.add_collider(s, floor4, casse_generaider2[i]);
        PP.physics.add_collider(s, floor5, casse_generaider2[i]);
        PP.physics.add_collider(s, floor6, casse_generaider2[i]);
        PP.physics.add_collider(s, floor7, casse_generaider2[i]);
        PP.physics.add_collider(s, floor8, casse_generaider2[i]);
        PP.physics.add_collider(s, floor9, casse_generaider2[i]);
        PP.physics.add_collider(s, floor10, casse_generaider2[i]);
        PP.physics.add_collider(s, floor11, casse_generaider2[i]);

        for (let g = 0; g < casse_generaider2.length; g++) {
            PP.physics.add_collider(s, casse_generaider2[g], casse_generaider2[i]);
        }
    }

    for (let i = 0; i<piatt_move_orizz.length; i++) {
        PP.physics.add_collider_f(s, player, piatt_move_orizz[i], salto_si);
        for (let g = 0; g < casse.length; g++) {
            PP.physics.add_collider(s, casse[g], piatt_move_orizz[i]);
        }

        for (let g = 0; g < casse_generaider1.length; g++) {
            PP.physics.add_collider(s, casse_generaider1[g], piatt_move_orizz[i]);
        }
    }

    for (let g = 0; g < Lettere.length; g++) {
        PP.physics.add_overlap_f(s, Lettere[g], player, collision_lettera);
    }

    PP.physics.add_collider_f(s, player, floor, salto_si);
    PP.physics.add_collider(s, player, scalin);
    PP.physics.add_collider_f(s, player, scalin2, salto_si);
    PP.physics.add_collider(s, player, scalin3);
    PP.physics.add_collider(s, player, scalin4);
    PP.physics.add_collider(s, player, scalin5);
    PP.physics.add_collider(s, player, scalin6);
    PP.physics.add_collider(s, player, scalin7);
    PP.physics.add_collider(s, player, scalin8);
    PP.physics.add_collider(s, player, scalin9);
    PP.physics.add_collider(s, player, scalin10);
    PP.physics.add_collider(s, player, scalin11);
    PP.physics.add_collider(s, player, scalin12);
    PP.physics.add_collider(s, player, scalin13);
    PP.physics.add_collider(s, player, scalin14);
    PP.physics.add_collider(s, player, scalin15);
    PP.physics.add_collider(s, player, scalin16);
    PP.physics.add_collider_f(s, player, scalin6, salto_si);
    PP.physics.add_collider_f(s, player, floor2, salto_si);
    PP.physics.add_collider_f(s, player, floor3, salto_si);
    PP.physics.add_collider_f(s, player, floor11, salto_si);
    PP.physics.add_collider_f(s, player, floor4, salto_si);
    PP.physics.add_collider_f(s, player, floor5, salto_si);
    PP.physics.add_collider_f(s, player, floor6, salto_si);
    PP.physics.add_collider_f(s, player, floor7, salto_si);
    PP.physics.add_collider_f(s, player, floor8, salto_si);
    PP.physics.add_collider_f(s, player, floor12, salto_si);
    PP.physics.add_collider_f(s, player, floor13, salto_si);
    PP.physics.add_collider_f(s, player, floor14, salto_si);
    PP.physics.add_collider_f(s, player, floor15, salto_si);
    PP.physics.add_collider_f(s, player, floor16, salto_si);
    PP.physics.add_collider_f(s, player, floor17, salto_si);
    PP.physics.add_collider_f(s, player, floor18, salto_si);
    PP.physics.add_collider_f(s, player, piatt_move_sing_level2, salto_si);
    
    PP.physics.add_collider_f(s, player, spine1, danno_caduta);
    PP.physics.add_collider_f(s, player, spine2, danno_caduta);
    function danno_caduta (s) {
        vita_persa(s);
        player.geometry.x = 5300;
        player.geometry.y = 1400;
        PP.physics.set_velocity_y(player, 0);
        PP.physics.set_velocity_x(player, 0);
    }

    PP.physics.add_collider_f(s, player, buco_morte, danno_caduta2);
    PP.physics.add_collider_f(s, player, buco_morte2, danno_caduta2);
    PP.physics.add_collider_f(s, player, buco_morte3, danno_caduta2);
    PP.physics.add_collider_f(s, player, buco_morte4, danno_caduta2);

    pedana2 = PP.shapes.rectangle_add(s, 1200, 939, 150, 40, "0xfbc456", 1);
    PP.physics.add(s, pedana2, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, pedana2, generatore_crea_cassa);

    pedana3 = PP.shapes.rectangle_add(s, 5400, 1665, 150, 40, "0xfbc456", 1);
    PP.physics.add(s, pedana3, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, pedana3, generatore_crea_cassa2);
    
    pedana4 = PP.shapes.rectangle_add(s, 11150, 565, 150, 40, "0xfbc456", 1);
    PP.physics.add(s, pedana4, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, pedana4, generatore_crea_cassa3);
    //PP.physics.add_collider(s, player, piatt1);
    //PP.physics.add_overlap_f(s, player, lanciatore, kill)

    function danno_caduta2 (s) {
        vita_persa(s);
        player.geometry.x = 5800;
        player.geometry.y = 100;
        PP.physics.set_velocity_y(player, 0);
    }
    //casse



    //nemici

    create_score(s);
    create_vite(s);


    configure_player_animations(s);
}

function update (s) {
    
    update_score(s);
    player_update(s);
    update_cassa (s);
    update_generatore(s);
    update_generatore2 (s);
    update_generatore3 (s);
    //update_piatt (s);
    manage_dash(s);
    update_piatt_move_level2(s);
    update_piatt_move_orizz(s);
    //console.log(move_disable);
}

function destroy (s) {
    
}

PP.scenes.add("level2", preload, create, update, destroy);