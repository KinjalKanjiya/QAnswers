<template>
    <div>
        {{ question }}
    </div>
</template>
<script>
import { axios } from "@/common/api.service.js";

export default {
    name: "QuesTion",
    props: {
        slug: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            question: {}
        }
    },
    methods: {
        async getQuestionData() {
            const endpoint = '/api/v1/questions/${this.slug}/';
            try {
                const response = await axios.get(endpoint);
                this.question = response.data;
            }
            catch (error) {
                console.log(error.response);
                alert(error.response.statusText);
            }

        }
    },
    created() {
        this.getQuestionData();
    }

}
</script>
<style></style>