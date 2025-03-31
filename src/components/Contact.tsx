import { useState } from "react"
import emailjs from "@emailjs/browser"
import Form from '../components/Form'

export default function ContactSection() {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    
    try {
      await emailjs.send(
        import.meta.env.VITE_PUBLIC_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_PUBLIC_EMAILJS_PUBLIC_KEY,
      )

      setFormData({ name: "", email: "", message: "" })
      alert("Message sent successfully!")
    } catch (error) {
      console.error("Error sending email:", error)
      alert("Failed to send message. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section className="min-h-screen bg-[#1A1A1A] p-8 md:p-16">
      
      <h1 className="text-[#E2FB30] text-6xl font-bold mb-16 font-bebas">CONTACT</h1>

      <div className="grid md:grid-cols-2 gap-16 font-mono">
        <div className="space-y-8">
          <p className="text-white text-2xl leading-relaxed">
            Looking to start a project or you need consultation? Feel free to contact me.
          </p>

          <div className="space-y-2">
            <p className="text-gray-400">Tezpur, Assam, India</p>
            <a href="mailto:fardinkhan479@gmail.com" className="text-[#E2FB30] hover:underline block">
            fardinkhan479@gmail.com
            </a>
            <a
              href="https://www.fardinkhan.site"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E2FB30] hover:underline block"
            >
              www.fardinKhan.site
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-[#252525] text-white placeholder-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E2FB30]"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-[#252525] text-white placeholder-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E2FB30]"
          />

          <textarea
            name="message"
            placeholder="Message..."
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-[#252525] text-white placeholder-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E2FB30] min-h-[200px] resize-y"
          />

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-2 px-4 bg-[#E2FB30] text-black font-semibold rounded-md hover:bg-[#E2FB30]/90 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E2FB30] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </section>
  )
}

