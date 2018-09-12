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
var ratioScaffold = 0;
var ratioAlloy = 0;
var ratioGear = 0;
var ratioConcrate = 0;
var ratioTradeship = 0;
var ratioMegalith = 0;
var ratioTanker = 0;

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

var crafts = [
       	["catnip", "wood", 50, false],
        ["wood", "beam", 175, false],
        ["minerals", "slab", 250, false],
        ["coal", "steel", 100, false],
        ["iron", "plate", 125, false],
        ["oil", "kerosene", 7500, false],
        ["uranium", "thorium", 250, false],
	["unobtainium", "eludium", 1000, false],

	["beam", "scaffold", 50, false],
        ["steel", "alloy", 75, false],
	["steel", "gear", 15, false],
	["slab", "concrate", 2500, false],
	["scaffold", "tradeship", 100, false],
	["slab", "megalith", 50, false],
	["tradeship", "tanker", 200, false],
	["furs", "parchment", 175, false],
	["parchment", "manuscript", 25, false],
	["manuscript", "compedium", 50, false],
	["compedium", "blueprint", 25, false]
];

var census = [
	["woodcutter",false, 0],
	["farmer",false, 0],
	["scholar",false, 0],
	["hunter",false, 0],
	["miner",false, 0],
	["priest",false, 0],
	["geologist",false, 0],
	["engineer",false, 0]
];

var htmlMenuAddition = '<div id="autokittens" class="column">' +

'<a id="scriptOptions" onclick="openMenu()"> | AutoKittens </a>' + 

'<div id="menu" style="display:none; margin-top:-450px; margin-left:-100px; width:220px; height:375px !important" class="dialog help">' + 
'<a href="#" class="close" onclick="closeMenu();" style="position: absolute; top: 10px; right: 15px;">close</a>' + 

'<input type="button" value="Stop Script" style="position: absolute; left: 15px; top: 20px; width: 130px;" id="stopScript" onclick="clearInterval(clearScript()); gamePage.msg(deadScript);">' +
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

var bldSelectAddition = '<div id="menuAB" style="display:none; margin-top:-260px; height: 570px !important; margin-left: 100px; width:400px; z-index: 1;" class="dialog help">' + 
'<a href="#" onclick="$(\'#menuAB\').hide(); $(\'#menuASpace\').toggle();" style="position: absolute; top: 10px; left: 15px;">Space</a>' + 
'<a href="#" onclick="$(\'#menuAB\').hide();" style="position: absolute; top: 10px; right: 15px;">close</a>' + 

'	<div id="leftMenuAB" style="position: absolute; top: 50px; left: 40px;">' +    
'	<br><input type="checkbox" id="prodChecker"><label for="prodChecker" onclick="$(\'.prodCheck\').click();"><b>Food Production</b></label><br>' + 
'	<input type="checkbox" id="fieldBld" class="prodCheck" onchange="verifyBuildingSelected(\'0\', \'fieldBld\')"><label for="fieldBld">Catnip Field</label><br>' + 
'	<input type="checkbox" id="pastureBld" class="prodCheck" onchange="verifyBuildingSelected(\'1\', \'pastureBld\')"><label for="pastureBld">Pasture / Solar</label><br>' + 
'	<input type="checkbox" id="aqueductBld" class="prodCheck" onchange="verifyBuildingSelected(\'2\', \'aqueductBld\')"><label for="aqueductBld">Aqueduct / Hydro</label><br><br>' + 

'	<input type="checkbox" id="hutChecker"><label for="hutChecker" onclick="$(\'.hutCheck\').click();"><b>Population</b></label><br>' + 
'	<input type="checkbox" id="hutBld" class="hutCheck" onchange="verifyBuildingSelected(\'3\', \'hutBld\');"><label for="hutBld">Hut</label><br>' + 
'	<input type="checkbox" id="houseBld" class="hutCheck" onchange="verifyBuildingSelected(\'4\', \'houseBld\')"><label for="houseBld">Log House</label><br>' + 
'	<input type="checkbox" id="mansionBld" class="hutCheck" onchange="verifyBuildingSelected(\'5\', \'mansionBld\')"><label for="mansionBld">Mansion</label><br><br>' +

