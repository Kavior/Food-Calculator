<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"> 
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en"> 
<head>
	
	<meta http-equiv='Content-Type' content='text/html; charset=utf-8' /> 
	<meta name="keywords" content="food calculator, calory calculator, healthy food calculator">
	<meta http-equiv='content-language' content='en' /> 
	<title>Interactive online food calculator!</title>
	<link rel="shortcut icon" href="food.ico" /> 
	<link rel="ICON" href="food.ico" type="image/ico" />
	<link rel="stylesheet" href="style.css" type="text/css">
	<script type="text/javascript" src="jquery-2.0.3.min.js"></script>
	<script type="text/javascript" src="jquery-ui.js"></script>	
	<script type="text/javascript" src="food.js"></script> 
	
</head>
<body background = "mainbg3.jpg">
	<div id="mainArea">
		<div id = "categoriesArea">
			<div id="categories">			
				<select size="9"  id="selectCategory" name="selectCategory"> 
					<option value="choose" style="background-color: orange;">--Select Category--</option>
					<option value="vegetables">Vegetables</option>
					<option value="fruits">Fruits</option>
					<option value="fastfood" id="FF">Fast-food</option>
					<option value="meat">Meat</option>
					<option value="seafood">Seafood</option>
					<option value="drinks">Drinks</option>
					<option value="baked goods">Baked goods</option>
					<option value="ingredients">Ingredients</option>
					<option value="sweets">Sweets</option>
					<option value="nutsgrains">Nuts and grains</option>
					<option value="dairy">Dairy products</option>
				</select>
			</div>
			<div id="categoryBox"></div>
		</div>
		<div id="resultsArea">
			<div id="resultsBox" class="resultsBox"></div>
			<button id="calculate">Calculate</button>
		</div>
	</div>
</body>
</html>