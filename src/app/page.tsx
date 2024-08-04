import Container from './pages/container';
import Image from 'next/image';

export default function Home() {
  return (
    <Container>
      <div className="flex gap-0 border rounded-3xl w-full bg-white justify-around shadow-lg">
        <div className="relative flex-1 border rounded-l-md p-4 m-4">
          <Image
            src="/assets/img-page-left.svg"
            alt="Rew Icon"
            layout="fill" // Faz a imagem preencher o contêiner
            objectFit="cover"
            className="rounded-l-md"
          />
        </div>

        <div className="flex-1 border-none rounded-lg bg-white p-4 m-4">
          <div className="flex-1 flex-col bg-white">
            <div className="pt-28">
              <div>
                <div>
                  <Image
                    src="/assets/rewe-logo-icon.svg"
                    alt="Rew Icon"
                    width={90}
                    height={47}
                  />
                </div>
                <div className="pt-3">
                  <h1 className="text-2xl font-medium font-poppins">Hello, there!👋</h1>
                  <p className="text-sm font-light font-poppins pt-2">
                    Enter the information you entered while registering.
                  </p>
                </div>
              </div>

              <div>
                <form className="flex flex-col gap-10 pt-10">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="font-poppins font-medium text-sm">
                      Email
                    </label>
                    <input
                      className="border border-1 border-zinc-300 rounded-sm shadow-lg py-1 px-2 max-w-xs"
                      type="email"
                      placeholder="reuli@rounded.com"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="password" className="font-poppins font-medium text-sm">
                      Password
                    </label>
                    <input
                      className="border border-1 border-zinc-300 rounded-sm shadow-lg py-1 px-2 max-w-xs"
                      type="password"
                      placeholder="********"
                    />
                    <a
                      href=""
                      className="flex justify-end max-w-xs text-blue-500 text-xs pt-2 font-poppins"
                    >
                      Forgot Password?
                    </a>
                  </div>
                  <button className="flex justify-center py-2 max-h-14 border rounded-lg text-white font-inter max-w-xs bg-gradient-custom">
                    Login
                  </button>
                  <div className="h-30"></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
