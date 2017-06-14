console.log('js');


var myApp = angular.module('myApp', []);
var results;
//globals


myApp.controller('defaultController', defaultController);

    function defaultController($http) {
        var vm = this;

        vm.giphySearch =function giphySearch() {
            console.log('isnide');
            var url = "http://api.giphy.com/v1/gifs/search?q=" +vm.searchInput + "&api_key=dc6zaTOxFJmzC";



            if (vm.searchInput === undefined || vm.searchInput === '') {
                url =  "http://api.giphy.com/v1/gifs/search?q=" +'random' + "&api_key=dc6zaTOxFJmzC";
                getUrl($http, url, vm);
            }
            else {
                getUrl($http, url, vm);
            }
        };

    console.log(vm.results);

}//emd controller

function getUrl($http, url, vm) {
    console.log('inside');
    $http.get(url).then(function(res) {
        console.log('back from the server with', res);

            console.log(res.data.data);

            vm.results = res.data.data;



    });//end http get
}//end getUrl
