import React from "react";
import { Button } from "../../components/ui/button";
import { BiShow, BiSolidHide } from "react-icons/bi";
import { Link } from "react-router-dom";
import { loginUser } from "../../services/loginUser";
function Login() {
  const [email, setEmail] = React.useState("");
  const [passWord, setPassWorrd] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!email.trim() || !passWord.trim()) {
      setMessage("Veillez remplir tous les champs.");
      return;
    }

    try {
      const resp = await loginUser(email, passWord);

      if (!resp.token) {
        throw new Error(resp.message || "Erreur de connexion !");
      }
      setMessage("Connexion reussie !");

      // stokage token dans localStorage
      localStorage.setItem("auth Token", resp.data.token);
      console.log("Token", resp.data.token);
    } catch (err) {
      if (err.message) {
        setMessage("Veillez vérifier votre email ou mot de passe.");
      } else {
        setMessage("Erreur Serveur");
      }
    }
  };

  function togglePasswordVisibility() {
    setShowPassword((prev) => !prev);
  }

  return (
    <section className=" w-full h-auto flex items-center justify-center flex-col p-16 mt-12">
      <div className=" w-full max-w-md h-auto  rounded-2xl p-8 bg-secondary/15  flex items-center justify-center flex-col ">
        <h1 className="text-4xl font-semibold text-primary">Sing In</h1>
        <p className="text-center text-sm px-8  mt-4 mb-2">
          Connectez-vous pour accéder à votre espace personnel.
        </p>

        <form
          onSubmit={handleLogin}
          className="text-center w-full h-auto gap-4 flex items-center justify-center flex-col "
        >
          <div className="text-start w-full">
            {" "}
            <label htmlFor="email" className="font-bold">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 py-2  mt-2 border-2 border-secondary rounded-xl focus:outline-none focus:ring-0 bg-transparent"
            />
          </div>
          <div className="w-full text-start relative">
            <label
              htmlFor="password"
              className="
            font-bold"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your Password"
                value={passWord}
                onChange={(e) => setPassWorrd(e.target.value)}
                className="w-full p-4 py-2 mt-2 border-2 border-secondary rounded-xl focus:outline-none focus:ring-0 bg-transparent "
              />

              <button
                onClick={() => togglePasswordVisibility()}
                className="ml-2 text-xl text-secondary absolute right-5 top-[60%] transform -translate-y-1/2"
              >
                {showPassword ? <BiShow /> : <BiSolidHide />}
              </button>
            </div>
          </div>
          {/* messages */}
          {message && (
            <p
              className={`${
                message === "Connexion reussie !"
                  ? "text-green-500"
                  : "text-red-500"
              } mt-4`}
            >
              {message}
            </p>
          )}
          <Button
            type="submit"
            variant="default"
            size="lg"
            className="w-[80%] rounded-2xl mt-4 "
          >
            Se Connecter
          </Button>
        </form>

        <Link to="/signup" className="w-[80%]">
          <Button
            type="submit"
            variant="default"
            size="lg"
            className="w-full rounded-2xl my-4 bg-transparent shadow-none border-2 hover:border-none border-primary text-primary hover:text-background hover:bg-primary"
          >
            Créer un compte
          </Button>
        </Link>
      </div>
    </section>
  );
}

export default Login;
