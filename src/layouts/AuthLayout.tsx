import { Link } from "react-router-dom"

type AuthLayoutProps = {
    authType: "Log In" | "Sign Up"
    description: string
    urlText: string
    urlLabel: string
    url: string
    children: React.ReactNode
}

const AuthLayout = ({authType, description, urlText, url, urlLabel, children}: AuthLayoutProps) => {
  return (
    <section className="mt-header layout-pt-lg layout-pb-lg">
      <div className="container">
        <div className="row justify-center">
          <div className="col-xl-6 col-lg-7 col-md-9">
            <div className="text-center mb-60 md:mb-30">
              <h1 className="text-30">{authType}</h1>
              <div className="text-18 fw-500 mt-20 md:mt-15">{description}</div>
              <div className="mt-5">
                {urlLabel} <Link to={url} className="text-accent-1">{urlText}</Link>
              </div>
            </div>
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AuthLayout