import React, { ReactNode } from "react";

interface PageProps {
	children: ReactNode;
}

export const metadata = {
	title: `Projects`,
};

export default function Page({ children }: PageProps): JSX.Element {
	return <div className="container-md">{children}</div>;
}