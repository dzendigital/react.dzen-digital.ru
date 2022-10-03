<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>React app for form</title>

	<link rel="stylesheet" href="node_modules/uikit/dist/css/uikit.min.css">

</head>
<body>
	<div id="app">
		<header></header>
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