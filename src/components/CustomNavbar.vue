<template>
    <header :class="{ 'scrolled-nav': scrolledNav }">
        <nav>
            <div class="branding">
                <img src="../assets/logo.png">
            </div>
            <ul v-show="!mobile" class="navigation">
                <li>
                    <router-link class="link" :to="{ name: 'home' }">Home</router-link>
                </li>
                <li>
                    <router-link class="link" :to="{ name: '' }">About</router-link>
                </li>
                <li>
                    <router-link class="link" :to="{ name: '' }">Projects</router-link>
                </li>
                <li>
                    <router-link class="link" :to="{ name: '' }">Contact</router-link>
                </li>
            </ul>
            <div class="icon">
                <i @click="toggleMobileNav" v-show="mobile" class="far fa-bars" :class="{ 'icon-active': mobileNav }">
                </i>
            </div>
            <transition name="mobile-nav">
                <ul v-show="mobileNav" class="dropdown-nav">
                    <li>
                        <router-link class="link" :to="{ name: 'home' }">Home</router-link>
                    </li>
                    <li>
                        <router-link class="link" :to="{ name: '' }">About</router-link>
                    </li>
                    <li>
                        <router-link class="link" :to="{ name: '' }">Projects</router-link>
                    </li>
                    <li>
                        <router-link class="link" :to="{ name: '' }">Contact</router-link>
                    </li>
                </ul>
            </transition>
        </nav>
    </header>
</template>

<script>

export default {
    name: 'CustomNavbar',
    data () {
        return {
            scrolledNav: null,
            mobile: null,
            mobileNav: null,
            windowWidth: null
        }
    },
    mounted () {
        window.addEventListener('scroll', this.updateScroll)
    },
    created () {
        window.addEventListener('resize', this.checkScreen)
        this.checkScreen()
    },
    methods: {
        toggleMobileNav () {
            this.mobileNav = !this.mobileNav
        },
        checkScreen () {
            this.windowWidth = window.innerWidth
            if (this.windowWidth < 768) {
                this.mobile = true
            } else {
                this.mobile = false
                this.mobileNav = false
            }
        },
        updateScroll () {
            const scrollPos = window.scrollY
            if (scrollPos > 50) {
                this.scrolledNav = true
            } else {
                this.scrolledNav = false
            }
        }
    }
}

</script>

<style>
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

nav .link {
    font-size: 14px;
    transition: 0.5s ease all;
    padding-bottom: 4px;
    border-bottom: 1px solid transparent;
}

nav .link:hover {
    color: #00afea;
    border-color: #00afea;
}

nav .branding {
    display: flex;
    align-items: center;
}

.branding img {
    width: 60px;
    transition: 0.5s ease all;
}

.navigation {
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: flex-end;
}

nav .icon {
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

.scrolled-nav nav .branding img {
    width: 40px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
</style>
