$(".reviews_top_item").click(function () {
  $(".reviews_top_item").removeClass("active");
  $(this).addClass("active");
  let filter = $(this).data("filter");
  let content = $(".reviews_swiper");

  content.each(function () {
    $(this).removeClass("active");
    let contentFilter = $(this).data("filter");

    if (contentFilter === filter) {
      $(this).addClass("active");
    } else return;
  });

  reviewsSwiper.update();
});

// custom select
$(document).ready(function () {
  $(".custom_select_selected").on("click", function () {
    $(this).next(".custom_select_content").stop(true, true).slideToggle(300);
    $(this).toggleClass("open");
  });

  $(".custom_select_item").on("click", function () {
    var selectedText = $(this).text();
    var select = $(this).closest(".custom_select");

    select.find(".custom_select_selected").contents().first().replaceWith(selectedText);

    select.find(".custom_select_item").removeClass("active");
    $(this).addClass("active");

    select.find(".custom_select_content").stop(true, true).slideUp(150);
    select.find(".custom_select_selected").removeClass("open");
  });

  $(document).on("click", function (e) {
    if (!$(e.target).closest(".custom_select").length) {
      $(".custom_select_content").stop(true, true).slideUp(150);
      $(".custom_select_selected").removeClass("open");
    }
  });
});

$(".pop_up_open").click(function () {
  $(".pop_up").addClass("active");
  $(".overlay").addClass("active");
});
$(".pop_up_close").click(function () {
  $(".pop_up").removeClass("active");
  $(".overlay").removeClass("active");
});

// burger accordeon
$(".burger_wrapper > .burger_link").on("click", function () {
  $(this).toggleClass("active");
  $(this).next(".burger_link_content").slideToggle(300);
});

// burger menu
$(".burger").click(function () {
  $(".burger_menu").addClass("active");
  $(".overlay").addClass("active");
});
$(".burger_close").click(function () {
  $(".burger_menu").removeClass("active");
  $(".overlay").removeClass("active");
});

// specialization tabs
$(".specialization_tabs_item").click(function () {
  $(".specialization_tabs_item").removeClass("active");
  $(this).addClass("active");
  let filter = $(this).data("filter");
  let content = $(".specialization_main");

  content.each(function () {
    $(this).removeClass("active");
    let contentFilter = $(this).data("filter");

    if (contentFilter === filter) {
      $(this).addClass("active");
    } else return;
  });
});

 document.addEventListener("DOMContentLoaded", () => {
    const quizItems = document.querySelectorAll(".quiz_left_items, .quiz_questions_block");
    const progressText = document.querySelector(".progress_bar span");
    const progressBar = document.querySelector(".progress_bar_bg");
    const nextBtn = document.querySelector(".quiz_bottom_right");
    const resultBlock = document.querySelector(".quiz_results");
    const doneBlock = document.querySelector(".quiz_done");
    const quizContent = document.querySelector(".quiz_left_content");
    const quizRight = document.querySelector(".quiz_right");

    let currentStep = 0;
    const totalSteps = quizItems.length;

    function updateProgress() {
      const percent = Math.round(((currentStep + 1) / totalSteps) * 100);
      progressText.textContent = percent + "%";
      progressBar.style.width = percent + "%";
    }

    function showStep(index) {
      quizItems.forEach((item, i) => {
        item.classList.toggle("active", i === index);
      });
      updateProgress();
    }

    nextBtn.addEventListener("click", () => {
      if (currentStep < totalSteps - 1) {
        currentStep++;
        showStep(currentStep);
      } else {
        quizContent.classList.add("hidden");
        quizRight.classList.add("hidden");
        resultBlock.classList.add("active");
      }
    });

    const sendBtn = document.querySelector(".quiz_results_social");
    if (sendBtn) {
      sendBtn.addEventListener("click", () => {
        resultBlock.classList.remove("active");
        doneBlock.classList.add("active");
      });
    }

    showStep(currentStep);
  });