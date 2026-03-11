import { Calendar, Clock, Globe, Headphones, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Header */}
      <header className="border-b border-[#E5E0D8] bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link href="/" className="flex items-center gap-3">
              <img
                src="/images/jizo.jpg"
                alt="Jizo Bodhisattva - Core Self Reiki Logo"
                className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
              />
              <span className="font-serif text-xl sm:text-2xl text-[#2C1810]">Core Self Reiki</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link href="#home" className="text-[#4A4A4A] hover:text-[#7C3F47] transition-colors text-sm">
                Home
              </Link>
              <Link href="#reiki-ryoho" className="text-[#4A4A4A] hover:text-[#7C3F47] transition-colors text-sm">
                Reiki Ryoho
              </Link>
              <Link href="#sessions" className="text-[#4A4A4A] hover:text-[#7C3F47] transition-colors text-sm">
                Reiki Sessions
              </Link>
              <Link href="#courses" className="text-[#4A4A4A] hover:text-[#7C3F47] transition-colors text-sm">
                Courses
              </Link>
              <Link href="#contact" className="text-[#4A4A4A] hover:text-[#7C3F47] transition-colors text-sm">
                Contact
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2">
              <Menu className="w-6 h-6 text-[#4A4A4A]" />
            </button>
          </div>
        </div>
      </header>

      <section className="relative w-full h-[45vh] sm:h-[55vh] max-h-[480px] overflow-hidden">
        <img
          src="/images/flora-warm-bg.jpeg"
          alt="Core Self Reiki - Warm Floral Background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent" />
      </section>

      <section className="py-10 sm:py-12 bg-[#F5F1EB]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <blockquote className="font-serif text-2xl sm:text-3xl text-[#2C1810] mb-4 text-balance italic">
            "The way to do is to be."
          </blockquote>
          <p className="text-lg text-[#5A5A5A] mb-6">(Lao-Tzu)</p>
          <blockquote className="font-serif text-xl sm:text-2xl text-[#2C1810] text-balance italic">
            "People should not consider so much what they are to do, as what they are."
          </blockquote>
          <p className="text-lg text-[#5A5A5A]">(Meister Eckhart)</p>
        </div>
      </section>

      <section id="home" className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-[#5A5A5A] leading-relaxed text-lg mb-6">
              Our core self is our essence, our still silent center of consciousness in the ocean of oneness. Referred
              to as true nature, original nature, or inner luminosity, this deeper reality of the self is experienced as
              a simple awake presence or pure being which manifests explicitly as love, kindness, peace, joy, truth,
              wisdom, and freedom…
            </p>
            <p className="text-[#5A5A5A] leading-relaxed text-lg mb-6">
              When rooted in our core self, we feel at home in the world and in ourselves; our lives become effortless
              and authentic, clear expressions of who and what we truly are, unfolding in the realm of synchronicity
              rather than causality; we live openly, correctly, and fully, we love well and deeply, and we have a sense
              of connection, contentment, and joy, of sacred meaning and value.
            </p>
            <p className="text-[#5A5A5A] leading-relaxed text-lg mb-6">
              The purpose of Core Self Reiki.ca is to encourage individuals to discover, reclaim, deepen, and integrate
              their experience of their core self through the practice of Reiki Ryoho.
            </p>
            <p className="text-[#5A5A5A] leading-relaxed text-lg">
              Our logo, created by artist Yosei Kansaku of Japan, reflects this aim. It represents Jizo, a bodhisattva
              who goes fearlessly wherever his help is needed by those on the path to enlightenment. His qualities are
              benevolence, determination, and unflagging optimism. His message might translate from Japanese as:{" "}
              <span className="font-serif italic">
                "Put your mind at ease and trust yourself; your presence itself is light and love."
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-[#F5F1EB]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <p className="text-lg text-[#5A5A5A] mb-8 leading-relaxed">
            To find out more about{" "}
            <Link href="#reiki-ryoho" className="text-[#7C3F47] hover:underline font-medium">
              Reiki Ryoho
            </Link>
            , to book a{" "}
            <Link href="#sessions" className="text-[#7C3F47] hover:underline font-medium">
              Reiki session
            </Link>
            , or to sign up for a{" "}
            <Link href="#courses" className="text-[#7C3F47] hover:underline font-medium">
              course
            </Link>
            , please{" "}
            <Link href="#contact" className="text-[#7C3F47] hover:underline font-medium">
              contact
            </Link>{" "}
            Elyssa Matthews.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#7C3F47] hover:bg-[#6A3540] text-white text-base px-8">
              Book a Session
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#7C3F47] text-[#7C3F47] hover:bg-[#7C3F47]/5 text-base px-8 bg-transparent"
            >
              Learn About Courses
            </Button>
          </div>
        </div>
      </section>

      {/* Information Cards with Icons */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Card 1 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#D4A574]/20 mb-4">
                <Calendar className="w-8 h-8 text-[#D4A574]" />
              </div>
              <h3 className="font-serif text-lg text-[#2C1810] mb-2">Flexible Scheduling</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">
                Choose times that work best for your personal healing journey
              </p>
            </div>

            {/* Card 2 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#D4A574]/20 mb-4">
                <Clock className="w-8 h-8 text-[#D4A574]" />
              </div>
              <h3 className="font-serif text-lg text-[#2C1810] mb-2">Personalized Sessions</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">
                Each session is tailored to your unique needs and spiritual journey
              </p>
            </div>

            {/* Card 3 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#D4A574]/20 mb-4">
                <Globe className="w-8 h-8 text-[#D4A574]" />
              </div>
              <h3 className="font-serif text-lg text-[#2C1810] mb-2">Distance Reiki Available</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">
                Experience healing energy from anywhere in the world
              </p>
            </div>

            {/* Card 4 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#D4A574]/20 mb-4">
                <Headphones className="w-8 h-8 text-[#D4A574]" />
              </div>
              <h3 className="font-serif text-lg text-[#2C1810] mb-2">Experienced Guidance</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">
                Learn from a dedicated practitioner committed to your growth
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section id="reiki-ryoho" className="py-16 sm:py-20 lg:py-24 bg-[#F5F1EB]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2C1810] text-center mb-12">
            Explore Reiki Ryoho
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-lg p-8 hover:shadow-lg transition-shadow">
              <h3 className="font-serif text-2xl text-[#2C1810] mb-4">Reiki Sessions</h3>
              <p className="text-[#5A5A5A] leading-relaxed mb-6">
                Experience personalized healing sessions that help you reconnect with your core self through the
                traditional practice of Reiki Ryoho.
              </p>
              <Button
                variant="outline"
                className="border-[#7C3F47] text-[#7C3F47] hover:bg-[#7C3F47]/5 w-full bg-transparent"
              >
                Learn More
              </Button>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-lg p-8 hover:shadow-lg transition-shadow">
              <h3 className="font-serif text-2xl text-[#2C1810] mb-4">Reiki Courses</h3>
              <p className="text-[#5A5A5A] leading-relaxed mb-6">
                Deepen your understanding and practice of Reiki through comprehensive courses designed for all levels of
                experience.
              </p>
              <Button
                variant="outline"
                className="border-[#7C3F47] text-[#7C3F47] hover:bg-[#7C3F47]/5 w-full bg-transparent"
              >
                View Courses
              </Button>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-lg p-8 hover:shadow-lg transition-shadow">
              <h3 className="font-serif text-2xl text-[#2C1810] mb-4">About Reiki Ryoho</h3>
              <p className="text-[#5A5A5A] leading-relaxed mb-6">
                Discover the history, principles, and practice of Reiki Ryoho and how it can support your spiritual
                journey.
              </p>
              <Button
                variant="outline"
                className="border-[#7C3F47] text-[#7C3F47] hover:bg-[#7C3F47]/5 w-full bg-transparent"
              >
                Read More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#7C3F47] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl mb-6 text-balance">
            Begin Your Journey to Your Core Self
          </h2>
          <p className="text-lg sm:text-xl mb-8 opacity-90 max-w-2xl mx-auto text-pretty">
            Discover the peace, wisdom, and authentic presence that lies at the heart of who you truly are.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#7C3F47] hover:bg-white/90 text-base px-8">
              Contact Elyssa Matthews
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 text-base px-8 bg-transparent"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C1810] text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src="/images/jizo.jpg" alt="Jizo Bodhisattva" className="w-10 h-10 object-contain" />
                <h3 className="font-serif text-xl">Core Self Reiki</h3>
              </div>
              <p className="text-sm text-white/70 leading-relaxed">
                Discover, reclaim, deepen, and integrate your experience of your core self through Reiki Ryoho.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#home" className="text-white/70 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#reiki-ryoho" className="text-white/70 hover:text-white transition-colors">
                    Reiki Ryoho
                  </Link>
                </li>
                <li>
                  <Link href="#sessions" className="text-white/70 hover:text-white transition-colors">
                    Reiki Sessions
                  </Link>
                </li>
                <li>
                  <Link href="#courses" className="text-white/70 hover:text-white transition-colors">
                    Courses
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-white/70 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <p className="text-sm text-white/70 mb-4">
                For inquiries about sessions or courses, please contact Elyssa Matthews.
              </p>
              <Button size="sm" className="bg-[#7C3F47] hover:bg-[#6A3540] text-white">
                Get in Touch
              </Button>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-white/50">
            <p>&copy; 2025 Core Self Reiki. All rights reserved.</p>
            <p className="mt-2 text-xs">Logo artwork by Yosei Kansaku</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
