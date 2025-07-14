document.addEventListener("DOMContentLoaded", () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".header",
      start: "top 60%",
      toggleActions: "play none none none",
    },
  });

  tl.from(
    ".about_number_item",
    {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
      ease: "power3.out",
    },
    "-=0.5"
  );

  const numberItems = document.querySelectorAll(".about_number_item h2");
  numberItems.forEach((item) => {
    const endValue = parseInt(item.textContent.replace(/\D/g, "")) || 0;
    const plus = item.textContent.includes("+") ? "+" : "";

    gsap.fromTo(
      item,
      { innerText: 0 },
      {
        innerText: endValue,
        duration: 2,
        ease: "power1.out",
        snap: { innerText: 1 },
        onUpdate: function () {
          item.innerText = Math.floor(this.targets()[0].innerText) + plus;
        },
      }
    );
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const bannerTl = gsap.timeline();

  bannerTl.from(".banner_slide_bg", {
    scale: 1.1,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });

  bannerTl.from(
    ".banner_slide_content p, .banner_slide_content h2, .banner_slide_content ",
    {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    },
    "-=0.8"
  );
});

document.addEventListener("DOMContentLoaded", () => {
  const specTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".specialization",
      start: "top 70%",
      toggleActions: "play none none none",
    },
  });

  specTl.from(".specialization .title", {
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
  });

  specTl.from(
    ".specialization_tabs_item",
    {
      y: 30,
      opacity: 0,
      stagger: 0.15,
      duration: 0.6,
      ease: "power3.out",
    },
    "-=0.4"
  );

  specTl.from(
    ".specialization_left img",
    {
      x: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    },
    "-=0.5"
  );

  specTl.from(
    ".specialization_right_title",
    {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    },
    "-=0.6"
  );

  specTl.from(
    ".specialization_price_item",
    {
      y: 30,
      opacity: 0,
      stagger: 0.15,
      duration: 0.6,
      ease: "power3.out",
    },
    "-=0.6"
  );

  specTl.from(
    ".specialization_right_get_price, .specialization_right_bottom",
    {
      y: 30,
      opacity: 0,
      stagger: 0.2,
      duration: 0.6,
      ease: "power3.out",
    },
    "-=0.6"
  );
});

document.addEventListener("DOMContentLoaded", () => {
  const quizTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".quiz",
      start: "top 70%",
      toggleActions: "play none none none",
    },
  });

  quizTl.from(".quiz .title", {
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
  });

  quizTl.from(
    ".quiz_left img, .quiz_quest, .quiz_left_items",
    {
      y: 30,
      opacity: 0,
      duration: 0.7,
      ease: "power3.out",
    },
    "-=0.5"
  );

  quizTl.from(
    ".quiz_left_item",
    {
      scale: 0.9,
      opacity: 0,
      stagger: 0.1,
      duration: 0.5,
      ease: "power2.out",
    },
    "-=0.6"
  );

  quizTl.from(
    ".quiz_bottom",
    {
      y: 30,
      opacity: 0,
      duration: 0.7,
      ease: "power3.out",
    },
    "-=0.4"
  );

  quizTl.from(
    ".quiz_ava_block, .quiz_ava_text",
    {
      y: 30,
      opacity: 0,
      stagger: 0.2,
      duration: 0.6,
      ease: "power3.out",
    },
    "-=0.6"
  );

  quizTl.from(
    ".quiz_question_title",
    {
      y: 20,
      opacity: 0,
      duration: 0.5,
      ease: "power3.out",
    },
    "-=0.5"
  );

  quizTl.from(
    ".quiz_question_item",
    {
      y: 20,
      opacity: 0,
      stagger: 0.15,
      duration: 0.5,
      ease: "power3.out",
    },
    "-=0.4"
  );

  quizTl.from(
    ".quiz_free",
    {
      y: 20,
      opacity: 0,
      duration: 0.5,
      ease: "power3.out",
    },
    "-=0.3"
  );
});
