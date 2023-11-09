<template>
    <header>
        <nav>
            <img class="logo" src="@/assets/logo.png">
            <div class="nav-1">
                
                <ul>
                <li><a class="li-a" href="#">Home</a></li>
                <li><a class="li-a" href="#">About</a></li>
                <li><a class="li-a" href="#">Computer</a></li>
                <li><a class="li-a" href="#">Laptop</a></li>
                <li><a class="li-a" href="#">Products</a></li>
                <li><a class="li-a" href="#">Contact</a></li>
                <li><a class="li-a" href="#"><font-awesome-icon :icon="['fas', 'magnifying-glass']" /></a></li>
                <li><a class="li-a" href="#">Login</a></li>
            </ul>
            </div>
            <img src="@/assets/menu_icon.png" class="menu-movil">
            <div class="nav_texts">
                <h3 class="nav_text_1">Computer And Laptop</h3>
                <h1 class="nav_text_2">Accessories</h1>
                <p class="nav_text_3">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or</p>
            </div>
            <div class="nav-buttons">
                <a class="nav-btn" href="#">Buy Now</a>
                <a class="nav-btn" href="#">Contact</a>
               
            </div>
            <div class="nav-pct">
                <img class="pct" src="@/assets/pct.png">
            </div>
        </nav>
    </header>

    <section class="cards">
        <div class="card">
            <img src="@/assets/thr.png" width="118px" height="102px">
            <h5 class="card-2">Computer</h5>
            <p class="card-3">There are many variations of
                passages of Lorem Ipsum
                available, but the majority have
                suffered alteration in some form, by
                injected humour, or randomised
                words which don't look even slightly
                believable</p>
        </div>
        <div class="card">
            <img src="@/assets/thr1.png" width="118px" height="102px">
            <h5 class="card-2">Laptop</h5>
            <p class="card-3">There are many variations of
                passages of Lorem Ipsum
                available, but the majority have
                suffered alteration in some form, by
                injected humour, or randomised
                words which don't look even slightly
                believable</p>
        </div>
        <div class="card">
            <img src="@/assets/thr2.png" width="118px" height="102px">
            <h5 class="card-2">Tablet</h5>
            <p class="card-3">There are many variations of
                passages of Lorem Ipsum
                available, but the majority have
                suffered alteration in some form, by
                injected humour, or randomised
                words which don't look even slightly
                believable</p>
        </div>
    </section>



    <section class="products">
            <h3 class="products-title">OUR PRODUCTS</h3>
        <div class="products-prods">
            <div class="prod-1">
                <img src="@/assets/product1.png" width="203px" height="160px">
                <h4 class="prod-title">Computer</h4>
            </div>
            <div class="prod-2">
                <img src="@/assets/product2.png" width="203px" height="160px">
                <h4 class="prod-title">Laptop</h4>
            </div>
            <div class="prod-3">
                <img src="@/assets/product3.png" width="203px" height="160px">
                <h4 class="prod-title">Tablet</h4>
            </div>
            <div class="prod-4">
                <img src="@/assets/product4.png" width="203px" height="160px">
                <h4 class="prod-title">Speakers</h4>
            </div>
            <div class="prod-5">
                <img src="@/assets/product5.png" width="203px" height="160px">
                <h4 class="prod-title">Internet</h4>
            </div>
            <div class="prod-6">
                <img src="@/assets/product6.png" width="203px" height="160px">
                <h4 class="prod-title">Hardisk</h4>
            </div>
            <div class="prod-7">
                <img src="@/assets/product7.png" width="203px" height="160px">
                <h4 class="prod-title">Rams</h4>
            </div>
            <div class="prod-8">
                <img src="@/assets/product8.png" width="203px" height="160px">
                <h4 class="prod-title">Bettery</h4>
            </div>
            <div class="prod-9">
                <img src="@/assets/product9.png" width="203px" height="160px">
                <h4 class="prod-title">Drive</h4>
            </div>
            <a href="#" class="see-more">See More</a>
        </div>
    </section>


    <section class="cp">
            <div class="computer_texts">
                <h3 class="computer_text_1">Every Computer and Laptop</h3>
                <h1 class="computer_text_2">Up To 40% off !</h1>
            </div>
            <div class="computer-buttons">
                <a class="computer-btn" href="#">Shop Now</a>
            </div>
            <div class="computer-pc">
                <img src="@/assets/pc.png" >
            </div>
    </section>

    <section class="review">
        <h1 class="review-text-1">CUSTOMER REVIEW</h1>
        <div class="review-texts">
            <img class="review-img" src="@/assets/cos.png" width="43px" height="33px">
        <h3 class="review-text-2">Sandy Miller</h3>
        <p class="review-text-3">Ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt
        ut labore el dolore magna aliqua.
        Ut enim ad minim veniam,
        quis nostrud exercitation ullamco
        lamoris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure
        dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat
        nulla pariatur. Excepteur sint
        accaecat cupidatat non proident,
        sunt in culpa qui officia deserunt
        mollit anim id</p>
        </div>
    </section>


    <section class="form">
        <h1 class="form-text-1">CONTACT NOW</h1>
            <form class="form-div">
                <input class="input" type="text" placeholder="Name" required>
                <input class="input" type="email" placeholder="Email" required>
                <input class="input" type="number" placeholder="Phone Number" required>
                <input class="input-1" type="text" placeholder="Message">
                <button class="submit" type="submit">SEND</button>
            </form>
    </section>
    <footer>
        <div class="footer-1">
            <div class="footer-icons">
                <img class="logo1" src="@/assets/logo1.png" width="78px" height="82px">
                <div class="footer-redes">
                    <a href="https://www.facebook.com/login/" target="_blank"><font-awesome-icon class="icon-1" :icon="['fab', 'facebook']" /></a>
                    <a href="https://twitter.com" target="_blank"><font-awesome-icon class="icon" :icon="['fab', 'twitter']" /></a>
                    <a href="https://ar.linkedin.com/" target="_blank"><font-awesome-icon class="icon" :icon="['fab', 'linkedin']" /></a>
                    <a href="https://www.instagram.com/" target="_blank"><font-awesome-icon class="icon" :icon="['fab', 'instagram']" /></a>
                </div>
            </div>
            <div class="footer-text-1">
                <h5 class="footer-text-title">About Us</h5>
                <p>dolor sit amet, consectetur magna aliqua.
                    Ut enim ad minim veniam, 
                    quisdotempor incididunt r</p>
            </div>
            <div class="footer-text-2">
                <h5 class="footer-text-title">Contact Us</h5>
                <p>dolor sit amet, consectetur magna aliqua.
                    quisdotempor incididunt ut e</p>
            </div>
            <form class="footer-newsletter">
                <h5 class="footer-text-title">Newsletter</h5>
                <input class="newsletter-input" type="email" placeholder="Enter your email">
                <button class="newsletter-button" type="submit">SUBSCRIBE</button>
            </form>
        </div>
        <div class="right-reserve">
            <p>© 2023 All Rights Reserved. Design by Javier Fioquetti</p>
        </div>
    </footer>

    
