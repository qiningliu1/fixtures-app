import UploadForm from '@/components/UploadForm';
export default function UploadPage(){
    return (
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
        <h1 style={{ textAlign: 'center' }}>CSV数据上传</h1>
        <UploadForm />
        </div>
    );
}