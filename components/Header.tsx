
type HeaderPrams = {
  text ?: string,
  textSub ?: string,
}


function Header({text , textSub} : HeaderPrams) {
return (
    <> 
    <h1>{text }</h1>
    <h2>{textSub}</h2>
    </>
 

)

}
export default Header;