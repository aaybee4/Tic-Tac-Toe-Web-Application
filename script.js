$(document).ready(function() {
    /* check if passed var (a) wins */
    function checkWin(a) {
        if ($("#1").hasClass(a) && $("#2").hasClass(a) && $("#3").hasClass(a) ||
          $("#4").hasClass(a) && $("#5").hasClass(a) && $("#6").hasClass(a) ||
          $("#7").hasClass(a) && $("#8").hasClass(a) && $("#9").hasClass(a) ||
          $("#1").hasClass(a) && $("#5").hasClass(a) && $("#9").hasClass(a) ||
          $("#3").hasClass(a) && $("#5").hasClass(a) && $("#7").hasClass(a) ||
          $("#1").hasClass(a) && $("#4").hasClass(a) && $("#7").hasClass(a) ||
          $("#2").hasClass(a) && $("#5").hasClass(a) && $("#8").hasClass(a) ||
          $("#3").hasClass(a) && $("#6").hasClass(a) && $("#9").hasClass(a)) {
          $(".col-xs-4").unbind();
          $(".col-xs-4").css("opacity", "0.6");
          $(".text h1").html(a + " Wins!");
          $(".text").show();
          return true;
        } else {
          return false;
        }
      }
      /* check if all divs are full && nobody has win yet if true it's a tie */
    function checkTie() {
        if (checkWin("cross") === false && checkWin("circle") === false) {
          var tie = 0;
          for (var i = 0; i < divArray.length; i++) {
            if ($(divArray[i]).hasClass("cross") || $(divArray[i]).hasClass("circle")) {
              tie += 1;
            }
          }
          if (tie === 9) {
            $(".col-xs-4").unbind();
            $(".col-xs-4").css("opacity", "0.6");
            $(".text h1").html("It's a Tie!");
            $(".text").show();
          }
        } else {
          checkWin("cross");
          checkWin("circle");
        }
      }
      /* clear board */
    function newGame() {
        $(".col-xs-4").empty();
        $(".col-xs-4").removeClass("cross circle");
        $(".col-xs-4").css("background", "#fff");
        $(".col-xs-4").css("opacity", "1");
        $(".text").hide();
        $(".col-xs-4").unbind();
      }
      function easyMove() {
        if (checkWin("cross") === false) {
          if ($("#1").is(":empty") || $("#2").is(":empty") || $("#3").is(":empty") || $("#4").is(":empty") || $("#5").is(":empty") || $("#6").is(":empty") || $("#7").is(":empty") || $("#8").is(":empty") || $("#9").is(":empty")) {
            var random = Math.floor(Math.random() * 9);
            var randomdiv = $(".col-xs-4").eq(random);
            if ($(randomdiv).html().length == 0) {
              $(O).appendTo($(randomdiv));
              $(randomdiv).addClass("circle");
              checkWin("circle");
              checkTie();
              $(".col-xs-4").click(easyAi);
            } else {
              easyMove()
            }
          }
        } else {
          checkWin("cross");
          checkWin("circle");
          checkTie();
        }
      }
      /* human move vs easy ai */
      function easyAi() {
        if ($(this).html().length == 0) {
          $(X).appendTo($(this));
          $(this).addClass("cross");
          checkWin("cross");
          checkTie();
          easyMove();
        }
      }

      /* human move vs easy ai */
      function easyAi() {
        if ($(this).html().length == 0) {
          $(X).appendTo($(this));
          $(this).addClass("cross");
          checkWin("cross");
          checkTie();
          easyMove();
        }
      }

});
