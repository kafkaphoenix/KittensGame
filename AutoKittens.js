var furDerivatives = ['parchment', 'manuscript', 'compedium', 'blueprint'];
var furDerVal = 1;
var deadScript = "Script stopped!";
var nightModeMsg = "Night mode activated!";
var tradeMsg = "Auto Trade activated!";
var craftMsg = "Auto Craft activated!";
var kittensMsg = "Auto Kittens activated!";
var buildMsg = "Auto Build activated!"
var huntMsg = "Auto Hunt activated!";
var praiseMsg = "Auto Praise activated!";
var scienceMsg = "Auto Science activated!";
var upgradeMsg = "Auto Upgrade activated!";
var partyMsg = "Party time!"
var nm = 0;
var at = 0;
var ac = 0;
var ak = 0;
var ab = 0;
var ah = 0;
var ap = 0;
var as = 0;
var au = 0;
var apr = 0;
var steamOn = 0;

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
var secondaryResources = [
			["beam", "scaffold", 50],
            ["steel", "alloy", 75],
			["steel", "gear", 15],
			["slab", "concrate", 2500]
			];

var htmlMenuAddition = '<div id="autokittens" class="column">' +

'<a id="scriptOptions" onclick="openMenu()"> | AutoKittens </a>' + 

'<div id="menu" style="display:none; margin-top:-420px; margin-left:-100px; width:220px; height:345px !important" class="dialog help">' + 
'<a href="#" class="close" onclick="closeMenu();" style="position: absolute; top: 10px; right: 15px;">close</a>' + 

'<input type="button" value="Stop Script" style="position: absolute; left: 15px;" id="stopScript" onclick="clearInterval(clearScript()); gamePage.msg(deadScript);">' +
'<input type="button" value="NightMode" style="position: absolute; left: 15px; top: 50px; width: 130px;" id="nightMode" onclick="switchNightMode(); gamePage.msg(nightModeMsg);">' +    

'<input type="button" value="AutoTrade" style="position: absolute; left: 15px; top: 100px; width: 130px;" id="autoTrade" onclick="switchAutoTrade(); gamePage.msg(tradeMsg);">' +      
'<input type="button" value="AutoBuild" style="position: absolute; left: 15px; top: 130px; width: 130px;" id="autoBuild" onclick="switchAutoBuild(); gamePage.msg(buildMsg);">' +      
'<input type="button" value="AutoCraft" style="position: absolute; left: 15px; top: 160px; width: 130px;" id="autoCraft" onclick="switchAutoCraft(); gamePage.msg(craftMsg);">' +      
'<input type="button" value="AutoKittens" style="position: absolute; left: 15px; top: 190px; width: 130px;" id="autoKittens" onclick="switchAutoKittens(); gamePage.msg(kittensMsg);">' +  
'<input type="button" value="AutoHunt" style="position: absolute; left: 15px; top: 220px; width: 130px;" id="autoHunt" onclick="switchAutoHunt(); gamePage.msg(huntMsg);">' +  
'<input type="button" value="AutoPraise" style="position: absolute; left: 15px; top: 250px; width: 130px;" id="autoPraise" onclick="switchAutoPraise(); gamePage.msg(praiseMsg);">' +      
'<input type="button" value="AutoParty" style="position: absolute; left: 15px; top: 280px; width: 130px;" id="autoParty" onclick="switchAutoParty(); gamePage.msg(partyMsg);">' +  
'<input type="button" value="AutoUpgrade" style="position: absolute; left: 15px; top: 310px; width: 130px;" id="autoUpgrade" onclick="switchAutoUpgrade(); gamePage.msg(upgradeMsg);">' +  
'<input type="button" value="AutoScience" style="position: absolute; left: 15px; top: 340px; width: 130px;" id="autoScience" onclick="switchAutoScience(); gamePage.msg(scienceMsg);">' +      


'<input type="button" value="+" style="position: absolute; left: 150px; top: 100px; width: auto;" id="autoTradingOptions" onclick="openAToptions();">' +      
'<input type="button" value="+" style="position: absolute; left: 150px; top: 130px; width: auto;" id="autoBuildingOptions" onclick="openABoptions();">' +    
'<input type="button" value="+" style="position: absolute; left: 150px; top: 160px; width: auto;" id="autoCraftingOptions" onclick="openACoptions();">' +   
'<input type="button" value="+" style="position: absolute; left: 150px; top: 190px; width: auto;" id="autoKittensOptions" onclick="openAKoptions();">' +
    
'</div>' +
'</div>'

$("#footerLinks").append(htmlMenuAddition);

var bldSelectAddition = '<div id="menuAB" style="display:none; margin-top:-400px; width:200px" class="dialog help">' + 
'<a href="#" onclick="$(\'#menuAB\').hide();" style="position: absolute; top: 10px; right: 15px;">close</a>' + 

