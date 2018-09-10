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
var spaceMsg = "Auto Space activated!";
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
var aspace = 0;
var steamOn = 0;
var programBuild = false;

var buildings = [
        ["Field", false], 
	["Pasture", false],
        ["Aqueduct", false], 

        ["Hut", false], 
	["Log House", false],
        ["Mansion", false],

        ["Library", false], 
	["Academy", false], 
	["Observatory", false], 
        ["Bio Lab", false], 

        ["Barn", false],
        ["Warehouse", false],  
	["Harbour", false], 
		
        ["Mine", false],
        ["Quarry", false], 
	["Lumber Mill", false], 
	["Oil Well", false], 
        ["Accelerator", false],  

        ["Steamworks", false], 
	["Magneto", false], 
	["Smelter", false], 
	["Calciner", false],
        ["Factory", false], 
	["Reactor", false],

        ["Amphitheatre", false],
        ["Chapel", false], 
	["Temple", false],

	["Workshop", false], 
	["Tradepost", false],
        ["Mint", false],
        ["Unicorn Pasture", false], 

	["Ziggurat", false],
        ["Chronosphere", false],
        ["AI Core", false],



	["Space Elevator", false, 0],
	["Satellite", false, 0],
	["Space Station", false, 0],

	["Lunar Outpost", false, 1],
	["Moon Base", false, 1],

	["Planet Cracker", false, 2],
	["Hydraulic Fracturer", false, 2],
	["Spice Refinery", false, 2],

	["Research Vessel", false, 3],
	["Orbital Array", false, 3],

	["Sunlifter", false, 4],
	["Containment Chamber", false, 4],
        ["Heatsink", false, 4],
        ["Sunforge", false, 4],

	["Cryostation", false, 5],

	["Space Beacon", false, 6],

	["Terraforming Station", false, 7],
	["Hydroponics", false, 7],

        ["HR Harvester", false, 8],

        ["Entanglement Station", false, 9],

	["Tectonic", false, 10]
];	

var buildingsList = [
        ["field"], 
	["pasture"], 
	["aqueduct"], 

	["hut"], 
	["logHouse"], 
	["mansion"],
        
        ["library"], 
	["academy"], 
	["observatory"],
        ["biolab"],

        ["barn"], 
	["warehouse"], 
        ["harbor"], 

        ["mine"],  
	["quarry"],
        ["lumberMill"], 
        ["oilWell"], 
        ["accelerator"], 

        ["steamworks"], 
	["magneto"], 
	["smelter"], 
	["calciner"], 
        ["factory"], 
	["reactor"], 

	["amphitheatre"], 
	["chapel"], 
	["temple"],

	["workshop"], 
	["tradepost"],
        ["mint"], 
	["unicornPasture"],

        ["ziggurat"],
        ["chronosphere"],
        ["aiCore"],



	["spaceElevator"],
	["sattelite"],
	["spaceStation"],

	["moonOutpost"],
	["moonBase"],

	["planetCracker"],
	["hydrofracturer"],
	["spiceRefinery"],

	["researchVessel"],
	["orbitalArray"],

	["sunlifter"],
	["containmentChamber"],
        ["heatsink"],
        ["sunforge"],

	["cryostation"],

	["spaceBeacon"],

        ["terraformingStation"],
        ["hydroponics"],

        ["hrHarvester"],

        ["entangler"],

	["tectonic"]
];		

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

'<div id="menu" style="display:none; margin-top:-450px; margin-left:-100px; width:220px; height:375px !important" class="dialog help">' + 
'<a href="#" class="close" onclick="closeMenu();" style="position: absolute; top: 10px; right: 15px;">close</a>' + 

'<input type="button" value="Stop Script" style="position: absolute; left: 15px;" id="stopScript" onclick="clearInterval(clearScript()); gamePage.msg(deadScript);">' +
'<input type="button" value="NightMode" style="position: absolute; left: 15px; top: 50px; width: 130px;" id="nightMode" onclick="switchNightMode(); gamePage.msg(nightModeMsg);">' +    

