<html ng-app="letsdart">
    <head>
        <title>Let's Dart</title>
        <link href='http://fonts.googleapis.com/css?family=Roboto+Condensed|Roboto+Slab' rel='stylesheet' type='text/css'/>
        <?php echo link_tag(base_url() . 'css/font-awesome.min.css'); ?>
        <?php echo link_tag(base_url() . 'css/main.css'); ?>
        <?php echo link_tag(base_url() . 'css/jquery.fancybox.css?v=2.1.5'); ?>
        <link rel="shortcut icon" href="images/favicon.ico" />

        <script src="<?php echo base_url(); ?>lib/html5shiv.js"></script>
        <script src="<?php echo base_url(); ?>lib/jquery-2.1.0.min.js"></script>
        <script src="<?php echo base_url(); ?>lib/jquery.fancybox.js?v=2.1.5"></script>
        <script src="<?php echo base_url(); ?>lib/jquery-ui-sortable.min.js"></script>
        <script src="<?php echo base_url(); ?>lib/angular.min.js"></script>
        <script src="<?php echo base_url(); ?>lib/ui-utils.min.js"></script>
        <script src="<?php echo base_url(); ?>lib/LetsDart.js"></script>
    </head>
    <body>
        <div id="container">
            <header>

            </header>
            <section class="content" ng-controller="HomeController">
                <section class="settings">
                    <div class="inner">
                        <?php echo heading('New Game', 1, 'class="title centered"'); ?>
                    </div>
                    <div class="gameForm">
                        <section class="leftHalf">
                            <?php echo heading('Player Options', 2, 'class="centered"'); ?>

                            <hr/>
                            <span class="button addTeam" ng-hide="teams.length > 3" ng-click="AddTeam()"><i class="fa fa-group"></i> Nieuw team</span>
                            <div id="allTeams">
                                <div class="team" ng-repeat="team in teams">
                                    <h2>
                                        <i class="fa fa-times-circle smallIcon" ng-click="RemoveTeam(team)" ng-show="teams.length > 1"></i>
                                        Team {{$index+1}}
                                    </h2>
                                    <div class="row" ng-repeat="player in team.players">
                                        <label for="">
                                            <i class="fa fa-times smallIcon" ng-click="RemovePlayer(team, player)" ng-show="team.players.length > 1"></i> 
                                            Speler {{$index+1}}
                                        </label>
                                        <input ng-model="player.name" type="text"/>
                                    </div>
                                    <span class="button addPlayer small" ng-show="team.players.length <= 4" ng-click="AddPlayer(team)"><i class="fa fa-user"></i> Nieuwe speler</span>
                                    <div class="clear"></div>
                                </div>
                            </div>
                            <hr/>
                        </section>
                        <section class="rightHalf">
                            <?php echo heading('Game Options', 2, 'class="centered"'); ?>

                            <hr/>
                            <section class="gameType">
                                <div class="row">
                                    <label for="">Speltype</label>
                                    <select ng-model="Game.type" ng-options="g.type as g.name for g in GameTypes"></select>
                                </div>
                            </section>
                            <section ng-show="Game.type=='game'">
                                <div class="row">
                                    <label for="">Beginscore</label>
                                    <div class="startScores">
                                        <div ng-repeat="score in startScores">
                                            <input type="radio" name="startScore" ng-model="Game.startScore" value="{{score}}"/>
                                            <label>{{score}}</label>
                                        </div>
                                        <input type="radio" name="startScore" id="customScore" ng-click="setBegin()" value="custom"/>
                                        <input type="text" name="customScore" id="customScoreInput" ng-change="setBegin()" ng-model="customScore" />
                                    </div>
                                </div>
                                <div class="row">
                                    <label for="">
										<span ng-show="Game.amountOfTeams > 2">First to</span>
                                        <select ng-hide="Game.amountOfTeams > 2" ng-model="Game.isBestOf">
                                            <option value="1">Best of</option>
                                            <option value="0">First To</option>
                                        </select>
                                    </label>
                                    <input type="text" ng-model="Game.bestOf" class="halfRow first"/>
                                    <select ng-model="Game.isLegs" class="halfRow">
                                        <option value="1">Legs</option>
                                        <option value="0">Sets</option>
                                    </select>
                                </div>
                            </section>
                            <section ng-show="Game.type=='tactics'">
                                <p>Coming soon!</p>
                            </section>
                            <hr/>
                        </section>
                        <span class="button startGame" ng-click="GameOn()">Start spel <i class="fa fa-play"></i></span>
                        <div class="clear"></div>
                    </div>
                </section>

                <!-- START OF GAME -->
                <section class="Gameplay">
                    <div class="inner">
                        <?php echo heading('Game on!', 1, 'class="title centered"'); ?>
                    </div>

                    <div class="gameForm">
                        <section>
                            <h2 class="center">{{Game.isBestOf == 1 ? "Best of" : "First to"}} {{Game.bestOf}} {{Game.isLegs == 1 ? "legs" : "sets"}}</h2>
                            <section class="game" ng-class="{leftHalf:$even,rightHalf:$odd,'throwing': team.ID == currentTeam.ID}"  ng-repeat="team in teams | filter: {firstRow:true}">
                                <span ng-show="team.players.length < 2" class="player">{{team.players[0].name}}</span>
                                <div id="remaining">
                                    <h2 class="score centered" ng-class="{'multi':Game.amountOfPlayers > Game.amountOfTeams}">{{team.remaining}}</h2>
                                    <div ng-repeat="player in team.players" ng-show="Game.amountOfPlayers > Game.amountOfTeams">
                                        <span class="multiplayer">
									{{player.name}}
                                        </span>
                                        <span ng-show="player.ID == currentPlayer.ID && team.ID == currentTeam.ID" class="indicator"><i style="line-height:20px" class="fa fa-chevron-left"></i></span>
                                    </div>
                                    <p class="possible" ng-show="throwOutOptions[team.remaining]">{{throwOutOptions[team.remaining].default.join(', ')}}</p>
                                    <p class="impossible" ng-show="!throwOutOptions[team.remaining] && team.remaining <= 170">Geen uitgooi mogelijk</p>
                                    <div class="stats">
                                        <dl>
                                            <dt>3-dart average game:</dt>
                                            <dd>{{team.avg || 0 | number:2}}</dd>
                                            <dt>3-dart average current leg:</dt>
                                            <dd>Coming soon...</dd>
                                            <dt>Darts thrown current leg:</dt>
                                            <dd>{{currentLeg.darts[team.ID] || 0}}</dd>
                                            <dt>Average darts per leg</dt>
                                            <dd>{{team.avgDarts || 0 | number:2}}</dd>
                                            <dt>Last score</dt>
                                            <dd>{{team.lastScore}}</dd>
                                        </dl>
                                    </div>
                            </section>
                            <section class="midSection"">
                                     <input class="scoreInput" ui-keydown="{'enter':'SubmitScore()','ctrl-enter':'UndoScore()'}" ng-model="score" type="text"/>
                                <span class="submitScore" ng-click="SubmitScore()">Score opslaan</span>
                                <span class="undoScore" ng-show="currentLeg.scores.length" ng-click="UndoScore()">Ongedaan maken</span>
                            </section>
                            <section class="game" ng-class="{leftHalf:$even,rightHalf:$odd,'throwing': team.ID == currentTeam.ID}"  ng-repeat="team in teams | filter: {firstRow: false}">
                                <span ng-show="team.players.length < 2" class="player">{{team.players[0].name}}</span>
                                <div id="remaining">
                                    <h2 class="score centered" ng-class="{'multi':Game.amountOfPlayers > Game.amountOfTeams}">{{team.remaining}}</h2>
                                    <div ng-repeat="player in team.players" ng-show="Game.amountOfPlayers > Game.amountOfTeams">
                                        <span class="multiplayer">
									{{player.name}}
                                        </span>
                                        <span ng-show="player.ID == currentPlayer.ID && team.ID == currentTeam.ID" class="indicator"><i style="line-height:20px" class="fa fa-chevron-left"></i></span>
                                    </div>
                                    <p class="possible" ng-show="throwOutOptions[team.remaining]">{{throwOutOptions[team.remaining].default.join(', ')}}</p>
                                    <p class="impossible" ng-show="!throwOutOptions[team.remaining] && team.remaining <= 170">Geen uitgooi mogelijk</p>
                                    <div class="stats">
                                        <dl>
                                            <dt>3-dart average game:</dt>
                                            <dd>{{team.avg || 0 | number:2}}</dd>
                                            <dt>3-dart average current leg:</dt>
                                            <dd>Coming soon...</dd>
                                            <dt>Darts thrown current leg:</dt>
                                            <dd>{{currentLeg.darts[team.ID] || 0}}</dd>
                                            <dt>Average darts per leg</dt>
                                            <dd>{{team.avgDarts || 0 | number:2}}</dd>
                                            <dt>Last score</dt>
                                            <dd>{{team.lastScore}}</dd>
                                        </dl>
                                    </div>
                            </section>
                            <div class="scoreBoard" ng-class="{'rightPos': teams.length%2 == 1}">
                                <table id="scoreTable">
                                    <tr>
                                        <th>Team</th>
                                        <th>Legs</th>
                                        <th ng-hide="Game.isLegs">Sets</th>
                                    </tr>
                                    <tr ng-repeat="team in teams">
                                        <td>{{team.players[0].name}}</td>
                                        <td>{{currentSet.legsWon[team.ID] || 0}}</td>
                                        <td ng-hide="Game.isLegs">{{team.setsWon}}</td>
                                    </tr>
                                </table>
                            </div>
                        </section>

                        <span class="button startGame" ng-click="GameOptions()" style="float:left;margin-left:1%"><i class="fa fa-chevron-left"></i> Ga terug</span>
                        <div class="clear"></div>
                        <div id="dartsThrown" style="display: none;">
                            <h2>Met hoeveel darts heb je {{score}} uitgegooid?</h2>
                            <label ng-class="{'current': thrownOutDarts == 1}" ng-click="thrownOutDarts=1" id="oneDart">1</label>
                            <label ng-class="{'current': thrownOutDarts == 2}" ng-click="thrownOutDarts=2" id="twoDarts">2</label>
                            <label ng-class="{'current': thrownOutDarts == 3}" ng-click="thrownOutDarts=3" id="threeDarts">3</label>
                            <span ng-click="addThrowOut(thrownOutDarts)">Ga verder</span>
                        </div>
                    </div>
                </section>
            </section>
            <footer>

            </footer>
        </div>
    </body>
</html>