'	<br><input type="checkbox" id="hutChecker"><label for="hutChecker" onclick="$(\'.hutCheck\').click();"><b>Kitten Housing</b></label><br>' + 
'	<input type="checkbox" id="hutBld" class="hutCheck" onchange="verifyBuildingSelected(\'0\', \'hutBld\');"><label for="hutBld">Hut</label><br>' + 
'	<input type="checkbox" id="houseBld" class="hutCheck" onchange="verifyBuildingSelected(\'1\', \'houseBld\')"><label for="houseBld">Log House</label><br>' + 
'	<input type="checkbox" id="mansionBld" class="hutCheck" onchange="verifyBuildingSelected(\'2\', \'mansionBld\')"><label for="mansionBld">Mansion</label><br><br>' + 

'	<input type="checkbox" id="craftChecker"><label for="craftChecker" onclick="$(\'.craftCheck\').click();"><b>Craft Bonuses</b></label><br>' + 
'	<input type="checkbox" id="workshopBld" class="craftCheck" onchange="verifyBuildingSelected(\'3\', \'workshopBld\')"><label for="workshopBld">Workshop</label><br>' + 
'	<input type="checkbox" id="factoryBld" class="craftCheck" onchange="verifyBuildingSelected(\'4\', \'factoryBld\')"><label for="factoryBld">Factory</label><br><br>' + 

'	<input type="checkbox" id="prodChecker"><label for="prodChecker" onclick="$(\'.prodCheck\').click();"><b>Production</b></label><br>' + 
'	<input type="checkbox" id="fieldBld" class="prodCheck" onchange="verifyBuildingSelected(\'5\', \'fieldBld\')"><label for="fieldBld">Catnip Field</label><br>' + 
'	<input type="checkbox" id="pastureBld" class="prodCheck" onchange="verifyBuildingSelected(\'6\', \'pastureBld\')"><label for="pastureBld">Pasture/Solar</label><br>' + 
'	<input type="checkbox" id="mineBld" class="prodCheck" onchange="verifyBuildingSelected(\'7\', \'mineBld\')"><label for="mineBld">Mine</label><br>' + 
'	<input type="checkbox" id="lumberBld" class="prodCheck" onchange="verifyBuildingSelected(\'8\', \'lumberBld\')"><label for="lumberBld">Lumber Mill</label><br>' + 
'	<input type="checkbox" id="aqueductBld" class="prodCheck" onchange="verifyBuildingSelected(\'9\', \'aqueductBld\')"><label for="aqueductBld">Aqueduct/Hydro</label><br>' + 
'	<input type="checkbox" id="oilBld" class="prodCheck" onchange="verifyBuildingSelected(\'10\', \'oilBld\')"><label for="oilBld">Oil Well</label><br>' + 
'	<input type="checkbox" id="quarryBld" class="prodCheck" onchange="verifyBuildingSelected(\'11\', \'quarryBld\')"><label for="quarryBld">Quarry</label><br><br>' + 

'	<input type="checkbox" id="conversionChecker"><label for="conversionChecker" onclick="$(\'.convertCheck\').click();"><b>Conversion</b></label><br>' + 
'	<input type="checkbox" id="smelterBld" class="convertCheck" onchange="verifyBuildingSelected(\'12\', \'smelterBld\')"><label for="smelterBld">Smelter</label><br>' + 
'	<input type="checkbox" id="labBld" class="convertCheck" onchange="verifyBuildingSelected(\'13\', \'labBld\')"><label for="labBld">Bio Lab</label><br>' + 
'	<input type="checkbox" id="calcinerBld" class="convertCheck" onchange="verifyBuildingSelected(\'14\', \'calcinerBld\')"><label for="calcinerBld">Calciner</label><br>' + 
'	<input type="checkbox" id="reactorBld" class="convertCheck" onchange="verifyBuildingSelected(\'15\', \'reactorBld\')"><label for="reactorBld">Reactor</label><br>' + 
'	<input type="checkbox" id="acceleratorBld" class="convertCheck" onchange="verifyBuildingSelected(\'16\', \'acceleratorBld\')"><label for="acceleratorBld">Accelerator</label><br>' + 
'	<input type="checkbox" id="steamBld" class="convertCheck" onchange="verifyBuildingSelected(\'17\', \'steamBld\')"><label for="steamBld">Steamworks</label><br>' + 
'	<input type="checkbox" id="magnetoBld" class="convertCheck" onchange="verifyBuildingSelected(\'18\', \'magnetoBld\')"><label for="magnetoBld">Magneto</label><br><br>' + 

