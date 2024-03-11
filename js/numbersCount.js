export const doCount = (element, num, step, time, format) => {
  let startValue = 0;
  let endValue = num;
  let duration = Math.floor(time / endValue);
  let formatter = new Intl.NumberFormat(format);
  let counter = setInterval(() => {
    startValue += step;
    element.textContent = `$${formatter.format(startValue)}`;

    if (startValue >= endValue) {
      element.textContent = `$${formatter.format(endValue)}`;
      clearInterval(counter);
    }
  }, duration);
};
