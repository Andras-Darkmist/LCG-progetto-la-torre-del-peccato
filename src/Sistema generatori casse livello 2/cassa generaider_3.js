let img_cassa3;
let casse_generaider3 =[];
let numero_casse3 = 0;

function preload_cassa_generaider3 (s) {
    img_cassa3 = PP.assets.image.load(s, "assets/immagini/cassa.png", 150, 156);
}

function create_cassa_generaider3 (s, x, y) {
    let cass3 = PP.assets.image.add(s, img_cassa3, x, y, 0, 0);
    PP.physics.add(s, cass3, PP.physics.type.DYNAMIC);
    PP.physics.set_drag_x(cass3, 7000);
    casse_generaider3.push(cass3);
}

function spostamento_cassa_generaider3 (s, x, y){
    if (numero_casse3>=casse_generaider3.length)
    {
        for (let i=0; i < casse_generaider3.length; i++)
        {            
            casse_generaider3[i].geometry.y = 3000;
        }  
        numero_casse3 = 0;
        return;
    }
    casse_generaider3[numero_casse3].geometry.x = x;
    casse_generaider3[numero_casse3].geometry.y = y;
    PP.physics.set_velocity_y(casse_generaider3[numero_casse3], 0);
    console.log(numero_casse3); 
    numero_casse3 ++;
}

function update_cassa_generaider3 (s) {
}