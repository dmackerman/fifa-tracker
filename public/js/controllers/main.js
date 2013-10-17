(function() {

  'use strict';

  angular.module('fifaTrackerApp')
    .controller('MainCtrl', function ($scope, angularFire) {

      // defaults
      $scope.playerOne = "Dave";
      $scope.playerTwo = "Geoff";
      $scope.wager = "10";
      $scope.creamLine;

      var geoffTally = 0;
      var daveTally = 0;
      var creamLine;

      var ref = new Firebase('https://fifa.firebaseio.com/');
      angularFire(ref.limit(15), $scope, "games", []).then(function() {

        /* determine cream line */
        angular.forEach($scope.games, function(game, key) {
          if (game.winner === 'Dave') {
            daveTally += game.wager;
          } else {
            geoffTally += game.wager;
          }
        });

        if (daveTally > geoffTally)
          $scope.creamLine = 'Dave +' + (daveTally - geoffTally) + ' Creams';
        else if (daveTally < geoffTally)
          $scope.creamLine = 'Geoff +' + (geoffTally - daveTally) + ' Creams';
        else
          $scope.creamLine = "Even Creams";

        $scope.addGame = function() {
          var winner, loser;
          if (this.playerOneScore > this.playerTwoScore) {
            winner = this.playerOne
            loser = this.playerTwo
          } else if (this.playerOneScore < this.playerTwoScore) {
            winner = this.playerTwo
            loser = this.playerOne
          } else {
            winner = "Draw";
          }

          var game = {
            date: Date.now(),
            playerOne: this.playerOne,
            playerOneScore: this.playerOneScore,
            playerOneTeam: this.playerOneTeam,
            playerTwo: this.playerTwo,
            playerTwoScore: this.playerTwoScore,
            playerTwoTeam: this.playerTwoTeam,
            wager: parseInt(this.wager),
            winner: winner,
            loser: loser
          }

          $scope.games.unshift(game);
        }


      }) /* end angularFire promise */
    });

}())