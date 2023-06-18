import Angular from './images/angular.png';
import Boot from './images/boot.png';
import Cc from './images/c.jpg';
import Web from './images/web.jpg';
import './Course.css';

//RESİMLERİ EKRANA BASMA 
const courseMap = { //courseName key değerlerimiz Angular boot web
    Angular:Angular,
    Boot:Boot,
    Cc:Cc,
    Web:Web,
};

function Course({ courseName }) {

    return(
        <div className='courseDiv'>
        <img className='course'src={courseMap[courseName]} alt=""/>
    </div>
    );
}

export default Course;