'<input type="button" value="AutoTrade" style="position: absolute; left: 15px; top: 100px; width: 130px;" id="autoTrade" onclick="switchAutoTrade(); gamePage.msg(tradeMsg);">' +      
'<input type="button" value="AutoBuild" style="position: absolute; left: 15px; top: 130px; width: 130px;" id="autoBuild" onclick="switchAutoBuild(); gamePage.msg(buildMsg);">' +      
'<input type="button" value="AutoSpace" style="position: absolute; left: 15px; top: 160px; width: 130px;" id="autoSpace" onclick="switchAutoSpace(); gamePage.msg(spaceMsg);">' +      
'<input type="button" value="AutoCraft" style="position: absolute; left: 15px; top: 190px; width: 130px;" id="autoCraft" onclick="switchAutoCraft(); gamePage.msg(craftMsg);">' +      
'<input type="button" value="AutoKittens" style="position: absolute; left: 15px; top: 220px; width: 130px;" id="autoKittens" onclick="switchAutoKittens(); gamePage.msg(kittensMsg);">' +  
'<input type="button" value="AutoHunt" style="position: absolute; left: 15px; top: 250px; width: 130px;" id="autoHunt" onclick="switchAutoHunt(); gamePage.msg(huntMsg);">' +  
'<input type="button" value="AutoPraise" style="position: absolute; left: 15px; top: 280px; width: 130px;" id="autoPraise" onclick="switchAutoPraise(); gamePage.msg(praiseMsg);">' +      
'<input type="button" value="AutoParty" style="position: absolute; left: 15px; top: 310px; width: 130px;" id="autoParty" onclick="switchAutoParty(); gamePage.msg(partyMsg);">' +  
'<input type="button" value="AutoUpgrade" style="position: absolute; left: 15px; top: 340px; width: 130px;" id="autoUpgrade" onclick="switchAutoUpgrade(); gamePage.msg(upgradeMsg);">' +  
'<input type="button" value="AutoScience" style="position: absolute; left: 15px; top: 370px; width: 130px;" id="autoScience" onclick="switchAutoScience(); gamePage.msg(scienceMsg);">' +      



'<input type="button" value="+" style="position: absolute; left: 150px; top: 100px; width: auto;" id="autoTradingOptions" onclick="openAToptions();">' +      
'<input type="button" value="+" style="position: absolute; left: 150px; top: 130px; width: auto;" id="autoBuildingOptions" onclick="openABoptions();">' +    
'<input type="button" value="+" style="position: absolute; left: 150px; top: 160px; width: auto;" id="autoSpaceOptions" onclick="openABSoptions();">' +    
'<input type="button" value="+" style="position: absolute; left: 150px; top: 190px; width: auto;" id="autoCraftingOptions" onclick="openACoptions();">' +   
'<input type="button" value="+" style="position: absolute; left: 150px; top: 220px; width: auto;" id="autoKittensOptions" onclick="openAKoptions();">' +
    
'</div>' +
'</div>'

$("#footerLinks").append(htmlMenuAddition);

var bldSelectAddition = '<div id="menuAB" style="display:none; margin-top:-360px; width:200px; z-index: 1;" class="dialog help">' + 
'<a href="#" onclick="$(\'#menuAB\').hide(); $(\'#menuASpace\').toggle();" style="position: absolute; top: 10px; left: 15px;">Space</a>' + 
'<a href="#" onclick="$(\'#menuAB\').hide();" style="position: absolute; top: 10px; right: 15px;">close</a>' + 

'	<br><input type="checkbox" id="prodChecker"><label for="prodChecker" onclick="$(\'.prodCheck\').click();"><b>Food Production</b></label><br>' + 
'	<input type="checkbox" id="fieldBld" class="prodCheck" onchange="verifyBuildingSelected(\'0\', \'fieldBld\')"><label for="fieldBld">Catnip Field</label><br>' + 
'	<input type="checkbox" id="pastureBld" class="prodCheck" onchange="verifyBuildingSelected(\'1\', \'pastureBld\')"><label for="pastureBld">Pasture/Solar</label><br>' + 
'	<input type="checkbox" id="aqueductBld" class="prodCheck" onchange="verifyBuildingSelected(\'2\', \'aqueductBld\')"><label for="aqueductBld">Aqueduct/Hydro</label><br>' + 

