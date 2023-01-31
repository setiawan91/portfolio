import Layout from '../components/Layout'
import { HiOutlineOfficeBuilding } from 'react-icons/hi';

function Experience() {
  return (
    <Layout pageTitle="Experience">
        <div className="flex min-h-screen flex-col items-center justify-center ">
            <main className="flex w-full flex-1 flex-col items-center text-center">
                <figure className="lg:w-1/2 bg-slate-100 p-8 dark:bg-slate-800 mt-2 mb-2 shadow">
                <div className="mx-auto">
                    <h1 className='text-lg'>EXPERIENCE</h1>
                    <p>&nbsp;</p>
                </div>
                <div className="flex text-left">
                    <div className="flex flex-col items-center ml-2">
                    <div>
                        <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                        <HiOutlineOfficeBuilding/>
                        </div>
                    </div>
                    <div className="w-px h-full bg-gray-300"></div>
                    </div>
                    <div className="w-full p-8 ">
                    <p className="mb-2 text-xl font-medium text-gray-600">Aug 2022 - Jan 2023</p>
                    <p className="mb-2 text-xl font-medium text-gray-600">PT. Kryptopos Indonesia - Jakarta</p>
                    <p className="mb-2 text-lg font-medium text-gray-600">Software Engineer</p>
                    </div>
                    <div className="w-full p-8 ">
                        <ul style={{ listStyleType: 'circle' }} className='text-sm'>
                            <li>Develop POS(Point of Sales) application</li>
                            <li>Frontend using Next JS for developing CMS</li>
                            <li>Backend using Go for developing API</li>
                            <li>Handling other projects using Laravel and YII</li>
                        </ul>
                    </div>
                </div>
                <div className="flex text-left">
                    <div className="flex flex-col items-center ml-2">
                    <div>
                        <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                        <HiOutlineOfficeBuilding/>
                        </div>
                    </div>
                    <div className="w-px h-full bg-gray-300"></div>
                    </div>
                    <div className="w-full p-8 ">
                    <p className="mb-2 text-xl font-medium text-gray-600">Oct 2018 - May 2022</p>
                    <p className="mb-2 text-xl font-medium text-gray-600">PT. Galactic Multimedia - Jakarta</p>
                    <p className="mb-2 text-lg font-medium text-gray-600">Software Engineer</p>
                    </div>
                    <div className="w-full p-8 ">
                        <ul style={{ listStyleType: 'circle' }} className='text-sm'>
                            <li>Develop internal apps</li>
                            <li>Develop digital content platform for Partners</li>
                            <li>Manage Apps & Databases</li>
                            <li>Support and help end user</li>
                        </ul>
                    </div>
                </div>
                <div className="flex text-left">
                    <div className="flex flex-col items-center ml-2">
                    <div>
                        <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                        <HiOutlineOfficeBuilding/>
                        </div>
                    </div>
                    <div className="w-px h-full bg-gray-300"></div>
                    </div>
                    <div className="w-full p-8 ">
                    <p className="mb-2 text-xl font-medium text-gray-600">Jan 2018 - Jan 2019</p>
                    <p className="mb-2 text-xl font-medium text-gray-600">PT WebHozz Media (Webhozz) - Jakarta </p>
                    <p className="mb-2 text-lg font-medium text-gray-600">Trainer</p>
                    </div>
                    <div className="w-full p-8 ">
                        <ul style={{ listStyleType: 'circle' }} className='text-sm'>
                            <li>Teach Web Design</li>
                            <li>Teach Web Programming</li>
                            <li>Teach Wordpress</li>
                            <li>Teach Laravel & Codeigniter</li>
                        </ul>
                    </div>
                </div>
                <div className="flex text-left">
                    <div className="flex flex-col items-center ml-2">
                    <div>
                        <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                        <HiOutlineOfficeBuilding/>
                        </div>
                    </div>
                    <div className="w-px h-full bg-gray-300"></div>
                    </div>
                    <div className="w-full p-8 ">
                    <p className="mb-2 text-xl font-medium text-gray-600">May 2015 - Sep 2018</p>
                    <p className="mb-2 text-xl font-medium text-gray-600">Alfaland Group - Tangerang</p>
                    <p className="mb-2 text-lg font-medium text-gray-600">PHP Developer</p>
                    </div>
                    <div className="w-full p-8 ">
                        <ul style={{ listStyleType: 'circle' }} className='text-sm'>
                            <li>Develop custom ERP system</li>
                            <li>Maintain apps and server</li>
                            <li>Support and help end user</li>
                        </ul>
                    </div>
                </div>
                <div className="flex text-left">
                    <div className="flex flex-col items-center ml-2">
                    <div>
                        <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                        <HiOutlineOfficeBuilding/>
                        </div>
                    </div>
                    <div className="w-px h-full bg-gray-300"></div>
                    </div>
                    <div className="w-full p-8 ">
                    <p className="mb-2 text-xl font-medium text-gray-600">Jun 2013 - Mar 2015</p>
                    <p className="mb-2 text-xl font-medium text-gray-600">AORA TV - Jakarta</p>
                    <p className="mb-2 text-lg font-medium text-gray-600">IT Programmer</p>
                    </div>
                    <div className="w-full p-8 ">
                        <ul style={{ listStyleType: 'circle' }} className='text-sm'>
                            <li>Develop preinput subscriber, reporting, payment gateway apps</li>
                            <li>Maintain apps and server</li>
                            <li>Support and help end user</li>
                        </ul>
                    </div>
                </div>
                </figure>
            </main>
        </div>

    </Layout>
  );
}

export default Experience;