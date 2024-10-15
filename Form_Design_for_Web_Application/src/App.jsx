function App() {
  return (
    <>
      <div className="h-screen grid bg-slate-100">
        <div className="m-auto">
          <form className="max-w-[1200px] max-h-[1200px] bg-white border-2 border-white-600 rounded-2xl shadow-emerald-400">
            <h1 className="text-center mt-10  text-2xl font-bold">Sign In</h1>
            <div className="max-w-[1200px] max-h-[1200px] flex flex-col gap-5 p-10 my-5 mx-10">
              <div className=" flex justify-center items-center flex-col ">
                <div className="flex flex-col">
                  <label htmlFor="" className="font-bold">
                    Email/Username :{" "}
                  </label>
                  <input
                    type="text"
                    className="bg-white-600 rounded-md px-3 py-1 text-md font-bold hover:border-2 border-white-600"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="" className="font-bold">
                    Password :{" "}
                  </label>
                  <input
                    type="Password"
                    className="bg-white-600 rounded-md px-3 py-1 text-md  font-bold hover:border-2 border-white-600  "
                  />
                </div>
              </div>

              <div>
                <label htmlFor="" className="font-bold">
                  Remember Me
                </label>
                <input type="checkbox" className="ml-1 " />
              </div>

              <div className=" flex justify-center items-center">
                <button className="bg-blue-300 py-1 px-4 rounded-md border-2 border-blue-400">
                  Sign In
                </button>
              </div>

              <div className="font-bold text-blue-500">Forget Password</div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
