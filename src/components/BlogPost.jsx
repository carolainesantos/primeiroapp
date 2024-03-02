import { useEffect, useState } from "react";

export default function BlogPosts() {
  // posts será um array de objetos
  // com isto poderei usar map como Array.map();
  // o useState aqui inicia a variável como um array
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const resposta = await fetch(
          "https://jsonplaceholder.typicode.com/posts",

          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );
        const data = await resposta.json();
        console.log(data);
        setPosts(data);
      } catch (e) {
        console.error(e);
      }
    };
  }, []); // Add an empty dependency array

  return (
    <div>
      <h1>Lista de Posts</h1>
      {posts.map((post) => (
        <div>Novo Post</div>
      ))}
    </div>
  );
}
