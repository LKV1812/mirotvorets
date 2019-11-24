(function(){
  'use strict';

  let buttonTypeB = document.getElementById('buttonTypeB');
  let buttonTypeC = document.getElementById('buttonTypeC');

  buttonTypeB.onclick = function() {

    let parent = this.parentNode;
    let previousSibling = parent.previousElementSibling;

    if(previousSibling.clientHeight == 115) previousSibling.style.height = "auto";
    else previousSibling.style.height = 115 + "px";

  };

  buttonTypeC.onclick = function() {

    let parent = this.parentNode;
    let previousSibling = parent.previousElementSibling;

    if(previousSibling.clientHeight == 115) previousSibling.style.height = "auto";
    else previousSibling.style.height = 115 + "px";

  };

}());
