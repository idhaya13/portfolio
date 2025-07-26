const Contact = () => {
  return (
    <section className="py-20 px-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400"
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400"
        />
        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded text-white"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
