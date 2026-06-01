function Header() {
  return (
    <>
      <div className="bg-primary-subtle p-2 d-flex justify-content-between align-item-center">
        <span className="text-primary fs-4 fw-bold">My Company</span>
        <div className="d-flex gap-4">
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/Product"}>Product</Link>
          <Link to={"/ContactUs"}>ContactUs</Link>

          <span>Home</span>
          <span>About</span>
          <span>Contact Us</span>
          <span>Product</span>
        </div>
        <div className="d-flex gap-3">
          <Link to={"/Login"}>
            <button className="btn btn-outline-primary">Login</button>
          </Link>
          <Link to={"/Register"}>
            <button className="btn btn-outline-primary">Register</button>
          </Link>
        </div>
      </div>
    </>
  );
}
export default Header;
