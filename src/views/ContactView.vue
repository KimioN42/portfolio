<template>
    <div class="contact-container">
        <ContactFormVue />
    </div>
</template>
<script>
import ContactFormVue from '@/components/ContactForm.vue'

export default {
    components: { ContactFormVue }
}
</script>
<style scoped>
.contact-container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin: auto;
    text-align: center;
    padding: 6em 0em;
    /* border: 1px solid red; */
    width: 90%;
}
</style>
