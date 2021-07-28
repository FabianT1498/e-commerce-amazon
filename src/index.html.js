const DEFAULT_PATHS = {
  styles: { path: 'styles.css', sri: '' },
  production: { path: 'bundle.js', sri: '' },
  vendor: { path: '404', sri: '' },
}

module.exports = (initialHtml = '', paths = DEFAULT_PATHS) =>
  `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta name="theme-color" content="#FFFFFF">
  <title>Amazon clone</title>
  <link rel="manifest" href="manifest.json">
  <link rel="icon" href="favicon.ico" type="image/x-icon">
  <link media="all" href="https://fonts.googleapis.com/css?family=Montserrat:400,600|Prompt:300,500" rel="stylesheet">
  <link rel="stylesheet" media="all" href="${paths.styles.path}" integrity="${paths.styles
    .sri}" />
</head>
<body>
  <div id="root"></div>  
  <script src="${paths.vendor.path}"></script>
</body>
</html>`
