<script>

export default {
    props: {
        result_array: Array
    },
    watch: {
        result_array() {
            console.log(this.result_array);
        }
    },

    methods: {
        getColor(code) {
            //console.log("code = " + code);
            code = parseInt(code);
            //console.log("code = " + code);
            if(code >= 100 && code < 200) {
                return "Homicide";
            }
            else if((code >= 200 && code < 300) || (code >= 400 && code < 500) || (code >= 800 && code < 900)) {
                return "Assault";
            }
            else if((code >= 300 && code < 400) || (code >= 500 && code < 800)) {
                return "Theft";
            }
            else if(code >= 900 && code < 1500) {
                return "PropertyDamage";
            }
            else if(code >= 1800 && code < 1900) {
                return "Narcotics";
            }
            else if(code == 2619) {
                return "Weapons";
            }
            else {
                return "else";
            }

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
                <th>Code</th>
                <th>Incident</th>
                <th>Police Grid</th>
                <th>Neighborhood Number</th>
                <th>Block</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in result_array" :class="getColor(item.code)">
                <td>{{ item.case_number }}</td>
                <td>{{ item.date }}  {{ item.time }} </td>
                <td>{{ item.code }}</td>
                <td>{{ item.incident }}</td>
                <td>{{ item.police_grid }}</td>
                <td>{{ item.neighborhood_number }}</td>
                <td>{{ item.block }}</td>
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

.else {
    width: 40rem;
    margin: 0;
    background-color: rgb(241, 241, 241);
}
.Homicide {
    width: 40rem;
    margin: 0;
    background-color: rgb(156, 106, 106);
}
.Assault {
    width: 40rem;
    margin: 0;
    background-color: rgb(105, 111, 161);
}
.Theft {
    width: 40rem;
    margin: 0;
    background-color: rgb(113, 172, 106);
}
.PropertyDamage {
    width: 40rem;
    margin: 0;
    background-color: rgb(231, 219, 112);
}
.Narcotics {
    width: 40rem;
    margin: 0;
    background-color: rgb(146, 110, 167);
}
.Weapons {
    width: 40rem;
    margin: 0;
    background-color: rgb(189, 150, 78);
}
</style>
