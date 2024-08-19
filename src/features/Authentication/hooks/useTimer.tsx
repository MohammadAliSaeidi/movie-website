import { useState, useEffect } from "react";

const formatTime = (seconds: number) => {
	const minutes = Math.floor(seconds / 60);
	const remainingSeconds = seconds % 60;
	return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
};

const useTimer = ({ initDurationInSeconds }: { initDurationInSeconds: number }) => {
	const [remainingTime, setRemainingTime] = useState(initDurationInSeconds);

	useEffect(() => {
		const intervalId = setInterval(() => {
			if (remainingTime > 0) {
				setRemainingTime(remainingTime - 1);
			}
		}, 1000);

		return () => clearInterval(intervalId);
	}, [remainingTime]);

	const formattedTime = formatTime(remainingTime);

	const startTimer = () => setRemainingTime(initDurationInSeconds);
	const stopTimer = () => setRemainingTime(0);
	const resetTimer = () => setRemainingTime(initDurationInSeconds);

	return { formattedTime, remainingTime, startTimer, stopTimer, resetTimer };
};

export default useTimer;
