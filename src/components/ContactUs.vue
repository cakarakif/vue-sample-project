<template>
<div class="container">
    <hr>
    <div class="row">
        <div class="col-md-12">
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
                                    <input type="text" id="username" class="form-control" :value="userData.name" @input="userData.name = $event.target.value" required>
                                </div>
                                <div class="form-group">
                                    <label for="email">Email</label>
                                    <input type="text" id="email" class="form-control" :value="userData.email" @input="userData.email = $event.target.value" required>
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
                                    <option v-for="country in userData.countries" :key="country"> {{ country.name }}</option>
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
        <div class="col-md-12" v-if="isSubmitted">
            <div class="panel panel-info">
                <div class="panel-heading">
                    <h4>{{ "form_values" | localization}}</h4>
                </div>
                <div class="panel-body">
                    <p>{{ "name" | localization}}: {{ userData.name }}</p>
                    <p>Email: {{ userData.email }}</p>
                    <p>{{ "phone" | localization}}: {{ userData.phone }}</p>
                    <p style="white-space: pre;">{{ "message" | localization}}: {{userData.message }} </p>
                    <p>{{ "country" | localization}}: {{ userData.selectedCountry }}</p>
                </div>
            </div>
        </div>
    </div>

</div>
</template>

<script>
export default {
    data() {
        return {
            userData: {
                name: '',
                email: '',
                phone: 30,
                message: '',
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
                selectedCountry: ''
            },
            isSubmitted: false
        }
    },
    methods: {
        submit() {
            this.isSubmitted = true;
        }
    }
}
</script>

<style>

</style>