</template>

<script setup>

</script>





<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins-Regular';
    
}

@font-face {
    font-family: Poppins-Regular;
    src: url('@/assets/Fonts/Poppins-Regular.ttf');
}

@font-face {
    font-family: Poppins-bold;
    src: url('@/assets/Fonts/Poppins-Bold.ttf');
}

@font-face {
    font-family: Poppins-ExtraBold;
    src: url('@/assets/Fonts/Poppins-ExtraBold.ttf');
}

@font-face {
    font-family: Poppins-Light;
    src: url('@/assets/Fonts/Poppins-Light.ttf');
}

@font-face {
    font-family: IcoMoon;
    src: url('@/assets/Fonts/IcoMoon-Free.ttf');
}

header {
    background-image: url(@/assets/banner.jpg);
    background-size: cover;
    width: 100vw;
    height: 140vh;
    background-repeat: no-repeat;
}


.logo {
    width: 78px;
    height: 82px;
    margin-top: 25px;
    margin-left: 25px;
}
.nav-1 {
    display: flex;
    padding-left: 2%;
    padding-right: 2%;
    width: 60vw;
    display: flex;
    align-items: center;
}



.menu-movil {
    width: 36px;
    height: 21px;
    position: relative;
    margin-top: -80px;
    margin-left: 80%;
    display: none;
}

ul {
    display: flex;
    position: relative;
    justify-content: space-around;
    top: -65px;
    width: 800px;
    left: 480px;
}
li, .li-a {
    display: flex;
    position: relative;
    list-style: none;
    color:  white;
    text-decoration: none;
}
li, .li-a:hover {
    cursor: pointer;
    color: #71ef83;
}

.nav_texts {
    display: flex;
    display: block;
    margin-left: 40px;
    margin-top: 90px;

}

.nav_text_1, .nav_text_2, .nav_text_3 {
    position: relative;
    color: white;
    
}
.nav_text_1 {
    font-size: 38px;
    font-family: 'Poppins-Light';
    font-stretch: ultra-expanded;
    
    width: 500px;

}
.nav_text_2 {
    font-family: 'Poppins-bold';
    font-size: 72px;
}

.nav_text_3 {
    font-size: medium;
    margin-top: 20px;
    width: 500px;
}
.nav-pct {
    display: flex;
    position: relative;
}

