function typeEffect(element, speed) {
  var text = element.innerHTML;
  element.innerHTML = '';

  var i = 0;
  var timer = setInterval(function () {
    if (i < text.length) {
      element.append(text.charAt(i));
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
}

// application
var speed = 55;
var first_h4 = document.querySelector('.first h4');
var second_h4 = document.querySelector('.second h4');
var third_h4 = document.querySelector('.third h4');
var fourth_h4 = document.querySelector('.fourth h4');
var fifth_h4 = document.querySelector('.fifth h4');

var second_h4_delay = first_h4.innerHTML.length * speed + speed;
var third_h4_delay = second_h4.innerHTML.length * speed + speed;
var fourth_h4_delay = third_h4.innerHTML.length * speed + speed;
var fifth_h4_delay = fourth_h4.innerHTML.length * speed + speed;

// type affect to first_h4
typeEffect(first_h4, speed);

// type affect to second_h4
setTimeout(function () {
  second_h4.style.display = 'inline-block';
  typeEffect(second_h4, speed);
}, second_h4_delay);

// type affect to third_h4
setTimeout(function () {
  third_h4.style.display = 'inline-block';
  typeEffect(third_h4, speed);
}, second_h4_delay + third_h4_delay);

// type affect to fourth_h4
setTimeout(function () {
  fourth_h4.style.display = 'inline-block';
  typeEffect(fourth_h4, speed);
}, second_h4_delay + third_h4_delay + fourth_h4_delay);

// type affect to fifth_h4
setTimeout(function () {
  fifth_h4.style.display = 'inline-block';
  typeEffect(fifth_h4, speed);
}, second_h4_delay + third_h4_delay + fourth_h4_delay + fifth_h4_delay);
