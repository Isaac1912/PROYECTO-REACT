import React, { useState, ChangeEvent } from "react";
import CommentSection from "./CommentSection";
import "./index.css";

// Definimos una interfaz para los artículos
interface Article {
  id: number;
  title: string;
  imgSrc: string;
  link: string;
  paragraph: string;
  additionalImages: string[];
}

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [articles, setArticles] = useState<Article[]>([
    {
      id: 1,
      title: "Dibujos Digitales",
      imgSrc:
        "https://i.pinimg.com/564x/62/e2/03/62e203b3026dbd14f6a881f642395c1f.jpg",
      link: "ilustracion.html",
      paragraph: "",
      additionalImages: [],
    },
    {
      id: 2,
      title: "Survival Horror",
      imgSrc:
        "https://i.pinimg.com/564x/b3/04/dc/b304dc065691fe0badda5718b972f615.jpg",
      link: "cocina.html",
      paragraph: "",
      additionalImages: [],
    },
  ]);
  const [newArticle, setNewArticle] = useState<Partial<Article>>({
    title: "",
    imgSrc: "",
    link: "",
    paragraph: "",
    additionalImages: [],
  });
  const [editArticle, setEditArticle] = useState<Partial<Article> | null>(null);
  const [newImage, setNewImage] = useState<string>("");

  const handleLoginClick = () => {
    window.location.href = "login.html";
  };

  const handleRegisterClick = () => {
    window.location.href = "register.html";
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
    window.location.href = "home.html";
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewArticle({ ...newArticle, [name]: value });
  };
  const handleAddArticle = () => {
    if (
      newArticle.title &&
      newArticle.imgSrc &&
      newArticle.link &&
      newArticle.paragraph
    ) {
      setArticles([
        ...articles,
        { ...newArticle, id: articles.length + 1 } as Article,
      ]);
      setNewArticle({
        title: "",
        imgSrc: "",
        link: "",
        paragraph: "",
        additionalImages: [],
      });
    } else {
      alert("Todos los campos son obligatorios");
    }
  };

  const handleEditClick = (article: Article) => {
    setEditArticle(article);
  };
  const handleUpdateArticle = () => {
    if (editArticle && editArticle.id) {
      setArticles(
        articles.map((article) =>
          article.id === editArticle.id ? (editArticle as Article) : article
        )
      );
      setEditArticle(null);
    }
  };

  const handleEditInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEditArticle({ ...editArticle, [name]: value });
  };

  const handleEditAddImage = () => {
    if (newImage && editArticle) {
      setEditArticle({
        ...editArticle,
        additionalImages: [...(editArticle.additionalImages || []), newImage],
      });
      setNewImage("");
    }
  };

  return (
    <div className="content-container">
      {/* Contenido principal del blog personal */}
      <div className="blog-container">
        <header className="blog-top">
          <h1>Blog Personal</h1>
          <div className="search-bar">
            <input type="text" placeholder="Buscar" />
            <button>Buscar</button>
          </div>
          <div className="login-section">
            {isLoggedIn ? (
              <button onClick={handleLogoutClick}>Cerrar Sesión</button>
            ) : (
              <>
                <button onClick={handleLoginClick}>Iniciar Sesión</button>
                <button onClick={handleRegisterClick}>Registrarse</button>
              </>
            )}
          </div>
        </header>
        <section className="ilustracion-section blog-bottom">
          {articles.map((article) => (
            <article
              key={article.id}
              onClick={() => (window.location.href = article.link)}
            >
              <h3>{article.title}</h3>
              <img src={article.imgSrc} alt={article.title} />
              <p>{article.paragraph}</p>
              {article.additionalImages.map((imgSrc, index) => (
                <img key={index} src={imgSrc} alt={`Additional ${index + 1}`} />
              ))}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleEditClick(article);
                }}
              >
                Editar
              </button>
              {/*crea un boton para elimnar el articulo*/}
            </article>
          ))}
        </section>
        <div className="add-article">
          <h2>Crea tu articulo</h2>
          <input
            type="text"
            name="title"
            placeholder="Título"
            value={newArticle.title || ""}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="imgSrc"
            placeholder="URL de la Imagen"
            value={newArticle.imgSrc || ""}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="link"
            placeholder="Enlace"
            value={newArticle.link || ""}
            onChange={handleInputChange}
          />
          <textarea
            name="paragraph"
            placeholder="Párrafo"
            value={newArticle.paragraph || ""}
            onChange={handleInputChange}
          ></textarea>
          <input
            type="text"
            name="additionalImage"
            placeholder="URL de la Imagen Adicional"
            value={newImage}
            onChange={(e) => setNewImage(e.target.value)}
          />
          <button onClick={handleAddArticle}>Añadir Artículo</button>
        </div>
        {editArticle && (
          <div className="edit-article">
            <h2>Editar Artículo</h2>
            <input
              type="text"
              name="title"
              placeholder="Título"
              value={editArticle.title || ""}
              onChange={handleEditInputChange}
            />
            <input
              type="text"
              name="imgSrc"
              placeholder="URL de la Imagen"
              value={editArticle.imgSrc || ""}
              onChange={handleEditInputChange}
            />
            <input
              type="text"
              name="link"
              placeholder="Enlace"
              value={editArticle.link || ""}
              onChange={handleEditInputChange}
            />
            <textarea
              name="paragraph"
              placeholder="Párrafo"
              value={editArticle.paragraph || ""}
              onChange={handleEditInputChange}
            ></textarea>
            <input
              type="text"
              name="additionalImage"
              placeholder="URL de la Imagen Adicional"
              value={newImage}
              onChange={(e) => setNewImage(e.target.value)}
            />
            <button onClick={handleEditAddImage}>Añadir Imagen</button>
            <button onClick={handleUpdateArticle}>Actualizar Artículo</button>
          </div>
        )}
      </div>
      <CommentSection />
    </div>
  );
};

export default App;
