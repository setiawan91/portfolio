import Layout from '../components/Layout'
import Link from 'next/link'
import Image from 'next/image';
import hstore from '../public/hstore-thumb.jpg';
import penta from '../public/penta-thumb.jpg';
import asta from '../public/asta-thumb.jpg';
import cstools from '../public/cstools-thumb.jpg';
import workfren from '../public/workfren-thumb.jpg';
import rekamfilms from '../public/rekamfilms-thumb.jpg';
import brosgame from '../public/brosgame-thumb.jpg';
import kebunku from '../public/kebunku-thumb.jpg';

function Project() {
  const posts = [
    // {
    //     title: "E-PROC",
    //     img: '/eproc.jpg',
    //     content: "E-PROC adalah sebuah sistem procurement berbasis web",
    //     url: "http://dev-eproc-aca.ap-southeast-1.elasticbeanstalk.com/",
    // },
    // {
    //   title: "WIRA",
    //   img: '/wira.jpg',
    //   content: "WIRA adalah sebuah platform donasi yang diperuntukan khusus tentara militer",
    //   url: "https://wira.tanky.my/",
    // },
    {
      title: "SUMMARECON HOME CMS",
      img: '/home-cms.jpg',
      url: '/home-cms.jpg',
      content: "Summarecon Home CMS digunakan user untuk manajemen konten Summarecon Home Apps",
      // url: "https://dev.satusummarecon.co.id/cms-home/auth/login",
    },
    {
      title: "SUMMARECON MALL CMS",
      img: '/mall-cms.jpg',
      url: '/mall-cms.jpg',
      content: "Summarecon Mall CMS digunakan user untuk manajemen konten Summarecon Mall Apps",
      // url: "https://dev.satusummarecon.co.id/cms-mall/login",
    },
    {
      title: "DATA WAREHOUSE",
      img: '/dwh-cms.jpg',
      url: '/dwh-cms.jpg',
      content: "Data Warehouse CMS digunakan oleh user internal untuk konfigurasi, scoring dan profiling customer Summarecon Mall",
      // url: "https://stg.satusummarecon.co.id/cms-dwh/auth/login",
    },
    {
      title: "HUB-KRYPTOPOS",
      img: '/kpos.jpg',
      content: "HUB Kyrptopos adalah Content Management System (CMS) yang digunakan oleh user merchant dan internal",
      url: "https://hub.kryptopos.com/",
    },
    {
      title: "SPURR",
      img: '/spurr.jpg',
      content: "SPURR adalah sebuah loyalty platform",
      url: "https://app-v3.gospurr.com/",
      },
      {
        title: "HSTORE",
        img: '/hstore-thumb.jpg',
        content: "H-Store adalah platform konten gratis atau berlangganan untuk pengguna operator seluler HUTCH atau Three(3)",
        url: "https://hstore.oomph.co.id/",
    },
    {
        title: "PENTASIMETRIS",
        img: "/penta-thumb.jpg",
        content: "PENTASIMETRIS adalah website company profile dari PT. PENTASIMETRIS",
        url: "https://pentasimetris.com/",
    },
    {
        title: "ASTATRIKAUTSAR",
        img: "/asta-thumb.jpg",
        content: "ASTATRIKAUTSAR adalah website company profile dari PT. ASTATRIKAUTSAR",
        url: "https://astatrikautsar.com/",
    },
    {
        title: "CSTOOLS",
        img: "/cstools-thumb.jpg",
        content: "CSTOOLS adalah sebuah CMS atau Tools berbasis web untuk memprovide kebutuhan user internal banyak departemen",
        url: "https://cstools.oomph.co.id/",
    },
    {
        title: "WORKFREN",
        img: "/workfren-thumb.jpg",
        content: "WORKFREN adalah sebuah sistem ERP yang digunakan untuk membantu aktivitas user di banyak departemen",
        url: "http://workfren.com/",
    },
    {
        title: "REKAMFILMS",
        img: "/rekamfilms-thumb.jpg",
        content: "REKAMFILMS adalah sebuah web company profile perfilman Indonesia",
        url: "https://rekamfilms.com/",
    },
    {
        title: "BROSGAME",
        img: "/brosgame-thumb.jpg",
        content: "BROSGAME adalah platform konten game gratis atau berlangganan yang ditujukan untuk pengguna operator seluler SMARTFREN",
        url: "http://brosgame.com/",
    },
    {
        title: "KEBUNKU",
        img: "/kebunku-thumb.jpg",
        content: "KEBUNKU adalah sebuah B2B platform jual beli sayur dan buah",
        url: "https://kebunku.co.id/",
    },

  ];
  return (
    <Layout pageTitle="Project">
      <div className="flex min-h-screen flex-col items-center justify-center ">
        <main className="flex w-full flex-1 flex-col items-center text-center">
          <figure className="lg:w-1/2 bg-slate-100 p-8 dark:bg-slate-800 mt-2 mb-2 shadow">
          <div className="mx-auto">
              <h1 className='text-lg'>PROJECT</h1>
              <div>&nbsp;</div>
          </div>
          <div className="grid gap-6 lg:grid-cols-3 sm:grid-cols-2 ">
                {posts.map((items, key) => (
                  <Link href={items.url} target="_blank">
                    <div className="w-full rounded-lg shadow-md lg:max-w-sm mb-4" key={key}>
                        <Image
                            className="object-contain w-full h-96"
                            src={items.img} width={300} height={300}
                            alt={items.img}
                        />
                        <div className="p-4">
                            <h4 className="text-xl font-semibold text-slate-600">
                                {items.title}
                            </h4>
                            <div className="mb-2 leading-normal text-left">
                            {items.content}
                            </div>
                            <button className="px-4 py-2 text-sm text-slate-100 bg-slate-500 rounded shadow">
                                VISIT
                            </button>
                        </div>
                    </div>
                    </Link>
                ))}
            </div>
          </figure> 
        </main>
      </div>
    </Layout>
  );
}

export default Project;
