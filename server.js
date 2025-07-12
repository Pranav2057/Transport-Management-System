let vehicles = [];

const insertForm = document.getElementById("insert-form");
const vehicleList = document.getElementById("vehicle-list").getElementsByTagName("tbody")[0];
const insertButton = insertForm.querySelector("button[type='submit']:nth-of-type(1)");
const updateButton = insertForm.querySelector("button[type='submit']:nth-of-type(2)");
const deleteButton = insertForm.querySelector("button[type='submit']:nth-of-type(3)");
const displayButton = insertForm.querySelector("button[type='submit']:nth-of-type(4)");

function renderVehicleList() {
    vehicleList.innerHTML = '';

    vehicles.forEach((vehicle, index) => {
        const row = vehicleList.insertRow();

        const cell1 = row.insertCell(0);
        cell1.textContent = vehicle.vehicle_id;

        const cell2 = row.insertCell(1);
        cell2.textContent = vehicle.vehicle_name;

        const cell3 = row.insertCell(2);
        cell3.textContent = vehicle.no_plate;

        const cell4 = row.insertCell(3);
        cell4.textContent = vehicle.owner_name;

        const cell5 = row.insertCell(4);
        cell5.textContent = vehicle.status;

        const cell6 = row.insertCell(5);
        cell6.innerHTML = `
            <button onclick="editVehicle(${index})">Edit</button>
            <button onclick="deleteVehicle(${index})">Delete</button>
        `;
    });
}

insertButton.addEventListener("click", function (e) {
    e.preventDefault();

    const vehicleId = document.getElementById("vehicle_id").value;
    const vehicleName = document.getElementById("vehicle_name").value;
    const noPlate = document.getElementById("no_plate").value;
    const ownerName = document.getElementById("owner_name").value;
    const status = document.getElementById("status").value;

    if (vehicles.find(vehicle => vehicle.vehicle_id === vehicleId)) {
        alert("Vehicle ID already exists.");
        return;
    }

    const newVehicle = {
        vehicle_id: vehicleId,
        vehicle_name: vehicleName,
        no_plate: noPlate,
        owner_name: ownerName,
        status: status
    };

    vehicles.push(newVehicle);
    renderVehicleList();

    insertForm.reset();
});

updateButton.addEventListener("click", function (e) {
    e.preventDefault();

    const vehicleId = document.getElementById("vehicle_id").value;
    const vehicleName = document.getElementById("vehicle_name").value;
    const noPlate = document.getElementById("no_plate").value;
    const ownerName = document.getElementById("owner_name").value;
    const status = document.getElementById("status").value;

    const index = vehicles.findIndex(vehicle => vehicle.vehicle_id === vehicleId);
    if (index !== -1) {
        vehicles[index] = {
            vehicle_id: vehicleId,
            vehicle_name: vehicleName,
            no_plate: noPlate,
            owner_name: ownerName,
            status: status
        };
        renderVehicleList();
        insertForm.reset();
    } else {
        alert("Vehicle ID not found.");
    }
});

deleteButton.addEventListener("click", function (e) {
    e.preventDefault();

    const vehicleId = document.getElementById("vehicle_id").value;

    const index = vehicles.findIndex(vehicle => vehicle.vehicle_id === vehicleId);
    if (index !== -1) {
        if (confirm("Are you sure you want to delete this vehicle?")) {
            vehicles.splice(index, 1);
            renderVehicleList();
            insertForm.reset();
        }
    } else {
        alert("Vehicle ID not found.");
    }
});

displayButton.addEventListener("click", function (e) {
    e.preventDefault();
    renderVehicleList(); // Trigger the display of all vehicles when clicked
});

function editVehicle(index) {
    const vehicle = vehicles[index];

    document.getElementById("vehicle_id").value = vehicle.vehicle_id;
    document.getElementById("vehicle_name").value = vehicle.vehicle_name;
    document.getElementById("no_plate").value = vehicle.no_plate;
    document.getElementById("owner_name").value = vehicle.owner_name;
    document.getElementById("status").value = vehicle.status;

    insertButton.style.display = "none";
    updateButton.style.display = "inline-block";
    deleteButton.style.display = "inline-block";
}

function deleteVehicle(index) {
    if (confirm("Are you sure you want to delete this vehicle?")) {
        vehicles.splice(index, 1);
        renderVehicleList();
    }
}

renderVehicleList();