'	<input type="checkbox" id="hutChecker"><label for="hutChecker" onclick="$(\'.hutCheck\').click();"><b>Population</b></label><br>' + 
'	<input type="checkbox" id="hutBld" class="hutCheck" onchange="verifyBuildingSelected(\'3\', \'hutBld\');"><label for="hutBld">Hut</label><br>' + 
'	<input type="checkbox" id="houseBld" class="hutCheck" onchange="verifyBuildingSelected(\'4\', \'houseBld\')"><label for="houseBld">Log House</label><br>' + 
'	<input type="checkbox" id="mansionBld" class="hutCheck" onchange="verifyBuildingSelected(\'5\', \'mansionBld\')"><label for="mansionBld">Mansion</label><br><br>' +

'	<input type="checkbox" id="scienceChecker"><label for="scienceChecker" onclick="$(\'.scienceCheck\').click();"><b>Science</b></label><br>' + 
'	<input type="checkbox" id="libraryBld" class="scienceCheck" onchange="verifyBuildingSelected(\'6\', \'libraryBld\')"><label for="libraryBld">Library</label><br>' + 
'	<input type="checkbox" id="academyBld" class="scienceCheck" onchange="verifyBuildingSelected(\'7\', \'academyBld\')"><label for="academyBld">Academy</label><br>' + 
'	<input type="checkbox" id="observatoryBld" class="scienceCheck" onchange="verifyBuildingSelected(\'8\', \'observatoryBld\')"><label for="observatoryBld">Observatory</label><br><br>' + 
'	<input type="checkbox" id="labBld" class="scienceCheck" onchange="verifyBuildingSelected(\'9\', \'labBld\')"><label for="labBld">Bio Lab</label><br><br>' +

'	<input type="checkbox" id="storageChecker"><label for="storageChecker" onclick="$(\'.storageCheck\').click();"><b>Storage</b></label><br>' + 
'	<input type="checkbox" id="barnBld" class="storageCheck" onchange="verifyBuildingSelected(\'10\', \'barnBld\')"><label for="barnBld">Barn</label><br>' + 
'	<input type="checkbox" id="warehouseBld" class="storageCheck" onchange="verifyBuildingSelected(\'11\', \'warehouseBld\')"><label for="warehouseBld">Warehouse</label><br><br>' + 
'	<input type="checkbox" id="harborBld" class="storageCheck" onchange="verifyBuildingSelected(\'12\', \'harborBld\')"><label for="harborBld">Harbor</label><br>' + 

'	<input type="checkbox" id="resourcesChecker"><label for="resourcesChecker" onclick="$(\'.resourcesCheck\').click();"><b>Resources</b></label><br>' + 
'	<input type="checkbox" id="mineBld" class="resourcesCheck" onchange="verifyBuildingSelected(\'13\', \'mineBld\')"><label for="mineBld">Mine</label><br>' + 
'	<input type="checkbox" id="quarryBld" class="resourcesCheck" onchange="verifyBuildingSelected(\'14\', \'quarryBld\')"><label for="quarryBld">Quarry</label><br><br>' + 
'	<input type="checkbox" id="lumberBld" class="resourcesCheck" onchange="verifyBuildingSelected(\'15\', \'lumberBld\')"><label for="lumberBld">Lumber Mill</label><br>' + 
'	<input type="checkbox" id="oilBld" class="resourcesCheck" onchange="verifyBuildingSelected(\'16\', \'oilBld\')"><label for="oilBld">Oil Well</label><br>' + 
'	<input type="checkbox" id="acceleratorBld" class="resourcesCheck" onchange="verifyBuildingSelected(\'17\', \'acceleratorBld\')"><label for="acceleratorBld">Accelerator</label><br>' + 

'	<input type="checkbox" id="industryChecker"><label for="industryChecker" onclick="$(\'.industryCheck\').click();"><b>Industry</b></label><br>' + 
'	<input type="checkbox" id="steamBld" class="industryCheck" onchange="verifyBuildingSelected(\'18\', \'steamBld\')"><label for="steamBld">Steamworks</label><br>' + 
'	<input type="checkbox" id="magnetoBld" class="industryCheck" onchange="verifyBuildingSelected(\'19\', \'magnetoBld\')"><label for="magnetoBld">Magneto</label><br><br>' + 
'	<input type="checkbox" id="smelterBld" class="industryCheck" onchange="verifyBuildingSelected(\'20\', \'smelterBld\')"><label for="smelterBld">Smelter</label><br>' + 
'	<input type="checkbox" id="calcinerBld" class="industryCheck" onchange="verifyBuildingSelected(\'21\', \'calcinerBld\')"><label for="calcinerBld">Calciner</label><br>' + 
'	<input type="checkbox" id="factoryBld" class="industryCheck" onchange="verifyBuildingSelected(\'22\', \'factoryBld\')"><label for="factoryBld">Factory</label><br><br>' + 
'	<input type="checkbox" id="reactorBld" class="industryCheck" onchange="verifyBuildingSelected(\'23\', \'reactorBld\')"><label for="reactorBld">Reactor</label><br>' + 

