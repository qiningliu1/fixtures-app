import mongoose from 'mongoose';

const fixtureSchema = new mongoose.Schema({
homeTeam: String,  // 字段名需与前端一致
awayTeam: String,
date: String,
venue: String,
});

export default mongoose.models.Fixture || mongoose.model('Fixture', fixtureSchema);