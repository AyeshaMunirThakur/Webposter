

  // Sign-up button 
$(document).ready(function () {
  $("#button").on("click", function () {
    window.location.href =
      "https://forms.office.com/pages/responsepage.aspx?id=0WnkBiotj0aum33wlo6211ZjxZXGpGVPs829ggrJmzxURDNMUkFTUzBISDc2TFdROUk3QTlRMFNESi4u&route=shorturl";
  });




// Adjust this threshold to match the position on the grid
  const thresholdY = 200;

// Trailing cursor effect and speaker zone logic
  $(document).mousemove(function (e) {
    const mouseX = e.pageX;
    const mouseY = e.pageY;

    // Only run the effect if the mouse is above thresholdY
    if (mouseY <= thresholdY) {
      // Trailing cursor effect
      const trailWidth = 10;
      const trailHeight = 20;

      const $trail = $("<div>")
        .addClass("trail")
        .css({
          left: mouseX - trailWidth / 2 + "px",
          top: mouseY - trailHeight / 2 + "px",
        });

      $("body").append($trail);

      setTimeout(() => {
        $trail.remove();
      }, 1999);

      // Speaker zone logic
      const windowWidth = $(window).width();
      const zoneWidth = windowWidth / 4;

      // Speaker 1
      if (mouseX >= 0 && mouseX < zoneWidth) {
        showSpeaker1();
      } else {
        hideSpeaker1();
      }

      // Speaker 2
      if (mouseX >= zoneWidth && mouseX < 2 * zoneWidth) {
        showSpeaker2();
      } else {
        hideSpeaker2();
      }

      // Speaker 3
      if (mouseX >= 2 * zoneWidth && mouseX < 3 * zoneWidth) {
        showSpeaker3();
      } else {
        hideSpeaker3();
      }

      // Speaker 4
      if (mouseX >= 3 * zoneWidth && mouseX <= windowWidth) {
        showSpeaker4();
      } else {
        hideSpeaker4();
      }
    } else {
      // If the mouse is below threshold, hide all speakers
      hideSpeaker1();
      hideSpeaker2();
      hideSpeaker3();
      hideSpeaker4();
    }
  });
});


// Info box functions
function showInfo() {
  $("#infoBox").show();
}
function hideInfo() {
  $("#infoBox").hide();
}


// Sign-up functions
function showSignUp() {
  $("#signup").show();
}
function hideSignUp() {
  $("#signup").hide();
}


// Speaker 1 functions
function showSpeaker1() {
  $("#speaker1Info").show();
  $("#lecture1Info").show();
  $("#speaker1photo").show();
}
function hideSpeaker1() {
  $("#speaker1Info").hide();
  $("#lecture1Info").hide();
  $("#speaker1photo").hide();
}

// Speaker 2 functions
function showSpeaker2() {
  $("#speaker2Info").show();
  $("#lecture2Info").show();
  $("#speaker2photo").show();
}
function hideSpeaker2() {
  $("#speaker2Info").hide();
  $("#lecture2Info").hide();
  $("#speaker2photo").hide();
}

// Speaker 3 functions
function showSpeaker3() {
  $("#speaker3Info").show();
  $("#lecture3Info").show();
  $("#speaker3photo").show();
}
function hideSpeaker3() {
  $("#speaker3Info").hide();
  $("#lecture3Info").hide();
  $("#speaker3photo").hide();
}

// Speaker 4 functions
function showSpeaker4() {
  $("#speaker4Info").show();
  $("#lecture4Info").show();
  $("#speaker4photo").show();
}
function hideSpeaker4() {
  $("#speaker4Info").hide();
  $("#lecture4Info").hide();
  $("#speaker4photo").hide();
}
