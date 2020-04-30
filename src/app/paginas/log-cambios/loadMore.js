// set the default amount of items being displayed
$scope.limit= 1;

// loadMore function
$scope.loadMore = function() {
  $scope.limit = $scope.items.length
}