//food class; caloriesPerHGrams = number of calories per 100 grams
function Food(name, type,caloriesPerHGrams,image, amount){
	this.name = name;
	this.type = type;
	this.caloriesPerHGrams = caloriesPerHGrams;
	this.image = image;
	this.amount = amount;	
}
//function which gives attributes to the elements
function addAtributes(){ 	
	$( '#categoryBox' ).sortable();
	$( '#categoryBox' ).droppable();
	
	$('.food').draggable({
		connectToSortable: "#resultsBox",
		containment: "#resultsBox",
		scroll: false
	});
	
	$('#resultsBox').droppable({
		drop: Drop0
	});

	$( "#resultsBox" ).sortable({
		receive:Drop
	});
	

	function Drop0(event, ui){
		var draggableId = ui.draggable.prop('id');
		localStorage.setItem('draggableId', draggableId);	 
	}
	
	caloriesGetter = {
		getCalories: function(){
			wrongInput = false;
			do {
				if(!wrongInput){
			 		caloriesAmount = Math.round(prompt('how much grams?') );
				}
				wrongInput = true;
				caloriesAmount = caloriesAmount?caloriesAmount:Math.round( prompt('how much grams?(Numbers only!)') );
			}
			while (isNaN( parseInt( caloriesAmount)))	
			return caloriesAmount;				
		}
	}
	
	function Drop(event, ui) {	
		var draggableId =  localStorage.getItem('draggableId');
		var draggableJQ =	$('#'+draggableId);
		//if food element was dopped ino the box
		if(!draggableJQ.hasClass('dropped')){
			$('#resultsBox').droppable( 'enable' );
			var droppableId = $(this).attr("id");
			//get new amount of calories
			var caloriesAmount= caloriesGetter.getCalories();
			var fieldWithCalories =$("#"+draggableId+"Cals"); //find div with calories
			var amountBox = $("#"+draggableId+"Amount"); //find div with amount
			var calsPerH = fieldWithCalories.text(); //get calories per 100g from calories div
			var sumOfCalories = caloriesAmount*(calsPerH/100) ; //result - total amount
			var sumOfCalories = Math.round(sumOfCalories );
			
			amountBox.empty();		
			amountBox.append(sumOfCalories); //Append new total amount
			
			var deleteArea = $('#'+draggableId+'DeleteArea'); //get id of area where delete button should be
			//this condition prevents from adding delete button twice when moved within results box
			var deleteButton = '#'+draggableId+'DeleteArea .delete'; 
		
			if(! $ (deleteButton).length>0 ){
				deleteArea.append('<button id="'+draggableId+'Delete" class="delete">Delete</button><button id="'+draggableId+
				'Edit" class="edit">Edit</buton>');
			}
			draggableJQ.addClass('dropped');
		}
	
	} // drop end
} //addAttributes end
	
//function which appends food object to the select box
Food.prototype.appendObj = function(){ 
	var foodName = this.name;	
	var appendedFood = '#resultsBox #'+foodName; //condition protecting from adding food more than one time	
	if(!$ (appendedFood).length>0 ){
		$('#categoryBox').append('<div class="food '+this.type+'" id="'+foodName+'"><img class="foodIcon" src="foodIMG/'+this.image+
		'"height="55" width="55" title="'+foodName+'"><div id="'+foodName+'DeleteArea" class="deleteArea"></div><div id="'+foodName+
		'Info">Calories in 100g: <div class="cals" id='+foodName+'Cals>'+this.caloriesPerHGrams+
		'</div>&nbsp; Total:<div class="amount" id="'+foodName+'Amount"  contenteditable="true">0</div></div></div>' );
	}
	
}
//function which appends multiple food objects
function appendThoseObjects(objects){ 
	for(i=0;i<objects.length;i++){
		currentObj = objects[i];
		currentObj.appendObj();
	}
}


	
function appendFruits(){
	var banana = new Food('banana','fruits','95', 'banana.png');
	var kiwi = new Food('kiwi', 'fruits', '60', 'kiwi.png');
	var apple = new Food('apple', 'fruits', '52', 'apple.png');	
	var strawberries = new Food('strawberries', 'fruits', '32', 'strawberries.png');
	var orange = new Food('orange', 'fruits', '47', 'orange.png');
	var peach = new Food('peach', 'fruits', '39', 'peach.png');
	var watermelon = new Food('watermelon', 'fruits', '30', 'watermelon.png');
	
	var objects= [banana, kiwi, apple, strawberries, orange, peach, watermelon];
	appendThoseObjects(objects);
	
}