'	<input type="checkbox" id="scienceChecker"><label for="scienceChecker" onclick="$(\'.scienceCheck\').click();"><b>Science</b></label><br>' + 
'	<input type="checkbox" id="libraryBld" class="scienceCheck" onchange="verifyBuildingSelected(\'19\', \'libraryBld\')"><label for="libraryBld">Library</label><br>' + 
'	<input type="checkbox" id="academyBld" class="scienceCheck" onchange="verifyBuildingSelected(\'20\', \'academyBld\')"><label for="academyBld">Academy</label><br>' + 
'	<input type="checkbox" id="obervatoryBld" class="scienceCheck" onchange="verifyBuildingSelected(\'21\', \'obervatoryBld\')"><label for="obervatoryBld">Observatory</label><br><br>' + 

'	<input type="checkbox" id="storageChecker"><label for="storageChecker" onclick="$(\'.storageCheck\').click();"><b>Storage</b></label><br>' + 
'	<input type="checkbox" id="barnBld" class="storageCheck" onchange="verifyBuildingSelected(\'22\', \'barnBld\')"><label for="barnBld">Barn</label><br>' + 
'	<input type="checkbox" id="harborBld" class="storageCheck" onchange="verifyBuildingSelected(\'23\', \'harborBld\')"><label for="harborBld">Harbor</label><br>' + 
'	<input type="checkbox" id="warehouseBld" class="storageCheck" onchange="verifyBuildingSelected(\'24\', \'warehouseBld\')"><label for="warehouseBld">Warehouse</label><br><br>' + 

'	<input type="checkbox" id="otherChecker"><label for="otherChecker" onclick="$(\'.otherCheck\').click();"><b>Other</b></label><br>' + 
'	<input type="checkbox" id="ampBld" class="otherCheck" onchange="verifyBuildingSelected(\'25\', \'ampBld\')"><label for="ampBld">Amphitheatre/Broadcast</label><br>' + 
'	<input type="checkbox" id="tradeBld" class="otherCheck" onchange="verifyBuildingSelected(\'26\', \'tradeBld\')"><label for="tradeBld">Tradepost</label><br>' + 
'	<input type="checkbox" id="chapelBld" class="otherCheck" onchange="verifyBuildingSelected(\'27\', \'chapelBld\')"><label for="chapelBld">Chapel</label><br>' + 
'	<input type="checkbox" id="templeBld" class="otherCheck" onchange="verifyBuildingSelected(\'28\', \'templeBld\')"><label for="templeBld">Temple</label><br>' + 
'	<input type="checkbox" id="mintBld" class="otherCheck" onchange="verifyBuildingSelected(\'29\', \'mintBld\')"><label for="mintBld">Mint</label><br>' + 
'	<input type="checkbox" id="zigguratBld" class="otherCheck" onchange="verifyBuildingSelected(\'30\', \'zigguratBld\')"><label for="zigguratBld">Ziggurat</label><br>' + 
'	<input type="checkbox" id="unicBld" class="otherCheck" onchange="verifyBuildingSelected(\'31\', \'unicBld\')"><label for="unicBld">Unicorn Pasture</label><br></br>' + 

'</div>'

function verifyBuildingSelected(buildingNumber, buildingCheckID) {
	var bldIsChecked = document.getElementById(buildingCheckID).checked;
	buildings[buildingNumber][1] = bldIsChecked;
}

$("#game").append(bldSelectAddition);

function closeMenu() {
	$("#menu").hide();
}

function openMenu() {
	$("#menu").toggle();
}

function openAToptions() {
	$("#menuAT").toggle();
}

function openABoptions() {
	$("#menuAB").toggle();
}

function openACoptions() {
	$("#menuAC").toggle();
}

function openAKoptions() {
	$("#menuAK").toggle();
}

function setFurValue() {
	furDerVal = $('#craftFur').val();
}

function clearScript() {
	$("#menu").remove();
	$("#menuAC").remove();
	$("#menuAK").remove();
	$("#menuAB").remove();
	$("#menuAT").remove();
	$("#scriptOptions").remove();
	clearInterval(runAllAutomation);
	htmlMenuAddition = null;
}

function nightMode() {
	for (var i = 0; i < resources.length; i++) {
	    var resource = gamePage.resPool.get(resources[i][0]);
	    if ((resource.value / resource.maxValue) > 0.99 && gamePage.workshop.getCraft(resources[i][1]).unlocked) {
		gamePage.craftAll(resources[i][1]);
	    }
	}
}

function switchNightMode ()
{
	nm = nm == 0 ? 1 : 0;
	
	if (nm == 1) {
		furDerVal = 4;
		nightModeMsg = "Night mode activated!";
	} else {
		furDerVal = 1;
		nightModeMsg = "Night mode deactivated!";
	}	
}

		// Trade automatically