'	<input type="checkbox" id="scienceChecker"><label for="scienceChecker" onclick="$(\'.scienceCheck\').click();"><b>Science</b></label><br>' + 
'	<input type="checkbox" id="libraryBld" class="scienceCheck" onchange="verifyBuildingSelected(\'6\', \'libraryBld\')"><label for="libraryBld">Library</label><br>' + 
'	<input type="checkbox" id="academyBld" class="scienceCheck" onchange="verifyBuildingSelected(\'7\', \'academyBld\')"><label for="academyBld">Academy</label><br>' + 
'	<input type="checkbox" id="observatoryBld" class="scienceCheck" onchange="verifyBuildingSelected(\'8\', \'observatoryBld\')"><label for="observatoryBld">Observatory</label><br>' + 
'	<input type="checkbox" id="labBld" class="scienceCheck" onchange="verifyBuildingSelected(\'9\', \'labBld\')"><label for="labBld">Bio Lab</label><br><br>' +

'	<input type="checkbox" id="storageChecker"><label for="storageChecker" onclick="$(\'.storageCheck\').click();"><b>Storage</b></label><br>' + 
'	<input type="checkbox" id="barnBld" class="storageCheck" onchange="verifyBuildingSelected(\'10\', \'barnBld\')"><label for="barnBld">Barn</label><br>' + 
'	<input type="checkbox" id="warehouseBld" class="storageCheck" onchange="verifyBuildingSelected(\'11\', \'warehouseBld\')"><label for="warehouseBld">Warehouse</label><br>' + 
'	<input type="checkbox" id="harborBld" class="storageCheck" onchange="verifyBuildingSelected(\'12\', \'harborBld\')"><label for="harborBld">Harbor</label><br><br>' + 

'	<input type="checkbox" id="resourcesChecker"><label for="resourcesChecker" onclick="$(\'.resourcesCheck\').click();"><b>Resources</b></label><br>' + 
'	<input type="checkbox" id="mineBld" class="resourcesCheck" onchange="verifyBuildingSelected(\'13\', \'mineBld\')"><label for="mineBld">Mine</label><br>' + 
'	<input type="checkbox" id="quarryBld" class="resourcesCheck" onchange="verifyBuildingSelected(\'14\', \'quarryBld\')"><label for="quarryBld">Quarry</label><br>' + 
'	<input type="checkbox" id="lumberBld" class="resourcesCheck" onchange="verifyBuildingSelected(\'15\', \'lumberBld\')"><label for="lumberBld">Lumber Mill</label><br>' + 
'	<input type="checkbox" id="oilBld" class="resourcesCheck" onchange="verifyBuildingSelected(\'16\', \'oilBld\')"><label for="oilBld">Oil Well</label><br>' + 
'	<input type="checkbox" id="acceleratorBld" class="resourcesCheck" onchange="verifyBuildingSelected(\'17\', \'acceleratorBld\')"><label for="acceleratorBld">Accelerator</label><br><br>' + 

'	</div><div id="rightMenuAB" style="position: absolute; top: 70px; right: 30px;">' +    
'	<input type="checkbox" id="industryChecker"><label for="industryChecker" onclick="$(\'.industryCheck\').click();"><b>Industry</b></label><br>' + 
'	<input type="checkbox" id="steamBld" class="industryCheck" onchange="verifyBuildingSelected(\'18\', \'steamBld\')"><label for="steamBld">Steamworks</label><br>' + 
'	<input type="checkbox" id="magnetoBld" class="industryCheck" onchange="verifyBuildingSelected(\'19\', \'magnetoBld\')"><label for="magnetoBld">Magneto</label><br>' + 
'	<input type="checkbox" id="smelterBld" class="industryCheck" onchange="verifyBuildingSelected(\'20\', \'smelterBld\')"><label for="smelterBld">Smelter</label><br>' + 
'	<input type="checkbox" id="calcinerBld" class="industryCheck" onchange="verifyBuildingSelected(\'21\', \'calcinerBld\')"><label for="calcinerBld">Calciner</label><br>' + 
'	<input type="checkbox" id="factoryBld" class="industryCheck" onchange="verifyBuildingSelected(\'22\', \'factoryBld\')"><label for="factoryBld">Factory</label><br>' + 
'	<input type="checkbox" id="reactorBld" class="industryCheck" onchange="verifyBuildingSelected(\'23\', \'reactorBld\')"><label for="reactorBld">Reactor</label><br><br>' + 

