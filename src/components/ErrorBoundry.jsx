import { Component } from "react";
import PropTypes from "prop-types";
import logger from "../services/logger";

class ErrorBoundry extends Component {
    constructor(props){
        super (props);
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError() {
        return { hasError: true };
      }
    
      componentDidCatch(error, info) {
        logger(error, info.componentStack);
      }
    
      render() {
        if (this.state.hasError) {
          // You can render any custom fallback UI
          return this.props.fallback;
        }
    
        return this.props.children;
      }
    
}

ErrorBoundry.propTypes = {
    children: PropTypes.object,
    fallback: PropTypes.object
  };
export default ErrorBoundry;