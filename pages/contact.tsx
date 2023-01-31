import Layout from '../components/Layout'
import Link from 'next/link'
import {FaLinkedin, FaGithub, FaWhatsapp} from 'react-icons/fa';

function Contact() {
    return (
        <Layout pageTitle="Contact">
            <div className="flex min-h-screen flex-col items-center justify-center ">
                <main className="flex w-full flex-1 flex-col items-center text-center">
                    <figure className="lg:w-1/2 bg-slate-100 p-8 dark:bg-slate-800 mt-2 mb-2 shadow">
                        <div className="mx-auto">
                            <h1 className='text-lg'>CONTACT</h1>
                            <p>&nbsp;</p>
                        </div>
                        
                        <div className=" grid lg:grid-cols-3">
                            <div className=" mt-5 lg-4 ">
                                <Link target="_blank" href="https://www.linkedin.com/in/adi-setiawan-5a550271/" title="linkedin">
                                    <FaLinkedin style={{ color: "grey", fontSize:100,}} />
                                    <h1 className="col-span-full">LINKEDIN</h1>
                                </Link>
                            </div>
                            
                            <div className=" mt-5 lg-4 ">
                                <Link target="_blank" href="https://github.com/setiawan91" title="github">
                                    <FaGithub style={{ color: "grey", fontSize:100,}} /> 
                                    <h1 className="col-span-full">GITHUB</h1>
                                </Link>                        
                            </div>

                            <div className=" mt-5 lg-4 ">
                                <Link target="_blank" href="https://api.whatsapp.com/send?phone=6285770289748" title="github">
                                    <FaWhatsapp style={{ color: "grey", fontSize:100,}} /> 
                                    <h1 className="col-span-full">WHATSAPP</h1>
                                </Link>
                            </div>
                        </div>
                    </figure>
                </main>
            </div>
        </Layout>
    )
}

export default Contact;