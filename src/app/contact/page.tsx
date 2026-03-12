import Header from '@/components/Header'
import ContactForm from '@/components/ContactForm'
import { getProfile } from '@/lib/supabase'

export default async function ContactPage() {
  const profile = await getProfile()

  return (
    <>
      <Header profile={profile} />

      <main className="min-h-screen bg-gray-50">
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h1>
          <p className="text-lg text-gray-600 mb-12">
            Have a question or want to work together? Send me a message!
          </p>

          <ContactForm profile={profile} />
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; {new Date().getFullYear()} {profile?.name || 'Developer'}. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
