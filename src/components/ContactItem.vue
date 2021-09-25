<template>
    <div class="col-md-6" v-if="isSubmitted">
            <div class="panel panel-info">
                <div class="panel-heading">
                    <h4>{{ "form_values" | localization}}</h4>
                </div>
                <div class="panel-body">
                    <p>{{ "name" | localization}}: {{ contact.name }}</p>
                    <p>Email: {{ contact.email }}</p>
                    <p>{{ "phone" | localization}}: {{ contact.phone }}</p>
                    <p style="white-space: pre;">{{ "message" | localization}}: {{contact.message }} </p>
                    <p>{{ "country" | localization}}: {{ contact.selectedCountry }}</p>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    props : ["isSubmitted","contact"]
}
</script>