'	<input type="checkbox" id="cultureChecker"><label for="cultureChecker" onclick="$(\'.cultureCheck\').click();"><b>Culture</b></label><br>' + 
'	<input type="checkbox" id="ampBld" class="cultureCheck" onchange="verifyBuildingSelected(\'24\', \'ampBld\')"><label for="ampBld">Amphitheatre / Broadcast</label><br>' + 
'	<input type="checkbox" id="chapelBld" class="cultureCheck" onchange="verifyBuildingSelected(\'25\', \'chapelBld\')"><label for="chapelBld">Chapel</label><br>' + 
'	<input type="checkbox" id="templeBld" class="cultureCheck" onchange="verifyBuildingSelected(\'26\', \'templeBld\')"><label for="templeBld">Temple</label><br><br>' + 

'	<input type="checkbox" id="otherChecker"><label for="otherChecker" onclick="$(\'.otherCheck\').click();"><b>Other</b></label><br>' + 
'	<input type="checkbox" id="workshopBld" class="otherCheck" onchange="verifyBuildingSelected(\'27\', \'workshopBld\')"><label for="workshopBld">Workshop</label><br>' + 
'	<input type="checkbox" id="tradeBld" class="otherCheck" onchange="verifyBuildingSelected(\'28\', \'tradeBld\')"><label for="tradeBld">Tradepost</label><br>' + 
'	<input type="checkbox" id="mintBld" class="otherCheck" onchange="verifyBuildingSelected(\'29\', \'mintBld\')"><label for="mintBld">Mint</label><br>' + 
'	<input type="checkbox" id="unicBld" class="otherCheck" onchange="verifyBuildingSelected(\'30\', \'unicBld\')"><label for="unicBld">Unicorn Pasture</label><br></br>' + 

'	<input type="checkbox" id="megaStructuresChecker"><label for="megaStructuresChecker" onclick="$(\'.megaStructuresCheck\').click();"><b>Mega Structures</b></label><br>' + 
'	<input type="checkbox" id="zigguratBld" class="megaStructuresCheck" onchange="verifyBuildingSelected(\'31\', \'zigguratBld\')"><label for="zigguratBld">Ziggurat</label><br>' + 
'	<input type="checkbox" id="chronosphereBld" class="megaStructuresCheck" onchange="verifyBuildingSelected(\'32\', \'chronosphereBld\')"><label for="chronospereBld">Chronosphere</label><br>' + 
'	<input type="checkbox" id="aiCoreBld" class="megaStructuresCheck" onchange="verifyBuildingSelected(\'33\', \'aiCoreBld\')"><label for="aiCoreBld">AI Core</label><br>' +

'</div>'

var spaceSelectAddition = '<div id="menuASpace" style="display:none; margin-top:-260px; height: 500px !important; margin-left: 100px; width:400px; z-index: 1;" class="dialog help">' + 
'<a href="#" onclick="$(\'#menuASpace\').hide(); $(\'#menuAB\').toggle();" style="position: absolute; top: 10px; left: 15px;">Cath</a>' + 
'<a href="#" onclick="$(\'#menuASpace\').hide();" style="position: absolute; top: 10px; right: 15px;">close</a>' + 

'	</br><input type="checkbox" id="programs" class="programs" onchange="programBuild = this.checked;"><label for="programs"><b>Programs</b></label></br></br>' + 
'       <div id="leftMenuASpace" style="position: absolute; top: 90px; left: 40px;">' +
'	<input type="checkbox" id="spaceChecker"><label for="spaceChecker" onclick="$(\'.spaceCheck\').click();"><b>Space</b></label></br>' + 
'	<input type="checkbox" id="elevSBld" class="spaceCheck" onchange="verifyBuildingSelected(\'34\', \'elevSBld\');"><label for="elevSBld">Space Elevator</label></br>' + 
'	<input type="checkbox" id="satSBld" class="spaceCheck" onchange="verifyBuildingSelected(\'35\', \'satSBld\');"><label for="satSBld">Satellite</label></br>' + 
'	<input type="checkbox" id="statSBld" class="spaceCheck" onchange="verifyBuildingSelected(\'36\', \'statSBld\');"><label for="statSBld">Space Station</label></br></br>' + 