'	<input type="checkbox" id="cultureChecker"><label for="cultureChecker" onclick="$(\'.cultureCheck\').click();"><b>Culture</b></label><br>' + 
'	<input type="checkbox" id="ampBld" class="cultureCheck" onchange="verifyBuildingSelected(\'24\', \'ampBld\')"><label for="ampBld">Amphitheatre/Broadcast</label><br>' + 
'	<input type="checkbox" id="chapelBld" class="cultureCheck" onchange="verifyBuildingSelected(\'25\', \'chapelBld\')"><label for="chapelBld">Chapel</label><br>' + 
'	<input type="checkbox" id="templeBld" class="cultureCheck" onchange="verifyBuildingSelected(\'26\', \'templeBld\')"><label for="templeBld">Temple</label><br>' + 

'	<input type="checkbox" id="otherChecker"><label for="otherChecker" onclick="$(\'.otherCheck\').click();"><b>Other</b></label><br>' + 
'	<input type="checkbox" id="workshopBld" class="otherCheck" onchange="verifyBuildingSelected(\'27\', \'workshopBld\')"><label for="workshopBld">Workshop</label><br>' + 
'	<input type="checkbox" id="tradeBld" class="otherCheck" onchange="verifyBuildingSelected(\'28\', \'tradeBld\')"><label for="tradeBld">Tradepost</label><br>' + 
'	<input type="checkbox" id="mintBld" class="otherCheck" onchange="verifyBuildingSelected(\'29\', \'mintBld\')"><label for="mintBld">Mint</label><br>' + 
'	<input type="checkbox" id="unicBld" class="otherCheck" onchange="verifyBuildingSelected(\'30\', \'unicBld\')"><label for="unicBld">Unicorn Pasture</label><br></br>' + 

'	<input type="checkbox" id="megaStructuresChecker"><label for="megaStructuresChecker" onclick="$(\'.megaStructuresCheck\').click();"><b>Mega Structures</b></label><br>' + 
'	<input type="checkbox" id="zigguratBld" class="megaStructuresCheck" onchange="verifyBuildingSelected(\'31\', \'zigguratBld\')"><label for="zigguratBld">Ziggurat</label><br>' + 
'	<input type="checkbox" id="chronospereBld" class="megaStructuresCheck" onchange="verifyBuildingSelected(\'32\', \'zigguratBld\')"><label for="zigguratBld">Ziggurat</label><br>' + 
'	<input type="checkbox" id="aiCoreBld" class="megaStructuresCheck" onchange="verifyBuildingSelected(\'33\', \'zigguratBld\')"><label for="zigguratBld">Ziggurat</label><br>' +

'</div>'

var spaceSelectAddition = '<div id="spaceSelect" style="display:none; margin-top:-360px; width:200px; z-index: 1;" class="dialog help">' + 
'<a href="#" onclick="$(\'#menuASpace\').hide(); $(\'#menuAB\').toggle();" style="position: absolute; top: 10px; left: 15px;">Cath</a>' + 
'<a href="#" onclick="$(\'#menuASpace\').hide();" style="position: absolute; top: 10px; right: 15px;">close</a>' + 

'	</br><input type="checkbox" id="programs" class="programs" onchange="programBuild = this.checked;"><label for="programs">Programs</label></br></br>' + 

'	<input type="checkbox" id="spaceChecker"><label for="spaceChecker" onclick="$(\'.spaceCheck\').click();"><b>Space</b></label></br>' + 
'	<input type="checkbox" id="elevSBld" class="spaceCheck" onchange="verifyBuildingSelected(\'34\', \'elevSBld\');"><label for="elevSBld">Space Elevator</label></br>' + 
'	<input type="checkbox" id="satSBld" class="spaceCheck" onchange="verifyBuildingSelected(\'35\', \'satSBld\');"><label for="satSBld">Satellite</label></br>' + 
'	<input type="checkbox" id="statSBld" class="spaceCheck" onchange="verifyBuildingSelected(\'36\', \'statSBld\');"><label for="statSBld">Space Station</label></br></br>' + 

