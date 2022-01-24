//['ngRoute', 'rzModule', 'ngAnimate', 'pascalprecht.translate', 'ngMaterial', 'ngMessages', 'ngSanitize', 'vjs.video']
var ngApp = angular.module('myScormApp', [ 'ngAnimate', 'pascalprecht.translate', 'ngMaterial', 'ngMessages', 'ngSanitize']);
ngApp.config(['$translateProvider', function ($translateProvider) {
    $translateProvider.useStaticFilesLoader({
        prefix: "../../" +'shell/resources/',
        suffix: '.json'
      }).preferredLanguage(sessionStorage.preferredLanguage || CONFIG.lang)
      .useSanitizeValueStrategy('sce')
      .useMissingTranslationHandlerLog();
    
    // Using standard escaping (nothing)
}]);


ngApp.controller('scormController', function ($scope, $mdPanel, $rootScope) {
    $scope.showShareButton = sessionStorage.cloudRoleName.toUpperCase() === "INSTRUCTOR".toUpperCase();
    $scope.renderGoogleShareWidgetForResource = function (event, className) {
        var googelShareButton = document.getElementsByClassName(className)[0];
        var googelShareButtonPos = googelShareButton.getBoundingClientRect();
        var position
        position = $mdPanel.newPanelPosition()
            .relativeTo(className)
            .absolute()
            .top(googelShareButtonPos.top + 50 + 'px')
            .left(googelShareButtonPos.left + 'px');
        var config = {
            attachTo: angular.element(document.body),
            bindToController: true,
            scope: $scope,
            preserveScope: true,
            templateUrl: "../../" + 'shell/js/features/scorm/google-classroom-share.template.html',
            panelClass: 'gc-share-list',
            position: position,
            openFrom: event,
            clickOutsideToClose: true,
            escapeToClose: true,
            focusOnOpen: true,
            zIndex: 1000
        };

        $mdPanel.open(config).then(function (result) {
            $scope.panelRef = result;
            var googleShareUrl = SERVICEURL.gc_shareUrl + sessionStorage.cloudBookId + "?resource=" + encodeURIComponent(sessionStorage.sharedResourceObj);
            gapi.sharetoclassroom.render("widget-div",
            {
                "url": googleShareUrl,
                "itemtype": "announcement",
                "body": document.getElementById('scormTitle').textContent,
                "onsharestart": $scope.shareGoogleLink()
            });
        });
    }

    $scope.shareGoogleLink = function () {
        //to add logic on starting google classroom sharing
    }
});


