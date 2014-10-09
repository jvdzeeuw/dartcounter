var app = angular.module('letsdart', ['app', 'ui.utils', 'ngSanitize', 'decipher.history']);

app.controller('HomeController', function($scope, $modal, logger, History) {
    $scope.throwOutOptions = [];
    var throwOuts = $scope.throwOutOptions;

    $scope.vm = this;

    throwOuts[170] = {
        'default': ['T20', 'T20', 'BULL']
    }
    throwOuts[167] = {
        'default': ['T20', 'T19', 'BULL']
    }
    throwOuts[164] = {
        'default': ['T20', 'T18', 'BULL']
    }
    throwOuts[161] = {
        'default': ['T20', 'T17', 'BULL']
    }
    throwOuts[160] = {
        'default': ['T20', 'T20', 'D20']
    }
    throwOuts[158] = {
        'default': ['T20', 'T20', 'D19']
    }
    throwOuts[157] = {
        'default': ['T20', 'T19', 'D20']
    }
    throwOuts[156] = {
        'default': ['T20', 'T20', 'D18']
    }
    throwOuts[155] = {
        'default': ['T20', 'T19', 'D19']
    }
    throwOuts[154] = {
        'default': ['T20', 'T18', 'D20']
    }
    throwOuts[153] = {
        'default': ['T20', 'T19', 'D18']
    }
    throwOuts[152] = {
        'default': ['T20', 'T20', 'D16']
    }
    throwOuts[151] = {
        'default': ['T20', 'T17', 'D20']
    }
    throwOuts[150] = {
        d20: ['T20', 'BULL', 'D20'],
        'default': ['T20', 'T18', 'D18']
    }
    throwOuts[149] = {
        'default': ['T20', 'T19', 'D16']
    }
    throwOuts[148] = {
        'default': ['T20', 'T16', 'D20']
    }
    throwOuts[147] = {
        'default': ['T20', 'T17', 'D18']
    }
    throwOuts[146] = {
        'default': ['T20', 'T18', 'D16']
    }
    throwOuts[145] = {
        'default': ['T20', 'T15', 'D20']
    }
    throwOuts[144] = {
        d18: ['T18', 'T18', 'D18'],
        'default': ['T20', 'T20', 'D12']
    }
    throwOuts[143] = {
        'default': ['T20', 'T17', 'D16']
    }
    throwOuts[142] = {
        d16: ['T20', 'BULL', 'D16'],
        'default': ['T20', 'T14', 'D20']
    }
    throwOuts[141] = {
        d18: ['T20', 'T15', 'D18'],
        'default': ['T20', 'T19', 'D12']
    }
    throwOuts[140] = {
        d16: ['T20', 'T16', 'D16'],
        'default': ['T20', 'T20', 'D10']
    }
    throwOuts[139] = {
        d16: ['T19', 'BULL', 'D16'],
        'default': ['T19', 'T14', 'D20']
    }
    throwOuts[138] = {
        'default': ['T20', 'T18', 'D12']
    }
    throwOuts[137] = {
        'default': ['T20', 'T19', 'D10']
    }
    throwOuts[136] = {
        'default': ['T20', 'T20', 'D8']
    }
    throwOuts[135] = {
        'default': ['BULL', 'T15', 'D20']
    }
    throwOuts[134] = {
        d20: ['T18', 'T20', 'D10'],
        'default': ['T20', 'T14', 'D16']
    }
    throwOuts[133] = {
        d20: ['T20', 'T13', 'D20'],
        'default': ['T20', 'T19', 'D8']
    }
    throwOuts[132] = {
        d16: ['BULL', 'BULL', 'D16'],
        'default': ['BULL', 'T14', 'D20']
    }
    throwOuts[131] = {
        'default': ['T20', 'T13', 'D16']
    }
    throwOuts[130] = {
        'default': ['T20', 'T20', 'D5']
    }
    throwOuts[129] = {
        'default': ['T19', 'T20', 'D6']
    }
    throwOuts[128] = {
        d20: ['T18', 'T18', 'D10'],
        'default': ['T18', 'T14', 'D16']
    }
    throwOuts[127] = {
        'default': ['T20', 'T17', 'D8']
    }
    throwOuts[126] = {
        'default': ['T19', 'T19', 'D6']
    }
    throwOuts[125] = {
        d16: ['T18', 'T13', 'D16'],
        'default': ['25', 'T20', 'D20']
    }
    throwOuts[124] = {
        'default': ['T20', 'T14', 'D11']
    }
    throwOuts[123] = {
        'default': ['T19', 'T16', 'D9']
    }
    throwOuts[122] = {
        'default': ['T18', 'T18', 'D7']
    }
    throwOuts[121] = {
        'default': ['T20', 'T11', 'D14']
    }
    throwOuts[120] = {
        'default': ['T20', '20', 'D20']
    }
    throwOuts[119] = {
        'default': ['T19', 'T12', 'D13']
    }
    throwOuts[118] = {
        d16: ['T18', 'T16', 'D8'],
        'default': ['T20', '18', 'D20']
    }
    throwOuts[117] = {
        'default': ['T20', '17', 'D20']
    }
    throwOuts[116] = {
        d18: ['T20', '20', 'D18'],
        'default': ['T20', '16', 'D20']
    }
    throwOuts[115] = {
        d18: ['T20', '19', 'D18'],
        'default': ['T19', '18', 'D20']
    }
    throwOuts[114] = {
        d18: ['T20', '18', 'D18'],
        'default': ['T20', '14', 'D20']
    }
    throwOuts[113] = {
        d20: ['T20', '13', 'D20'],
        'default': ['T19', '20', 'D18']
    }
    throwOuts[112] = {
        d20: ['T20', '12', 'D20'],
        d18: ['T19', '19', 'D18'],
        'default': ['T20', '20', 'D16']
    }
    throwOuts[111] = {
        d20: ['T19', '14', 'D20'],
        d18: ['T19', '18', 'D18'],
        'default': ['T20', '19', 'D16']
    }
    throwOuts[110] = {
        d20: ['T20', '10', 'D20'],
        d18: ['T18', '20', 'D18'],
        'default': ['T20', '18', 'D16']
    }
    throwOuts[109] = {
        d20: ['T20', '9', 'D20'],
        d18: ['19', 'T18', 'D18'],
        'default': ['T19', '20', 'D16']
    }
    throwOuts[108] = {
        d20: ['T20', '8', 'D20'],
        d18: ['T18', '18', 'D18'],
        'default': ['T19', '19', 'D16']
    }
    throwOuts[107] = {
        d20: ['T20', '7', 'D20'],
        d18: ['17', 'T18', 'D18'],
        'default': ['T19', '18', 'D16']
    }
    throwOuts[106] = {
        d20: ['T20', '6', 'D20'],
        d18: ['T20', '10', 'D18'],
        'default': ['T20', '14', 'D16']
    }
    throwOuts[105] = {
        d20: ['T20', '5', 'D20'],
        d18: ['T20', '9', 'D18'],
        'default': ['T20', '13', 'D16']
    }
    throwOuts[104] = {
        d20: ['T20', '4', 'D20'],
        d18: ['20', 'T16', 'D18'],
        'default': ['T20', '12', 'D16']
    }
    throwOuts[103] = {
        d20: ['T20', '3', 'D20'],
        'default': ['T20', '11', 'D16']
    }
    throwOuts[102] = {
        d20: ['T20', '2', 'D20'],
        d18: ['T20', '6', 'D18'],
        'default': ['T20', '10', 'D16']
    }
    throwOuts[101] = {
        d20: ['T20', '1', 'D20'],
        d18: ['T18', '5', 'D18'],
        'default': ['T20', '9', 'D16']
    }
    throwOuts[100] = {
        'default': ['T20', 'D20']
    }
    throwOuts[99] = {
        d20: ['T19', '2', 'D20'],
        d18: ['T19', '6', 'D18'],
        'default': ['T19', '10', 'D16']
    }
    throwOuts[98] = {
        'default': ['T20', 'D19']
    }
    throwOuts[97] = {
        'default': ['T19', 'D20']
    }
    throwOuts[96] = {
        'default': ['T20', 'D18']
    }
    throwOuts[95] = {
        'default': ['T19', 'D19']
    }
    throwOuts[94] = {
        'default': ['T18', 'D20']
    }
    throwOuts[93] = {
        'default': ['T19', 'D18']
    }
    throwOuts[92] = {
        'default': ['T20', 'D16']
    }
    throwOuts[91] = {
        'default': ['T17', 'D20']
    }
    throwOuts[90] = {
        d18: ['T18', 'D18'],
        'default': ['T20', 'D15']
    }
    throwOuts[89] = {
        'default': ['T19', 'D16']
    }
    throwOuts[88] = {
        d20: ['T16', 'D20'],
        'default': ['T20', 'D14']
    }
    throwOuts[87] = {
        'default': ['T17', 'D18']
    }
    throwOuts[86] = {
        'default': ['T18', 'D16']
    }
    throwOuts[85] = {
        'default': ['T15', 'D20']
    }
    throwOuts[84] = {
        d18: ['T16', 'D18'],
        'default': ['T20', 'D12']
    }
    throwOuts[83] = {
        'default': ['T17', 'D16']
    }
    throwOuts[82] = {
        d20: ['T14', 'D20'],
        'default': ['BULL', 'D16']
    }
    throwOuts[81] = {
        d18: ['T15', 'D18'],
        'default': ['T19', 'D12']
    }
    throwOuts[80] = {
        d16: ['T16', 'D16'],
        'default': ['T20', 'D10']
    }
    throwOuts[79] = {
        d20: ['T13', 'D20'],
        'default': ['T19', 'D11']
    }
    throwOuts[78] = {
        'default': ['T18', 'D12']
    }
    throwOuts[77] = {
        'default': ['T19', 'D10']
    }
    throwOuts[76] = {
        'default': ['T20', 'D8']
    }
    throwOuts[75] = {
        'default': ['T17', 'D12']
    }
    throwOuts[74] = {
        'default': ['T14', 'D16']
    }
    throwOuts[73] = {
        'default': ['T19', 'D8']
    }
    throwOuts[72] = {
        'default': ['T12', 'D18']
    }
    throwOuts[71] = {
        d20: ['T17', 'D10'],
        'default': ['T13', 'D16']
    }
    throwOuts[70] = {
        d20: ['T10', 'D20'],
        'default': ['T18', 'D8']
    }
    throwOuts[69] = {
        'default': ['T15', 'D12']
    }
    throwOuts[68] = {
        d16: ['T12', 'D16'],
        'default': ['T20', 'D4']
    }
    throwOuts[67] = {
        d20: ['t9', 'D20'],
        'default': ['T15', 'D12']
    }
    throwOuts[66] = {
        'default': ['T10', 'D18']
    }
    throwOuts[65] = {
        d16: ['T11', 'D16'],
        'default': ['25', 'D20']
    }
    throwOuts[64] = {
        'default': ['T16', 'D8']
    }
    throwOuts[63] = {
        d18: ['t9', 'D18'],
        'default': ['T13', 'D12']
    }
    throwOuts[62] = {
        d20: ['T14', 'D10'],
        'default': ['T10', 'D16']
    }
    throwOuts[61] = {
        'default': ['25', 'D18']
    }
    throwOuts[60] = {
        'default': ['20', 'D20']
    }
    throwOuts[59] = {
        'default': ['19', 'D20']
    }
    throwOuts[58] = {
        'default': ['18', 'D20']
    }
    throwOuts[57] = {
        'default': ['17', 'D20']
    }
    throwOuts[56] = {
        d18: ['20', 'D18'],
        'default': ['16', 'D20']
    }
    throwOuts[55] = {
        d18: ['19', 'D18'],
        'default': ['15', 'D20']
    }
    throwOuts[54] = {
        d18: ['18', 'D18'],
        'default': ['14', 'D20']
    }
    throwOuts[53] = {
        d18: ['17', 'D18'],
        'default': ['13', 'D20']
    }
    throwOuts[52] = {
        d20: ['12', 'D20'],
        d18: ['16', 'D18'],
        'default': ['20', 'D16']
    }
    throwOuts[51] = {
        d20: ['11', 'D20'],
        d18: ['15', 'D18'],
        'default': ['19', 'D16']
    }
    throwOuts[50] = {
        d20: ['10', 'D20'],
        d18: ['14', 'D18'],
        'default': ['18', 'D16']
    }
    throwOuts[49] = {
        d20: ['9', 'D20'],
        d18: ['13', 'D18'],
        'default': ['17', 'D16']
    }
    throwOuts[48] = {
        d20: ['8', 'D20'],
        d18: ['12', 'D18'],
        'default': ['16', 'D16']
    }
    throwOuts[47] = {
        d20: ['7', 'D20'],
        d18: ['11', 'D18'],
        'default': ['15', 'D16']
    }
    throwOuts[46] = {
        d20: ['6', 'D20'],
        d18: ['10', 'D18'],
        'default': ['14', 'D16']
    }
    throwOuts[45] = {
        d20: ['5', 'D20'],
        d18: ['9', 'D18'],
        'default': ['13', 'D16']
    }
    throwOuts[44] = {
        d20: ['4', 'D20'],
        d18: ['8', 'D18'],
        'default': ['12', 'D16']
    }
    throwOuts[43] = {
        d20: ['3', 'D20'],
        d18: ['7', 'D18'],
        'default': ['11', 'D16']
    }
    throwOuts[42] = {
        d20: ['2', 'D20'],
        d18: ['6', 'D18'],
        'default': ['10', 'D16']
    }
    throwOuts[41] = {
        d20: ['1', 'D20'],
        d18: ['5', 'D18'],
        'default': ['9', 'D16']
    }
    throwOuts[40] = {
        'default': ['D20']
    }
    throwOuts[39] = {
        d18: ['3', 'D18'],
        'default': ['7', 'D16']
    }
    throwOuts[38] = {
        'default': ['D19']
    }
    throwOuts[37] = {
        d18: ['1', 'D18'],
        'default': ['D5', 'D16']
    }
    throwOuts[36] = {
        'default': ['D18']
    }
    throwOuts[35] = {
        'default': ['3', 'D16']
    }
    throwOuts[34] = {
        'default': ['D17']
    }
    throwOuts[33] = {
        'default': ['1', 'D16']
    }
    throwOuts[32] = {
        'default': ['D16']
    }
    throwOuts[31] = {
        'default': ['15', 'D8']
    }
    throwOuts[30] = {
        'default': ['D15']
    }
    throwOuts[29] = {
        'default': ['13', 'D8']
    }
    throwOuts[28] = {
        'default': ['D14']
    }
    throwOuts[27] = {
        'default': ['11', 'D8']
    }
    throwOuts[26] = {
        'default': ['D13']
    }
    throwOuts[25] = {
        'default': ['9', 'D8']
    }
    throwOuts[24] = {
        'default': ['D12']
    }
    throwOuts[23] = {
        'default': ['7', 'D8']
    }
    throwOuts[22] = {
        'default': ['D11']
    }
    throwOuts[21] = {
        'default': ['5', 'D8']
    }
    throwOuts[20] = {
        'default': ['D10']
    }
    throwOuts[19] = {
        'default': ['3', 'D8']
    }
    throwOuts[18] = {
        'default': ['D9']
    }
    throwOuts[17] = {
        'default': ['1', 'D8']
    }
    throwOuts[16] = {
        'default': ['D8']
    }
    throwOuts[15] = {
        'default': ['7', 'D4']
    }
    throwOuts[14] = {
        'default': ['D7']
    }
    throwOuts[13] = {
        'default': ['5', 'D4']
    }
    throwOuts[12] = {
        'default': ['D6']
    }
    throwOuts[11] = {
        'default': ['3', 'D4']
    }
    throwOuts[10] = {
        'default': ['D5']
    }
    throwOuts[9] = {
        'default': ['1', 'D4']
    }
    throwOuts[8] = {
        'default': ['D4']
    }
    throwOuts[7] = {
        'default': ['3', 'D2']
    }
    throwOuts[6] = {
        'default': ['D3']
    }
    throwOuts[5] = {
        'default': ['1', 'D2']
    }
    throwOuts[4] = {
        'default': ['D2']
    }
    throwOuts[3] = {
        'default': ['1', 'D1']
    }
    throwOuts[2] = {
        'default': ['D1']
    }
	
	$scope.boardValues = [
		{val:1, title:1},
		{val:2, title:2},
		{val:3, title:3},
		{val:4, title:4},
		{val:5, title:5},
		{val:6, title:6},
		{val:7, title:7},
		{val:8, title:8},
		{val:9, title:9},
		{val:10, title:10},
		{val:11, title:11},
		{val:12, title:12},
		{val:13, title:13},
		{val:14, title:14},
		{val:15, title:15},
		{val:16, title:16},
		{val:17, title:17},
		{val:18, title:18},
		{val:19, title:19},
		{val:20, title:20},
		{val:50, title:"BULL"}
	];
	
	$scope.hasBull = true;
	$scope.sequences = [
		{type:"asc", title:'1 <i class="size10px ti-angle-right"></i> BULL'},
		{type:"desc", title: 'BULL <i class="size10px ti-angle-right"></i> 1'},
		{type:"rand", title:"Willekeurig"}
	];
	
	$scope.$watch('Game.type',function(newVal){
		if(newVal == 'singles'){
			
			$scope.Game.singlePlayers = [];
			angular.forEach($scope.teams, function(team) {
				angular.forEach(team.players, function(player) {
					if (player.name != null) {
						$scope.Game.singlePlayers.push({ 
							ID: null,
							name: player.name,
							scores: [],
							hits: 0
						});
					}
				});
			});
			
			while($scope.Game.singlePlayers.length < 2){
				$scope.AddSinglePlayer();
			}
		}
	}); 	
	
	$scope.$watch('Game.startScore',function(newVal){
		if(newVal == 'custom'){
			$('#customScoreInput').focus();
			$('#customScoreRadio').addAttr('selected');
		}
	}); 
	
	$('#customScoreInput').blur(function(){
		if($scope.IsInt($scope.customScore) && $scope.customScore >= 2 && $scope.customScore <= 5000){
			//Good customScore
		}
		else{
			$scope.Notify('error', "Vul een getal in tussen 2 en 5000");
			$('#customScoreInput').val(170);
			$scope.customScore = 170;
		}
	});
	
	$scope.RemoveSinglePlayer = function(player) {
        var index = $scope.Game.singlePlayers.indexOf(player);
        $scope.Game.singlePlayers.splice(index, 1);
    }

    $scope.AddSinglePlayer = function() {
        if ($scope.Game.singlePlayers.length === 8) {
            return;
        }
        ;
        $scope.Game.singlePlayers.push({
            ID: null,
			name: ''
        });
    }

    $(document).ready(function() {
        /*$("#allTeams").sortable({
         start: function(event, ui) {
         ui.item.data('start', ui.item.index());
         },
         cursorAt: {bottom: 50},
         items: '> .team',
         placeholder: "highlight",
         cursor: "move",
         update: function(event, ui) {
         var start = ui.item.data('start'),
         end = ui.item.index();
         
         $scope.$apply(function() {
         //Rearranging the array
         $scope.teams.splice(end, 0,
         $scope.teams.splice(start, 1)[0]);
         });
         }
         }).disableSelection();*/
    });

    $scope.openDartsThrown = function() {
        $('.scoreInput').blur();
        $scope.thrownOutDarts = 3;
        $scope.items = [2, 3];

        //Persoon gooide een getal tussen 2 en 50 uit die in 1 pijl uit kon
        if ($scope.twoDarts.indexOf($scope.score) < 0 && $scope.score <= 50) {
            $scope.items = [1, 2, 3];
        }

        var modalInstance;
        modalInstance = $modal.open({
            templateUrl: "http://dartcounter.nl/views/dialogs/oneOrMore.html",
            controller: "ModalInstanceCtrl",
            resolve: {content: function() {
                    return {items: $scope.items}
                }}}), modalInstance.result.then(function(selectedItem) {
            $scope.addThrowOut(selectedItem);
        }, function() {
            //Modal Dismissed
        });
    }

    $scope.GameTypes = [];
    $scope.GameTypes.push({
        type: 'game',
        name: 'Wedstrijd'
    });
	$scope.GameTypes.push({
        type: 'singles',
        name: 'Singles training'
    });
	/*
	$scope.GameTypes.push({
        type: 'doubles',
        name: 'Doubles training'
    });
	$scope.GameTypes.push({
        type: 'scoring',
        name: 'Score training'
    });
	*/

    $scope.view = 'dashboard';

    $scope.amountOfTeams = 1;
    $scope.amountOfPlayers = 1;
    $scope.customScore = 170;

    $scope.currentPlayer = null;

    //Config default settings
    $scope.startScores = [101, 301, 501, 701, 901];
    $scope.Game = {
        type: 'game',
        startScore: 501,
        isBestOf: 1,
        bestOf: 5,
        amountOfPlayers: 0,
        amountOfTeams: 0,
        isLegs: 0,
        legsThrown: 0,
		sequence: 'asc',
		singlePlayers : []
    };

    $scope.impossibleThrows = [163, 166, 169, 172, 173, 175, 176, 178, 179];
    $scope.impossibleOuts = [159, 162, 163, 165, 166, 168, 169];
    $scope.threeDarts = [99, 102, 103, 105, 106, 108, 109];
    $scope.twoDarts = [3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 42, 43, 44, 45, 46, 47, 48, 49];
    //End of default settings

    $scope.teams = [];

    $scope.AddTeam = function() {
        $scope.Game.amountOfPlayers++;

        var teamID = ($scope.teams.length + 1);

        $scope.teams.push({
            ID: teamID,
            setsWon: 0,
            highestStart: 0,
            highestOut: 0,
            highestAvg: 0,
            highestAvgLeg: 0,
			highestScore: 0,
            t180: 0,
            t140: 0,
            t120: 0,
            t100: 0,
            t60: 0,
			t80: 0,
            firstRow: false,
            remaining: $scope.Game.startScore,
            startedSet: false,
            startedLeg: false,
            players: [{
                    name: '',
                    startedLeg: false,
                    startedSet: false,
                    hasThrown: false
                }]
        });

        $scope.Game.amountOfTeams++;
    }

    //Default add 2 teams
    $scope.AddTeam();
    $scope.AddTeam();

    $scope.RemoveTeam = function(team) {
        var index = $scope.teams.indexOf(team);
        $scope.Game.amountOfPlayers = $scope.Game.amountOfPlayers - team.players.length;
        $scope.Game.amountOfTeams--;
        $scope.teams.splice(index, 1);
    }

    $scope.RemovePlayer = function(team, player) {
        var index = team.players.indexOf(player);
        if (team.players.splice(index, 1)) {
            $scope.Game.amountOfPlayers--;
        }
    }

    $scope.AddPlayer = function(team) {
        $scope.Game.amountOfPlayers++;
        if (team.players.length === 5) {
            return;
        }
        ;
        team.players.push({
            text: 'Speler ' + (team.players.length + 1)
        });
    }

	$scope.Shuffle = function(array) {
	  var currentIndex = array.length, temporaryValue, randomIndex ;

	  // While there remain elements to shuffle...
	  while (0 !== currentIndex) {

		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	  }

	  return array;
	}
	
    $scope.GameOn = function() {
		$('.scoreInput.invalid').removeClass('invalid');
		if($scope.Game.type == 'game'){
			if ($scope.Game.amountOfTeams > 2) {
				$scope.Game.isBestOf = false;
			}

			if($scope.Game.startScore == 'custom'){
				$scope.Game.startScore = $scope.customScore;
			}
			
			var i = 1;
			angular.forEach($scope.teams, function(team) {
				if (i < 3) {
					team.firstRow = true;
				}
				i++;
			});
			
			$scope.Game.legs = [];
			$scope.Game.sets = [];
			
			//Start a new Leg
			$scope.currentLeg = {
				ID: 1,
				number: 1,
				setID: 1,
				scores: [],
				darts: []
			};
			$scope.Game.legs.push($scope.currentLeg);
			$scope.currentSet = {
				ID: 1,
				number: 1,
				legsWon: []
			};
			$scope.Game.sets.push($scope.currentSet);

			angular.forEach($scope.teams, function(team) {
				team.setsWon = 0,
				team.highestStart = 0,
				team.highestOut = 0,
				team.highestAvg = 0,
				team.avg = null,
				team.lastScore = null,
				team.avgDarts = null,
				team.highestAvgLeg = 0,
				team.highestScore = 0,
				team.t180 = 0,
				team.t140 = 0,
				team.t120 = 0,
				team.t100 = 0,
				team.avg = 0,
				team.t60 = 0,
				team.t80 = 0,
				team.remaining = $scope.Game.startScore,
				team.startedSet = false,
				team.startedLeg = false;
			});

			$scope.currentPlayer = $scope.teams[0].players[0];
			$scope.currentTeam = $scope.teams[0];
			$scope.currentTeam.startedLeg = true;
			$scope.currentTeam.startedSet = true;

			angular.forEach($scope.teams, function(team, t_index) {

				team.ID = (t_index + 1);
				team.setsWon = 0;
				team.remaining = $scope.Game.startScore;

				angular.forEach(team.players, function(player, p_index) {
					player.teamID = team.ID;
					player.ID = (p_index + 1);
					player.startedLeg = false;
					player.startedSet = false;
					player.hasThrown = false;
				});
			});

			$scope.currentPlayer.startedLeg = true;
			$scope.currentPlayer.startedSet = true;
			$scope.currentPlayer.hasThrown = true;

			$scope.view = 'gameplay';
			$scope.subView = {title: 'Uitgebreid', name: 'statistics'};
		}
		else if($scope.Game.type == "singles"){			
			$scope.view = 'singles';
			$scope.dartBoard = angular.copy($scope.boardValues);
			
			if($scope.hasBull == false){
				$scope.dartBoard.pop();
			}
			if($scope.Game.sequence == 'desc'){
				$scope.dartBoard.reverse();
			}
			else if($scope.Game.sequence == 'rand'){
				$scope.dartBoard = $scope.Shuffle($scope.dartBoard);
			}

			$scope.nextValue(0);	
			$scope.showTimeline = true;
			
			//Set the IDs of the players
			angular.forEach($scope.Game.singlePlayers, function(player, index) {
				player.ID = (index+1);
				player.scores = [];
				player.hits = 0;
			});			
			$scope.nextSinglePlayer(0);
		}
		
		setTimeout(function() {
			$('.scoreInput').focus();
		}, 100);
		
        /*SAVE GAME SETTINGS HERE
         $('.settings').fadeOut(500, function(){
         $('.gamePlay').fadeIn(500); 
         
         });*/
    }

	$scope.IsInt = function(n){
		return Math.round(parseInt(n)) == n;
	}
	
	
	$scope.UndoSingleScore = function(){
		if($scope.Game.singlePlayers.length > 1){
			if($scope.currentPlayer.ID == 1){
				//Go to last player
				$scope.currentPlayer = $scope.Game.singlePlayers[($scope.Game.singlePlayers.length-1)];
				$scope.PreviousValue();
			}
			else{
				//ID = nextplayer, ID-1 = currentPlayer, ID-2 = previousplayer
				$scope.currentPlayer = $scope.Game.singlePlayers[($scope.currentPlayer.ID-2)];
				$scope.currentPlayer.hits -= $scope.currentPlayer.scores[$scope.currentEntry.val];
				$scope.currentPlayer.scores[$scope.currentEntry.val] = null;
			}
		}
		setTimeout(function() {
			$('.scoreInput').focus();
		}, 100);
	}
	
	$scope.PreviousValue = function(){
		$scope.entryIndex--;
		$scope.currentEntry = $scope.dartBoard[$scope.entryIndex];	
		if($scope.entryIndex == 0){
			$scope.currentPlayer.scores = [];
			$scope.currentPlayer.hits = 0;
		}
		else{
			$scope.currentPlayer.hits -= $scope.currentPlayer.scores[$scope.currentEntry.val];
			$scope.currentPlayer.scores[$scope.currentEntry.val] = null;
		}
	}
	
	$scope.checkValue = function(){
		
		if($scope.currentEntry.title != "BULL" && $scope.singleScore >= 0 && $scope.singleScore <= 9 && $scope.IsInt($scope.singleScore)){	
			$('.scoreInput.invalid').removeClass('invalid');
			$scope.currentPlayer.scores[$scope.currentEntry.val] = $scope.singleScore;
			$scope.currentPlayer.hits += $scope.singleScore;
			$scope.nextSinglePlayer();
			$scope.singleScore = null;
		}
		else if($scope.currentEntry.title == "BULL" && $scope.singleScore >= 0 && $scope.singleScore <= 6 && $scope.IsInt($scope.singleScore)){
			$('.scoreInput.invalid').removeClass('invalid');
			$scope.currentPlayer.scores[$scope.currentEntry.val] = $scope.singleScore;
			$scope.currentPlayer.hits += $scope.singleScore;
			$scope.nextSinglePlayer();
			$scope.singleScore = null;
		}
		else{
			$('.scoreInput').addClass('invalid');
			if($scope.currentEntry.title == "BULL"){
				$scope.Notify('error','Voer een getal in tussen 0 en 6');
			}
			else{
				$scope.Notify('error','Voer een getal in tussen 0 en 9');
			}
			return;
		}
		setTimeout(function() {
            $('.scoreInput').focus();
        }, 100);
	}
	
	$scope.nextValue = function(entryIndex){
		if(entryIndex != null){
			$scope.entryIndex = entryIndex;
		}
		else{
			$scope.entryIndex++;
		}
		$scope.currentEntry = $scope.dartBoard[$scope.entryIndex];	
		if($scope.currentEntry == undefined){
			$scope.EndOfSingles();
			$scope.Notify('success','Training afgerond');
		}
	}
	
	$scope.EndOfSingles = function(){
        $scope.GameOptions();

        var modalInstance;
        modalInstance = $modal.open({
			size: 'lg',
            templateUrl: "http://dartcounter.nl/views/dialogs/EndOfSingles.html",
            controller: "ModalInstanceCtrl",
            resolve: {content: function() {
                    return {
                        scope: $scope
                    }
                }}}), modalInstance.result.then(function(selectedItem) {
        }, function() {
            //Modal Dismissed
        });
	}
	
	$scope.nextSinglePlayer = function(playerIndex){
		if(playerIndex != null){
			$scope.currentPlayer = $scope.Game.singlePlayers[playerIndex];	
		}
		else{
			if($scope.Game.singlePlayers.length > 1){
				if($scope.currentPlayer.ID == $scope.Game.singlePlayers.length){
					//Go to first player
					$scope.currentPlayer = $scope.Game.singlePlayers[0];
					$scope.nextValue();
				}
				else{
					$scope.currentPlayer = $scope.Game.singlePlayers[$scope.currentPlayer.ID];
				}
			}
		}
	}
	
    $scope.GameOptions = function() {
        $scope.view = 'dashboard';
    }

    $scope.setSubView = function(newVal) {
        $scope.subView.name = newVal;
        if (newVal == 'statistics') {
            $scope.subView.title = 'Uitgebreid';
        }
        else if (newVal == 'scoreBoard') {
            $scope.subView.title = 'Scoreborden';
        }
        setTimeout(function() {
            $('.scoreInput').focus();
        }, 100);
    }

    //End of game options

    $scope.SetTeamAverages = function() {
        angular.forEach($scope.teams, function(team, t_index) {
            var total = darts = 0;
            team.avgDarts = 0;

            angular.forEach($scope.Game.legs, function(leg, l_index) {
                var scores = $.grep(leg.scores, function(leg) {
                    return leg.teamID == team.ID;
                });

                var dartsThisLeg = 0;

                angular.forEach(scores, function(score, s_index) {
                    total = (total + score.score);
                    if (score.throwOutDarts != undefined) {
                        darts += parseInt(score.throwOutDarts);
                        dartsThisLeg += parseInt(score.throwOutDarts);
                    }
                    else {
                        darts += 3;
                        dartsThisLeg += 3;
                    }
                });

                if (leg.teamWonID != undefined && leg.teamWonID == team.ID) {
                    team.avgDarts += dartsThisLeg;
                }
            });

            team.avgDarts = team.avgDarts / team.legsWon;

            if (team.avg == undefined) {
                team.avg = 0;
            }
            team.avg = Math.round((total / darts) * 300) / 100;

            if (team.avg > team.highestAvg) {
                team.highestAvg = team.avg;
            }
        });
    }

    //Start GamePlay
    $scope.SubmitScore = function() {
        if ($scope.currentLeg.scores == undefined) {
            $scope.currentLeg.scores = [];
        }
		
        //Check if score is possible
        if ($scope.score < ($scope.currentTeam.remaining - 1) &&
                ($scope.score <= 180 && $scope.impossibleThrows.indexOf($scope.score) < 0)
                && $scope.score >= 0 && $scope.IsInt($scope.score)) {
            $('.scoreInput.invalid').removeClass('invalid');

            //First throw this leg for this team
            if ($scope.currentLeg.darts[$scope.currentTeam.ID] == undefined) {
                //Check if it is the highest beginScore so far
                if ($scope.score > $scope.currentTeam.highestStart) {
                    $scope.currentTeam.highestStart = angular.copy($scope.score);
                }
				if($scope.score > $scope.currentTeam.highestScore){
					$scope.currentTeam.highestScore = $scope.score;
				}
                $scope.currentLeg.darts[$scope.currentTeam.ID] = 0;
            }
            $scope.currentLeg.darts[$scope.currentTeam.ID] += 3;

            //Check if the average is the highest average so far
            if (((($scope.Game.startScore - $scope.currentTeam.remaining) * 3) / $scope.currentLeg.darts[$scope.currentTeam.ID]) > $scope.currentTeam.highestAvgLeg) {
                $scope.currentTeam.highestAvgLeg = ((($scope.Game.startScore - $scope.currentTeam.remaining) * 3) / $scope.currentLeg.darts[$scope.currentTeam.ID]);
            }

            if ($scope.score > 60) {
                if ($scope.score >= 60 && $scope.score < 80) {
                    $scope.currentTeam.t60++;
                }
				else if ($scope.score >= 80 && $scope.score < 100) {
                    $scope.currentTeam.t80++;
                }
                else if ($scope.score >= 100 && $scope.score < 120) {
                    $scope.currentTeam.t100++;
                }
                else if ($scope.score >= 120 && $scope.score < 140) {
                    $scope.currentTeam.t120++;
                }
                else if ($scope.score >= 140 && $scope.score < 180) {
                    $scope.currentTeam.t140++;
                }
                else {
                    $scope.currentTeam.t180++;
                }
            }

            $scope.currentTeam.remaining -= $scope.score;
            $scope.currentTeam.lastScore = $scope.score;

            //Add score to list
            $scope.currentLeg.scores.push({
                teamID: $scope.currentTeam.ID,
                playerID: $scope.currentPlayer.ID,
                remaining: $scope.currentTeam.remaining,
                score: $scope.score
            });

            //Next player for a throw
            $scope.NextPlayer();
            //Set the new averages
            $scope.SetTeamAverages();
        }
        //SPELER GOOIT LEG EN/OF SET UIT
        else if ($scope.score == $scope.currentTeam.remaining &&
                ($scope.currentTeam.remaining <= 170 && $scope.impossibleOuts.indexOf($scope.score) < 0)) {
            $('.scoreInput.invalid').removeClass('invalid');

            if ($scope.threeDarts.indexOf($scope.score) > -1 || $scope.score > 110) {
                $scope.addThrowOut(3);
            }
            else
            {
                $scope.openDartsThrown();
            }
        }
        else {
            $('.scoreInput').addClass('invalid');
			$scope.Notify('error', 'Er is een onjuist getal ingevoerd');
            return false;
        }
    }
	
    $scope.addThrowOut = function(darts)
    {
        //Close modal dialog
        //$.fancybox.close();

        //Add score to list		
        $scope.currentLeg.scores.push({
            teamID: $scope.currentTeam.ID,
            playerID: $scope.currentPlayer.ID,
            throwOutDarts: darts,
            score: $scope.score
        });
        $scope.currentLeg.darts[$scope.currentTeam.ID] += darts;

        if ($scope.currentTeam.highestOut < $scope.score) {
            $scope.currentTeam.highestOut = angular.copy($scope.score);
        }
		if($scope.score > $scope.currentTeam.highestScore){
			$scope.currentTeam.highestScore = $scope.score;
		}

        $scope.currentTeam.remaining = 0;
        $scope.currentTeam.lastScore = $scope.score;

        if ($scope.currentSet.legsWon[$scope.currentTeam.ID] == undefined) {
            $scope.currentSet.legsWon[$scope.currentTeam.ID] = 0;
        }
        //Set a new leg as WON
        $scope.currentLeg.teamWonID = $scope.currentTeam.ID;
        $scope.currentSet.legsWon[$scope.currentTeam.ID] += 1;
        if ($scope.currentTeam.legsWon == undefined) {
            $scope.currentTeam.legsWon = 0;
        }
        $scope.currentTeam.legsWon += 1
        $scope.Game.legsThrown += 1;

        if ($scope.Game.isLegs == false) {
            //Team won a set
            if ($scope.currentSet.legsWon[$scope.currentTeam.ID] == 3) {
                $scope.currentTeam.setsWon += 1;
                if (($scope.Game.isBestOf == 1 && $scope.Game.isBestOf && $scope.currentTeam.setsWon == Math.ceil($scope.Game.bestOf / 2)) ||
                        (!$scope.Game.isBestOf == 0 && $scope.currentTeam.setsWon == Math.ceil($scope.Game.bestOf))
                        ) {
                    $scope.showWin();
                }
                else {
                    $scope.newSet();
                }
            }
            else {
                $scope.newLeg();
            }
        }
        else {
            //BestOf x legs
            //Team with the last winning, wins the game
            if (($scope.Game.isBestOf == 1 && Math.ceil($scope.Game.bestOf / 2) == $scope.currentSet.legsWon[$scope.currentTeam.ID]) ||
                    ($scope.Game.isBestOf == 0 && $scope.currentSet.legsWon[$scope.currentTeam.ID] == Math.ceil($scope.Game.bestOf))
                    ) {
                $scope.showWin();
            }
            else {
                $scope.newLeg();
            }
        }
        //Focus back to the score input
        $('.scoreInput').focus();

        //Set the new averages
        $scope.SetTeamAverages();
    }

	$scope.showStats = function() {
        var modalInstance;
        modalInstance = $modal.open({
            templateUrl: "http://dartcounter.nl/views/dialogs/MatchStats.html",
            controller: "ModalInstanceCtrl",
            resolve: {content: function() {
                    return {
                        scope: $scope
                    }
                }}}), modalInstance.result.then(function(selectedItem) {
        }, function() {
            //Modal Dismissed
        });
    }
	
    $scope.showWin = function() {
        $scope.GameOptions();

        var modalInstance;
        modalInstance = $modal.open({
            templateUrl: "http://dartcounter.nl/views/dialogs/EndOfGame.html",
            controller: "ModalInstanceCtrl",
            resolve: {content: function() {
                    return {
                        scope: $scope
                    }
                }}}), modalInstance.result.then(function(selectedItem) {
        }, function() {
            //Modal Dismissed
        });
    }

    $scope.UndoScore = function() {
        //There are no scores, back to previous leg if there is one!
        if ($scope.currentLeg.scores.length < 1) {
            //Coming soon
        }
        else {
            var lastScoreIndex = ($scope.currentLeg.scores.length - 1);
            var teamID = $scope.currentLeg.scores[lastScoreIndex].teamID;
            $scope.currentPlayer.hasThrown = false;

            //Set currentPlayer and Team to the previous one
            $.each($scope.teams, function(t_index, team) {
                if (team.ID == $scope.currentLeg.scores[lastScoreIndex].teamID) {
                    $scope.currentTeam = team;

                    //Search for the player
                    if (team.players.length > 1) {
                        $.each(team.players, function(p_index, player) {
                            if (player.ID == $scope.currentLeg.scores[lastScoreIndex].playerID) {
                                $scope.currentPlayer = player;

                                if (player.ID == team.players.length) {
                                    angular.forEach(team.players, function(player2, p2_index) {
                                        //Set all "starteds" to false
                                        player2.hasThrown = false;
                                    });
                                }

                                return false;
                            } else {
                                player.hasThrown = true;
                            }
                        });
                    }
                    else {
                        $scope.currentPlayer = team.players[0];
                    }

                    //Add score to the remains of the team and set the lastScore
                    team.remaining += $scope.currentLeg.scores[lastScoreIndex].score;
                    if ($scope.currentLeg.scores[lastScoreIndex].darts != undefined) {
                        $scope.currentLeg.darts[team.ID] -= $scope.currentLeg.scores[lastScoreIndex].darts;
                    }
                    else {
                        $scope.currentLeg.darts[team.ID] -= 3;
                    }
                    //UPDATE THE LASTSCORE HERE!!
                    return false;
                }
            });

            //Remove score and calculate averages
            $scope.currentLeg.scores.pop();
            $scope.SetTeamAverages();
            //Focus back to the score input
            $('.scoreInput').focus();
        }
    }

    $scope.NextPlayer = function() {
        //SET THE TEAM
        if ($scope.currentSet.legsWon.length < 1 && $scope.currentLeg.scores.length < 1) {
            //It's a new set            
            //Reset ALL startedLegs and throws, because the order is resetted
            //DON't reset the startedSets ofcourse!
            angular.forEach($scope.teams, function(team, t_index) {
                team.startedLeg = false;
                angular.forEach(team.players, function(player, p_index) {
                    player.hasThrown = false;
                    player.startedLeg = false;
                });
            });

            //Set the currentTeam
            $.each($scope.teams, function(t_index, team) {
                if (team.startedSet == false) {
                    team.startedLeg = true;
                    team.startedSet = true;
                    $scope.currentTeam = team;
                    $.each(team.players, function(p_index, player) {
                        if (player.startedSet == false) {
                            //If the new player is the last player
                            if (player.ID == team.players.length) {
                                angular.forEach(team.players, function(player2, p2_index) {
                                    //Set all "starteds" to false
                                    player2.startedSet = false;
                                    player2.startedLeg = false;
                                    player2.hasThrown = false;
                                });
                            } else {
                                player.startedSet = true;
                                player.startedLeg = true;
                                player.hasThrown = true;
                            }
                            $scope.currentPlayer = player;
                            return false;
                        }
                        else {
                            player.hasThrown = true;
                            player.startedLeg = true;
                        }
                    });
                    return false;
                } else
                {
                    team.startedLeg = true;
                }
            });

            //If the last team started this set, the first team may start a set next time
            if ($scope.teams.length == $scope.currentTeam.ID) {
                $scope.currentTeam.startedLeg = false;
                angular.forEach($scope.teams, function(team, t_index) {
                    team.startedSet = false;
                    team.startedLeg = false;
                });
            }
        }
        else if ($scope.currentLeg.scores.length < 1) {
            //It's a new leg
            $.each($scope.teams, function(t_index, team) {
                if (team.startedLeg == false) {
                    team.startedLeg = true;
                    $scope.currentTeam = team;
                    $.each(team.players, function(p_index, player) {
                        if (player.startedLeg == false) {
                            //If the new player is the last player
                            if (player.ID == team.players.length) {
                                angular.forEach(team.players, function(player2, p2_index) {
                                    //Set "starteds" to false
                                    player2.startedLeg = false;
                                    player2.hasThrown = false;
                                });
                            } else {
                                player.startedLeg = true;
                                player.hasThrown = true;
                            }
                            $scope.currentPlayer = player;
                            return false;
                        }
                        else {
                            player.hasThrown = true;
                        }
                    });
                    return false;
                }
            });

            //If the last team started this leg, the first team may start a leg next time
            if ($scope.teams.length == $scope.currentTeam.ID) {
                angular.forEach($scope.teams, function(team, t_index) {
                    team.startedLeg = false;
                });
            }
        }
        else {
            //It's a new throw
            //Check if there are teams after the current one
            if ($scope.teams.length > $scope.currentTeam.ID) {
                $scope.currentTeam = $scope.teams[($scope.currentTeam.ID)];
            }
            //No more teams, back to the first one
            else {
                $scope.currentTeam = $scope.teams[0];
            }

            $.each($scope.currentTeam.players, function(p_index, player) {
                if (player.hasThrown == false) {
                    player.hasThrown = true;
                    $scope.currentPlayer = player;
                    //If the currentPlayer is the last player in the team -> reset throws
                    if (player.ID == $scope.currentTeam.players.length) {
                        $.each($scope.currentTeam.players, function(p2_index, player2) {
                            player2.hasThrown = false;
                        });
                    }
                    return false;
                }
            });
        }

        $scope.score = '';
    }

	$scope.Notify = function(type,msg){
		switch (type) {
		case"info":
			return logger.log(msg);
		case"success":
			return logger.logSuccess(msg);
		case"warning":
			return logger.logWarning(msg);
		case"error":
			return logger.logError(msg)
		}
	}
	
    $scope.newSet = function() {
        if ($scope.Game.sets.length > 0) {
            var id = ($scope.Game.sets.lengt + 1);
            var newSet = {
                ID: id,
                number: id,
                legsWon: []
            };
            $scope.currentSet = newSet;
        }
        $scope.newLeg();
    }

    $scope.newLeg = function() {
        if ($scope.Game.legs.length > 0) {
            var id = ($scope.Game.legs.length + 1);
            var newLeg = {
                ID: id,
                number: id,
                setID: $scope.currentSet.ID,
                scores: [],
                darts: []
            }
            $scope.currentLeg = newLeg;
            $scope.Game.legs.push(newLeg);
        }

        angular.forEach($scope.teams, function(team, t_index) {
            team.remaining = $scope.Game.startScore;
        });

        //Next player for a throw
        $scope.NextPlayer();
    }

});