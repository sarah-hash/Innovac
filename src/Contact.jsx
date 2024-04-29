import React, { useState } from 'react';
import './Contact.css';
import Navbar from './Navbar';
import Footer from './Footer';

function Contact() {
  const [userEmail, setUserEmail] = useState('');

  const handleEmailChange = (e) => {
    setUserEmail(e.target.value);
  };

  const sendMessage = () => {
    // Vous pouvez utiliser userEmail pour envoyer le message au destinataire.
    const recipientEmail = 'sarahkhabthani9@gmail.com'; // Adresse e-mail de destination
    const subject = 'Nouveau message de ' + userEmail;
    const message = 'Contenu du message...'; // Vous pouvez ajouter ici le contenu du message

    // Logique d'envoi de message (à remplacer par votre propre logique d'envoi d'e-mail)
    console.log(`Envoyer un message à ${recipientEmail} de la part de ${userEmail}`);
    console.log(`Sujet : ${subject}`);
    console.log(`Message : ${message}`);
  };

  return (
    <div>
      <Navbar />
      <br />
      <div className='container'>
        <div className="contact-1 py-4 md:py-12">
          <div className="container mx-auto px-4">
            <div className="xl:flex -mx-4">
              <div className="xl:w-10/12 xl:mx-auto px-4">
                <div className="xl:w-3/4 mb-4">
                  <h1 className="text-3xl text-medium mb-4"><b>Nous serions ravis d'avoir de vos nouvelles</b></h1>
                </div>
                <div className="md:flex md:-mx-4 mt-4 md:mt-10">
                  <div className="md:w-2/3 md:px-4">
                    <div className="contact-form">
                      <div className="sm:flex sm:flex-wrap -mx-3">
                        <div className="sm:w-1/2 px-3 mb-6">
                          <input type="text" placeholder="Nom complet" className="border-2 rounded px-3 py-1 w-full focus:border-indigo-400 input" />
                        </div>
                        <div className="sm:w-1/2 px-3 mb-6">
                          <input type="text" placeholder="Nom de l'entreprise" className="border-2 rounded px-3 py-1 w-full focus:border-indigo-400 input" />
                        </div>
                        <div className="sm:w-1/2 px-3 mb-6">
                          <input type="text" placeholder="Adresse e-mail" onChange={handleEmailChange} className="border-2 rounded px-3 py-1 w-full focus:border-indigo-400 input" />
                        </div>
                        <div className="sm:w-1/2 px-3 mb-6">
                          <input type="text" placeholder="Numéro de téléphone" className="border-2 rounded px-3 py-1 w-full focus:border-indigo-400 input" />
                        </div>
                        <div className="sm:w-full px-3">
                          <textarea name="message" id="message" cols="30" rows="4" placeholder="Votre message ici" className="border-2 rounded px-3 py-1 w-full focus:border-indigo-400 input"></textarea>
                        </div>
                      </div>
                      <div className="text-right mt-4 md:mt-12">
                        <button onClick={sendMessage} className="border-2 border-indigo-600 rounded px-6 py-2 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors duration-300">
                          Envoyer un message
                          <i className="fas fa-chevron-right ml-2 text-sm"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <Footer />
    </div>
  );
}

export default Contact;
