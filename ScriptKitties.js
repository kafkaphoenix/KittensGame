// Auto Observe Astronomical Events

function autoObserve() {
  var checkObserveBtn = document.getElementById("observeBtn");
		if (typeof(checkObserveBtn) != 'undefined' && checkObserveBtn != null) {
			checkObserveBtn.click();				
		}
}

// Auto praise the sun

function autoPraise() {
  if (game.bld.getBuildingExt('temple').meta.val > 0) {
    gamePage.religion.praise();
}

// Auto Hunt

function autoHunt() {
	var catpower = gamePage.resPool.get('manpower');
		if (catpower.value > (catpower.maxValue - 1)) {
			gamePage.village.huntAll();
		}
}	
}

clearInterval(runAllAutomation);
var runAllAutomation = setInterval(function() {
  autoPraise();
  
  if (gamePage.timer.ticksTotal % 3 === 0) {
		autoObserve();
		autoHunt();
	}
  
}, 200);
