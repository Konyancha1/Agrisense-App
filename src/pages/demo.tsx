import React, { useState } from 'react';
import axios from 'axios';

const DemoPage: React.FC = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [result, setResult] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setSelectedFile(event.target.files[0]);
        }
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (!selectedFile) {
            setError("Please select a file.");
            return;
        }

        setLoading(true);
        const formData = new FormData();
        formData.append('file', selectedFile);

        try {
            const response = await axios.post('https://agrisense-web-app.onrender.com/predict', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setResult(response.data);
            setError(null);
        } catch (err) {
            setError("An error occurred while making the prediction.");
            setResult(null);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="max-w-lg w-full mx-auto p-4 bg-white shadow-md rounded-lg">
                <h1 className="text-2xl font-bold mb-4 text-green-600 text-center">Disease Prediction Demo</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <label className="block">
                        <span className="text-gray-700">Select an image:</span>
                        <input 
                            type="file" 
                            onChange={handleFileChange} 
                            className="block w-full mt-1 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none focus:border-green-600"
                        />
                    </label>
                    <button 
                        type="submit" 
                        className={`w-full py-2 px-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={loading}
                    >
                        {loading ? 'Predicting...' : 'Predict'}
                    </button>
                </form>
                {error && <p className="text-red-500 mt-4">{error}</p>}
                {result && (
                    <div className="mt-4 border-t pt-4">
                        <h2 className="text-xl font-semibold">Prediction Result</h2>
                        <p><span className="font-semibold">Class:</span> {result.class}</p>
                        <p><span className="font-semibold">Confidence:</span> {result.confidence}</p>
                        <p><span className="font-semibold">Recommendations:</span> {result.recommendations}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DemoPage;