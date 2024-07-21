import React, { useState } from 'react';
import axiosInstance from '../axiosInstance';

const FolderCreation = () => {
    const [folderName, setFolderName] = useState('');

    const handleFolderCreation = async () => {
        try {
            const response = await axiosInstance.post('/folders', { name: folderName });
            console.log(response.data);
        } catch (error) {
            console.error('Error creating folder:', error);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={folderName}
                onChange={(e) => setFolderName(e.target.value)}
                placeholder="Folder Name"
            />
            <button onClick={handleFolderCreation}>Create Folder</button>
        </div>
    );
};

export default FolderCreation;
