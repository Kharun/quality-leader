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

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".stages .title", {
    scrollTrigger: {
      trigger: ".stages .title",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    y: -50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });

  gsap.from(".stages_img", {
    scrollTrigger: {
      trigger: ".stages_img",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    y: 100,
    opacity: 0,
    scale: 0.8,
    duration: 1.2,
    ease: "power3.out",
    delay: 0.2,
  });
});

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".contract_left .title", {
    scrollTrigger: {
      trigger: ".contract_left .title",
      start: "top 85%",
      toggleActions: "play none none none",
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });

  gsap.from(".contract_item", {
    scrollTrigger: {
      trigger: ".contract_items",
      start: "top 85%",
      toggleActions: "play none none none",
    },
    y: 40,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    stagger: 0.15,
  });

  gsap.from(".contract_right_top", {
    scrollTrigger: {
      trigger: ".contract_right_top",
      start: "top 85%",
      toggleActions: "play none none none",
    },
    x: 60,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });

  gsap.from(".contract_img", {
    scrollTrigger: {
      trigger: ".contract_img",
      start: "top 85%",
      toggleActions: "play none none none",
    },
    x: 80,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out",
    delay: 0.2,
  });
});

document.addEventListener("DOMContentLoaded", () => {
  gsap.from(".completed_top_left .title, .completed_top_left p", {
    scrollTrigger: {
      trigger: ".completed_top_left",
      start: "top 85%",
      toggleActions: "play none none none",
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    stagger: 0.2,
  });

  gsap.from(".completed_top_pag", {
    scrollTrigger: {
      trigger: ".completed_top_pag",
      start: "top 85%",
      toggleActions: "play none none none",
    },
    x: 30,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out",
  });

  gsap.utils.toArray(".completed_slide").forEach((slide) => {
    gsap.from(slide, {
      scrollTrigger: {
        trigger: slide,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
    });
  });

  gsap.utils.toArray(".completed_slide").forEach((slide) => {
    const img = slide.querySelector(".completed_item_left img");
    const content = slide.querySelector(".completed_item_content");

    gsap.from(img, {
      scrollTrigger: {
        trigger: slide,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      x: -40,
      duration: 1,
      ease: "power2.out",
    });

    gsap.from(content, {
      scrollTrigger: {
        trigger: slide,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      x: 40,
      duration: 1,
      ease: "power2.out",
      delay: 0.1,
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".reviews .title", {
    scrollTrigger: {
      trigger: ".reviews .title",
      start: "top 85%",
      toggleActions: "play none none none",
    },
    y: 40,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
  });

  gsap.from(".reviews_top_pag img", {
    scrollTrigger: {
      trigger: ".reviews_top_pag",
      start: "top 90%",
      toggleActions: "play none none none",
    },
    x: 20,
    opacity: 0,
    duration: 0.5,
    ease: "power2.out",
    stagger: 0.1,
  });

  gsap.utils.toArray(".reviews_slide").forEach((slide) => {
    gsap.from(slide, {
      scrollTrigger: {
        trigger: slide,
        start: "top 85%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: "power2.out",
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".contacts .title", {
    scrollTrigger: {
      trigger: ".contacts .title",
      start: "top 85%",
      toggleActions: "play none none none",
    },
    y: -40,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
  });

  gsap.from(".contacts_text", {
    scrollTrigger: {
      trigger: ".contacts_text",
      start: "top 85%",
      toggleActions: "play none none none",
    },
    y: 30,
    opacity: 0,
    duration: 0.8,
    delay: 0.1,
    ease: "power3.out",
  });
});

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".contacts_content", {
    scrollTrigger: {
      trigger: ".contacts",
      start: "top 80%",
    },
    y: 50,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out",
  });

  gsap.from(".contacts_form_input, .contacts_form .btn", {
    scrollTrigger: {
      trigger: ".contacts_form",
      start: "top 90%",
    },
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: "power2.out",
  });

  gsap.from(".referral_top .title", {
    scrollTrigger: {
      trigger: ".referral_top",
      start: "top 85%",
    },
    x: -50,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  });

  gsap.from(".referral_top_text", {
    scrollTrigger: {
      trigger: ".referral_top",
      start: "top 85%",
    },
    x: 50,
    opacity: 0,
    duration: 1,
    delay: 0.2,
    ease: "power2.out",
  });

  gsap.from(".referral_item", {
    scrollTrigger: {
      trigger: ".referral_wrapper",
      start: "top 85%",
    },
    y: 40,
    opacity: 0,
    stagger: 0.3,
    duration: 1,
    ease: "power3.out",
  });

  gsap.from(".referral_img", {
    scrollTrigger: {
      trigger: ".referral_wrapper",
      start: "top 85%",
    },
    scale: 0.95,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });

  gsap.from(".referral_bottom .btn", {
    scrollTrigger: {
      trigger: ".referral_bottom",
      start: "top 90%",
    },
    y: 20,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
  });
});

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".partners_top .title, .partners_top .partners_text", {
    scrollTrigger: {
      trigger: ".partners_top",
      start: "top 80%",
    },
    y: 40,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    stagger: 0.2,
  });

  gsap.from(".partners_item", {
    scrollTrigger: {
      trigger: ".partners_items",
      start: "top 85%",
    },
    opacity: 0,
    scale: 0.8,
    stagger: {
      each: 0.1,
      grid: "auto",
      from: "center",
    },
    duration: 0.6,
    ease: "back.out(1.7)",
  });
});

document.addEventListener("DOMContentLoaded", () => {
  gsap.from(".accreditation_top .title, .accreditation_right", {
    scrollTrigger: {
      trigger: ".accreditation_top",
      start: "top 80%",
    },
    y: 40,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    stagger: 0.2,
  });

  gsap.from(".accreditation_img", {
    scrollTrigger: {
      trigger: ".accreditation_img",
      start: "top 85%",
    },
    scale: 0.9,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  });

  gsap.from(".accreditation_bottom p, .accreditation_bottom .btn", {
    scrollTrigger: {
      trigger: ".accreditation_bottom",
      start: "top 90%",
    },
    y: 40,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

  tl.from(".team_img", {
    opacity: 0,
    x: -100,
  })
    .from(
      ".team_wrapper h2.title",
      {
        opacity: 0,
        y: 50,
      },
      "-=0.4"
    )
    .from(
      ".team_text",
      {
        opacity: 0,
        y: 30,
        duration: 1.2,
      },
      "-=0.2"
    );

  gsap.from(".team_wrapper .btn", {
    scrollTrigger: {
      trigger: ".team",
      start: "top 85%",
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const tl = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } });

  tl.from(".callback_title", { opacity: 0, y: 50 })
    .from(".callback_title span", { opacity: 0, y: 20, duration: 0.6 }, "-=0.7")
    .from(".callback_text", { opacity: 0, y: 30 }, "-=0.7")
    .from(".callback_form", { opacity: 0, y: 40, stagger: 0.15, duration: 1.2 }, "-=0.8")
    .from(".callback_policy", { opacity: 0, y: 20 }, "-=1.1")
    .from(".callback_img", { opacity: 0, x: 100, scale: 0.8 }, "-=1");
});
