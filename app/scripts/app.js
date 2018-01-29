


var myApp=angular.module('myApp',[
  'ngRoute',
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngTouch',
  'ui.bootstrap',
  'ngMaterial', 
  'ngMessages',
  'ui.router'
  ]);


  var uniqueItems = function (data, key) {
    var result = [];
    
    for (var i = 0; i < data.length; i++) {
        var value = data[i][key];
 
        if (result.indexOf(value) == -1) {
            result.push(value);
        }
    
    }
    return result;
};


 var uniqueItem = function (data, key) {
    var result = [];
    
    for (var i = 0; i < data.length; i++) {
        var value = data[i][key];
 
        if (result.indexOf(value) == -1) {
            result.push(value);
        }
    
    }
    return result;
};
var max_redirects = 10;
angular.module('ui.router.default', ['ui.router'])
  .config(['$provide', function($provide) {
    $provide.decorator('$state', ['$delegate', '$injector', function($delegate, $injector) {
      var transitionTo = $delegate.transitionTo;
      $delegate.transitionTo = function(to, toParams, options) {
        var numRedirects = 0;
        while(numRedirects++ < max_redirects) {
          var target = this.get(to, this.$current);
          if(target && target.abstract && target.abstract !== true) {
            var childState = target.abstract;
            if(!angular.isString(childState)) {
              childState = $injector.invoke(childState);
            }
            if(childState[0] == '.') {
              to += childState;
            } else {
              to = childState;
            }
          } else {
            break;
          }
        }
        if(numRedirects >= max_redirects) {
          throw new Error("Too many abstract state default redirects");
        }
        return transitionTo.call($delegate, to, toParams, options);
      };
      return $delegate;
    }])
  }]);


  angular.module('datepickerBasicUsage', ['ngMaterial', 'ngMessages']).controller('AppCtrl', function() {
  this.myDate = new Date();
  this.isOpen = false;
});


myApp.run(function($rootScope) {

var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];


    $rootScope.appointments = [{"contract_id":"4551","title":"DJ","first_name":"Larry","last_name":"Ullman","start_date":"2017-04-02","end_date":"2017-04-02","month":monthNames[(new Date("2017-04-02").getMonth())],"location":"Boston","phone":"123-435-6576","wage":"$15","Email":"h@gmail.com","paid":"$50", "status":"1"},
    {"contract_id":"2232","title":"Waiter","first_name":"John","last_name":"Lennon","start_date":"2017-03-02","end_date":"2017-03-02","month":monthNames[(new Date("2017-03-02").getMonth())],"location":"Boston","phone":"123-435-6476","wage":"$15","Email":"h@gmail.com","paid":"$50","status":"2"},
    {"contract_id":"3323","title":"Waiter","first_name":"John","last_name":"Brown","start_date":"2017-05-02","end_date":"2017-05-02","month":monthNames[(new Date("2017-05-02").getMonth())],"location":"Boston","phone":"123-434-33-76","wage":"$15","Email":"h@gmail.com","paid":"$50","status":"1"},
    {"contract_id":"4323","title":"Waiter","first_name":"Tom","last_name":"Smith","start_date":"2017-06-02","end_date":"2017-04-02","month":monthNames[(new Date("2017-06-02").getMonth())],"location":"London","phone":"123-433-6576","wage":"$15","Email":"h@gmail.com","paid":"$50","status":"3"},

     {"contract_id":"2232","title":"Waiter","first_name":"John","last_name":"Leon","start_date":"2017-03-02","end_date":"2017-03-02","month":monthNames[(new Date("2017-03-02").getMonth())],"location":"Boston","phone":"123-435-6476","wage":"$15","Email":"h@gmail.com","paid":"$50","status":"2"},
    {"contract_id":"3323","title":"Waiter","first_name":"John","last_name":"Chang","start_date":"2017-05-02","end_date":"2017-05-02","month":monthNames[(new Date("2017-05-02").getMonth())],"location":"Boston","phone":"123-434-33-76","wage":"$15","Email":"h@gmail.com","paid":"$50","status":"1"},
    {"contract_id":"4323","title":"Waiter","first_name":"Tom","last_name":"Wo","start_date":"2017-06-02","end_date":"2017-04-02","month":monthNames[(new Date("2017-06-02").getMonth())],"location":"London","phone":"123-433-6576","wage":"$15","Email":"h@gmail.com","paid":"$50","status":"3"},

     {"contract_id":"2232","title":"Waiter","first_name":"John","last_name":"Ho","start_date":"2017-03-02","end_date":"2017-03-02","month":monthNames[(new Date("2017-03-02").getMonth())],"location":"Boston","phone":"123-435-6476","wage":"$15","Email":"h@gmail.com","paid":"$50","status":"2"},
    {"contract_id":"3323","title":"Waiter","first_name":"John","last_name":"Doe","start_date":"2017-05-02","end_date":"2017-05-02","month":monthNames[(new Date("2017-05-02").getMonth())],"location":"Boston","phone":"123-434-33-76","wage":"$15","Email":"h@gmail.com","paid":"$50","status":"1"},
    {"contract_id":"4323","title":"Waiter","first_name":"Tom","last_name":"Peterson","start_date":"2017-06-02","end_date":"2017-04-02","month":monthNames[(new Date("2017-06-02").getMonth())],"location":"London","phone":"123-433-6576","wage":"$15","Email":"h@gmail.com","paid":"$50","status":"3"},


     {"contract_id":"3232","title":"Waiter","first_name":"Peter","last_name":"Lennon","start_date":"2017-04-02","end_date":"2017-04-02","month":monthNames[(new Date("2017-04-02").getMonth())],"location":"London","phone":"123-435-6576","wage":"$15","Email":"h@gmail.com","paid":"$50","status":"2"},
    {"contract_id":"5453","title":"Waiter","first_name":"Ava","last_name":"Brown","start_date":"2017-04-02","end_date":"2017-04-02","month":monthNames[(new Date("2017-04-02").getMonth())],"location":"London","phone":"123-435-6576","wage":"$15","Email":"h@gmail.com","paid":"$50","status":"1"},

         {"contract_id":"552","title":"Waiter","first_name":"Dean","last_name":"Lennon","start_date":"2017-03-02","end_date":"2017-03-02","month":monthNames[(new Date("2017-03-02").getMonth())],"location":"London","phone":"123-435-6576","wage":"$15","Email":"h@gmail.com","paid":"$50","status":"2"},
    {"contract_id":"3545","title":"Waiter","first_name":"Anna","last_name":"Brown","start_date":"2017-05-02","end_date":"2017-05-02","month":monthNames[(new Date("2017-05-02").getMonth())],"location":"Boston","phone":"123-435-6596","wage":"$15","Email":"h@gmail.com","paid":"$50","status":"1"},

         {"contract_id":"21234","title":"Waiter","first_name":"Sam","last_name":"Lennon","start_date":"2017-03-02","end_date":"2017-03-02","month":monthNames[(new Date("2017-03-02").getMonth())],"location":"London","phone":"123-435-6576","wage":"$15","Email":"h@gmail.com","paid":"$50","status":"3"},
    {"contract_id":"43543","title":"Waiter","first_name":"Asayl","last_name":"Brown","start_date":"2017-05-02","end_date":"2017-05-02","month":monthNames[(new Date("2017-05-02").getMonth())],"location":"Boston","phone":"123-435-6576","wage":"$15","Email":"h@gmail.com","paid":"$50","status":"3"},

    {"contract_id":"5455","title":"Waiter","first_name":"Sebastian","last_name":"Pier","start_date":"2017-04-02","end_date":"2017-04-02","month":monthNames[(new Date("2017-04-02").getMonth())],"location":"Paris","phone":"123-435-6576","wage":"$15","Email":"h@gmail.com","paid":"$50","status":"2"}];

    
});








