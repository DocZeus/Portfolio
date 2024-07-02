import { AiOutlineLoading } from "react-icons/ai";

interface LoaderProps {
    textClassNames?: string;
}

export function Loader({ textClassNames = "" }: LoaderProps): JSX.Element {
	return (
		<div className="flex-center flex-col gap-5 ite">
			<div className="animate-spin ">
				<AiOutlineLoading size={30} />
			</div>
			<p className={textClassNames}>Loading...</p>
		</div>
	);
}