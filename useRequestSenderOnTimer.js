import { useEffect } from "react";

const useRequestSenderOnTimer = (
  callback,
  timeout = 60000,
  dependency = []
) => {
  useEffect(() => {
    let timer = setInterval(() => {
      callback();
      clearInterval(timer);
    }, timeout);
    return () => {
      clearInterval(timer);
    };
  }, dependency);
};

export default useRequestSenderOnTimer;
