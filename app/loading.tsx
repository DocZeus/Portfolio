import React from 'react';
import { Loader } from '../components';

interface LoadingProps {
	textClassNames?: string;
}

const Loading: React.FC<LoadingProps> = ({ textClassNames }: LoadingProps) => {
	return (
		<div className="flex-center">
			<Loader textClassNames={textClassNames} />
		</div>
	);
};

export default Loading;
