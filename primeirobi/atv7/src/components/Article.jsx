export default function Article({ post }) {
  return (
    <article className="post-content">
      <h2>{post.titulo}</h2>
      <p><small>Por: {post.autor} em {post.data}</small></p>
      <div className="body">
        {post.conteudo}
      </div>
    </article>
  );
}