myApp.config(function ($stateProvider, $urlRouterProvider, $locationProvider){

  // $locationProvider.html5Mode({enabled: true, requireBase: false})


  $stateProvider.state('landing',{
    url: '/',
    abstract: false,
    views: {
      main: {templateUrl: "views/landing.html", controller: 'LandingPageController'}
    },
    
  })
  $stateProvider.state('login',{
    url: '/login',
    abstract: false,
    views: {
      main: {templateUrl: "views/login.html", controller: 'loginController'}
    }
  })

  $stateProvider.state('register',{
    url: '/register',
    abstract: false,
    views: {
      main: {templateUrl: "views/register.html", controller: 'registerController'}
    }
  })



  $stateProvider.state('app',{
    url: '/app',
    abstract: false,
    views: {
      main: {templateUrl: "views/app.html", controller: 'AppPageController'}
    }
  })

    $stateProvider.state('app.employer',{
    abstract: true,
    resolve:  {
        hasAccess: function($q, $rootScope) {
          if ($rootScope.user && $rootScope.user.isEmployer) {
            return $q.when()
          } else {
            alert("no access")
            return $q.reject()
          }
        }
    }, 
    onEnter: function() {
      console.log("employer parent entered")
    },
    views: {
      app: {template: '<ui-view name="app"></ui-view>'}
    }
  })

  $stateProvider.state('app.currentjobs',{
    url: '/currentjobs',
    parent: 'app.employer',
    views: {
      app: {templateUrl: "views/currentjobs.html", controller: 'currentjobsController'}
    }
  })

  $stateProvider.state('app.pendingjobs',{
    url: '/pendingjobs',
    parent: 'app.employer',
    views: {
      app: {templateUrl: "views/pendingjobs.html", controller: 'pendingController'}
    }
  })
  $stateProvider.state('app.historyjobs',{
    url: '/historyjobs',
    parent: 'app.employer',
    views: {
      app: {templateUrl: "views/historyjobs.html", controller: 'historyJobsController'}
    }
  })

  $stateProvider.state('app.payment',{
    url: '/payment',
    views: {
      app: {templateUrl: "views/payment.html", controller: 'paymentController'}
    }
  })



  $stateProvider.state('app.paymentHistory',{
    url: '/paymentHistory',
    views: {
      app: {templateUrl: "views/paymentHistory.html", controller: 'paymentHistoryController'}
    }
  })

  $stateProvider.state('app.settings',{
    url: '/settings',
    views: {
      app: {templateUrl: "views/settings.html", controller: 'settings'}
    }
  })

  // $stateProvider.state('app.myreviews',{
  //   url: '/myreviews',
  //   abstract: false,
  //   views: {
  //     app: {templateUrl: "views/myreviews.html", controller: 'myreviewsController'}
  //   }
  // })


   $stateProvider.state('app.homepageemployer',{
    url: '/home-page-employer',
    parent: 'app.employer',
     onEnter: function() {
      console.log("employer entered")
    },
    views: {
      'app': {templateUrl: "views/home-page-employer.html", controller: 'HomePageController'}
    }
  })

  $stateProvider.state('app.homepageworker',{
    url: '/home-page-worker',
    views: {
      app: {templateUrl: "views/home-page-worker.html", controller: 'HomePageWorkerController'}
    }
  })

 $stateProvider.state('app.profileWorker',{
    url: '/profile-worker',
    views: {
      app: {templateUrl: "views/profile-worker.html", controller: 'ProfileWorkerController'}
    }
  })

   $stateProvider.state('app.profileEmployer',{
    url: '/profile-employer',
    parent: 'app.employer',
    views: {
      app: {templateUrl: "views/CoProfile.html", controller: 'ProfileEmployerController'}
    }
  })

   $stateProvider.state('app.notifications',{
    url: '/notifications',
    parent: 'app.employer',
    views: {
      app: {templateUrl: "views/notifications.html", controller: 'NotificationsController'}
    }
  })

  $stateProvider.state('app.selectedWorker',{
     url: '/worker/:id',
    parent: 'app.employer',
    views: {
      app: {templateUrl: "views/worker-search-selected-profile.html", controller: 'SearchWorkerSelected'}
    },
    params: {
      worker: null
    }
        

     

  });

  $stateProvider.state('app.reviewsPage',{
    url: '/reviewsPage',
    parent: 'app.employer',
    views: {
      app: {templateUrl: "views/reviews-page.html", controller: 'ReviewsControllers'}
    }
  })
  $stateProvider.state('app.messagesPage',{
    url: '/messagesPage',
    views: {
      app: {templateUrl: "views/messages.html", controller: 'MessagesControllers'}
    }
  })
    $urlRouterProvider.otherwise("/");



});

myApp.controller('NotificationsController', ['$scope',function ($scope) {
    // employerPageSetup();
    $scope.workers = [
      {"status":'2',"firstName": 'Joe', "lastName": 'Laton', "category": 'Waitress', "salary": '40' ,"profilePicture": 'images/review2.jpg', description: "Joe Laton complited the work. Total payment :$200"},
      { "status":'2',"firstName": 'Marie', "lastName": 'Staren', "category": 'Waitress', "salary": '11', "profilePicture": 'images/random4.jpg', description: "Accepted your offer"},
      { "status":'2',"firstName": 'Don', "lastName": 'Teston', "category": 'Bartender', "salary": '20',  "profilePicture": 'images/review2.jpg', description: "Accepted your offer"},
      { "status":'2',"firstName": 'Clark',"lastName": 'Olivier', "category": 'Security Agent', "salary": '12',  "profilePicture": 'images/random4.jpg', description: "Accepted your offer"},
      { "status":'2',"firstName": 'Clara', "lastName": 'Bruni', "category": 'DJ', "salary": '17',  "profilePicture": 'images/review2.jpg', description: " Accepted your offer"},
    
    ]
    console.log($scope.workers);
    $scope.hide=function(lastname){
    for(var i = 0; i<$scope.workers.length; i++)
  {
    if($scope.workers[i].lastName == lastname){
 
   $scope.workers[i].status=1;
   /*  $state.go('app.notifications', {to: $state.current.name}, {reload: true});*/
     
    }
  }
}
  }
]);
myApp.controller('settings',['$scope','$log', function($scope,$state,$log,$location,$timeout){

$scope.clickDeactiv=function(){

     $('#myModal').modal('hide');
      $interval(callAtInterval, 5000);
      $location.path('/');
}
}]);

