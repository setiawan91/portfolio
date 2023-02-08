import Image from 'next/image'
import Layout from '../components/Layout'
import Link from 'next/link'
import {FaLinkedin, FaGithub, FaWhatsapp} from 'react-icons/fa';

function Home() {
  return (
    <Layout pageTitle="Home">
      <div className="flex min-h-screen flex-col items-center justify-center ">
        <main className="flex w-full flex-1 flex-col items-center text-center">
          <figure className="lg:w-1/2 bg-slate-100 p-8 dark:bg-slate-800 mt-2 mb-2 shadow">
            <Image className="w-24 h-24 rounded-full mx-auto" src="/adi.jpg" alt="" width="384" height="512"/>
            <div className="pt-2 space-y-4">
              <blockquote>
                <p className="ml-4 text-lg font-small">
                  "Welcome to my portfolio site. I am going to show you some projects I've been involved with.
                </p>
                <p className="ml-4 text-lg font-small">
                Feel happy if I can help and grow together."
                </p>
              </blockquote>
              <figcaption className="font-medium ">
                <div className="text-sky-500 dark:text-sky-400">
                  Adi Setiawan
                </div>
                <div className="text-slate-700 dark:text-slate-500">
                  Software Engineer, Full-stack Developer
                </div>
              </figcaption>
            </div>
            
            <div className="mt-14 p-12 grid grid-cols-3" style={{marginBottom:420}}>
              <div className="mx-auto ">
                  <Link target="_blank" href="https://www.linkedin.com/in/adi-setiawan-5a550271/" title="linkedin">
                      <FaLinkedin style={{ color: "grey", fontSize:40,}} />
                      <div className="hidden md:block">LINKEDIN</div>
                  </Link>
              </div>
              
              <div className="mx-auto ">
                  <Link target="_blank" href="https://github.com/setiawan91" title="github">
                      <FaGithub style={{ color: "grey", fontSize:40,}} /> 
                      <div className="hidden md:block">GITHUB</div>
                  </Link>                        
              </div>

              <div className="mx-auto ">
                  <Link target="_blank" href="https://api.whatsapp.com/send?phone=6285770289748" title="github">
                      <FaWhatsapp style={{ color: "grey", fontSize:40,}} /> 
                      <div className="hidden md:block">WHATSAPP</div>
                  </Link>
              </div>
            </div>
          </figure>
        </main>
      </div>
    </Layout>
  )
}

export default Home
