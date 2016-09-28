angular.module('chatroom').service('messageService', function($http){
  //Here you'll need to create two methods. One called postMessage and the other called getMessages.

  //On the lines below create a getMessages method. This method will retrieve data from the parse backend.
  //The url for the get request should be 'http://practiceapi.devmounta.in/api/cookies'
  //Be sure to return whatever gets returned from $http so you can call .then in your controller.



  //On the line below create the postMessage method. This method will add data to the message backend.
  //The url for the request needs to be 'https://api.parse.com/1/classes/chat'
  //Because we're making a POST request, we need a way to tell parse the data we want to give it,
    //in your $http call (along with url and method) have a data property which has a value that is equal to another object which a key of text and a value of the message being passed to parse. IE data: {text: yourMessage}
  //Also, remember that $http returns a promise. So if you return the whole $http call (return $http(...)), you can then use .then in your controller.

  //postMessage method here
this.postMessage = function(yourMessage){
  return $http({
    method: 'POST',
    url: 'http://practiceapi.devmounta.in/api/chats',
    data: {
      message: yourMessage
    }
  });
};

  //getMessages method here
  this.getMessages = function(){
    return $http({
      method: 'GET',
      url: 'http://practiceapi.devmounta.in/api/chats'
    });
  };
});