myApp.controller('SearchWorkerSelected', ['$scope', '$stateParams', function($scope, $stateParams) {
  $scope.worker = $stateParams.worker;
}]);

myApp.controller('MessagesControllers', [

]);

myApp.controller('ProfileWorkerController', ['$scope', function ($scope) {

		$scope.account = {
			firstName : 'Ahmad',
			lastName : 'Hariri',
			picture : '../images/Ahmad.jpg',
			dateOfBirth : 'Jan 1, 2001',
			address : '360 Huntington Ave.',
			city : 'Boston',
			state : 'MA',
			zipCode : '02115',
			phone : '123-456-7890',
			gender : 'Male',
			
			schedule : [{day:'Monday', allDay:false, morning:false, afternoon:false, evening:false },
						{day:'Tuesday', allDay:false, morning:false, afternoon:false, evening:false },
						{day:'Wednesday', allDay:false, morning:false, afternoon:false, evening:false },
						{day:'Thursday', allDay:false, morning:false, afternoon:false, evening:false },
						{day:'Friday', allDay:false, morning:false, afternoon:false, evening:false },
						{day:'Saturday', allDay:false, morning:false, afternoon:false, evening:false },
						{day:'Sunday', allDay:false, morning:false, afternoon:false, evening:false },
					   ],
			experience : 'Developer',
			experienceLevel : '',
			degreeCertificate : '',
			graduationYear : ''
		};
		$scope.fullName = function() {
        	return $scope.account.firstName + ' ' + $scope.account.lastName;
    };
		$scope.experience = ['Waiter','Bartender','Other'];
		$scope.experienceLevel = ['No experience','Less than 2 years','More than 2 years'];
		$scope.degreeCertificate = ['Bachelor','Master','Deploma','Course'];
		$scope.gender = ['Male','Female','Transgender','Other'];
		$scope.validForm = true;
		
		$scope.graduationYear = ['1980','1981','1982','1983','1984','1985','1986','1987','1988','1989','1990','1991','1992','1993','1994','1995','1996','1997','1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017'];
		
		$scope.cancel = function() {
        	$scope.tempAccount = angular.copy($scope.account);
		};
		$scope.save = function() {
        	$scope.account = angular.copy($scope.tempAccount);
		};
		$scope.canSave = function() {
        	if($scope.tempAccount.firstName == undefined || $scope.tempAccount.lastName == undefined || $scope.tempAccount.experience == undefined || $scope.tempAccount.experienceLevel == undefined )return true;
			else return false;
    };
}]);


