import React, { useState, useEffect} from 'react';
import './App.css';
import ImageCard from './components/imageCard';

function App() {
  const [images,setImages]=useState([]);
  const [loading, setLoading]=useState(true)
  const [term, setTerm]=useState('');

  useEffect(()=>{
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo`)
      .then(res=>res.json())
      .then(data=>{
        setImages(data.hits)
        console.log(images)
        setLoading(false)
      })
      .catch(err=>console.log(err))
  },[])
  const submitForm=(e)=>{
    e.preventDefault();
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo`)
    .then(res=>res.json())
    .then(data=>{
      setImages(data.hits)
      console.log(images)
      setLoading(false)
    })
    .catch(err=>console.log(err))
  }
  return (
   <>
      <div className="h-20 p-3 items-center w-full justify-center text-center">
        <form onSubmit={e=>submitForm(e)}>
          <input type='text' className='rounded-l-md w-1/4 focus:outline-none p-2 border-2' value={term} onChange={e=>setTerm(e.target.value)} placeholder="Enter your Term"/>
          <button type='submit' className='bg-blue-600 text-white py-2 border-2 border-blue-600 px-3 rounded-r-md'>
          <svg className="w-5 h-5 inline-block mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            Search</button>
        </form>
      </div>
     <div className="container flex justify-center">
      <div className="grid grid-cols-3 gap-8 ">
        {loading?<h1 className='text-6xl text-center mx-auto'>Loading</h1>:
          images.map(img=>(
            <ImageCard key={img.id} img={img}/>
          ))
        }
      </div>
    </div>
   </>
  );
}

export default App;
