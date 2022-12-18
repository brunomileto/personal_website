import GithubFillIcon from 'remixicon-react/GithubFillIcon';
import LinkedinFillIcon from 'remixicon-react/LinkedinFillIcon';

export function Footer() {
  return (
    <footer className="h-[55px] flex border-t-1 items-center rounded-b-lg border-lines">
      <div className="flex-1 ml-4 my-4">
        <span>find me in: </span>
      </div>
      <div className="flex items-center h-full">
        <a
          target="_blank"
          href="https://linkedin.com/in/bruno-mileto"
          className="border-l-1 border-lines h-full flex justify-center 
                   hover:text-secondary-white hover:transition-colors 
                     hover:delay-150 items-center px-3 text-secondary-sky/50 "
        >
          <LinkedinFillIcon />
        </a>
        <a
          target="_blank"
          href="https://github.com/brunomileto"
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
