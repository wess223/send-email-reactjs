import { useState } from 'react';
import './App.css';
import emailjs from '@emailjs/browser';

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function cleanForm() {
    setName('')
    setEmail('')
    setMessage('')
  }

  function sendEmail(e) {
    e.preventDefault();
    if (name === '' || email === '' || message === '') {
      return alert('Preencha todos os campos!')
    }

    const serviceId = 'service_9m4ymjm'
    const templateId = 'template_smjnkoh'
    const publicKey = 'user_tFDDY0iJDxeJuYa9YD4iW'
    const templateParams = {
      from_name: name,
      message: message,
      email: email
    }

    emailjs.send(serviceId, templateId, templateParams, publicKey).then((response) => {
      alert('email enviado com sucesso!✌', response.status, response.text)
      cleanForm();
    }, (err) => {
      console.log("Erro: ", err)
    })
  }

  return (
    <div className="container">
      <h1 className="title">Contato</h1>

      <form className="form" onSubmit={sendEmail}>
        <input
          className="input"
          type="text"
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <input
          className="input"
          type="text"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <textarea
          className="textarea"
          placeholder="Digite sua mensagem..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />

        <input className="button" type="submit" value="Enviar" />
      </form>

    </div>
  );
}

export default App;
