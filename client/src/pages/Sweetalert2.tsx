import styled from "styled-components";
import Swal from "sweetalert2";

const SweetContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
  button {
    width: 200px;
    margin: 0px 10px;
    padding: 10px 20px;
    background-color: aliceblue;
    outline: none;
    border: none;
  }
`

const Sweetalert2 = () => {

  const handleOnClick = () => {
    Swal.fire({
      title: "The Internet?",
      text: "That thing is still around?",
      icon: "question",
      footer: '<a href="javascript:void(0)">Why do I have this issue?</a>',
      confirmButtonText: ` Great! `,
      showCloseButton: true,
      showCancelButton: true,
      showDenyButton: true,
      denyButtonText: `Don't save`,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
    })
    .then(result => {
      if (result.isConfirmed) {
        Swal.fire("Saved!", "you saved message", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  }

  const handleOnClick2 = () => {
    Swal.fire({
      position: "top",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
    });
  }

  const handleOnClick3 = () => {
    Swal.fire({
      title: "Sweet!",
      text: "Modal with a custom image.",
      imageUrl: "https://unsplash.it/400/200",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image"
    });
  }


  return (
    <SweetContainer>
      <button onClick={handleOnClick}>Click</button>
      <button onClick={handleOnClick2}>Click-2</button>
      <button onClick={handleOnClick3}>Click-image</button>
    </SweetContainer>
  )
}

export default Sweetalert2

/* 
✨✨
✨ Swal.fire ✨
Sweetalert 를 사용하기 위한 기본적인 방법입니다. Swal의 메서드를 불러와서 인자로 넣어주는 것으로 시작합니다.

✨ title ✨
h1 정도 크기의 제목을 설정해 줍니다.

✨ text ✨
적고 싶은 내용을 입력하시면 됩니다.

✨ icon ✨
최상단에 어떤 icon 을 띄울지 정해줍니다. 
설정 종류 : success, error, warning, info, question

✨ footer ✨
하단에 (border-top: 1px solid black)으로 구성되어 있는 text 를 추가해 줍니다.

✨ showCloseButton ✨
우측 상단에 X 버튼을 추가합니다. <- alert 를 취소합니다.

✨ showCancelButton ✨
기본 설정만 하면 OK 버튼만 나오지만 그 옆에 Cancel 버튼도 추가해 줍니다. <- alert 를 취소합니다.

✨ showDenyButton,denyButtonText ✨
부정 버튼을 추가합니다. 기본 색상은 빨간색으로 denyButtonText 를 추가하면 원하는 이름을 넣을 수 있습니다.

✨ .then(result => { if(result.isConfirmed) or if(result.isDenied) })  ✨

✨ position ✨
어떤 위치에서 alert 를 나타나게 하는지 정해 줍니다.
설정 종류 : 'top', 'top-start', 'top-end', 'center', 'center-start', 'center-end', 'bottom', 'bottom-start', 'bottom-end'

✨ timer, timerProgressBar ✨
alert 의 유지 시간을 설정합니다. 1500 으로 설정하면 1.5초 동안 나타났다가 사라집니다.
timerProgressBar 를 설정하면 남은 시간을 bar 형식으로 볼 수 있습니다.

✨ confirmButtonColor, cancelButtonColor ✨
확인버튼, 취소버튼의 색을 정해줍니다.

✨ imageUrl, imageWidth, imageHeight, imageAlt ✨ 
icon 자리에 image 를 보여줍니다.
imageWidth = 이미지의 넓이
imageHeigth = 이미지의 높이
imageAlt = 이미지가 안보일 때 나타날 text

Sweetalert 사이트
https://sweetalert2.github.io/#examples
*/