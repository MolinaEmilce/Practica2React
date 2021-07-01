import React,{useState} from 'react';


const formInicial= {
    artista : "",
    cancion : "",
}

const Form = ({handleForm}) => {
    const [form,setForm] = useState(formInicial);
     
    const handleChange = (e) =>{ //Captura valores del form
        setForm({//Setea el valor del estado por los valores que se llenan en los campos inputs
            ...form,
            [e.target.name] : e.target.value
        });
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(form.artista === '' || form.cancion === ''){
            alert('Campos vacíos')
            return;
        }

        handleForm(form);

    }


    return ( 
            <form action="" onSubmit={handleSubmit} >
                <input 
                    type="text" 
                    placeholder="Nombre de artista" 
                    name="artista" 
                    value = {form.artista}
                    onChange = {handleChange}
                />
                <input 
                    type="text" 
                    placeholder="Nombre de cancion" 
                    name="cancion" 
                    value = {form.cancion}
                    onChange = {handleChange}
                />
                <button>Buscar</button>
            </form>
     );
}
 
export default Form;