import {render, Text} from 'ink';
import React, {useEffect,useState} from 'react';

const Counter = (): any => {
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setCounter((previousCounter: number): any => previousCounter + 1);
		}, 100);

		return () => {
			clearInterval(timer);
		};
	}, []);

	return <Text color="green">{counter} tests passed</Text>;
};

export function a(): any {
  render(<Counter />);
}
