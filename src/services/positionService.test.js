/* eslint-disable max-lines-per-function */
import * as PositionService from '../services/positionService';
import * as random from '@laufire/utils/random';
import config from '../core/config';

describe('positonService', () => {
	const { getRandomX, getRandomY, project } = PositionService;
	const min = 2.5;
	const max = 97.5;

	test('getRandomX', () => {
		const randomWidth = Symbol('randomWidth');

		jest.spyOn(random, 'rndBetween').mockReturnValue(randomWidth);

		const result = getRandomX(config);

		expect(random.rndBetween).toHaveBeenCalledWith(min, max);

		expect(result).toEqual(randomWidth);
	});

	test('getRandomY', () => {
		const randomHeight = Symbol('randomWidth');

		jest.spyOn(random, 'rndBetween').mockReturnValue(randomHeight);

		const result = getRandomY(config);

		expect(random.rndBetween).toHaveBeenCalledWith(min, max);
		expect(result).toEqual(randomHeight);
	});

	test('project', () => {
		const two = 2;
		const postion = {
			x: 5,
			y: 5,
		};
		const { x, y } = postion;
		const expectedResult = {
			// eslint-disable-next-line no-magic-numbers
			x: x - (x / two),
			y: y - (y / two),
		};

		const result = project(postion);

		expect(result).toMatchObject(expectedResult);
	});
});
