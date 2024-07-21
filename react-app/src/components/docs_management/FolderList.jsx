import React, { useEffect, useState } from 'react';
import axiosInstance from '../axiosInstance';

const FolderList = () => {
    const [folders, setFolders] = useState([]);
    const [files, setFiles] = useState([]);

    useEffect(() => {
        const fetchFoldersAndFiles = async () => {
            try {
                const folderResponse = await axiosInstance.get('/folders');
                setFolders(folderResponse.data);

                const fileResponse = await axiosInstance.get('/files');
                setFiles(fileResponse.data);
            } catch (error) {
                console.error('Error fetching folders and files:', error);
            }
        };

        fetchFoldersAndFiles();
    }, []);

    return (
        <div>
            <h3>Folders</h3>
            <ul>
                {folders.map((folder) => (
                    <li key={folder.id}>{folder.name}</li>
                ))}
            </ul>
            <h3>Files</h3>
            <ul>
                {files.map((file) => (
                    <li key={file.id}>
                        {file.name} - {file.type} - {file.size} bytes
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FolderList;
