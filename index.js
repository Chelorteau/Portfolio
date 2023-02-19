function sendMail(){
    console.log("salut");
    // var params = {
    //     name: document.getElementById("name").value,
    //     email: document.getElementById("email").value,
    //     message: document.getElementById("message").value
    // }
    const serviceID = "service_v1iindh";
    const templateID = "template_ubb5fcr";

    // emailjs.send(serviceID, templateID,params)
    //         .then(res => {
    //         document.getElementById("name").value = "brabrabra";
    //         document.getElementById("email").value = "";
    //         document.getElementById("message").value = "";
    //         console.log(res);
    //         alert("your message sent succesfully");
    //     })
    //   .catch((err) => console.log(err));
  
    emailjs.send(serviceID,templateID,{
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
        });
    alert("Votre message à été envoyé avec succès");

    console.log("BYE");
}

