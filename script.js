<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mini App do Bot do Telegram</title>
    <link rel="stylesheet" href="styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
</head>
<body>
    <div id="app">
        <div id="login-container">
            <h1>Login</h1>
            <form id="login-form">
                <input type="text" id="username" placeholder="Nome de usuário" required>
                <input type="password" id="password" placeholder="Senha" required>
                <button type="submit">Entrar</button>
                <p>Não tem uma conta? <a href="#" id="create-account">Crie uma</a></p>
            </form>
            <div class="math-symbols">
                <span>𝑒<sup>𝑖𝜋</sup> + 1 = 0</span>
                <span>∫<sub>a</sub><sup>b</sup> f(x) dx</span>
                <span>Σ<sub>n=1</sub><sup>∞</sup> a<sub>n</sub></span>
            </div>
        </div>
        <div id="hub-container" style="display: none;">
            <h1>Hub de Cursos</h1>
            <div id="courses">
                <div class="course">Curso 1: Introdução ao Telegram Bot</div>
                <div class="course">Curso 2: Desenvolvimento de Bots com Node.js</div>
                <div class="course">Curso 3: Integração com APIs</div>
                <div class="course">Curso 4: Melhores Práticas de Desenvolvimento</div>
            </div>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>