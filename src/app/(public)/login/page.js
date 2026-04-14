import "@/app/styles/login/stye.css"

export default function Login() {
  return (
    <main className="all">
      <form className="login-form">
        <h1>Login</h1>
        <div className="form-group">
          <input type="email" id="email" name="email" placeholder="Meuemail@gmail.com" required />
        </div>
        <div className="form-group">
          <input type="password" id="password" name="password" placeholder="minha senha" required />
        </div>
        <button type="submit">Login</button>
      </form>
    </main>
  )
}