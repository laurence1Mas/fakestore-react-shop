import React from "react";
import { Button } from "../../components/ui/button";
import { BiShow, BiSolidHide } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../services/registerUser"; // on va créer ce service

function SignIn() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setMessage("");
    setName("");
    setEmail("");
    setPassword("");

    if (!name.trim() || !email.trim() || !password.trim()) {
      setMessage("Veuillez remplir tous les champs.");
      return;
    }

    try {
      const resp = await registerUser(name, email, password);

      if (resp.error) {
        throw new Error(resp.message || "Erreur lors de l'inscription !");
      }

      setMessage("Compte créé avec succès !");

      // Redirection vers login après création
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (err) {
      if (err.message.includes("email")) {
        setMessage("Cet email est déjà utilisé.");
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
        <h1 className="text-4xl font-semibold text-primary">Sign Up</h1>
        <p className="text-center text-sm px-8 mt-4 mb-2">
          Créez votre compte pour accéder à votre espace personnel.
        </p>

        <form
          onSubmit={handleSignUp}
          className="text-center w-full h-auto gap-4 flex items-center justify-center flex-col"
        >
          <div className="text-start w-full">
            <label htmlFor="name" className="font-bold">
              Nom
            </label>
            <input
              type="text"
              placeholder="Votre nom"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-4 py-2 mt-2 border-2 border-secondary rounded-xl focus:outline-none focus:ring-0 bg-transparent"
            />
          </div>

          <div className="text-start w-full">
            <label htmlFor="email" className="font-bold">
              Email
            </label>
            <input
              type="email"
              placeholder="Votre email"
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
                placeholder="Votre mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-4 py-2 mt-2 border-2 border-secondary rounded-xl focus:outline-none focus:ring-0 bg-transparent"
              />

              <button
                type="button"
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
                message === "Compte créé avec succès !"
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
            Créer un compte
          </Button>
        </form>

        <Link
          to="/login"
          className="text-end text-xs w-[80%] mt-5 hover:underline"
        >
          <p>Se connecter</p>
        </Link>
      </div>
    </section>
  );
}

export default SignIn;
