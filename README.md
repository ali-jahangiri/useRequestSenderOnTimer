const Index = ({ reqHandler, text }) => {
  useRequestSenderOnTimer(reqHandler, 1000, []);
  // pass arrat of dependency for what you need to re send requese bas on that
  // your reqused callback should re render (chnage some state) to force hook for executing again
  // thrt arguent is something time for re sending request base on that time
  return (
    <div>
      {text?.map((el, i) => (
        <div key={i}>{el.body}</div>
      ))}
    </div>
  );
};

const App = () => {
  const [state, setstate] = useState(null);
  const [laoding, setLaoding] = useState(false);

  const fetchUser = () => {
    setLaoding(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => data.json())
      .then((data) => {
        setLaoding(false);
        setstate(data);
      });
  };
  return (
    <>
      {laoding ? "loading" : null}
      <Index text={state} reqHandler={fetchUser} />
    </>
  );
};