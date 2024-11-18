import FormSignIn from '../components/SignInPage/Form/FormSignIn'
import './CSS/SignInPage.css'


export default function SignInPage() {
  return (
    <div>

      <div className='page_login_container'>

        <div className='arrow_container'><a href="/"><img src="./img/Black_Arrow_Icon.png" alt="Seta preta com a ponta indicando para o lado esquerdo, com a funcionalidade de voltar a index" /></a></div>

               <div className='imagem_login'>
                 <div className='Sign_In_logo_login'>
                   <img src="./img/Logo.png" alt="Logo Barbearia" />
                 </div>
                </div>

            <FormSignIn/>


            
          </div>

          
      </div>

  )
}
