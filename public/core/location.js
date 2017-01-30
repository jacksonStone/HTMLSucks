//This keeps track of information about where things are
//@exports jlocation
(function(W){
  let jlocation;
  jlocation = W.jlocation = {
    update_position : function(e){
      let s = this,
        newY = (s._y||0)+e.wheelDeltaY,
        newX = (s._x||0)+e.wheelDeltaX,
        ymin = s._ymin,
        xmin = s._xmin,
        xmax = s._xmax,
        ymax = s._ymax;
      
      if( ymin !== undefined && newY < ymin) {newY = ymin}
      else if ( ymax !== undefined && newY > ymax) {newY = ymax}
      
      if(xmin !== undefined && newX < xmin) {newX = xmin}
      else if (xmax !== undefined && newX > xmax) {newX = xmax}
      
      s._x = newX;
      s._y = newY;
      
      jRender.render(s);
    },
    //used to determine the max/min x and y coordinates
    setBounds : function(xmin,ymin,xmax,ymax) {
      this._xmin = xmin;
      this._ymin = ymin;
      this._xmax = xmax;
      this._ymax = ymax;
    },
    getCoordinates: function(){
      return {x:this._x||0,y:this._y||0}
    }
  };

  //needs to be window
  window.onwheel = function(e){
    jlocation.updatePosition(e);
  };
}(window));
