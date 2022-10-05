import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Read = () => {
 const [test, setTest] = useState([]);

 useEffect(() => {
  const doTest = async () => {
   const testData = await axios({
    url: `http://localhost:5000/read`,
    method: "GET",
   });
   setTest(testData.data);
  };
  doTest();
 }, []);

 return (
  <>
   {test.map((_test, index) => (
    <div key={index}>
     <div>제목 : {_test.title}</div>
     <div>내용 : {_test.content}</div>
     <Link to={`/update/${_test.id}`}>수정</Link>
    </div>
   ))}
  </>
 );
};

export default Read;
