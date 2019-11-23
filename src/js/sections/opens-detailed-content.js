(function(){
  'use strict';

  let buttonTypeB = document.getElementById('buttonTypeB');
  let buttonTypeC = document.getElementById('buttonTypeC');

  buttonTypeB.onclick = function() {

    let parent = this.parentNode;
    let previousSibling = parent.previousElementSibling;
    previousSibling.style.height = "auto";

  };

  buttonTypeC.onclick = function() {

    let parent = this.parentNode;
    let previousSibling = parent.previousElementSibling;
    previousSibling.style.height = "auto";

  };

}());
