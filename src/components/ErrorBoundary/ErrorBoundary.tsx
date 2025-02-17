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
        <section className="nopage mt-header">
          <div className="container">
            <div className="row y-gap-30 justify-between items-center">
              <div className="col-xl-6 col-lg-6" style={{minHeight: "50vh"}}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/mern-tours-e23a8.appspot.com/o/assets%2FError.png?alt=media&token=dfeb639a-ca95-487a-93df-5f0e94fa3227"
                  alt="oops"
                />
              </div>

              <div className="col-xl-5 col-lg-6">
                <div className="nopage__content pr-30 lg:pr-0">
                  <h1>OOPS!</h1>
                  <h2 className="text-20 fw-500">Somwthing went wrong</h2>
                  <p>Try refreshing the page or coming back later.</p>

                  <Button buttonType="primary" onClick={this.handleReload}>
                    Reload Page
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
