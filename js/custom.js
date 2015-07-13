window.onload = function() {
  var homage = document.getElementById('homage');
  context = homage.getContext('2d');

  // First square HSL color variables
  var firstHue = document.getElementById('first-hue');
  var firstSaturation = document.getElementById('first-saturation');
  var firstLightness = document.getElementById('first-lightness');
  // Second square HSL color variables
  var secondHue = document.getElementById('second-hue');
  var secondSaturation = document.getElementById('second-saturation');
  var secondLightness = document.getElementById('second-lightness');
  // Third square HSL color variables
  var thirdHue = document.getElementById('third-hue');
  var thirdSaturation = document.getElementById('third-saturation');
  var thirdLightness = document.getElementById('third-lightness');
  // Fourth square HSL color variables
  var fourthHue = document.getElementById('fourth-hue');
  var fourthSaturation = document.getElementById('fourth-saturation');
  var fourthLightness = document.getElementById('fourth-lightness');

  var save = document.getElementById('save');

  var passHSL = function(hue, saturation, lightness) {
    return 'hsl(' + hue.value + ', ' + saturation.value + '%, ' + lightness.value + '%)';
  };

  function firstSquare() {
    var colorFirst = passHSL(firstHue, firstSaturation, firstLightness);
    context.fillStyle = colorFirst;
    context.fillRect(0, 0, 632, 632);
    firstHue.addEventListener('input', firstSquare);
    firstSaturation.addEventListener('input', firstSquare);
    firstLightness.addEventListener('input', firstSquare);
    secondSquare();
  }

  function secondSquare() {
    var colorSecond = passHSL(secondHue, secondSaturation, secondLightness);
    context.fillStyle = colorSecond;
    context.fillRect(62, 96, 508, 508);
    secondHue.addEventListener('input', secondSquare);
    secondSaturation.addEventListener('input', secondSquare);
    secondLightness.addEventListener('input', secondSquare);
    thirdSquare();
  }

  function thirdSquare() {
    var colorThird = passHSL(thirdHue, thirdSaturation, thirdLightness);
    context.fillStyle = colorThird;
    context.fillRect(124, 192, 384, 384);
    thirdHue.addEventListener('input', thirdSquare);
    thirdSaturation.addEventListener('input', thirdSquare);
    thirdLightness.addEventListener('input', thirdSquare);
    fourthSquare();
  }

  function fourthSquare() {
    var colorFourth = passHSL(fourthHue, fourthSaturation, fourthLightness);
    context.fillStyle = colorFourth;
    context.fillRect(186, 288, 260, 260);
    fourthHue.addEventListener('input', fourthSquare);
    fourthSaturation.addEventListener('input', fourthSquare);
    fourthLightness.addEventListener('input', fourthSquare);
  }

  firstSquare();

  save.addEventListener('click', function(evt) {
    this.href = homage.toDataURL();
    this.download = 'homage-to-the-square.png';
  }, false);

};
