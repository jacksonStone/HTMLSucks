(function(W){
  var _element_counter = 0;
  function get_new_element_id(){
    _element_counter++;
    return _element_counter+'';
  }
  
  W.jutils.element = {
    get_new_element_id:get_new_element_id,
  } 
  
}(window));