(function() {
  var app = angular.module('dataDashApp', []);
    


  app.controller('dataDashController', function($scope) {
      
      $scope.movies = [
          {
          title: "King Kong",
          date: new Date("May 02, 2015"),
          time: [
             "7:40 AM",  "8:40 PM",  "9:20 PM"]
          ,
          
          
      },{
          title: "Jungle Man",
          date: [new Date("May 02, 2015")],
          time: ["8:20 PM", "9:20 PM", "10:15 PM"],
//          date: new Date("May 02, 2015"),
//          time: "10:00 PM",
//          date: new Date("May 03, 2015"),
//          time: "11:00 AM"
      }]
      
//      for(var i = 0; $scope.movies.length; i++){
//          var movieTitle[i] = $scope.movies[i].title;
//          
//      }
      // Data
//      $scope.data = [{
//        distance: 3.24,
//        time: 34,
//        date: new Date("May 01, 2015")
//      }, {
//        distance: 4.24,
//        time: 38,
//        date: new Date("May 12, 2015")
//      }, {
//        distance: 3.67,
//        time: 37,
//        date: new Date("May 23, 2015")
//      }, {
//        distance: 6.50,
//        time: 59,
//        date: new Date("June 02, 2015")
//      }, {
//        distance: 5.64,
//        time: 52,
//        date: new Date("June 12, 2015")
//      }, {
//        distance: 4.90,
//        time: 45,
//        date: new Date("June 22, 2015")
//      }, {
//        distance: 3.6,
//        time: 33,
//        date: new Date("July 07, 2015")
//      }, {
//        distance: 8.56,
//        time: 81,
//        date: new Date("July 17, 2015")
//      }, {
//        distance: 9.34,
//        time: 92,
//        date: new Date("July 31, 2015")
//      }, {
//        distance: 10.1,
//        time: 98,
//        date: new Date("August 11, 2015")
//      }, {
//        distance: 7.56,
//        time: 59,
//        date: new Date("August 27, 2015")
//      }, {
//        distance: 9.3,
//        time: 84,
//        date: new Date("August 31, 2015")
//      }, {
//        distance: 6.7,
//        time: 54,
//        date: new Date("September 2, 2015")
//      }, {
//        distance: 11.43,
//        time: 108,
//        date: new Date("September 12, 2015")
//      }, {
//        distance: 4.5,
//        time: 34,
//        date: new Date("September 22, 2015")
//      }, {
//        distance: 13.1,
//        time: 128,
//        date: new Date("October 18, 2015")
//      }, {
//        distance: 6.4,
//        time: 58,
//        date: new Date("October 26, 2015")
//      }]
//
//      console.log($scope.data)
//        $scope.daysJogged = [{
//            day: "Sunday",
//            count: 0
//        },{
//            day: "Monday",
//            count:0
//        },{
//            day: "Tuesday",
//            count: 0
//        },{
//            day:"Wednesday",
//            count: 0
//        },{
//            day:"Thursday",
//            count: 0
//        },{
//            day:"Friday",
//            count: 0
//        },{
//            day:"Saturday",
//            count: 0
//        }]
//        $scope.monthsJogged = [{
//            month: "January",
//            count: 0
//        },{
//            month: "February",
//            count: 0
//        },{
//            month: "March",
//            count: 0
//        },{
//            month: "April",
//            count: 0
//        },{
//            month: "May",
//            count: 0
//        },{
//            month:"June",
//            count: 0
//        },{
//            month: "July",
//            count: 0
//        },{
//            month: "August",
//            count:0
//        },{
//            month: "September",
//            count:0
//        },{
//            month: "October",
//            count: 0
//        },{
//            month: "November",
//            count: 0
//        },{
//            month: "December",
//            count: 0
//        }];
//      
//      $scope.total = 0;
//      
//      //For Loop To Count
//      
//      for(var i = 0; i < $scope.date.length; i++){
//          //Count Total Activities 
//          $scope.total++;
//          //Set Pace 
//          $scope.data.pace[i] = $scope.data[i].time/$scope.data[i].distance;
//          //Get day number
//          var day = $scope.data[i].date.getDay();
//          //Increase day count
//          $scope.daysJogged[day].count++;
//          //Get Month Number
//          var month = $scope.data[i].date.getMonth();
//          //Increase Month Count
//          $scope.monthsJogged[month].count++;
//          
//      };
//      
      
    })
})();
