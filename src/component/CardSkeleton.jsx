import React from 'react'
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

const CardSkeleton = ({key}) => {
  return (
        <div className='card-skeleton' key={key}>
        <div className='image-skelton mb-4'>
            <Skeleton width={300} height={450}/>
        </div>
        <div className='detail-skeleton'>
            <div className='movie-name my-4'>
                <Skeleton width={300} height={30}/>
            </div>
        </div>
      
    </div>
  )
}

export default CardSkeleton
