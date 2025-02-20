export function HeaderMenu() {
  return (
    <nav className="sticky top-2 z-50 w-full pointer-events-none">
      <div className="container max-w-[500px] mx-auto pointer-events-auto">
        <div className="h-16 bg-background/70 backdrop-blur-md shadow-lg rounded-full border-[2px]">
          <div className="flex justify-center gap-6 flex-row h-full items-center">
            <a href="/" className="flex items-center space-x-2">
              <span className="font-heading text-xl font-bold">Madhukar Kumar</span>
            </a>
            <div className="hidden md:flex items-center justify-center space-x-6">
              <a
                href="/blogs"
                className="text-sm font-medium transition-colors hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                Essays
              </a>
              <a
                href="https://github.com/madhukarkumar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium transition-colors hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                Work
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
