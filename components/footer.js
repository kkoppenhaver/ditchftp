import Container from './container'
import { WP_PUSHER_LOGO } from '../lib/constants'

export default function Footer() {
  console.log(WP_PUSHER_LOGO);
  return (
    <footer className="bg-accent-1 border-t border-accent-2 bg-dark-blue text-white">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <div>
            <img src={WP_PUSHER_LOGO} />
            <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Sponsored by WP Pusher</h3>
            <p className="mt-4">The easiest way to install WordPress plugins and themes from a Git repository.</p>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://wppusher.com/?utm_source=ditchftp"
              className="mx-3 bg-light-blue text-white border border-transparent hover:bg-dark-blue hover:border-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Learn More
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
