var furDerivatives = ['parchment', 'manuscript', 'compedium', 'blueprint'];
var furDerVal = 2;
var deadScript = "Script stopped!";

var htmlMenuAddition = '<div id="autokittens" class="column">' +

'<a id="scriptOptions" style="display:none; margin-top:-400px; margin-left:-100px; width:200px" onclick="openMenu()"> | AutoKittens </a>' + 

'<div id="menu" class="dialog help">' + 
'<a href="#" onclick="closeMenu();" style="position: absolute; top: 10px; right: 15px;">X</a>' + 

'<button id="stopScript" onclick="clearInterval(clearScript()); gamePage.msg(deadScript);">Stop Script</button> </br>' +

'<select id="craftFur" size="1" onclick="setFurValue()">' +
'<option value="1" selected="selected">Parchment</option>' +
'<option value="2">Manuscript</option>' +
'<option value="3">Compendium</option>' +
'<option value="4">Blueprint</option>' +
'</select></br></br>' +

'</div>' +
'</div>'

$("#footerLinks").append(htmlMenuAddition);

function closeMenu() {
	$("#menu").hide();
}

function openMenu() {
	$("#menu").toggle();
}

function setFurValue() {
	furDerVal = $('#craftFur').val();
}

function clearScript() {
	$("#menu").remove();
	$("#scriptOptions").remove();
	clearInterval(runAllAutomation);
	htmlMenuAddition = null;
}

// Auto Observe Astronomical Events

function autoObserve() {
	
	var checkObserveBtn = document.getElementById("observeBtn");
	if (typeof(checkObserveBtn) != 'undefined' && checkObserveBtn != null) {
		checkObserveBtn.click();				
	}
}

// Auto Hunt

function autoHunt() {
	
	var catpower = gamePage.resPool.get('manpower');
	if (catpower.value > (catpower.maxValue - 1)) {
		gamePage.village.huntAll();
	}
}

// Auto praise the sun

function autoPraise() {
	
	var faith = gamePage.resPool.get('faith');
	if (game.bld.getBuildingExt('temple').meta.val > 0 && faith.value > (faith.maxValue - 1)) {
		gamePage.religion.praise();
	}
}

//Craft the fur derivatives

function autoCraft() {
	
	for (var i = 0; i < furDerVal; i++) {
  		if (gamePage.workshop.getCraft(furDerivatives[i]).unlocked) { 
				gamePage.craftAll(furDerivatives[i]); 
		}
	}
}

//Convert catnip to wood

function autoCatnip() {
	
	var catnip = gamePage.resPool.get('catnip');
	var calendar = gamePage.calendar;

	// Only run if positive catnip and not in last half of Autumn
	if (catnip.perTickUI < 0) { return; }
	if (catnip.value / catnip.maxValue < 0.99) { return; }
	if (calendar.season == 2 && calendar.day > 50) { return; }
	gamePage.craftAll('wood');
}

// Festival automatically

function autoParty() {
	if (gamePage.science.get("drama").researched && game.calendar.festivalDays === 0) {
		var catpower = gamePage.resPool.get('manpower').value;
		var culture = gamePage.resPool.get('culture').value;
		var parchment = gamePage.resPool.get('parchment').value;
		
		if (catpower > 1500 && culture > 5000 && parchment > 2500) {
			gamePage.village.holdFestival(1);
		}
	
	}
}

clearInterval(runAllAutomation);
var runAllAutomation = setInterval(function() {  
	
	autoPraise();
	
	//day
	if (gamePage.timer.ticksTotal % 3 === 0) {
		autoObserve();
		autoHunt();
		autoCraft();
		autoCatnip();
	} 
	
	if (gamePage.timer.ticksTotal % 25 === 0) {
		
		autoParty();
	}
	
}, 200);
