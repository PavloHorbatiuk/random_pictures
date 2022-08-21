import axios from 'axios';

const instance = axios.create({
	baseURL: `https://www.random.org/integers/`,
});
export const numApi = {
	getData() {
		return instance.get<number>(
			`?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new`
		);
	},
};
