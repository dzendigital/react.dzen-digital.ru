<!-- 

# перед установкой react как приоложения ознакомьтесь с требованиями к ПО
https://ru.reactjs.org/docs/create-a-new-react-app.html#recommended-toolchains

# команды для установки react-приложения

# 1 команда установки
npm i react (для уже существующих сайтов, источник https://www.npmjs.com/package/react)
npx create-react-app my-app (для новых проектов для тестирования, команда создает несколько файлов, включая index.html, script.js и прочее)

# 2 
npm start 

# 3


Обзор основы реакт, включая примеры отправки fetch: https://www.taniarascia.com/getting-started-with-react/
 
-->
<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>React app for form</title>

	<!-- <link rel="stylesheet" href="node_modules/uikit/dist/css/uikit.min.css"> -->

	<link rel="icon" href="logo-favicon.svg?v=1.1664608195" type="image/svg+xml">
	<link rel="icon" href="logo-favicon.png?v=1.1664608195" type="image/png">

</head>
<body>
	<div id="app">
		<header>
			<section data-component="burger">
				<div id="Burger"></div>
			</section>
			<section data-component="burger">
				<div id="Burger1"></div>
			</section>
		</header>
		<main>
			<div data-element="row">
				<section data-component="form">
					<div id="Form"></div>
				</section>
				<section data-component="form-response">
					<div id="FormResponse"></div>
				</section>
			</div>
			<div data-element="row">
				<section data-component="form">
					<div id="Form1"></div>
				</section>
				<section data-component="form-response">
					<div id="FormResponse1"></div>
				</section>
			</div>
		</main>
		<footer></footer>
	</div>
	<!-- react scrips -->
	<script src="dist/app.js?v=<?=time() ?>"></script>
</body>
</html>