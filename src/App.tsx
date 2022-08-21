import React, { Suspense } from 'react';
import { FormPicture } from './components/FormPicture';
import { usePictureDetails } from './hooks/usePictureDetails';
import './variables.scss';
import './App.scss';

enum randomPictures {
	lorem1 = 'https://loremflickr.com/320/240/paris,girl/all',
	lorem2 = 'https://loremflickr.com/320/240/brazil,rio',
	lorem3 = 'https://loremflickr.com/g/320/240/paris,girl/all',
}

function App() {
	const { getRandomNum, isShow, isLoading, error } = usePictureDetails();
	const takeNum = () => getRandomNum();
	const inTimeOfLoading = error ? 'Something went wrong ' : 'Matching...';

	return (
		<div className="wrapper">
			<div className="wrapper container">
				<h1>Game with random numbers</h1>
				<div className="content">
					<div className=" content tiles">
						<FormPicture
							isShow={isShow}
							webAddress={randomPictures.lorem1}
							title={'picture - 1'}
						/>
						<FormPicture
							isShow={isShow}
							webAddress={randomPictures.lorem2}
							title={'picture - 2'}
						/>
						<FormPicture
							isShow={isShow}
							webAddress={randomPictures.lorem3}
							title={'picture - 3'}
						/>
					</div>
				</div>
				<span className="span">{isLoading && inTimeOfLoading}</span>
				<button disabled={isLoading} className=" btn" onClick={takeNum}>
					Throw
				</button>
			</div>
		</div>
	);
}

export default App;