'	<input type="checkbox" id="moonChecker"><label for="moonChecker" onclick="$(\'.moonCheck\').click();"><b>Moon</b></label></br>' + 
'	<input type="checkbox" id="outSBld" class="moonCheck" onchange="verifyBuildingSelected(\'37\', \'outSBld\');"><label for="outSBld">Lunar Outpost</label></br>' + 
'	<input type="checkbox" id="baseSBld" class="moonCheck" onchange="verifyBuildingSelected(\'38\', \'baseSBld\');"><label for="baseSBld">Moon Base</label></br></br>' + 

'	<input type="checkbox" id="duneChecker"><label for="duneChecker" onclick="$(\'.duneCheck\').click();"><b>Dune</b></label></br>' + 
'	<input type="checkbox" id="crackSBld" class="duneCheck" onchange="verifyBuildingSelected(\'39\', \'crackSBld\');"><label for="crackSBld">Planet Cracker</label></br>' + 
'	<input type="checkbox" id="fracSBld" class="duneCheck" onchange="verifyBuildingSelected(\'40\', \'fracSBld\');"><label for="fracSBld">Hydraulic Fracturer</label></br>' + 
'	<input type="checkbox" id="spiceSBld" class="duneCheck" onchange="verifyBuildingSelected(\'41\', \'spiceSBld\');"><label for="spiceSBld">Spice Refinery</label></br></br>' + 

'	<input type="checkbox" id="piscineChecker"><label for="piscineChecker" onclick="$(\'.piscineCheck\').click();"><b>Piscine</b></label></br>' + 
'	<input type="checkbox" id="reVeSBld" class="piscineCheck" onchange="verifyBuildingSelected(\'42\', \'reVeSBld\');"><label for="reVeSBld">Research Vessel</label></br>' + 
'	<input type="checkbox" id="orbSBld" class="piscineCheck" onchange="verifyBuildingSelected(\'43\', \'orbSBld\');"><label for="orbSBld">Orbital Array</label></br></br>' + 

'	<input type="checkbox" id="heliosChecker"><label for="heliosChecker" onclick="$(\'.heliosCheck\').click();"><b>Helios</b></label></br>' + 
'	<input type="checkbox" id="sunSBld" class="heliosCheck" onchange="verifyBuildingSelected(\'44\', \'sunSBld\');"><label for="sunSBld">Sunlifter</label></br>' + 
'	<input type="checkbox" id="contSBld" class="heliosCheck" onchange="verifyBuildingSelected(\'45\', \'contSBld\');"><label for="contSBld">Containment Chamber</label></br>' + 
'	<input type="checkbox" id="heatSinkSBld" class="heliosCheck" onchange="verifyBuildingSelected(\'46\', \'heatSinkSBld\');"><label for="heatSinkSBld">Heatsink</label></br>' + 
'	<input type="checkbox" id="sunForgeSBld" class="heliosCheck" onchange="verifyBuildingSelected(\'47\', \'sunForgeSBld\');"><label for="sunForgeSBld">Sunforge</label></br></br>' + 

'       </div><div id="rightMenuASpace" style="position: absolute; top: 90px; right: 50px;">' +    
    
'	<input type="checkbox" id="terminusChecker"><label for="terminusChecker" onclick="$(\'.terminusCheck\').click();"><b>Terminus</b></label></br>' + 
'	<input type="checkbox" id="crySBld" class="terminusCheck" onchange="verifyBuildingSelected(\'48\', \'crySBld\');"><label for="crySBld">Cryostation</label></br></br>' + 

'	<input type="checkbox" id="kairoChecker"><label for="kairoChecker" onclick="$(\'.kairoCheck\').click();"><b>Kairo</b></label></br>' + 
'	<input type="checkbox" id="beacSBld" class="kairoCheck" onchange="verifyBuildingSelected(\'49\', \'beacSBld\');"><label for="beacSBld">Space Beacon</label></br></br>' + 

'	<input type="checkbox" id="yarnChecker"><label for="yarnChecker" onclick="$(\'.yarnCheck\').click();"><b>Yarn</b></label></br>' + 
'	<input type="checkbox" id="terrSBld" class="yarnCheck" onchange="verifyBuildingSelected(\'50\', \'terrSBld\');"><label for="terrSBld">Terraforming Station</label></br>' + 
'	<input type="checkbox" id="hydrSBld" class="yarnCheck" onchange="verifyBuildingSelected(\'51\', \'hydrSBld\');"><label for="hydrSBld">Hydroponics</label></br></br>' + 

