(function(W){
  const s = W.jelement_type.text = {};
  s.render = function(location){
    const element = this,
      htmlNode = document.createElement('span'),
      style = htmlNode.style;
      
    htmlNode.innerHTML = element.properties.content;
      
    style.position = 'fixed';
    style.top = element.position.x;
    style.left = element.position.y;
    style.color = element.properties.color;
    
    jscreen.append(htmlNode);
    
  }
}(window));