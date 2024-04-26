import React, { useState } from "react";
import axios, { AxiosResponse } from "axios";

const FormDataPage: React.FC = () => {

  const [user,setUser] = useState({
    name: '',
    password: ''
  });
  
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // files 넘겨주기
    const target = e.target as typeof e.target & {
      profile_files: { files: FileList };
    };
    const files = target.profile_files.files;
    console.log(files)

    const formData = new FormData();
    if (files) {
      for (let i = 0; i < files.length; i++) {
        formData.append("files", files[i], "0202.png");
      }
    }

    // json object
    const dataSet = {
      name: user.name,
      password: user.password
    };

    formData.append("data", JSON.stringify(dataSet));

    // json array
    // const arrayData = [{NTF_FILE: "imgURL"}, {NTF_FILE: "imgURL"}, {NTF_FILE: "imgURL"}];
    // formData.append("IMG_LSIT", arrayData)

    try {
      const postSurvey: AxiosResponse = await axios.post(
        `http://localhost:4040/formTest`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(postSurvey);
    } catch (error) {
      console.error(error);
    }
  };

  const onChangeUser = (e:React.ChangeEvent<HTMLInputElement>) => {
    setUser(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <input type="text" name="name" onChange={onChangeUser}/>
      <input type="text" name="password" onChange={onChangeUser}/>
      <input type="file" name="profile_files" multiple />
      <button type="submit">제출</button>
    </form>
  );
};

export default FormDataPage;
