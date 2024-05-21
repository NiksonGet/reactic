import React, { useState } from "react";
<<<<<<< HEAD
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink, Image} from "@react-pdf/renderer";
import {useForm } from "react-hook-form";
import styled from "styled-components";

=======
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink, Image } from "@react-pdf/renderer";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { IMyForm } from "./myform.interface";
import { IMyDocumentProps } from "./document.interface";
>>>>>>> master
const FormStyle = styled.form`
  display: flex;
  justify-content: center;
  padding: 30px;
  gap: 15px;
`;

<<<<<<< HEAD
interface IMyForm {
  picture: FileList;
  name: string;
}

interface IMyDocumentProps {
  name: string;
  picture: File;
}

=======
>>>>>>> master
const MyDocument: React.FC<IMyDocumentProps> = ({ name, picture }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>{name}</Text>
        </View>
        <View style={styles.section}>
          <Text>Section #2</Text>
        </View>
        <View style={styles.img}>{picture && <Image source={picture} />}</View>
      </Page>
    </Document>
  );
};

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  img: {
    padding: 15,
    flexGrow: 1,
  },
});

const Account = () => {
  const [task, setTasks] = useState<IMyForm>();

<<<<<<< HEAD
  const {
    register,
    handleSubmit,
  } = useForm<IMyForm>({
=======
  const { register, handleSubmit } = useForm<IMyForm>({
>>>>>>> master
    mode: "onBlur",
  });

  const saveElement = (data: IMyForm) => {
    setTasks(data);
  };

  return (
    <>
      <FormStyle onSubmit={handleSubmit(saveElement)}>
        <input
          {...register("name", {
            required: "Поле обязательно для заполнения",
            minLength: {
              value: 5,
              message: "Нужно больше символов",
            },
          })}
<<<<<<< HEAD
=======
          placeholder="Введите ваше имя"
>>>>>>> master
        />
        <input
          type="file"
          accept="image/*"
          {...register("picture", {
            required: "Изображение",
          })}
        />
        <button type="submit">Сохранить</button>
      </FormStyle>

      {!!task?.name && (
        <PDFDownloadLink document={<MyDocument name={task.name} picture={task.picture[0]} />} fileName="lab_pdf.pdf">
<<<<<<< HEAD
          {({loading}) => (loading ? "Loading document..." : "Download now!")}
=======
          {({ loading }) => (loading ? "Loading document..." : "Download now!")}
>>>>>>> master
        </PDFDownloadLink>
      )}
    </>
  );
};

export default Account;
