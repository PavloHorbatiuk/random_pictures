import React from 'react';
import './../App.scss';
interface FormPicture {
	webAddress: string;
	title: string;
	isShow: boolean;
}
export const FormPicture: React.FC<FormPicture> = ({
	webAddress,
	title,
	isShow,
}) => {
	return (
		<>
			{!isShow ? (
				<span className="default-picture">
					If you win, you'll see amazing picture
				</span>
			) : (
				<img className="tile" src={webAddress} alt={title} />
			)}
		</>
	);
};
