import { Home } from "@/Features/home/Home"

const HomePage = ({data}) => {
  return <Home data={data} />
}

export const getServerSideProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const vv = await response.json();
    return {
        props: {
            data: vv
        }
    }
}

export default HomePage