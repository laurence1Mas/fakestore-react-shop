import React from "react";
import { Button } from "../../components/ui/button";
import { BiShow, BiSolidHide } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../services/loginUser";

function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);

  const navigate = useNavigate(); // pour redirection après login

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!email.trim() || !password.trim()) {
      setMessage("Veuillez remplir tous les champs.");
      return;
    }

    try {
      const resp = await loginUser(email, password);

      if (!resp.token) {
        throw new Error("Email ou mot de passe incorrect !");
      }

      // Stockage token dans localStorage
      localStorage.setItem("authToken", resp.token);
      setMessage("Connexion réussie !");

      console.log("Token", resp.token);

      // Redirection vers dashboard ou home
      navigate("/home");
    } catch (err) {
      // personnalisation selon le type d'erreur
      if (err.message.includes("username or password")) {
        setMessage("Email ou mot de passe incorrect. Veuillez réessayer.");
      } else if (err.message.includes("Failed to fetch")) {
        setMessage(
          "Impossible de se connecter au serveur. Vérifiez votre connexion.",
        );
      } else {
        setMessage("Erreur inattendue. Veuillez réessayer plus tard.");
      }
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <section className="w-full h-auto flex items-center justify-center flex-col p-16 mt-12">
      <div className="w-full max-w-md h-auto rounded-2xl p-8 bg-secondary/15 flex items-center justify-center flex-col">
        <h1 className="text-4xl font-semibold text-primary">Login</h1>
        <p className="text-center text-sm px-8 mt-4 mb-2">
          Connectez-vous pour accéder à votre espace personnel.
        </p>

        <form
          onSubmit={handleLogin}
          className="text-center w-full h-auto gap-4 flex items-center justify-center flex-col"
        >
          <div className="text-start w-full">
            <label htmlFor="email" className="font-bold">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 py-2 mt-2 border-2 border-secondary rounded-xl focus:outline-none focus:ring-0 bg-transparent"
            />
          </div>

          <div className="w-full text-start relative">
            <label htmlFor="password" className="font-bold">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-4 py-2 mt-2 border-2 border-secondary rounded-xl focus:outline-none focus:ring-0 bg-transparent"
              />

              <button
                type="button" // ✅ important pour ne pas soumettre
                onClick={togglePasswordVisibility}
                className="ml-2 text-xl text-secondary absolute right-5 top-[60%] transform -translate-y-1/2"
              >
                {showPassword ? <BiShow /> : <BiSolidHide />}
              </button>
            </div>
          </div>

          {message && (
            <p
              className={`${
                message === "Connexion réussie !"
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
            className="w-[80%] rounded-2xl mt-4"
          >
            Se Connecter
          </Button>
        </form>

        <Link to="/signin" className="w-[80%]">
          <Button
            type="button"
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
