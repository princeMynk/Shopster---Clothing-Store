import React, { useState } from "react";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

// TABLE IMPORT DATA
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// MODAL
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";

// RADIO BUTTON
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

// CHECKBOX DATA
import Checkbox from '@mui/material/Checkbox';

// BUTTON DATA
// import Stack from "@mui/material/Stack";

// SALUTATION DATA
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

// DATE PICKER
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


// CHECKBOX
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


export default function ModalData() {

    const userObj = {

        "suffix": "",
        "firstName": "",
        "middleName": "",
        "lastName": "",
        "mobileNo": "",
        "email": "",
        "age": "",
        "gender": "",
        "hobbies": "",
        "dob": ""
    }

    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 800,
        height: 400,
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        p: 4,
    };

    // SALUTATION DROPDOWN

    const [data, setData] = useState(userObj);

    const [table, setTable] = useState([])

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    function handleChange(e) {
        console.log(e.target.value);
        setData({ ...data, [e.target.name]: e.target.value });
    }

    function submitData() {
        console.log(data)
        setTable([...table, data])
    }

    return (
        <div className="flex justify-center mt-10">
            <div className="border border-black w-4/5 h-[500px] bg-blue-gray-200">
                <div className="flex justify-evenly mt-10 ">
                    {/* SEARCH BAR */}
                    <TextField id="outlined-search" label="Search field" type="search" />

                    {/* ------------------------------------------------------------------------------------------------------------------------------------------------------ */}


                    {/* MODAL DATA FORM */}
                    <div>
                        <Button onClick={handleOpen}>Add New +</Button>
                        <Modal open={open} >

                            {/* ------------------------------------------------------------------------------------------------------------------------------------------------------ */}

                            {/* FORM DATA */}
                            <Box sx={style}>
                                <div className="float-right">
                                    <Button variant="outlined" color="error" onClick={handleClose}><CloseOutlinedIcon /></Button>
                                </div>
                                <br /><br />

                                {/* ------------------------------------------------------------- */}
                                <Box
                                    component="form"
                                    sx={{
                                        "& .MuiTextField-root": { m: 1, width: "25ch" },
                                    }}
                                    noValidate
                                    autoComplete="off">
                                    <div className="flex">
                                        <Box sx={{ marginTop: "8px" }}>
                                            <FormControl>
                                                <Select
                                                    id="demo-simple-select"
                                                    label="Suffix"
                                                    onChange={handleChange}
                                                    name="suffix"
                                                >
                                                    <MenuItem value={"Mr."}>Mr.</MenuItem>
                                                    <MenuItem value={"Mrs."}>Mrs.</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>

                                        {/* -------------------------------------------------------------------------------------------------------------------------------------------- */}

                                        {/* TEXTFIELD DATA */}

                                        <TextField
                                            required
                                            name="FName"
                                            id="outlined-required"
                                            label="First Name"
                                            type="text"
                                            onChange={handleChange}
                                        />
                                        <TextField
                                            required
                                            name="MName"
                                            id="outlined-required"
                                            label="Middle Name"
                                            type="text"
                                            onChange={handleChange}
                                        />
                                        <TextField
                                            required
                                            name="LName"
                                            id="outlined-required"
                                            label="Last Name"
                                            type="text"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="flex">
                                        <TextField
                                            required
                                            name="MobileNo"
                                            id="outlined-required"
                                            label="Mobile No."
                                            type="text"
                                            onChange={handleChange}
                                        />
                                        <TextField
                                            required
                                            name="Email"
                                            id="outlined-required"
                                            label="Email"
                                            type="email"
                                            onChange={handleChange}
                                        />
                                        <TextField
                                            required
                                            name="Age"
                                            size="sma"
                                            sx={{ width: "100px" }}
                                            id="outlined-number"
                                            label="Age"
                                            type="text"
                                            onChange={handleChange}
                                        />

                                        {/* -------------------------------------------------------------------------------------------------------------------------------------------- */}

                                        {/* RADIO BUTTON */}
                                        <FormControl>
                                            <FormLabel id="demo-radio-buttons-group-label"> Gender </FormLabel>
                                            <RadioGroup row
                                                name="gender"
                                                onChange={handleChange}>
                                                <FormControlLabel
                                                    value="M"
                                                    control={<Radio />}
                                                    label="Male"
                                                />
                                                <FormControlLabel
                                                    value="F"
                                                    control={<Radio />}
                                                    label="Female"
                                                />
                                            </RadioGroup>
                                        </FormControl>
                                    </div>

                                    <div className="flex">

                                        {/* -------------------------------------------------------------------------------------------------------------------------------------------- */}

                                        {/* CHECKBOX DATA */}
                                        <div>
                                            <h2>Hobbies</h2>

                                            Cricket<Checkbox name="hobbies" value={"cricket"} onChange={handleChange} {...label} />
                                            Football<Checkbox name="hobbies" value={"football"} onChange={handleChange} {...label} />
                                            Music<Checkbox name="hobbies" value={"Music"} onChange={handleChange} {...label} />
                                            Basketball<Checkbox name="hobbies" value={"football"} onChange={handleChange} {...label} />
                                        </div>

                                        {/* -------------------------------------------------------------------------------------------------------------------------------------------- */}

                                        {/* DATE PICKER */}

                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DemoContainer
                                                components={['DatePicker']}>
                                                <DatePicker label="Date" />
                                            </DemoContainer>
                                        </LocalizationProvider>

                                        {/* -------------------------------------------------------------------------------------------------------------------------------------------- */}

                                        {/* SUBMIT BUTTON */}

                                        <Button
                                            variant="outlined"
                                            color="primary"
                                            sx={{ height: "", marginTop: "25px" }}

                                            onClick={submitData}
                                        >
                                            Submit
                                        </Button>

                                    </div>

                                </Box>
                            </Box>
                        </Modal>
                    </div>
                </div>

                {/* Table Data */}
                <div className="border border-black mt-10 mx-10 h-[320px] text-center">
                    <h2 className="text-3xl font-bold ">Person Information</h2>

                    {/* -------------------------------------------------------------------------------------------------------------------------------------------- */}

                    {/* TABLE DATA NAD CONTENT */}
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Suffix</TableCell>
                                    <TableCell align="right">F_Name</TableCell>
                                    <TableCell align="right">M_Name</TableCell>
                                    <TableCell align="right">L_Name</TableCell>
                                    <TableCell align="right">Mobile_no</TableCell>
                                    <TableCell align="right">Email</TableCell>
                                    <TableCell align="right">Age</TableCell>
                                    <TableCell align="right">Gender</TableCell>
                                    <TableCell align="right">Hobbies</TableCell>
                                    <TableCell align="right">DOB</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {table.map((row, i) => (
                                    <TableRow key={i}>
                                        <TableCell component="th" scope="row">
                                            {row.suffix}
                                        </TableCell>
                                        <TableCell align="right">{row.FName}</TableCell>
                                        <TableCell align="right">{row.MName}</TableCell>
                                        <TableCell align="right">{row.LName}</TableCell>
                                        <TableCell align="right">{row.MobileNo}</TableCell>
                                        <TableCell align="right">{row.Email}</TableCell>
                                        <TableCell align="right">{row.Age}</TableCell>
                                        <TableCell align="right">{row.gender}</TableCell>
                                        <TableCell align="right">{row.hobbies}</TableCell>
                                        <TableCell align="right">{row.DOB}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>

            </div>
        </div>
    );
}
