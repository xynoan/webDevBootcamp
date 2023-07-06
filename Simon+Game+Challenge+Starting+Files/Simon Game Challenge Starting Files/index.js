// TODO: Fix this, you got the logic of simon game totally wrong LMFAO

$(document).ready(function () {
  let level = 1;
  let started = false;
  let simon = [];
  let helper = [];
  let anyKey = false;

  $(document).keydown(function (e) {
    if (e.key === "a" && !started) {
      $("#level-title").html("Level " + level);
      start();
      started = true;
    }

    if (anyKey && !started) {
      $("#level-title").html("Level " + level);
      start();
      started = true;
    }
  });

  $(document).click(function (e) {
    if ($(e.target).hasClass("btn") && started) {
      $(`#${e.target.id}`).addClass("pressed");
      audio = new Audio(`./sounds/${e.target.id}.mp3`);
      audio.play();

      setTimeout(function () {
        $(`#${e.target.id}`).removeClass("pressed");
      }, 100);
      if (e.target.id === helper[0]) {
        helper.shift();
        setTimeout(() => {
          if (helper.length === 0 && started) {
            level++;
            $("#level-title").html("Level " + level);
            for (let i = 0; i < simon.length; i++) {
              helper.push(simon[i]);
            }
            start();
          }
        }, 700);
      } else {
        $("#level-title").html("Game Over, Press Any Key to Restart");
        $("body").addClass("game-over");
        audio = new Audio(`./sounds/wrong.mp3`);
        audio.play();

        setTimeout(function () {
          $("body").removeClass("game-over");
        }, 100);
        level = 1;
        started = false;
        simon = [];
        helper = [];
        anyKey = true;
      }
    }
  });

  function start() {
    const colors = ["green", "red", "yellow", "blue"];
    let audio = null;
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    simon.push(randomColor);
    helper.push(randomColor);
    $(`#${randomColor}`).addClass("pressed");
    audio = new Audio(`./sounds/${randomColor}.mp3`);
    audio.play();

    setTimeout(function () {
      $(`#${randomColor}`).removeClass("pressed");
    }, 100);
  }
});
