var typingjs = function(el) {
  var text = el.firstChild.nodeValue,
      timer = {};

  el.firstChild.nodeValue = '';

  // generete random int(timeout) for each char
  var alpha = '1234567890-=+_)(*&¨%$#@!\'"qwertyuiop´[]asdfghjklç~\\zxcvbnm,.;/QWERTYUIOP`{}ASDFGHJKLÇ^ZXCVBNM<>:?';
  for(var i = 0; i < alpha.length; i++) {
    timer[alpha[i]] = Math.floor(Math.random() * 200);
  };

  var syncType = function(index) {
    if(!text[index]) return;
    el.firstChild.nodeValue += text[index++];
    setTimeout(syncType, timer[text[index]], index);
  };

  syncType(0);
};
