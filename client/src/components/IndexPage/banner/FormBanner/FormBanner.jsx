import "./FormBanner.css"

export default function FormBanner() {
  return (
    <div className="form_banner_container">
        <form action="">
            <input id="name_banner" type="text" name="name-banner" placeholder="Digite seu nome"/>
            <input id="email_banner" type="email" name="email-banner" placeholder="Digite seu e-mail"/>
            <button>Marcar</button>
        </form>
    </div>
  )
}
