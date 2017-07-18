# TypingJS v0.2.0

A lightweight lib that typing for you

## How to use

```
<body>
  <h1>Lorem Ipsum</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

  <script src="typing.min.js"></script>
  <script type="text/javascript">
    document.addEventListener('DOMContentLoaded', function() {
      var title = document.querySelector('h1'),
          paragraph = document.querySelector('p');

      typingjs(title);
      typingjs(paragraph);
    });
  </script>
</body>
```
