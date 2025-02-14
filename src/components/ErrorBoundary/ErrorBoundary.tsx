import {Component, ReactNode} from "react";
import Button from "../Shared/Button/Button";

type Props = {
  children: ReactNode;
};

type State = {
  hasError: boolean;
};

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {hasError: false};
  }

  static getDerivedStateFromError() {
    return {hasError: true};
  }

  handleReload = () => {
    this.setState({hasError: false});
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <section
          className="d-flex flex-column justify-content-center align-items-center y-gap-10 w-100"
          style={{minHeight: "100vh"}}
        >
          <img
            src="https://firebasestorage.googleapis.com/v0/b/mern-tours-e23a8.appspot.com/o/assets%2FError.png?alt=media&token=dfeb639a-ca95-487a-93df-5f0e94fa3227"
            alt="Error"
            style={{scale: "75%"}}
          />
          <div
            className="d-flex flex-column justify-content-center align-items-center"
            style={{transform: "translateY(-50px)"}}
          >
            <p className="text-18 fw-600 text-center">
              Something went wrong, our team has been notified!{" "}
              <span className="d-block">
                Try refreshing the page or coming back later.
              </span>
            </p>
            <Button buttonType="primary" onClick={this.handleReload}>
              Reload Page
            </Button>
          </div>
        </section>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
