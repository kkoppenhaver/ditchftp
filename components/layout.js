import Alert from '../components/alert'
import Footer from '../components/footer'
import Meta from '../components/meta'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <main className="font-lato text-white bg-light-blue">{children}</main>
      </div>
      <Footer />
    </>
  )
}
