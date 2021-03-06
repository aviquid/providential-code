function Example() {
  const [count, setCount] = useState(0);

  function handleAlertClick() {
    setTimeout(() => {
      alert("You clicked on: " + count);
    }, 3000);
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={handleAlertClick}>Show alert</button>
    </div>
  );
}

// Click on show alert button, then click on "click me" button multiple times. What's the value of count in Alert??
// NTTC (No time to code), then check - https://codesandbox.io/s/88m334l31l

// SURPRISED?
// Solution - https://codesandbox.io/embed/qzj2nqvzyj
// Want to learn more - https://reactjs.org/docs/hooks-faq.html#why-am-i-seeing-stale-props-or-state-inside-my-function
