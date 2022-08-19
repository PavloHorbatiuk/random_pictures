import { useState } from 'react';
import { numApi } from '../api';

export function usePictureDetails() {
	const [isShow, setIsShow] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<unknown>();

	const getRandomNum = async () => {
		setIsLoading(true);
		setIsShow(false);
		try {
			const data = await Promise.all([numApi.getData(), numApi.getData()]);
			if (data[0].data === data[1].data) {
				setIsShow(true);
				setIsLoading(false);
			} else {
				await getRandomNum();
			}
		} catch (e) {
			setError(e);
		}
	};
	return {
		getRandomNum,
		isShow,
		error,
		isLoading,
	};
}
