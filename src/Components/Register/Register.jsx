import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password);
    //create user
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        //reset data
        e.target.reset();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="w-1/3 h-svh p-5 rounded-lg mx-auto grid justify-items-center items-center">
      <div className="w-full mx-auto">
        <h2 className="mb-3 text-center text-2xl text-fuchsia-950 font-bold">
          Register Now
        </h2>
        <form className="" onSubmit={handleRegister}>
          <div className="form-control">
            <label htmlFor="name" className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              className="w-full input input-bordered py-2 pl-2"
              type="text"
              name="name"
              placeholder="Your Name"
              required
              id="name"
            />
          </div>
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
            value="Register"
          />
        </form>
        <p>
          Already Have an Account? Please
          <Link to={"/longin"}>
            <button className="btn btn-link">Longin</button>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
