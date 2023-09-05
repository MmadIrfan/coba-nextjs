/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router";
import Layout from "@/components/layout";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

interface userDetailProps {
  user: User;
}
export default function detailuser(props: userDetailProps) {
  const { user } = props;
  return (
    <Layout judul="Detail User">
      <p>Nama : {user.name} </p>
      <p>Email : {user.email} </p>
      <p>No.Hp : {user.phone} </p>
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataUsers = await res.json();

  const paths = dataUsers.map((user: User) => ({
    params: {
      id: `${user.id}`,
    },
  }));
  return { paths, fallback: false };
}

interface getStaticProps {
  params: {
    id: string;
  };
}
export async function getStaticProps(context: getStaticProps) {
  const { id } = context.params;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const user = await res.json();

  return {
    props: {
      user,
    },
  };
}
