import { useState, useEffect } from "react";

const useCurrentLocation = (options = {}) => {
  const [location, setLocation] = useState();
  const [error, setError] = useState();

  const onSuccessHandler = (pos) => {
    const { latitude, longitude } = pos.coords;
    setLocation({ latitude, longitude });
  };

  const onErrorHandler = (error) => {
    setError(error.message);
  };

  useEffect(() => {
    const { geolocation } = navigator;

    if (!geolocation) {
      setError("위치추적이 제공되지 않습니다.");
      return;
    }

    geolocation.getCurrentPosition(onSuccessHandler, onErrorHandler, options);
  }, [options]);
  return { location, error };
};
export default useCurrentLocation;
