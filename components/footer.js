import Container from './container'
import { WP_PUSHER_LOGO } from '../lib/constants'

export default function Footer() {
  return (
    <footer className="bg-dark-blue text-white">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <div>
            <img src={WP_PUSHER_LOGO} className="inline-block align-middle w-1/5 lg:w-16" />
            <h3 className=" inline-block align-middle ml-4 text-3xl lg:text-4xl font-bold text-center lg:text-left lg:pr-4 lg:w-4/5">
            Sponsored by WP Pusher</h3>
            <p className="mt-4">The easiest way to install WordPress plugins and themes from a Git repository.</p>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://wppusher.com/?utm_source=ditchftp"
              className="mx-3 bg-light-blue text-white border border-transparent hover:bg-dark-blue hover:border-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0 mt-4"
            >
              Learn More
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
