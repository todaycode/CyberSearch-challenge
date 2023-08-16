import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export function AddCar(props) {
    const [manufacturer, setManufacturer] = useState("Toyota")
    const [model, setModel] = useState("Camry")
    const [pack, setPack] = useState("Camry")
    const [color, setColor] = useState("Black")
    const [year, setYear] = useState(2023)
    const [category, setCategory] = useState("Sedan")
    const [mileage, setMileage] = useState(331425)
    const [price, setPrice] = useState(4387000)
    const [id, setId] = useState("A987G6G90R")

    const handleSubmit = (event) => {
        event.preventDefault();
        props.handleAddCar({ manufacturer, model, package: pack, color, year, category, mileage, price, id })
        console.log({ manufacturer, model, pack, color, year, category, mileage, price, id })
    };

    return (
        <>
            <Box
                component="form"
                sx={{ width: 300 }}
                noValidate
                autoComplete="off"
            >
                <TextField name="manufacturer" label="Manufacturer" variant="standard" value={manufacturer} onChange={event => setManufacturer(event.target.value)} />
                <TextField name="model" label="Model" variant="standard" value={model} onChange={event => setModel(event.target.value)} />
                <TextField name="package" label="Package" variant="standard" value={pack} onChange={event => setPack(event.target.value)} />
                <TextField name="color" label="Color" variant="standard" value={color} onChange={event => setColor(event.target.value)} />
                <TextField name="year" label="Year" variant="standard" type="number" value={year} onChange={event => setYear(event.target.value)} />
                <TextField name="category" label="Category" variant="standard" value={category} onChange={event => setCategory(event.target.value)} />
                <TextField name="mileage" label="Mileage" variant="standard" type="number" value={mileage} onChange={event => setMileage(event.target.value)} />
                <TextField name="price" label="Price" variant="standard" type="number" value={price} onChange={event => setPrice(event.target.value)} />
                <TextField name="id" label="Id" variant="standard" value={id} onChange={event => setId(event.target.value)} />
            </Box>
            <Button onClick={handleSubmit} variant="contained">Add Car</Button>
        </>
    )

}

export default AddCar;