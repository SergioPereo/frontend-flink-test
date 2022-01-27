import React, {useEffect, useState} from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import axios from "axios";
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

function App() {

  const url = "https://backend-flink-test-9yuk5.ondigitalocean.app/api"

  const [businessData, setBusinessData] = useState([])

  useEffect(() => {
      axios({
          url: `${url}/business/companies/`,
          method: 'get'
      }).then(response => {
          const DATA = response.data
          console.log(DATA)
          setBusinessData(DATA)
      })
  }, []);

  return (
    <div style={{ padding: 30 }}>
            <Paper style={{padding: 30}}>
                <Grid
                    container
                    spacing={3}
                >
                  
                  <Grid item xs={12}>
                    <Card sx={{ minWidth: 275 }}>
                      <CardContent>
                        <Typography sx={{ fontSize: 26 }} color="text.secondary" gutterBottom>
                          Cantidad de registros
                        </Typography>
                        <Typography variant="h5" component="div">
                          {businessData.length}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  {businessData.map((business)=>{
                    return (
                      <>
                        <Grid item xs={12}>
                          <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                              <Typography sx={{ fontSize: 26 }} color="text.secondary" gutterBottom>
                                {business.id}
                              </Typography>
                              <Typography variant="h5" component="div">
                                {business.name}
                              </Typography>
                              <Typography sx={{ fontSize: 26 }} color="text.secondary" gutterBottom>
                                {business.description}
                              </Typography>
                              <Typography variant="h5" component="div">
                                {business.symbol}
                              </Typography>
                              {
                                business.values.map((value)=> (
                                  <>
                                    <Typography sx={{ fontSize: 26 }} color="text.secondary" gutterBottom>
                                      {`${business.name} value`}
                                    </Typography>
                                    <Typography sx={{ fontSize: 26 }} color="text.secondary" gutterBottom>
                                      {`Id: ${value.id}`}
                                    </Typography>
                                    <Typography variant="h5" component="div">
                                      {value.value}
                                    </Typography>
                                  </>
                                ))
                              }
                            </CardContent>
                          </Card>
                        </Grid>


                      </>
                    )
                  })}
                </Grid>
            </Paper>
        </div>
  );
}

export default App;