myApp.controller('HomePageController', ['$scope', '$rootScope', 'hasAccess', function ($scope, $rootScope, hasAccess) {


  $scope.filterObj = {
  	gender: '', //default
    cat: [],
    exp: [],
    ageGrp: []
  }

$scope.modalDisp = function(clickedInst){
  //alert(clickedInst);
  

  // var x=angular.element(document.getElementById("startdate").val());      



  //alert(clickedInst);
  $scope.currentSelected = clickedInst;



   
}
$scope.updateTime = function(){
  $scope.startTime = $('#startTime').val();
  $scope.endTime = $('#endTime').val();
}


$scope.addItem = function(cId){

  // var x=angular.element(document.getElementById("startdate").val());      

if ($scope.startTime=="" || $scope.endTime =="" || $scope.startTime==undefined || $scope.endTime ==undefined ){
  alert("Please enter the date");
}
else{
  for(var i = 0; i<$rootScope.appointments.length; i++)
{
   if($rootScope.workers[i].id == cId){
     
     var first_name=$rootScope.workers[i].firstName;
     var last_name=$rootScope.workers[i].lastName;
     var title=$rootScope.workers[i].category;
     var status=2;
     
     var contract_id=Math.floor(Math.random() * ((2000-1000)+1) + 1000);
     var start_date=$scope.startTime;
     var end_date=$scope.endTime;
     var phone=$rootScope.workers[i].phone;
     var wage=$rootScope.workers[i].salary;
     var Email=$rootScope.workers[i].Email;
     var paid="$100";
     var location=$rootScope.workers[i].location;
   
     $rootScope.appointments.push({"contract_id":contract_id,"title":title,"first_name":first_name,"last_name":last_name,"start_date":start_date,"end_date":end_date,"location":location,"phone":phone,"wage":wage,"Email":Email,"paid":paid ,"status":status})
    alert("Your request was sent");
     $('#myModal').modal('hide');
  }
}
}
}



//var modal = document.getElementById('myModal');
	//modal.style.display = "block";
  //j('#myModal').modal('show');


	$scope.filterFunc = function(value, index, array) {
  	console.log(value.gender)
			if (!$scope.filterObj.gender || value.gender == $scope.filterObj.gender) {
      	console.log($scope.filterObj.exp)
        
      	console.log($scope.filterObj.cat.indexOf(value.category))
        if (!$scope.filterObj.cat.length || 
        	$scope.filterObj.cat.indexOf(value.category) != -1) {
          if (!$scope.filterObj.exp.length || 
        	$scope.filterObj.exp.indexOf(value.experience) != -1) {
          	if (!$scope.filterObj.ageGrp.length) return true;
            if ($scope.filterObj.ageGrp.indexOf('18-22') != -1
            && value.age >= 17 && value.age <= 22) {
            	return true
            }
            if ($scope.filterObj.ageGrp.indexOf('23-27') != -1
            && value.age >= 23 && value.age <= 27) {
            	return true
            }
            if ($scope.filterObj.ageGrp.indexOf('28-35') != -1
            && value.age >= 28 && value.age <= 35) {
            	return true
            }
            if ($scope.filterObj.ageGrp.indexOf('35+') != -1
            && value.age >= 35) {
            	return true
            }

          }
        	
        }
      } 
     
      else {

      }
    	
 }

    // employerPageSetup();
    console.log("hoem contrl")
    console.log("is allowed: " )
    $rootScope.workers = [
      {id:'1', firstName: 'Joe', lastName: 'Laton', gender: 'Male', category: 'Waitress', salary: '17' ,location:"Boston", phone:"123-435-6476",Email:"h@gmail.com", age: '24', graduated: 'Paul Bocuse', experience: 'More than 2 years', feedback:'3', rating: '4.9', mission: '7', reviews: [{reviewer:'Antoine Melan', comment:"Very ponctual. Pleasure to work with"}, {reviewer:'Eva Park', comment:"Joe is very professional. Pleasure to work with"}, {reviewer:'Paul Jefferson', comment:"Highly recommend"}], available:[{day: 'Monday', time:'All day'}, {day: 'Tuesday', time: 'Morning, Afternoon'}, {day:'Wednesday', time:'Evening'}, {day:'Sunday', time:'Afternoon, Evening'}], profilePicture: 'images/review2.jpg', description: "Lorem ipsum dolor sit amet, at nam quaeque dissentiunt, homero deserunt ex mei. Euripidis delicatissimi sea et. Pro quod libris primis ex, alterum tacimates an pro. Adversarium consequuntur has no."},
      {id:'2',firstName: 'Marie', lastName: 'Staren', gender: 'Female', category: 'Waitress', salary: '11',location:"Boston",phone:"123-435-6476",Email:"h@gmail.com", age: '22', graduated: 'None',  experience: 'Less than 2 years',feedback:'4', rating: '4.7', mission: '6', reviews: [{reviewer:'Sylvain Michel', comment:"Very organized and Very ponctual. Pleasure to work with"}, {reviewer:'Lynn Domkam', comment:"No Complaints. Pleasure to work with"}, {reviewer:'Lisa Laure', comment:"Would work with him again"}, {reviewer:'Stephanie Cwalina', comment:"Would definitely work with her again.  I was surprised by her professionalism and enthousiam."}], available:[{day:'Monday', time: 'All day'}, {day:'Tuesday', time:'All day'}, {day:'Wednesday', time:'Afternoon'}, {day:'Saturday', time:'All day'}, {day:'Sunday', time:'All day'}], profilePicture: 'images/random4.jpg', description: "Lorem ipsum dolor sit amet, at nam quaeque dissentiunt, homero deserunt ex mei. Euripidis delicatissimi sea et. Pro quod libris primis ex, alterum tacimates an pro. Adversarium consequuntur has no."},
      {id:'3',firstName: 'Henry', lastName: 'Teston', gender: 'Male', category: 'Bartender', salary: '20',location:"Boston",phone:"123-435-6476",Email:"h@gmail.com",  age: '35',  graduated: 'Bartender school',  experience: 'No experience',feedback:'2', rating: '5.0', mission: '15',  available:[{day:'Tuesday', time:'Morning, Evening'}, {day:'Wednesday', time:'Morning'}, {day:'Friday', time: 'All day'}], profilePicture: 'images/review2.jpg', reviews: [ {reviewer:'Derek Ambre', comment:"Good work! Come again anytime"}, {reviewer:'Michel Andres', comment:"Would definitely work with her again.  I was surprised by her professionalism and enthousiam."}], description: "Lorem ipsum dolor sit amet, at nam quaeque dissentiunt, homero deserunt ex mei. Euripidis delicatissimi sea et. Pro quod libris primis ex, alterum tacimates an pro. Adversarium consequuntur has no."},
      {id:'4',firstName: 'Clark',lastName: 'Olivier', gender: 'Male', category: 'Security Agent', salary: '12',location:"Boston",phone:"123-435-6476",Email:"h@gmail.com",age: '45',   graduated: 'Security Network',  experience: 'More than 2 years',feedback:'7', rating: '4.9', mission: '56',  reviews: [{reviewer:'Antoine Melan', comment:"Very ponctual. Pleasure to work with"}, {reviewer:'Antoine Melan', comment:"Very ponctual. Pleasure to work with"}, {reviewer:'Paul Jefferson', comment:"Highly recommend"}, {reviewer:'Stephanie Cwalina', comment:"Would definitely work with her again.  I was surprised by her professionalism and enthousiam."}], available:[{day:'Monday', time: 'All day'}, {day:'Tuesday', time:'All day'}, {day:'Wednesday', time:'All day'}, {day:'Thursday' , time:'All day'}, {day:'Friday', time:'All day'}], profilePicture: 'images/review2.jpg', description: "Lorem ipsum dolor sit amet, at nam quaeque dissentiunt, homero deserunt ex mei. Euripidis delicatissimi sea et. Pro quod libris primis ex, alterum tacimates an pro. Adversarium consequuntur has no."},
      {id:'5',firstName: 'Clara', lastName: 'Bruni', gender: 'Female', category: 'DJ', salary: '17', age: '19',location:"Boston",phone:"123-435-6476",Email:"h@gmail.com",  graduated: 'DJ School',  experience: 'Less than 2 years',feedback:'1', rating: '5.0', mission: '23', reviews: [{reviewer:'Antoine Melan', comment:"Very ponctual. Pleasure to work with"}, {reviewer:'Antoine Melan', comment:"Very ponctual. Pleasure to work with"}, {reviewer:'Paul Jefferson', comment:"Highly recommend"}, {reviewer:'Stephanie Cwalina', comment:"Would definitely work with her again.  I was surprised by her professionalism and enthousiam."}],  available:[{day:'Monday', time: 'All day'}, {day:'Tuesday', time:'Morning, Afternoon'}, {day:'Wednesday', time:'Evening'}], profilePicture: 'images/random4.jpg', description: "Lorem ipsum dolor sit amet, at nam quaeque dissentiunt, homero deserunt ex mei. Euripidis delicatissimi sea et. Pro quod libris primis ex, alterum tacimates an pro. Adversarium consequuntur has no.."},
      {id:'6',firstName: 'Jennifer',lastName: 'Fray' , gender: 'Female', category: 'Waitress', salary: '15',location:"Boston",phone:"123-435-6476",Email:"h@gmail.com", age: '28',  graduated: 'Vatel',  experience: 'Less than 2 years',feedback:'3', rating: '4.8', mission: '2',  reviews: [{reviewer:'Antoine Melan', comment:"Very ponctual. Pleasure to work with"}, {reviewer:'Antoine Melan', comment:"Very ponctual. Pleasure to work with"}, {reviewer:'Paul Jefferson', comment:"Highly recommend"}, {reviewer:'Stephanie Cwalina', comment:"Would definitely work with her again.  I was surprised by her professionalism and enthousiam."}], available:[{day:'Monday', time: 'All day'}, {day:'Tuesday', time:'Morning, Afternoon'}, {day:'Wednesday', time:'Morning'}], profilePicture: 'images/random4.jpg', description: "Lorem ipsum dolor sit amet, at nam quaeque dissentiunt, homero deserunt ex mei. Euripidis delicatissimi sea et. Pro quod libris primis ex, alterum tacimates an pro. Adversarium consequuntur has no."}
    ]
    console.log($scope.workers)
  }
]);

