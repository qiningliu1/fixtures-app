"use client";
import React, { useState } from 'react';
import Papa from 'papaparse';
import axios from 'axios';
import styles from './UploadForm.module.css';

const UploadForm = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile?.type !== 'text/csv') {
      alert('only accept csv file');
      e.target.value = '';
      return;
    }
    setFile(selectedFile);
  };

  const handleUpload = () => {
    if (!file) return;

    Papa.parse(file, {
      header: true,
      complete: async (results) => {
        try {
          await axios.post('/api/upload', results.data);
          alert('Upload successful！');
          setFile(null);
          document.querySelector('input[type="file"]').value = '';
        } catch (err) {
          alert('Upload failed!');
        }
      },
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.uploadBox}>
        <label className={styles.fileLabel}>
          <input
            type="file"
            accept=".csv"
            onChange={handleFileChange}
            className={styles.fileInput}
          />
          <span className={styles.customButton}>Select File</span>
          {file && <span className={styles.fileName}>{file.name}</span>}
        </label>

        <button 
          onClick={handleUpload}
          disabled={!file}
          className={styles.uploadButton}
        >
          {file ? 'Upload' : 'select file first'}
        </button>
      </div>
    </div>
  );
};

export default UploadForm;