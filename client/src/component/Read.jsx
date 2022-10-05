import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Read = () => {
 const [activity, setActivity] = useState("");
 const [article, setArticle] = useState([]);

 useEffect(() => {
  const getArticle = async () => {
   const articleData = await axios({
    url: `http://localhost:5000/read`,
    method: "GET",
   });
   setArticle(articleData.data);
  };
  getArticle();
 }, [activity]);

 // 게시글 삭제를 진행함
 const deleteArticle = async (id) => {
  const doDelete = await axios({
   url: `http://localhost:5000/delete`,
   method: "DELETE",
   data: {
    id,
   },
  });
  if (doDelete.data === "success") {
   setActivity("activity" + id);
  } else {
   alert("통신에러!");
  }
 };

 return (
  <>
   {article.map((_article, index) => (
    <div key={index}>
     <div>제목 : {_article.title}</div>
     <div>내용 : {_article.content}</div>
     <div>
      <Link to={`/update/${_article.id}`}>수정</Link>
      <button
       type="button"
       onClick={() => {
        deleteArticle(_article.id);
       }}
      >
       삭제
      </button>
     </div>
    </div>
   ))}
  </>
 );
};

export default Read;