myApp.controller('HomePageWorkerController', ['$scope', function ($scope){
  $scope.pastJobs = [
    {employer:'Hotel Platza', startDate: '04/21/2017', startTime:'10:00 AM', endDate: '04/23/2017', endTime:'08:00 PM', totalEarned: '250', Location: 'Boston', totalHoursWorked: 15 },
    {employer:'Emeraud', startDate: '04/05/2017', startTime:'11:00 AM', endDate: '04/05/2017', endTime:'10:00 PM', totalEarned: '67', Location: 'Boston', totalHoursWorked: 6 },
    {employer:'Balzamique', startDate: '04/10/2017', startTime:'04:00 PM', endDate: '04/15/2017', endTime:'09:30 PM', totalEarned: '1453', Location: 'Boston', totalHoursWorked: 40 },
    {employer:'Cafe Olivier', startDate: '03/15/2017', startTime:'10:00 AM', endDate: '03/17/2017', endTime:'02:00 PM', totalEarned: '250', Location: 'Boston', totalHoursWorked: 15 },
    {employer:'Hotel Platza', startDate: '02/25/2017', startTime:'08:00 AM', endDate: '02/16/2017', endTime:'02:00 PM', totalEarned: '450', Location: 'Boston', totalHoursWorked: 8 },
    

  ]
}
]);

myApp.controller('LandingPageController', ['$scope', function ($scope) {
  $(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if (scroll>400){
      $('.navbar-fixed-top').addClass('navbar-scroll')
    } else{
      $('.navbar-fixed-top').removeClass('navbar-scroll')
    }

  });

  //$scope.employer_step = 'first'
  $('.firstStep').css('color','#1D75B7');
  $('.firstStep').css('font-weight','bold');
  $('.numberOne').css('background-color','#1D75B7');
  $('.numberOne').css('color','white');

  $scope.employer_step = function(el){
   // $scope.employer_step = el
    if(el == 'firstStep'){
      console.log('1');
         $('.firstStep').css('color','#1D75B7');
         $('.firstStep').css('font-weight','bold');
           $('.secondStep').css('font-weight','normal');
           $('.thirdStep').css('font-weight','normal');
          $('.secondStep').css('color','##787878');
           $('.thirdStep').css('color','##787878');
           $('.numberOne').css('background-color','#1D75B7');
           $('.numberOne').css('color','white');
              $('.numberTwo').css('background-color','transparent');
           $('.numberTwo').css('color','#0275d8');
             $('.numberThree').css('background-color','transparent');
           $('.numberThree').css('color','#0275d8');
           $('#screenshot-how-to-get-started-step-image').attr('src','images/ScreenShot-signuppage-employer.png');
      }else if(el == 'secondStep'){
        console.log('2');
        $('.secondStep').css('color','#1D75B7');
        $('.firstStep').css('font-weight','normal');
        $('.secondStep').css('font-weight','bold');
         $('.thirdStep').css('font-weight','normal');
          $('.firstStep').css('color','##787878');
           $('.thirdStep').css('color','##787878');
             $('.numberTwo').css('background-color','#1D75B7');
           $('.numberTwo').css('color','white');
           $('.numberOne').css('background-color','transparent');
           $('.numberOne').css('color','#0275d8');
             $('.numberThree').css('background-color','transparent');
           $('.numberThree').css('color','#0275d8');
              $('#screenshot-how-to-get-started-step-image').attr('src','images/ScreenShot-findworker-employer.png');
      } else if(el == 'thirdStep'){
        console.log('3');
         $('.thirdStep').css('color','#1D75B7');
          $('.firstStep').css('color','##787878');
          $('.secondStep').css('color','##787878');
  $('.thirdStep').css('font-weight','bold');
            $('.numberThree').css('background-color','#1D75B7');
           $('.numberThree').css('color','white');
          $('.numberOne').css('background-color','transparent');
           $('.numberOne').css('color','#0275d8');
            $('.numberTwo').css('background-color','transparent');
           $('.numberTwo').css('color','#0275d8');
            $('.firstStep').css('font-weight','normal');
        $('.secondStep').css('font-weight','normal');
           $('#screenshot-how-to-get-started-step-image').attr('src','images/ScreenShot-sendjoboffer-employer.png');
      }
  }

}]);

myApp.controller('AppPageController', [function () {
    console.log('evening')
  }
]);

angular.module('myApp.directives', [])
  .directive('pwCheck', [function () {
    return {
      require: 'ngModel',
      link: function (scope, elem, attrs, ctrl) {
        var firstPassword = '#' + attrs.pwCheck;
        elem.add(firstPassword).on('keyup', function () {
          scope.$apply(function () {
            var v = elem.val()===$(firstPassword).val();
            ctrl.$setValidity('pwmatch', v);
          });
        });
      }
    }
  }]);

 
var app = angular.module('myapp', ['registerController']);

angular.module('registerController', []).directive('validPasswordC', function () {
    return {
        require: 'ngModel',
        link: function (scope, elm, attrs, ctrl) {
            ctrl.$parsers.unshift(function (viewValue, $scope) {
                var noMatch = viewValue != scope.myForm.password.$viewValue
                ctrl.$setValidity('noMatch', !noMatch)
            })
        }
    }
})


