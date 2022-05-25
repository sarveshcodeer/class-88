canvas = new fabric.Canvas("mc") ; 

px = 30 ; 
py = 30 ;

bw = 30 ; 
bh = 30 ;

pobj  = "" ;
bobj = "" ; 

function uploadplayer() {

fabric.Image.fromURL("player.png" , function(Img){
pobj = Img ; 
pobj.scaleToWidth(150) ;
pobj.scaleToHeight(140) ; 
pobj.set({
    top:py , left:px
}) ; 
canvas.add(pobj) ; 
});

}

function uploadblock(get_image) {

    fabric.Image.fromURL( get_image , function(Img){
    bobj = Img ; 
    bobj.scaleToWidth(bw) ;
    bobj.scaleToHeight(bh) ; 
    bobj.set({
        top:py , left:px
    }) ; 
    canvas.add(bobj) ; 
    });
    
    }

    window.addEventListener("keydown" , my_keydown) ; 

    function my_keydown(e){

kp = e.keyCode ; 

if(kp=="84"){

uploadblock("trunk.jpg") ; 

}

if(kp=="76"){

uploadblock("light_green.png") ; 


}

if(kp=="68"){

    uploadblock("dark_green.png") ; 
    
    
    }
if(kp=="71"){

        uploadblock("ground.png") ; 
        
        
        }

if(kp=="87"){

            uploadblock("wall.jpg") ; 
            
            
            }

if(kp=="82"){

                uploadblock("roof.jpg") ; 
                
                
                }

if(kp=="89"){

                    uploadblock("yellow_wall.png") ; 
                    
                    
                    }

if(kp=="67"){

                        uploadblock("cloud.jpg") ; 
                        
                        
                        }


                        if(kp=="85"){

                            uploadblock("unique.png") ; 
                            
                            
                            }

                            if(kp=="37"){

                             left() ; 
                                
                                
                                }
                                
                                if(kp=="38"){

                                   up()
                                    
                                    
                                    }  
                                    
                                    if(kp=="39"){
 
right()                                        
                                        
                                        }

                                        if(kp=="40"){

                                           down()
                                            
                                            
                                            }

                                            if(e.shiftKey==true && kp=="80"){

bw = bw+10 ; 
bh = bh+10 ; 

document.getElementById("cw").innerHTML = bw ; 
document.getElementById("ch").innerHTML = bh ; 



                                            }

if(e.shiftKey==true && kp=="79"){

bw = bw-10;
bh = bh-10 ; 

document.getElementById("cw").innerHTML = bw ; 
document.getElementById("ch").innerHTML = bh ; 



}
    }

    function up(){

if(py>=0){
py = py-bh ; 
canvas.remove(pobj);
uploadplayer() ; 

}
}

function down(){

    if(py<=260){
py = py+bh ; 
canvas.remove(pobj);
uploadplayer()
    }



}

function left() {

    if(px>=0){
    
px = px-bw ;
canvas.remove(pobj) ; 
uploadplayer()
    }


}

function right() {

    if(px<=700){
px = px+bw ;
canvas.remove(pobj);
uploadplayer()
    }


}

    