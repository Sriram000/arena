import { React } from 'react';
import context from '../core/context';
import { project } from '../services/positionService';

const Box = () => {
	const { x, y } = project(context.state);
	const style = {
		top: `${ y }%`,
		left: `${ x }%`,
	};

	return (
		<div
			className="box"
			style={ style }
			role="box"
			onClick={ () => context.actions.moveTarget() }
		/>
	);
};

export default Box;
