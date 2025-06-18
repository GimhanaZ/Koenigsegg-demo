document.addEventListener("DOMContentLoaded", function () {
  const p1 = document.querySelector(".section-2 .p-1");
  if (!p1) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting && entry.intersectionRatio === 1) {
        p1.classList.add("visible");
      } else {
        p1.classList.remove("visible");
      }
    },
    {
      threshold: 1.0,
    }
  );
  observer.observe(p1);
});
document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("myVideo");
  video.addEventListener("loadedmetadata", function () {
    video.currentTime = 41; // Video Begin timestamp
  });
});
