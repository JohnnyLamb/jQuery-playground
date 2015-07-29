$(function() {
  console.log("ready!");
  $("#secretBox").css({

    "background-color": "white",
    "color": "black"
  });
  $("#secretBox").append("<h1>secret box!</h1>");
  // $('#row1').children().removeClass();
  // $('#row1').children().attr('class','box boxType3');
  // $('#row4').children().last().hide();
  // $('.boxType1').css('background-color','white');
  // $('#row2 div:lt(2)').css('visibility','hidden');
  // $(".box").not("#secretBox").css('width','2px');

  // $('#container').on("click", function() {
  //   console.log(event.pageX, event.pageY);

    // $(".boxType1").html("<a href='http://www.galvanize.com'>galvanize</a>").on("click",function(event){
    //   event.preventDefault();
    //   alert("dont leave the page");

    // });

    // $('.box').one('click', function(event) {
    //  $(this).prepend("<img src='http://www.ugodog.net/blog/wp-content/uploads/2008/08/golden-retriever-dog.thumbnail.jpg'/>");
    //   event.stopPropogation();
    //  });
    //  $('.box').on('click', function () {
    //    $(this).find('img').remove();
    //    event.stopPropogation();
    //  });


    $('#container').on("click",function(e){


          // var container =

          // var boxes = $(this).css('background-color','white');

          // $('#container').css('background-color','green');
          if ($(e.target).hasClass('box') === true)
          {
            $(e.target).css('background','white');
              $('#container').css('background-color','black');
          } else if ($(this).is('#container') === true){
            $(this).css("background", "limegreen");
          }

    });


  });



