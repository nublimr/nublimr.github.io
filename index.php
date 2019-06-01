<?php
  if (isset($_POST['submit'] )) {
    $name=$_POST['name'];
    $email=$_POST['email'];
    $phone=$_POST['phone'];
    $msg=$_POST['message'];

    $to='nubliezrapat@gmail.com';
    $subject='Form Submission';
    $message="Nama : ".$name."\nNo. Handphone : ".$phone."\nPesan \n'".$msg."'";
    $headers="form : ".$email;

    mail($to,$subject,$message,$headers);
  }
?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="stylesheet" href="css\bootstrap.min.css">
    <link rel="stylesheet" href="css\style.css">
    <link rel="stylesheet" href="css/lightbox.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Viga&display=swap">

    <title>Nakira Landing Page</title>
  </head>
  <body>

    <div class="container">
    <!-- Navbar -->
      <nav class="navbar navbar-expand-md navbar-light fixed-top">
        <div class="container">
          <a class="navbar-brand" href="#">NakiRa</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ml-auto">
              <!-- <a class="nav-item nav-link" href="#">Home<span class="sr-only">(current)</span></a>
              <a class="nav-item nav-link" href="#">About</a>
              <a class="nav-item nav-link" href="#">Portfolio</a> -->
              <a class="nav-item btn btn-primary" href="#">LOOK MORE!</a>
            </div>
          </div>
        </div>
      </nav>
    <!-- Akhir Navbar -->
    </div>

    <!-- Jumbotron -->
    <div class="jumbotron jumbotron-fluid">
      <div class="container text-center">
        <img class="rounded-circle" src="img/Profile.jpg" width="250">
        <h1 class="display-4">Nubli Marzuki Ramadhan</h1>
        <p>Junior Web Developer | Games | Music | College</p>
      </div>
    </div>
    <!-- Akhir Jumbotron -->

    <!-- About -->
    <section id="about">
      <div class="container">
        <h1 class="text-center">About Me</h1>
        <div class="row text-justify mt-5">
          <div class="col-md-6 text-center">
            <img src="/img/IMG_0010-1024x768.jpg" alt="" width="400px">
          </div>
          <div class="col-md-6">
              <p class="display-5 mt-5">"Hello!, You can call me nubli, I from Informatics Engginering in Pamulang University. i very interest about code and i like it,so you can look my page and this page i made because i want to people know my information."</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Akhir About -->

    <!-- Portfolio -->
    <section id="portfolio">
      <div class="container">
        <h1 class="text-center">Portfolio</h1>
        <div class="row justify-content-center">
          <div class="col-md-12">
            <div class="gallery">
              <a href="portfolio/Calculator/Mycal.html"><img src="img/Calculator.png" class="img-thumbnail"></a>
              <a href="portfolio/Jangken/index.html"><img src="img/janken.png" class="img-thumbnail"></a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Akhir Portfolio -->

    <!-- Contact -->
    <section id="contact">
      <div class="container">
        <h1 class="text-center">Contact</h1>
          <div class="row pt-4 mb-4">
            <div class="col-md-4">
              <div class="card text-white bg-primary mb-3">
                <div class="card-body text-center">
                  <h5 class="card-title">Contact Me</h5>
                    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptatibus enim</p>
              </div>
            </div>
            <ul class="list-group">
                <li class="list-group-item"><h2>Location</h2></li>
                <li class="list-group-item">My Base</li>
                <li class="list-group-item">Jl. Anurriyah Blok I/3 No.18</li>
                <li class="list-group-item">Villa Pertiwi, Depok Kec.Cilodong Kel.Sukamaju</li>
              </ul>
            </div>
            <div class="col-md-8">
              <form action="" method="post">
                <ul>
                  <li><div class="form-group">
                    <label for="name">Name</label>
                    <input name="name" type="text" class="form-control" id="name" placeholder="Your Name">
                  </div></li>
                  <li><div class="form-group">
                    <label for="email">Email</label>
                    <input name="email"type="text" class="form-control" id="email" placeholder="name@example.com">
                  </div></li>
                  <li><div class="form-group">
                    <label for="phone">Phone Number</label>
                    <input name="phone" type="tel" class="form-control" id="phone" placeholder="Your Number">
                  </div></li>
                  <li><div class="form-group">
                    <label for="message">Message</label>
                    <textarea name="message"class="form-control" id="message" rows="3" placeholder="Your Message"></textarea>
                  </div></li>
                  <li><button type="submit" name="submit" class="btn btn-primary">Submit</button></li>
                </ul>
              </form>
            </div>
          </div>
      </div>
    </section>
    <!-- Akhir Contact -->

    <!-- Footer -->
      <footer class="bg-dark text-white">
        <div class="container text-center">
          <div class="row pt-3">
            <div class="col">
              <p>Copyright 2019</p>
            </div>
          </div>
        </div>
      </footer>
    <!-- Akhir Footer -->









    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="js\jquery.min.js"></script>
    <script src="js\popper.min.js"></script>
    <script src="js\bootstrap.min.js"></script>
    <script src="js\script.js"></script>
    <script type="text/javascript" src="js/lightbox-plus-jquery.min.js"></script>
  </body>
</html>