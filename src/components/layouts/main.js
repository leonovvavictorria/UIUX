export default function Layout({ children }) {
  return (
    <html lang='en'>
      <head>
        <title>Главная</title>
        <link
          rel='icon'
          type='image/x-icon'
          href='/free-icon-font-play-alt-3914327.svg'
        />
      </head>
      <body>
        <div className='container-fluid'>
          <header class='py-3 mb-4 border-bottom'>
            <a
              href='/'
              class='center-logo mb-3 mb-md-0 me-md-auto text-dark text-decoration-none'
            >
              <span class='fs-1 head-text'>RMDB</span>
            </a>
          </header>
          <main>{children}</main>
        </div>
        <div class='footer'>
          <footer class='d-flex flex-wrap justify-content-between align-items-center py-5 px-5 border-top'>
            <div class='col-md-4 d-flex align-items-center w-100'>
              <div class='row w-100'>
                <div class='col-foot-small'>
                  <span class='mb-3 mb-md-0 text-body-secondary'>
                    Сайт сделан в учебных целях
                    <br />
                    Веб-дизайнер Виктория
                    <br />
                    <img src='/tg.svg'></img>
                    &nbsp;@leonovva_victorria
                  </span>
                </div>
                <div class='col-foot-wide'>
                  <img src='/Ellipse.svg' width='100px' height='100px'></img>
                </div>
                <ul class='nav col-foot-arrow list-unstyled d-flex'>
                  <li class='mx-5'>
                    <img
                      src='/Group.svg'
                      width='100px'
                      onClick={() => window.scrollTo(0, 0)}
                      style={{ cursor: 'pointer' }}
                      height='100px'
                    ></img>
                  </li>
                </ul>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
