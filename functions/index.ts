export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = url.pathname;

    const files = {
      '/': {
        content: html,
        type: 'text/html',
      },
      '/style.css': {
        content: css,
        type: 'text/css',
      },
      '/main.js': {
        content: js,
        type: 'application/javascript',
      },
    };

    const file = files[path] || files['/'];
    return new Response(file.content, {
      headers: { 'Content-Type': file.type },
    });
  },
};

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>ResumeAI</title>
  <link rel="stylesheet" href="/style.css" />
</head>
<body>
  <main>
    <h1>ResumeAI</h1>
    <h2>Craft Your Future with Intelligent Design</h2>
    <pre>✅ You&#39;re ready to deploy your MVP!</pre>
    <button onclick="sayHi()">Try Me</button>
  </main>
  <script src="/main.js"></script>
</body>
</html>`;
const css = `
body {
  font-family: system-ui, sans-serif;
  background: #f8fafc;
  margin: 0;
  padding: 2rem;
  color: #111827;
}
main {
  text-align: center;
}
h1 {
  color: #2563eb;
  font-size: 2rem;
  margin-bottom: 0.5rem;
}
button {
  background: #2563eb;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
}
`;
const js = `
function sayHi() {
  alert("Hello from ResumeAI!");
}
`;
