const Contact = () => {
  return (
    <section className="w-screen min-h-screen bg-[#0e0e10] flex flex-col items-center justify-center px-4">
      <h2 className="text-4xl font-bold mb-8 text-white text-center">Contact Me</h2>
      <form className="space-y-4 w-full max-w-xl">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded border border-gray-700 bg-transparent text-white placeholder-gray-400"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 rounded border border-gray-700 bg-transparent text-white placeholder-gray-400"
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          className="w-full p-3 rounded border border-gray-700 bg-transparent text-white placeholder-gray-400"
        />
        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded text-white w-full"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
