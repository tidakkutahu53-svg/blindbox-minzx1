orderBtn.addEventListener("click", ()=>{
  const item = resultPanel.dataset.currentItem || "";
  const code = resultPanel.dataset.currentCode || "";

  // Maklumat ke EmailJS
  const templateParams = {
    hadiah: item,
    kod: code,
    email_penerima: "tidakkutahu53@gmail.com"
  };

  // Hantar ke email melalui EmailJS
  emailjs.send("service_8xs0yb5", "template_rs0bivr", templateParams)
    .then(function(response) {
       alert("Kod berjaya dihantar kepada admin");
    }, function(error) {
       alert("Ralat menghantar kod. Sila cuba lagi");
    });
});