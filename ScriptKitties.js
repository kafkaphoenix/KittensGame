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

function autoCraft() {
	
	//Craft the fur derivatives
	var furDerivatives = ['parchment', 'manuscript', 'compedium', 'blueprint'];
	for (var i = 0; i < furDerVal; i++) {
  		if (gamePage.workshop.getCraft(furDerivatives[i]).unlocked) { 
				gamePage.craftAll(furDerivatives[i]); 
		}
	}
}

clearInterval(runAllAutomation);
var runAllAutomation = setInterval(function() {  
	if (gamePage.timer.ticksTotal % 3 === 0) {
		autoObserve();
		autoHunt();
		autoCraft();
	}  
}, 200);
