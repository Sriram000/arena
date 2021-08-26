import { rndBetween } from '@laufire/utils/random';
import config from '../core/config';

const hundred = 100;
const two = 2;

const getRandomX = ({ width }) =>
	rndBetween(width / two, hundred - (width / two));

const getRandomY = ({ height }) =>
	rndBetween(height / two, hundred - (height / two));

const project = (position) => {
	const { x, y } = position;

	return {
		x: x - (config.width / two),
		y: y - (config.height / two),
	};
};

export { getRandomX, getRandomY, project };
