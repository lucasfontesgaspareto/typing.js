var TypingJS = {};

TypingJS.getRandom = function() {
  return Math.floor(Math.random() * 150);
};

TypingJS.typeChar = function() {
  setTimeout(function() {
    TypingJS.element.innerHTML += TypingJS.text[TypingJS.index];
    TypingJS.index++;
    TypingJS.write();
  }, this.getRandom());
};

TypingJS.write = function(elem, text) {

  if(!this.index) {
    this.index = 0; 
  }

  if(!this.element) {
    this.element = elem;
  }

  if(!this.text) {
    this.text = text.split('');
  }

  if(this.index == this.text.length) {
    delete this.element;
    delete this.index;
    delete this.text;

    return false;
  }

  this.typeChar();
};

TypingJS.init = function() {
  var elem = document.querySelectorAll('[typing-data]')[0];
  var text = elem.getAttribute('typing-data');
  console.log(elem, text);
  TypingJS.write(elem, text);
};

document.addEventListener('DOMContentLoaded', function() {
  TypingJS.init();
});