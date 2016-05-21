/* global angular */

angular.module('spBlogger.posts.directives', []);

angular.module('spBlogger.posts.directives')
.directive('spbComments', function(Post) {
    return {
        restrict:'AEC',
        scope:{
            postInstance:'='
        },
        replace:true,
        link:function(scope,elem,attrs){
            scope.saveComment = function() {
                var postID = scope.postInstance._id, savedPostInstance = {};
                scope.comment.datePublished = new Date();
                angular.copy(scope.postInstance, savedPostInstance);
                scope.postInstance.comments.unshift(scope.comment);
                scope.comment = {};
                savedPostInstance.$update();
            };
        },
        templateUrl:'modules/posts/views/comments.html'
    };
});