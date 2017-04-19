$(document).ready(function(){
var scale = 16;//how big pixels are
var img_size = 16;//how many pixels
var widget = $("#widget");
fn_buildmap();
var pixel = $(".pixel");
var bg_col = $("#btnColor-trans").val();
var cur_col = $("#btnColor").val();
var erase = false;

widget.css("height", img_size*scale); 
widget.css("width", img_size*scale);
pixel.css("height", scale); 
pixel.css("width", scale);
widget.css("background-color", bg_col);
  
$("#btnSave").click(function() {
widget.css("height", img_size);  
widget.css("width", img_size);
pixel.css("height", 1); 
pixel.css("width", 1);
widget.css("background-color", "transparent");

  html2canvas($("#widget"), {
  onrendered: function(canvas) {
  theCanvas = canvas;
        
 $("#img-out").html(canvas);          Canvas2Image.saveAsPNG(canvas);  
            } 
        });
  $("#reset").css("display", "inline-block");
   $(this).css("display", "none");

  setTimeout(function(){ 
  fn_reset();
  }, 100);
  
   });//end save click
  
  function fn_reset(){
widget.css("height", img_size*scale); 
widget.css("width", img_size*scale);
pixel.css("height", scale); 
pixel.css("width", scale);
widget.css("background-color", bg_col);
    $("#btnSave").css("display", "inline-block");
    $(this).css("display", "none");
  };
  
  function fn_buildmap(){
     for (i = 0; i < img_size*scale; i++) {
$('#widget').append('<div class="pixel"></div>');    
  }
  };
  
  $(".pixel").click(function(){
    if (erase == false){
   $(this).css("background-color", cur_col);   
    }else{
     $(this).css("background-color", "transparent");       
    }
  });
  
  $("#btnColor").change(function(){
    cur_col = $(this).val();
  });
    $("#btnColor-trans").change(function(){
   bg_col = $(this).val();
   widget.css("background-color", bg_col);
  });
  
  $("#btnErase").click(function(){
   if (erase == false){
     erase = true;
     widget.css("cursor", "not-allowed")
     $(this).addClass("btn-pressed");
   }else{
     erase = false;
   widget.css("cursor", "initial");
   $(this).removeClass("btn-pressed");
   }
  });
});//end all