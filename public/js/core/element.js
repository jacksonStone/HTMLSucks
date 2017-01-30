(function(W){
  const s = W.jelement = {},
  element_utils = W.jutils.element;
  s._element_map = {};
  s.create_element = function(
    type='text', 
    position={x:0, y:0}, 
    properties={color:'white', content:'Hello, Sailor!'}
  ) {
    const new_element = {};
    new_element.render = s.get_render_function(type) || jEMPTY_FUNCTION;
    new_element.properties = properties;
    new_element.position = position;
    
    s.insert_element(new_element);
  };
  
  s.insert_element = function(new_element) {
    const id = element_utils.get_new_element_id();
    s._element_map[id] = new_element;
  };
  
  s.get_render_function = function(type){
    return W.jelement_type[type].render;
  };
  
  s.get_all = function(){
    return s._element_map;
  };
  
  s.remove_element = function(id){
    return delete s._element_map[id];
  };
  
  s.render_all = function(location) {
    const elements = s.get_all();
    for(var i in elements) {
      elements[i].render(location);
    }
  };
  
  
}(window));