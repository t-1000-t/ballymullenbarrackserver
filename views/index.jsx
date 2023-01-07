const React = require('react')
const DefaultLayout = require('./layouts/default')
const { appUrl } = require('../config/config')

function HomePage({ result: shortUrl }) {
  return (
    <DefaultLayout>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <a className='navbar-brand' href='#'>
          Expand at xxl
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarsExampleXxl'
          aria-controls='navbarsExampleXxl'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarsExampleXxl'>
          <ul className='navbar-nav me-auto mb-2 mb-xl-0'>
            <li className='nav-item'>
              <a className='nav-link active' aria-current='page' href='#'>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Link
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link disabled' href='#' tabIndex='-1' aria-disabled='true'>
                Disabled
              </a>
            </li>
            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                href='#'
                id='dropdownXxl'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Dropdown
              </a>
              <ul className='dropdown-menu' aria-labelledby='dropdownXxl'>
                <li>
                  <a className='dropdown-item' href='#'>
                    Action
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Another action
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <form>
            <input className='form-control' type='text' placeholder='Search' aria-label='Search' />
          </form>
        </div>
      </nav>
      <div className='container'>
        <div className='row'>
          <div className='col-sm'>
            <form
              method='post'
              action={appUrl + '/api/url'}
              encType='application/x-www-form-urlencoded'
            >
              <div className='mb-3'>
                <label htmlFor='exampleInputEmail1' className='form-label'>
                  Write here your long url!
                </label>
                <input
                  type='url'
                  name='url'
                  className='form-control'
                  id='exampleInputEmail1'
                  aria-describedby='emailHelp'
                />
                <div id='emailHelp' className='form-text'>
                  We'll never share your email with anyone else.
                </div>
              </div>
              <button type='submit' className='btn btn-primary'>
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm'>
            {shortUrl && (
              <a href={shortUrl} className='btn btn-outline-dark' target='_blank'>
                <h6>{shortUrl}</h6>
              </a>
            )}
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}

module.exports = HomePage
