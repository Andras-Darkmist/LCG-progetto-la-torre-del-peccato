let img_cassa2;
let casse_generaider2 =[];
let numero_casse2 = 0;

function preload_cassa_generaider2 (s) {
    img_cassa2 = PP.assets.image.load(s, "assets/immagini/cassa.png", 150, 156);

}

function create_cassa_generaider2(s, x, y) {
    let cass2 = PP.assets.image.add(s, img_cassa2, x, y, 0, 0);
    PP.physics.add(s, cass2, PP.physics.type.DYNAMIC);
    PP.physics.set_drag_x(cass2, 7000);
    casse_generaider2.push(cass2);
}

function spostamento_cassa_generaider2 (s, x, y){
    if (numero_casse2>=casse_generaider2.length)
    {
        for (let i=0; i < casse_generaider2.length; i++)
        {            
            casse_generaider2[i].geometry.y = 3000;
        }  
        numero_casse2 = 0;
        return;
    }
    casse_generaider2[numero_casse2].geometry.x = x;
    casse_generaider2[numero_casse2].geometry.y = y;
    PP.physics.set_velocity_y(casse_generaider2[numero_casse2], 0);
    console.log(numero_casse2); 
    numero_casse2 ++;
}

function update_cassa_generaider2 (s) {
}