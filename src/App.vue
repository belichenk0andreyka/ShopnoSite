    <template>
      <div id="app">
        <div class="firstPath" id="scrollFirstPath">
          <div class="appbar">
            <div class="logo"><p>SH<span>O</span>PNO</p></div>
            <nav>
              <transition name="fade" mode="out-in">
                <img  src="src/assets/menu.png" 
                      class="material-icons menu" 
                      v-if="!show"
                      @click="show = !show"
                      key="menu">
                <img  src="src/assets/clear1.png" 
                      class="material-icons clear"
                      width="30px;" 
                      v-else
                      @click="show = !show"
                      key="clear">
              </transition>
              <transition name="fade">
                <ul v-if="show">
                  <li class="item"><a href="#aboutUS"><p>About us</p></a></li>
                  <li class="item"><a href="#scrollWorks"><p>Our Works</p></a></li>
                  <li class="item"><a href="#scrollServices"><p>Our Services</p></a></li>
                  <li class="item"><a href="#scrollTeam"><p>Our Team</p></a></li>
                  <li class="item"><a href="#scrollConnection"><p>Contacts</p></a></li>
                </ul>
              </transition>
            </nav>
          </div>
          <div class="introduction">
            <div class="shopnoName"><p>SAY HELLO TO <span>SHOPNO!</span></p></div>
            <div class="agencyName"><p><span>AGENCY</span> CORPORATE SHOPNO THEME</p></div>
            <div class="contactUs">
              <button>CONTACT US</button>
            </div>
            <div><a href="#scrollFirstPath"><img src="src/assets/arrowToTop.png" class="arroToTop"></a></div>
            <div class="glass"><img src="src/assets/glass.png"></div>
            
          </div>
        </div>
          <div id="aboutUS">

            <div class="aboutUS1">
              <div class="nameAboutUs"><p>About Us</p></div>
              <div class="underNameOfAboutUs">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>

            <div class="aboutUS2">
              <div class="picture"><img src="src/assets/chair.png"></div>
                <div class="informationBlock"> 
                  <div class="title1"><p>We actually do Amazing Works</p></div>
                  <div class="text1">
                    <p>A visual approach is an approach to a runway at an airport 
                      conducted under instrument flight rules. The pilot must at all times have either the airport or the preceding aircraft in approach correct sight. conducted under instrument flight rules. The pilot must at all times.
                      </p>
                  </div>
                  <div class="text2">
                    <p>Preceding aircraft in approach correct sight. 
                      conducted under instrument flight rules
                    </p>
                  </div>
                  <div class="title2"><p>Why are the Great</p></div>
                  <div class="text3">
                    <p>
                        A visual approach is an approach to a runway at an airport 
                        conducted under instrument flight rules.
                        The preceding aircraft in approach correct sight.
                      </p>
                  </div>
                </div>
            
            </div>

          </div>

          <div class="ourWorks" id="scrollWorks">
            <div class="nameWorks"><p>Feature Works</p></div>
            <div class="underNameWorks"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></div>
            <div class="allPictWork">
              <div class="pictWork pictWork1"><img src="src/assets/pictWork1.png"></div>
              <div class="pictWork pictWork2"><img src="src/assets/pictWork2.png"></div>
              <div class="pictWork pictWork3"><img src="src/assets/pictWork3.png"></div>
              <div class="pictWork pictWork4"><img src="src/assets/pictWork4.png"></div>
              <div class="pictWork pictWork5"><img src="src/assets/pictWork5.png"></div>
              <div class="pictWork pictWork6"><img src="src/assets/pictWork6.png"></div>
            </div>
          </div>

          <div class="ourServices" id="scrollServices">
            <div class="nameWorks"><p>Our Services</p></div>
            <div class="underNameWorks"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></div>
            <div class="picturesOfServices">
              <div class="picturesOfServices1">
                <div class="pictService1">
                  <div class="service1_firstText"><p>Designing is the cool love for.</p>
                  </div>
                  <div class="service1_secondText">
                    <p>Our most popular service is our Virtual Receptionist. We know that sometimes it’s something and you middle most this job was posted less than five minutes ago, and we think it’s a good match for you. If you submit a proposal now, you’ll be one of the first candidates. You may even catch the client while they’re still online.
                    </p>
                  </div>
                  <div class="service1_clear"><img src="src/assets/clear1.png" alt="clear"></div>
                </div>
                <div class="pictService2">
                  <div class="service2_firstText"><p>Cool psd Design</p></div>
                  <div class="service2_secondText"><p>Our most popular service is our we know that something it's something and you middle most.</p></div>
                  <div class="service2_thirdTextandArrow">
                    <p>Know more</p>
                    <img src="src/assets/arrow.png" alt="">
                  </div>
                </div>
                <div class="pictService3">
                  <div class="service2_firstText"><p>Design is the cool</p></div>
                  <div class="service2_secondText"><p>Our most popular service is our Virtual Receptionist. We know that...</p></div>
                  <div class="service2_thirdTextandArrow">
                    <p>Know more</p>
                    <img src="src/assets/arrow.png" alt="">
                  </div>
                </div>
                <div class="pictService4">
                  <div class="service2_firstText"><p>Cool psd html korl</p></div>
                  <div class="service2_secondText"><p>Our most popular service is our we know that something it's something and you middle most.</p></div>
                  <div class="service2_thirdTextandArrow">
                    <p>Know more</p>
                    <img src="src/assets/arrow.png" alt="">
                  </div>
                </div>
              </div>
              <div class="picturesOfServices2">
                <div class="pictService5">
                  <div class="service2_firstText"><p>Cool psd Design</p></div>
                  <div class="service2_secondText"><p>Our most popular service is our new virtual. Receptionist you middle most...</p></div>
                  <div class="service2_thirdTextandArrow">
                    <p>Know more</p>
                    <img src="src/assets/arrow.png" alt="">
                  </div>
                </div>
                <div class="pictService6">
                  <div class="service2_firstText"><p>Designing is the cool for</p></div>
                  <div class="service2_secondText"><p>Our most popular service is our we know that something it's something and you middle most.</p></div>
                  <div class="service2_thirdTextandArrow">
                    <p>Know more</p>
                    <img src="src/assets/arrow.png" alt="">
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="ourTeam ourWorks" id="scrollTeam">
            <div class="nameWorks"><p>Small Team</p></div>
            <div class="underNameWorks"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></div>
            <div class="allPictWork">
              <div class="pictWorker pictWork pictWorker1"><img src="src/assets/photosOfWorker1.png" alt=""></div>
              <div class="pictWorker pictWork pictWorker2"><img src="src/assets/photosOfWorker2.png" alt=""></div>
              <div class="pictWorker pictWork pictWorker3"><img src="src/assets/photosOfWorker3.png" alt=""></div>
              <div class="pictWorker pictWork pictWorker4"><img src="src/assets/photosOfWorker4.png" alt=""></div>
              <div class="pictWorker pictWork pictWorker5"><img src="src/assets/photosOfWorker5.png" alt=""></div>
              <div class="pictWorker pictWork pictWorker6"><img src="src/assets/photosOfWorker1.png" alt=""></div>
            </div>
          </div>

          <div class="comments ourWorks" id="scrollWorks">
            <div class="nameComments nameWorks"><p>What They says</p></div>
            <div class="nameUnderComments underNameWorks "><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></div>
            <div class="blockWithSliderAndText">
              <div class="nav_slider">
                  <div class="circle circle1" @click="switchView('firstPerson')"></div>
                  <div class="circle circle2" @click="switchView('secondPerson')"></div>
                  <div class="circle circle3" @click="switchView('thirdPerson')"></div>
                  <div class="circle circle4" @click="switchView('fourthPerson')"></div>
              </div>
          <component :is="currentView" transition="switch"></component>
            </div>
          </div>
          
          <div class="brends"></div>
          
          <div class="connection" id="scrollConnection">
            <div class="connection_areas">
              <div class="name_area"><input type="text" placeholder="Name"></div>
              <div class="subject_area"><input type="text"placeholder="Subject"></div>
              <div class="email_area"><input type="text"placeholder="E-Mail"></div>
              <div class="message_area"><textarea placeholder="Message"></textarea></div>
              <div><button class="connection_button">Send Message</button></div>
            </div>
            <div class="contactsAndMap">
                <div class="contacts">
                  <p class="contacts1">Address line 1</p>
                  <p>Address line 2</p>
                  <p>Phone: +548945645</p>
                  <p>Fax: +45645654546</p>
                  <p class="contacts5">Web: www.designagency.net</p>
                  <p>E-mail: info@designagency.net</p>
                </div>
                <div id="map">
                  <google-map />
                </div>
            
            </div>
            </div>
            <footer class="footer">
              <div class="follow">
                <p>Follow us</p>
              </div>
              <div class="socsety">
                <img src="src/assets/twitter.png"class="twitter">
                <img src="src/assets/facebook.png"class="facebook">
                <img src="src/assets/ball.png"class="ball">
              </div>
              <div class="copyright">
                <p>Copyright Masum Parvej. All Rights Reversed</p>
              </div>
            </footer>
        </div>
      </div>
    </template>

    <script>
      import FirstPerson from './components/firstPerson.vue'
      import SecondPerson from './components/secondPerson.vue'
      import ThirdPerson from './components/thirdPerson.vue'
      import FourthPerson from './components/fourthPerson.vue'
      import GoogleMap from "./components/GoogleMap.vue"

    export default {
      name: 'app',
      data () {
        return {
          show: false,
          currentView: 'firstPerson'
        }
      },
      components: {
        firstPerson: FirstPerson,
        secondPerson: SecondPerson,
        thirdPerson: ThirdPerson,
        fourthPerson: FourthPerson,
        GoogleMap
      },
      methods: {
        switchView: function(view){
          this.currentView = view
        }
  }
}
      
    </script>


    <style>
      @import url('https://fonts.googleapis.com/css?family=Merriweather|Montserrat|Raleway&display=swap');
      /*font-family: 'Montserrat', sans-serif;
      font-family: 'Merriweather', serif;
      font-family: 'Raleway', sans-serif;*/
      html{
        scroll-behavior: smooth;
      }

      body{
        margin: 0;
        padding: 0;
      }
      .firstPath{
        width: 100%;
        height: 715px;
        background-color: #eff0f2;
      }

      .appbar{
        display: flex;
        justify-content: space-between;
      }
      .appbar .logo{
        margin: 1% auto auto 10%;
        border: 5px solid black;
        padding: 7px;
      }
      .appbar .logo p{
        font-size: ;
        font-weight: 900;
        font-family: 'Montserrat', sans-serif;
      }
      .appbar .logo p span{
        color: #77efe5;
        font-size: 20px;
      }
      .appbar .menu{
        margin: 26% 3.5% auto auto;; 
      }
      nav{
        display: grid;
        flex-direction: row;
        justify-content: center;
        position: relative;
        width: 200px;
        height: 50px;
        padding-top: 15px;
        transition: background .5s;

      }
      nav:hover{
        background: #585555;
      }
      ul{
        align-self: flex-start;
        background: #eee;
        margin: 0;
        padding: 0;
        position: absolute;
        top: 60px;
        width: 100%;
      }
      li{
        align-items: right;
        color: #000;
        cursor: pointer;
        display: flex;
        padding-top: 5px;
        padding-bottom: 5px;
        font-size: 1.5em;
        height: 40px;
        justify-content: center;
        list-style-type: none;
        text-transform: uppercase;
        transition: all .3s ease;
        font-size: 15px;
      }
      li:hover{
        background-color: #585555;
        color: #dadede;
      }
      a:hover{
        color: #dadede;
        text-decoration: none;
      }
      a{
        color: black;
        text-decoration: none;
      }
      .fade-enter-active, .fade-leave-active{
        transition: opacity .3s ease;
      }
      .fade-enter, .fade-leave-to{
        opacity: 0;
      }
      .menu, .clear{
        cursor: pointer;
        transition: all .3s ease;
        color: #fff;
      }
      .clear{
        background-color: white;
        border-radius: 70%
      }
      @media screen and (max-width: 800px){
        .appbar .menu{
          margin-top: 5%;
        }
      }
      .introduction{
        display: grid;
        grid-template-columns: 100% ;
        grid-template-rows: 170px 100px 150px 150px ;
        justify-items: center;
        align-items: center;
      }
      .shopnoName, .agencyName, .contactUs, .glass{
        align-self: end;
      }
      .glass{
        margin-top: -250px;
        margin-left: 75%;
        margin-right: 25%;
      }

      .shopnoName p{
        font-family: 'Montserrat', sans-serif;
        font-size: 45pt;
        font-weight: bold;
        text-align: center;
        color: #505050;

      }
      .agencyName p{
        font-family: 'Montserrat', sans-serif;
        font-size: 45pt;
        font-weight: bold;
        color: #505050;
        text-align: center;
      }
      .shopnoName p span, .agencyName p span{
        color: #505050;
        background-color: #b2f2ee;
      }
      @media screen and (max-width: 1200px){
          .shopnoName p, .agencyName p{
            font-size: 30pt;
          }
          .introduction{
            grid-template-rows: 170px 200px 150px 150px ;
          }
      }

      .contactUs button{
        width: 105%;
        height: 50px;
        background-color: #eff0f2;
        border: 1.5px solid #505050;
        font-size: 18pt;
        font-family: 'Montserrat', sans-serif;
        color: #505050;
        transition: color .3s, background .5s;
        grid-gap-top: 50px;
      }
      .contactUs button:hover{
        background-color: #505050;
        color: #e6e6e6;
      }

      @media screen and (max-width: 1216px){ 
        div a img{ 
          display: none;
        }
      }
    div a img{
        width: 70px;
        position: fixed;
        margin-top: -10px;
        margin-left: 45%;
        margin-right: 35%;
      }

      #aboutUS{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        background-color: #f8fafa;
        padding-bottom: 170px;
        margin-bottom: 100px;
      }



      @media (min-width: 700px){
      .aboutUS2{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
    }
      .nameAboutUs{
        flex: 3;
        height: 150px;
      }
      .nameAboutUs p{
        font-size: 38pt;
        font-weight: bold;
        font-family: 'Montserrat', sans-serif;
        text-align: center;
        padding-top: 90px;
        text-transform: uppercase;
      }
      .underNameOfAboutUs{
        flex: 3;
      }
      .underNameOfAboutUs p{
        font-size: 18pt;
        font-family: 'Merriweather', serif;
        text-align: center;
        color: #848585;
        text-transform: uppercase;
      }
      .picture{
        flex: 2;
      }
      .informationBlock{
        flex: 2;
      }
      .picture img{
        margin-top: 100px;
        padding-left: 16%;
        padding-right: 8%;
        max-width: 100%;
        box-sizing: border-box;
      }
      .informationBlock .title1{
        margin: 100px 12% auto 30px;
      }
      .informationBlock .title1 p{
        text-align: center;
        font-size: 20pt;
        font-family: 'Merriweather', serif;
        color: #646565;
        text-transform: uppercase;
        font-weight: bold;
      }
      .informationBlock .text1{
        margin: 33px 12% auto 30px;
      }
      .informationBlock .text1 p{
        font-size: 16pt;
        font-family: 'Raleway', sans-serif;
        color: #848585;
        font-height: 28pt;
      }
      .informationBlock .text2{
        margin: 40px 12% auto 30px;
      }
      .informationBlock .text2 p{
        font-size: 16pt;
        font-family: 'Raleway', sans-serif;
        color: #848585;
        font-height: 28pt;
      }
      .informationBlock .title2{
        margin: 40px 12% auto 30px;
      }
      .informationBlock .title2 p{
        text-align: center;
        font-size: 20pt;
        font-family: 'Merriweather', serif;
        color: #646565;
        text-transform: uppercase;
        font-weight: bold;
      }
      .informationBlock .text3{
        margin: 40px 12% auto 30px;
      }
      .informationBlock .text3 p{
        font-size: 16pt;
        font-family: 'Raleway', sans-serif;
        color: #848585;
        font-height: 28pt;
      }

      .ourWorks{
        display: flex;
        flex-direction: column;
        margin-bottom: 240px;
      }





      .nameWorks p{
        font-size: 38pt;
        font-weight: bold;
        font-family: 'Montserrat', sans-serif;
        text-align: center;
        text-transform: uppercase;
      }




      .underNameWorks p{
        font-size: 17pt;
        font-family: 'Merriweather', serif;
        text-align: center;
        color: #848585;
        text-transform: uppercase;
      }
      .picturesOfWorks1{
        margin-top: 70px;
      }

      .pictWork img{
        max-width: 100%;
        box-sizing: border-box;
      }
      @media screen and (min-width: 1200px){
      .allPictWork{
        margin-top: 80px;
        padding-left: 12%;
        padding-right: 8%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        justify-content: center;
        align-content: center;
      }
    }
    @media screen and (max-width: 1200px){
      .allPictWork{
        margin-top: 80px;
        padding-left: 12%;
        padding-right: 8%;
        display: grid;
        grid-column-gap: 10px;
        grid-template-columns: 1fr 1fr;
        justify-content: center;
        align-content: center;
      }
    }
    @media screen and (max-width: 750px){
      .allPictWork{
        margin-top: 80px;
        padding-left: 12%;
        padding-right: 8%;
        display: grid;
        grid-template-columns: 1fr;
        justify-content: center;
        align-content: center;
      }
    }
    .picturesOfServices{
      margin-top: 80px;
      padding-left: 12%;
      padding-right: 8%;
      display: grid;
      grid-column-gap: 10px;
      grid-template-rows: 2fr 1fr;
      justify-content: center;
      align-content: center;
    }
    .pictService1{
      max-width: 650px;
      background-color: #71f5ea;
    }
    .pictService2{
      background-image: url("assets/pictService2.png");
      margin-bottom: 5px;

    }
    .pictService3{
      background-image: url("assets/pictService3.png");
      margin-bottom: 5px;
    }
    .pictService4{
      background-image: url("assets/pictService4.png");
    }
    .pictService5{
      background-image: url("assets/pictService5.png");
      margin-bottom: 5px;
    }
    .pictService6{
      background-image: url("assets/pictService6.png");
      background-position: cover;
    }
    @media screen and (min-width: 1200px){
    .picturesOfServices1{
      margin-top: 0px;
      display: grid;
      grid-column-gap: 10px;
      grid-template-columns: 5fr 4fr;
      justify-content: center;
    }
    .picturesOfServices2{
      margin-top: 0px;
      display: grid;
      grid-column-gap: 10px;
      grid-template-columns: 4fr 5fr;
      justify-content: center;
    }
  }
    .service1_firstText{
      margin: 60px 8% 40px 5%;
    }
    .service1_firstText p{
      font-size: 20pt;
      font-family: 'Merriweather', serif;
      color: #1d4a47;
      text-transform: uppercase;
      font-weight: bold;
    }
    .service1_secondText{
      margin: 0px 8% 25px 5%;
    }
    .service1_secondText p{
      font-size: 16pt;
      font-family: 'Raleway', sans-serif;
      color: #1d4a47;
      font-height: 28pt;
    }
    .service1_clear{
      margin-left: 5%;
    }
    .service1_clear img{
      width: 40px;
      height: 40px;
    }
    .service2_firstText{
      padding: 150px 14% 22px 5%; 
    }
    .service2_firstText p{
      text-transform: uppercase;
      font-family: 'Merriweather', serif;
      color: white;
      font-weight: bold;  
      font-size: 20pt;
    }
    .service2_secondText{
      padding: 0px 14% 10px 5%; 
    }
    .service2_secondText p{
      font-size: 16pt;
      font-family: 'Raleway', sans-serif;
      color: #ebebeb;
      font-height: 28pt;
    }
    .service2_thirdTextandArrow{
      padding: 30px 14% 0px 5%; 
      width: 250px;
      display: flex;
      justify-content: row;
    }
    .service2_thirdTextandArrow p{
      font-size: 18pt;
      font-family: 'Raleway', sans-serif;
      color: #ebebeb;
      font-height: 28pt;
      text-transform: uppercase;
    }
    .service2_thirdTextandArrow img{
      width: 40px;
      margin-left: 10%;
    }
    .pictService1, .pictService2, .pictService3, .pictService4, .pictService5, .pictService6{
      max-width: 100%;
      box-sizing: border-box;
      background-size: cover;
      padding-bottom: 20px;
    }
    .ourTeam{
      margin-top: 100px;
      margin-bottom: 100px;
    }
    .pictWorker{
      width: 375px;
      height: 440px;
      margin-top: 5px;
    }
    .pictWorker2, .pictWorker5{
      width: 365px;
      margin-top: 5px;
    }
    .pictWorker1, .pictWorker6{
      margin-left: -5px;
    }
    .comments{
      width: 100%;
      background-color: #f9fbfb;
      margin-bottom: 0px;
    }
    .nameComments{
      margin-top: 100px;
    }

  .nav_slider {
      display: flex;
      max-width: 325px;
      box-sizing: border-box;
      margin: 30px auto 80px auto;
  }
  .circle{
      width: 50px;
      height: 10px;
      background-color: #d0d0d0;
      border-radius: 20%;
      position: absolute;
      transition: height .3s; 
    }

  .circle1{
      margin-left: 10px;
    }
    .circle2{
      margin-left: 90px;
    }
    .circle3{
      margin-left: 170px;
    }
    .circle4{
      margin-left: 250px;
    }
    .circle:hover {
      background-color: #71f6eb;
      width: 60px;
      height: 15px;
      cursor: pointer;
    }
  @media screen and (min-width: 750px){
  #person {
      margin: auto 5% 0px 14%;
      display: flex;
      justify-content: column;

  }
  }



  .rightPartOfSlide{
    margin-left: 8%;
    padding-bottom: 40px;
    margin: 30px 10% 223px 8%;
    background-color: #eaebed;
    border-radius: 1%;
  }
  .rightPartOfSlide1{
    padding-bottom: 40px;
    margin: 30px 10% 223px 8%;
    background-color: #eaebed;
    border-radius: 1%;
  }
  .textInSlide{
    text-align: center; 
    padding: 40px 6% 30px 6%;
  }
  .textInSlide_name{
    font-family: 'Merriweather', serif;
    font-size: 25pt;
    margin-top: 50px;
    font-weight: bold;
    font-height: 28pt;
    margin-bottom: 30px;
  }
  .textInSlide_description{
    font-family: 'Raleway', sans-serif;
    font-size: 16pt;
    font-height: 27pt;
    color: #909192;
  }
  .starInSlide{
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .starInSlide img{
    margin-right: 10px;
    width: 20px;
  }

  .brends{
    height: 150px;
    background-image: url(/src/assets/brends.jpg);
    background-position: center;
    padding-bottom: 30px;
    margin: 50px auto 50px auto;
  }

  @media screen and (min-width: 1200px){
  .connection{
    background-image: url(/src/assets/background_christmas.png);
    height: 500px;
    background-size: cover;
    display: flex;
    justify-content: column;
    padding: 125px 10% 125px 10%;
  }
}
.connection{
    background-image: url(/src/assets/background_christmas.png);
    min-height: 500px;
    max-height: 100%;
    /*justify-content: column;*/
    padding: 125px auto 125px auto;
  }

    .connection_areas, .contactsAndMap{
      height: 464px;
      width: 42%;
      opacity: 0.8;
      background-color: #465762;
      padding-top: 30px;
      padding-right: 30px;
      padding-left: 30px;
      margin-top: 20px;
      margin-right: auto;
      margin-left: auto;
    }
    input[type="text"], .message_area textarea{
      background-color: transparent;
      width: 97%;
      border-top: 0px;
      border-right: 0px;
      border-left: 0px;
      border-bottom: 2px solid #a0aab2;
      margin-top: 15px; 
      font-size: 15pt;
      line-height:30pt;
      height: 30pt;
      padding-left: 10px;
      color: #a0aab2; 
      font-family: 'Raleway', sans-serif;
    }
    .message_area textarea{
      height: 120px;
    }
    input[type="text"]::placeholder, textarea::placeholder { 
      color: #a0aab2; 
      font-family: 'Raleway', sans-serif;
    } 

    .connection button{
      width: 45%;
      height: auto;
      font-size: 18pt;
      font-family: 'Montserrat', sans-serif;
      color: #2e6b66;
      background-color: #6eeee4;
      border: 0px;
      border-radius: 2px;
      cursor: pointer;
    }

/*    .contactsAndMap{
      margin-left: 2%;
    }*/
    .contacts .contacts1{
      padding-top: 40px;
    }
    .contacts p{
      font-family: 'Raleway', sans-serif;
      font-size: 13pt;
      color: #8f979d;
      margin-top: -10px;
    }
    .contacts .contacts5{
      padding-top: 40px;
    }
    .footer{
      text-align: center;
      height: 273px;
      width: 100%;
      background-color: #262b2e;
      padding-top: 40px;
      margin-top: 10px;
    }
    .socsety img{
      margin-right: 10px;
    }
    .follow p{
      font-size: 16pt;
      font-family: 'Raleway', sans-serif;
      color: white;
      text-transform: uppercase;
    }
    .copyright p{
      font-size: 16pt;
      font-family: 'Raleway', sans-serif;
      color: #6a6d6e;
      padding-top: 20px;
    }
    
    </style>

