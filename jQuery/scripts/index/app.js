(function() {
    var myApp = angular.module('app', []);

    myApp.directive('accordionSortable', function () {
        return {
            // Restrict it to be an attribute in this case
            restrict: 'A',//why don't we use 'E'?
            //Creating Directives that Communicate
            // responsible for registering DOM listeners as well as updating the DOM
            link: function (scope, element, attrs) {
                var sortable = scope.$eval(attrs.accordionSortable);
                var $accordion = $(element).accordion({
                    header: "> div > h6"
                });
                if (!sortable) return;
                $accordion.sortable({
                    axis: "y",
                    handle: "h6",
                    stop: function(event, ui) {
                        // IE doesn't register the blur when sorting
                        // so trigger focusout handlers to remove .ui-state-focus
                        ui.item.children("h6").triggerHandler("focusout");
                    }
                });
            }
        };
    });

    myApp.controller('lister', function ($scope) {
        $scope.steps = [1,2,3];
        $scope.add = function() {
            $scope.steps.push(4);
        };
    });

   
})();
