import CloseFillIcon from "remixicon-react/CloseFillIcon";

export function ContactForm() {
  return (
    <section className="flex flex-col gap-4 md:gap-0 md:w-3/4 lg:1/2 ">
      <header
        id="content-header"
        className="hidden md:flex  md:flex-row md:gap-3 md:border-b-1 
                 md:border-lines md:pl-2  md:w-full md:items-center "
      >
        <span className="text-secondary-white md:py-2"> \ {"contacts"}</span>
        <div
          className="hidden md:inline cursor-pointer ml-6 pr-4 border-r-1 
                        h-full border-lines md:py-2"
        >
          <CloseFillIcon size={20} className="" />
        </div>
      </header>
      <div className="md:flex md:flex-col md:items-center md:justify-center md:h-full ">
        <div className="">
          <form className="text-sm leading-7 md:px-4 flex flex-col gap-6">
            <div id="name_wrapper" className="flex flex-col w-full gap-3">
              <label htmlFor="name">_name:</label>
              <input
                id="name"
                name="name"
                className="border-1 px-3 border-lines rounded-lg h-10 
                         bg-primary-darkMarine"
              />
            </div>
            <div id="email_wrapper" className="flex flex-col w-full gap-3">
              <label htmlFor="email">_email:</label>
              <input
                id="email"
                name="email"
                className="border-1 px-3 border-lines rounded-lg h-10 
                         bg-primary-darkMarine"
              />
            </div>
            <div id="message_wrapper" className="flex flex-col w-full gap-3">
              <label htmlFor="message">_message:</label>
              <textarea
                id="message"
                name="message"
                className=" border-1 px-3 border-lines rounded-lg h-36 
                         bg-primary-darkMarine overflow-scroll scrollbar-thin"
              />
            </div>
            <div>
              <button
                type="submit"
                disabled
                className="px-3 py-[5px] bg-lines rounded-md text-secondary-white
                           disabled:text-secondary-white/40"
              >
                submit_message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
