import Link from 'next/link';
import Head from 'next/head';

export default function Layout(contents, title){
    const links = [
        {title:'Home', page:'/'},
        {title:'FAQs', page:'/faqs'},
    ]

    const footerLinks = [
        {title:'Privacy Policy', page:'/privacy-policy'},
        {title:'Safe Browsing', page: '/safe-browsing'}
    ]

    const renderHeader = () => { 
        return <header>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Fixed navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav me-auto mb-2 mb-md-0">
                  {links.map(link => <li class="nav-item">
                    <Link href={link.page}>
                        <a className="nav-link active">{link.title}</a>
                    </Link>
                  </li>)}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    }

    const renderFooter = () => {
        return <footer style={{position:'fixed', bottom:'0', width:'100%'}} className="site-footer">
                <div class="site-footer-bg">
                    <div className="container">
                        <div className="site-footer__top">
                            <div className="row">
                                {footerLinks.map(link => <div className={'col-xl-3 col-lg-6 col-md-6'}>
                                    <Link href={link.page}>
                                        <div className='footer-widget__text'>{link.title}</div>
                                    </Link>
                                </div>)}
                            </div>
                        </div>
                    <div className="site-footer__bottom">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="site-footer__bottom-inner">
                                    <div className="site-footer__bottom-copy-right">
                                        <p>© Copyright 2021 by <a href="#">embolden-hub.org.uk</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </footer>
    }

    return <>
        <Head>
            <title>Embolden Hub - {title}</title>
            <link rel="icon" href="/favicon.ico" />
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link
            href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"/>
        </Head>
        <div className="d-flex flex-column h-100">
        {renderHeader()}
        <main className="flex-shrink-0">
            <div className="container">
                {contents}
            </div>
        </main>
        {renderFooter()}
    </div>
    </>
}
