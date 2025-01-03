import axios from "axios";
import { useState } from "react";

const FileUploader = () => {
    const [file, setFile] = useState(null);
    const [status, setStatus] = useState('idle');

    const [result, setResult] = useState("");
    const [explanation, setExplanation] = useState("");
    const [confidence, setConfidence] = useState(0);

    const handleFileChange = (e) => {
        if (e.target.files) {
            const selectedFile = e.target.files[0];
            const allowedTypes = ['image/jpeg', 'image/png'];

            // Validate file type
            if (allowedTypes.includes(selectedFile.type)) {
                setFile(selectedFile);
            } else {
                alert('Unsupported file type. Please upload a JPEG or PNG image.');
                setFile(null); // Reset file state
            }
        }
    };

    const handleFileUpload = async () => {
        if (!file) return;

        setStatus('uploading');

        const formData = new FormData();
        formData.append('image', file); // Ensure 'image' matches the backend expectation

        try {
            const response = await axios.post('http://localhost:5000/predict', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })

            const { result, explanation, confidence } = response.data.data;

            setResult(result);
            setExplanation(explanation);
            setConfidence(confidence);

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
        <div className="space-y-4">
            <input type="file" name="image" onChange={handleFileChange} />
            {file && (
                <div className="mb-4 text-sm">
                    <p>File name: {file.name}</p>
                    <p>Size: {(file.size / 1024).toFixed(2)} KB</p>
                    <p>Type: {file.type}</p>
                </div>
            )}

            {file && status !== 'uploading' && <button onClick={handleFileUpload}>Upload</button>}

            {status === 'uploading' && <p>Uploading...</p>}
            {status === 'success' && <p>File uploaded successfully</p>}
            {status === 'error' && <p>File upload failed</p>}

            {
                result && (
                    <div>
                        <p>Result: {result}</p>
                        <p>Explanation: {explanation}</p>
                        <p>Confidence: {confidence}</p>
                    </div>
                )
            }
        </div>
    );
};

export default FileUploader;