function autoTrade() {
	
	var slab = gamePage.resPool.get('slab');
	if (gamePage.calendar.season == 1 && slab.value >= 50) {
		gamePage.diplomacy.tradeMultiple(game.diplomacy.get("zebras"), Math.floor(game.resPool.get("slab").value) / 50);
	}
}

function switchAutoTrade()
{
	at = at == 0 ? 1 : 0;
	
	if (at == 1) {
		tradeMsg = "Auto Trade activated!";
	} else {
		tradeMsg = "Auto Trade deactivated!";
	}	
}

//Craft the fur derivatives

function autoCraft() {
	
	for (var i = 0; i < furDerVal; i++) { // 1 2 3 4
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

function switchAutoCraft()
{
	ac = ac == 0 ? 1 : 0;
	
	if (ac == 1) {
		craftMsg = "Auto Craft activated!";
	} else {
		craftMsg = "Auto Craft deactivated!";
	}	
}

function autoKittens()
{
}

function switchAutoKittens()
{
	ak = ak == 0 ? 1 : 0;
	
	if (ak == 1) {
		kittensMsg = "Auto Kittens activated!";
	} else {
		kittensMsg = "Auto Kittens deactivated!";
	}	
}

function autoBuild()
{
	if (gamePage.ui.activeTabId == 'Bonfire') {

		var btn = gamePage.tabs[0].buttons;

		for (var z = 0; z <  32; z++) {
			if (buildings[z][1] != false) {
				if (gamePage.bld.getBuildingExt(buildingsList[z]).meta.unlocked) {
					for (i = 2 ;i < gamePage.tabs[0].buttons.length; i++) {
						try { 			
							if (btn[i].model.metadata.name == buildingsList[z]) {
								btn[i].controller.buyItem(btn[i].model, {}, function(result) {
									if (result) {btn[i].update();}
									});
								} 
						} catch(err) {
						console.log(err);
						}
					}
				}	
			}
		}

		if (gamePage.getResourcePerTick('coal') > 0.01 && steamOn < 1) {
			gamePage.bld.getBuildingExt('steamworks').meta.on = gamePage.bld.getBuildingExt('steamworks').meta.val;
			steamOn = 1;
		}

	}	
}

function switchAutoBuild()
{
	ab = ab == 0 ? 1 : 0;
	
	if (ab == 1) {
		buildMsg = "Auto Build activated!";
	} else {
		buildMsg = "Auto Build deactivated!";
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

function switchAutoParty()
{
	ap = ap == 0 ? 1 : 0;
	
	if (ap == 1) {
		partyMsg = "Party Time!";
	} else {
		partyMsg = "The Party is over!";
	}	
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

function switchAutoHunt()
{
	ah = ah == 0 ? 1 : 0;
	
	if (ah == 1) {
		huntMsg = "Auto Hunt activated!";
	} else {
		huntMsg = "Auto Hunt deactivated!";
	}	
}

// Auto praise the sun

function autoPraise() {
	
	var faith = gamePage.resPool.get('faith');
	if (game.bld.getBuildingExt('temple').meta.val > 0 && (faith.value / faith.maxValue) > 0.99) {
		gamePage.religion.praise();
	}
}

function switchAutoPraise()
{
	apr = apr == 0 ? 1 : 0;
	
	if (apr == 1) {
		praiseMsg = "Auto Praise activated!";
	} else {
		praiseMsg = "Auto Praise deactivated!";
	}	
}

function autoScience()
{
}

function switchAutoScience()
{
	as = as == 0 ? 1 : 0;
	
	if (as == 1) {
		scienceMsg = "Auto Science activated!";
	} else {
		scienceMsg = "Auto Science deactivated!";
	}	
}

function autoUpgrade()
{
}

function switchAutoUpgrade()
{
	au = au == 0 ? 1 : 0;
	
	if (au == 1) {
		upgradeMsg = "Auto Upgrade activated!";
	} else {
		upgradeMsg = "Auto Upgrade deactivated!";
	}	
}

clearInterval(runAllAutomation);
var runAllAutomation = setInterval(function() {  
	
	if (apr == 1){
		autoPraise();
	}
	if (nm == 1){
		nightMode();
	}
	if (at == 1){
		autoTrade();
	}
	if (ac == 1){
		autoCraft();
	}
	if (ak == 1){
		autoKittens();
	}
	if (ab == 1){
		autoBuild();
	}
	if (as == 1){
		autoScience();
	}
	if (au == 1){
		autoUpgrade();
	}
	
	//day
	if (gamePage.timer.ticksTotal % 3 === 0) {
		if (!game.workshop.get("seti").researched) {
			autoObserve();
		}
		if (ah == 1){
			autoHunt();
		}
	} 
	
	if (gamePage.timer.ticksTotal % 25 === 0) {
		if (ap == 1){
			autoParty();
		}
	}
	
}, 200);
