import FileUploader from "../components/FileUploader"

const Detect = () => {
    return (
        <div className="container max-h-screen mx-auto py-10 -mt-28" id="detect">
            <div className="flex flex-col items-center">
                <h1 className="font-bold md:text-5xl text-3xl text-center md:text-left font-montserrat text-primary"><span className="text-secondary">Deteksi</span> Sampahmu Disini!</h1>
                <div className="mt-10">
                    <FileUploader />
                </div>
            </div>
        </div>
    )
}

export default Detect