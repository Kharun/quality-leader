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

$(document).ready(function () {
  const quizItems = $(".quiz_left_items, .quiz_questions_block");
  const progressText = $(".progress_bar span");
  const progressBar = $(".progress_bar_bg");
  const nextBtn = $(".quiz_bottom_right");
  const resultBlock = $(".quiz_results");
  const doneBlock = $(".quiz_done");
  const quizContent = $(".quiz_left_content");
  const quizRight = $(".quiz_right");
  const quizLeft = $(".quiz_left");
  const quizLoad = $(".quiz_load");
  const resultSocial = $(".quiz_results_social");

  const questTitle = $(".quiz_quest_title");
  const questQuantity = $(".quiz_quest_quantity");

  const questTexts = [
    "Выберите помещение",
    "Выберите площадь объекта",
    "Вид работ",
    "Где находится объект относительно МКАД?",
    "Когда планируете начать работы?",
  ];

  let currentStep = 0;
  const totalSteps = quizItems.length;

  function updateProgress() {
    const percent = Math.round(((currentStep + 1) / totalSteps) * 100);
    progressText.text(percent + "%");
    progressBar.css("width", percent + "%");
  }

  function updateQuestionText() {
    questQuantity.text(`Вопрос ${currentStep + 1} из ${totalSteps}`);
    questTitle.text(questTexts[currentStep] || "");
  }

  function showStep(index) {
    quizItems.removeClass("active").eq(index).addClass("active");
    updateProgress();
    updateQuestionText();
  }

  nextBtn.on("click", function () {
    if (resultBlock.hasClass("active")) {
      quizLeft.addClass("hidden");
      doneBlock.addClass("active");
      return;
    }

    const currentQuizBlock = quizItems.eq(currentStep);
    const hasChecked = currentQuizBlock.find('input[type="checkbox"]:checked').length > 0;

    if (!hasChecked) {
      alert("Пожалуйста, выберите хотя бы один вариант перед продолжением");
      return;
    }

    if (currentStep < totalSteps - 1) {
      currentStep++;
      showStep(currentStep);
    } else if (currentStep + 1 === totalSteps && resultBlock && !resultBlock.hasClass("active")) {
      quizContent.addClass("hidden");
      quizRight.addClass("hidden");
      quizLoad.addClass("active");
      quizLeft.addClass("hidden");
      resultBlock.removeClass("active");
      setTimeout(() => {
        quizLoad.removeClass("active");
        quizLeft.removeClass("hidden");
        resultBlock.addClass("active");
        nextBtn.text("Получить расчёт");
      }, 2000);
    } else {
      quizContent.addClass("hidden");
      quizRight.addClass("hidden");
      resultBlock.addClass("active");
    }
  });

  resultSocial.click(function () {
    resultSocial.removeClass("active");
    $(this).toggleClass("active");
  });

  showStep(currentStep);
});
