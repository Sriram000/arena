/* eslint-disable max-lines-per-function */
jest.mock('../core/context', () =>
	({
		state: { target: { x: 10, y: 10 }},
		actions: { moveTarget: jest.fn() },
	}));
import { render, fireEvent } from '@testing-library/react';

import context from '../core/context';
import * as PositionService from '../services/positionService';
import Box from './box';

describe('Box', () => {
	const { actions } = context;
	const projectedBox = {
		x: 50,
		y: 50,
	};

	test('renders the component with appropriate styling', () => {
		const { x, y } = projectedBox;

		jest.spyOn(PositionService, 'project').mockReturnValue(projectedBox);

		const { getByRole } = render(Box());

		const component = getByRole('box');

		expect(component).toBeInTheDocument();
		expect(PositionService.project).toHaveBeenCalledWith(context.state);
		expect(component).toHaveStyle({
			top: `${ y }%`,
			left: `${ x }%`,
		});
	});

	test('when clicked called the action, moveTarget', () => {
		const component = render(Box()).getByRole('box');

		fireEvent.click(component);

		expect(actions.moveTarget).toHaveBeenCalled();
	});
});