myApp.controller('registerController', ['$scope','$state', function($scope,$state) {


  $scope.user_role = 'worker'
  $('.signup-option-box-worker').css('outline','4px solid white');
  $scope.select_type = function(el){
    $scope.user_role = el
    if($scope.user_role == 'worker'){
         $('.signup-option-box-worker').css('outline','4px solid white');
         $('.signup-option-box-employer').css('outline','0');
      }else {
         $('.signup-option-box-employer').css('outline','4px solid white');
         $('.signup-option-box-worker').css('outline','0');
      }
  }
  $scope.submit = function(isValid){
    if(isValid){
      if($scope.user_role == 'worker'){
        // navigate to worker page
        $state.go('app.homepageworker')
      }else{
        // navigate to employer section
        $state.go('app.homepageemployer')
      }
    }
  }

  
  $scope.currentSection = 1
  $scope.navigateToNextSection = function(next){
    // check that the form is valid so far
  


    //if valid show next section
    if(next){
      if($scope.user_role == 'worker' && $scope.currentSection <5)
        $scope.currentSection++;
      if($scope.user_role == 'employer' && $scope.currentSection < 3)
        $scope.currentSection++;
    }
   
    // if section is last section show submit button
  }
   $scope.navigateToPreviousSection = function(){
   $scope.currentSection--;
   }
  
  var selectedWorkDays = {};
  var calculateDaySelected = function() {
    $scope.daySelected = Object.keys(selectedWorkDays).some(function(key){
      return selectedWorkDays[key];
    })
  }
  $scope.formData = {
    selectedWorkDays: selectedWorkDays
  };

  $scope.checkboxChanged = calculateDaySelected;

//   $scope.step1 = function(event, form){

//   var curStep = $(event.target).closest(".setup-content");
//   var curStepBtn = curStep.attr("id");
//    console.log("Button ID: ", curStepBtn);
//    var Selector='div.setup-panel div a[href="#' + curStepBtn + '"]';
//    console.log(Selector);
//     var    nextStepWizard = $(Selector).parent().next().children("a"),
//         curInputs = curStep.find("input[type='text'],input[type='url']"),
//         isValid = true;
//         console.log('Form is valid? ', form.$invalid);
//       console.log(form)
//       form.$setSubmitted()
//      if (!form.$invalid){
//         console.log("Valid Form");
//         console.log(nextStepWizard);
//         nextStepWizard.removeAttr('disabled');
//         nextStepWizard.trigger('click');

//      }
//      else{
//        console.log("invalid from");
// }
//   }

  $scope.step2 = function(event, form){
    var curStep = $(event.target).closest(".setup-content"),
        curStepBtn = curStep.attr("id"),
        nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
        curInputs = curStep.find("input[type='text'],input[type='url']"),
        isValid = true;
          if (!form.$invalid){
        console.log("Valid Form");
        console.log(nextStepWizard);
        nextStepWizard.removeAttr('disabled');
        nextStepWizard.trigger('click');

     }
     else{
       console.log("invalid from");
}
        
      
  }

  // $(document).ready(function () {
// var navListItems = $('div.setup-panel div a'),
//         allWells = $('.setup-content'),
//         allNextBtn = $('.nextBtn'),
//       allPrevBtn = $('.prevBtn');

// allWells.hide();

// navListItems.click(function (e) {
//     e.preventDefault();
//     var $target = $($(this).attr('href')),
//             $item = $(this);

//     if (!$item.hasClass('disabled')) {
//         navListItems.removeClass('btn-primary').addClass('btn-default');
//         $item.addClass('btn-primary');
//         allWells.hide();
//         $target.show();
//         $target.find('input:eq(0)').focus();
//     }
// });

// allPrevBtn.click(function(){
//     var curStep = $(this).closest(".setup-content"),
//         curStepBtn = curStep.attr("id"),
//         prevStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().prev().children("a");

//         prevStepWizard.removeAttr('disabled').trigger('click');
// });

// allNextBtn.click(function(){
//     var curStep = $(this).closest(".setup-content"),
//         curStepBtn = curStep.attr("id"),
//         nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
//         curInputs = curStep.find("input[type='text'],input[type='url']"),
//         isValid = true;

//     $(".form-group").removeClass("has-error");
//     for(var i=0; i<curInputs.length; i++){
//         if (!curInputs[i].validity.valid){
//             isValid = false;
//             $(curInputs[i]).closest(".form-group").addClass("has-error");
//         }
//     }

//     if (isValid)
//         nextStepWizard.removeAttr('disabled').trigger('click');
// });

// $('div.setup-panel div a.btn-primary').trigger('click');
// });
}
]);




myApp.controller('myreviewsController',['$scope', '$log', function($scope,$log){


}]);

myApp.controller('loginController',['$scope', '$log', '$state', '$rootScope',  function($scope,$log, $state, $rootScope){

      $scope.login = function(){
        console.log($scope.loginForm)
        console.log($scope.email)
        var toState;
        var Tostate;
        // AuthService.login(user)
        // .then(function(data) {
        //   toState = data.isEmployer ? 'app.employee' : 'app.worker';
        //   $state.go(toState)
        // })
        var isEmployer = $scope.email.indexOf('employer') != -1 ? true: false;
        var password = $scope.password.indexOf('employer') != -1 ? true: false;
        var isWorker=$scope.email.indexOf('worker')!= -1 ? true: false;
        var passwordWorker=$scope.password.indexOf('worker')!= -1 ? true: false;
        $rootScope.user = {
          isEmployer: isEmployer,
          isWorker:isWorker
        }
        if (isEmployer==true && password==true){
          toState = isEmployer='app.homepageemployer';
          $state.go(toState)
        }
       else if (isEmployer==true && password==false){
          alert("Incorrect information")
        }
          else if (isWorker==true && passwordWorker==true){
              Tostate = isWorker = 'app.homepageworker';
              $state.go(Tostate)
          }
        else{
           alert("Incorrect information")
        }
       
        console.log(toState)
        $state.go(toState)
      }

     

      // $('.nav-tabs > li > a').click(function() {
      //     if($(this).hasClass('disabled')) {
      //         return false;
      //     } else {
      //         var linkIndex = $(this).parent().index() - 1;
      //         $('.nav-tabs > li').each(function(index, item) {
      //             $(this).attr('rel-index', index - linkIndex);
      //         });
      //     }
      // });


}]);

myApp.controller('paymentHistoryController',['$scope', '$log', '$state',  function($scope,$log, $state){


}]);

myApp.controller('paymentController',['$scope', '$log', '$state',  function($scope,$log, $state){


}]);

myApp.directive('innerHtmlBind', function() {
  return {
    restrict: 'A',
    scope: {
      inner_html: '=innerHtml'
    },
    link: function(scope, element, attrs) {
      scope.inner_html = element.html();
    }
  }
});