'	<input type="checkbox" id="umbraChecker"><label for="umbraChecker" onclick="$(\'.umbraCheck\').click();"><b>Umbra</b></label></br>' + 
'	<input type="checkbox" id="hrSBld" class="umbraCheck" onchange="verifyBuildingSelected(\'52\', \'hrSBld\');"><label for="hrSBld">HR Harvester</label></br></br>' + 

'	<input type="checkbox" id="charonChecker"><label for="charonChecker" onclick="$(\'.charonCheck\').click();"><b>Charon</b></label></br>' + 
'	<input type="checkbox" id="esSBld" class="charonCheck" onchange="verifyBuildingSelected(\'53\', \'esSBld\');"><label for="esSBld">Entanglement Station</label></br></br>' + 

'	<input type="checkbox" id="centaurusChecker"><label for="centaurusChecker" onclick="$(\'.centaurusCheck\').click();"><b>Centaurus System</b></label></br>' + 
'	<input type="checkbox" id="tecSBld" class="centaurusCheck" onchange="verifyBuildingSelected(\'54\', \'tecSBld\');"><label for="tecSBld">Tectonic</label></br></br>' + 

'</div></div>'

function verifyBuildingSelected(buildingNumber, buildingCheckID) {
	var bldIsChecked = document.getElementById(buildingCheckID).checked;
	buildings[buildingNumber][1] = bldIsChecked;
}

$("#game").append(bldSelectAddition);
$("#game").append(spaceSelectAddition);

var craftSelectAddition = '<div id="menuAC" style="display:none; margin-top:-260px; height: 380px !important; margin-left: 100px; width:400px; z-index: 1;" class="dialog help">' + 
'<a href="#" onclick="$(\'#menuAC\').hide();" style="position: absolute; top: 10px; right: 15px;">close</a>' + 

'	<div id="leftMenuAC" style="position: absolute; top: 40px; left: 40px;">' +    
'	<br><input type="checkbox" id="woodChecker"><label for="woodChecker" onclick="$(\'.woodCheck\').click();"><b>Woodcrafts</b></label><br>' + 
'	<input type="checkbox" id="woodCraft" class="woodCheck" onchange="verifyCraftSelected(\'0\', \'woodCraft\')"><label for="woodCraft">Wood</label><br>' + 
'	<input type="checkbox" id="beamCraft" class="woodCheck" onchange="verifyCraftSelected(\'1\', \'beamCraft\')"><label for="beamCraft">Beam</label><br>' + 
'	<input type="checkbox" id="scaffoldCraft" class="woodCheck" onchange="verifyCraftSelected(\'8\', \'scaffoldCraft\')"><label for="scaffoldCraft">Scaffold</label><br>' + 
'	<input type="checkbox" id="shipCraft" class="woodCheck" onchange="verifyCraftSelected(\'12\', \'shipCraft\')"><label for="shipCraft">Trade Ship</label><br>' + 
'	<input type="checkbox" id="tankerCraft" class="woodCheck" onchange="verifyCraftSelected(\'18\', \'tankerCraft\')"><label for="tankerCraft">Tanker</label><br><br>' + 

'	<input type="checkbox" id="mineralsChecker"><label for="mineralsChecker" onclick="$(\'.mineralCheck\').click();"><b>Minerals</b></label><br>' + 
'	<input type="checkbox" id="slabCraft" class="mineralCheck" onchange="verifyCraftSelected(\'2\', \'slabCraft\');"><label for="slabCraft">Slab</label><br>' + 
'	<input type="checkbox" id="concreteCraft" class="mineralCheck" onchange="verifyCraftSelected(\'11\', \'concreteCraft\')"><label for="concreteCraft">Concrete</label><br><br>' + 

