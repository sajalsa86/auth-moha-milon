import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

Link;
const Longin = () => {
  const { longinUser, signInWithGoogle } = useContext(AuthContext);
  //sign in with google
  const handleSignWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  //to go home page after longin
  const navigate = useNavigate();

  const handleLongin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    //longin
    longinUser(email, password)
      .then((result) => {
        console.log(result.user);
        //reset data
        e.target.reset();
        //to go home page after longin
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="w-1/3 h-svh p-5 rounded-lg mx-auto grid justify-items-center items-center">
      <div className="w-full mx-auto">
        <h2 className="mb-3 text-center text-2xl text-fuchsia-950 font-bold">
          Longin Now
        </h2>
        <form className="" onSubmit={handleLongin}>
          <div className="form-control">
            <label htmlFor="email" className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              className="w-full input input-bordered py-2 pl-2"
              type="email"
              name="email"
              placeholder="Your Email"
              required
              id="email"
            />
          </div>
          <div className="form-control mt-2">
            <label htmlFor="password" className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              className="w-full input input-bordered py-2 pl-2"
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </div>
          <input
            className="btn btn-success w-full mt-4"
            type="submit"
            value="Longin"
          />
        </form>
        <p>
          <button onClick={handleSignWithGoogle} className="btn btn-ghost">
            GOOGLE
          </button>
        </p>
        <p>
          New Here? Please
          <Link to={"/register"}>
            <button className="btn btn-link">Register</button>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Longin;
