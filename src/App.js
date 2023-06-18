import './App.css';
import Course from './Course';
import {useState} from 'react';

function getRandomCourse(){
  const courseArray = ['Angular','Boot','Cc', 'Web'];
 return courseArray[Math.floor(Math.random()*courseArray.length)];
}

function App() {
  const [courses, setCourses] = useState([]);
  const handClick = () =>{
    setCourses([...courses, getRandomCourse()]);

  };
  const courseList = courses.map((course,index) =>{
    return <Course key={index} courseName={course}/>;
});
  return (
    <div className="App">
      <button className='appButton' onClick={handClick}>Kurs Ekle</button>
      <div className='courseList'>
        {courseList}
      </div>
        
    </div>
  );
}

export default App;
