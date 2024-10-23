import { Link } from "react-router-dom"
import AuthForm from "../components/Auth/AuthForm"
import useAuthHandler from "../hooks/useAuthHandler"

const Auth = () => {
  const {authConf, authSchema, onSubmit} = useAuthHandler()
  const {authType, fields, urlLabel, urlText, url, desc } = authConf

  return (
    <section className="mt-header layout-pt-lg layout-pb-lg">
      <div className="container">
        <div className="row justify-center">
          <div className="col-xl-6 col-lg-7 col-md-9">
            <div className="text-center mb-60 md:mb-30">
              <h1 className="text-30">{authType}</h1>
              <div className="text-18 fw-500 mt-20 md:mt-15">{desc}</div>
              <div className="mt-5">
                {urlLabel} <Link to={url} className="text-accent-1">{urlText}</Link>
              </div>
            </div>
            <AuthForm fields={fields} buttonText={authType} authSchema={authSchema} onSubmit={onSubmit}/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Auth
