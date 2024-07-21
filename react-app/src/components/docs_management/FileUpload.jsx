import React, { useState } from 'react';
import axiosInstance from '../axiosInstance';

const FileUpload = () => {
    const [file, setFile] = useState(null);
    const [folderId, setFolderId] = useState('');

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleFileUpload = async () => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('folder_id', folderId);

        try {
            const response = await axiosInstance.post('/files', formData);
            console.log(response.data);
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <input
                type="text"
                value={folderId}
                onChange={(e) => setFolderId(e.target.value)}
                placeholder="Folder ID (optional)"
            />
            <button onClick={handleFileUpload}>Upload</button>
        </div>
    );
};

export default FileUpload;
