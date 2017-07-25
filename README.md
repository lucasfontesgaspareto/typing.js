# TypingJS v0.2.0

A lightweight lib that typing for you

## How to use

```
<body>
  <h1 data-text="TypingJS"></h1>
  <p data-text="A lightweight lib for typing effect in front-end"></p>
  <footer>Footer async - 2017</footer>

  <script src="typing-0.3.0.min.js" charset="utf-8"></script>
  <script type="text/javascript">
    document.addEventListener('DOMContentLoaded', function() {
      var title = document.querySelector('h1'),
          paragraph = document.querySelector('p'),
          footer = document.querySelector('footer');

      var typingjs = new TypingJS();

      typingjs(title, {
        sync: true
      });
      typingjs(paragraph, {
        sync: true
      });
      typingjs(footer);
    });
  </script>
</body>
```
