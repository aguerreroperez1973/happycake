import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const contacto = () => {

  const [email, setEmail] = useState("");
  const [descrip, setDescrip] = useState("");
  const [error, setError] = useState(false);
  const [alerta, setAlerta] = useState('');
  const [mensaje, setMensaje] = useState('');
  
const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

//Función para validar los datos antes de ingresarlos/////////////////////////////////////////////////////////////////////////
const validarDatos = (e) => {

 e.preventDefault();

//Validación de valores vacios
    if (email === '' || descrip === '')
    {
         setError(true);
         setAlerta("alert alert-danger");
         setMensaje("Error: Debe completar todos los datos!!");
         
     return;
    } 

// verificar formato de email
                else if (!regex.test(email)) {
                setAlerta("alert alert-danger");
                setMensaje("Error: El e-mail ingresado no es valido");
            } 
else {
      
      setAlerta("alert alert-success");
      setMensaje("Los datos se enviaron correctamente, Gracias por comunicarte con nosotros");}

// Si el formulario se envía correctamente devolvemos todos nuestros estados al inicial y reseteamos el formulario
    setEmail("");
    setDescrip("");
     
}; // fin validarDatos Funcion////////////////////////////////////////////////////////////////////////////////////////////////
    return (
      <>
          <div>
              <center>
                <Form onSubmit={(e) => validarDatos(e)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" placeholder="namemail@ejemplo.com" onChange={(e) => setEmail(e.target.value)} value={email}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Descripcion</Form.Label>
                      <Form.Control as="textarea" rows={3} onChange={(e) =>setDescrip(e.target.value)} value={descrip}/>
                    </Form.Group>

                      <Button className="bg-danger" variant="primary" type="submit">
                        Enviar
                      </Button>
                </Form>
              </center>
          </div>
          <br />
          <div>
              <center><div className={alerta}> {mensaje} </div></center>
         </div>
      </>
        
    );

}

export default contacto