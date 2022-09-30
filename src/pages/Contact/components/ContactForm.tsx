import CloseFillIcon from 'remixicon-react/CloseFillIcon';

interface Props {
  name: string;
  email: string;
  message: string;
  handleFormDataChange: (name: string, email: string, message: string) => void;
}

export function ContactForm({
  email,
  message,
  name,
  handleFormDataChange,
}: Props) {
  function handleNameChange(newName: string) {
    handleFormDataChange(newName, email, message);
  }
  function handleEmailChange(newEmail: string) {
    handleFormDataChange(name, newEmail, message);
  }
  function handleMessageChange(newMessage: string) {
    handleFormDataChange(name, email, newMessage);
  }
  return (
    <section className="flex flex-col gap-2 md:gap-0 md:w-3/4 lg:w-4/5 pb-6">
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
      <div className="md:flex md:flex-col md:items-center md:justify-center md:h-full  ">
        <div className="md:w-full md:h-full md:flex md:justify-center md:items-center">
          <form className="text-sm leading-7 md:px-4 flex flex-col gap-6 md:w-full md:max-w-md">
            <div id="name_wrapper" className="flex flex-col w-full gap-3">
              <label htmlFor="name">_name:</label>
              <input
                id="name"
                value={name}
                onChange={(e) =>
                  handleFormDataChange(e.target.value, email, message)
                }
                name="name"
                className="border-1 px-3 border-lines rounded-lg h-10 
                         bg-primary-darkMarine"
              />
            </div>
            <div id="email_wrapper" className="flex flex-col w-full gap-3">
              <label htmlFor="email">_email:</label>
              <input
                id="email"
                value={email}
                onChange={(e) =>
                  handleFormDataChange(name, e.target.value, message)
                }
                name="email"
                className="border-1 px-3 border-lines rounded-lg h-10 
                         bg-primary-darkMarine"
              />
            </div>
            <div id="message_wrapper" className="flex flex-col w-full gap-3">
              <label htmlFor="message">_message:</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) =>
                  handleFormDataChange(name, email, e.target.value)
                }
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
