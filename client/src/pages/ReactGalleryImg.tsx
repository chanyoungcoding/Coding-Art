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
        thumbnailLabel: '사진 1',
        description: "첫번째 사진"
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
        {state ? <ImageGallery items={images} /> : null}
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

  const images = [ { original: '이미지 주소', thumbnail: '썸네일 이미지 주소'}, ... ]
  <ImageGallery items={images}/>
    
  😃Props😃

  items 
  필수 prop으로, 갤러리에 표시할 이미지 항목들의 배열입니다. 
  각 항목은 다음과 같은 속성을 포함해야 합니다
  
  original: 원본 이미지의 URL
  thumbnail: 썸네일 이미지의 URL
  description (선택적): 이미지 설명
  thumbnailLabel: 하단 이미지 가운데에 설명

  showNav: (기본값: true) - 좌우 네비게이션 화살표를 표시할지 여부를 결정합니다.

  showThumbnails: (기본값: true) - 썸네일을 표시할지 여부를 결정합니다.

  showPlayButton: (기본값: true) - 슬라이드쇼 재생 버튼을 표시할지 여부를 결정합니다.

  showFullscreenButton: (기본값: true) - 전체화면 모드로 변경하는 버튼을 표시할지 여부를 결정합니다.

  slideInterval: (기본값: 3000) - 자동 슬라이드쇼 간격을 밀리초 단위로 지정합니다. 0으로 설정하면 자동 슬라이드쇼가 비활성화됩니다.

  lazyLoad: (기본값: false) - 이미지를 지연 로딩할지 여부를 결정합니다.

  infinite: (기본값: true) - 갤러리가 끝에서 끝으로 무한히 슬라이드되도록 지정합니다.

  disableSwipe: (기본값: false) - 스와이프 제스처를 비활성화할지 여부를 결정합니다.

  onClick: (선택적) - 이미지를 클릭했을 때 실행되는 콜백 함수를 지정합니다.

  onScreenChange: (선택적) - 전체화면 모드가 변경될 때 실행되는 콜백 함수를 지정합니다.

  additionalClass: (선택적) - 추가 CSS 클래스를 지정하여 이미지 갤러리의 스타일을 커스터마이징할 수 있습니다.

  */