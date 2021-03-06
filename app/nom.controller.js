(function() {
    'use strict';

    angular
        .module('cookModule')
        
        .controller('cookController', cookController);
    cookController.$inject = ['cookFactory','toastr'];
    
    /* @ngInject */
    function cookController(cookFactory, toastr) {
        var vm = this;
        vm.title = 'cookController';
        vm.all =[];
        vm.name;
        vm.ingrdeients;
        vm.link;
        vm.img;
        vm.ingList = [];
        vm.ingInput;
        vm.entreeSearch;
        activate();
        ////////////////
        function activate() {
        }
        // matches recipes to put into table
        vm.goRecipe = function(items, food) {
            cookFactory.getRecipe(items, food).then(
                function(foodReady) {
                    vm.entreeSearch = '';
                    vm.all = foodReady;
                    toastr.success("Every thing is working!");
                },function(error){
                   toastr.error("Every thing is not working!");
                });
        }
        // adds items to a list of ingredients
        vm.addIng = function(){
            if(vm.ingList.indexOf(vm.ingInput) == -1){
                vm.ingList.push(vm.ingInput);
                vm.ingInput="";
             }
        }
        // add on button to put items in the ingredient list
        vm.addIngButton = function(incoming){
            if(vm.ingList.indexOf(incoming) == -1){
                vm.ingList.push(incoming);
             }
        }
        // remove items from the ingredient list
        vm.rmIng = function(removeMe){
            var index = 0;
            index = vm.ingList.indexOf(removeMe);
            vm.ingList.splice(index, 1);
        }
    }
})();