function Login() {
  return (
    <div className="container flex md:flex-row flex-col md:w-full w-[450px] h-full md:text-sm text-lg font-medium">
      <div className="image-container">
        <img
          src="https://img.freepik.com/premium-vector/girl-doing-online-shopping-by-smartphone_701961-2321.jpg?w=996"
          className="img"
          alt="Login-img"
        ></img>
      </div>
      <div className="form-container md:w-[400px]  w-[330px] h-[300px] md:ml-[70px] ml-[50px] md:mt-[10px] mt-[150px] text-black font-medium md:text-lg text-lg">
        <h1 className="main-heading text-black  mb-8">Login</h1>
        <div className="form-item mb-4">
          <span className="text-black">Username:</span>
          <input
            className="input-box py-2 px-3 w-full"
            type="text"
            placeholder="Enter username"
          ></input>
        </div>
        <div className="form-item mb-4">
          <span className="text-black">Password:</span>
          <input
            className="input-box py-2 px-3 w-full"
            type="password"
            placeholder="Enter password"
          ></input>
        </div>
        <div className="checkbox-item mb-4">
          <input type="checkbox"></input>
          <span className="text-black">I agree to all terms and conditions</span>
          <a href="/" className="text-black">Terms and conditions</a>
        </div>
        <div className="link-container">
          <a className="links text-black" href="/">Forgot password</a>
          <a className="links text-black" href="/">Don't have an account</a>
        </div>
        <button className="btn mt-4" type="submit">Submit</button>
      </div>
    </div>
  );
}

export default Login;