'	<input type="checkbox" id="moonChecker"><label for="moonChecker" onclick="$(\'.moonCheck\').click();"><b>Moon</b></label></br>' + 
'	<input type="checkbox" id="outSBld" class="moonCheck" onchange="verifyBuildingSelected(\'35\', \'outSBld\');"><label for="outSBld">Lunar Outpost</label></br>' + 
'	<input type="checkbox" id="baseSBld" class="moonCheck" onchange="verifyBuildingSelected(\'36\', \'baseSBld\');"><label for="baseSBld">Moon Base</label></br></br>' + 

'	<input type="checkbox" id="duneChecker"><label for="duneChecker" onclick="$(\'.duneCheck\').click();"><b>Dune</b></label></br>' + 
'	<input type="checkbox" id="crackSBld" class="duneCheck" onchange="verifyBuildingSelected(\'37\', \'crackSBld\');"><label for="crackSBld">Planet Cracker</label></br>' + 
'	<input type="checkbox" id="fracSBld" class="duneCheck" onchange="verifyBuildingSelected(\'38\', \'fracSBld\');"><label for="fracSBld">Hydraulic Fracturer</label></br>' + 
'	<input type="checkbox" id="spiceSBld" class="duneCheck" onchange="verifyBuildingSelected(\'39\', \'spiceSBld\');"><label for="spiceSBld">Spice Refinery</label></br></br>' + 

'	<input type="checkbox" id="piscineChecker"><label for="piscineChecker" onclick="$(\'piscineCheck\').click();"><b>Piscine</b></label></br>' + 
'	<input type="checkbox" id="reVeSBld" class="piscineCheck" onchange="verifyBuildingSelected(\'40\', \'reVeSBld\');"><label for="reVeSBld">Research Vessel</label></br>' + 
'	<input type="checkbox" id="orbSBld" class="piscineCheck" onchange="verifyBuildingSelected(\'41\', \'orbSBld\');"><label for="orbSBld">Orbital Array</label></br></br>' + 

'	<input type="checkbox" id="heliosChecker"><label for="heliosChecker" onclick="$(\'.heliosCheck\').click();"><b>Helios</b></label></br>' + 
'	<input type="checkbox" id="sunSBld" class="heliosCheck" onchange="verifyBuildingSelected(\'42\', \'sunSBld\');"><label for="sunSBld">Sunlifter</label></br>' + 
'	<input type="checkbox" id="contSBld" class="heliosCheck" onchange="verifyBuildingSelected(\'43\', \'contSBld\');"><label for="contSBld">Containment Chamber</label></br></br>' + 
'	<input type="checkbox" id="heatSinkSBld" class="heliosCheck" onchange="verifyBuildingSelected(\'43\', \'heatSinkSBld\');"><label for="heatSinkSBld">Heatsink</label></br></br>' + 
'	<input type="checkbox" id="sunForgeSBld" class="heliosCheck" onchange="verifyBuildingSelected(\'43\', \'sunForgeSBld\');"><label for="sunForgeSBld">Sunforge</label></br></br>' + 

'	<input type="checkbox" id="terminusChecker"><label for="terminusChecker" onclick="$(\'.terminusCheck\').click();"><b>Terminus</b></label></br>' + 
'	<input type="checkbox" id="crySBld" class="terminusCheck" onchange="verifyBuildingSelected(\'44\', \'crySBld\');"><label for="crySBld">Cryostation</label></br></br>' + 

'	<input type="checkbox" id="kairoChecker"><label for="kairoChecker" onclick="$(\'.kairoCheck\').click();"><b>Kairo</b></label></br>' + 
'	<input type="checkbox" id="beacSBld" class="kairoCheck" onchange="verifyBuildingSelected(\'45\', \'beacSBld\');"><label for="beacSBld">Space Beacon</label></br></br>' + 

'	<input type="checkbox" id="yarnChecker"><label for="yarnChecker" onclick="$(\'.yarnCheck\').click();"><b>Yarn</b></label></br>' + 
'	<input type="checkbox" id="terrSBld" class="yarnCheck" onchange="verifyBuildingSelected(\'46\', \'terrSBld\');"><label for="terrSBld">Terraforming Station</label></br>' + 
'	<input type="checkbox" id="hydrSBld" class="centaurusCheck" onchange="verifyBuildingSelected(\'47\', \'hydrSBld\');"><label for="hydrSBld">Hydroponics</label></br></br>' + 

