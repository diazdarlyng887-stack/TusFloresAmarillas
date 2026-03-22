(() => {
  const bgGarden = document.querySelector("#bgGarden");
  const rand = (min, max) => Math.random() * (max - min) + min;

  function createBackgroundFlower({ x, y, size }) {
    const wrap = document.createElement("div");
    wrap.className = "backgroundFlowerWrap";
    wrap.style.setProperty("--x", String(x));
    wrap.style.setProperty("--y", String(y));
    wrap.style.setProperty("--floatDur", `${rand(24, 42).toFixed(2)}s`);
    wrap.style.setProperty("--driftX", `${rand(-12, 12).toFixed(2)}`);
    wrap.style.setProperty("--driftY", `${rand(-10, 10).toFixed(2)}`);

    const bloom = document.createElement("div");
    bloom.className = "backgroundFlower";
    bloom.style.setProperty("--size", `${size}px`);
    bloom.style.setProperty("--tilt", `${rand(-25, 25).toFixed(2)}deg`);

    const head = document.createElement("div");
    head.className = "head";
    const spark = document.createElement("div");
    spark.className = "spark";
    head.appendChild(spark);

    const petals = 12;
    for (let p = 0; p < petals; p++) {
      const petal = document.createElement("div");
      petal.className = "petal";
      petal.style.setProperty("--i", String(p * (360 / petals)));
      head.appendChild(petal);
    }

    const center = document.createElement("div");
    center.className = "center";
    head.appendChild(center);

    bloom.appendChild(head);
    wrap.appendChild(bloom);
    return wrap;
  }

  function seedBackground() {
    if (!bgGarden) return;
    bgGarden.innerHTML = "";
    const amount = window.matchMedia("(max-width: 520px)").matches ? 14 : 22;
    for (let i = 0; i < amount; i++) {
      const flower = createBackgroundFlower({
        x: rand(2, 98),
        y: rand(4, 96),
        size: rand(50, 96),
      });
      bgGarden.appendChild(flower);
    }
  }

  window.addEventListener("resize", () => seedBackground());
  seedBackground();
})();
