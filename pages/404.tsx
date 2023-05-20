import Layout from '../components/Layout'

export default function Custom404() {
  return (
    <Layout pageTitle="404 page">
      <div className="flex min-h-screen flex-col items-center justify-center ">
          <main className="flex w-full flex-1 flex-col items-center text-center">
              <figure className="lg:w-1/2 bg-slate-100 p-8 dark:bg-slate-800 mt-2 mb-2 shadow">
                <div className="mx-auto" style={{marginBottom:800}}>
                    <h1 className='text-lg'>404</h1>
                    <div>Page not found!</div>
                </div>
              </figure>
          </main>
      </div>
    </Layout>
  )
}