.pct {
    position: relative;
    width: 596px;
    height: auto;
    display: inline;
    top:-350px;
   margin-left: 560px;
}

.nav-buttons {
    display: flex;
    width: 500px;
    margin-top: 30px;
    margin-left: 20px;
    align-items: center;
    justify-content: center;
    
}

.nav-btn {
    
    width: 200px;
    height: 50px;
    padding: 10px;
    margin-left: 10px;
    border: 2px solid white;
    background-color: inherit;
    color: white;
    text-decoration: none;
    text-align: center;
    font-family: 'Poppins-bold';
}
.nav-btn:hover {
    background-color: white;
    color: inherit;
}

.cards {
    display: flex;
    justify-content: center;
    background-color:  #ffffff;
    border-top: 20px;
    padding-top: 20px;
    padding-bottom: 60px;
}
.card {
    display: flex;
    display: block;
    justify-content: center;
    text-align: center;
    padding: 50px 10px 10px 10px;
    border: 1px solid #71ef83;
    border-radius: 5%;
    background-color: inherit;
    width: 300px;
    height: 420px;
    margin: 10px;
    overflow: hidden;
}
.card-2 {
    font-family: 'Poppins-ExtraBold';
    font-size: large;
    padding-top: 10px;
    padding-bottom: 30px;
}




.products {
    display: flex;
    background-color: #f7f7f7;
    justify-content: center;
    display: block;
    border-top: 20px;
    padding-top: 20px;
    padding-bottom: 60px;
    overflow: hidden;
}
.products-title {
    position: relative;
    display: inline;
    top: 50px;
    border-bottom:1px solid #71ef83;
    left: 580px;
}

.products-prods {
    background-color: #ffffff;
    position: relative;
    padding-bottom: 20px;
    width: 900px;
    height: 1200px;
    top: 100px;
    left: 200px;
    margin-bottom: 100px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-content: center;
    text-align: center;
    
}
.prod-title {
    position: relative;
    background-color: black;
    color: #ffffff;
    top: 10px;
    display: inline-flex;
    width: 203px;
    justify-content: center;
}

.see-more {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    color: #5cbe97;
    left: 340px;
    top: 20px;
    width: 230px;
    height: 50px;
    border: 2px solid #5cbe97;
    background-color: inherit;
    text-decoration: none;
    
}

.see-more:hover {
    color: #ffffff;
    border: 2px solid #ffffff;
    background-color: #5cbe97;
    
}



.cp {
    background-image: url(@/assets/cross.png);
    background-size: cover;
    height: 400px;
    width: 100vw;

}


.computer_texts {
    display: flex;
    display: block;
    padding: 100px;
}

.computer_text_1, .computer_text_2 {
    position: relative;
    text-align: left;
    color: white;
    left: 100px;
    margin-bottom: 20px;
    
    
}
.computer_text_1 {
    font-size: large;

}
.computer_text_2 {
    font-family: 'IcoMoon';
    font-size: 50px;
}

.computer-pc {
    display: flex;
    position: relative;
    display: inline;
    top: -300px;
    left: 600px;
    width: 588px;
    height: 235px;
   

}


.computer-buttons {
    display: flex;
    position: relative;
    width: 300px;
    align-items: center;
    justify-content: center;
    top: -70px;
    left: 140px;
    
}

.computer-btn {
    
    width: 200px;
    height: 50px;
    padding: 10px;
    margin-left: 30px;
    background-color: #47ca94;
    color: white;
    text-decoration: none;
    text-align: center;
}
.computer-btn:hover {
    background-color: white;
    color: #47ca94;
}


@media (max-width: 800px ) {
    .nav-1 {
        display: none;
    }
    .menu-movil {
        display: flex;
    }
    .pct {
    width: 60%;
    height: auto;
    top: 40px;
   margin-left: 90px;  
   }

   .cards {
    display: grid;
    column-gap: normal;
   }
   .card {
    width: 80vw;
    height: auto;
   }

   .products {
    width: 100vw;
    height: 400vh;
   }

    .products-prods {
    grid-template-columns: repeat(1, 1fr);
    width: 60%;
    height: 350vh;
    margin-left: -80px;
    }
    .products-title {
    left: 250px;
    }
    .see-more {
        left: 80px
    }

    .computer_texts {
        padding-left: 0px;
    }
    .computer-buttons {
        align-items: start;
        left: 25px;
    }

    .computer-pc {
    display: flex;
    position: relative;
    display: block;
    top: -30px;
    left: 30px;
    width: 300;
    height: auto;
    }
    .cp {
        height: 120vh;
    }

}





