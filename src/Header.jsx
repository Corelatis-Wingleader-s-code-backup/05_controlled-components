export const Header = ()=>{
    const handleSearchInputChange = (e)=>console.log(e.currentTarget.value);
    const handleButtonClick = (e)=> alert('button::onClick')
    return(
    <div>
        <a href='./'><span>X呼</span></a>
        <input type='text' 
        placeholder="Search Question"
        onChange={handleSearchInputChange}/>
        <button onClick={handleButtonClick}>Search</button>
    </div>
);}