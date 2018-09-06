var furDerivatives = ['parchment', 'manuscript', 'compedium', 'blueprint'];
var furDerVal = 1;
var deadScript = "Script stopped!";
var nm = 0;
var nightModeMsg = "Night mode activated!";
let time, log;
let authPromise;
let database;

function setupFirebase() {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAbx7hpaQodr6vyUQvomO2-OsPxleWHNSo",
    authDomain: "autokittenlog.firebaseapp.com",
    databaseURL: "https://autokittenlog.firebaseio.com",
    projectId: "autokittenlog",
    storageBucket: "autokittenlog.appspot.com",
    messagingSenderId: "569325163300"
  };
  firebase.initializeApp(config);
  database = firebase.database();
  authPromise = firebase.auth().signInAnonymously();
}

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

'<div id="menu" style="display:none; margin-top:-400px; margin-left:-100px; width:200px" class="dialog help">' + 
'<a href="#" class="close" onclick="closeMenu();" style="position: absolute; top: 10px; right: 15px;">close</a>' + 
    
'<input type="button" value="Stop Script" style="position: absolute; left: 15px; top: 15 px;" id="stopScript" onclick="clearInterval(clearScript()); gamePage.msg(deadScript);"> </br>' +
'<input type="button" value="NightMode" style="position: absolute; left: 15px; top: 45 px;" id="nightMode" onclick="nightMode(); gamePage.msg(nightModeMsg);"> </br>' +    

'<select id="craftFur" style="position: absolute; left: 15px; top: 75 px;" size="1" onclick="setFurValue()">' +
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

function nightMode() {
	if (nm == 0) {
		nm = 1;
		furDerVal = 4;
		nightModeMsg = "Night mode activated!";
	} else {
		nm = 0;
		furDerVal = 1;
		nightModeMsg = "Night mode deactivated!";
	}
	if (nm != 0) {
		for (var i = 0; i < resources.length; i++) {
		    var curRes = gamePage.resPool.get(resources[i][0]);
		    var resourcePerTick = gamePage.getResourcePerTick(resources[i][0], 0);
		    var resourcePerCraft = (resourcePerTick * 3);
		    if (curRes.value > (curRes.maxValue - resourcePerCraft) && gamePage.workshop.getCraft(resources[i][1]).unlocked) {
			gamePage.craft(resources[i][1], (resourcePerCraft / resources[i][2]));
		    }
		}
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
setupFirebase();
var runAllAutomation = setInterval(function() {  
	
	autoPraise();
	
	//day
	if (gamePage.timer.ticksTotal % 3 === 0) {
		autoObserve();
		autoHunt();
		autoCraft();
		if (nm == 0) {
			autoCatnip();
		}
	} 
	
	if (gamePage.timer.ticksTotal % 25 === 0) {
		
		autoParty();
	}
	
}, 200);
