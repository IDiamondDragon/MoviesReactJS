import React, { ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export interface ErrorState {
    error: Error | null;
    errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends React.Component<Props, ErrorState> {

  constructor(props: Props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }
  
  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
    // You can also log error messages to an error reporting service here
  }
  
  render(): React.ReactNode | null | undefined {
    if (this.state.errorInfo) {
      // Error path
      return (
        <div className='loading-indicator'>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            { this.state?.error?.toString() }
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    // Normally, just render children
    return this.props.children;
  }  
}

export default ErrorBoundary
