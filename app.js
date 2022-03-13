import Alert from "./src/Alert.js";
import Storage from "./src/Storage.js";

const formSecton = document.querySelector('.formSecton');
const msg = document.getElementById('msg');
const devs_list = document.getElementById('devs_list');


formSecton.addEventListener('submit', function (e) {
    e.preventDefault();
    let form_data = new FormData(e.target);

    let data = Object.fromEntries(form_data.entries())

    let {
        name,
        email,
        location,
        photo
    } = data

    if (name == '' || email == '' || location == '') {

        msg.innerHTML = Alert.danger(`All Fields Required`)

    } else {

        Storage.set('staff', data)
        formSecton.reset();
        getAllDevsData()

    }

});

getAllDevsData()

function getAllDevsData() {

    let data = Storage.get('staff')
    let list = '';
    data.map((data, index) => {

        let {name, email, location, photo} = data

    list += 
    `              
    
<tr>
         <td>${index+1}</td>
         <td>${name}</td>
         <td>${email}</td>
         <td>${location}</td>
         <td> <img style = "width:50px; height: 50px; object-fit-cover" src ="${photo ? photo : 'assets/image/th.jpg' }"> </td>
         <td>
            <button class="btn btn-primary btn-sm"> <i class="fa fa-eye"></i></button>
            <button class="btn btn-info btn-sm"> <i class="fa fa-edit"></i></button>
            <button class="btn btn-danger btn-sm"> <i class="fa fa-trash"></i></button>
         </td>
</tr>
                                
                                
    `
    })



    devs_list.innerHTML = list

}