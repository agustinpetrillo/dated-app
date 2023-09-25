const Contact = () => {
  return (
    <section className="flex flex-col items-center justify-center text-white">
      <h1>Do you need help?</h1>
      <form className="flex flex-col">
        <textarea
          name=""
          placeholder="What's your problem?"
          id=""
          className="h-32 text-gray-500 outline-none resize-none"
        />
        <button className="px-4 py-2 font-bold text-white transition-all duration-200 bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline">
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
