angular.module('directives')
    .directive('messageBox', function () {
        return {
            scope: {
                entities: '=info'
            },
            templateUrl: '../Angular/templates/chat/messagebox.html'
        };
    });