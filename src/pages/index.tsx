import { useRouter } from "next/router";
import { useEffect } from "react"

const HomePage = () => {
  const { push } = useRouter();

  useEffect(() => {
     push('/projects');
  }, []);
  return <p></p>;
}

export default HomePage