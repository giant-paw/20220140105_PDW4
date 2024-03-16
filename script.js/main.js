    const waktu = document.getElementById("waktu");

    function dateTime() {
        const date = new Date();
        waktu.innerHTML = date;
    }

    setInterval(dateTime, 1000);

    dateTime
  
  
  
  document.getElementById('donateBtn1').addEventListener('click', function() {
    Swal.fire({
      title: "DONASI BERHASIL",
      text: "Semoga kebaikanmu dibalas Allah SWT",
      icon: "success"
    });
  });

  document.getElementById('donateBtn2').addEventListener('click', function() {
    Swal.fire({
        title: "DONASI BERHASIL",
        text: "Semoga kebaikanmu dibalas Allah SWT",
        icon: "success"
    });
  });

  document.getElementById('donateBtn3').addEventListener('click', function() {
    Swal.fire({
        title: "DONASI BERHASIL",
        text: "Semoga kebaikanmu dibalas Allah SWT",
        icon: "success"
    });
  });

  document.getElementById('donateBtn4').addEventListener('click', function() {
    Swal.fire({
        title: "DONASI BERHASIL",
        text: "Semoga kebaikanmu dibalas Allah SWT",
        icon: "success"
    });
  });