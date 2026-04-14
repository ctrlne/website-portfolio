// components.js

class SiteNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav id="navbar">
            <div class="nav-content">
                <a href="index.html" class="logo">
                    <span class="desktop-logo">CLAIRE ANTONETTE</span>
                    <span class="mobile-logo">CA</span>
                </a>
                
                <div class="nav-center">
                    <ul class="nav-links">
                        <li><a href="index.html#home">HOME</a></li>
                        <li><a href="index.html#archive">ARCHIVE</a></li>
                        <li><a href="index.html#about">ABOUT ME</a></li>
                    </ul>
                </div>

                <div class="nav-right">
                    <button id="theme-toggle" class="theme-switch" title="Toggle Dark Mode">
                        <i class="fa-solid fa-sun light-icon"></i>
                        <i class="fa-solid fa-moon dark-icon"></i>
                        <span class="switch-thumb"></span>
                    </button>
                    <a href="docs/resume_ojt.pdf" target="_blank" class="resume-circle" title="View Resume">
                        <i class="fa-solid fa-file-lines"></i>
                    </a>
                </div>
            </div>
        </nav>
        `;
    }
}

class SiteFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
            <div class="footer-top">
                <div class="footer-feel-free">
                    <h4>Feel free to reach out! :D</h4>
                </div>
                <div class="footer-nav">
                    <a href="index.html#home">HOME</a>
                    <a href="index.html#archive">ARCHIVE</a>
                    <a href="index.html#about">ABOUT ME</a>
                </div>
            </div>
            <div class="footer-line"></div>
            <div class="footer-bottom">
                <div class="contact-info">
                    <p>Contact me:</p>
                    <p>mendozaclaireantonette791@gmail.com</p>
                </div>
                <div class="copyright">
                    <p>&copy; 2026 ClaireAntonette. All rights reserved.</p>
                </div>
            </div>
        </footer>
        `;
    }
}

customElements.define('site-navbar', SiteNavbar);
customElements.define('site-footer', SiteFooter);