'	<input type="checkbox" id="ironChecker"><label for="ironChecker" onclick="$(\'.ironCheck\').click();"><b>Iron</b></label><br>' + 
'	<input type="checkbox" id="plateCraft" class="ironCheck" onchange="verifyCraftSelected(\'4\', \'plateCraft\')"><label for="plateCraft">Plate</label><br>' + 
'	<input type="checkbox" id="steelCraft" class="ironCheck" onchange="verifyCraftSelected(\'3\', \'steelCraft\')"><label for="steelCraft">Steel</label><br>' + 
'	<input type="checkbox" id="gearCraft" class="ironCheck" onchange="verifyCraftSelected(\'10\', \'gearCraft\')"><label for="gearCraft">Gear</label><br>' + 
'	<input type="checkbox" id="alloyCraft" class="ironCheck" onchange="verifyCraftSelected(\'9\', \'alloyCraft\')"><label for="alloyCraft">Alloy</label><br><br>' +

'       </div><div id="centerMenuAC" style="position: absolute; top: 60px; left: 150px;">' +   

'	<span id="ratioScaffold" title="Between 0 and 100"><input id="ratioScaffoldText" type="text" style="width:25px; position: absolute; top: 48px;" onchange="ratioScaffold = this.value" value="0"></span>' + 
'	<span id="ratioTradeship" title="Between 0 and 100"><input id="ratioTradeshipText" type="text" style="width:25px; position: absolute; top: 70px;" onchange="ratioTradeship = this.value" value="0"></span>' + 
'	<span id="ratioTanker" title="Between 0 and 100"><input id="ratioTankerText" type="text" style="width:25px; position: absolute; top: 92px;" onchange="ratioTanker = this.value" value="0"></span>' +     
'	<span id="ratioConcrate" title="Between 0 and 100"><input id="ratioConcrateText" type="text" style="width:25px; position: absolute; top: 160px; left: -10px;" onchange="ratioConcrate = this.value" value="0"></span>' +     
'	<span id="ratioGear"  title="Between 0 and 100"><input id="ratioGearText" type="text" style="width:25px; position: absolute; top: 247px; left: -40px;" onchange="ratioGear = this.value" value="0"></span>' +     
'	<span id="ratioAlloy" title="Between 0 and 100"><input id="ratioAlloyText" type="text" style="width:25px; position: absolute; top: 269px; left: -40px;" onchange="ratioAlloy = this.value" value="0"></span>' + 
    
'       </div><div id="rightMenuAC" style="position: absolute; top: 60px; right: 90px;">' +        
    
'	<input type="checkbox" id="scienceChecker"><label for="scienceChecker" onclick="$(\'.scienceCheck\').click();"><b>Science</b></label><br>' + 
'	<input type="checkbox" id="parchCraft" class="scienceCheck" onchange="verifyCraftSelected(\'13\', \'parchCraft\')"><label for="parchCraft">Parchment</label><br>' + 
'	<input type="checkbox" id="manuCraft" class="scienceCheck" onchange="verifyCraftSelected(\'14\', \'manuCraft\')"><label for="manuCraft">Manuscript</label><br>' + 
'	<input type="checkbox" id="compCraft" class="scienceCheck" onchange="verifyCraftSelected(\'15\', \'compCraft\')"><label for="compCraft">Compedium</label><br>' + 
'	<input type="checkbox" id="blueCraft" class="scienceCheck" onchange="verifyCraftSelected(\'16\', \'blueCraft\')"><label for="blueCraft">Blueprint</label><br><br>' + 

'	<input type="checkbox" id="otherChecker"><label for="otherChecker" onclick="$(\'.otherCheck\').click();"><b>Other</b></label><br>' + 
'	<input type="checkbox" id="megalithCraft" class="otherCheck" onchange="verifyCraftSelected(\'17\', \'megalithCraft\')"><label for="megalithCraft">Megalith</label><br>' + 
'	<input type="checkbox" id="eludiumCraft" class="otherCheck" onchange="verifyCraftSelected(\'7\', \'eludiumCraft\')"><label for="eludiumCraft">Eludium</label><br>' + 
'	<input type="checkbox" id="keroseneCraft" class="otherCheck" onchange="verifyCraftSelected(\'5\', \'keroseneCraft\')"><label for="keroseneCraft">Kerosene</label><br>' + 
'	<input type="checkbox" id="thoriumCraft" class="otherCheck" onchange="verifyCraftSelected(\'6\', \'thoriumCraft\')"><label for="thoriumCraft">Thorium</label><br><br>' + 
    
'       </div><div id="rightMenu2AC" style="position: absolute; top: 60px; right: 30px;">' +
    
