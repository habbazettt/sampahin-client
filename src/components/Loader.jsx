import { Triangle } from "react-loader-spinner"

const Loader = () => {
    return (
        <div className="w-full bg-primary h-screen flex flex-col justify-center items-center gap-2">
            <Triangle
                visible={true}
                height="100"
                width="100"
                radius="48"
                color="#fff"
                ariaLabel="watch-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
            <h1 className="text-white text-xl">Loading...</h1>
        </div>
    )
}

export default Loader