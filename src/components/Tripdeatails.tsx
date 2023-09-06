import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import '../TripD.css'
interface TripD {
	id: string;
	name: string;
	destination: string;
	startDate: string;
	endDate: string;
	image: string;
  price:number
  activities:string[]
  description:string
  
}
export default function Tripdeatails() {
  const { id } = useParams();
  
  //useState
  const [detail, setDetail] = useState<TripD | null>(null);
  //useEffect
  useEffect(() => {
    console.log("now fetching");
      fetch(`http://localhost:3000/api/trips/${id}`)
          .then((json) => json.json())
          .then((data) => {
              setDetail(data)
              console.log(detail);
              
          });
  }, []);

  return (
    <>
     <button id="header"><Link to="/Home/trips">Home page</Link></button>

    <div id="tripCard" style={{backgroundColor:'turquoise'}}>
        {
            <>
                <h1>{detail?.name}</h1>
                <h2>{detail?.destination}</h2>
                <h3>Start Date</h3>
                <h4>{detail?.startDate}</h4>
                <h3>End Date</h3>
                <h4>{detail?.endDate}</h4>
                <h5>{detail?.description}</h5>
                <h4>Price</h4>
                <h5>{detail?.price}</h5>
                <img src={detail?.image} id="imgCard" />
                <h4>Activities</h4>
                <h5>{detail?.activities}</h5>
            

            
            </>
        }
    </div>
    <footer id="footer">Footer</footer>
    </>

    
  )
}
