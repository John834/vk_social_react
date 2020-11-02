import React from 'react';
import my from './MyPhoto.module.css';

const Photo = (props) => {
  return (
    <li><img src={props.src} alt={props.alt} /></li>
  )
}

const MyPhoto = (props) => {
  let images = props.imgData.map((img, id) => <Photo src={img.src} alt={img.alt} key={`${img}_${id}`}/>)
  return (
    <div className={my.myphoto}>
      <div className={my.photo__title}>
        <span className={my.label}>My Photo</span>
        <span className={my.count}>4</span>
      </div>
      <div className={my.photo__list}>
        <ul>
          { images }
        </ul>
      </div>
    </div>
  )
}

export default MyPhoto;