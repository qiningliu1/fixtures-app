import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import Fixture from '@/models/Fixture';

// 初始化 MongoDB 连接（复用连接）
if (!mongoose.connections[0].readyState) {
await mongoose.connect(process.env.MONGODB_URI);
}

export async function GET(request) {
const { searchParams } = new URL(request.url);
const query = searchParams.get('q');

try {
// 参数校验
if (!query || query.trim().length < 2) {
    return NextResponse.json(
    { error: '搜索关键词至少需要2个字符' },
    { status: 400 }
    );
}

// 执行查询
const results = await Fixture.find({
    $or: [
    { homeTeam: { $regex: query, $options: 'i' } },
    { awayTeam: { $regex: query, $options: 'i' } }
    ]
}).limit(10);

return NextResponse.json(results);

} catch (error) {
console.error('搜索失败:', error);
return NextResponse.json(
    { error: '服务器内部错误' },
    { status: 500 }
);
}
}