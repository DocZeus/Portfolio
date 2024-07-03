import { ProjectItem } from "../../sections";

interface Project {
    _id: string;
    createdAt: string;
    [key: string]: any;
}

interface ProjectsProps {
    projects: Project[];
}

export function Projects({ projects }: ProjectsProps): JSX.Element {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
			{projects
				?.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
				?.map((project, index) => (
					<ProjectItem key={project._id} project={project} index={index} />
				))}
		</div>
	);
}