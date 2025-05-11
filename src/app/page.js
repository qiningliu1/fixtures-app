//首页-搜索页
import SearchForm from '@/components/SearchForm'

export default function Home() {
  return (
    <div style={{maxWidth:'800px',margin:'0 auto', padding:'20px'}}>
    <h1 style={{textAlign:'center'}}>Fixture Search</h1>
    <SearchForm/>
    </div>
  );
}
