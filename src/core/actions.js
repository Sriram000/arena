import { getRandomX, getRandomY } from '../services/positionService';
import config from './config';

const moveTarget = () => ({
	x: getRandomX(config),
	y: getRandomY(config),
});

const actions = {
	moveTarget,
};

export default actions;
