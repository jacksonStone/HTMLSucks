(function(W){
  
  
  function getWidthOfTextInPixels(txt, fontname, fontsize){
    var e = document.createElement('span');
    e.style.fontSize = fontsize;
    e.style.fontFamily = fontname;
    e.innerHTML = txt;
    return e.innerWidth;
  }
  
  W.jutils.text = {
    text_to_pixel_length:getWidthOfTextInPixels
  } 
  
}(window));