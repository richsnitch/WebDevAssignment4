<script>
import { isTemplateNode } from '@vue/compiler-core';
import SearchResult from './components/SearchResult.vue'
import $ from 'jquery'
import axios from "axios";
            /*let case_number = document.getElementById("case_number").value;
            let date = document.getElementById("date").value;
            let time = document.getElementById("time").value;
            let code = document.getElementById("code").value;
            let incident = document.getElementById("incident").value;
            let police_grid = document.getElementById("police_grid").value;
            let neighborhood_number = document.getElementById("neighborhood_number").value;
            let block = document.getElementById("block").value;

            var queryString = "?case_number=" + case_number + "&date=" + date + "&time=" + time + "&code=" + code + 
            "&incident=" + incident + "&police_grid=" + police_grid + "&neighborhood_number=" + neighborhood_number + "&block=" + block;
            
            document.forms[0].action = "submit.php" + queryString;
            document.forms[0].submit();
            alert("New incident submitted!");*/
export default {
    data() {
        return {
            view: 'map',
            auth_data: {},
            address_search: '',
            codes: [],
            neighborhoods: [],
            incidents: [],
            search_results: [],
            incident_results: [],
            case_number: "",
            date: "",
            time: "",
            code: "",
            incident: "",
            police_grid: "",
            neighborhood_number: "",
            block: "",
            leaflet: {
                map: null,
                center: {
                    lat: 44.955139,
                    lng: -93.102222,
                    address: ""
                },
                zoom: 12,
                bounds: {
                    nw: {lat: 45.008206, lng: -93.217977},
                    se: {lat: 44.883658, lng: -92.993787}
                },
                neighborhood_markers: [
                    {location: [44.942068, -93.020521], marker: null}, //.addTo(this.leaflet.map) //onMap: true
                    {location: [44.977413, -93.025156], marker: null},
                    {location: [44.931244, -93.079578], marker: null},
                    {location: [44.956192, -93.060189], marker: null},
                    {location: [44.978883, -93.068163], marker: null},
                    {location: [44.975766, -93.113887], marker: null},
                    {location: [44.959639, -93.121271], marker: null},
                    {location: [44.947700, -93.128505], marker: null},
                    {location: [44.930276, -93.119911], marker: null},
                    {location: [44.982752, -93.147910], marker: null},
                    {location: [44.963631, -93.167548], marker: null},
                    {location: [44.973971, -93.197965], marker: null},
                    {location: [44.949043, -93.178261], marker: null},
                    {location: [44.934848, -93.176736], marker: null},
                    {location: [44.913106, -93.170779], marker: null},
                    {location: [44.937705, -93.136997], marker: null},
                    {location: [44.949203, -93.093739], marker: null}
                ]
            }
        };
    },
    components: {
        SearchResult
    },
    methods: {
        viewMap(event) {
            this.view = 'map';
        },

        viewNewIncident(event) {
            this.view = 'new_incident'; 
        },

        submitForm(){
            alert("Success!")
            const formData = {
                case_number: this.case_number,
                date: this.name,
                time: this.time,
                code: this.code,
                incident: this.incident,
                police_grid: this.police_grid,
                neighborhood_number: this.neighborhood_number,
                block: this.block,
            };
            console.log(this.case_number);
            axios.put("/new-incident", formData).then((response) => {
                if (response.status === 200){
                    //Success!
                    console.log("Success");
                }else{
                    //Error
                    console.log("Error submitting new request.");
                }
            })
        },

        deleteForm(){
            var value = document.getElementById("delete").value;
            console.log(value);

            let url = 'http://localhost:8000/remove-incident?case_number='+value;


        },
   /*    const formData = {
                case_number: this.case_number,
                date: this.name,
                time: this.time,
                code: this.code,
                incident: this.incident,
                police_grid: this.police_grid,
                neighborhood_number: this.neighborhood_number,
                block: this.block,
            };
            console.log(this.case_number);
            axios.put("/new-incident", formData).then((response) => {
                if (response.status === 200){
                    //Success!
                    alert("Success!")
                }else{
                    //Error
                    alert("Error submitting new request.")
                }
            })*/

        viewAbout(event) {
            this.view = 'about';
        },

        getJSON(url) {
            return new Promise((resolve, reject) => {
                $.ajax({
                    dataType: 'json',
                    url: url,
                    success: (response) => {
                        resolve(response);
                    },
                    error: (status, message) => {
                        reject({status: status.status, message: status.statusText});
                    }
                });
            });
        },

        uploadJSON(method, url, data) {
            return new Promise((resolve, reject) => {
                $.ajax({
                    type: method,
                    url: url,
                    contentType: 'application/json; charset=utf-8',
                    data: JSON.stringify(data),
                    dataType: 'text',
                    success: (response) => {
                        resolve(response);
                    },
                    error: (status, message) => {
                        reject({status: status.status, message: status.statusText});
                    }
                });
            });
        },

        addressSearch(event) {
        
            if (this.address_search !== '') {
                console.log("Inside address search");
                console.log(this.address_search);
                let req = {
                    url: 'https://nominatim.openstreetmap.org/search?q=' + this.address_search +
                         '&format=json&limit=1&accept-language=en',
                        //https://nominatim.openstreetmap.org/search?q=6738+Emerson+avenue+south,+Minneapolis&format=json&polygon=1&addressdetails=1&limit=1
                    dataType: 'json',
                    headers: {
                        'Authorization': this.auth_data.token_type + ' ' + this.auth_data.access_token
                    },
                    success: this.addressData
                }
                console.log(req.url);
                $.ajax(req);

            }
            else {
                this.search_results = [];
            }
        },

        addressData(data) {
            this.search_results = data;

            let longitude = data[0].lon;
            let latitude = data[0].lat;

            
            if(longitude != null && latitude != null){
                console.log("Inside");
                
                var myMarker = L.marker([latitude, longitude], {title:'Hover Text',alt:"Marker",clickable:false,draggable:false}).addTo(this.leaflet.map)
                .bindPopup(data[0].display_name);
                
                this.leaflet.map.flyTo([latitude, longitude], 15);
                //this.leaflet.map.setView([latitude, longitude], 24);
            }

            this.updateIncidents();
            
            //console.log(longitude);
        },
        updateIncidents(){
            let ne = this.leaflet.map.getBounds()._northEast;
            let sw = this.leaflet.map.getBounds()._southWest;

            console.log(ne);
            console.log(sw);
            
            let neighborhoods = "";
            let i;
            for(i=0; i<this.leaflet.neighborhood_markers.length; i++){
                console.log(this.leaflet.neighborhood_markers[i].location);
                if(this.leaflet.neighborhood_markers[i].location[0] <= ne.lat && this.leaflet.neighborhood_markers[i].location[0] >= sw.lat && 
                this.leaflet.neighborhood_markers[i].location[1] <= ne.lng && this.leaflet.neighborhood_markers[i].location[1] >= sw.lng){
                //if(this.leaflet.map.contains(this.leaflet.neighborhood_markers[i].location)){
                    console.log("Inside");
                    if(neighborhoods === ""){
                        neighborhoods = (i+1).toString();
                    } else {
                        neighborhoods += ","+(i+1).toString();
                    }

                }
            }
            console.log("neighborhoods: " + neighborhoods);
            let url = 'http://localhost:8000/incidents?limit=1000&neighborhood_number='+neighborhoods;
            this.getJSON(url).then((response) => {
                console.log(response);
                this.incident_results = response;
            }).catch((err) => {
                console.log(err);
            });


        },
        updateNeighbors(){
            //var newMarker = L.marker([44.942068, -93.020521]).addTo(this.leaflet.map);
            //console.log("Inside");
            
            for(let i=0; i<this.leaflet.neighborhood_markers.length; i++){
                this.leaflet.neighborhood_markers[i].marker = L.marker(this.leaflet.neighborhood_markers[i].location).addTo(this.leaflet.map);
            }
            //console.log(this.leaflet.neighborhood_markers[0]);
        }
        
    },
    mounted() {
        this.leaflet.map = L.map('leafletmap').setView([this.leaflet.center.lat, this.leaflet.center.lng], this.leaflet.zoom);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            minZoom: 11,
            maxZoom: 18
        }).addTo(this.leaflet.map);
        this.leaflet.map.setMaxBounds([[44.883658, -93.217977], [45.008206, -92.993787]]);
        let district_boundary = new L.geoJson();
        district_boundary.addTo(this.leaflet.map);


        this.updateNeighbors();

        this.getJSON('/data/StPaulDistrictCouncil.geojson').then((result) => {
            // St. Paul GeoJSON
            $(result.features).each((key, value) => {
                district_boundary.addData(value);
            });

            /*for(i=0; i<this.neighborhood_markers.length; i++){
                var newMarker = L.marker(this.neighborhood_markers[i]).addTo(this.leaflet.map);
            }*/


        }).catch((error) => {
            console.log('Error:', error);
        });

        var newMarker = L.marker([45.483658, -93.017977]).addTo(this.leaflet.map);

        this.getJSON('http://localhost:8000/incidents?neighborhood_number=1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17&limit=1000')
        .then((response) => {
            //incidents which are on map
            console.log(response);
            this.incident_results = response;


            

        }).catch((err)=> {
            console.log(err);
        });

    }
}
</script>

