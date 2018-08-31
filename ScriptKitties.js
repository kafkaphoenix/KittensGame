var furDerVal = 2;

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
	
	var furDerivatives = ['parchment', 'manuscript', 'compedium', 'blueprint'];
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