////FOR CURRENT TABLE
myApp.controller('currentjobsController', function($http,$scope,$timeout,$log,$rootScope,$state, $mdDialog){

  $scope.useMonths = {};
  $scope.useCategory = {};
  $scope.useLocation = {};

//$scope.selectedMonth = '04';
$scope.status1 = [];

/*
$scope.months = [{ name:'March', val:'03'},
{ name:'April', val:'04'},
{ name:'May', val:'05'},
{ name:'June', val:'06'}]; */
 angular.forEach($rootScope.appointments, function (value, key) {
            if(value.status==1)
            {
            $scope.status1.push(value);
            }
        });  

 // Watch the pants that are selected
    $scope.$watch(function () {
        return {
            filteredAppointments: $scope.status1,
            useMonths: $scope.useMonths,
            useCategory: $scope.useCategory,
            useLocation: $scope.useLocation
        }
    }, function (value) {
        var selected;
        console.log(value);
        $scope.monthsGroup = uniqueItems($scope.status1, 'month');
        var filterAfterMonths = [];        
        selected = false;
        for (var j in $scope.status1) {
            var p = $scope.status1[j];
            for (var i in $scope.useMonths) {
                if ($scope.useMonths[i]) {
                    selected = true;
                    if (i == p.month) {
                        filterAfterMonths.push(p);
                        break;
                    }
                }
            }        
        }
        if (!selected) {
            filterAfterMonths = $scope.status1;
        }

        $scope.categoryGroup = uniqueItems(filterAfterMonths, 'title');
        var filterAfterCategory = [];        
        selected = false;
        for (var j in filterAfterMonths) {
            var p = filterAfterMonths[j];
            for (var i in $scope.useCategory) {
                if ($scope.useCategory[i]) {
                    selected = true;
                    if (i == p.title) {
                        filterAfterCategory.push(p);
                        break;
                    }
                }
            }       
        }
        if (!selected) {
            filterAfterCategory = filterAfterMonths;
        }

        $scope.locationGroup = uniqueItems(filterAfterCategory, 'location');
        var filterAfterLocation = [];        
        selected = false;
        for (var j in filterAfterCategory) {
            var p = filterAfterCategory[j];
            for (var i in $scope.useLocation) {
                if ($scope.useLocation[i]) {
                    selected = true;
                    if (i == p.location) {
                        filterAfterLocation.push(p);
                        break;
                    }
                }
            }    
        }
        if (!selected) {
            filterAfterLocation = filterAfterCategory;
        }       

        $scope.filteredAppointments = filterAfterLocation;   
       //alert($scope.filteredAppointments);     
    }, true);    

/*
$scope.getFiltersCount = function(obj, month){
  console.log(obj)
  alert(obj);
} */

$scope.testClick =function(cId){
  for(var i = 0; i<$scope.status1.length; i++)
  {
    if($scope.status1[i].contract_id == cId){
 
   $scope.status1[i].status=3;
     $state.go('app.currentjobs', {to: $state.current.name}, {reload: true});
     $('#myModal').modal('hide');
     
    }
  }
}

$scope.updateTime = function(){
  $scope.startTime = $('#startTime').val();
  $scope.endTime = $('#endTime').val();
}

$scope.addItem = function(cId){

  // var x=angular.element(document.getElementById("startdate").val());      

if ($scope.startTime=="" || $scope.endTime =="" || $scope.startTime==undefined || $scope.endTime ==undefined ){
  alert("Please enter the date");
}
else{
  for(var i = 0; i<$rootScope.appointments.length; i++)
{
   if($rootScope.appointments[i].contract_id == cId){
     
     var first_name=$rootScope.appointments[i].first_name;
     var last_name=$rootScope.appointments[i].last_name;
     var title=$rootScope.appointments[i].title;
     var status=2;
     
     var contract_id=Math.floor(Math.random() * ((2000-1000)+1) + 1000);
     var start_date=$scope.startTime;
     var end_date=$scope.endTime;
     var phone=$rootScope.appointments[i].phone;
     var wage=$rootScope.appointments[i].wage;
     var Email=$rootScope.appointments[i].Email;
     var paid=$rootScope.appointments[i].paid;
     var location=$rootScope.appointments[i].location;
   
     $rootScope.appointments.push({"contract_id":contract_id,"title":title,"first_name":first_name,"last_name":last_name,"start_date":start_date,"end_date":end_date,"location":location,"phone":phone,"wage":wage,"Email":Email,"paid":paid ,"status":status})
   $('#myModal').modal('hide');
  }
}
}
}


 /*$scope.addItem = function(item) {
        $scope.items.push(item);
        $scope.item = {};
    };
*/

 

///////////////////////////////////////////////////////////////////Modal



$scope.modalDisp = function(clickedInst){
  //alert(clickedInst);
  $scope.currentSelected = clickedInst;

//var modal = document.getElementById('myModal');
	//modal.style.display = "block";
  //j('#myModal').modal('show');
}

});

//////// FOR PENDING TABLE
myApp.controller('pendingController',function($http,$scope,$timeout,$log,$rootScope,$state, $mdDialog){


  $scope.useMonths = {};
  $scope.useCategory = {};
  $scope.useLocation = {};

//$scope.selectedMonth = '04';
$scope.status2 = [];

/*
$scope.months = [{ name:'March', val:'03'},
{ name:'April', val:'04'},
{ name:'May', val:'05'},
{ name:'June', val:'06'}]; */
 angular.forEach($rootScope.appointments, function (value, key) {
            if(value.status==2)
            {
            $scope.status2.push(value);
            }
        });  

 // Watch the pants that are selected
    $scope.$watch(function () {
        return {
            filteredAppointments: $scope.status2,
            useMonths: $scope.useMonths,
            useCategory: $scope.useCategory,
            useLocation: $scope.useLocation
        }
    }, function (value) {
        var selected;
        console.log(value);
        $scope.monthsGroup = uniqueItems($scope.status2, 'month');
        var filterAfterMonths = [];        
        selected = false;
        for (var j in $scope.status2) {
            var p = $scope.status2[j];
            for (var i in $scope.useMonths) {
                if ($scope.useMonths[i]) {
                    selected = true;
                    if (i == p.month) {
                        filterAfterMonths.push(p);
                        break;
                    }
                }
            }        
        }
        if (!selected) {
            filterAfterMonths = $scope.status2;
        }

        $scope.categoryGroup = uniqueItems(filterAfterMonths, 'title');
        var filterAfterCategory = [];        
        selected = false;
        for (var j in filterAfterMonths) {
            var p = filterAfterMonths[j];
            for (var i in $scope.useCategory) {
                if ($scope.useCategory[i]) {
                    selected = true;
                    if (i == p.title) {
                        filterAfterCategory.push(p);
                        break;
                    }
                }
            }       
        }
        if (!selected) {
            filterAfterCategory = filterAfterMonths;
        }

        $scope.locationGroup = uniqueItems(filterAfterCategory, 'location');
        var filterAfterLocation = [];        
        selected = false;
        for (var j in filterAfterCategory) {
            var p = filterAfterCategory[j];
            for (var i in $scope.useLocation) {
                if ($scope.useLocation[i]) {
                    selected = true;
                    if (i == p.location) {
                        filterAfterLocation.push(p);
                        break;
                    }
                }
            }    
        }
        if (!selected) {
            filterAfterLocation = filterAfterCategory;
        }       

        $scope.filteredAppointments = filterAfterLocation;   
       //alert($scope.filteredAppointments);     
    }, true);    



 $scope.testClick =function(cId){
for(var i = 0; i<$scope.status2.length; i++)
  {
    if($scope.status2[i].contract_id == cId){
    $scope.status2[i].status=0;

     $state.go('app.pendingjobs', {to: $state.current.name}, {reload: true});
     $('#myModal').modal('hide');
   }
}
       
      }


$scope.modalDisp = function(clickedInst){
  //alert(clickedInst);
  $scope.currentSelected = clickedInst;

//var modal = document.getElementById('myModal');
	//modal.style.display = "block";
  //j('#myModal').modal('show');
}




});
//// FOR HISTORY TABLE