<template>
    <div class="grid-container">
        <div class="grid-x grid-padding-x">
            <p :class="'cell small-4 ' + ((view === 'map') ? 'selected' : 'unselected')" @click="viewMap">Map</p>
            <p :class="'cell small-4 ' + ((view === 'new_incident') ? 'selected' : 'unselected')" @click="viewNewIncident">New Incident</p>
            <p :class="'cell small-4 ' + ((view === 'about') ? 'selected' : 'unselected')" @click="viewAbout">About</p>
        </div>
    </div>
    <div v-show="view === 'map'">
        <!--<input id="search" type="text" v-model="spotify_search" :placeholder="input_placeholder" />
        <select id="type" v-model="spotify_type">
            <option v-for="opt in spotify_type_options" :value="opt.value">{{ opt.text }}</option>
        </select>
        <button type="button" @click="spotifySearch">Search</button>-->


        <div class="grid-container">
            <input id="search" type="text" v-model="address_search" :placeholder="input_placeholder" />
            <button class="blue" type="button" @click="addressSearch">Go</button>

            <div class="grid-x grid-padding-x">
                <div id="leafletmap" class="cell auto"></div>
            </div>

            <SearchResult :result_array="incident_results" />
        </div>
    </div>
    <div v-if="view === 'new_incident'">
        <!-- Replace this with your actual form: can be done here or by making a new component -->
        <div class="grid-container">
            <div class="grid-x grid-padding-x">
                <h1 class="cell auto center" style="font-family:fantasy">New Incident Form</h1>
            </div>
            <br/>
                <form>
                    <label for="case_number">Case Number:</label><br>
                    <input type="text" placeholder="Type here" id="case_number" name="case_number" required>
                    <label for="date">Date:</label><br>
                    <input type="text" placeholder="Type here" id="date" name="date" required>
                    <label for="time">Time:</label><br>
                    <input type="text" placeholder="Type here" id="time" name="time" required>
                    <label for="code">Code:</label><br>
                    <input type="text" placeholder="Type here" id="code" name="code" required>
                    <label for="incident">Incident:</label><br>
                    <input type="text" placeholder="Type here" id="incident" name="incident" required>
                    <label for="police_grid">Police Grid:</label><br>
                    <input type="text" placeholder="Type here" id="police_grid" name="police_grid" required>
                    <label for="neighborhood_number">Neighborhood Number:</label><br>
                    <input type="text" placeholder="Type here" id="neighborhood_number" name="neighborhood_number" required>
                    <label for="block">Block:</label><br>
                    <input type="text" placeholder="Type here" id="block" name="block" required>
                    <button type="button" v-on:click="submitForm()">Submit</button>
                </form>

            <div class="grid-x grid-padding-x">
                <h1 class="cell auto center" style="font-family:fantasy">Delete Incident Form</h1>
            </div>
            <br/>

            <label for="date">Incident Number:</label><br>

            <form>
                <input type="text" placeholder="Type here" id="delete" name="delete" required>
                <button type="button" v-on:click="deleteForm()">Submit</button>
            </form>
            <br/>
            <br/>

        </div>
    </div>
    <div v-if="view === 'about'">
        <!-- Replace this with your actual about the project content: can be done here or by making a new component -->
        <div class="grid-container">
            <div class="grid-x grid-padding-x">
                <h1 class="cell auto center" style="font-family:fantasy">About the Project</h1>
            </div>
            <br/>
        </div>

        <div class="grid-container names rcor">

            <h1 class="cell auto center"> Who are we?</h1>
            <div class="grid-x grid-padding-x">

                <div class="cell small-12 large-6 center"><img src ="../images/picofjoe.jpg" class="floatleft rcor" alt="Picture of Joseph Schoen"/></div> 
                <div class="cell center small-12 large-6 ">
                    <h1>Name:</h1>
                    <p>My name is Joseph Schoen, and I am attending the University of St. Thomas as a senior.</p>
                    <br/>
                    <h1>Studies:</h1>
                    <p>I am studying Computer Science for my major, and Applied Statistics for my minor.</p>
                    <br/>
                    <h1>Goals After College:</h1>
                    <p>I am currently enrolled into Optums TDP program, and hope to work in their Information Securities department.</p>
                </div>
            </div>
            <br/>


            <div class="grid-x grid-padding-x">
                <div class="cell small-12 large-6 center"><img src ="../images/picofhayden.jpg" class="floatleft rcor" alt="Picture of Joseph Schoen"/></div> 
                <div class="cell small-12 large-6 center ">
                <h1>Name:</h1>
                    <p>My name is Hayden Richards, and I am a junior at the University of St. Thomas!</p>
                    <br/>
                    <h1>Studies:</h1>
                    <p>I am majoring in Computer Science, while double minoring in Teacher Education and Applied Statistics.</p>
                    <h1>Goals After College:</h1>
                    <p>My main goal as of now is to graduate with a Bachelor's in Computer Science! I am currently undecided in what I want
                        to pursue as far as a career in the computer science field. However, game development would be a dream job of mine.
                    </p>
                </div>
            </div>
            <br/>

            <div class="grid-x grid-padding-x">
                <div class="cell small-12 large-6 center"><img src ="../images/picofjoe.jpg" class="floatleft rcor" alt="Picture of Joseph Schoen"/></div> 
                <div class="cell center small-12 large-6 ">
                    <h1>Name:</h1>
                    <p>My name is Audrey Jenkins</p>

                </div>
            </div>
            <br/>

            <div class="grid-x grid-padding-x">
                <div class="cell small-12 large-6 center"><img src ="../images/picoftara.jpeg" class="floatleft rcor" alt="Picture of Tara Sothy"/></div> 
                <div class="cell center small-12 large-6 ">
                    <h1>Name:</h1>
                    <p>My name is Tara Sothy</p>
                    <br/>
                    <h1>Studies:</h1>
                    <p>I am majoring in Computer Science, while double minoring in both Data Analytics and Applied Statistics.</p>
                    <h1>Goals After College:</h1>
                    <p>Once I graduate (in just a few days here) I'll soon start a job as an associate software developer
                        My main goal as of now is to graduate with a Bachelor's in Computer Science! I am currently undecided in what I want
                        to pursue as far as a career in the computer science field. However, game development would be a dream job of mine.
                    </p>
                </div>
            </div>
            <br/>

        </div>

        <div class="grid-container">
            <br/>
            <br/>
            <div class="grid-x grid-padding-x">
                <h1 class="cell large-12 center">Tools Used</h1>

                <div class="cell small-12 large-6 center">
                    <p><strong>Nominatim API</strong>
                        <br/>
                        By using the Nominatim API, this gives us the capability to make a search for a location, and taking
                        that search information, placing it into a URL, and then getting an actual longitude and latitude to use.
                    </p>
                </div>
                <div class="cell small-12 large-6 center">
                    <p><strong>Leaflet API</strong>
                        <br/>
                        Using the Leaflet API, this gave us the capability to create an interactive map. This map was heavily used
                        for displaying a visual representation of the different neighborhoods, showing the location that was searched
                        by marking it, and also visually chosing an area on the map to see the crime cases in that location/neighborhoods.
                    </p>
                </div>

                <div class="cell small-12 large-6 center">
                    <p><strong>St. Paul Crime API</strong>
                        <br/>
                        This API was created by us through a St. Paul Crime dataset. This dataset includes all the crime's documented through
                        the city of St. Paul from August 2014, to May 2022. With 420,162 crime entries documented, this contains lots of information!
                        We used this API to display the crimes commited in an area, by using the search features from Nominatim and the live map frame!
                    </p>
                </div>

                <div class="cell small-12 large-6 center">
                    <p><strong>Foundation Framework</strong>
                        <br/>
                        This framework was used for stying the visual aspect of the website. This is focused in on the HTML side of the website.
                        It allows for a custom grid to work with when organizing objects on a website. That way, whether on a phone, tablet, desktop,
                        or some other device, it is custom to the size of the screen to make it well sorted for the user to read.
                    </p>
                
                </div>
            </div>

            
            <br/>
            <br/>
        </div>

        <div class="grid-container video rcor">

            <div class="grid-x grid-padding-x">
                <h1 class="cell auto center">Video Demo</h1>
            </div>
        </div>


        <div class="grid-container">
            <br/>
            <br/>
            <div class="grid-x grid-padding-x">
                <h1 class="cell small-12 large-12 center">Six Interesting Things</h1>

                <div class="cell small-12 large-6 center">
                    <p>The first thing</p>
                </div>
                <div class="cell small-12 large-6 center">
                    <p>The second thing</p>
                </div>
                <div class="cell small-12 large-6 center">
                    <p>The third thing</p>
                </div>
                <div class="cell small-12 large-6 center">
                    <p>The fourth thing</p>
                </div>
                <div class="cell small-12 large-6 center">
                    <p>The fifth thing</p>
                </div>
                <div class="cell small-12 large-6 center">
                    <p>The sixth thing</p>
                </div>
            </div>
            <br/>
        </div>

        <div class="grid-container names rcor">
            <div class="grid-x grid-padding-x">
                <h1 class="cell auto center">Thanks!</h1>
                <div class="cell small-12 large-12 center"><img src ="images/family.png" class="rcor" alt="Picture of Joseph Schoen"/></div>
            </div>
            <br/>
        </div>
        <br/>

    </div>

    
</template>

<style>
#leafletmap {
    height: 600px;
}
.selected {
    background-color: rgb(10, 100, 126);
    border-radius: 20px;
    color: white;
    border: solid 1px white;
    text-align: center;
    cursor: pointer;
}
.unselected {
    background-color: rgb(200, 200, 200);
    border-radius: 20px;
    color: black;
    border: solid 1px white;
    text-align: center;
    cursor: pointer;
}
</style>

 