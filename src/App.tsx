import React from 'react';
import { FormPicture } from './components/FormPicture';
import { usePictureDetails } from './hooks/usePictureDetails';
import './variables.scss';
import './App.scss';

function App() {
	const { getRandomNum, isShow, isLoading, error } = usePictureDetails();
	const takeNum = () => getRandomNum();
	const loremPicture = 'https://loremflickr.com/320/240/paris,girl/all';
	const loremPicture2 = 'https://loremflickr.com/320/240/brazil,rio';
	const loremPicture3 = 'https://loremflickr.com/g/320/240/paris,girl/all';
	const timeIsLoading = error ? (
		<span>Ooops!!!, sorry something going wrong</span>
	) : (
		<span>Matching...</span>
	);

	return (
		<div className="wrapper">
			<div className="wrapper container">
				<h1>Game with random numbers</h1>
				<div className="content">
					<div className=" content tiles">
						<FormPicture
							isShow={isShow}
							webAddress={loremPicture}
							title={'picture - 1'}
						/>
						<FormPicture
							isShow={isShow}
							webAddress={loremPicture2}
							title={'picture - 2'}
						/>
						<FormPicture
							isShow={isShow}
							webAddress={loremPicture3}
							title={'picture - 3'}
						/>
					</div>
				</div>
				{isLoading ? (
					timeIsLoading
				) : (
					<button disabled={isLoading} className=" btn" onClick={takeNum}>
						Throw
					</button>
				)}
			</div>
		</div>
	);
}

export default App;
