let img_ghiglio;
let ghiglio;
let ghiglio_check = true;

function preload_ghiglio (s) {
    img_ghiglio = PP.assets.image.load(s, "assets/immagini/ghiglio.png", 150, 156);
}

function create_ghiglio (s, x, y){
    
    /*ghiglio.geometry.body_y = -190
    ghigliottine.push(ghiglio);*/
        ghiglio = PP.assets.image.add(s, img_ghiglio, x, y, 0, 0);
        PP.physics.add(s, ghiglio, PP.physics.type.DYNAMIC);
        PP.physics.set_allow_gravity(ghiglio, false);
           
}

function update_ghiglio(s) {
    if (ghiglio.geometry.y <= -170){
        PP.physics.set_velocity_y(ghiglio, 1500);
    }
    if (ghiglio.geometry.y >= 180 ){
        PP.physics.set_velocity_y(ghiglio, -100);    
    }
          
}

function scatto_ghiglio(s)
{ 
    PP.physics.set_velocity_y(ghiglio, 1500);
}
