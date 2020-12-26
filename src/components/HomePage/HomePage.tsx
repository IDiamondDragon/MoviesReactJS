import React from "react";

export interface HomePageProps {
  children: React.ReactNode
}

export function HomePage({children}: HomePageProps): JSX.Element {
  return (
    <>
      {children}
    </>
  );
}

export default HomePage