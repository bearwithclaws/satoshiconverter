function SatoshiCtrl($scope) {
  $scope.fromUnit = 1;
  $scope.fromAmount = 1;
  $scope.toAmount = 1;
  $scope.toUnit = 1;

  $scope.changeFrom = function() {
    $scope.toAmount = $scope.fromAmount/$scope.fromUnit/$scope.toUnit;
  }
}