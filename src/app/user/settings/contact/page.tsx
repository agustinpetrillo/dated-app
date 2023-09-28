export default function Contact() {
  return (
    <section className="flex flex-col px-10 text-white">
      <h1 className="mb-5 text-xl font-bold">Do you need help?</h1>
      <form className="flex flex-col max-w-xs">
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
}
