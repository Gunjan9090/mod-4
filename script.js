(function(){
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

   for (var indx in names) {
    var firstLetter = names[indx].charAt(0).toLowerCase(); 

    //call byeSpeaker for letters that begin with "j" else call helloSpeaker
    if (firstLetter === 'j') {
      byeSpeaker.speak(names[indx]);
    } else {
      helloSpeaker.speak(names[indx]);
    }
  }

})();
