import "./index.css";
import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ 
          padding: '40px', 
          color: '#f87171', 
          background: '#0f172a', 
          border: '2px solid #ef4444', 
          fontFamily: 'monospace',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div style={{ maxWidth: '800px', width: '100%' }}>
            <h2 style={{ fontSize: '24px', marginBottom: '20px', color: '#ef4444' }}>🔴 React Runtime Render Crash</h2>
            <pre style={{ 
              background: '#1e293b', 
              padding: '20px', 
              borderRadius: '8px', 
              overflowX: 'auto',
              whiteSpace: 'pre-wrap',
              border: '1px solid #334155'
            }}>
              {this.state.error?.stack || this.state.error?.toString()}
            </pre>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  );
}
