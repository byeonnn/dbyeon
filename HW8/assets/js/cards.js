function startfunc() {


// <!-- MODAL -->

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementsByClassName("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// Define model_right and model_left for the modals
var model_left=document.getElementsByClassName("modal-left")[0];
var modal_right=document.getElementsByClassName("modal-right")[0];

// When the user clicks the button, open the modal
btn[1].onclick = function() {
    modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}






// Creating Javascript arrays for the tarot information
var tarot_info = [{
  title: "The Fool",
  image: "assets/img/0.jpg",
  description: "<br><b>Keywords:</b> faith, hope, trust and contentment, high ideals and the possibility of a brighter tomorrow, choice and personal effort. <br><br> You seem to be waiting for all the pieces to fall in place, and will be feeling discontent or uneasy as you inwardly know that there is a better way of life than what you are living now.",
},
{
  title: "The Magician",
  image: "assets/img/1.jpg",
  description: "<br><b>Keywords:</b> new beginnings, new opportunities to use talents, love urges, finance and the future.<br><br>You have a desire to start something new, you wish to do, act or go forth, you may be wanting a miracle to happen in your life to change what is now. In time, you will experience a new beginning and gain your wish.",
},
{
  title: "The High Priestess",
  image: "assets/img/2.jpg",
  description: "<br><b>Keywords:</b> waiting, learning, trade, finance and negotiations, public activities or public relations.<br><br>Your desire is to follow through with a course of action or to utilize an idea or skill, there may be a few stops and starts, and things to sort out, but after that, things will begin to flow more smoothly. A pleasant surprise is in store for you.",
},
{
  title: "The Empress",
  image: "assets/img/3.jpg",
  description: "<br><b>Keywords:</b> feelings, emotions, self expression, socializing, or short and long distance trips.<br><br>You feel that you are discontented because something is missing or lacking in your life. You want to end something meaningful, creative or fulfilling to do with your life but don’t know what.",
},
{
  title: "The Emperor",
  image: "assets/img/4.jpg",
  description: "<br><b>Keywords:</b> construction and formation <br><br>Something or someone will change your present situation or present you with opportunities to enter into a new partnership or relationship.<br><br> You may wish that your life would change in some way, it may involve material gain or changes to your relationship.<br><br>You will soon hear something that will shed new light on your present situation and this will come as a great relief.",
},
{
  title: "The Hierophant",
  image: "assets/img/5.jpg",
  description: "<br><b>Keywords:</b> is on establishments, organizations, truth and understanding, new opportunities and family structures.<br><br> You need to establish a deeper bond with someone or to break the bonds that block, restrict or hinder you in what you want. Don’t allow yourself to be manipulated or put down, you must learn to be more firm and insist on respect from those around you.",
},

{
  title: "The Lovers",
  image: "assets/img/6.jpg",
  description: "<br><b>Keywords:</b> sudden and unpredictable changes, love, friendship, unions and meetings, choice, travel, and personnel property.<br><br>You may be faced with a dilemma that needs attention or a decision on your part, you will have to make a choice, to continue or move on in a different direction.",
},


{
  title: "The Chariot",
  image: "assets/img/7.jpg",
  description: "<br><b>Keywords:</b> introspection, re–evaluation, decisions of passion and confusing issues. <br><br> You will be re–examining your affairs and assessing your situation. <br><br>Situations are going to become very confusing and uncomfortable. You will probably feel totally overwhelmed by your circumstances. Only when you let go will it resolve it self or get better.",
},



{
  title: "Strength",
  image: "assets/img/8.jpg",
  description: "<br><b>Keywords:</b> on challenging situations in relation to business and finance, family matters that stemmed from the past, new beginnings and results or rewards for persistence and effort.<br><br> You could be feeling that love, business or relationships may be stagnating and need improving. Fortunately this is a temporary condition as things will soon take a turn for the better. ",
},



{
  title: "The Hermit",
  image: "assets/img/9.jpg",
  description: "<br><b>Keywords:</b> seeking and finding, completing and perfecting and problem solving. <br><br>You will experience the final chapter in one phase of your life and a dawning of the next. People from the past may re–enter your life in the near future.<br><br>You will be experiencing sadness or apprehension due to a sudden development that evokes a sense of loss, but don’t worry, things will change and with a sense of great relief and accomplishment.",
},

{
  title: "Wheel of Fortune",
  image: "assets/img/10.jpg",
  description: "<br><b>Keywords:</b> Conflicts of interest, unexpected developments, important news that changes or alters your course, also important news and information.<br><br>You will be experiencing fluctuating mood swings, this is a result of problems related to work and personnel situations and you will find it very hard to keep your emotions under control. You will want to change your destiny or get back together with someone you have parted from.",
},


{
  title: "Justice",
  image: "assets/img/11.jpg",
  description: "<br><b>Keywords:</b> reaching goals, settlements, legal matters or income.<br><br>You have a need to understand the workings of destiny in your life.<br><br>You will be troubled about an unresolved dilemma or business issue, unfortunately you will have to wait, so be patient.",
},


{
  title: "The Hanged Man",
  image: "assets/img/12.jpg",
  description: "<br><b>Keywords:</b> your life, values and the way you are thinking.<br><br>Your dreams no longer seem valid, and everything that has been done seems hopeless, obsolete or meaningless.<br><br>You may be feeling a lack of self worth in regard to your life, or feeling rather anxious about situations and circumstances around you. You have a sense of not knowing where you are going or what to do and you may be waiting for someone to make the first move or do something, and feel that control has been taken out of your hands.",
},

{
  title: "Death",
  image: "assets/img/13.jpg",
  description: "<br><b>Keywords:</b>endings and new beginnings in career, partnerships, new opportunities or a new lifestyle. <br><br>You may be feeling unhappy, depressed or overwhelmed by events or circumstances that seem to be conspiring to change your course or status. You seemed to have been short changed as you where hoping for so much more than you received.  <br><br>It is time to let go of situations that are no longer beneficial to you, and you will find that if you try to hold on to.",
},

{
  title: "Temperance",
  image: "assets/img/14.jpg",
  description: "<br><b>Keywords:</b> your life, values and the way you are thinking.<br><br>Your dreams no longer seem valid, and everything that has been done seems hopeless, obsolete or meaningless.<br><br>You may be feeling a lack of self worth in regard to your life, or feeling rather anxious. You have a sense of not knowing where you are going or what to do and you may be waiting for someone to make the first move or do something, and feel that control has been taken out of your hands.",
},

{
  title: "The Devil",
  image: "assets/img/15.jpg",
  description: "<br><b>Keywords:</b> adverse conditions or negative cycle of events.<br><br> You are confused or indecisive about decisions and may not be seeing the whole picture. You may be disheartened by the never ending battle to succeed and feel that you are being blocked at every turn. You wish that you could end a negative situation. In the end, you will be fed up with the lack of results for your efforts and are you trying to keep your chin up. You are thinking of giving up or withdrawing from a situation.",
},

{
  title: "The Tower",
  image: "assets/img/16.jpg",
  description: "<br><b>Keywords:</b> ambitions and goals that have been built on false premises.<br><br>This card symbolizes a relentless destruction that comes as a “gift” from heaven, a healing energy. It has an energy of destruction, yes, but it also has regenerative energy. Sometimes we need to be shaken in order to abandon painful relationships, situations or jobs that stop our progress. Nevertheless, change can be tough to manage. Keep in mind, however, that relief will come shortly afterward.",
},

{
  title: "The Star",
  image: "assets/img/17.jpg",
  description: "<br><b>Keywords:</b> the futures, faith and what could be.<br><br> You will be hurt or disappointed by harsh words, enforced estrangement and circumstances that block your development for the time being.<br><br>You will be unhappy with the status of your work and will want things to change or improve. You will want to find or regain a sense of meaning, inspiration or purpose to your life and hope your future will be better than your past.",
},

{
  title: "The Moon",
  image: "assets/img/18.jpg",
  description: "<br><b>Keywords:</b> inner disturbances or feelings of disquiet or dread or foreboding. <br><br>Situations are deceptive or changeable in whatever area is important to you at the moment.<br><br>You will be feeling crushed by a huge disappointment, someone or something you counted on has let you down and you will be completely devastated. You are going to be disillusioned by others actions, words or deeds and you may have been chastised unfairly.",
},

{
  title: "The Sun",
  image: "assets/img/19.jpg",
  description: "<br><b>Keywords:</b>society and the public, self–image or keeping up with appearances; achievement, accomplishment, marriage unions or mergers. You will be feeling drained emotionally, you will also be tired and out of sorts. You want to get together with someone or you may be hoping to get married. You will be troubled because things should be good to all into intents and purposes, but they are not, because your heart is so unfulfilled.",
},

{
  title: "Judgement",
  image: "assets/img/20.jpg",
  description: "<br><b>Keywords:</b> new personal relationships, new business ventures or partnerships, beneficial help, improved conditions, changes in habit and purpose.<br><br>You will be disappointed in something which did not, or is not working out as anticipated, but this is a temporary condition."
},
{
  title: "The World",
  image: "assets/img/21.jpg",
  description: "<br><b>Keywords:</b>: world issues or world shaking events, encounters and gatherings, travel, change, risks and new opportunities, but also on restriction wall or blocks.<br><br>You will be disappointed in your inability to break free of restrictive influences that are blocking you from manifesting any of your goals. You want to liberate yourself from limitation and lack other people’s problems.",
},

]


// Clicking each card would return the array element defined above in the modal
btn[0].onclick = function() {
      modal.style.display = "block";

  title = tarot_info[0].title;
  image = tarot_info[0].image;
  description = tarot_info[0].description;

  modal_right.children[0].innerHTML=title;
  modal_right.children[1].innerHTML=description;


}
btn[1].onclick = function() {
      modal.style.display = "block";

  title = tarot_info[1].title;
  image = tarot_info[1].image;
  description = tarot_info[1].description;

  model_left.children[0].src=image;
  modal_right.children[0].innerHTML=title;
  modal_right.children[1].innerHTML=description;

}
btn[2].onclick = function() {
      modal.style.display = "block";

  title = tarot_info[2].title;
  image = tarot_info[2].image;
  description = tarot_info[2].description;

  model_left.children[0].src=image;
  modal_right.children[0].innerHTML=title;
  modal_right.children[1].innerHTML=description;
}

btn[3].onclick = function() {
      modal.style.display = "block";

  title = tarot_info[3].title;
  image = tarot_info[3].image;
  description = tarot_info[3].description;

  model_left.children[0].src=image;
  modal_right.children[0].innerHTML=title;
  modal_right.children[1].innerHTML=description;
}

btn[4].onclick = function() {
      modal.style.display = "block";

  title = tarot_info[4].title;
  image = tarot_info[4].image;
  description = tarot_info[4].description;

  model_left.children[0].src=image;
  modal_right.children[0].innerHTML=title;
  modal_right.children[1].innerHTML=description;
}

btn[5].onclick = function() {
      modal.style.display = "block";

  title = tarot_info[5].title;
  image = tarot_info[5].image;
  description = tarot_info[5].description;

  model_left.children[0].src=image;
  modal_right.children[0].innerHTML=title;
  modal_right.children[1].innerHTML=description;
}

btn[6].onclick = function() {
      modal.style.display = "block";

  title = tarot_info[6].title;
  image = tarot_info[6].image;
  description = tarot_info[6].description;

  model_left.children[0].src=image;
  modal_right.children[0].innerHTML=title;
  modal_right.children[1].innerHTML=description;
}
btn[7].onclick = function() {
      modal.style.display = "block";

  title = tarot_info[7].title;
  image = tarot_info[7].image;
  description = tarot_info[7].description;

  model_left.children[0].src=image;
  modal_right.children[0].innerHTML=title;
  modal_right.children[1].innerHTML=description;
}

btn[8].onclick = function() {
      modal.style.display = "block";

  title = tarot_info[8].title;
  image = tarot_info[8].image;
  description = tarot_info[8].description;

  model_left.children[0].src=image;
  modal_right.children[0].innerHTML=title;
  modal_right.children[1].innerHTML=description;
}


btn[9].onclick = function() {
      modal.style.display = "block";

  title = tarot_info[9].title;
  image = tarot_info[9].image;
  description = tarot_info[9].description;

  model_left.children[0].src=image;
  modal_right.children[0].innerHTML=title;
  modal_right.children[1].innerHTML=description;
}


btn[10].onclick = function() {
      modal.style.display = "block";

  title = tarot_info[10].title;
  image = tarot_info[10].image;
  description = tarot_info[10].description;

  model_left.children[0].src=image;
  modal_right.children[0].innerHTML=title;
  modal_right.children[1].innerHTML=description;
}


btn[11].onclick = function() {
      modal.style.display = "block";

  title = tarot_info[11].title;
  image = tarot_info[11].image;
  description = tarot_info[11].description;

  model_left.children[0].src=image;
  modal_right.children[0].innerHTML=title;
  modal_right.children[1].innerHTML=description;
}


btn[12].onclick = function() {
      modal.style.display = "block";

  title = tarot_info[12].title;
  image = tarot_info[12].image;
  description = tarot_info[12].description;

  model_left.children[0].src=image;
  modal_right.children[0].innerHTML=title;
  modal_right.children[1].innerHTML=description;
}




btn[13].onclick = function() {
      modal.style.display = "block";

  title = tarot_info[13].title;
  image = tarot_info[13].image;
  description = tarot_info[13].description;

  model_left.children[0].src=image;
  modal_right.children[0].innerHTML=title;
  modal_right.children[1].innerHTML=description;
}


btn[14].onclick = function() {
      modal.style.display = "block";

  title = tarot_info[14].title;
  image = tarot_info[14].image;
  description = tarot_info[14].description;

  model_left.children[0].src=image;
  modal_right.children[0].innerHTML=title;
  modal_right.children[1].innerHTML=description;
}


btn[15].onclick = function() {
      modal.style.display = "block";

  title = tarot_info[15].title;
  image = tarot_info[15].image;
  description = tarot_info[15].description;

  model_left.children[0].src=image;
  modal_right.children[0].innerHTML=title;
  modal_right.children[1].innerHTML=description;
}


btn[16].onclick = function() {
      modal.style.display = "block";

  title = tarot_info[16].title;
  image = tarot_info[16].image;
  description = tarot_info[16].description;

  model_left.children[0].src=image;
  modal_right.children[0].innerHTML=title;
  modal_right.children[1].innerHTML=description;
}


btn[17].onclick = function() {
      modal.style.display = "block";

  title = tarot_info[17].title;
  image = tarot_info[17].image;
  description = tarot_info[17].description;

  model_left.children[0].src=image;
  modal_right.children[0].innerHTML=title;
  modal_right.children[1].innerHTML=description;
}


btn[18].onclick = function() {
      modal.style.display = "block";

  title = tarot_info[18].title;
  image = tarot_info[18].image;
  description = tarot_info[18].description;

  model_left.children[0].src=image;
  modal_right.children[0].innerHTML=title;
  modal_right.children[1].innerHTML=description;
}


btn[19].onclick = function() {
      modal.style.display = "block";

  title = tarot_info[19].title;
  image = tarot_info[19].image;
  description = tarot_info[19].description;

  model_left.children[0].src=image;
  modal_right.children[0].innerHTML=title;
  modal_right.children[1].innerHTML=description;
}

btn[20].onclick = function() {
      modal.style.display = "block";

  title = tarot_info[20].title;
  image = tarot_info[20].image;
  description = tarot_info[20].description;

  model_left.children[0].src=image;
  modal_right.children[0].innerHTML=title;
  modal_right.children[1].innerHTML=description;
}

btn[21].onclick = function() {
      modal.style.display = "block";

  title = tarot_info[21].title;
  image = tarot_info[21].image;
  description = tarot_info[21].description;

  model_left.children[0].src=image;
  modal_right.children[0].innerHTML=title;
  modal_right.children[1].innerHTML=description;
}

};
