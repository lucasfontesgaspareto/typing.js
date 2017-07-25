var TypingJS = function() {

  var pool = [],
      timer = {};

  // define timeout(ms) for each char
   var alpha = '1234567890-=+_)(*&¨%$#@!\'"qwertyuiop´[]asdfghjklç~\\zxcvbnm,.;/QWERTYUIOP`{}ASDFGHJKLÇ^ZXCVBNM<>:?';
  for(var i = 0; i < alpha.length; i++) {
    timer[alpha[i]] = Math.floor(Math.random() * (150 - 50 + 1)) + 50;
  };

  // remove current item and execute next
  var next = function() {
    pool.shift()
    exec()
  };

  // executer each item
  var exec = function() {
    if(pool.length) {
      syncFn(pool[0], next);
    }
  };

  // execute writer and call next when finished
  var syncFn = function(pool, next) {
    // prepare element to write
    var text = '';
    // verify if is data-text or textContent type
    if (pool.firstChild && 3 === pool.firstChild.nodeType) {
      text = pool.firstChild.nodeValue;
      pool.firstChild.nodeValue = '';
    } else if (pool.dataset.text) {
      text = pool.dataset.text;
    };
    if (!pool.firstChild || (pool.firstChild && 3 !== pool.firstChild.nodeType)) {
      pool.appendChild(document.createTextNode(''));
    };
    // writer
    var writer = function(index) {
      if(!text[index]) return next? next() : false;;
      pool.firstChild.nodeValue += text[index++];
      setTimeout(writer, timer[text[index]], index);
    };
    writer(0);
  };

  // closure method to stack all itens in pool
  return function(el, options) {
    var options = options || {};
    // sync or async
    if (!options.sync) {
      return syncFn(el);
    };

    if(pool.length) {
      pool.push(el);
    } else {
      pool.push(el);
      exec();
    }
  };
};
