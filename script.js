document.getElementById("chat-icon").addEventListener("click", function () {
  document.getElementById("chat-widget").style.display = "flex";
  document.getElementById("chat-icon").style.display = "none";
  document.getElementById("close-icon").style.display = "block";
});

document.getElementById("close-icon").addEventListener("click", function () {
  document.getElementById("chat-widget").style.display = "none";
  document.getElementById("chat-icon").style.display = "block";
  document.getElementById("close-icon").style.display = "none";
});

// inside work
document.addEventListener("DOMContentLoaded", function () {
  const upperBodyContaints = document.querySelectorAll(".upper_body_containt");
  const upperBodyContaintMain = document.getElementById(
    "upper_body_containt_main"
  );
  document
    .getElementById("bi-crosshair")
    .addEventListener("click", function () {
      location.reload(true); // Refresh the page completely
    });

  document
    .getElementById("upper_body_containt_a")
    .addEventListener("click", function () {
      document.getElementById("upper_body_containt_b").style.display = "none";
      document.getElementById("upper_body_containt_c").style.display = "none";
      document.getElementById("upper_body_containt_d").style.display = "none";
      document.getElementById("upper_body_containt_e").style.display = "none";
      document.getElementById("upper_body_containt_f").style.display = "none";
      document.getElementById("upper_body_containt_f").style.display = "none";
      document.getElementById("upper_body_containt_aa").style.display = "block";
      document.getElementById("bi-crosshair").style.display = "block";

      document.getElementById("middle_body").style.display = "none";
      document.getElementById("lower_body").style.display = "none";
    });

  document
    .getElementById("upper_body_containt_b")
    .addEventListener("click", function () {
      document.getElementById("upper_body_containt_a").style.display = "none";
      document.getElementById("upper_body_containt_c").style.display = "none";
      document.getElementById("upper_body_containt_d").style.display = "none";
      document.getElementById("upper_body_containt_e").style.display = "none";
      document.getElementById("upper_body_containt_f").style.display = "none";
      document.getElementById("upper_body_containt_bb").style.display = "block";
      document.getElementById("bi-crosshair").style.display = "block";

      document.getElementById("middle_body").style.display = "none";
      document.getElementById("lower_body").style.display = "none";
    });
  document
    .getElementById("upper_body_containt_c")
    .addEventListener("click", function () {
      document.getElementById("upper_body_containt_b").style.display = "none";
      document.getElementById("upper_body_containt_a").style.display = "none";
      document.getElementById("upper_body_containt_d").style.display = "none";
      document.getElementById("upper_body_containt_e").style.display = "none";
      document.getElementById("upper_body_containt_f").style.display = "none";
      document.getElementById("upper_body_containt_cc").style.display = "block";
      document.getElementById("bi-crosshair").style.display = "block";

      document.getElementById("middle_body").style.display = "none";
      document.getElementById("lower_body").style.display = "none";
    });
  document
    .getElementById("upper_body_containt_d")
    .addEventListener("click", function () {
      document.getElementById("upper_body_containt_b").style.display = "none";
      document.getElementById("upper_body_containt_c").style.display = "none";
      document.getElementById("upper_body_containt_a").style.display = "none";
      document.getElementById("upper_body_containt_e").style.display = "none";
      document.getElementById("upper_body_containt_f").style.display = "none";
      document.getElementById("upper_body_containt_dd").style.display = "block";
      document.getElementById("bi-crosshair").style.display = "block";

      document.getElementById("middle_body").style.display = "none";
      document.getElementById("lower_body").style.display = "none";
    });

  document
    .getElementById("upper_body_containt_e")
    .addEventListener("click", function () {
      document.getElementById("upper_body_containt_b").style.display = "none";
      document.getElementById("upper_body_containt_c").style.display = "none";
      document.getElementById("upper_body_containt_d").style.display = "none";
      document.getElementById("upper_body_containt_a").style.display = "none";
      document.getElementById("upper_body_containt_f").style.display = "none";
      document.getElementById("upper_body_containt_ee").style.display = "block";
      document.getElementById("bi-crosshair").style.display = "block";

      document.getElementById("middle_body").style.display = "none";
      document.getElementById("lower_body").style.display = "none";
    });
  document
    .getElementById("upper_body_containt_f")
    .addEventListener("click", function () {
      document.getElementById("upper_body_containt_b").style.display = "none";
      document.getElementById("upper_body_containt_c").style.display = "none";
      document.getElementById("upper_body_containt_d").style.display = "none";
      document.getElementById("upper_body_containt_e").style.display = "none";
      document.getElementById("upper_body_containt_a").style.display = "none";
      document.getElementById("upper_body_containt_ff").style.display = "block";
      document.getElementById("bi-crosshair").style.display = "block";

      document.getElementById("middle_body").style.display = "none";
      document.getElementById("lower_body").style.display = "none";
    });
  // Click on upper_body_containt_h to hide both upper_body_containt_h and upper_body_containt_g
  document
    .getElementById("upper_body_containt_h")
    .addEventListener("click", function () {
      upperBodyContaintMain.style.display = "none";
      document.getElementById("middle_body").style.display = "none";
      document.getElementById("upper_body_containt_hh").style.display = "block";
      document.getElementById("bi-crosshair").style.display = "block";
    });

  // Click on upper_body_containt_g to hide both upper_body_containt_h and upper_body_containt_g
  document
    .getElementById("upper_body_containt_g")
    .addEventListener("click", function () {
      upperBodyContaintMain.style.display = "none";
      document.getElementById("lower_body").style.display = "none";
      document.getElementById("upper_body_containt_gg").style.display = "block";
      document.getElementById("bi-crosshair").style.display = "block";
    });
});
