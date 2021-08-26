import { getRandomX, getRandomY } from '../services/positionService';
import config from './config';

const changePosition = () => ({
	x: getRandomX(config),
	y: getRandomY(config),
});

const actions = {
	changePosition,
};

export default actions;
