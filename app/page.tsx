import React from 'react';
import { WelcomeSection, AboutSection, TechnologiesSection, ProjectsSection } from '../app/sections';

const Page: React.FC = () => {
	return (
		<div className="container-md">
			<WelcomeSection />
			<AboutSection />
			<ProjectsSection />
			<TechnologiesSection />
		</div>
	);
};

export default Page;