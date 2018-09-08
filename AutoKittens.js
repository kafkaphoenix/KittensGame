var furDerivatives = ['parchment', 'manuscript', 'compedium', 'blueprint'];
var furDerVal = 2;
var deadScript = "Script stopped!";
var nm = 0;
var at = 0;
var nightModeMsg = "Night mode activated!";
var tradeMsg = "Auto Trade activated!";

var resources = [
       		["catnip", "wood", 50],
            ["wood", "beam", 175],
        	["minerals", "slab", 250],
            ["coal", "steel", 100],
        	["iron", "plate", 125],
            ["oil", "kerosene", 7500],
            ["uranium", "thorium", 250],
			["unobtainium", "eludium", 1000]
                ];

var htmlMenuAddition = '<div id="autokittens" class="column">' +

'<a id="scriptOptions" onclick="openMenu()"> | AutoKittens </a>' + 

'<div id="menu" style="display:none; margin-top:-300px; margin-left:-100px; width:200px; height:200px !important" class="dialog help">' + 
'<a href="#" class="close" onclick="closeMenu();" style="position: absolute; top: 10px; right: 15px;">close</a>' + 

'<input type="button" value="Stop Script" style="position: absolute; left: 15px;" id="stopScript" onclick="clearInterval(clearScript()); gamePage.msg(deadScript);">' +
'<input type="button" value="NightMode" style="position: absolute; left: 15px; top: 50px; width: 130px;" id="nightMode" onclick="switchNightMode(); gamePage.msg(nightModeMsg);">' +    
'<input type="button" value="AutoTrade" style="position: absolute; left: 15px; top: 80px; width: 130px;" id="autoTrade" onclick="switchAutoTrade(); gamePage.msg(tradeMsg);">' +      
	
'<select id="craftFur" style="position: absolute; left: 15px; top: 120px;" size="1" onclick="setFurValue()">' +
'<option value="1" selected="selected">Parchment</option>' +
'<option value="2">Manuscript</option>' +
'<option value="3">Compendium</option>' +
'<option value="4">Blueprint</option>' +
'</select>' +

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
	if ((catpower.value / catpower.maxValue) > 0.99) {
		gamePage.village.huntAll();
	}
}

// Auto praise the sun

function autoPraise() {
	
	var faith = gamePage.resPool.get('faith');
	if (game.bld.getBuildingExt('temple').meta.val > 0 && (faith.value / faith.maxValue) > 0.99) {
		gamePage.religion.praise();
	}
}

function nightMode()
	for (var i = 0; i < resources.length; i++) {
	    var resource = gamePage.resPool.get(resources[i][0]);
	    if ((resource.value / resource.maxValue) > 0.99 && gamePage.workshop.getCraft(resources[i][1]).unlocked) {
		gamePage.craftAll(resources[i][1]);
	    }
	}
}

function switchNightMode ()
{
	nm == 0 ? 1 : 0;
	
	if (nm == 1) {
		furDerVal = 3;
		nightModeMsg = "Night mode activated!";
	} else {
		furDerVal = 2;
		nightModeMsg = "Night mode deactivated!";
	}	
}

		// Trade automatically
function autoTrade() {
	if (gamePage.calendar.season == 1 && slab.value >= 50) {
		gamePage.diplomacy.tradeMultiple(game.diplomacy.get("zebras"), Math.floor(game.resPool.get("slab").value) / 50);
	}
}

function switchAutoTrade()
{
	at == 0 ? 1 : 0;
	
	if (at == 1) {
		tradeMsg = "Auto Trade activated!";
	} else {
		tradeMsg = "Auto Trade deactivated!";
	}	
}

//Craft the fur derivatives

function autoCraft() {
	
	for (var i = 0; i < furDerVal; i++) {
  		if (gamePage.workshop.getCraft(furDerivatives[i]).unlocked) { 
			if (gamePage.science.get("drama").researched && game.calendar.festivalDays === 0) {
				if ( i != 2) {
					gamePage.craftAll(furDerivatives[i]); 
				}
			} else {
				gamePage.craftAll(furDerivatives[i]); 
			}
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

//Convert catnip to wood

function autoSteel() {
	
	var coal = gamePage.resPool.get('coal');

	// Only run if positive catnip and not in last half of Autumn
	if ((coal.value / coal.maxValue) > 0.99 && gamePage.workshop.getCraft("steel").unlocked) {
			gamePage.craftAll("steel");
	}
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
	if (nm == 1){
		nightMode();
	}
	if (at = 1){
		autoTrade();
	}
	
	
	//day
	if (gamePage.timer.ticksTotal % 3 === 0) {
		if (!game.workshop.get("seti").researched) {
			autoObserve();
		}
		autoHunt();
		autoCraft();
		if (nm == 0) {
			autoCatnip();
			autoSteel();
		}
	} 
	
	if (gamePage.timer.ticksTotal % 25 === 0) {
		
		autoParty();
		
		if (nm == 1){
			gamePage.msg("... zz zzz ... zz ...");
		}
		if (at == 1){
			gamePage.msg("auto trading ...");
		}
		
	}
	
}, 200);
