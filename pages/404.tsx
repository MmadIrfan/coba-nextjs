/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function custom404() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 2000);
  }, []);

  return (
    <div>
      <h1 className="title-notfound">Ooops..</h1>
      <h1 className="title-notfound">Halamannya ga ada cooy!</h1>
    </div>
  );
}
