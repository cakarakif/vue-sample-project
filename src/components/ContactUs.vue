<template>
<div class="container">
    <div class="alert alert-danger" role="alert" v-if="showAlert">
        {{"fill_area" | localization}}
    </div>
    <hr>
    <div class="row">
        <div class="col-md-6">
            <div class="panel panel-warning">
                <div class="panel-heading">
                    <h4>{{ "contact_us" | localization}}</h4>
                </div>
                <div class="panel-body">
                    <form>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="email">{{ "name" | localization}}</label>
                                    <input type="text" id="username" class="form-control" v-model="userData.name" required>
                                </div>
                                <div class="form-group">
                                    <label for="email">Email</label>
                                    <input type="text" id="email" class="form-control" v-model="userData.email" required>
                                </div>
                                <div class="form-group">
                                    <label for="phone">{{ "phone" | localization}}</label>
                                    <input type="number" id="phone" class="form-control" v-model="userData.phone" required>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 from-group">
                                <label>{{ "country" | localization}}</label>
                                <select v-model="userData.selectedCountry" class="form-control" required>
                                    <option v-for="(country, index) in countries" :key="index"> {{ country.name }}</option>
                                </select>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 form-group">
                                <label for="message">{{ "message" | localization}}</label><br>
                                <textarea v-model="userData.message" id="message" rows="3" class="form-control" required></textarea>
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-md-12">
                                <button @click.prevent="submit" class="btn btn-primary">{{ "send" | localization}}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div v-for="(contact,index) in contacts" :key="index">
            <contact-item :isSubmitted="isSubmitted" :contact="contact"></contact-item>
        </div>
    </div>

</div>
</template>

<script>
import ContactItem from './ContactItem.vue'
export default {
    components: {
        "contact-item": ContactItem
    },
    data() {
        return {
            showAlert: false,
            contacts: [],
            userData: {
                name: '',
                email: '',
                phone: 5556667788,
                message: '',
                selectedCountry: ''
            },
            countries: [{
                    id: "TR",
                    name: "Turkey"
                },
                {
                    id: "US",
                    name: "United States of America"
                },
                {
                    id: "GB",
                    name: "United Kingdom"
                },
                {
                    id: "DE",
                    name: "Germany"
                },
                {
                    id: "SE",
                    name: "Sweden"
                },
                {
                    id: "KE",
                    name: "Kenya"
                },
                {
                    id: "BR",
                    name: "Brazil"
                },
                {
                    id: "ZW",
                    name: "Zimbabwe"
                }
            ],
            isSubmitted: false
        }
    },
    created() {
        this.getContacts();
    },
    methods: {
        submit() {
            if (this.checkForm()) {
                this.$http.post('https://vuejs-vue-resource-eba0f-default-rtdb.firebaseio.com/contactus.json',
                    this.userData).then((response) => {
                    this.getContacts()
                })
            } else {
                this.showAlert= true
            }
        },
        getContacts() {
            this.$http.get('https://vuejs-vue-resource-eba0f-default-rtdb.firebaseio.com/contactus.json',
                this.userData).then((response) => {

                this.contacts = []
                let data = response.body
                if (response.body) {
                    for (let key in data) {
                        this.contacts.push(data[key])
                    }
                }
                if (this.contacts.length > 0) {
                    this.isSubmitted = true;
                }
            })
        },
        checkForm() {
            for (let key in this.userData) {
                if (this.userData[key] == '') {
                    return false
                }
            }
            return true
        }
    }
}
</script>

<style>

</style>
