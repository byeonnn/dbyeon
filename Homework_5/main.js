//


//Bring data from the local storage
var getData=JSON.parse(localStorage.getItem("sentdata"));

//function that shows the number of items in a cart
function createCarticon(){

//If there is data in localStorage, following statement would work
if(getData!=null){
  var totalNum=0
//add the numbers in an array called 'getData["quantity"]'
  for(var i=0; i<getData["quantity"].length; i++){
    totalNum+=getData["quantity"][i]*1;
  }
  $('.item h3').text(totalNum);
  $('.carttotal').css('opacity',"1");
}
};



//function that creates the list in a cart
function createCart(){
//If there is data in localStorage, following statement would work to define variables
if(getData!=null){
  var temp_quantity=getData["quantity"];
  var temp_glazing=getData["glazing"];
  var temp_flavor=getData["flavor"];
  var subtotal=0;
  //append <li> contents </li> for the numbers of the items in the localStorage
for (i=0;i<temp_quantity.length;i++){
  $('.glz').append("<li class=num"+i+">"+temp_glazing[i]+"</li>");
  $('.qtt').append("<li class=num"+i+">"+temp_quantity[i]+"</li>");
  $('.pr').append("<li class=num"+i+">"+("$"+temp_quantity[i] * 5)+"</li>");
  $('.photos').append('<li class=num'+i+'> <img src="images/home-banner.jpg" class="cart-product-image" alt="original-glutenfree">  <br>Cinnamon Roll<br />('+temp_flavor[i]+')<br></li>');
  $('.rv').append('<li class=num'+i+'>Remove</li>');
  subtotal+=temp_quantity[i] * 5
}
$('.wrap_subtotal').text("Subtotal: $"+subtotal);
}

}

 $(document).ready(function(){



//click-event of Remove button on the cart page
$('.rv li').click(function(){
  var classname=$(this).attr("class");
  classname='.'+classname;
  var classnumber=(classname[4]*1);
  var subtotal=$('.wrap_subtotal').text();
  subtotal=subtotal.slice(11,);
  subtotal=(subtotal*1)-(temp_quantity[classnumber] * 5)
  $('.wrap_subtotal').text("Subtotal: $"+subtotal);
  $(classname).remove();
  temp_quantity.splice(classnumber, 1);
  temp_glazing.splice(classnumber, 1);
  temp_flavor.splice(classnumber, 1);


//update the data to the localStorage
  var senddata = {"quantity" : temp_quantity, "glazing" : temp_glazing, "flavor":temp_flavor}
  localStorage.setItem("sentdata",JSON.stringify(senddata));
  createCarticon();

})

//If there is no data in the localStorage for the following variables, assign an empty array to use 'push' method
if(getData == null){temp_quantity = [];
temp_glazing=[];var temp_flavor=[];}
//if there is data, assign the data from localStorage to the variables
else{
  var temp_quantity=getData["quantity"];
  var temp_glazing=getData["glazing"];
  var temp_flavor=getData["flavor"];
}
var temp_data_qtt = 0;
var temp_data_glz=0;


//Get the quantity data when the 'quantity' option is selected
$(".quantity").click(function(){
  temp_data_qtt=$(this).val();
})

//Get the glazing data when the 'glazing' option is selected
$(".glazing").click(function(){
  temp_data_glz=$(this).val();

  if ($(this).attr('id')=="none") {
    $("#picture").attr('src', "images/home-banner.jpg");
  } else if ($(this).attr('id')=="sugarmilk") {
    $("#picture").attr('src', "images/glazing-sugarmilk.jpg");
} else if ($(this).attr('id')=="vanillamilk") {
    $("#picture").attr('src', "images/glazing-vanillamilk.jpg");
} else if ($(this).attr('id')=="doublechocolate") {
    $("#picture").attr('src', "images/doublechocolate.jpg");
  };


})





//Send the data of the flavor, quantity, and glazing to the localStorage when the 'add to cart' button is clicked
$(".button_addtocart").click(function(){
  temp_flavor.push($('.flavor_info').text());
  temp_quantity.push(temp_data_qtt);
  temp_glazing.push(temp_data_glz);
  var senddata = {"quantity" : temp_quantity, "glazing" : temp_glazing, "flavor":temp_flavor}
  localStorage.setItem("sentdata",JSON.stringify(senddata));
  location.reload();







//when the data is updated, update the number of items next to the cart icon
  createCarticon();
})

$('.arrow').click(function(){
  console.log("work")
  if($(this).hasClass('right')){
    $('.left').css('display','block');
    $('.imgslider > img').animate({left:'-=100%'},300);
    if($('.imgslider > img').position().left<-800){
    $('.right').css('display','none');
    }
  }
  else{
    $('.right').css('display','block');
      $('.imgslider > img').animate({left:'+=100%'},300);
      if($('.imgslider > img').position().left>-460){
      $('.left').css('display','none');
      }
    }
});
});
