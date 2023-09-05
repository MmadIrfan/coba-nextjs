/* eslint-disable react/jsx-key */
import Layout from "@/components/layout";
import { useRouter } from "next/router";
import styles from "@/styles/users.module.css";

interface userProps {
  dataUsers: Array<any>;
}
export default function Users(props: userProps) {
  const { dataUsers } = props;
  const router = useRouter();

  console.log(dataUsers);
  return (
    <Layout judul="User">
      {dataUsers.map((user) => {
        return (
          <div
            className={styles.card}
            key={user.id}
            onClick={() => router.push(`/users/${user.id}`)}
          >
            <p>Nama : {user.name}</p>
            <p>Email : {user.email}</p>
          </div>
        );
      })}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataUsers = await res.json();
  return {
    props: {
      dataUsers,
    },
  };
}