.review {
    display: flex;
    display: block;
    width: 100vw;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    padding-bottom: 100px;
    
}
.review-text-1 {
    position: relative;
    display: inline-block;
    top: 30px;
    bottom: 50px;
    left: 540px;
    font-family: 'Poppins-ExtraBold';
    margin-bottom: 30px;
    border-bottom: 1px solid #47ca94;
    
    
}

.review-texts {
    display: flex;
    display: block;
    position: relative;
    top: 50px;
    padding-left: 480px;
    margin-bottom: 15px;
}

.review-text-3 {
    width: 600px;

}
.review-img, .review-text-2, .review-text-3 {
    margin-bottom: 15px;

}
.form {
    margin-top: 20px;
    padding-bottom: 100px;
    background-image: url(@/assets/contact_g.jpg);
    width: 100vw;
    
}
.form-text-1 {
    position: relative;
    display: inline-block;
    left: 540px;
    font-family: 'Poppins-bold';
    margin-top: 50px;
    margin-bottom: 20px;
    border-bottom: 1px solid white;
    color: white;
}

.form-div {
    border: 1px solid white;
    margin-top: 20px;
    margin-left: 400px;
    height: 430px;
    width: 500px;
    padding: 10px;
    color: inherit;
    padding-top: 20px;
}

.input {
    width: 450px;
    height: 40px;
    margin: 10px;
    border: 1px solid white;
    background-color: inherit;
    color: white;
}

.input-1 {
    width: 450px;
    height: 80px;
    margin: 10px;
    border: 1px solid white;
    background-color: inherit;
}

input:focus {
    border: 1px solid white;
    color: white;
    padding-left: 10px;
    outline: none;
    border-radius: 10px;
}

input::placeholder {
    color: white;
    padding-left: 10px;
    padding-top: 20px;
}
.submit {
    left: 350px;
    width: 150px;
    height: 50px;
    margin-left: 170px;
    margin-top: 30px;
    border-radius: 50px;
    color: white;
    background-color: #47ca94;
    border: #47ca94;
}
.submit:hover {
    cursor: pointer;
    background-color: white;
    border: white;
    color: #47ca94;
}

footer {
    background-image: url(@/assets/footer.jpg);
    background-size: cover;
}
.footer-1 {
    padding-left: 150px;
    padding-right: 150px;
    height: 380px;
    width: 100vw;
    display: flex;
    align-items: center;

}


.footer-icons, .footer-text-1, .footer-text-2, .footer-newsletter {
    display: flex;
    display: block;
    margin: 10px;
    height: 200px;
    width: 500px;

}

.footer-icons {
    margin-left: -30px;
}

.icon {
position: relative;
width: 25px;
height: 25px;
margin: 5px;
color: #22142b;
background-color: white;
padding: 5px;
border: 1px solid grey;
border-radius: 100%;
top: -35px;
}
.icon-1 {
    position: relative;
    width: 35px;
    height: 35px;
    margin: 5px;
    color: white;
    top: -35px;
}

.icon:hover {
    width: 35px;
    height: 35px;
}
.icon-1:hover {
    width: 45px;
    height: 45px;
}
.logo1 {
    position: relative;
    width: 78px;
    height: 82px; 
    margin-bottom: 60px; 
}


.footer-icons {
    margin-top: -50px;

}

.footer-text-title {
    font-family: 'Poppins-bold';
    font-size: x-large;
    margin-bottom: 10px;

}

.footer-text-1, .footer-newsletter  {
    color: white;
    width: 500px;
    margin-left: 30px;
}

.footer-text-2 {
    color: white;
    margin-left: 20px;
    width: 340px;

}

.footer-newsletter {
    margin-left: 100px;
    width: 250px;
}

.newsletter-input {
    height: 40px;
    width: 250px;
    margin-bottom: 15px;
    border-radius: 10px;
    border: #ffffff;

}

.newsletter-input:focus {
    border: 1px solid white;
    color: #404241;
    padding-left: 10px;
    outline: none;
    border-radius: 10px;
}

.newsletter-input::placeholder {
    color: grey;
    padding-left: 10px;
    padding-top: 20px;
}

.newsletter-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 125px;
    height: 40px;
    padding: 10px;
    background-color: #47ca94;
    color: white;
    text-decoration: none;
    border: 1px solid #47ca94;
    border-radius: 10px;
}
.newsletter-button:hover {
    background-color: white;
    cursor: pointer;
    color: #47ca94;
}

.right-reserve {
    position: relative;
    color: white;
    text-align: center;
    display: inline-block;
    width: 1030px;
    margin-left: 120px;
    margin-right: 150px;
    height: 20px;
    top: -20px;
    padding-top: 10px;
    border-top: 1px solid #ffffff;
}








</style>