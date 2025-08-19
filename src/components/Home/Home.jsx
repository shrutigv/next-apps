import { useEffect, useState } from 'react'
import { Menu } from "antd";
import styles from './Home.module.css' // Import Ant Design styles

const Home = () => {
    const [id, setId] = useState(123); // Default student ID
  useEffect(() => {
    setId(window.localStorage.studentid); // student id fetched after login
  }, []);
   const [current, setCurrent] = useState('District');
   const items = [
  {
    label: 'Careers',
    key: 'careers'
  },
      {
    label: 'Elementary Schools',
    key: 'elementary'
  },
    {
    label: 'Our District',
    key: 'district'
  },
  {
    label: 'Board of Trustees',
    key: 'board',
  },
  {    label: 'Transportation',
    key: 'transportation', 
  },
  {label: 'student',
    key: 'student'
  },
  {
    label: 'Calender',
    key: 'events',
  }]
  useEffect(() => {
    if(current === 'transportation') {
      window.location.href = 'https://webquery-katy-tx.etstack.io/#/home';
    } else if(current === 'events') {
      window.location.href = 'https://www.katyisd.org/our-district/our-calendar';
    }
    
  }, [current]);
  return (<div className={styles["home-container"]}>
          <h2>Katy Independent School District</h2> 
          <a href={`/student/${id}`}>Student details</a>
    <Menu onClick={(e) => setCurrent(e.key)} selectedKeys={[current]} mode="horizontal" items={items} />
    <img src="https://resources.finalsite.net/images/f_auto,q_auto/v1751384838/katyisdorg/lhmpbgpxfv4aersdiqt9/New_Student_Pre-Registration.png" className={styles["logo"]} alt="Cleveland ISD Logo" />
  </div>
  )
}

export default Home