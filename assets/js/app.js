const home = `
<div class="banner">
<div class="navbar__wrapper">
    <span>myteam</span>
    <input type="checkbox" id="menu" />
    <label for="menu">
        <img class="menu_img" src="./icons/icon-hamburger.svg" alt="">
    </label>
    <nav id="items_navbar">
        <a href="#" onclick="onNavigate('/');" >home</a>
        <a href="#" onclick="onNavigate('/about');" >about</a>
        <button onclick="onNavigate('/contact');">contact</button>
    </nav>
</div>
<div class="banner-info">
    <h1>Find the best <span>talent</span></h1>
    <p>Finding the right people and building high performing teams can be hard. Most companies aren’t tapping into the abundance of global talent. We’re about to change that.</p>
</div>
<img class="img_banner" src="./icons/bg-pattern-home-2.svg" alt="" />
</div>
<section class="section">
    <img class="section__image-bg" src="./icons/bg-pattern-home-5.svg">
    <div class="section__line"></div>
    <h2>Build & manage distributed teams like no one else.</h3>
    <div class="section__qualities">
        <div class="section__qualities">
            <img src="./icons/icon-person.svg" alt="">
            <div class="section__qualities">
                <h3>Experienced Individuals </h3>
                <p>Our network is made up of highly experienced professionals who are passionate about what they do.</p>
            </div>
        </div>
        <div class="section__qualities">
            <img src="./icons/icon-cog.svg">
            <div class="section__qualities">
                <h3>Easy to Implement </h3>
                <p>Our processes have been refined over years of implementation meaning our teams always deliver. </p>
            </div>
        </div>

        <div class="section__qualities">
            <img src="./icons/icon-chart.svg">
            <div class="section__qualities">
                <h3>Enhanced Productivity </h3>
                <p>Our customized platform with in-built analytics helps you manage your distributed teams. </p>
            </div>
        </div>
    </div>
    <img class="image_qualities_bottom" src="./icons/bg-pattern-home-3.svg" alt="">
</section>
<section class="section2">
    <img src="./icons/bg-pattern-home-4-about-3.svg" alt="">
    <div class="section__persons">
        <h3>Delivering real results for top companies. Some of our <span>sucess stories</span></h3>
        <div class="section__persons-container">
            <p>“The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.” </p>
            <h4></h4>
            <h6></h6>
            <img src="./icons/avatar-kady.jpg" alt="">
        </div>
        <div class="section__persons-container">
            <p>“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”</p>
            <h4></h4>
            <h6></h6>
            <img src="./icons/avatar-aiysha.jpg" alt="">
        </div>
        <div class="section__persons-container">
            <p>“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”</p>
            <h4></h4>
            <h6></h6>
            <img src="./icons/avatar-arthur.jpg" alt="">
        </div>
    </div>
    <img id="end_persons" src="./icons/bg-pattern-home-5.svg" alt="">
</section>

<section class="section__contact">
    <h2>Ready to get started?</h2>
    <button>contact us</button>
    <img src="./icons/bg-pattern-home-6-about-5.svg">
</section>

<footer class="index-footer">
    <div class="footer_info">
        <div>
            <span>myteam</span>
            <nav class="footer__links">
                <a href="#" onclick="onNavigate('/');" >home</a>
                <a href="#" onclick="onNavigate('/about');" >about</a>
            </nav>
        </div>
        <div class="footer__data">
            <p>987 Hillcrest Lane</p>
            <p>Irvine, CA</p>
            <p>California 92714</p>
            <p>Call Us : 949-833-7432</p>
        </div>
    </div>
    <div class="footer_social">
        <div class="footer__social-icons">
            <img src="./icons/icon-facebook.svg" alt="">
            <img src="./icons/icon-pinterest.svg" alt="">
            <img src="./icons/icon-twitter.svg" alt="">
        </div>
        <div class="footer__copyr">
            <p>Copyright 2020. All Rights Reserved</p>
        </div>
    </div>
</footer>
`;

