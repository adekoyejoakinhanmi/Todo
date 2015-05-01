var myTodoApp = angular.module('myTodoApp', [])



myTodoApp.controller('todoController', function ($scope) {
    $scope.tasks = [];
    $scope.taskCount = 0;
    
    $scope.createTask = function (newTask) {
        if ($scope.newTask.title) {
            $scope.tasks.push({
                'title': $scope.newTask.title
            });
        }
        $scope.newTask.title = "";
        $scope.taskCount = tasksCount($scope.tasks);
    };
    
    $scope.del = function(index){
        $scope.tasks.splice(index , 1);
        $scope.taskCount -= 1;
    };
    
    $scope.complete = function(index){
        $scope.completed = index;
        $scope.taskCount -= 1;
    }
    
    function tasksCount(arr){
        var count = 0;
        for(var i = 0; i<arr.length; i++){
            count += 1;
        }
        return count;
    }
});