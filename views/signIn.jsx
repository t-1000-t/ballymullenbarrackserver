const React = require('react')
const DefaultLayout = require('./layouts/default')

function SignIn() {
  return (
    <DefaultLayout>
      <form>
        <img
          className='mb-4'
          src='/docs/5.0/assets/brand/bootstrap-logo.svg'
          alt=''
          width='72'
          height='57'
        />
        <h1 className='h3 mb-3 fw-normal'>Please sign in</h1>

        <div className='form-floating' bis_skin_checked='1'>
          <input
            type='email'
            className='form-control'
            id='floatingInput'
            placeholder='name@example.com'
          />
          <label htmlFor='floatingInput'>Email address</label>
        </div>
        <div className='form-floating' bis_skin_checked='1'>
          <input
            type='password'
            className='form-control'
            id='floatingPassword'
            placeholder='Password'
          />
          <label htmlFor='floatingPassword'>Password</label>
        </div>

        <div className='checkbox mb-3' bis_skin_checked='1'>
          <label>
            <input type='checkbox' value='remember-me' /> Remember me
          </label>
        </div>
        <button className='w-100 btn btn-lg btn-primary' type='submit'>
          Sign in
        </button>
        <p className='mt-5 mb-3 text-muted'>© 2017–2021</p>
      </form>
    </DefaultLayout>
  )
}

module.exports = SignIn
