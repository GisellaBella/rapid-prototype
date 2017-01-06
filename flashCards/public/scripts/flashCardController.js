var app = angular.module('flashCardApp');
// .controller('flashCardController', flashCardController);


// flashCardController.$inject = [ "$scope"];
// "$http",

// function getQuestions (){}
//   $http
//     .get ("http://localhost:3000/")
//     .then(function(response) {
//       vm.questionsList = response.data;
//     });

//   function getQuestion(){}
//   $http
//     .get ("http://localhost:3000/api/cards/)"
//     .then(function(response) {
//       vm.singleQuestion = response.data;
//     });
 



// }


app.controller("flashCardController", function($scope){
	console.log("is this working");
  $scope.flashcards = [
{ 	"question" : "Andare", 
	"answer": "go",
	"answerHidden" : true, }, 
{	"question" : "Arrivederci", 
	"answer": "Goodbye", 
	"answerHidden" : true, }, 
{ 	"question" : "Brother", 
	"answer": "Fratello", 
	"answerHidden" : true, }, 
{ 	"question" : "Buon pomeriggio", 
	"answer": "Good afternoon",  
	"answerHidden" : true, }, 
{ 	"question" : "Buonanotte", 
	"answer": "Good night",
	"answerHidden" : true, }, 
{	"question" : "Buonasera", 
	"answer": "Good evening",
	"answerHidden" : true, },
  ];

 
});