function appendVegetables(){
	var potato = new Food('potato', 'vegetables', '103', 'potato.png');
	var carrot = new Food('carrot', 'vegetables', '22', 'carrot.png');
	var corn = new Food('corn', 'vegetables', '86', 'corn.png');
	var broccoli = new Food('broccoli', 'vegetables', '28', 'broccoli.png');
	var tomato = new Food('tomato', 'vegetables', '18', 'tomato.png');

	var objects= [potato, carrot, corn, broccoli, tomato];
	appendThoseObjects(objects);

}

function appendFastfood(){
	var hamburger = new Food('hamburger', 'fastfood', '250', 'hamburger.png');
	var frenchFries = new Food('french-fies', 'fastfood', '255', 'frenchfries.png');
	var hotdog = new Food('hotdog', 'fastfood', '304', 'hotdog.png');
	
	var objects= [hamburger,frenchFries, hotdog];
	appendThoseObjects(objects);
	
}

function appendMeat(){
	var roastedChicken = new Food('roasted-chicken', 'meat', '171', 'roastedChicken.png');
	var ham = new Food('ham', 'meat', '129', 'ham.png');
	var beef = new Food('beef', 'meat', '187', 'beef.png');
	var pork = new Food('pork', 'meat', '136', 'pork.png');
	
	var objects= [roastedChicken, ham, beef, pork];
	appendThoseObjects(objects);
	
}

function appendSeafood(){
	var lobster = new Food('lobster', 'seafood', '97', 'lobster.png');
	var shrimp = new Food('shrimp', 'seafood', '110', 'shrimp.png');
	var sardines = new Food('sardines', 'seafood', '217', 'sardines.png');
	var salmon = new Food('salmon', 'seafood', '146', 'salmon.png');
 	var tuna = new Food('tuna', 'seafood', '116', 'tuna.png'); 
	
	var objects= [lobster, shrimp, sardines, salmon, tuna];
	appendThoseObjects(objects);
	
}

function appendDrinks(){
	var cola = new Food('cola', 'drinks', '42', 'cola.png');
	var tea = new Food('tea', 'drinks', '11', 'tea.png');
	var coffee = new Food('coffee', 'drinks', '4', 'coffee.png');
	var beer = new Food('beer', 'drinks', '4', 'beer.png');
	
	var objects= [cola, tea, coffee, beer];
	appendThoseObjects(objects);
}

function appendBaked(){
	var whitebread = new Food('white-bread', 'baked-goods', '266', 'whitebread.png');
	var wholemeal = new Food('wholemeal-bread', 'baked-goods', '229', 'wholemeal.png');
	var bagel = new Food('bagel', 'baked-goods', '255', 'bagel.png');
	var cake = new Food('cake', 'baked-goods', '445', 'cake.png');
	var biscuit = new Food('biscuit', 'baked-goods', '461', 'biscuit.png');
	var doughnut = new Food('doughnut', 'baked-goods', '336', 'doughnut.png');

	var objects= [whitebread, wholemeal, bagel, cake, biscuit, doughnut];
	appendThoseObjects(objects);
}

function appendIngredients(){
	var sugar = new Food('sugar', 'ingredients', '387', 'sugar.png');
	
	var objects= [sugar];
	appendThoseObjects(objects);
}

function appendSweets(){
	var milkChocolate = new Food('milk-Chocolate', 'sweets', '520', 'milkChocolate.png');
	
	var objects= [milkChocolate];
	appendThoseObjects(objects);
	
}

