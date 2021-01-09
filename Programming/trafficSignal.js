var lights = ["red", "yellow", "green"];

var currentLightIndex = 0;

var startLight = () => {
  setInterval(function () {
    console.log(lights[currentLightIndex]);
    if (currentLightIndex < lights.length - 1) {
      currentLightIndex++;
    } else {
      currentLightIndex = 0;
    }
  }, 1000);
};

(function () {
  startLight();
})();