' 	<span id="ratioMegalith" title="Between 0 and 100"><input id="ratioMegalithText" type="text" style="width:25px; position: absolute; top: 125px; right: 40px;" onchange="ratioMegalith = this.value" value="0"></span>' +     
    
'</div></div>'

function verifyCraftSelected(craftNumber, craftCheckID) {
	var craftIsChecked = document.getElementById(craftCheckID).checked;
	crafts[craftNumber][3] = craftIsChecked;
}

$("#game").append(craftSelectAddition);

var kittensSelectAddition = '<div id="menuAK" style="display:none; margin-top:-260px; height: 220px !important; margin-left: 100px; width:200px; z-index: 1;" class="dialog help">' + 
'<a href="#" onclick="$(\'#menuAK\').hide();" style="position: absolute; top: 10px; right: 15px;">close</a>' + 

'	<div id="leftMenuAK" style="position: absolute; top: 40px; left: 40px;">' +    
'	<br><input type="checkbox" id="kittensChecker"><label for="kittensChecker" onclick="$(\'.kittenCheck\').click();"><b>Kittens</b></label><br>' + 
'	<input type="checkbox" id="woodKitten" class="kittenCheck" onchange="verifyKittenSelected(\'0\', \'woodKitten\')"><label for="woodKitten">Woodcutter</label><br><br>' + 
'	<input type="checkbox" id="catnipKitten" class="kittenCheck" onchange="verifyKittenSelected(\'1\', \'catnipKitten\')"><label for="catnipKitten">Farmer</label><br><br>' + 
'	<input type="checkbox" id="scienceKitten" class="kittenCheck" onchange="verifyKittenSelected(\'2\', \'scienceKitten\')"><label for="scienceKitten">Scholar</label><br><br>' + 
'	<input type="checkbox" id="catpowerKitten" class="kittenCheck" onchange="verifyKittenSelected(\'3\', \'catpowerKitten\')"><label for="catpowerKitten">Hunter</label><br><br>' + 
'	<input type="checkbox" id="mineralKitten" class="kittenCheck" onchange="verifyKittenSelected(\'4\', \'mineralKitten\')"><label for="mineralKitten">Miner</label><br><br>' + 
'	<input type="checkbox" id="faithKitten" class="kittenCheck" onchange="verifyKittenSelected(\'5\', \'faithKitten\')"><label for="faithKitten">Priest</label><br><br>' + 
'	<input type="checkbox" id="coalKitten" class="kittenCheck" onchange="verifyKittenSelected(\'6\', \'coalKitten\')"><label for="coalKitten">Geologist</label><br><br>' +
'	<input type="checkbox" id="machineKitten" class="kittenCheck" onchange="verifyKittenSelected(\'7\', \'machineKitten\')"><label for="machineKitten">Engineer</label><br>' +


'   </div><div id="centerMenuAK" style="position: absolute; top: 40px; left: 150px;">' +   

'	<span id="nWoodcutter"><input id="nWoodcutterText" type="text" style="width:25px; position: absolute; top: 48px;" onchange="census[0][2] = this.value" value="0"></span>' + 
'	<span id="nFarmer"><input id="nFarmerText" type="text" style="width:25px; position: absolute; top: 70px;" onchange="census[1][2] = this.value" value="0"></span>' + 
'	<span id="nScholar"><input id="nScholarText" type="text" style="width:25px; position: absolute; top: 92px;" onchange="census[2][2] = this.value" value="0"></span>' +     
'	<span id="nHunter"><input id="nHunterText" type="text" style="width:25px; position: absolute; top: 160px; left: -10px;" onchange="census[3][2] = this.value" value="0"></span>' +     
'	<span id="nMiner"><input id="nMinerText" type="text" style="width:25px; position: absolute; top: 247px; left: -40px;" onchange="census[4][2] = this.value" value="0"></span>' +     
'	<span id="nPriest"><input id="nPriestText" type="text" style="width:25px; position: absolute; top: 269px; left: -40px;" onchange="census[5][2] = this.value" value="0"></span>' + 
'	<span id="nGeologist"><input id="nGeologistText" type="text" style="width:25px; position: absolute; top: 269px; left: -40px;" onchange="census[6][2] = this.value" value="0"></span>' + 
'	<span id="nEngineer"><input id="nEngineerText" type="text" style="width:25px; position: absolute; top: 269px; left: -40px;" onchange="census[7][2] = this.value" value="0"></span>' + 
    
