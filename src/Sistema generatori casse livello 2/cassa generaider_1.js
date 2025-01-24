let img_cassa1;
let casse_generaider1 =[];
let numero_casse = 0;

function preload_cassa_generaider1 (s) {
    casse_generaider1 =[];
    img_cassa1 = PP.assets.image.load(s, "assets/immagini/cassa.png", 150, 156);

}

function create_cassa_generaider1(s, x, y) {
    let cass1 = PP.assets.image.add(s, img_cassa1, x, y, 0, 0);
    PP.physics.add(s, cass1, PP.physics.type.DYNAMIC);
    PP.physics.set_drag_x(cass1, 7000);
    /*
    PP.physics.add_collider_f(s, player, cass1, salto_si);
    PP.physics.add_collider(s, floor, cass1);
    PP.physics.add_collider(s, scalin, cass1);
    PP.physics.add_collider(s, scalin3, cass1);
    PP.physics.add_collider(s, scalin4, cass1);
    PP.physics.add_collider(s, scalin5, cass1);
    PP.physics.add_collider(s, floor2, cass1);
    PP.physics.add_collider(s, floor3, cass1);
    PP.physics.add_collider(s, floor4, cassa);
    PP.physics.add_collider(s, floor5, cass1);

    for (let g = 0; g < casse.length; g++) {
        PP.physics.add_collider(s, casse[g], cass1);
    }
    for (let g = 0; g < casse_generaider1.length; g++) {
        PP.physics.add_collider(s, casse_generaider1[g], cass1);
    }*/
    casse_generaider1.push(cass1);
}

function spostamento_cassa_generaider1 (s, x, y){
    if (numero_casse>=casse_generaider1.length)
    {
        for (let i=0; i < casse_generaider1.length; i++)
        {
            casse_generaider1[i].geometry.y = 3000;
        }  
        numero_casse = 0;
        return;
    }
    casse_generaider1[numero_casse].geometry.x = x;
    casse_generaider1[numero_casse].geometry.y = y;
    PP.physics.set_velocity_y(casse_generaider1[numero_casse], 0);
    console.log(numero_casse); 
    numero_casse ++;
}

function update_cassa_generaider1 (s) {
}