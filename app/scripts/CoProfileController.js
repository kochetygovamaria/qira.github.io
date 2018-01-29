// // JavaScript Document

// var app = angular.module("coProfileApp",[]);
// 	app.controller("coProfileController",function($scope){
// 		$scope.account = {
// 			firstName : 'Ahmad',
// 			lastName : 'Hariri',
// 			email : 'solo@alrawasi.co',
// 			companyName : 'Solo Coffee',
// 			picture : '../images/Solo.jpg',
// 			address : '360 Huntington Ave.',
// 			city : 'Boston',
// 			state : 'MA',
// 			zipCode : '02115',
// 			phone : '123-456-7890',
// 			industry : 'Café',
// 			sirenNumber : '',

// 		};
// 		$scope.fullName = function() {
//         	return $scope.account.firstName + ' ' + $scope.account.lastName;
// 		};
// 		$scope.industries = ['Café','Restaurant','Hotel','Bar','Hostel'];
		
// 		$scope.cancel = function() {
//         	$scope.tempAccount = angular.copy($scope.account);
// 		};
// 		$scope.save = function() {
//         	$scope.account = angular.copy($scope.tempAccount);
// 		};
// 		$scope.canSave = function() {
//         	if($scope.tempAccount.firstName == undefined || $scope.tempAccount.lastName == undefined || $scope.tempAccount.email == undefined || $scope.tempAccount.sirenNumber == undefined || $scope.tempAccount.industry == undefined)return true;
// 			else return false;
// 		};
// 	});
		
		