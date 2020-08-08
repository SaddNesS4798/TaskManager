var taskMn = angular.module('taskMn', ['ui.bootstrap']);

todos.controller('Mycontroller', function ($scope) {
    $scope.filteredTaks = []
        , $scope.currentPage = 1
        , $scope.numPerPage = 10
        , $scope.maxSize = 5;

    $scope.makeTaksMn = function () {
        $scope.taskMn = [];
        for (i = 1; i <= 1000; i++) {
            $scope.taskMn.push({ text: 'taskMn ' + i, done: false });
        }
    };
    $scope.makeTaksMn();

    $scope.$watch('currentPage + numPerPage', function () {
        var begin = (($scope.currentPage - 1) * $scope.numPerPage)
            , end = begin + $scope.numPerPage;

        $scope.filteredTaks = $scope.Myapp.slice(begin, end);
    });
});