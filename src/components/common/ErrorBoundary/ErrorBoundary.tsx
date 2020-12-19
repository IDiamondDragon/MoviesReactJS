import React from "react";

type ErrorState = {
    error: any,
    errorInfo: any
}

export class ErrorBoundary extends React.Component<unknown, ErrorState> {

  constructor(props: ErrorState) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }
  
  componentDidCatch(error: any, errorInfo: any): void {
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
        <div style={{fontSize: '30px', textAlign: 'center', marginTop: '30px', color: 'black'}}>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
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
