let nombre = document.getElementById('name').value;
let msg = document.getElementById('message').value;
let mail = document.getElementById('email').value;

const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    sendEmail(nombre, msg, mail);
    form.reset();
});

function sendEmail(nombre, msg, mail) {
    Email.send({
        SecureToken : 'b77ea214-1e0e-4cb7-9ebf-13889aba560f',
        To : 'info@cristianraffo.com',
        From : 'cristiangraffo33@gmail.com',
        Subject : `${nombre} te ha enviado un mensaje desde la web.`,
        Body : `<p>Nombre: <b>${nombre}</b></p>        
                <p>Email: <b>${mail}</b></p>
                <p>Mensaje: <b>${msg}</b></p>
                `
    }).then(
        message => swal("Mail sent successfully!")
        )
    .catch(err => console.log('err: ', err))
}
