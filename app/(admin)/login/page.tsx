import { login } from "./actions";

const LoginPage = () => {
  return (
    <section className="login w-full h-full p-6 md:p-14 overflow-y-auto bg-white sm:bg-background">
      <div className="min-h-full flex items-center content-250 sm:content-300 justify-center">
        <div className="w-full bg-white sm:p-6 rounded-2xl sm:shadow-md flex flex-col gap-2 md:gap-4 max-w-[1200px]">
          <form
            action={login}
            className="w-full max-w-[200px] mx-auto flex flex-col justify-items-end gap-1"
          >
            <div className="text-3xl font-bold mb-3">Login</div>
            <input
              className="w-full border-1 rounded-sm py-1 px-2 mb-2"
              type="text"
              name="username"
              placeholder="Username"
            />
            <input
              className="w-full border-1 rounded-sm py-1 px-2 mb-3"
              type="password"
              name="password"
              placeholder="Password"
            />
            <button
              className="w-full max-w-[100px] self-end border-1 border-blue-500 rounded-sm py-1 px-2 bg-blue-500 text-white"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
