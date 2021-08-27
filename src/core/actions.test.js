import * as PositionService from '../services/positionService';
import config from './config';
import actions from './actions';

test('moveTarget', () => {
	const { moveTarget } = actions;
	const randomWidth = Symbol('randomx');
	const randomHeight = Symbol('randomY');
	const expectedResult = {
		x: randomWidth,
		y: randomHeight,
	};

	jest.spyOn(PositionService, 'getRandomX').mockReturnValue(randomWidth);
	jest.spyOn(PositionService, 'getRandomY').mockReturnValue(randomHeight);

	const result = moveTarget();

	expect(PositionService.getRandomX).toHaveBeenCalledWith(config);
	expect(PositionService.getRandomY).toHaveBeenCalledWith(config);
	expect(result).toMatchObject(expectedResult);
});
