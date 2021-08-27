import { React } from 'react';
import config from '../core/config';
import context from '../core/context';
import { project } from '../services/positionService';

const Box = () => {
	const { x, y } = project(context.state);
	const style = {
		top: `${ y }%`,
		left: `${ x }%`,
		height: `${ config.height }vw`,
		width: `${ config.width }vw`,
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
