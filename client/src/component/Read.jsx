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
  <div className="flex flex-col items-center">
    {article.map((_article, index) => (
    <div key={index} className="max-w-sm w-full px-4 py-3 bg-white shadow-md rounded-md my-8">
        <div className="flex justify-between items-center">
            <span className="text-sm font-light text-red-300">익명</span>
            <div>
            <Link to={`/update/${_article.id}`} className="text-sm font-light mr-3 text-blue-500">수정</Link>
            <button className="text-sm font-light text-red-600" 
            type="button"
            onClick={() => {
            deleteArticle(_article.id);
            }}>삭제
            </button>
            </div>
        </div>

        <div>
            <h1 className="text-lg font-semibold text-gray-800 mt-2">{_article.title}</h1>
            <p className="text-gray-600 text-sm mt-2">{_article.content}</p>
        </div>

        <div>
            <div className="flex items-center justify-center mt-4">
                <a className="mr-2 text-gray-800 hover:text-gray-700 cursor-pointer">
                    <svg className="h-5 w-5 fill-current" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
                        <path d='M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z'/>
                    </svg>
                </a>

                <a className="mr-2 text-gray-800 hover:text-gray-700 cursor-pointer">
                    <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.8283 12L16.2426 13.4142L19.071 10.5858C20.6331 9.02365 20.6331 6.49099 19.071 4.9289C17.5089 3.3668 14.9762 3.3668 13.4141 4.9289L10.5857 7.75732L11.9999 9.17154L14.8283 6.34311C15.6094 5.56206 16.8757 5.56206 17.6568 6.34311C18.4378 7.12416 18.4378 8.39049 17.6568 9.17154L14.8283 12Z"/>
                        <path d="M12 14.8285L13.4142 16.2427L10.5858 19.0711C9.02365 20.6332 6.49099 20.6332 4.9289 19.0711C3.3668 17.509 3.3668 14.9764 4.9289 13.4143L7.75732 10.5858L9.17154 12L6.34311 14.8285C5.56206 15.6095 5.56206 16.8758 6.34311 17.6569C7.12416 18.4379 8.39049 18.4379 9.17154 17.6569L12 14.8285Z"/>
                        <path d="M14.8284 10.5857C15.2189 10.1952 15.2189 9.56199 14.8284 9.17147C14.4379 8.78094 13.8047 8.78094 13.4142 9.17147L9.17154 13.4141C8.78101 13.8046 8.78101 14.4378 9.17154 14.8283C9.56206 15.2188 10.1952 15.2188 10.5857 14.8283L14.8284 10.5857Z"/>
                    </svg>
                </a>
            </div>
        </div>
    </div>
    ))}

    {/* <div key={index}>
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
   ))} */}
  </div>
 );
};

export default Read;