'	<input type="checkbox" id="umbraChecker"><label for="umbraChecker" onclick="$(\'.umbraCheck\').click();"><b>Umbra</b></label></br>' + 
'	<input type="checkbox" id="hrSBld" class="umbraCheck" onchange="verifyBuildingSelected(\'48\', \'hrSBld\');"><label for="hrSBld">HR Harvester</label></br></br>' + 

'	<input type="checkbox" id="charonChecker"><label for="charonChecker" onclick="$(\'.charonCheck\').click();"><b>Charon</b></label></br>' + 
'	<input type="checkbox" id="esSBld" class="charonCheck" onchange="verifyBuildingSelected(\'48\', \'esSBld\');"><label for="esSBld">Entanglement Station</label></br></br>' + 

'	<input type="checkbox" id="centaurusChecker"><label for="centaurusChecker" onclick="$(\'.centaurusCheck\').click();"><b>Centaurus System</b></label></br>' + 
'	<input type="checkbox" id="tecSBld" class="centaurusCheck" onchange="verifyBuildingSelected(\'48\', \'tecSBld\');"><label for="tecSBld">Tectonic</label></br></br>' + 

'	<input type="checkbox" id="furthestRingChecker"><label for="furthestRingChecker" onclick="$(\'.furthestRingCheck\').click();"><b>Furthest Ring</b></label></br>' +
'</div>'

function verifyBuildingSelected(buildingNumber, buildingCheckID) {
	var bldIsChecked = document.getElementById(buildingCheckID).checked;
	buildings[buildingNumber][1] = bldIsChecked;
}

$("#game").append(bldSelectAddition);
$("#game").append(spaceSelectAddition);

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

function openABSoptions() {
	$("#menuASpace").toggle();
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

		for (var z = 0; z < 34; z++) { // total buildings
			if (buildings[z][1] != false) {
				if (gamePage.bld.getBuildingExt(buildingsList[z]).meta.unlocked) {
					for (i = 2 ;i < gamePage.tabs[0].buttons.length; i++) { // 0 gather 1 refine
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

		// Build space stuff automatically
function autoSpace() {		
if (autoCheck[0] != "false") {	
	
	var origTab = gamePage.ui.activeTabId;	
		
		// Build space buildings
	for (var z = 34; z < buildings.length; z++) {
		if (buildings[z][1] != false) {		
			
		var spBuild = gamePage.tabs[6].planetPanels[buildings[z][2]].children;
		
			try { 			
				for (i = 0 ;i < spBuild.length; i++) {
					if (spBuild[i].model.metadata.name == buildingsList[z]) {
						
						if (gamePage.ui.activeTabId != "Space") {
							gamePage.ui.activeTabId = 'Space'; gamePage.render(); // Change the tab so that we can build
						}
						
						spBuild[i].controller.buyItem(spBuild[i].model, {}, function(result) {
							if (result) {spBuild[i].update();}
							});
					} 
				}		
			} catch(err) {
			console.log(err);
			}
			
		}
	}
	
		// Build space programs
	if (programBuild != false) {
		var spcProg = gamePage.tabs[6].GCPanel.children;
		for (var i = 0; i < spcProg.length; i++) {
			if (spcProg[i].model.metadata.unlocked && spcProg[i].model.on == 0) {
				try { 		
					
					if (gamePage.ui.activeTabId != "Space") {
					gamePage.ui.activeTabId = 'Space'; gamePage.render(); // Change the tab so that we can build
					}
					
					spcProg[i].controller.buyItem(spcProg[i].model, {}, function(result) {
						if (result) {spcProg[i].update();}
						});
				} catch(err) {
				console.log(err);
				}
			}
		}
	}
	
	      if (origTab != gamePage.ui.activeTabId) {
        gamePage.ui.activeTabId = origTab; gamePage.render(); // Return to the original tab
		  }
	
}
}			

function switchAutoSpace()
{
	aspace = aspace == 0 ? 1 : 0;
	
	if (aspace == 1) {
		spaceMsg = "Auto Space activated!";
	} else {
		spaceMsg = "Auto Space deactivated!";
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
	if (aspace == 1){
		autoSpace();
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
