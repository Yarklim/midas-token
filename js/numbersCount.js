export const doCount = (element, num, step, time, format, sign = '') => {
  let startValue = 0;
  let endValue = num;
  let duration = Math.floor(time / endValue);
  let formatter = new Intl.NumberFormat(...format);
  let counter = setInterval(() => {
    startValue += step;
    element.textContent = `${sign}${formatter.format(startValue)}`;

    if (startValue >= endValue) {
      element.textContent = `${sign}${formatter.format(endValue)}`;
      clearInterval(counter);
    }
  }, duration);
};
