// Create a new project
StackBlitz.embedProject('myDiv', {
  files: {
    'index.html': `
<!DOCTYPE html>
<html>
  <head>
    <title>My Web App</title>
    <link rel="stylesheet" href="./style.css">
  </head>
  <body>
    <div class="container">
      <h1>Welcome to My Web App</h1>
      <p>This is a live coding environment!</p>
      <button onclick="handleClick()">Click me!</button>
    </div>
    <script src="./script.js"></script>
  </body>
</html>
    `,
    'style.css': `
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  font-family: Arial, sans-serif;
}

h1 {
  color: #2196f3;
  margin-bottom: 20px;
}

button {
  background: #2196f3;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s;
}

button:hover {
  background: #1976d2;
}
    `,
    'script.js': `
function handleClick() {
  alert('Button clicked!');
  console.log('Button click event logged');
}
    `
  },
  title: 'Interactive Web Demo',
  description: 'A simple interactive web application',
  template: 'javascript',
  settings: {
    compile: {
      clearConsole: true
    }
  }
});
