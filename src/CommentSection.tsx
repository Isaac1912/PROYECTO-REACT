import React, { useState } from 'react';
import './BlogPersonal'
import  './Ilustracion'

interface Comment {
  id: number;
  text: string;
}

const CommentSection: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<string>('');
  const [editCommentId, setEditCommentId] = useState<number | null>(null);
  const [editCommentText, setEditCommentText] = useState<string>('');

  const addComment = () => {
    if (newComment.trim() === '') return;
    setComments([...comments, { id: Date.now(), text: newComment }]);
    setNewComment('');
  };

  const deleteComment = (id: number) => {
    setComments(comments.filter(comment => comment.id !== id));
  };

  const editComment = (id: number, text: string) => {
    setEditCommentId(id);
    setEditCommentText(text);
  };

  const saveEditComment = (id: number) => {
    setComments(comments.map(comment => comment.id === id ? { ...comment, text: editCommentText } : comment));
    setEditCommentId(null);
    setEditCommentText('');
  };

  return (
    <div className="comment-section">
      <h2>Comentarios</h2>
      <textarea
        value={newComment}
        onChange={e => setNewComment(e.target.value)}
        placeholder="Escribe un comentario"
      ></textarea>
      <button onClick={addComment}>Añadir Comentario</button>
      <div className="comments-list">
        {comments.map(comment => (
          <div key={comment.id} className="comment">
            {editCommentId === comment.id ? (
              <>
                <textarea
                  value={editCommentText}
                  onChange={e => setEditCommentText(e.target.value)}
                ></textarea>
                <button onClick={() => saveEditComment(comment.id)}>Guardar</button>
              </>
            ) : (
              <>
                <p>{comment.text}</p>
                <button onClick={() => editComment(comment.id, comment.text)}>Editar</button>
                <button onClick={() => deleteComment(comment.id)}>Eliminar</button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
