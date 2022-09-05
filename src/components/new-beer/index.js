import NavBar from "../NavBar";
import { useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function NewBeer(){

    const navigate = useNavigate()

const [form, setForm] = useState({
    name:"",
    tagline:'',
    description:'',
    first_brewed:'',
    brewers_tips:'',
    attenuation_level: 0,
    contributed_by:''
})
function handleChange(e){
    setForm({...form, [e.target.name]: e.target.value})
}
console.log(form)

 async function handleSubmit(e){
    e.preventDefault()
    try {
        await axios.post('https://ih-beers-api2.herokuapp.com/beers/new', form)
        
    } catch (error) {
        console.log(error)
        
    }
    navigate('/')

}

    return(
        <>
        <NavBar/>
        <h1> Cadastrar Nova Cerveja</h1>
        <div style={{width:'720px', margin:'auto'}} >

        <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column', alignItems: 'flex-start'}}>
            <label>Name: </label>
            <input name='name' value={form.name} onChange={handleChange}/>


            <label>Tag Line: </label>
            <input name='tagline' value={form.tagline} onChange={handleChange}/>

            <label>Description: </label>
            <input name='description' value={form.description} onChange={handleChange}/>

            <label>First Brewed: </label>
            <input name='first_brewed' value={form.first_brewed} onChange={handleChange}/>

            <label>Brewers Tips: </label>
            <input name='brewers_tips' value={form.brewers_tips} onChange={handleChange}/>

            <label>Attenuation Level</label>  {/* tem q se numeroooo */}
            <input name='attenuation_level' value={+(form.attenuation_level)} onChange={handleChange}/>

            <label>Contributed by: </label>
            <input name='contributed_by' value={form.contributed_by} onChange={handleChange}/>

            <button type='submit'>Cadastrar</button>
        </form>
        </div>
        </>
    )
}

export default NewBeer;