<script>
import App from '../App.vue';

export default {
    props: {
        result_array: Array,
        neighborhoods: Array
    },
    watch: {
        result_array() {
            console.log(this.result_array);
        },
        neighborhoods() {
            console.log(this.neighborhoods);
        }
    },
    methods: {
        contain(number) {
            let i;
            for (i = 0; i < this.neighborhoods.length; i++) {
                if (number == this.neighborhoods[i]) {
                    return true;
                }
            }
            return false;
        }
    }
}
</script>

<template>
    <table>
        <thead>
            <tr>
                <th>Case Number</th>
                <th>Date and Time</th>
                <th>Incident</th>
                <th>Police Grid</th>
                <th>Neighborhood Number</th>
                <th>Block</th>
                <th>Look-Up</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody v-for="(item, index) in result_array">
                      
                <tr v-if="this.contain(item.neighborhood_number)" ss="(index % 2 === 0) ? 'even' : 'odd'">
                    <td>{{ item.case_number }}</td>
                    <td>{{ item.date }}  {{ item.time }} </td>
                    <td>{{ item.incident }} (code: {{ item.code }})</td>
                    <td>{{ item.police_grid }}</td>
                    <td>{{ item.neighborhood_number }}</td>
                    <td>{{ item.block }}</td>
                    <td><button class="green" type="button" @click="addressSearch">Search</button>
                        <App :address_search2="item.block" /></td>

                    <td><button class="red" type="button" @click="addressSearch">Delete</button></td>
                </tr>
            
        </tbody>
    </table>
</template>

<style>
.even {
    width: 40rem;
    margin: 0;
    background-color: rgb(162, 206, 235);
}

.odd {
    width: 40rem;
    margin: 0;
    background-color: rgb(241, 241, 241);
}
th, td {
    border: solid 1px black;
}
.no_img {
    height: 80px;
}
</style>
