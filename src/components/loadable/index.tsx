import { ComponentType, FC, Suspense } from "react";

const Loadable = <P extends object>(Component: ComponentType<P>): FC<P> => (props: P) => (
    <Suspense fallback={"Loading..."}>
        <Component {...props} />
    </Suspense>
);

export default Loadable;