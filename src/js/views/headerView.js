const header = document.querySelector(".header");

// Markup for mobile header
const mobileHeader = `
<span class="material-icons-outlined header__icon-light">
more_horiz
</span>
<img src="src/img/multitrack-logo-sm.svg"/>
<div class="header__mobile-icons">
<span class="material-icons-outlined header__icon-light" style="font-size:1.7rem;">
search
</span>
<span class="header__icon-light material-icons">perm_identity
</span>
</div>
`;

// Check For Screen Width < 1200px
const tabletLandscapeWidth = window.matchMedia("(max-width: 1200px");

// Original header markup
const originalHeader = document.querySelector("header").innerHTML;

// Do this when screen width < 1200px
const headerMQHandler = () => {
	if (tabletLandscapeWidth.matches) {
		header.innerHTML = mobileHeader;
	} else {
		header.innerHTML = originalHeader;
	}
};

// Calling function at runtime
headerMQHandler();

tabletLandscapeWidth.addEventListener("change", headerMQHandler);
