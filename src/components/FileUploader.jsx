import axios from "axios";
import { useState } from "react";

const FileUploader = () => {
    const [file, setFile] = useState(null);
    const [status, setStatus] = useState('idle');

    const [result, setResult] = useState("");
    const [explanation, setExplanation] = useState("");
    const [confidence, setConfidence] = useState(0);
    const [imageUrl, setImageUrl] = useState("");

    const handleFileChange = (e) => {
        if (e.target.files) {
            const selectedFile = e.target.files[0];
            const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];

            if (allowedTypes.includes(selectedFile.type)) {
                setFile(selectedFile);
            } else {
                alert('Unsupported file type. Please upload a JPEG, JPG or PNG image.');
                setFile(null);
            }
        }
        setStatus('idle');
        setResult("");
        setExplanation("");
        setConfidence(0);
        setImageUrl("");
    };

    const handleFileUpload = async () => {
        if (!file) return;

        setStatus('uploading');

        const formData = new FormData();
        formData.append('image', file);

        try {
            const response = await axios.post('http://localhost:5000/predict', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })

            const { result, explanation, confidence, imageUrl } = response.data.data;

            setResult(result);
            setExplanation(explanation);
            setConfidence(confidence);
            setImageUrl(imageUrl);

            setStatus('success');
        } catch (error) {
            setStatus('error');
            if (error.response) {
                console.error('Error response:', error.response.data);
                alert(`Upload failed: ${error.response.data.message || 'Unknown error'}`);
            } else {
                console.error('Error message:', error.message);
                alert('Upload failed: Network error or server is down.');
            }
        }
    };

    return (
        <div className="space-y-4 mx-auto flex flex-col items-center pb-6">
            <div className="flex items-center justify-center w-full">
                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-[800px] h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer  hover:bg-gray-100">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg className="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                        </svg>
                        <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                        <p className="text-xs text-gray-500">PNG, JPG, JPEG</p>
                    </div>
                    <input id="dropzone-file" type="file" name="image" className="hidden" onChange={handleFileChange} />
                </label>
            </div>

            {file && status !== 'uploading' && <button className="bg-primary text-white px-4 py-2 rounded-md" onClick={handleFileUpload}>Deteksi Gambar</button>}

            {
                result && (
                    <div className="h-full bg-primary text-white px-6 py-6 rounded-md">
                        <div className="flex flex-col items-center">
                            <h1 className="font-semibold text-5xl text-center md:text-left font-montserrat text-white my-4">Hasil Deteksi</h1>
                            <div className="flex justify-center items-start mt-8">
                                <div className="w-1/3 flex flex-col items-center">
                                    <img src={imageUrl} alt="" className="w-[350px] rounded-md" />
                                    <p className="mt-4 text-4xl font-semibold">{confidence.toFixed(2)}%</p>
                                </div>
                                <div className="w-2/3">
                                    <p className="text-[28px]"><span className="font-semibold">Jenis:</span> {result}</p>
                                    <p className="text-[27px] mt-2"><span className="font-semibold">Penjelasan:</span> {explanation}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            {/* <img src={imageUrl} alt="" />
            <p>Hasil: {result}</p>
            <p>Penjelasan: {explanation}</p>
            <p>Confidence: {confidence.toFixed(2)}%</p> */}
        </div>
    );
};

export default FileUploader;
