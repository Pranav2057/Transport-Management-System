CREATE DATABASE transportation_db;

USE transportation_db;

CREATE TABLE vehicles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    vehicle_name VARCHAR(255) NOT NULL,
    vehicle_type VARCHAR(255) NOT NULL,
    status ENUM('transport', 'maintenance', 'garage') NOT NULL
);

