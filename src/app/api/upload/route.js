import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import Fixture from '@/models/Fixture';

// 初始化 MongoDB 连接
if (!mongoose.connections[0].readyState) {
await mongoose.connect(process.env.MONGODB_URI);
}

export async function POST(request) {
try {
const data = await request.json();

// 数据格式校验
if (!Array.isArray(data)) {
    return NextResponse.json(
    { error: '数据格式应为数组' },
    { status: 400 }
    );
}

// 插入数据
const result = await Fixture.insertMany(data);
return NextResponse.json({
    success: true,
    insertedCount: result.length
});

} catch (error) {
console.error('上传失败:', error);
return NextResponse.json(
    { error: '服务器内部错误' },
    { status: 500 }
);
}
}