import TwitterFillIcon from "remixicon-react/TwitterFillIcon";
import FacebookFillIcon from "remixicon-react/FacebookFillIcon";
import GithubFillIcon from "remixicon-react/GithubFillIcon";

export function Footer() {
  return (
    <footer className="flex border-t-1 items-center rounded-b-lg border-lines">
      <div className="flex-1 ml-4 my-4">
        <span>find me in: </span>
      </div>
      <div className="flex items-center h-full">
        <a
          href="#"
          className="border-l-1 border-lines h-full flex justify-center 
                   hover:text-secondary-white hover:transition-colors 
                     hover:delay-150 items-center px-3 text-secondary-sky/50 "
        >
          <TwitterFillIcon />
        </a>
        <a
          href="#"
          className="border-l-1 border-lines h-full flex justify-center 
                   hover:text-secondary-white hover:transition-colors 
                     hover:delay-150 items-center px-3 text-secondary-sky/50 "
        >
          <FacebookFillIcon />
        </a>
        <a
          href="#"
          className="border-l-1 border-lines h-full flex justify-center 
                   hover:text-secondary-white hover:transition-colors 
                     hover:delay-150 items-center px-3 text-secondary-sky/50 "
        >
          <GithubFillIcon />
        </a>
      </div>
    </footer>
  );
}