myApp.controller('historyJobsController',function($http,$scope,$timeout,$log,$rootScope, $mdDialog){
 
 $scope.useMonths = {};
  $scope.useCategory = {};
  $scope.useLocation = {};

//$scope.selectedMonth = '04';
$scope.status1 = [];

/*
$scope.months = [{ name:'March', val:'03'},
{ name:'April', val:'04'},
{ name:'May', val:'05'},
{ name:'June', val:'06'}]; */
 angular.forEach($rootScope.appointments, function (value, key) {
            if(value.status==3)
            {
            $scope.status1.push(value);
            }
        });  

 // Watch the pants that are selected
    $scope.$watch(function () {
        return {
            filteredAppointments: $scope.status1,
            useMonths: $scope.useMonths,
            useCategory: $scope.useCategory,
            useLocation: $scope.useLocation
        }
    }, function (value) {
        var selected;
        console.log(value);
        $scope.monthsGroup = uniqueItems($scope.status1, 'month');
        var filterAfterMonths = [];        
        selected = false;
        for (var j in $scope.status1) {
            var p = $scope.status1[j];
            for (var i in $scope.useMonths) {
                if ($scope.useMonths[i]) {
                    selected = true;
                    if (i == p.month) {
                        filterAfterMonths.push(p);
                        break;
                    }
                }
            }        
        }
        if (!selected) {
            filterAfterMonths = $scope.status1;
        }

        $scope.categoryGroup = uniqueItems(filterAfterMonths, 'title');
        var filterAfterCategory = [];        
        selected = false;
        for (var j in filterAfterMonths) {
            var p = filterAfterMonths[j];
            for (var i in $scope.useCategory) {
                if ($scope.useCategory[i]) {
                    selected = true;
                    if (i == p.title) {
                        filterAfterCategory.push(p);
                        break;
                    }
                }
            }       
        }
        if (!selected) {
            filterAfterCategory = filterAfterMonths;
        }

        $scope.locationGroup = uniqueItems(filterAfterCategory, 'location');
        var filterAfterLocation = [];        
        selected = false;
        for (var j in filterAfterCategory) {
            var p = filterAfterCategory[j];
            for (var i in $scope.useLocation) {
                if ($scope.useLocation[i]) {
                    selected = true;
                    if (i == p.location) {
                        filterAfterLocation.push(p);
                        break;
                    }
                }
            }    
        }
        if (!selected) {
            filterAfterLocation = filterAfterCategory;
        }       

        $scope.filteredAppointments = filterAfterLocation;   
       //alert($scope.filteredAppointments);     
    }, true);    






 $scope.testClick =function(cId){
for(var i = 0; i<$rootScope.appointments.length; i++)
{
   if($rootScope.appointments[i].contract_id == cId){
     $rootScope.appointments[i].status = 3;
   }
}
       
       
      }

});


var app = angular.module("profileApp",[]);
	app.controller("ProfileWorkerController",function($scope){
		$scope.account = {
			firstName : 'Ahmad',
			lastName : 'Hariri',
			picture : '../images/Ahmad.jpg',
			dateOfBirth : 'Jan 1, 2001',
			address : '360 Huntington Ave.',
			city : 'Boston',
			state : 'MA',
			zipCode : '02115',
			phone : '123-456-7890',
			gender : 'Male',
			
			schedule : [{day:'Monday', allDay:false, morning:false, afternoon:false, evening:false },
						{day:'Tuesday', allDay:false, morning:false, afternoon:false, evening:false },
						{day:'Wednesday', allDay:false, morning:false, afternoon:false, evening:false },
						{day:'Thursday', allDay:false, morning:false, afternoon:false, evening:false },
						{day:'Friday', allDay:false, morning:false, afternoon:false, evening:false },
						{day:'Saturday', allDay:false, morning:false, afternoon:false, evening:false },
						{day:'Sunday', allDay:false, morning:false, afternoon:false, evening:false },
					   ],
			experience : 'Developer',
			experienceLevel : '',
			degreeCertificate : '',
			graduationYear : ''
		};
		$scope.fullName = function() {
        	return $scope.account.firstName + ' ' + $scope.account.lastName;
		};
		$scope.experience = ['Waiter','Bartender','Other'];
		$scope.experienceLevel = ['No experience','Less than 2 years','More than 2 years'];
		$scope.degreeCertificate = ['Bachelor','Master','Deploma','Course'];
		$scope.gender = ['Male','Female','Transgender','Other'];
		$scope.validForm = true;
		
		$scope.graduationYear = ['1980','1981','1982','1983','1984','1985','1986','1987','1988','1989','1990','1991','1992','1993','1994','1995','1996','1997','1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017'];
		
		$scope.cancel = function() {
        	$scope.tempAccount = angular.copy($scope.account);
		};
		$scope.save = function() {
        	$scope.account = angular.copy($scope.tempAccount);
		};
		$scope.canSave = function() {
        	if($scope.tempAccount.firstName == undefined || $scope.tempAccount.lastName == undefined || $scope.tempAccount.experience == undefined || $scope.tempAccount.experienceLevel == undefined )return true;
			else return false;
		};
	});
		
  
  // JavaScript Document

var app2 = angular.module("coProfileApp",[]);
	app2.controller("ProfileEmployerController",function($scope){
		$scope.account = {
			firstName : 'Ahmad',
			lastName : 'Hariri',
			email : 'solo@alrawasi.co',
			companyName : 'Solo Coffee',
			picture : '../images/Solo.jpg',
			address : '360 Huntington Ave.',
			city : 'Boston',
			state : 'MA',
			zipCode : '02115',
			phone : '123-456-7890',
			industry : 'Café',
			sirenNumber : '',

		};
		$scope.fullName = function() {
        	return $scope.account.firstName + ' ' + $scope.account.lastName;
		};
		$scope.industries = ['Café','Restaurant','Hotel','Bar','Hostel'];
		
		$scope.cancel = function() {
        	$scope.tempAccount = angular.copy($scope.account);
		};
		$scope.save = function() {
        	$scope.account = angular.copy($scope.tempAccount);
		};
		$scope.canSave = function() {
        	if($scope.tempAccount.firstName == undefined || $scope.tempAccount.lastName == undefined || $scope.tempAccount.email == undefined || $scope.tempAccount.sirenNumber == undefined || $scope.tempAccount.industry == undefined)return true;
			else return false;
		};
	});
		
		
		