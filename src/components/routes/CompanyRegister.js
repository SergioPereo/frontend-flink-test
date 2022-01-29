import React, {useState} from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import axios from "axios"

// Componente formulario: Me hubiera gustado usar formik o algo un poco más robusto pero el tiempo apremia
function CompanyRegister() {

    //Mala practica obviamente, esto debe ir en un .env
    const url = "https://backend-flink-test-scm4y.ondigitalocean.app/api"

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [symbol, setSymbol] = useState("")


    const doCreateCompany = () => {
        if(name.length > 0){
            if(description.length > 0){
                if(symbol.length > 0){
                    axios({
                        url: `${url}/business/companies/`,
                        method: 'post',
                        data: {
                            name: name,
                            description: description,
                            symbol: symbol,
                            market_values: Array.from({length: 50}, () => Math.floor(Math.random() * 500) + 500).join(",")
                        }
                    }).then(response => {
                        const DATA = response.data
                        if(DATA.detail === "Sucess"){
                            alert("El usuario se guardo con éxito")
                            setName("")
                            setDescription("")
                            setSymbol("")
                        } else {
                            alert(DATA.message)
                        }
                    })
                }
            }
        }
    }

    return (
        <div style={{ padding: 30 }}>
            <Paper style={{padding: 30}}>
                <Grid
                    container
                    spacing={3}
                >
                    <Grid item xs={12}>
                        <Typography variant="h3" gutterBottom component="div">
                            Crear Empresa
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth id="outlined-basic" label="Nombre" variant="outlined" value={name} onChange={(e)=>setName(e.target.value)}/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth id="outlined-basic" label="Descripción" variant="outlined" value={description} onChange={(e)=>setDescription(e.target.value)}/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth id="outlined-basic" label="Símbolo" variant="outlined" value={symbol} onChange={(e)=>setSymbol(e.target.value)}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Button fullWidth onClick={doCreateCompany} variant="contained">Crear Empresa</Button>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}

export default CompanyRegister;