'</div></div>'

function verifyKittenSelected(kittenNumber, kittenCheckID) {
	var kittenIsChecked = document.getElementById(kittenCheckID).checked;
	census[kittenNumber][1] = kittenIsChecked;
}

$("#game").append(kittensSelectAddition);

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
		gamePage.diplomacy.tradeMultiple(game.diplomacy.get("zebras"), Math.floor(game.resPool.get("slab")).value / 50);
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

function autoCraft() {
	
	var calendar = gamePage.calendar;
	for (var i = 0; i < 8; i++) { // Primary Resources
  		if (crafts[i][3] == true) { 
			var resource = gamePage.resPool.get(crafts[i][0]);
			if(crafts[i][0] == 'catnip' && (resource.perTickUI < 0 || (calendar.season == 2 && calendar.day > 50))) {
				
			} else {
				if ((resource.value / resource.maxValue) > 0.99 && gamePage.workshop.getCraft(crafts[i][1]).unlocked) {
					gamePage.craftAll(crafts[i][1]);
				}
			}
			
		}
	}
	
	for (var j = 8; j < 15; j++) { // Secondary Resources
		if (crafts[i][3] == true) { 
			var priRes = gamePage.resPool.get(crafts[j][0]);
			var secRes = gamePage.resPool.get(crafts[j][1]);	
			var resMath = priRes.value / crafts[i][2];	

			switch (crafts[j][1]) {
				case "scaffold":
					secResRatio = ratioScaffold;
					break;
				case "alloy":
					secResRatio = ratioAlloy;
					break;
				case "gear":
					secResRatio = ratioGear;
					break;
				case "concrate":
					secResRatio = ratioConcrate;
					break;
				case "tradeship":
					secResRatio = ratioTradeship;
					break;
				case "megalith":
					secResRatio = ratioMegalith;
					break;
				case "tanker":
					secResRatio = ratioTanker;
					break;
			}

			if (resMath > 1 && secRes.value < (priRes.value * (secResRatio / 100)) && gamePage.workshop.getCraft(crafts[j][1]).unlocked) {
				gamePage.craft(crafts[j][1], (resMath * (secResRatio / 100)));
			}
		}
	}
	
	for (var k = 15; k < crafts.length; k++) {
  		if (crafts[i][3] == true) { 
			if (crafts[i][0] == 'parchment' && gamePage.science.get("drama").researched && calendar.festivalDays === 0) {
			
			} else {
				gamePage.craftAll(crafts[k][1]); 
			}
		}
	}	
	
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
	for (var i = 0; i < census.length; i++) {
		if (gamePage.village.getJob(census[i]).unlocked && census[i][1] == true) {
			for (var j = 1; j <= census[i][2]; j++) {
				// TODO: to see unemployed kittens and better assign
				gamePage.village.assignJob(gamePage.village.getJob(census[i]));
			}
		}
	}
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

function autoNip() { // New game
	if (gamePage.bld.buildingsData[0].val < 30) { //Catnip field
		$(".btnContent:contains('Gather')").trigger("click");
	}
}

function autoWood() { // New game
	if (gamePage.bld.buildingsData[0].val >= 30 && gamePage.resPool.get("wood").val < 50) {
		$(".btnContent:contains('Refine')").trigger("click");
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
	if (ab == 1){
		autoBuild();
	}
	autoNip();
	
	//day
	if (gamePage.timer.ticksTotal % 3 === 0) {
		autoWood();
		if (!game.workshop.get("seti").researched) {
			autoObserve();
		}
		if (ah == 1){
			autoHunt();
		}
		if (ac == 1){
			autoCraft();
		}
		if (ak == 1){
			autoKittens();
		}

	} 
	
	if (gamePage.timer.ticksTotal % 10 === 0) {
		if (aspace == 1){
			autoSpace();
		}
	}
	
	if (gamePage.timer.ticksTotal % 25 === 0) {
		if (ap == 1){
			autoParty();
		}
		if (as == 1){
			autoScience();
		}
		if (au == 1){
			autoUpgrade();
		}
		if (at == 1){
			autoTrade();
		}
	}
	
}, 200);
