
function Contact() {
  return (
     <section className="mt-10">
      <h2 className="text-xl font-bold mb-4">Contact Us</h2>
      <form className="max-w-lg space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-2 border rounded"
        />
        <textarea
          placeholder="Your Message"
          className="w-full px-4 py-2 border rounded h-32"
        ></textarea>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
    </section>
  )
}

export default Contact