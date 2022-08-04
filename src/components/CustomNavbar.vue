<template>
    <header :class="{ 'scrolled-nav': scrolledNav }">
        <nav>
            <div class="branding">
                <router-link class="link" :to="{ name: 'home' }">
                    <h1>Kimio Nishino</h1>
                </router-link>
            </div>
            <ul v-show="!mobile" class="navigation">
                <li>
                    <router-link class="link" :to="{ name: '' }">About</router-link>
                </li>
                <li>
                    <router-link class="link" :to="{ name: '' }">Projects</router-link>
                </li>
                <li>
                    <router-link class="link" :to="{ name: 'contact' }">Contact</router-link>
                </li>
            </ul>
            <div class="icon">
                <i @click="toggleMobileNav" v-show="mobile" class="far fa-bars" :class="{ 'icon-active': mobileNav }">
                </i>
            </div>
            <transition name="mobile-nav">
                <ul v-show="mobileNav" class="dropdown-nav">
                    <li>
                        <router-link @click="toggleMobileNav" class="link" :to="{ name: '' }">About</router-link>
                    </li>
                    <li>
                        <router-link @click="toggleMobileNav" class="link" :to="{ name: '' }">Projects</router-link>
                    </li>
                    <li>
                        <router-link @click="toggleMobileNav" class="link" :to="{ name: 'contact' }">Contact
                        </router-link>
                    </li>
                </ul>
            </transition>
        </nav>
    </header>
</template>

<script>
import { ref } from 'vue'

export default {
    setup () {
        // reactive data
        const scrolledNav = ref(null)
        const mobileNav = ref(null)
        const mobile = ref(null)
        const windowWidth = ref(null)

        // methods
        function toggleMobileNav () {
            mobileNav.value = !mobileNav.value
        }

        function checkScreen () {
            windowWidth.value = window.innerWidth
            if (windowWidth.value < 768) {
                mobile.value = true
            } else {
                mobile.value = false
            }
        }

        function updateScroll () {
            if (window.scrollY > 80) {
                scrolledNav.value = true
            } else {
                scrolledNav.value = false
            }
        }

        // 'created' callouts
        window.addEventListener('resize', checkScreen)
        window.addEventListener('scroll', updateScroll)

        return {
            scrolledNav,
            mobileNav,
            mobile,
            windowWidth,
            toggleMobileNav
        }
    }
}

</script>

<style scoped>
@media (min-width: 1140px) {
    nav {
        width: 1140px;
    }
}

header {
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 99;
    width: 100%;
    position: fixed;
    transition: 0.5s ease all;
    color: #fff;
}

nav {
    display: flex;
    flex-direction: row;
    padding: 12px 0;
    transition: 0.5s ease all;
    width: 90%;
    margin: 0 auto;
    position: relative;
}

nav ul,
.link {
    font-weight: 500;
    color: #fff;
    list-style: none;
    text-decoration: none;
}

nav li {
    text-transform: uppercase;
    padding: 16px;
    margin-left: 16px;
}

.link {
    font-size: 14px;
    transition: 0.5s ease all;
    padding-bottom: 4px;
    border-bottom: 1px solid transparent;
}

.link:hover {
    color: #00ea7d;
    border-color: #00ea7d;
}

.branding {
    display: flex;
    align-items: center;
}

.branding h1 {
    font-size: 3em;
    border-bottom: 1px solid transparent;
    transition: 0.5s ease all;
}

@media (max-width: 365px) {
    .branding h1 {
        font-size: 2em;
    }
}

.navigation {
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: flex-end;
}

.icon {
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    right: 24px;
    height: 100%;
}

nav i {
    cursor: pointer;
    font-size: 24px;
    transition: 0.8s ease all;
}

nav .icon-active {
    transform: rotate(180deg);
}

/* Animation for the hamburger menu */
nav .mobile-nav-enter-active,
nav .mobile-nav-leave-active {
    transition: 1s ease all;
}

nav .mobile-nav-enter-from,
nav .mobile-nav-leave-to {
    transform: translateX(-250px);
}

nav .mobile-nav-enter-to {
    transform: translateX(0);
}

nav .mobile-nav-leave-to {
    transform: translateX(-250px);
}

/* Hamburger menu */
.dropdown-nav {
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 100%;
    max-width: 250px;
    background-color: #fff;
    box-shadow: rgba(6px 5px 28px -4px rgba(0, 0, 0, 0.73));
    top: 0;
    left: 0;
    height: 100%;
}

.dropdown-nav li {
    margin-left: 0;
}

.dropdown-nav li .link {
    color: #000;
}

/* Dark mode for hamburger menu */
@media (prefers-color-scheme: dark) {
    .dropdown-nav {
        background-color: var(--dark-mode-bg);
    }

    .dropdown-nav li .link {
        color: var(--dark-mode-text);
    }
}

/* Animation for resizing navbar when scrolling */
.scrolled-nav {
    background-color: #000;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.scrolled-nav nav {
    padding: 8px 0;
}

.scrolled-nav nav .branding h1 {
    font-size: 2em;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
</style>
