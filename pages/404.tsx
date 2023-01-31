import Layout from '../components/Layout'

export default function Custom404() {
  return (
    <Layout pageTitle="404 page">
      <div className="container">
        <div className="col-sm-8 mx-auto ">
            <div className="row " >
                <div className="col-sm-12 mt-5">
                    <h1>404</h1>
                    <p>Page not found!</p>
                </div>
            </div>
        </div>
      </div>
    </Layout>
  )
}
