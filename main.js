function debounce(callbackFn, delay) {
  let timer = null;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => callbackFn.apply(this, arguments), delay);
  };
}

function throttle(callbackFn, delay) {
  let timer = null;
  return () => {
    if (timer) return;
    timer = setTimeout(() => {
      callbackFn.apply(this, arguments);
      timer = null;
    }, delay);
  };
}

const throttleFn = throttle(() => console.log("throttle"), 500);
const debounceFn = debounce(() => console.log("debounce"), 500);

document.addEventListener("scroll", () => {
  throttleFn();
  debounceFn();
});
