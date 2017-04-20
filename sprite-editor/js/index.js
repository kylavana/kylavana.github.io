$(document).ready(function(){
var canvas = document.getElementById('canvas');
ctx = canvas.getContext('2d');
var canvas2 = document.getElementById('canvas2');
ctx2 = canvas2.getContext('2d');
  
var scale = $("#scale").val();//how big pixels are
var scale_prev = scale;
var img_size = $("#size").val();//how many pixels
var size_prev = img_size;
var bg_col = $("#btnColor-trans").val();
var cur_col = $("#btnColor").val();
var erase = false;

  function fn_draw(){
   canvas.height = img_size*scale; 
canvas.width = img_size*scale;
canvas2.height = img_size; 
canvas2.width = img_size;
$("#canvas").css("background-color", bg_col);
$("#canvas2").css("background-color", bg_col);
  
$("#canvas").click(function(evt){
var offset_x = $(this).offset().left;
var offset_y = $(this).offset().top;   
var offset2_x = $("#canvas2").offset().left;
var offset2_y = $("#canvas2").offset().top; 
      
var ms_x = scale*(Math.round((evt.pageX - offset_x - scale/2)/scale));
var ms_x2 = ms_x/scale;

var ms_y = scale*(Math.round((evt.pageY - offset_y - scale/2)/scale));
var ms_y2 = ms_y/scale;  
 
 if (erase == false){ 
ctx.fillStyle = cur_col;
ctx.fillRect(ms_x, ms_y, scale, scale); 
ctx2.fillStyle = cur_col;
ctx2.fillRect(ms_x2, ms_y2, 1, 1); 
   }else{
ctx.clearRect(ms_x, ms_y, scale, scale); 
ctx2.clearRect(ms_x2, ms_y2, 1, 1); 
    }
  }); 
  }
fn_draw();
  
  $("#btnColor").change(function(){
    cur_col = $(this).val();
  });
    $("#btnColor-trans").change(function(){
   bg_col = $(this).val();
   $("#canvas").css("background-color", bg_col);
   $("#canvas2").css("background-color", bg_col);
  });
  
  $("#btnErase").click(function(){
   if (erase == false){
     erase = true;
     $("#canvas").css("cursor", "not-allowed")
     $(this).addClass("btn-pressed");
   }else{
     erase = false;
  $("#canvas").css("cursor", "initial");
   $(this).removeClass("btn-pressed");
   }
  });
  
  
  $("#scale").change(function(){
    if (confirm("This action will erase your current sprite, continue?") == true){
    scale = $(this).val();
    fn_draw();
     scale_prev = scale;
    }else{
      $(this).val(scale_prev);
    }
  });
  
  $("#size").change(function(){
      if (confirm("This action will erase your current sprite, continue?") == true){
    img_size = $(this).val();
    fn_draw();
     size_prev = img_size;
   }else{   
      $(this).val(size_prev);
      }
  });
  
function downloadCanvas(link, canvasId, filename) {
    link.href = document.getElementById(canvasId).toDataURL();
    link.download = filename;
}
$("#download").click(function(){ 
    downloadCanvas(this, 'canvas2', 'sprite.png');
});
  
});//end all