const about = `
<div class="navbar__wrapper">
<span>myteam</span>
<nav id="items_navbar">
    <a href="#" onclick="onNavigate('/');" >home</a>
    <a href="#" onclick="onNavigate('/about');" >about</a>
    <button onclick="onNavigate('/contact');">contact</button>
</nav>
</div>
<section class="about">
    <h1>About</h1>
    <div>
        <span></span>
        <p>We help companies build dynamic teams made up of top global talent. Using our network of passionate professionals we drive innovation and deliver incredible outcomes. Talented, diverse teams shape the best products and experiences. We’ll bring those teams to you.</p>
    </div>
    <img src="../icons/bg-pattern-about-1-mobile-nav-1.svg">
</section>
<section class="directors">
    <img src="../icons/bg-pattern-about-2-contact-1.svg" alt="">
    <h3>Meet the directors</h3>
    <div>
        <div class="person">
            <img src="../icons/avatar-nikita.jpg" alt="">
            <h6>Nikita Marks</h6>
            <p>Founder & CEO</p>
            <span></span>
        </div>
        <div class="person">
            <img src="../icons/avatar-christian.jpg" alt="">
            <h6>Cristian Duncan</h6>
            <p>Co-founder & COO</p>
            <span></span>
        </div>
        <div class="person">
            <img src="../icons/avatar-cruz.jpg" alt="">
            <h6>Cruz Hame</h6>
            <p>Co-founder & CTO</p>
            <span></span>
        </div>
        <div class="person">
            <img src="../icons/avatar-drake.jpg" alt="">
            <h6>Drake Heaton</h6>
            <p>Business Development Lead</p>
            <span></span>
        </div>
        <div class="person">
            <img src="../icons/avatar-griffin.jpg" alt="">
            <h6>Griffin Wise</h6>
            <p>Lead Marketing</p>
            <span></span>
        </div>
        <div class="person">
            <img src="../icons/avatar-aden.jpg" alt="">
            <h6>Aden Allan</h6>
            <p>Head of Talent</p>
            <span></span>
        </div>
    </div>
</section>
<section class="clients">
    <h1>Some of our clients</h1>
    <div>
        <img src="../icons/logo-the-verge.png">
        <img src="../icons/logo-jakarta-post.png">
        <img src="../icons/logo-the-guardian.png">
        <img src="../icons/logo-tech-radar.png">
        <img src="../icons/logo-gadgets-now.png">
    </div>
</section>
`;

const contact = `
<div>
<div class="navbar__wrapper">
    <span>myteam</span>
    <nav id="items_navbar">
        <a href="#" onclick="onNavigate('/');" >home</a>
        <a href="#" onclick="onNavigate('/about');" >about</a>
        <button onclick="onNavigate('/contact');">contact</button>
    </nav>
</div>
<section class="contact">
    <img src="../icons/bg-pattern-about-2-contact-1.svg">
    <div>
        <h1>Contact</h1>
        <p>Ask us about</p>
        <div>
            <img src="../icons/icon-person.svg">
            <p>The Quality of our talent network</p>
        </div>
        <div>
            <img src="../icons/icon-cog.svg">
            <p>Usage & implementation of our software</p>
        </div>
        <div>
            <img src="../icons/icon-chart.svg">
            <p>How we help drive innovation</p>
        </div>
    </div>
    <form>
        <label for="name">Name</label>
        <input type="text" id="from_name"></input>
        <label for="email">Email Address</label>
        <input type="text" id="email_user"></input>
        <label for="company">Company Name</label>
        <input type="text" id="company_name"></input>
        <label for="title">Title</label>
        <input type="text" id="title_message"></input>
        <label for="message">Message</label>
        <textarea id="message"></textarea>
        <button onclick="sendMail()">submit</button>
    </form>
    <img src="../icons/bg-pattern-contact-2.svg">
</section>
<footer class="footer-contact">
    <div class="footer_info_contact">
        <span>myteam</span>
        <nav class="footer__links_contact">
            <a href="#" onclick="onNavigate('/');" >home</a>
            <a href="#" onclick="onNavigate('/about');" >about</a>
        </nav>
    </div>
    <div class="footer__data_contact">
        <p>987 Hillcrest Lane</p>
        <p>Irvine, CA</p>
        <p>California 92714</p>
        <p>Call Us : 949-833-7432</p>
    </div>
    <div class="footer_social_contact">
        <div class="footer__social-icons_contact">
            <img src="../icons/icon-facebook.svg" alt="">
            <img src="../icons/icon-pinterest.svg" alt="">
            <img src="../icons/icon-twitter.svg" alt="">
        </div>
        <div class="footer__copyr_contact">
            <p>Copyright 2020. All Rights Reserved</p>
        </div>
    </div>
</footer>
</div>
`;

const routes = {
  "/": home,
  "/contact": contact,
  "/about": about,
};

const rootDiv = document.getElementById("root");

const onNavigate = (_pathname) => {
  window.history.replaceState(null, null, _pathname);
  window.history.pushState(null, _pathname, _pathname);
  rootDiv.innerHTML = routes[_pathname];
};
