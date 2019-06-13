Array.prototype.shuffle = function() {
    var input = this;
     
    for (var i = input.length-1; i >=0; i--) {
     
        var randomIndex = Math.floor(Math.random()*(i+1)); 
        var itemAtIndex = input[randomIndex]; 
         
        input[randomIndex] = input[i]; 
        input[i] = itemAtIndex;
    }
    return input;
}
$("#click").click( function() {
  var allValues = [$("#noun1").val(), $("#noun2").val(),$("#verb1").val(), $("#verb2").val(),$("#adj1").val(), $("#adj2").val(), $("#adj3").val(), $("#adj4").val(), $("#adj5").val(), $("#name").val(), $("#friend").val(), $("#place").val(), $("#verbs").val(), $("#verbing").val(), $("#adj-est").val(), $("#adverb").val()]
  var nouns = [$("#noun1").val(), $("#noun2").val()]
  var verbs = [$("#verb1").val(), $("#verb2").val()]
  var adjs = [$("#adj1").val(), $("#adj2").val(), $("#adj3").val(), $("#adj4").val(), $("#adj5").val()]
  nouns.shuffle()
  verbs.shuffle()
  adjs.shuffle()
  var name = $("#name").val()
  var friend = $("#friend").val()
  var place = $("#place").val()
  var verbz = $("#verbs").val()
  var verbing = $("#verbing").val()
  var adjest = $("#adj-est").val()
  var adverb = $("#adverb").val()
  var text = `Hi ${friend}! \n I’m having an ${adjs[0]} time at Kode with Klossy this week. The teachers are so ${adjs[1]}, the TA’s are really good at ${verbing}, and I’ve made so many ${adjs[2]} friends so ${adverb}. I’ve already learned how to code a(n) ${nouns[0]} that ${verbz} for the ${nouns[1]}, and soon, I’ll have an ${adjs[3]} app that can ${verbs[0]} all day long. I wish camp could last forever, hopefully next year you can come with me! We’ll get to ${verbs[1]} together, eat ${adjs[4]} food, and become the ${adjest} coders in ${place}.\n Lots of love,\n ${name}`
  var empty=false
  allValues.forEach(function(value){
    if (value=="") {
      empty=true
      console.log("im empty!")
    }
  })
  if (empty == true) {
    alert("HEY! you have to fill out the WHOLE form!")
  } else {
    $("h2").text(text)
  }
})

console.log($("h2").text())