function appendNutsgrains(){
	var walnuts = new Food('walnuts', 'nutsgrains', '654', 'walnuts.png');
	var sunflowerseeds = new Food('sunflower-seeds', 'nutsgrains', '654', 'sunflowerseeds2.png');
	var sesameseeds = new Food('sesame-seeds', 'nutsgrains', '610', 'sesameseeds.jpg');
	var peanuts = new Food('peanuts', 'nutsgrains', '622', 'peanuts.png');
	var hazelnuts = new Food('hazelnuts', 'nutsgrains', '655', 'hazelnuts.png');
	var almonds = new Food('almonds', 'nutsgrains', '611', 'almonds.png');
	
	var objects= [walnuts, sunflowerseeds, sesameseeds, peanuts, hazelnuts, almonds];
	appendThoseObjects(objects);
	
}

function appendDairy(){
	var butter = new Food('butter', 'dairy', '734', 'butter.png');
	var cheddar = new Food('cheddar', 'dairy', '429', 'cheddar.png');
	var boiledegg = new Food('boiled-egg', 'dairy', '147', 'boiledegg.png');
	var milk = new Food('milk', 'dairy', '58', 'milk.png');
	var yoghurt = new Food('yoghurt', 'dairy', '88', 'yoghurt.png');
	
	var objects= [butter, cheddar, boiledegg, milk, yoghurt];
	appendThoseObjects(objects);
}

$(document).ready(function(){	
	$('#calculate').click(function(){
		emptyCondition = $('#resultsBox').is(':empty'); //check if the box is not empty
		if(!emptyCondition){
			var sum=0;		
			$(".amount").each(function() { //loops through every given amount of calories by food
				var amountInt = parseInt( $(this).text() );
				if(!isNaN(amountInt)){
					sum+=amountInt;
					localStorage.setItem('sum', sum); //saves result in local storage
				}
			});
		
			$('#mainArea').append('<div id="dialog" title="Your results"> <div id="results"></div> </div>'); //message with result
			var yourResult = 'Your total restult is '+sum+' calories';
			$('#results').append(yourResult);
			$( "#dialog" ).dialog();	//triggers message box		
		}else{
			alert ('There is no food to calculate');
		}
	}); //calculate click end
	//function that executes when some categry is selected
	$('#selectCategory').change(function(){ 
		$('#categoryBox').empty();
		switch($(this).val())  {
			case 'fruits':
			appendFruits();			
			break;
			
			case 'vegetables':
			appendVegetables();
			break;
			
			case 'fastfood':
			appendFastfood();
			break;
			
			case 'meat':
			appendMeat();
			break;
			
			case 'seafood':
			appendSeafood();
			break;
			
			case 'drinks':
			appendDrinks();
			break;
			
			case 'ingredients':
			appendIngredients();
			break;
			
			case 'baked goods':
			appendBaked();
			break;
			
			case 'sweets':
			appendSweets();
			break;
			
			case 'nutsgrains':
			appendNutsgrains();
			break;
			
			case 'dairy':
			appendDairy();
			break;
	
		}
		addAtributes();
	});
	
	$('select[name="selectCategory"] option[value="choose"]').prop('selected', true); 
}); //document ready end

$(document).on('click', '.delete', function(){ //when clicked "delete" button
	var thisId = $(this).attr("id");
	var idLength = thisId.length;
	var deletedFoodName= thisId.substr(0, idLength-6); //get food name as a substring of "delete" button id
	var foodToDelete = $("#"+deletedFoodName);
	foodToDelete.detach();   
});

$(document).on('click', '.edit', function(){ //when clicked "edit" button
	var thisId = $(this).attr("id");
	var idLength = thisId.length;
	var editedFoodName= thisId.substr(0, idLength-4); //get food name as a substring of "edit" button id

	var fieldToEdit = $('#'+editedFoodName+'Amount'); //get field which contains edited value
	var newValue= caloriesGetter.getCalories();
 	var caloriesAmount = $('#'+editedFoodName+'Cals').text(); //take calories per 100g
	fieldToEdit.empty(); //delete old value
	newResult = Math.round(newValue*(caloriesAmount/100));
	fieldToEdit.append(newResult); //add new value		    
});