import React, { Suspense } from "react"

// PATERN: HOC
export function withSuspense(WrappedComponent: React.ComponentType) {
    // eslint-disable-next-line react/display-name
    return (props: any) => {
        return (<Suspense fallback={<div>loading...</div>} >
            <WrappedComponent {...props} />
        </Suspense>)
    }
}
