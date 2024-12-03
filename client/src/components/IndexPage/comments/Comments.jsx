import "./Comments.css"

export default function Comments() {
  return (
    <div className='comments_container'>
        <div className="comment">
            <div className="comment_photo"></div>
            <div className="comment_container">
                <div className="comment_text">comment</div>
            </div>
        </div>

        <div className="comment">
            <div className="comment_photo"></div>
            <div className="comment_container">
                <div className="comment_text">comment</div>
            </div>
        </div>

        <div className="comment">
            <div className="comment_photo"></div>
            <div className="comment_container">
                <div className="comment_text">Ele é o melhor Barbeiro que eu já passei. Tem um cuidado nocorte e uma atenção completamente diferente dos outros lugares que eu já fui.</div>
            </div>
        </div>
    </div>
  )
}
