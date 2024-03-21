import { useState } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import styled from 'styled-components';

const ReactGalleryImg = () => {

  const [state, setState] = useState(false);

  const images = [
    {
        original: 'https://stillmed.olympic.org/media/Photos/2016/08/20/part-1/20-08-2016-Football-Men-01.jpg?interpolation=lanczos-none&resize=*:800',
        thumbnail: 'https://stillmed.olympic.org/media/Photos/2016/08/20/part-1/20-08-2016-Football-Men-01.jpg?interpolation=lanczos-none&resize=*:150',
    },
    {
        original: 'https://stillmed.olympic.org/media/Photos/2016/08/20/part-1/20-08-2016-Football-Men-02.jpg?interpolation=lanczos-none&resize=*:800',
        thumbnail: 'https://stillmed.olympic.org/media/Photos/2016/08/20/part-1/20-08-2016-Football-Men-02.jpg?interpolation=lanczos-none&resize=*:150',
    },
    {
        original: 'https://stillmed.olympic.org/media/Photos/2016/08/20/part-2/20-08-2016-Golf-Women-02.jpg?interpolation=lanczos-none&resize=*:800',
        thumbnail: 'https://stillmed.olympic.org/media/Photos/2016/08/20/part-2/20-08-2016-Golf-Women-02.jpg?interpolation=lanczos-none&resize=*:150',
    },
    {
        original: 'https://stillmed.olympic.org/media/Photos/2016/08/14/part-1/14-08-2016-Golf-Individual-Stroke-Play-Men-05.jpg?interpolation=lanczos-none&resize=*:800',
        thumbnail: 'https://stillmed.olympic.org/media/Photos/2016/08/14/part-1/14-08-2016-Golf-Individual-Stroke-Play-Men-05.jpg?interpolation=lanczos-none&resize=*:150',
    },
    {
        original: 'https://stillmed.olympic.org/media/Photos/2016/08/12/12-08-2016-archery-individual-men-02.jpg?interpolation=lanczos-none&resize=*:800',
        thumbnail: 'https://stillmed.olympic.org/media/Photos/2016/08/12/12-08-2016-archery-individual-men-02.jpg?interpolation=lanczos-none&resize=*:150',
    },
    {
        original: 'https://stillmed.olympic.org/media/Photos/2016/08/12/12-08-2016-archery-individual-men-01.jpg?interpolation=lanczos-none&resize=*:800',
        thumbnail: 'https://stillmed.olympic.org/media/Photos/2016/08/12/12-08-2016-archery-individual-men-01.jpg?interpolation=lanczos-none&resize=*:150',
    },
    {
        original: 'https://stillmed.olympic.org/media/Photos/2016/08/20/part-1/20-08-2016-Football-Men-03.jpg?interpolation=lanczos-none&resize=*:800',
        thumbnail: 'https://stillmed.olympic.org/media/Photos/2016/08/20/part-1/20-08-2016-Football-Men-03.jpg?interpolation=lanczos-none&resize=*:150',
    },
]

  const handleOnClick = () => {
    setState(!state);
  }

  return (
    <ImageGalleryContainer>
      <h1>ImageBallery 사용해보기</h1>
      <ImageContainer>
        {state ? <ImageGallery items={images}/> : null}
      </ImageContainer>
      <button className='clickbutton' onClick={handleOnClick}>보기</button>
    </ImageGalleryContainer>
  )
}

export default ReactGalleryImg

const ImageGalleryContainer = styled.div`
  width: 1000px;
  margin: 0 auto;
  position: relative;
  h1 {
    text-align: center;
  }
  .clickbutton {
    display: block;
    width: 100px;
    margin: 600px auto 0px;
    outline: none;
    border: none;
    border-radius: 5px;
  }
`

const ImageContainer = styled.div`
  position: absolute;
  width: 700px;
  background-color: white;
  left: 50%;
  transform: translateX(-50%);
`

/*
  😃설치😃
  npm i @types/react-image-gallery

  😃사용 방법😃

  */