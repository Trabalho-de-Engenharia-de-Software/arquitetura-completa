import "./Comments.css"

export default function Comments() {
  return (
    <div className='comments_container'>
        <div className="comment">
            <div className="comment_photo1">
            </div>
            <div className="comment_container">
                <div className="comment_text">O melhor cabeleireiro que já conheci. Ele realmente se importa com os detalhes e faz um trabalho incrível</div>
            </div>
        </div>

        <div className="comment">
            <div className="comment_photo2">
                <img src="" alt="" />
            </div>
            <div className="comment_container">
                <div className="comment_text" id="comment_text">Profissionalismo e talento em um só lugar. Recomendo a todos que procuram um corte de qualidade. Ele transforma um simples corte de cabelo em uma experiência única. Não troco por nada!</div>
            </div>
        </div>

        <div className="comment">
            <div className="comment_photo3">
            <img src="" alt="" />
            </div>
            <div className="comment_container">
                <div className="comment_text">Ele é o melhor Barbeiro que eu já passei. Tem um cuidado nocorte e uma atenção completamente diferente dos outros lugares que eu já fui</div>
            </div>
        </div>
    </div>
  )
}
